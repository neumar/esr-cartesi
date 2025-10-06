# EletroCoin: uma plataforma blockchain para incentivo à microgeração de energia renovável.

O sistema nacional de geração, distribuição e consumo de energia elétrica permite que a energia injetada por unidade consumidora com microgeração distribuída possa ser posteriormente compensada no consumo próprio ou em outras unidades consumidoras. O mercado de microgeração residencial, principalmente com energia fotovoltaica, tem mostrado um crescimento significativo nos últimos anos. Porém, ainda há muitos desafios neste setor, no que diz respeito a aspectos regulatórios, integração com a rede elétrica da concessionária e possibilidade de comercialização do excedente produzido nas unidades consumidoras.

O objetivo desse projeto é desenvolver uma plataforma blockchain para gerenciamento dos créditos de energia a fim de fomentar a geração de energia renovável no modelo de microgeração distribuída. Os desafios são muitos, mas os benefícios seriam de grande impacto ambiental e econômico. A complexidade do Sistema Interligado Nacional, que viabiliza a descentralização da geração e transmissão de energia no país, e os entraves regulatórios exigem um novo modelo de contabilização e negociação dos créditos de energia, tanto no ambiente regulado como no mercado livre de energia.

Esse projeto visa investigar como a tecnologia blockchain pode contribuir para soluções inovadoras neste setor. Esta etapa inicial consiste em modelar uma aplicação descentralizada para contabilizar os créditos de energia de microgeração com fontes renováveis e permitir a comercialização direta entre as unidades consumidoras-geradoras. O "eletrocoin" seria uma espécie de token fungível para representação digital dos créditos de energia, modelado de forma a incentivar a geração a partir de fontes renováveis e simplificar o intercâmbio de créditos de energia entre os submercados. Outro potencial benefício dessa plataforma seria, além de viabilizar a compensação dos créditos em serviços de terceiros que, de alguma forma, dependem do consumo de energia, tais como, recarga de veículos elétricos, aluguel de bicicletas elétricas, viagens em ônibus elétricos, etc.

Como há conflitos de interesse entre as partes envolvidas (concessionárias, consumidores, órgãos reguladores e de fiscalização) a tecnologia blockchain pode ser utilizada para:
- contribuir para maior transparência no compartilhamento das informações e maior confiança nas negociações;
- tornar a gestão de créditos mais eficiente;
- viabilizar a comercialização direta (descentralizada) entre os interessados;
- viabilizar a utilização dos créditos no consumo de serviços de terceiros.

Neste repositório, temos a implementação de uma aplicação descentralizada utilizando a tecnologia [Cartesi](https://cartesi.io/) para gerenciar a emissão e transferência de tokens que representam os crédidos de energia. Este token foi denominado EletroCoin (ELC).

Esta implementação é o trabalho prático final apresentado no curso "Introdução a Blockchain, Web 3 e Rollups" ofertado pela [Escola Superior de Redes da RNP](https://esr.rnp.br/) e ministrado pelo [Prof. Antonio "Guto" Rocha](http://www2.ic.uff.br/~arocha/) do IC/UFF.

## Referências, Tutoriais e Ferramentas

### Blockchain no Setor Elétrico

Alguns artidos científicos sobre aplicações blockchain no setor elétrico.

- [Blockchain technology in energy systems: A state-of-the-art review](https://doi.org/10.1049/blc2.12020).

- [Towards collective energy Community: Potential roles of microgrid and blockchain to go beyond P2P energy trading](https://doi.org/10.1016/j.apenergy.2022.119003).

- [Blockchain-Based Fully Peer-to-Peer Energy Trading Strategies for Residential Energy Systems](https://doi.org/10.1109/TII.2021.3077008).

### Cursos e Documentação sobre a Cartesi

- [Documentação](https://docs.cartesi.io/get-started) oficial da Cartesi.
- Curso free na Udemy: [The Cartesi dApp Developer Masterclass](https://www.udemy.com/course/cartesi-masterclass/).

## Configuração do Ambiente de Execução

Para executar a aplicação, precisamos configurar o ambiente operacioal como a seguir, a partir de uma máquina com sistema Ubuntu 25.04. Para ter um ambiente controlado, o melhor seria criar uma máquina virtual, por exemplo, com o [VirtualBox](https://www.virtualbox.org/).

Se preferir, temos um vídeo explicando todos os passos descritos a seguir.

### Atualizar o Sistema

```
sudo apt update
sudo apt upgrade
````

### Instalar o Docker

O Docker é uma plataforma de virtualização em nível de SO. Seugem os passos para instalação no Ubuntu, conforme a [documentação oficial](https://docs.docker.com/engine/install/ubuntu/).

```
sudo apt update

sudo apt install ca-certificates curl

sudo install -m 0755 -d /etc/apt/keyrings

sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc

sudo chmod a+r /etc/apt/keyrings/docker.asc

echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "${UBUNTU_CODENAME:-$VERSION_CODENAME}") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

sudo apt update

sudo apt install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```
Para conceder permissão ao seu usuário para executar o docker:

`sudo usermod -aG docker $USER`

Faça logout e login novamente, ou reinicie a máquina virtual para a permissão de grupo ter efeito.

Para verificar a versão instalada e testar a execução de um conteiner Docker.

```
docker version
docker run hello-world
```

:exclamation: Para instalar suporte a RISC-V no Docker.

```
docker run --privileged --rm tonistiigi/binfmt --install all
```

### Instalar o node.js

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
\. "$HOME/.nvm/nvm.sh"
nvm install 22
```

Para verificar as versões instaladas:
```
node -v
npm -v
```

### Instalar da Cartesi CLI
```
npm i -g @cartesi/cli
```

### Instalar o Comilador Solidity
```
npm install --global solc
```

### Instalar Metamask

Utilizar o [Metamask](https://metamask.io/download) para interagir com a aplicação blockchain.

### Comandos e Ferramentas de Apoio


- xxd - make a hex dump or do the reverse.
- [REMIX](https://remix.ethereum.org/): uma IDE para deploy de contratos inteligentes
- [deroll](https://deroll.dev/): biblioteca para desenvolvimento de aplicações com a Cartesi.
- [Foundry](https://getfoundry.sh/introduction/getting-started): kit de ferramentas para desenolvimenot de apilcações Ethereum. 
- [Contas e chaves privadas](https://getfoundry.sh/anvil/overview) do Anvil para testar localmente as aplicações Cartesi.  
- Run `cartesi address-book` to get the addresses of the EtherPortal and DAppAddressRelay contracts. Save these as constants in the index.ts file.
- The dApp address needs to be relayed strictly before withdrawal requests. To relay the dApp address, run `cartesi send dapp-address`

## Obter e Executar a Aplicação

```
git clone https://github.com/neumar/esr-cartesi.git
cd esr-cartesi
yarn
yarn run codegen
yarn add ethers viem
yarn add -D  @cartesi/rollups@1.4.5
chmod +x generate_abis.sh
./generate_abis.sh
cartesi build
cartesi run --epoch-length=1
```



