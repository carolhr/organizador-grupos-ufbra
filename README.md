![Logo do Projeto](./logo.jpg)
# 📚 Organizador de Grupos Acadêmicos

Sistema automatizado para centralizar links de grupos de estudo, integrado diretamente com o Google Drive.

## 🚀 Como funciona?
O projeto utiliza um formulário **HTML/JavaScript** que se comunica com uma API desenvolvida em **Google Apps Script**. Ao enviar os dados, eles são salvos automaticamente em uma **Planilha Google**, que serve como nosso banco de dados.

## 🛠️ Tecnologias
- **Frontend:** HTML5, CSS3, JavaScript
- **Backend:** Google Apps Script (JavaScript)
- **Database:** Google Sheets
- **Hospedagem:** Google Sites

## 📖 Como replicar este projeto
1. Crie uma Planilha Google com as colunas: curso, disciplina, semestre, link.
2. No Apps Script da planilha, use o código contido no arquivo `script.js` deste repositório.
3. Publique como "App da Web" e substitua a URL no `index.html`.
