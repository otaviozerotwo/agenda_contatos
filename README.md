# ⭐ Agenda Contatos

- **API utilizada**: JSONPlaceholder
- **URL**: https://jsonplaceholder.typicode.com/users

## Descrição

Agenda Contatos é uma aplicação web desenvolvida para cadastrar, visualizar, editar e remover contatos em um interface simples e intuitiva.

## Próposito:

Esse projeto é uma refatoração de um repositório antigo, criado quando ainda estava dando meus primeiros passos no HTML/CSS. A intenção foi praticar conceitos fundamentais do desenvolvimento Front-end, incluindo manipulação do DOM, consumo de API's externas, organização de componentes visuais, gerenciamento de eventos e persistência de dados.

## Objetivo:

Após finalizar toda a refatoração, o objetivo é ter aplicado o máximo de conhecimento adiquirido em meus estudos recentes e consolidá-los para dar passos ainda maiores dentro da minha área de atuação (Desenvolvimento web). Além disso, oferecer uma experiência funcional para o usuário e demonstrar boas práticas de estruturação de código, semântica HTML, estilização com CSS e desenvolvimento com JavaScript moderno.

## Público alvo: 

Qualquer um que se interesse por desenvolvimento web, ou que queria conhecer meus trabalhos.

## Requisitos Funcionais 

### Cadastrar contato (AINDA NÃO IMPLEMENTADO)
A aplicação deve permitir que o usuário adicione um novo contato através do botão "Adicionar contato".

### Listar contatos
A aplicação deve exibir todos os contatos vindos da consulta a API externa via Fetch API.

### Exibir mensagem quando não houver contatos
A aplicação deve informar ao usuário quando a lista de contatos estiver vazio.

### Enviar email para contato
A aplicação deve permitir enviar uma mensagem de email para um contato através do botão "Enviar e-mail".

### Editar contato (AINDA NÃO IMPLEMENTADO)
A aplicação deve permitir a alteração dos dados de um contato já cadastrado.

### Remover contato (AINDA NÃO IMPLEMENTADO)
A aplicação deve permitir a exclusão de contatos cadastrados.

## Requisitos Não Funcionais

### Responsividade
A aplicação deve ser utilizável em dispositivos móveis e desktops.

### Acessibilidade
A aplicação deve ser navegável por teclado e compatível com leitores de tela.

### Usabilidade
As ações principais devem ser facilmente identificáveis e executadas pelo usuário.

### Desempenho
A listagem e manipulação de contatos deve ocorrer de forma rápida e sem travamentos perceptíveis.

### Compatibilidade
A aplicação deve funcionar nos principais navegadores modernos (Chrome, Edge, Firefox e Safari).

### Manutenibilidade
O código deve ser organizado em módulos, facilitando manutenção e evolução.

### Segurança básica
Os dados inseridos pelo usuário devem ser validados antes de serem armazenados ou exibidos. (AINDA NÃO IMPLEMENTADO)

### Semântica HTML
A aplicação deve utilizar elementos HTML semânticos para melhorar acessibilidade e SEO.

## Tecnologias Utilizadas

- HTML
- CSS
- JavaScript (Vanilla)
- Node.js
- Vite

## Estrutura do Projeto

```bash
📁 AGENDA_CONTATOS
├── 📁 design                 # Arquivos de design do projeto
├── 📁 src                    # Código-fonte da aplicação
│   ├── 📁 assets             # Recursos estáticos (imagens, ícones, etc.)
│   │
│   ├── 📁 css
│   │   ├── 📁 base
│   │   │   ├── 📄 fonts.css      # Configuração das fontes
│   │   │   ├── 📄 reset.css      # Reset de estilos do navegador
│   │   │   └── 📄 variables.css  # Variáveis CSS globais
│   │   │
│   │   ├── 📁 components
│   │   │   ├── 📄 button.css     # Estilos dos botões
│   │   │   ├── 📄 card.css       # Estilos dos cards de contato
│   │   │   ├── 📄 footer.css     # Estilos do rodapé
│   │   │   ├── 📄 header.css     # Estilos do cabeçalho
│   │   │   └── 📄 loader.css     # Estilos do componente de carregamento
│   │   │
│   │   └── 📄 main.css           # Arquivo principal de estilos
│   │
│   └── 📁 js
│       ├── 📄 api.js             # Comunicação com API externa
│       ├── 📄 cardRender.js      # Renderização dos cards de contato
│       ├── 📄 index.js           # Ponto de entrada da aplicação
│       └── 📄 utils.js           # Funções utilitárias
│
├── 📄 .env                   # Variáveis de ambiente
├── 📄 .env.example           # Exemplo de configuração das variáveis
├── 📄 .gitignore             # Arquivos ignorados pelo Git
├── 📄 index.html             # Estrutura principal da aplicação
├── 📄 package-lock.json      # Controle de versões das dependências
├── 📄 package.json           # Dependências e scripts do projeto
├── 📄 README-template.md     # Template utilizado para documentação
└── 📄 README.md              # Documentação do projeto
```


## Como Executar o Projeto

### Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina:

- Node.js (versão 18 ou superior)
- npm (geralmente instalado junto com o Node.js)
- Git (opcional, para clonar o repositório)

### Clonando o repositório

```bash
git clone https://github.com/otaviozerotwo/agenda_contatos
```

### Acessando a pasta do projeto

```bash
cd agenda_contatos
```

### Instalando as dependências

```bash
npm install
```

### Configurando as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto utilizando o arquivo `.env.example` como referência.

```bash
cp .env.example .env
```

### Iniciando a aplicação

```bash
npm run dev
```

Ou utilize o script configurado no arquivo `package.json`.

Após iniciar o servidor, acesse a URL exibida no terminal através do navegador.

## Uso

A aplicação permite gerenciar uma lista de contatos de forma simples e intuitiva.

### Adicionar um contato (AINDA NÃO IMPLEMENTADO)

1. Clique no botão **Adicionar contato**.
2. Preencha os dados solicitados.
3. Confirme a operação para salvar o contato.

### Visualizar contatos

Todos os contatos cadastrados são exibidos na área principal da aplicação.

### Editar um contato (AINDA NÃO IMPLEMENTADO)

1. Localize o contato desejado.
2. Clique na opção de edição.
3. Atualize as informações necessárias.
4. Salve as alterações.

### Excluir um contato (AINDA NÃO IMPLEMENTADO)

1. Localize o contato que deseja remover.
2. Clique na opção de exclusão.
3. Confirme a ação.

### Enviar email para um contato

1. Clique no botão **Enviar e-mail**.
2. Selecione seu aplicativo de envio de email favorito.

## Próximos Passos

Pretendo implementar as features que ainda estão pendentes (CADASTRO, EDIÇÃO E REMOÇÃO DE CONTATOS).

## Principais aprendizados

Nesse projeto minha maior dificuldade foi trabalhar com as funções assíncronas no fluxo de consumo da API externa.

Aprendi sobre tratamento de erros, envio de mensagens e componentização de código.


Por Otávio Cardoso