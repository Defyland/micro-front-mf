
# 🖥️ Micro Frontend Application - Module Federation

Este projeto é um micro frontend utilizando **Module Federation** com **React** e **Next.js**. Ele foi desenvolvido como parte de um desafio técnico que envolve criar uma aplicação composta por um app central e três micro-frontends: **Header**, **Footer**, e **Cards**, com interação entre eles.

## 🚀 Visão Geral

O projeto é dividido da seguinte forma:

- **App Central**: Coordena a interação entre os micro-frontends.
- **Header**: Exibe o cabeçalho da aplicação e mostra a lista de produtos selecionados através de um modal.
- **Footer**: Exibe um rodapé simples.
- **Cards**: Lista de produtos obtidos de uma API.

## 🔗 APIs Utilizadas

- **[Produtos API](https://dummyjson.com/docs/products)**: Utilizada para carregar a lista de produtos no micro-frontend `Cards`.
- **[Carrinho API](https://dummyjson.com/docs/carts)**: Gerencia os produtos selecionados, que são exibidos no modal do `Header`.

## 🛠️ Ferramentas e Tecnologias

- **React.js**: Construção da interface de usuário.
- **Webpack 5**: Utilizado com Module Federation para dividir a aplicação em micro-frontends.
- **Next.js**: Framework React utilizado para cada micro-frontend e o app central.
- **Zustand**: Gerenciamento de estado global.
- **TailwindCSS**: Para estilização e design responsivo.
- **Jest + React Testing Library**: Para testes unitários.

## 📂 Estrutura do Projeto

### App Central (central-app)
```plaintext
central-app/
├── public/
├── src/
│   ├── components/
│   ├── data/
│   │   ├── config/
│   │   ├── services/
│   │   └── useProducts.ts
│   ├── store/
│   ├── pages/
│   └── styles/
├── jest.config.ts
├── next.config.js
└── README.md
```

### Header App (header-app)
```plaintext
header-app/
├── public/
├── src/
│   ├── components/
│   │   └── Header.tsx
│   ├── pages/
│   └── styles/
├── jest.config.ts
├── next.config.js
└── README.md
```

### Footer App (footer-app)
```plaintext
footer-app/
├── public/
├── src/
│   ├── components/
│   │   └── Footer.tsx
│   ├── pages/
│   └── styles/
├── jest.config.ts
├── next.config.js
└── README.md
```

### Cards App (cards-app)
```plaintext
cards-app/
├── public/
├── src/
│   ├── components/
│   │   └── Cards.tsx
│   ├── pages/
│   └── styles/
├── jest.config.ts
├── next.config.js
└── README.md
```

## 🛠️ Scripts Disponíveis

Para facilitar o desenvolvimento, o projeto tem os seguintes scripts no arquivo `package.json`:

- `npm run start:all`: Inicia todas as aplicações (App Central e micro-frontends).
- `npm run build:all`: Constrói todas as aplicações para produção.
- `npm run test:all`: Executa os testes de todas as aplicações.

Além disso, é necessário instalar o **Concurrently** individualmente para que todos os serviços sejam executados em paralelo:

```bash
npm install -g concurrently
```

## 📝 Instruções de Instalação

### 1. Clone o Repositório
```bash
git clone https://github.com/seu-usuario/micro-frontend-module-federation.git
cd micro-frontend-module-federation
```

### 2. Instale as Dependências
Utilize o comando abaixo para instalar todas as dependências do projeto:
```bash
npm run install:all
```

### 3. Inicie o Projeto
Para iniciar todas as aplicações em modo de desenvolvimento:
```bash
npm run start:all
```

A aplicação estará disponível nas seguintes URLs:
- **App Central**: `http://localhost:3000`
- **Header**: `http://localhost:3001`
- **Footer**: `http://localhost:3002`
- **Cards**: `http://localhost:3003`

### 4. Compilando para Produção
Para gerar os artefatos para produção:
```bash
npm run build:all
```

## 🧪 Testes

O projeto utiliza **Jest** e **React Testing Library** para garantir a qualidade do código. Para rodar os testes:

```bash
npm run test:all
```


## 📸 Exemplo de Funcionamento

### Capturas de Tela

| Produtos Selecionados | Modal com produtos selecionados  | Footer |
|-----------|-----------|----------|
| <img width="1477" alt="Captura de Tela 2024-09-27 às 10 07 35" src="https://github.com/user-attachments/assets/b499eeaa-e05f-4bdf-875b-9d333176c49c"> | <img width="1473" alt="Captura de Tela 2024-09-27 às 10 07 45" src="https://github.com/user-attachments/assets/eccfb47d-95da-44ce-a31b-95634414a26a">|<img width="1303" alt="Captura de Tela 2024-09-27 às 10 08 19" src="https://github.com/user-attachments/assets/d452d8c5-3695-463b-9d9d-3c4fa9bb9609">|

| Sem produtos selecionados  | Uma resolução intermediária  | Modal sem produtos selecionados |
|-----------|-----------|----------|
| <img width="559" alt="Captura de Tela 2024-09-27 às 10 06 57" src="https://github.com/user-attachments/assets/06d00698-b116-4257-aaac-39038d4ce338"> | <img width="866" alt="Captura de Tela 2024-09-27 às 10 07 55" src="https://github.com/user-attachments/assets/b9244d1a-5ed8-4036-91d7-e2231b003e0d">| <img width="379" alt="Captura de Tela 2024-09-27 às 10 16 47" src="https://github.com/user-attachments/assets/d356184e-c637-4e7d-ac08-5e5ee0af844a"> |

## 📝 Instruções Adicionais

As imagens acima ilustram o comportamento do sistema em diferentes resoluções. As primeiras três são capturas de tela em modo de desktop, enquanto as últimas duas são visualizações em dispositivos móveis.

## 📄 Licença

Este projeto está licenciado sob a licença MIT.

---

### Criado por:
[**Allan Flávio** *(Defyland)*  ](https://github.com/Defyland)
