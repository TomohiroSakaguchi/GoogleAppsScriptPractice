function myFunction() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var range = sheet.getRange('B2');
  Logger.log(range.getValue());
}