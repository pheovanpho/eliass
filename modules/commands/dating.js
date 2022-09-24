const { join } = require('path');
const { writeFileSync, existsSync, createReadStream } = require('fs-extra');
const moment = require("moment-timezone");
const axios = require('axios')
module.exports.config = {
    name: "dating",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "D-Jukie",
    description: "Hẹn hò qua messenger?",
    commandCategory: "Giải trí",
    usages: "[shop/info/breakup/daily]",
    cooldowns: 0
};
module.exports.onLoad = function() {
    const path = join(__dirname, 'cache', 'dating.json');
    if (!existsSync(path)) {
        writeFileSync(path, JSON.stringify([], null, 4));
    }
    const dataDating = require('./cache/dating.json');
    const get_day_of_time = (d1, d2) => {
        let ms1 = d1.getTime();
        let ms2 = d2.getTime();
        return Math.ceil((ms2 - ms1) / (24 * 60 * 60 * 1000));
    };
    setInterval(function() {
        for (let i of dataDating) {
            if(dataDating.length == 0) continue
            let dayStart = new Date(i.data.timestamp);
            let today = new Date();
            let time = get_day_of_time(dayStart, today);
            i.data.countDays = time
            writeFileSync(path, JSON.stringify(dataDating, null, 4));
        }
    }, 1000);
}

function msgBreakup() {
    var msg = ['Thật sự 2 người không thể làm lành được sao?', 'Cứ như vậy mà buông tay nhau?', 'Không đau sao? Có chứ? Vậy sao còn muốn buông?', 'Vì một lí do nào đó... 2 người có thể cố gắng được không? ^^', 'Tình yêu là khi hai người quan tâm, chăm sóc lẫn nhau. Bây giờ cả 2 bạn đã hiều điều gì đã xảy ra, 2 bạn có thể quay về bên nhau được không', 'Giận để biết yêu nhau nhiều hơn phải không, cả 2 làm lành nhé vì khi giận nhau mới biết đối phương không thể sống thiếu nhau']
    return msg[Math.floor(Math.random() * msg.length)];
}

function getMsg() {
    return `𝐌𝐨̣𝐢 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐜𝐮̀𝐧𝐠 𝐭𝐨̛́𝐢 𝐜𝐡𝐮́𝐜 𝐦𝐮̛̀𝐧𝐠 𝐡𝐚̣𝐧𝐡 𝐩𝐡𝐮́𝐜 𝐜𝐡𝐨 𝟐 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐧𝐚̀𝐲 𝐧𝐚̀𝐨 🥰\n\𝐋𝐮̛𝐮 𝐘́:\n- 𝐂𝐚̉ 𝟐 𝐛𝐚̣𝐧 𝐬𝐞̃ 𝐤𝐡𝐨̂𝐧𝐠 𝐭𝐡𝐞̂̉ 𝐜𝐡𝐢𝐚 𝐭𝐚𝐲 𝐭𝐫𝐨𝐧𝐠 𝐯𝐨̀𝐧𝐠 𝟕 𝐧𝐠𝐚̀𝐲 𝐤𝐞̂̉ 𝐭𝐮̛̀ 𝐤𝐡𝐢 𝐲𝐞̂𝐮 𝐧𝐡𝐚𝐮\n- 𝐂𝐮𝐨̂́𝐢 𝐜𝐮̀𝐧𝐠 𝐜𝐡𝐮́𝐜 𝐜𝐚̉ 𝟐 𝐛𝐚̣𝐧 𝐜𝐨́ 𝐧𝐡𝐢𝐞̂̀𝐮 𝐧𝐢𝐞̂̀𝐦 𝐡𝐚̣𝐧𝐡 𝐩𝐡𝐮́𝐜 𝐤𝐡𝐢 𝐨̛̉ 𝐛𝐞̂𝐧 𝐧𝐡𝐚𝐮, 𝐜𝐚̉𝐦 𝐨̛𝐧 𝐯𝐢̀ 𝐭𝐢𝐧 𝐭𝐮̛𝐨̛̉𝐧𝐠 𝐯𝐚̀ 𝐬𝐮̛̉ 𝐝𝐮̣𝐧𝐠 𝐛𝐨𝐭 𝐜𝐮̉𝐚 𝐦𝐢̀𝐧𝐡\n- 𝐊𝐲́ 𝐭𝐞̂𝐧: 𝑵𝒈𝒖𝒚𝒆̂̃𝒏 𝑷𝒉𝒂̣𝒎 𝑴𝒊𝒏𝒉 𝑻𝒖𝒂̂́𝒏 ❤️`
}
module.exports.run = async function({ api, event,args, Users, Currencies }) {
    const { threadID, messageID, senderID } = event;
    const dataDating = require('./cache/dating.json');
    const type = (args[0] || 'false').toLowerCase();
    const input = type.replace('nữ', 1).replace('gái', 1).replace('nam', 2).replace('trai', 2).replace('breakup', 3).replace('chiatay', 3).replace('ct', 3).replace('info', 4).replace('-i', 4).replace('shop', 5).replace('-s', 5).replace('daily', 6).replace('diemdanh', 6).replace('top', 7).replace('rank', 7);
    const dataUser = await Users.getData(senderID)
    const author = dataDating.find(i => i.ID_one == senderID || i.ID_two == senderID);
    switch (input) {
        case '1': {
            if (author == undefined) break
            if (author.status == true) return api.sendMessage(`𝐌𝐮𝐨̂́𝐧 𝐜𝐚̆́𝐦 𝐬𝐮̛̀𝐧𝐠 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐭𝐚 𝐡𝐚𝐲 𝐬𝐚𝐨 ?, 𝐡𝐚̃𝐲 𝐥𝐚̀𝐦 𝐦𝐨̣̂𝐭 𝐜𝐨𝐧 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐜𝐨́ 𝐭𝐫𝐚́𝐜𝐡 𝐧𝐡𝐢𝐞̣̂𝐦 𝐧𝐚̀𝐨. 𝐁𝐚̣𝐧 𝐡𝐢𝐞̣̂𝐧 𝐨̛̉ 𝐭𝐫o𝐧𝐠 𝐭𝐡𝐚́𝐢 𝐃𝐚𝐭𝐢𝐧𝐠 𝐫𝐨̂̀𝐢 𝐜𝐨̀𝐧 𝐦𝐮𝐨̂́𝐧 𝐤𝐢𝐞̂́𝐦 𝐭𝐡𝐞̂𝐦 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐤𝐡𝐚́𝐜 𝐚̀ 😈`, threadID, messageID);
            break;
        }
        case '2': {
            if (author == undefined) break
            if (author.status == true) return api.sendMessage(`𝐌𝐮𝐨̂́𝐧 𝐜𝐚̆́𝐦 𝐬𝐮̛̀𝐧𝐠 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐭𝐚 𝐡𝐚𝐲 𝐬𝐚𝐨 ?, 𝐡𝐚̃𝐲 𝐥𝐚̀𝐦 𝐦𝐨̣̂𝐭 𝐜𝐨𝐧 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐜𝐨́ 𝐭𝐫𝐚́𝐜𝐡 𝐧𝐡𝐢𝐞̣̂𝐦 𝐧𝐚̀𝐨. 𝐁𝐚̣𝐧 𝐡𝐢𝐞̣̂𝐧 𝐨̛̉ 𝐭𝐫o𝐧𝐠 𝐭𝐡𝐚́𝐢 𝐃𝐚𝐭𝐢𝐧𝐠 𝐫𝐨̂̀𝐢 𝐜𝐨̀𝐧 𝐦𝐮𝐨̂́𝐧 𝐤𝐢𝐞̂́𝐦 𝐭𝐡𝐞̂𝐦 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐤𝐡𝐚́𝐜 𝐚̀ 😈`, threadID, messageID);
            break;
        }
        case '3': {
            if (author == undefined || author.status == false) return api.sendMessage(`𝐁𝐚̣𝐧 𝐜𝐡𝐮̛𝐚 𝐡𝐞̣𝐧 𝐡𝐨̀ 𝐯𝐨̛́𝐢 𝐚𝐢 𝐭𝐡𝐢̀ 𝐜𝐡𝐢𝐚 𝐭𝐚𝐲 𝐜𝐚́𝐢 𝐠𝐢̀ ?`, threadID, messageID);
            if (author.data.countDays < 0) return api.sendMessage(`𝐂𝐨̀𝐧 𝐜𝐡𝐮̛𝐚 𝐭𝐨̛́𝐢 3 𝐧𝐠𝐚̀𝐲 𝐦𝐚̀ 𝐦𝐮𝐨̂́𝐧 𝐜𝐡𝐢𝐚 𝐭𝐚𝐲 𝐥𝐚̀ 𝐬𝐚𝐨? 🥺\n\n${msgBreakup()}\n\n𝐇𝐚̃𝐲 𝐜𝐮̛́ 𝐛𝐢̀𝐧𝐡 𝐭𝐢̃𝐧𝐡 𝐬𝐮𝐲 𝐧𝐠𝐡𝐢̃, 𝐜𝐡𝐨 𝐦𝐨̣𝐢 𝐜𝐡𝐮𝐲𝐞̣̂𝐧 𝐝𝐚̂̀𝐧 𝐥𝐚̆́𝐧𝐠 𝐱𝐮𝐨̂́𝐧𝐠 𝐫𝐨̂̀𝐢 𝐠𝐢𝐚̉𝐢 𝐪𝐮𝐲𝐞̂́𝐭 𝐜𝐮̀𝐧𝐠 𝐧𝐡𝐚𝐮 𝐧𝐡𝐞́ 𝐯𝐢̀ 𝐭𝐢̀𝐧𝐡 𝐲𝐞̂𝐮 𝐤𝐡𝐨̂𝐧𝐠 𝐩𝐡𝐚̉𝐢 𝐚𝐢 𝐜𝐮̃𝐧𝐠 𝐦𝐚𝐲 𝐦𝐚̆́𝐧 𝐭𝐢̀𝐦 𝐭𝐡𝐚̂́𝐲 𝐧𝐡𝐚𝐮 𝐦𝐚̀ ^^`, threadID, messageID);
            return api.sendMessage(`𝐂𝐚̉ 𝟐 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐭𝐡𝐚̣̂𝐭 𝐬𝐮̛̣ 𝐤𝐡𝐨̂𝐧𝐠 𝐭𝐡𝐞̂̉ 𝐭𝐢𝐞̂́𝐩 𝐭𝐮̣𝐜 𝐧𝐮̛̃𝐚 𝐡𝐚𝐲 𝐬𝐚𝐨 ?\n𝐂𝐡𝐨 𝐛𝐨𝐭 𝐱𝐢𝐧 𝐩𝐡𝐞́𝐩 𝐱𝐞𝐧 𝐯𝐚̀𝐨 𝐦𝐨̣̂𝐭 𝐜𝐡𝐮́𝐭 𝐧𝐡𝐞́:\n\n${msgBreakup()}\n\n𝐍𝐞̂́𝐮 𝐜𝐨́ 𝐱𝐞𝐦 𝐭𝐡𝐚̂́𝐲 𝐝𝐨̀𝐧𝐠 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐧𝐚̀𝐲, 𝐡𝐚̃𝐲 𝐜𝐮̛́ 𝐜𝐡𝐨 𝐦𝐨̣𝐢 𝐜𝐡𝐮𝐲𝐞̣̂𝐧 𝐥𝐚̆́𝐧𝐠 𝐱𝐮𝐨̂́𝐧𝐠...𝐘𝐞̂𝐧 𝐥𝐚̣̆𝐧𝐠 𝐦𝐨̣̂𝐭 𝐜𝐡𝐮́𝐭, 𝐬𝐮𝐲 𝐧𝐠𝐡𝐢̃ 𝐜𝐡𝐨 𝐤𝐢̃ 𝐧𝐚̀𝐨...\n𝐂𝐨́ 𝐧𝐡𝐢𝐞̂̀𝐮 𝐭𝐡𝐮̛́...𝐌𝐨̣̂𝐭 𝐤𝐡𝐢 𝐦𝐚̂́𝐭 đ𝐢 𝐭𝐡𝐢̀ 𝐬𝐞̃ 𝐤𝐡𝐨̂𝐧𝐠 𝐭𝐡𝐞̂̉ 𝐭𝐢̀𝐦 𝐥𝐚̣𝐢 𝐧𝐮̛̃𝐚. ^^\n\n𝐂𝐨̀𝐧 𝐧𝐞̂́𝐮...𝐕𝐚̂̃𝐧 𝐤𝐡𝐨̂𝐧𝐠 𝐭𝐡𝐞̂̉ ����𝐢𝐞̂́𝐩 𝐭𝐮̣𝐜 𝐜𝐮̀𝐧𝐠 𝐧𝐡𝐚𝐮 𝐧𝐮̛̃𝐚...𝐂𝐚̉ 𝟐 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐡𝐚̃𝐲 𝐭𝐡𝐚̉ 𝐜𝐚̉𝐦 𝐱𝐮́𝐜 𝐯𝐚̀𝐨 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐧𝐚̀𝐲 𝐧𝐡𝐞́ !`, threadID, (error, info) => {
                global.client.handleReaction.push({
                    name: this.config.name,
                    messageID: info.messageID,
                    senderID: senderID,
                    type: input,
                    data: {
                        ID_one: author.ID_one,
                        accept_one: false,
                        ID_two: author.ID_two,
                        accept_two: false
                    }
                });
            }, messageID);
            break
        }
        case '4': {
            if (author == undefined || author.status == false) return api.sendMessage(`𝐁𝐚̣𝐧 𝐅.𝐀 𝐬𝐦𝐥 𝐫𝐚 𝐦𝐚̀ 𝐱𝐞𝐦 𝐢𝐧𝐟𝐨 𝐜𝐚́𝐢 𝐠𝐢̀ 𝐳𝐚̣̂𝐲 𝐡𝐮̛̉ ?`, threadID, messageID);
            var msg = 
            `💓==『 𝐁𝐞𝐞𝐧 𝐓𝐨𝐠𝐞𝐭𝐡𝐞𝐫 』==💓\n\n` + 
            `» ❤️ 𝗧𝗲̂𝗻 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻: ${(author.ID_one == senderID) ? author.name_one : author.name_two}\n` + 
            `» 🤍 𝗧𝗲̂𝗻 𝗰𝘂̉𝗮 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗮̂́𝘆: ${(author.ID_two == senderID) ? author.name_one : author.name_two}\n` + 
            `» 💌 𝗛𝗲̣𝗻 𝗵𝗼̀ 𝘃𝗮̀𝗼 𝗹𝘂́𝗰: \n${author.data.days}\n` + 
            `» 📆 𝗬𝗲̂𝘂 𝗻𝗵𝗮𝘂: ${author.data.countDays} 𝐧𝐠𝐚̀𝐲\n` + 
            `» 📆 Điểm thân thiết: ${author.data.point} điểm\n` + 
            `» 📆 Xếp hạng: ${getRank(senderID)}\n` + 
            `» 📆 Thời gian: ${new Date(author.data.timestamp).toLocaleString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' })} - ${moment.tz("Asia/Ho_Chi_minh").format("DD/MM/YYYY")}`
            return api.sendMessage({ body: msg, attachment: await this.canvas(author.ID_one, author.ID_two, 1) }, threadID, messageID);
            break
        }
        case '5': {
            if (author == undefined || author.status == false) return api.sendMessage(`𝐁𝐚̣𝐧 𝐅.𝐀 𝐬𝐦𝐥 𝐫𝐚 𝐦𝐚̀ mua 𝐜𝐚́𝐢 𝐠𝐢̀ 𝐳𝐚̣̂𝐲 𝐡𝐮̛̉ ?`, threadID, messageID);
            var shop = [
                { name: 'Hoa', point: 10, money: 1000 }, 
                { name: 'Nhẵn', point: 20, money: 2000 }, 
                { name: 'Socola', point: 30, money: 3000 }, 
                { name: 'Mỹ phẩm', point: 40, money: 4000 }
            ]
            return api.sendMessage({
                body: "Bạn muốn mua vật phẩm nào!\n1. Hoa\n2. Nhẵn\n3. Socola\n4. Mỹ phẩm\nReply để lựa chọn", 
                attachment: await this.image('https://static1.bestie.vn/Mlog/ImageContent/201901/bxh-10-vung-dat-co-nhieu-gai-xinh-nhat-viet-nam-8d9a14.jpg')}, 
                threadID, (error, info) => global.client.handleReply.push({
                    type: input,
                    name: this.config.name,
                    messageID: info.messageID,
                    author: event.senderID,
                    shop,
                    data: author
            }), messageID);
            break
        }
        case '6': {
            if (author == undefined || author.status == false) return api.sendMessage(`FA mà đòi điểm danh?`, threadID, messageID);
            if(author.data.daily != null && Date.now() - author.data.daily < 86400000) 
                return api.sendMessage(`Mỗi lần điểm danh cách nhau 24 tiếng`, threadID, messageID)
            return api.sendMessage(`Cả 2 cùng thả cảm xúc ❤ vào tin nhắn này để điểm danh!`, threadID, (error, info) => {
                global.client.handleReaction.push({
                    name: this.config.name,
                    type: input,
                    messageID: info.messageID,
                    senderID: senderID,
                    author: author,
                    data: {
                        ID_one: author.ID_one,
                        accept_one: false,
                        ID_two: author.ID_two,
                        accept_two: false
                    }
                })
            }, messageID);
            break
        }
        case '7': {
            if (dataDating.length == 0) return api.sendMessage('Chưa có cặp đôi nào trong dữ liệu của bot', threadID, messageID);
            dataDating.sort(function(a, b) { return b.data.point - a.data.point });
            var msg = 'TOP CÁC CẶP ĐÔI ĐIỂM THÂN THIẾT CAO NHẤT\n'
            for (let i = 0; i <= 10; i++) {
                if (dataDating[i] == undefined) continue
                msg += `${i+1}. ${dataDating[i].name_one} - ${dataDating[i].name_two}\nSố điểm: ${dataDating[i].data.point}\nSố ngày: ${dataDating[i].data.countDays}\n\n`
            }
            return api.sendMessage(msg, threadID, messageID)
            break
        }
        default:
            return api.sendMessage(`𝐁𝐚̣𝐧 𝐜𝐚̂̀𝐧 𝐧𝐡𝐚̣̂𝐩 𝐠𝐢𝐨̛́𝐢 𝐭𝐢́𝐧𝐡 𝐜𝐮̉𝐚 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐦𝐚̀ 𝐛𝐚̣𝐧 𝐦𝐮𝐨̂́𝐧 𝐃𝐚𝐭𝐢𝐧𝐠 [𝐧𝐚𝐦/𝐧𝐮̛̃]`, threadID, messageID);
    }
    var { money } = await Currencies.getData(senderID);
    if (money < 2000) return api.sendMessage(`𝐁𝐚̣𝐧 𝐜𝐚̂̀𝐧 𝟐𝟎𝟎𝟎 𝐕𝐍𝐃 𝐜𝐡𝐨 𝐦𝐨̣̂𝐭 𝐜𝐚́𝐢 𝐝𝐚𝐭𝐢𝐧𝐠 𝐯𝐨̛́𝐢 𝐦𝐨̣̂𝐭 𝐧𝐠𝐮̛𝐨̛̀𝐢 💸`, threadID, messageID);
    return api.sendMessage(`𝐁𝐚̣𝐧 𝐬𝐞̃ 𝐛𝐢̣ 𝐭𝐫𝐮̛̀ 𝟐𝟎𝟎𝟎 𝐕𝐍𝐃 𝐭𝐢𝐞̂̀𝐧 𝐩𝐡𝐢́ 𝐦𝐚𝐢 𝐦𝐨̂́𝐢\n𝐒𝐨̂́ 𝐭𝐢𝐞̂̀𝐧 𝐧𝐚̀𝐲 𝐬𝐞̃ 𝐤𝐡𝐨̂𝐧𝐠 𝐡𝐨𝐚̀𝐧 𝐭𝐫𝐚̉ 𝐧𝐞̂́𝐮 𝟏 𝐭𝐫𝐨𝐧𝐠 𝟐 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐤𝐡𝐨̂𝐧𝐠 𝐜𝐡𝐚̂́𝐩 𝐧𝐡𝐚̣̂𝐧 𝐭𝐢𝐞̂́𝐧 𝐯𝐚̀𝐨 𝐭𝐫𝐚̣𝐧𝐠 𝐭𝐡𝐚́𝐢 𝐃𝐚𝐭𝐢𝐧𝐠 🖤\n\n𝐓𝐡𝐚̉ 𝐜𝐚̉𝐦 𝐱𝐮́𝐜 𝐯𝐚̀𝐨 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐧𝐚̀𝐲 𝐧𝐞̂́𝐮 𝐜𝐡𝐚̂́𝐩 𝐧𝐡𝐚̣̂𝐧 𝐭𝐢̀𝐦 𝐤𝐢𝐞̂́𝐦 𝐦𝐨̣̂𝐭 𝐧𝐠𝐮̛𝐨̛̀𝐢.`, threadID, (error, info) => {
        global.client.handleReaction.push({
            name: this.config.name,
            type: input,
            messageID: info.messageID,
            senderID: senderID,
            author: dataUser
        })
    }, messageID);
}
function getRank(senderID) {
    var dataDating = require('./cache/dating.json');
    dataDating.sort(function(a, b) { return b.data.point - a.data.point })
    var rank = dataDating.findIndex(i => i.ID_one == senderID || i.ID_two == senderID);
    return rank + 1
}
module.exports.handleReply = async function({ api, event, handleReply, utils, Currencies }) {
    const { threadID, messageID, body, senderID } = event;
    if (handleReply.author != senderID) return
    var { money } = await Currencies.getData(senderID);
    if (money < handleReply.shop[parseInt(body) - 1].money) return api.sendMessage(`Bạn không đủ ${handleReply.shop[parseInt(body) - 1].money} để mua vật phẩm`, threadID, messageID);
    await Currencies.setData(senderID, { money: money - handleReply.shop[parseInt(body) - 1].money });
    const dataDating = require('./cache/dating.json');
    var path = join(__dirname, 'cache', 'dating.json');
    handleReply.data.data.point = handleReply.data.data.point + handleReply.shop[parseInt(body) - 1].point
    writeFileSync(path, JSON.stringify(dataDating, null, 4));
    api.unsendMessage(handleReply.messageID)
    return api.sendMessage(`Mua thành công! Điểm thân thiết của bạn bạn đã được tăng ${handleReply.shop[parseInt(body) - 1].point}, tổng: ${handleReply.data.data.point}`, threadID)
}
module.exports.handleReaction = async function({ api, event, Threads, Users, Currencies, handleReaction }) {
    var { threadID, reaction, messageID, userID } = event;
    var { type, senderID, author, love, data } = handleReaction;
    var dataDating = require('./cache/dating.json');
    var path = join(__dirname, 'cache', 'dating.json');
    var { money } = await Currencies.getData(senderID);
    switch (type) {
        case '1': {
            if (senderID != userID) return;
            api.unsendMessage(handleReaction.messageID)
            var dataGroup = (await Threads.getInfo(threadID)).userInfo;
            await Currencies.setData(senderID, { money: money - 2000 });
            var genderFilter = [];
            for (var i of dataGroup) {
                if (i.gender == 'FEMALE') {
                    var a = dataDating.some(i => i.ID_one == i.id || i.ID_two == i.id);
                    if (a != true) {
                        genderFilter.push({
                            ID: i.id,
                            name: i.name
                        })
                    }
                }
            }
            if (genderFilter.length == 0) return api.sendMessage(`𝐑𝐚̂́𝐭 𝐭𝐢𝐞̂́𝐜, 𝐤𝐡𝐨̂𝐧𝐠 𝐜𝐨́ 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐦𝐚̀ 𝐛𝐚̣𝐧 𝐜𝐚̂̀𝐧 𝐭𝐢̀𝐦 𝐡𝐨𝐚̣̆𝐜 𝐡𝐨̣ 𝐜𝐨́ 𝐡𝐞̣𝐧 𝐡𝐨̀ 𝐯𝐨̛́𝐢 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐤𝐡𝐚́𝐜 𝐦𝐚̂́𝐭 𝐫𝐨̂̀𝐢 ^^`, threadID);
            var random = genderFilter[Math.floor(Math.random() * genderFilter.length)];
            var msg = {
                body: `[💏] ${author.name} - 𝐍𝐠𝐮̛𝐨̛̀𝐢 𝐦𝐚̀ 𝐡𝐞̣̂ 𝐭𝐡𝐨̂́𝐧𝐠 𝐜𝐡𝐨̣𝐧 𝐜𝐡𝐨 𝐛𝐚̣𝐧 𝐥𝐚̀: ${random.name}\n[💌] 𝐏𝐡𝐮̀ 𝐇𝐨̛̣𝐩: ${Math.floor(Math.random() * (80 - 30) + 30)}%\n\n𝐍𝐞̂́𝐮 𝐜𝐚̉ 𝟐 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐜𝐡𝐚̂́𝐩 𝐧𝐡𝐚̣̂𝐧 𝐝𝐚𝐭𝐢𝐧𝐠, 𝐡𝐚̃𝐲 𝐜𝐮̀����𝐠 𝐧𝐡𝐚𝐮 𝐭𝐡𝐚̉ 𝐜𝐚̉𝐦 𝐱𝐮́𝐜 𝐭𝐫𝐚́𝐢 𝐭𝐢𝐦 [❤] 𝐯𝐚̀𝐨 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐧𝐚̀𝐲 𝐯𝐚̀ 𝐜𝐡𝐢́𝐧𝐡 𝐭𝐡𝐮̛́𝐜 𝐭𝐫𝐚̣𝐧𝐠 𝐭𝐡𝐚́𝐢 𝐝𝐚𝐭𝐢𝐧𝐠 𝐯𝐨̛́𝐢 𝐧𝐡𝐚𝐮 `,
                mentions: [{ tag: random.name, id: random.ID }, {tag: author.name, id: senderID }]
            }
            return api.sendMessage(msg, threadID, (error, info) => {
                global.client.handleReaction.push({
                    name: this.config.name,
                    messageID: info.messageID,
                    senderID: senderID,
                    type: "8",
                    author: {
                        ID: senderID,
                        name: author.name,
                        accept: false
                    },
                    love: {
                        ID: random.ID,
                        name: random.name,
                        accept: false
                    }
                });
            });
            break;
        }
        case '2': {
            if (senderID != userID) return;
            api.unsendMessage(handleReaction.messageID)
            var dataGroup = (await Threads.getInfo(threadID)).userInfo;
            await Currencies.setData(senderID, { money: money - 2000 });
            var genderFilter = [];
            for (var i of dataGroup) {
                if (i.gender == 'MALE') {
                    var a = dataDating.some(i => i.ID_one == i.id || i.ID_two == i.id);
                    if (a != true) {
                        genderFilter.push({
                            ID: i.id,
                            name: i.name
                        })
                    }
                }
            }
            if (genderFilter.length == 0) return api.sendMessage(`𝐑𝐚̂́𝐭 𝐭𝐢𝐞̂́𝐜, 𝐤𝐡𝐨̂𝐧𝐠 𝐜𝐨́ 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐦𝐚̀ 𝐛𝐚̣𝐧 𝐜𝐚̂̀𝐧 𝐭𝐢̀𝐦 𝐡𝐨𝐚̣̆𝐜 𝐡𝐨̣ 𝐜𝐨́ 𝐡𝐞̣𝐧 𝐡𝐨̀ 𝐯𝐨̛́𝐢 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐤𝐡𝐚́𝐜 𝐦𝐚̂́𝐭 𝐫𝐨̂̀𝐢 ^^`, threadID);
            var random = genderFilter[Math.floor(Math.random() * genderFilter.length)];
            var msg = {
                body: `[💏] ${author.name} - 𝐍𝐠𝐮̛𝐨̛̀𝐢 𝐦𝐚̀ 𝐡𝐞̣̂ 𝐭𝐡𝐨̂́𝐧𝐠 𝐜𝐡𝐨̣𝐧 𝐜𝐡𝐨 𝐛𝐚̣𝐧 𝐥𝐚̀: ${random.name}\n[💌] 𝐏𝐡𝐮̀ 𝐇𝐨̛̣𝐩: ${Math.floor(Math.random() * (80 - 30) + 30)}%\n\n𝐍𝐞̂́𝐮 𝐜𝐚̉ 𝟐 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐜𝐡𝐚̂́𝐩 𝐧𝐡𝐚̣̂𝐧 𝐝𝐚𝐭𝐢𝐧𝐠, 𝐡𝐚̃𝐲 𝐜𝐮̀����𝐠 𝐧𝐡𝐚𝐮 𝐭𝐡𝐚̉ 𝐜𝐚̉𝐦 𝐱𝐮́𝐜 𝐭𝐫𝐚́𝐢 𝐭𝐢𝐦 [❤] 𝐯𝐚̀𝐨 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐧𝐚̀𝐲 𝐯𝐚̀ 𝐜𝐡𝐢́𝐧𝐡 𝐭𝐡𝐮̛́𝐜 𝐭𝐫𝐚̣𝐧𝐠 𝐭𝐡𝐚́𝐢 𝐝𝐚𝐭𝐢𝐧𝐠 𝐯𝐨̛́𝐢 𝐧𝐡𝐚𝐮 `,
                mentions: [{ tag: random.name, id: random.ID }, {tag: author.name, id: senderID }]
            }
            return api.sendMessage(msg, threadID, (error, info) => {
                global.client.handleReaction.push({
                    name: this.config.name,
                    messageID: info.messageID,
                    senderID: senderID,
                    type: "8",
                    author: {
                        ID: senderID,
                        name: author.name,
                        accept: false
                    },
                    love: {
                        ID: random.ID,
                        name: random.name,
                        accept: false
                    }
                });
            });
            break;
        }
        case '3': {
            if (userID == data.ID_one) data.accept_one = true;
            if (userID == data.ID_two) data.accept_two = true;
            var findIndex = dataDating.find(i => i.ID_one == userID || i.ID_two == userID);
            if (data.accept_one == true && data.accept_two == true) {
                dataDating.splice(findIndex, 1);
                writeFileSync(path, JSON.stringify(dataDating, null, 4));
                var msg = { body: '𝐁𝐞̂𝐧 𝐧𝐡𝐚𝐮 𝐯𝐚̀𝐨 𝐧𝐡𝐮̛̃𝐧𝐠 𝐥𝐮́𝐜 𝐠𝐢𝐨̂𝐧𝐠 𝐛𝐚̃𝐨, 𝐧𝐡𝐮̛𝐧𝐠 𝐥𝐚̣𝐢 𝐜𝐡𝐚̆̉𝐧𝐠 𝐭𝐡𝐞̂̉ 𝐜𝐨́ 𝐧𝐡𝐚𝐮 𝐯𝐚̀𝐨 𝐥𝐮́𝐜 𝐦𝐮̛𝐚 𝐭𝐚𝐧 🙁\n𝐇𝐚̃𝐲 𝐯𝐮𝐢 𝐥𝐞̂𝐧 𝐧𝐡𝐞́, 𝐜𝐨́ 𝐧𝐡𝐮̛̃𝐧𝐠 𝐥𝐮́𝐜 𝐡𝐨̛̣𝐩 𝐫𝐨̂̀𝐢 𝐥𝐚̣𝐢 𝐭𝐚𝐧 𝐦𝐨̛́𝐢 𝐤𝐡𝐢𝐞̂́𝐧 𝐛𝐚̉𝐧 𝐭𝐡𝐚̂𝐧 𝐦𝐢̀𝐧𝐡 𝐦𝐚̣𝐧𝐡 𝐦𝐞̃ 𝐡𝐨̛𝐧 𝐧𝐮̛̃𝐚 𝐜𝐡𝐮̛́', attachment: await this.canvas(data.ID_one, data.ID_two, 0) }
                return api.sendMessage(msg, threadID, messageID)
            }
            break
        }
        case '8': {
            if (reaction != '❤') return;
            if (userID == author.ID) author.accept = true;
            if (userID == love.ID) love.accept = true;
            if (author.accept == true && love.accept == true) {
                api.unsendMessage(handleReaction.messageID);
                const dataUser = await Users.getData(love.ID);
                var userTwo = {
                    name_one: dataUser.name,
                    ID_one: love.ID,
                    name_two: author.name,
                    ID_two: author.ID,
                    status: true,
                    data: {
                        days: moment.tz("Asia/Ho_Chi_minh").format("hh:mm:ss DD/MM/YYYY"),
                        countDays: 0,
                        point: 0,
                        daily: null,
                        timestamp: Date.now()
                    }
                }
                dataDating.push(userTwo)
                writeFileSync(path, JSON.stringify(dataDating, null, 4));
                return api.sendMessage(`𝐂𝐚̉ 𝟐 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐯𝐮̛̀𝐚 𝐜𝐮̀𝐧𝐠 𝐧𝐡𝐚𝐮 𝐭𝐡𝐚̉ 𝐜𝐚̉𝐦 𝐱𝐮́𝐜, 𝐧𝐠𝐡𝐢̃𝐚 𝐥𝐚̀ 𝐜𝐚̉ 𝟐 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐜𝐡𝐚̂́𝐩 𝐧𝐡𝐚̣̂𝐧 𝐭𝐢𝐞̂́𝐧 𝐭𝐨̛́𝐢 𝐡𝐞̣𝐧 𝐡𝐨̀ 💓`, threadID, async (error, info) => {
                    api.sendMessage(getMsg(), threadID);
                });
            }
            break;
        }
        case '6': {
            if (reaction != '❤') return;
            if (userID == data.ID_one) data.accept_one = true;
            if (userID == data.ID_two) data.accept_two = true;
            if (data.accept_one && data.accept_two) {
                api.unsendMessage(handleReaction.messageID);
                author.data.point = author.data.point + 10
                author.data.daily = Date.now()
                writeFileSync(path, JSON.stringify(dataDating, null, 4));
                return api.sendMessage(`Điểm danh thành công! Điểm thân thiết của bạn bạn đã được tăng 10, tổng: ${author.data.point}`, threadID)
            }
        }
    }
}
module.exports.image = async function(link) {
    var images = [];
    let download = (await axios.get(link, { responseType: "arraybuffer" } )).data; 
        writeFileSync( __dirname + `/cache/heodenroi.png`, Buffer.from(download, "utf-8"));
        images.push(createReadStream(__dirname + `/cache/heodenroi.png`));
    return images
}
module.exports.circle = async (image) => {
    const jimp = require('jimp')
    image = await jimp.read(image);
    image.circle();
    return await image.getBufferAsync("image/png");
}
module.exports.canvas = async function(idOne, idTwo, type) {
    const { loadImage, createCanvas } = require("canvas");
    let path = __dirname + "/cache/ghep.png";
    let pathAvata = __dirname + `/cache/avtghep2.png`;
    let pathAvataa = __dirname + `/cache/avtghep.png`;
    let getAvatarOne = (await axios.get(`https://graph.facebook.com/${idOne}/picture?height=250&width=250&access_token=1073911769817594|aa417da57f9e260d1ac1ec4530b417de`, { responseType: 'arraybuffer' })).data;
    let getAvatarTwo = (await axios.get(`https://graph.facebook.com/${idTwo}/picture?height=250&width=250&access_token=1073911769817594|aa417da57f9e260d1ac1ec4530b417de`, { responseType: 'arraybuffer' })).data;
    let bg = (await axios.get(type == 0 ? `https://i.imgur.com/fq4kzXk.jpg` : 'https://i.imgur.com/dfuCwFS.jpg', { responseType: "arraybuffer" })).data;
    writeFileSync(pathAvata, Buffer.from(getAvatarOne, 'utf-8'));
    writeFileSync(pathAvataa, Buffer.from(getAvatarTwo, 'utf-8'));
    writeFileSync(path, Buffer.from(bg, "utf-8"));
    avataruser = await this.circle(pathAvata);
    avataruser2 = await this.circle(pathAvataa);
    let imgB = await loadImage(path);
    let baseAvata = await loadImage(avataruser);
    let baseAvataa = await loadImage(avataruser2);
    let canvas = createCanvas(imgB.width, imgB.height);
    let ctx = canvas.getContext("2d");
    ctx.drawImage(imgB, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(baseAvata, type == 0 ? 91 : 82, type == 0 ? 82 : 95, type == 0 ? 166 : 129, type == 0 ? 166 : 129);
    ctx.drawImage(baseAvataa, type == 0 ? 519 : 443, type == 0 ? 81 : 95, type == 0 ? 166 : 129, type == 0 ? 166 : 129);
    ctx.beginPath();
    const imageBuffer = canvas.toBuffer();
    writeFileSync(path, imageBuffer);
    return createReadStream(path)
};