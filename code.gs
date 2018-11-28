function myFunction() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var lastRow = sheet.getLastRow();
  for(var i = 1;i<=lastRow; i++){
    if(!sheet.getRange(i, 2).getValue()){
      Logger.log(sheet.getRange(i,1).getValue());
      sheet.getRange(i, 2).setValue('TRUE');
    }
  }
}
