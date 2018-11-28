function testMessage() {
  var cw = ChatWorkClient.factory({token:'Type token here'});
  var body = 'Hello,World!';
  cw.sendMessageToMyChat(body);
}
