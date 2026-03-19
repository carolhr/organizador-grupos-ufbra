# organizador-grupos-ufbra
Sistema de gerenciamento de links de grupos de estudo integrado com Google Sheets.

# 📚 Organizador de Grupos Acadêmicos - UFBRA

Este projeto foi desenvolvido para centralizar e organizar os links de grupos de estudo por disciplina e curso, facilitando a comunicação entre os alunos.

## 🛠️ Tecnologias Utilizadas
* **Google Sites:** Interface de usuário.
* **Google Apps Script (JavaScript):** Ponte de comunicação (API) entre o site e o banco de dados.
* **Google Sheets:** Banco de dados para armazenamento dos links.
* **HTML/CSS/JS:** Formulário de captura de dados.

## 🚀 Como Funciona
1. O aluno preenche o formulário no site.
2. O **JavaScript** envia os dados via `POST` para o **Google Apps Script**.
3. O Script identifica as informações e as salva em uma nova linha na **Planilha Google**.
4. A lista é exibida em tempo real no site através da publicação da planilha.

## 📌 Por que este projeto é relevante?
Este projeto demonstra habilidades em **Low-code**, **Integração de APIs** e **Gestão de Dados**, resolvendo um problema real de organização estudantil através da tecnologia.
