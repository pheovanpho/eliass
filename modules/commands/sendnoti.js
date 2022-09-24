const fs = require('fs');
const request = require('request');

module.exports.config = {
    name: "sendnoti",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "TruongMini",
    description: "",
    commandCategory: "Tiện ích",
    usages: "[msg]",
    cooldowns: 5,
}

let atmDir = [];

const getAtm = (atm, body) => new Promise(async (resolve) => {
    let msg = {}, attachment = [];
    msg.body = body;
    for(let eachAtm of atm) {
        await new Promise(async (resolve) => {
            try {
                let response =  await request.get(eachAtm.url),
                    pathName = response.uri.pathname,
                    ext = pathName.substring(pathName.lastIndexOf(".") + 1),
                    path = __dirname + `/cache/${eachAtm.filename}.${ext}`
                response
                    .pipe(fs.createWriteStream(path))
                    .on("close", () => {
                        attachment.push(fs.createReadStream(path));
                        atmDir.push(path);
                        resolve();
                    })
            } catch(e) { console.log(e); }
        })
    }
    msg.attachment = attachment;
    resolve(msg);
})

module.exports.handleReply = async function ({ api, event, handleReply, Users, Threads }) {
    const { threadID, messageID, senderID, body } = event;
    let name = await Users.getNameUser(senderID);
    switch (handleReply.type) {
        case "sendnoti": {
            let text = `𝗡𝗼̣̂𝗶 𝗱𝘂𝗻𝗴:\n-> ${body}\n𝗧𝘂̛̀ ${name} 𝗻𝗵𝗼́𝗺 ${(await Threads.getInfo(threadID)).threadName || "Unknow"}`;
            if(event.attachments.length > 0) text = await getAtm(event.attachments, `𝗡𝗼̣̂𝗶 𝗱𝘂𝗻𝗴:\n-> ${body}\n𝗧𝘂̛̀ ${name} 𝗻𝗵𝗼́𝗺 ${(await Threads.getInfo(threadID)).threadName || "Unknow"}`);
            api.sendMessage(text, handleReply.threadID, (err, info) => {
                atmDir.forEach(each => fs.unlinkSync(each))
                atmDir = [];
                global.client.handleReply.push({
                    name: this.config.name,
                    type: "reply",
                    messageID: info.messageID,
                    messID: messageID,
                    threadID
                })
            });
            break;
        }
        case "reply": {
            let text = `== [ 𝗧𝗶𝗻 𝗡𝗵𝗮̆́𝗻 𝗧𝘂̛̀ 𝗔𝗱𝗺𝗶𝗻 ] ==\n𝗡𝗼̣̂𝗶 𝗱𝘂𝗻𝗴:\n-> ${body}\n𝗧𝘂̛̀ ${name}\n💬 𝗣𝗵𝗮̉𝗻 𝗵𝗼̂̀𝗶 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 đ𝗲̂̉ 𝘁𝗿𝗮̉ 𝗹𝗼̛̀𝗶`;
            if(event.attachments.length > 0) text = await getAtm(event.attachments, `== [ 𝗧𝗶𝗻 𝗡𝗵𝗮̆́𝗻 𝗧𝘂̛̀ 𝗔𝗱𝗺𝗶𝗻 ] ==\n𝗡𝗼̣̂𝗶 𝗱𝘂𝗻𝗴:\n-> ${body}\n𝗧𝘂̛̀ ${name}\n💬 𝗣𝗵𝗮̉𝗻 𝗵𝗼̂̀𝗶 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 đ𝗲̂̉ 𝘁𝗿𝗮̉ 𝗹𝗼̛̀𝗶`);
            api.sendMessage(text, handleReply.threadID, (err, info) => {
                atmDir.forEach(each => fs.unlinkSync(each))
                atmDir = [];
                global.client.handleReply.push({
                    name: this.config.name,
                    type: "sendnoti",
                    messageID: info.messageID,
                    threadID
                })
            }, handleReply.messID);
            break;
        }
    }
}

module.exports.run = async function ({ api, event, args, Users }) {
    const moment = require("moment-timezone");
  const timeNow = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:s");
    const { threadID, messageID, senderID, messageReply } = event;
    if (!args[0]) return api.sendMessage("Please input message", threadID);
    let allThread = global.data.allThreadID || [];
    let can = 0, canNot = 0;
    let text = `== [ 𝗧𝗶𝗻 𝗡𝗵𝗮̆́𝗻 𝗧𝘂̛̀ 𝗔𝗱𝗺𝗶𝗻 ] ==\n𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻: ${timeNow}\n𝗡𝗼̣̂𝗶 𝗱𝘂𝗻𝗴:\n-> ${args.join(" ")}\n𝗧𝘂̛̀ ${await Users.getNameUser(senderID)} \n💬 𝗣𝗵𝗮̉𝗻 𝗵𝗼̂̀𝗶 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 đ𝗲̂̉ 𝘁𝗿𝗮̉ 𝗹𝗼̛̀𝗶`;
    if(event.type == "message_reply") text = await getAtm(messageReply.attachments, `== [ 𝗧𝗶𝗻 𝗡𝗵𝗮̆́𝗻 𝗧𝘂̛̀ 𝗔𝗱𝗺𝗶𝗻 ] ==\n𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻: ${timeNow}\n𝗡𝗼̣̂𝗶 𝗱𝘂𝗻𝗴:\n-> ${args.join(" ")}\n𝗧𝘂̛̀ ${await Users.getNameUser(senderID)}\n💬 𝗣𝗵𝗮̉𝗻 𝗵𝗼̂̀𝗶 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 đ𝗲̂̉ 𝘁𝗿𝗮̉ 𝗹𝗼̛̀𝗶`);
    await new Promise(resolve => {
        allThread.forEach((each) => {
            try {
                api.sendMessage(text, each, (err, info) => {
                    if(err) { canNot++; }
                    else {
                        can++;
                        atmDir.forEach(each => fs.unlinkSync(each))
                        atmDir = [];
                        global.client.handleReply.push({
                            name: this.config.name,
                            type: "sendnoti",
                            messageID: info.messageID,
                            messID: messageID,
                            threadID
                        })
                        resolve();
                    }
                })
            } catch(e) { console.log(e) }
        })
    })
    api.sendMessage(`Đã gửi đến ${can} nhóm\nThất bại đến ${canNot} nhóm`, threadID);
  }