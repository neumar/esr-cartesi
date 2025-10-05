# EletroCoin: uma plataforma blockchain para incentivo à microgeração de energia renovável.

O sistema nacional de geração, distribuição e consumo de energia elétrica permite que a energia injetada por unidade consumidora com microgeração distribuída possa ser posteriormente compensada no consumo próprio ou em outras unidades consumidoras. O mercado de microgeração residencial, principalmente com energia fotovoltaica, tem mostrado um crescimento significativo nos últimos anos. Porém, ainda há muitos desafios neste setor, no que diz respeito a aspectos regulatórios, integração com a rede elétrica da concessionária e possibilidade de comercialização do excedente produzido nas unidades consumidoras.

O objetivo desse projeto é desenvolver uma plataforma blockchain para gerenciamento dos créditos de energia a fim de fomentar a geração de energia renovável no modelo de microgeração distribuída. Os desafios são muitos, mas os benefícios seriam de grande impacto ambiental e econômico. A complexidade do Sistema Interligado Nacional, que viabiliza a descentralização da geração e transmissão de energia no país, e os entraves regulatórios exigem um novo modelo de contabilização e negociação dos créditos de energia, tanto no ambiente regulado como no mercado livre de energia. Esse projeto visa investigar como a tecnologia blockchain pode contribuir para soluções inovadoras neste setor. Esta etapa inicial consiste em modelar uma aplicação descentralizada para contabilizar os créditos de energia de microgeração com fontes renováveis e permitir a comercialização direta entre as unidades consumidoras-geradoras. O "eletrocoin" seria uma espécie de token fungível para representação digital dos créditos de energia, modelado de forma a incentivar a geração a partir de fontes renováveis e simplificar o intercâmbio de créditos de energia entre os submercados. Outro potencial benefício dessa plataforma seria, além de viabilizar a compensação dos créditos em serviços de terceiros que, de alguma forma, dependem do consumo de energia, tais como, recarga de veículos elétricos, aluguel de bicicletas elétricas, viagens em ônibus elétricos, etc.

Como há conflitos de interesse entre as partes envolvidas (concessionárias, consumidores, órgãos reguladores e de fiscalização) a tecnologia blockchain pode: a) contribuir para maior transparência no compartilhamento das informações e maior confiança nas negociações; b) tornar a gestão de créditos mais eficiente; c) viabilizar a comercialização direta (descentralizada) entre os interessados; d) a utilização dos créditos no consumo de serviços de terceiros.

Neste repositório, temos a implementação de uma aplicação descentralizada utilizando a tecnologia [Cartesi](https://cartesi.io/) para gerenciar a emissão e transferência de tokens que representam os crédidos de energia. Este token foi denominado EletroCoin (ELC).





Referências, tutoriais, comandos e ferramentas


https://deroll.dev/



jq - Command-line JSON processor

xxd - make a hex dump or do the reverse.

https://getfoundry.sh/introduction/getting-started




private keys
https://getfoundry.sh/anvil/overview

## Configuração do Ambiente de Execução

Para executar a aplicação, precisamos configura o ambiente operacioal como a seguir, a partir de uma máquina com sistema Ubuntu 