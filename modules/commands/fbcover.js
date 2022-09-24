module.exports.config = {
    name: "fbcover",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "tdunguwu",
    description: "Tạo ra một avt trên taoanhdep.",
    commandCategory: "image",
    cooldowns: 0,
    dependencies: {
        "fs-extra": "",
        "request": "",
        "axios": ""
    }
};
module.exports.run = async function ({ api, args, event, permssion }) {
    const request = require('request');
  const fs = require("fs-extra")
  const axios = require("axios")
  const { threadID, messageID, senderID, body } = event;
   if (this.config.credits != 'tdunguwu') {
        console.log('\x1b[33m[ WARN ]\x1b[37m » Đổi credits con cặc đjt mẹ mày luôn đấy con chó:))');
        return api.sendMessage('[ WARN ] Phát hiện người điều hành bot ' + global.config.BOTNAME + ' đổi credits modules "' + this.config.name + '"', threadID, messageID);
      } 
	 else{
if (args[0] == "list") {
var listAnime = (await axios.get(`https://taoanhdep.van-diendien1.repl.co/`)).data
      var lengthID = [];
    var i =1
    var msg = []
    var msgg = []
    for (let id of listAnime) { 
        lengthID.push(id.imgAnime)
        const text3 = id.imgAnime.split("s0/").pop()
        const text1 = text3.substr(0, text3.indexOf('.')); 

        msgg.push(text1.charAt(0).toUpperCase() + text1.slice(1).replace("-", " "))
    }           
    var page = 1;
        page = parseInt(args[1]) || 1;
        page < -1 ? page = 1 : "";
    var limit = 15;
    var msg = "==== DANH SÁCH NHÂN VẬT ===\n\n";
    var numPage = Math.ceil(msgg.length / limit);
      for (var i = limit * (page - 1); i < limit * (page - 1) + limit; i++) {
        if (i >= msgg.length) break;
          let name = msgg[i];                  
          msg +=` » ID: ${i+1}. ${name}\n`;             
      }
    msg += `\n» Trang ${page}/${numPage}\n`
    msg += `» Hiện tại có ${(lengthID.length)} nhân vật\n`
    return api.sendMessage(msg, threadID)}
  else if (senderID == api.getCurrentUserID()) return;
api.sendMessage(`reply tin nhắn để chọn nhân vật`,event.threadID, (err, info) => {
     return global.client.handleReply.push({
        type: "characters",
        name: this.config.name,
        author: senderID,
        tenchinh: args.join(" ").toUpperCase(),
        messageID: info.messageID
      });
  },event.messageID);
}
}
module.exports.handleReply = async function ({ event, api, handleReply }) {
	const axios = require("axios");
    const fs = require("fs-extra");
    const request = require("request");
    if (handleReply.author != event.senderID) return;
    const { threadID,messageID,senderID} = event;
    
       const noidung = handleReply.noidung;
    switch (handleReply.type) {
        case "characters": {
            api.unsendMessage(handleReply.messageID);
            return api.sendMessage(`Bạn đã chọn nhân vật là ${event.body}\n\nReply tin nhắn để chọn chữ nền`, threadID, function(err, info) {
            global.client.handleReply.push({
                    type: "noidung",
                    name: "fbcover",
                    author: senderID,
                    characters: event.body,
                    messageID: info.messageID
                });
            }, messageID)
        }
		
        case "noidung": {
            const text = handleReply.text;
            api.unsendMessage(handleReply.messageID);
            return api.sendMessage(`Bạn đã chọn chữ nền là ${event.body}\n\nReply tin nhắn này để chọn nội dung!`, threadID, function(err, info) {
                 global.client.handleReply.push({
                    type: "create",
                    name: "fbcover",
                    author: senderID,
                    characters: handleReply.characters,
                   noidung: event.body,
                    messageID: info.messageID
                });
            }, messageID)
        }
        case "create": {
            var nhanvat = handleReply.characters;
            var noidung1 = handleReply.noidung;
            var noidung2 = event.body;
            api.unsendMessage(handleReply.messageID);
            var callback = () => api.sendMessage({body:``,attachment: fs.createReadStream(__dirname + "/cache/tad.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/tad.png"),event.messageID); 
       return request(encodeURI(`https://www.phamvandienofficial.xyz/fbcover/v2?name=${noidung1}&id=${nhanvat}&subname=${noidung2}`)).pipe(fs.createWriteStream(__dirname+'/cache/tad.png')).on('close',() => callback());    
    }
   }
 }
 
