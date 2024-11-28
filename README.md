# 🍕 Restaurant Dashboard
`[en]`

This repository contains a dashboard for managing restaurant delivery orders, designed to facilitate tracking order statuses and key metrics. The project uses React, Tailwind CSS, and components from Shadcn-ui. It is configured to work without an external API, thanks to MSW, but can also be used with a NodeJS API.


### 🌐 Deploy
The project is hosted on Vercel, with environment variables configured to manage requests via MSW.

### 📝 Features

- Manage manager and restaurant profiles.
- Display metrics such as the number of completed or canceled orders and total revenue.
- List orders and update their delivery statuses.
- View detailed information about an order in interactive modals.

### 🛠️ Technologies Used

- React: Hooks, custom hooks, TanStack Query
- Tailwind CSS + Shadcn-ui
- MSW
- Zod
- Vite + Vitest
- Playwright


### 📚 Objectives

- Manage complex states using React Query.
- Simulate data and intercept HTTP requests with MSW.
- Create a responsive and accessible interface using the Compound Pattern.
- Validate and handle forms with Zod and React Hook Form.

### 🧑‍💻 How to Run the Project locally:

Clone:
```
git clone https://github.com/Wagnetto/restaurant-dashboard.git
```
Navigate to the project directory and install dependencies with `pnpm i`

To run the project with MSW intercepting requests and using mock data, start it with:

```
pnpm run dev:test
```
The project will be available at: `http://localhost:50789`



### 📂 Project Structure
```
src/
├── components/      # Reusable components
├── pages/           # Main pages
├── services/        # API configuration and MSW integration
├── styles/          # CSS
├── hooks/           # custom hooks
└── tests/           # Unit and E2E tests
```


### 💡 Next steps

- Expand test coverage.
- Implement and host a database and NodeJS API.

`[pt-BR]`

  ![image](https://github.com/user-attachments/assets/845a87b4-7f86-4211-a501-a64cd8089e56)


Este repositório contém um dashboard para gerenciamento de pedidos de entrega de um restaurante, projetado para facilitar o acompanhamento de status de pedidos e métricas importantes. O projeto utiliza React, Tailwind CSS e componentes do shadcn-ui. Ele está configurado para funcionar sem a necessidade de uma API externa, graças ao MSW, mas pode ser utilizado com API criada em NodeJS.

### 🌐 Deploy
O projeto está no Vercel, com as variáveis de ambiente configuradas para que as requisições sejam gerenciadas pelo MSW.

### 📝 Funcionalidades

Gerenciar perfis de gerente e restaurante.

Exibir métricas, como quantidade de pedidos efetuados, cancelados e renda total.

Listar pedidos e alterar seus status no processo de entrega.

Exibir detalhes de um pedido em modais interativos.

### 🛠️ Tecnologias Utilizadas

React: Hooks, custom hooks, tan-stack query

Tailwind CSS + Shadcn-ui

MSW

Zod

Vite + Vitest

Playwright


### 📚 Objetivos

Gerenciar estados complexos com React Query.

Simular dados e interceptar requisições HTTP com MSW.

Criar uma interface responsiva e acessível com uso de Compound  pattern

Validar e manipular formulários com Zod e React Hook Form.


### 🧑‍💻 Como rodar o projeto localmente:

Clone o projeto:
```
git clone https://github.com/Wagnetto/restaurant-dashboard.git
```
Acesse o diretório do projeto e instale as dependências com `pnpm i`

Para rodar com a interceptação do MSW e dados fictícios, rode com:

```
pnpm run dev:test
```
O projeto irá rodar na porta `http://localhost:50789`



### 📂 Estrutura do Projeto
```
src/
├── components/      # Componentes reutilizáveis
├── pages/           # Páginas principais
├── services/        # Configurações de API e integração com MSW
├── styles/          # CSS
├── hooks/           # Hooks customizados
└── tests/           # Testes unitários e E2E
```


### 💡 Próximos Passos

Ampliar a cobertura de testes.

Implementar e hospedar banco de dados e API em NodeJS

