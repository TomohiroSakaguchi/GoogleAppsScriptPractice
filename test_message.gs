function sendMessage(body) {
  var cw = ChatWorkClient.factory({token:'Type token Here'});
  cw.sendMessageToMyChat(body);
}
