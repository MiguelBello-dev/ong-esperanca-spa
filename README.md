# 🕊️ ONG Esperança - Single Page Application

Uma Single Page Application (SPA) desenvolvida com Vanilla JavaScript para promover ações sociais, captação de voluntários e gestão de doações.

## 🚀 Visão Geral
O projeto simula a plataforma digital da **ONG Esperança**. A interface foi projetada com foco em alta performance e acessibilidade, utilizando renderização dinâmica do lado do cliente (Client-Side Rendering) sem a necessidade de recarregar a página.

## 🛠️ Tecnologias Utilizadas
* **HTML5:** Marcação semântica e formulários com validação nativa.
* **CSS3:** Estilização componentizada e CSS Grid Layout para responsividade.
* **Vanilla JavaScript (ES6+):** 
  * `ES6 Modules` (import/export) para arquitetura escalável.
  * `Template Literals` para controle de rotas dinâmicas.
* **Web Storage API:** Persistência de dados offline via `localStorage`.

## ⚙️ Como executar o projeto localmente

Como o projeto utiliza ES6 Modules, não é possível abrir o arquivo `index.html` diretamente no navegador devido a bloqueios de política de CORS. Siga os passos abaixo:

1. Faça o clone do repositório:
   \`git clone https://github.com/MiguelBello-dev/ong-esperanca-spa.git\`
2. Abra a pasta do projeto no **Visual Studio Code**.
3. Instale a extensão **Live Server**.
4. Clique com o botão direito no arquivo `index.html` e selecione **"Open with Live Server"**.

## 🔄 Versionamento e Contribuição
Este projeto segue rigorosamente os padrões corporativos de desenvolvimento ágil:
* **GitFlow:** Utilização das ramificações `main` (Produção), `develop` (Integração), `feature/` e `hotfix/`.
* **Conventional Commits:** Todas as mensagens de commit devem seguir o padrão convencional (feat, fix, refactor, chore, docs).
* **Semantic Versioning:** Releases mapeadas com tags (ex: v1.0.0).