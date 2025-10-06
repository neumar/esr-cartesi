import createClient from "openapi-fetch";
import { components, paths } from "./schema";
import { Wallet } from "./wallet/wallet";
import { stringToHex, getAddress, Address, hexToString, toHex } from "viem";

type AdvanceRequestData = components["schemas"]["Advance"];
type InspectRequestData = components["schemas"]["Inspect"];
type RequestHandlerResult = components["schemas"]["Finish"]["status"];
type RollupsRequest = components["schemas"]["RollupRequest"];
export type Notice = components["schemas"]["Notice"];
export type Payload = components["schemas"]["Payload"];
export type Report = components["schemas"]["Report"];
export type Voucher = components["schemas"]["Voucher"];

type InspectRequestHandler = (data: InspectRequestData) => Promise<void>;
type AdvanceRequestHandler = (
  data: AdvanceRequestData
) => Promise<RequestHandlerResult>;

const wallet = new Wallet();

const ERC20Portal = `0x9C21AEb2093C32DDbC53eEF24B873BDCd1aDa1DB`;

const rollupServer = process.env.ROLLUP_HTTP_SERVER_URL;
console.log("HTTP rollup_server url is " + rollupServer);

const handleAdvance: AdvanceRequestHandler = async (data) => {
  console.log("Received advance request data " + JSON.stringify(data));

  const sender = data["metadata"]["msg_sender"];
  const payload = data.payload;

  if (sender.toLowerCase() === ERC20Portal.toLowerCase()) {
    // Handle deposit
    const deposit = wallet.processErc20Deposit(payload);
    await createNotice({ payload: stringToHex(deposit) });
  } else {
    // Handle transfer or withdrawal
    try {
      const { operation, erc20, from, to, amount } = JSON.parse(
        hexToString(payload)
      );

      if (operation === "transfer") {
        const transfer = wallet.transferErc20(
          getAddress(from as Address),
          getAddress(to as Address),
          getAddress(erc20 as Address),
          BigInt(amount)
        );

        await createNotice({ payload: stringToHex(transfer) });
      } else if (operation === "withdraw") {
        const voucher = wallet.withdrawErc20(
          getAddress(from as Address),
          getAddress(erc20 as Address),
          BigInt(amount)
        );
        
        await createVoucher(voucher);
      } else {
        console.log("Unknown operation");
      }
    } catch (error) {
      console.error("Error processing payload:", error);
    }
  }

  return "accept";
};

const handleInspect: InspectRequestHandler = async (data) => {
  console.log("Received inspect request data " + JSON.stringify(data));

  try {
    const payloadString = hexToString(data.payload);

    const [address, erc20] = payloadString.split('/');

    const balance = wallet.getAccountBalance(address as Address, erc20 as Address);


    if (balance === undefined) {
      throw new Error("ERC20 balance is undefined");
    }

    const balmsg = `Balance of token ${erc20} for user address ${address} is ${balance}`;

    await createReport({ payload: stringToHex(balmsg) });
  } catch (error) {
    const error_message = `Error processing inspect payload:", ${error}`;

    await createReport({ payload: stringToHex(error_message) });
  }
};

const createNotice = async (payload: Notice) => {
  console.log("creating notice with payload", payload);

  await fetch(`${rollupServer}/notice`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
};

const createVoucher = async (payload: Voucher) => {
  await fetch(`${rollupServer}/voucher`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
};

const createReport = async (payload: Report) => {
  await fetch(`${rollupServer}/report`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
};

const main = async () => {
  const { POST } = createClient<paths>({ baseUrl: rollupServer });
  let status: RequestHandlerResult = "accept";
  while (true) {
    const { response } = await POST("/finish", {
      body: { status },
      parseAs: "text",
    });

    if (response.status === 200) {
      const data = (await response.json()) as RollupsRequest;
      switch (data.request_type) {
        case "advance_state":
          status = await handleAdvance(data.data as AdvanceRequestData);
          break;
        case "inspect_state":
          await handleInspect(data.data as InspectRequestData);
          break;
      }
    } else if (response.status === 202) {
      console.log(await response.text());
    }
  }
};

main().catch((e) => {
  console.log(e);
  process.exit(1);
});
