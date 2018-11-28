function chatworkPost() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var lastRow = sheet.getLastRow();
  for(var i = 1;i<=lastRow; i++){
    if(!sheet.getRange(i, 2).getValue()){
      var body = sheet.getRange(i,1).getValue();
      sendMessage(body);
      sheet.getRange(i, 2).setValue('TRUE');
      break;
    }
  }
  
  if(i>=lastRow){
    sheet.getRange(1, 2, lastRow).clearContent();
  }
}
