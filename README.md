# 🍕 Restaurant Dashboard

`[pt-BR]`

Este repositório contém um dashboard para gerenciamento de pedidos de entrega de um restaurante, projetado para facilitar o acompanhamento de status de pedidos e métricas importantes. O projeto utiliza React, Tailwind CSS e componentes do Shadcn-ui. Ele está configurado para funcionar sem a necessidade de uma API externa, graças ao MSW, mas pode ser utilizado com uma API criada em NodeJS.

## 📝 Funcionalidades

- Gerenciar perfis de gerente e restaurante.
- Exibir métricas, como quantidade de pedidos efetuados, cancelados e renda total.
- Listar pedidos e alterar seus status no processo de entrega.
- Exibir detalhes de um pedido em modais interativos.

## 🛠️ Tecnologias Utilizadas

- React: Hooks, custom hooks, TanStack Query
- Tailwind CSS + Shadcn-ui
- MSW
- Zod
- Vite + Vitest
- Playwright

## 📚 Objetivos

- Gerenciar estados complexos com React Query.
- Simular dados e interceptar requisições HTTP com MSW.
- Criar uma interface responsiva e acessível com uso de Compound Pattern.
- Validar e manipular formulários com Zod e React Hook Form.

## 🧑‍💻 Como rodar o projeto localmente

1. Clone o projeto:

   ```
   git clone https://github.com/Wagnetto/restaurant-dashboard.git
   ```

2. Acesse o diretório do projeto e instale as dependências:

   ```
   cd restaurant-dashboard
   pnpm install
   ```

3. Para rodar o projeto com MSW interceptando requisições e usando dados fictícios, inicie com:

   ```
   pnpm run dev:test
   ```

4. O projeto estará disponível em: `http://localhost:50789`

5. Caso deseje executar plenamente as ações de mutação e não usar os mocks, será preciso baixar a API disponível [aqui](https://github.com/Wagnetto/restaurant-dashboard-api).
   E então rodar o projeto:

```
  pnpm run dev
```

Estará disponível na porta `http://localhost:5173/`

## 💡 Próximos Passos

- Ampliar a cobertura de testes.
- Implementar meu próprio banco de dados e API em NodeJS.

`[en]`

# 🍕 Restaurant Dashboard

This repository contains a dashboard for managing delivery orders in a restaurant, designed to streamline order status tracking and provide key metrics. The project uses React, Tailwind CSS, and Shadcn-ui components. It is configured to work without an external API, thanks to MSW, but can be integrated with an API built in NodeJS.

## 📝 Features

- Manage manager and restaurant profiles.
- Display metrics such as total orders, canceled orders, and total revenue.
- List orders and update their status in the delivery process.
- Show order details in interactive modals.

## 🛠️ Technologies Used

- React: Hooks, custom hooks, TanStack Query
- Tailwind CSS + Shadcn-ui
- MSW
- Zod
- Vite + Vitest
- Playwright

## 📚 Objectives

- Manage complex states with React Query.
- Simulate data and intercept HTTP requests using MSW.
- Create a responsive and accessible interface with the Compound Pattern.
- Validate and handle forms using Zod and React Hook Form.

## 🧑‍💻 How to Run the Project Locally

1. Clone the repository:

   ```
   git clone https://github.com/Wagnetto/restaurant-dashboard.git
   ```

2. Navigate to the project directory and install dependencies:

   ```
   cd restaurant-dashboard
   pnpm install
   ```

3. To run the project with MSW intercepting requests and using mock data, start it with:

   ```
   pnpm run dev:test
   ```

4. The project will be available at: `http://localhost:50789`

5. If you want to fully execute mutation actions and not use mocks, you will need to download the API available [here](https://github.com/Wagnetto/restaurant-dashboard-api).  
   Then, run the project:

   ```
   pnpm run dev
   ```

   It will be available at `http://localhost:5173/`

## 💡 Next Steps

- Expand test coverage.
- Implement my own database and API in NodeJS.
