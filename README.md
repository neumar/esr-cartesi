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

## Referências, Tutoriais e Rerramentas

### Blockchain no Setor Elétrico

Alguns artidos científicos sobre aplicações blockchain no setor elétrico.

- [Blockchain technology in energy systems: A state-of-the-art review](https://doi.org/10.1049/blc2.12020).

- [Towards collective energy Community: Potential roles of microgrid and blockchain to go beyond P2P energy trading](https://doi.org/10.1016/j.apenergy.2022.119003).

- [Blockchain-Based Fully Peer-to-Peer Energy Trading Strategies for Residential Energy Systems](https://doi.org/10.1109/TII.2021.3077008).

### Cursos e Documentação sobre a Cartesi

- [Documentção](https://docs.cartesi.io/get-started) oficial da Cartesi.
- Curso free na Udemy: [The Cartesi dApp Developer Masterclass](https://www.udemy.com/course/cartesi-masterclass/).
- https://deroll.dev/
- jq - Command-line JSON processor
- xxd - make a hex dump or do the reverse.
- https://getfoundry.sh/introduction/getting-started




private keys
https://getfoundry.sh/anvil/overview

## Configuração do Ambiente de Execução

Para executar a aplicação, precisamos configurar o ambiente operacioal como a seguir, a partir de uma máquina com sistema Ubuntu 25.04. Para ter um ambiente controlodo, o melhor seria criar uma máquina virtual, por exemplo, com o [VirtualBox](https://www.virtualbox.org/).

Se preferir, temos um vídeo explicando todos os passos descritos a seguir.

### Atualização do Sistema

```
sudo apt update
sudo apt upgrade
````

### Instalação do Docker

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

sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```
Para conceder permissão ao seu usuáio para executar o docker:

`sudo usermod -aG docker $USER`

Faça logout e login novamente, ou reinicie a máquina virtual para a permissão de grupo ter efeito.

Para verificar a versão instalada e testar a execução de um conteiner Docker.

```
docker version
docker run hello-world
````

:exclamation: Para instalar suporte a RISC-V no Docker.
`docker run --privileged --rm tonistiigi/binfmt --install all``


### Instalação do node.js

```
# Download and install nvm:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash

# in lieu of restarting the shell
\. "$HOME/.nvm/nvm.sh"

# Download and install Node.js:
nvm install 22

# Verify the Node.js version:
node -v # Should print "v22.20.0".

# Verify npm version:
npm -v # Should print "10.9.3".
```






