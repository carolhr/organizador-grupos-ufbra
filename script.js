function doPost(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheets()[0]; // Pega a primeira aba da planilha automaticamente
    
    var curso = e.parameter.curso;
    var disciplina = e.parameter.disciplina;
    var semestre = e.parameter.semestre;
    var link = e.parameter.link;
    var data_envio = new Date();
    
    sheet.appendRow([curso, disciplina, semestre, link, data_envio]);
    
    return ContentService.createTextOutput("Sucesso").setMimeType(ContentService.MimeType.TEXT);
  } catch (erro) {
    return ContentService.createTextOutput("Erro: " + erro).setMimeType(ContentService.MimeType.TEXT);
  }
}
