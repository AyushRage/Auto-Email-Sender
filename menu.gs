function onOpen() {
  var shareType = ScriptProperties.getProperty('shareType');
  if (!(shareType)) {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var menuEntries = [];
    menuEntries.push({name: "Send emails", functionName: "sendEmails"});
    ss.addMenu("SendEmails", menuEntries);
  } else {
    initialize();
  }
}
