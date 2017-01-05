# Legal One - Pacote de melhorias (não oficial)

Extensão do Google Chrome que adiciona funcionalidades e melhora a usabilidade no sistema de gestão jurídica, [Legal One](https://www.thomsonreuters.com.br/pt/juridico/legal-one.html). 
Esta é uma ferramenta gratuita, de código aberto, desenvolvida pela comunidade e não possui nenhuma 
ligação com a [Thomson Reuters](www.thomsonreuters.com.br).

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Sobre o Legal One](#sobre-o-legal-one)
- [Produtos suportados:](#produtos-suportados)
- [Instalando a extensão no Chrome](#instalando-a-extens%C3%A3o-no-chrome)
- [Introdução da versão 1.16 em vídeo no YouTube:](#introdu%C3%A7%C3%A3o-da-vers%C3%A3o-116-em-v%C3%ADdeo-no-youtube)
- [Funcionalidades](#funcionalidades)
  - [Design mais limpo, com cores menos vibrantes:](#design-mais-limpo-com-cores-menos-vibrantes)
  - [Barra de salvar fixa](#barra-de-salvar-fixa)
  - [Menu vertical](#menu-vertical)
  - [Favoritos](#favoritos)
  - [Maximizar e desmaximizar](#maximizar-e-desmaximizar)
  - [Pesquisa dentro das telas de Tabelas de Sistema e Configurações](#pesquisa-dentro-das-telas-de-tabelas-de-sistema-e-configura%C3%A7%C3%B5es)
- [Sugerindo uma nova funcionalidade](#sugerindo-uma-nova-funcionalidade)
- [Rodando localmente](#rodando-localmente)
- [Compatibilidade](#compatibilidade)
- [Licença e termos de uso](#licen%C3%A7a-e-termos-de-uso)
- [Contribuindo](#contribuindo)
- [Autor](#autor)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Sobre o Legal One

O [Legal One](https://www.thomsonreuters.com.br/pt/juridico/legal-one.html) é um sistema online de gestão de jurídica, tanto para escritórios de advocacia quanto para departamentos jurídicos de empresas.
O Legal One oferece controle de processos, serviços, contratos, agenda, timesheet, financeiro, workflow e outros módulos. 

O Legal One Pacote de melhorias é uma extensão para o Google Chrome que adiciona funcionalidades e melhora a usabilidade.

## Produtos suportados:

- [x] [Legal One Firm (Novajus)](https://www.thomsonreuters.com.br/pt/juridico/legal-one/firm.html)
- [ ] [Legal One Corporate (LegalCore)](https://www.thomsonreuters.com.br/pt/juridico/legal-one/corporate.html) *planejado*

## Instalando a extensão no Chrome

Instale pelo endereço: [https://chrome.google.com/webstore/detail/legal-one-pacote-de-melho/dilogbnjbadifdhdphnncpfndfocidle](https://chrome.google.com/webstore/detail/legal-one-pacote-de-melho/dilogbnjbadifdhdphnncpfndfocidle)

## Introdução da versão 1.16 em vídeo no YouTube:

[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/WhrOQ2XwRRE/0.jpg)](https://www.youtube.com/watch?v=WhrOQ2XwRRE&feature=youtu.be)

## Funcionalidades

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

### Design mais limpo, com cores menos vibrantes:

Foi removida a barra laranja e vários outros detalhes, tornando o LegalOne visualmente mais atrativo:

![image](https://i.imgur.com/dfV0a4p.png)

### Barra de salvar fixa

A barra de salvar dos formulários agora é fixa e sempre visível:

![image](https://i.imgur.com/x6RLRJZ.png)

### Menu vertical

O menu agora possui as seguintes funcionalidades:

- O menu agora é pesquisável. Apertar `shift` duas vezes foca no menu
- As ações, como criar processo, agora fazem parte do menu
- Navegação pelo teclado e enter
- O local onde o usuário está aparece marcado

![image](https://i.imgur.com/ABak1QR.png)

### Favoritos

No menu, agora existem as seguintes funcionalidades com relação a favoritos:

- É possível marcar qualquer ítem do menu como favorito
- Os ítens favoritos aparecem no topo do menu
- É possível abrir qualquer favorito usando `Alt + [número]`. Exemplo. O primeiro favorito abre com `Alt + 1`, o segundo com `Alt + 2` e assim sucessivamente.

![image](https://i.imgur.com/YmFLJgc.png)

![image](https://i.imgur.com/fGaiLQa.png)

### Maximizar e desmaximizar

Muitas vezes o LegalOne possui exibe mais informações do que cabe no monitor, para resolver isso, agora as telas são maximizáveis, ocultando toda a informação ao redor.
Para maximizar uma tela, clique no ícone no cabeçalho das telas, ou digite `Ctrl + m`:

![image](https://i.imgur.com/EFVYNIK.png)

Agora a pesquisa de obrigações ocupa a tela inteira:

![image](https://i.imgur.com/AsUcvdR.png)

### Pesquisa dentro das telas de Tabelas de Sistema e Configurações

Agora as telas de Tabelas de Sistema e Configurações possuem pesquisa

![image](https://i.imgur.com/yxYYjFf.png)

## Sugerindo uma nova funcionalidade

Para sugerir uma funcionalidade, é necessário ter uma [conta no GitHub](https://github.com) e [cadastrar uma issue aqui](https://github.com/andrerpena/legalone-pacote-melhorias/issues/new).

## Rodando localmente

Para rodar localmente o LPM clone este repositório (ou o seu fork):

```
git clone https://github.com/andrerpena/legalone-pacote-melhorias.git pasta-local-lpm
```

O LPM utiliza Webpack e Babel para transpilar o javascript (ES6 e [Vue](https://vuejs.org/)) e gerar o bundle final que é importado na extensão do chrome. Para gerar o arquivo javascript é necessário ter o [Node](https://nodejs.org/en/download/current) instalado.
Com o Node já instalado, abra o seu prompt de comando, navegue até a pasta com o código-fonte do LPM e execute o comando abaixo para instalar as dependências do projeto:
```
npm install
```

Agora é necessário gerar o arquivo de bundle que será importado pela extensão:

```
npm run build
```

Agora você só precisa carregar a extensão localmente no seu google chrome:
1. Abra a página de extensões do chrome colando na barra de endereço `chrome://extensions`.
2. Marque o checkbox <b>Modo desenvolvedor</b>.
3. Clique em <b>Carregar extensão expandida</b> e navegue até a pasta com o código fonte do LPM. 

Se você acessar o LegalOne agora, a extensão vai automaticamente entrar em ação.

Sempre que você fizer uma alteração no código fonte da extensão é necessário "recompilar" o javascript. Para facilitar este processo, você pode executar o watch que irá monitorar todas as alterações feitas no códig-fonte e irá atualizar o bundle automaticamente:
```
npm run watch
```
Enquanto este processo estiver rodando, o javascript será atualizado automaticamente.

Ainda assim, sempre que você realizar alterações é necessário dizer para o google chrome que ele deve atualizar a extensão. Você vai encontrar um link <b>Atualizar (Ctrl + R)</b> na página de extensões (`chrome://extensions/`) que atualiza a extensão.

## Compatibilidade

O LPM atualmente só é compatível com o Novajus, rodando o Chrome.

## Licença e termos de uso

O LPM é disponibilizado gratuitamente sob a licença MIT

## Contribuindo

Contribuições são bem vindas. É só fazer um pull-request :).

## Autor

Feito com :heart: por André Pena. Meu website: http://andrerpena.me

Outros contribuidores:

- Israel Valverde
