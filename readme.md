# LegalOne - Pacote de melhorias (não oficial)

A adiciona funcionalidades e melhora a usabilidade do LegalOne. Esta é uma ferramenta open-source desenvolvida pela comunidade e não possui ligação com a funcionalidade com a Thomson Reuters</b>.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Rodando localmente](#rodando-localmente)
- [Compatibilidade](#compatibilidade)
- [Funcionalidades](#funcionalidades)
- [Sugerindo uma nova funcionalidade](#sugerindo-uma-nova-funcionalidade)
- [Licença e termos de uso](#licen%C3%A7a-e-termos-de-uso)
- [Contribuindo](#contribuindo)
- [Autor](#autor)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

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

## Funcionalidades

- Menu com pesquisa inteligente: O menu foi movido para a esquerda. Todos os submenus e ações foram movidas para dentro do menu. Agora é possível pesquisar no menu.
- Barra de botões flutuante: Ao salvar um registro, a barra de botões no rodapé agora é flutuante.

## Sugerindo uma nova funcionalidade

Para sugerir uma funcionalidade, é necessário ter uma [conta no GitHub](https://github.com) e [cadastrar uma issue aqui](https://github.com/andrerpena/legalone-pacote-melhorias/issues/new).

## Licença e termos de uso

O LPM é disponibilizado gratuitamente sob a licença MIT

## Contribuindo

Contribuições são bem vindas. É só fazer um pull-request :).

## Autor

Feito com :heart: por André Pena.

Outros contribuidores:

- Israel Valverde