/*CMD
  command: ð Statistics
  help: 
  need_reply: 
  auto_retry_time: 
  folder: mainmenu
  answer: 
  keyboard: 
  aliases: 
CMD*/

var status = Libs.ResourcesLib.anotherChatRes("status", "global")
  .value()
  .toFixed(0)

let stat =
  "*ð Total  : " +
  status +
  " Users*" "\n\n ðBot made by @vishuftw ð"

Bot.sendMessage(stat)