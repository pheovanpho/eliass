module.exports.config = {
  name: "mvsex",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Tiadals với api của Kadeer",
  description: "Vợ tôi",
  commandCategory: "TIỆN ÍCH",
  usages: "",
  cooldowns: 5
};

module.exports.run = async function({ api, event }) {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  axios.get('https://api-kanekidz.herokuapp.com/vdsex').then(res => {
  let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
  let count = res.data.count;
  let callback = function () {
          api.sendMessage({
            body: `🐻𝐌𝐞̣ 𝐦𝐚̀𝐲 𝐝𝐚̂𝐦 𝐯𝐜😏`,
            attachment: fs.createReadStream(__dirname + `/cache/chitanda.${ext}`)
          }, event.threadID,(err, info) => setTimeout(() => api.unsendMessage(info.messageID), 20000), event.messageID, () => fs.unlinkSync(__dirname + `/cache/chitanda.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/chitanda.${ext}`)).on("close", callback);
      })
}