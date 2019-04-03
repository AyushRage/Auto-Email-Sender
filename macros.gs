function send() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange('F5').activate();
  sendEmails();
};
