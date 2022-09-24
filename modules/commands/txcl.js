module.exports.config = {
	name: "txcl",
	version: "0.0.1",
	hasPermssion: 0,
	credits: "tdunguwu mod game ",
	description: "Chơi tài xỉu",
	commandCategory: "Game",
	usages: "",
	cooldowns: 0
};		

module.exports.run = async function ({ api, event, args, Currencies, Users }) {
		  const { threadID, messageID, senderID } = event;
  if (!args[0]) return api.sendMessage("Bạn sử dụng chưa đúng cách hãy sử dụng lại ~txcl [game] số tiền ", threadID, messageID);
  const dataMoney = await Currencies.getData(senderID);
    const moneyUser = dataMoney.money;
  const choose = args[0]
    if (choose.toLowerCase() != 'tài' && choose.toLowerCase() != 'xỉu' && choose.toLowerCase() != 'chẵn' && choose.toLowerCase() != 'lẻ') return api.sendMessage("Bạn sử dụng chưa đúng cách hãy sử dụng lại ~txcl [game] số tiền", threadID, messageID)
    const money = args[1]
    if (money < 50 || isNaN(money)) return api.sendMessage("Mức đặt cược của bạn không phù hợp hoặc dưới 50$!!!", threadID, messageID);
    if (moneyUser < money) return api.sendMessage(`Số dư bạn không đủ ${money}$ để có thể chơi`, threadID, messageID);
    const typ2 = ['chẵn', 'lẻ'];
  const random2 = typ2[Math.floor(Math.random() * typ2.length)];
   const typ = ['tài', 'xỉu'];
  const random = typ[Math.floor(Math.random() * typ.length)];  
   var n1 = [1,2,3];
    var n2 =[4,5,6];
    var n3 = [ 7, 8, 9];
    var n0 =[0];
  if (random == 'tài') {
    var defl_number = n1[Math.floor(Math.random() * n1.length)];
  }
  if (random == 'xỉu') {
    var defl_number = n2[Math.floor(Math.random() * n2.length)];
  }
  if (random2 == 'chẵn') {
    var defl_number2 = n3[Math.floor(Math.random() * n3.length)];
  }
  if (random2 == 'lẻ') {
    var defl_number2 = n0[Math.floor(Math.random() * n0.length)];
  }
  let number = [];
var i = 0;
for (i = 0; i < 3; i++) {
number[i] = Math.floor(Math.random() * 6) +1;
}
 if (choose == 'tài' || choose == 'xỉu') { 
if (choose == random) {
  	await Currencies.increaseMoney(senderID, parseInt(money * 3));
  return api.sendMessage(`»Bạn Đã Thắng\n»Kết Quả Là: ${random}\n»Bạn Nhận Được: ${money * 3}`,event.threadID, event.messageID)
} else {
  	await Currencies.decreaseMoney(senderID, parseInt(money));
      return api.sendMessage(`»Bạn Đã Thua\n»Kết Quả Là: ${random}\n»Bạn Mất ${money}`,event.threadID, event.messageID)}
 }
 if (choose == 'chẵn' || choose == 'lẻ') {
if (choose == random2) {
  	await Currencies.increaseMoney(senderID, parseInt(money * 3));
  return api.sendMessage(`»Bạn Đã Thắng\n»Kết Quả Là: ${random}\n»Bạn Nhận Được ${money * 3}`,event.threadID, event.messageID)
} else {
   await Currencies.decreaseMoney(senderID, parseInt(money));  
  return api.sendMessage(`»Bạn Đã Thua\n»Kết Quả Là: ${random}\n»Bạn Mất ${money}`,event.threadID, event.messageID)
          }
}
}