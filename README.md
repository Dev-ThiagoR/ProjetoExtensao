# Magic Front Platform 🚀

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)

## 📖 Sobre o Projeto

**Magic Front Platform** é uma plataforma web educacional interativa, desenvolvida como uma aplicação full-stack. [cite_start]O objetivo principal é ensinar programação de forma moderna e acessível para adolescentes do ensino médio, colocando em prática a visão do projeto de extensão "Apoio à Programação para Adolescentes do Ensino Médio"[cite: 6].

[cite_start]O conteúdo didático é uma adaptação digital do e-book **"Magic Front - O guia moderno do frontend"**[cite: 92]. [cite_start]A plataforma transforma os módulos do livro sobre HTML [cite: 141, 157][cite_start], CSS [cite: 1026][cite_start], Javascript [cite: 2163][cite_start], React [cite: 2288][cite_start], Carreira [cite: 2357] [cite_start]e Git [cite: 2429] em uma experiência de aprendizado online e estruturada.

## ✨ Funcionalidades Principais

- **Conteúdo Interativo:** Apresenta o material do e-book em um formato web, com planos para incluir exercícios de código interativos.
- **Autenticação de Usuários:** Sistema de cadastro e login seguro com JWT para que os alunos possam salvar seu progresso.
- **Dashboard Dinâmico:** Um painel principal que organiza o curso em módulos, com ícones, barra de progresso e uma lista de lições em formato de "acordeão" expansível.
- **Estrutura Monorepo:** Código do backend e frontend organizados no mesmo repositório para facilitar o desenvolvimento e a manutenção.

## 🛠️ Tecnologias Utilizadas

O projeto utiliza a stack **MERN**:
- **Frontend:** **React** (com Vite) para uma interface de usuário dinâmica e reativa.
- **Backend:** **Node.js** com **Express.js**, servindo uma API RESTful para gerenciar conteúdo e usuários.
- **Banco de Dados:** **MongoDB** (com Atlas) para armazenar os dados da aplicação de forma flexível.
- **Autenticação:** **JSON Web Tokens (JWT)**.
- **Bibliotecas Notáveis:** Mongoose, Bcrypt.js, React Router, React Icons, Axios.

## ⚙️ Instalação e Configuração

Para rodar este projeto localmente, siga os passos abaixo.

### Pré-requisitos
- [Node.js](https://nodejs.org/) (versão 20.x ou superior)
- [Git](https://git-scm.com/)
- Uma conta no [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) para obter a string de conexão.

### Passos

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git](https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git)
    cd magic-front-platform
    ```

2.  **Configure o Backend:**
    ```bash
    # Navegue até a pasta do backend
    cd backend

    # Instale as dependências
    npm install

    # Crie um arquivo .env na raiz da pasta /backend
    # e adicione suas variáveis de ambiente:
    MONGO_URI=SUA_STRING_DE_CONEXAO_DO_MONGODB_ATLAS
    JWT_SECRET=SEU_SEGREDO_SUPER_SECRETO_PARA_JWT
    ```

3.  **Configure o Frontend:**
    ```bash
    # Volte para a raiz e navegue até a pasta do frontend
    cd ../frontend

    # Instale as dependências
    npm install
    ```

## 🚀 Rodando a Aplicação

Você precisará de **dois terminais** abertos para rodar a aplicação completa.

1.  **Terminal 1 (Backend):**
    ```bash
    # Na pasta /backend
    npm run dev
    ```
    O servidor da API estará rodando em `http://localhost:5000`.

2.  **Terminal 2 (Frontend):**
    ```bash
    # Na pasta /frontend
    npm run dev
    ```
    A aplicação React estará acessível em `http://localhost:5173` (ou outra porta indicada no terminal).

##  STATUS DO PROJETO

🚧 **Em Desenvolvimento** 🚧

---
