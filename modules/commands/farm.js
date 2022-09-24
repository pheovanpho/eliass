module.exports.config = {
    name: "farm", // Tên lệnh, được sử dụng trong việc gọi lệnh
    version: "1.0.0",
    hasPermssion: 0,
    credits: "DungUwU && TruongNon",
    description: "Farm!!",
    commandCategory: "game",
    usages: "[option] [text]\n-----------\n-> OPTIONS <-\n1. register (đăng ký)\n2. info ( xem thông tin )\n3. fields( trồng cây)\n4. animals(nuôi gia súc)\n5. shop(mua bán)\n6. steal(ăn trộm hàng xóm)\n7. history\n8. top(xem bảng xếp hạng)\n\n-----------",
    cooldowns: 5,
    dependencies: {
        "axios": ""
    }
};

const domain = "http://localhost:3000"

const banner = "https://i.ibb.co/CJHSQH4/banner.png"
const crops = [
    "https://i.ibb.co/GHK1CYK/Wheat.png",
    "https://i.ibb.co/jDRv1B5/Corn.png",
    "https://i.ibb.co/1TqwzcC/Soybean.png",
    "https://i.ibb.co/XZ9mR6Y/Sugarcane.png",
    "https://i.ibb.co/hBJWVKx/Carrot.png",
    "https://i.ibb.co/808yRvX/Indigo.png",
    "https://i.ibb.co/qk3WF7j/Pumpkin.png",
    "https://i.ibb.co/3MRpHM0/Cotton.png",
    "https://i.ibb.co/hCZdnQB/Chili-Pepper.png",
    "https://i.ibb.co/5sjL7Ss/Tomato.png",
    "https://i.ibb.co/bgb6H7D/Strawberry.png",
    "https://i.ibb.co/2hDPNMX/Potato.png",
    "https://i.ibb.co/ZBGKG6z/Sesame.png",
    "https://i.ibb.co/BZdqrSG/Pineapple.png",
    "https://i.ibb.co/P5MTwWG/Lily.png",
    "https://i.ibb.co/QcSPrs8/Rice.png"
]
const field = "https://i.ibb.co/X4VTTVD/Field.png"

const houses = [
    "https://i.ibb.co/C8h7vdx/Farmhouse-Stage1.png",
    "https://i.ibb.co/FXq5psS/Farmhouse-Stage2.png",
    "https://i.ibb.co/gdTfn0b/Farmhouse-Stage3.png",
    "https://i.ibb.co/7XXmt2p/Farmhouse-Stage4.png",
    "https://i.ibb.co/6WwVD6q/Farmhouse-Stage5.png",
    "https://i.ibb.co/DQhY1KR/Farmhouse-Stage6.png",
    "https://i.ibb.co/g91dChW/Farmhouse-Stage7.png",
    "https://i.ibb.co/yXsk83r/Farmhouse-Christmas.png"
]

const animals = [
    "https://i.ibb.co/gMDrhrG/Pig-Smiling.png",
    "https://i.ibb.co/sqkMDjy/Sheep.png",
    "https://i.ibb.co/d43gV5w/Chicken.png",
    "https://i.ibb.co/bbhyZc0/Cow-Walking.png",
    "https://i.ibb.co/dsvpSNL/Goat.png"
]

const pets = [
    "https://i.ibb.co/hygj1HD/White-Bunny.png",
    "https://i.ibb.co/VpL1GRt/Bay-Horse.png",
    "https://i.ibb.co/mbKNYvb/Retriever.png",
    "https://i.ibb.co/3SfpypC/Tabby-Cat.png"
]

module.exports.languages = {
    "vi": {
        "introduction": `▶--  Nông Trại  --◀\n\n Game Nông Trại trên chính mess của bạn!\n Dựa trên trò chơi Hay Day\n Trồng cây, chăn nuôi mua thú cưng cày level, v.v\n HDSD còn không hiểu thì ib zalo 0836645838\n Farm -r (tên farm muốn đặt) vd: farm -r nđh\n Farm -f để trồng cây\n Farm -s để mua gia súc pet ...\n Farm -a để cho gia súc ăn và thu hoạch\n Farm antrom để ăn trộm hàng xóm trong box\n Farm top để xem bảng xếp hạng\n Farm -i để xem thông tin về nông trại của bạn\n\n=== [ ${this.config.version || "1.0.0"} ] ===`,
        "second": "giây",
        "all": "Tất cả",
        "outOfRange": "Lựa chọn không hợp lệ",

        "getError": "Có lỗi xảy ra, vui lòng thử lại sau!",
        "getErrorNotFound": "Bạn chưa đăng ký farm!",
        "basicInfo": "▶--  INFO  --◀\n[ %1 ]\n⇒ Tên: %2\nCấp độ: %3 (%4 điểm)\n⇒ Cấp độ Nhà: %5\n⇒ Ví: %6$\n⇒ Kho nông sản: %7/%8\n⇒ Kho chăn nuôi: %9/%10",

        "fieldsInfo": "▶--  FIELDS  --◀\n%1\n\n1. Trồng\n2. Thu Hoạch\n\n• Hãy phản hồi tin nhắn này lựa chọn của bạn!",
        "crops": "Hãy chọn giống cây mà bạn muốn trồng? [ Số dư: %1$ ]\n%2\n\n• Hãy phản hồi tin nhắn này lựa chọn của bạn!",
        "cropsErrorOutOfRange": "Lựa chọn của bạn không hợp lệ, vui lòng thử lại!",
        "plant": "Số dư: %1$, số lượng tối đa: %2 (%3$ mỗi cây)\n\n• Hãy phản hồi tin nhắn này số lượng cây cần trồng!",
        "plantErrorOutOfRange": "Số lượng cây muốn trồng không hợp lệ, vui lòng thử lại!",
        "plantErrorNotEnoughMoney": "Số dư không đủ, vui lòng thử lại!",
        "plantFail": "Trồng cây thất bại, vui lòng thử lại!",
        "plantSuccess": "Trồng cây thành công!",
        "harvestFailNoCrops": "Không có cây trồng nào cần thu hoạch!",
        "harvestFailNotEnoughSiloSpace": "Kho bạn đã đầy, vui lòng bán bớt cây trồng!",
        "harvestSuccess": "Bạn đã thu hoạch thành công!\n\nSố kinh nghiệp đạt được: %1\nKho nông sản: %2/%3",

        "animalsInfo": "▶--  ANIMALS  --◀\n%1\n\n1. Cho ăn\n2. Thu hoạch sản phẩm\n\n• Hãy phản hồi tin nhắn này lựa chọn của bạn!",
        "chicken": "GÀ",
        "cow": "BÒ",
        "pig": "HEO",
        "sheep": "CỪU",
        "goat": "DÊ",
        "retriever": "CHÓ",
        "tabbycat": "MÈO",
        "bayhorse": "NGỰA",
        "whitebunny": "THỎ",

        "animalHungry": "\n• Chưa được cho ăn!",

        "feed": "Bạn muốn cho gia súc nào ăn? [ Số dư: %1$ ]\n%2\n\n• Hãy phản hồi tin nhắn này lựa chọn của bạn!",
        "feedErrorOutOfRange": "Lựa chọn của bạn không hợp lệ, vui lòng thử lại!",
        "feedErrorNotEnoughMoney": "Số dư không đủ, vui lòng thử lại sau!",
        "feedFail": "Cho ăn thất bại, vui lòng thử lại sau!",
        "feedSuccess": "Bạn đã cho ăn thành công!",

        "collectFailNotEnoughSiloSpace": "Không đủ không gian trong kho chăn nuôi, vui lòng bán bớt!",
        "collectFail": "Thu hoạch thất bại, vui lòng thử lại sau!",
        "collectSuccess": "Bạn đã thu hoạch thành công!\n\nSố kinh nghiệm đạt được: %1\nKho chăn nuôi: %2/%3",

        "history": "▶--  HISTORY  --◀\n1. Ăn trộm\n2. Chống trộm\n• Hãy phản hồi tin nhắn này lựa chọn của bạn!",
        "historyUserBalance": "▶--  HISTORY  --◀\n→ Số dư: %1$",
        "historyUserSteal": "\n→ Thành công: %1\n→ Thất bại: %2\n\n%3",
        "historyUserDefend": "\n→ Thành công: %1\n→ Thất bại: %2\n\n%3",

        "shop": "▶--  SHOP  --◀\n1. Mua gia súc\n2. Mua thú nuôi\n3. Bán sản phẩm chăn nuôi\n4. Bán cây trồng\n• Hãy phản hồi tin nhắn này lựa chọn của bạn!",
        "shopErrorNoAnimal": "Không có gia súc nào khả dụng để mua!",
        "shopBuyAnimal": "Bạn muốn mua gia súc nào? [ Số dư: %1$ ]\n%2\n\n• Hãy phản hồi tin nhắn này lựa chọn của bạn!",
        "shopErrorNoPet": "Không có thú nuôi nào khả dụng để mua!",
        "shopBuyPet": "Bạn muốn mua thú nuôi nào? [ Số dư: %1$ ]\n%2\n\n• Hãy phản hồi tin nhắn này lựa chọn của bạn!",
        "enterAmount": "Số dư: %1\n Có thể mua: %2 (%3$/ 1 con)\n\n• Hãy phản hồi tin nhắn này số lượng cần mua!",
        "notEnoughMoney": "Số dư không đủ, vui lòng thử lại sau!",
        "buyFail": "Mua thất bại, vui lòng thử lại sau!",
        "buySuccess": "Bạn đã mua thành công:\n→ %1 x %2\n→ Tổng chi %3$\n→ Số dư còn lại: %4$",
        "shopNoItem": "Không có gì để bán",
        "shopErrorSell": "Đã xảy ra lỗi, vui lòng thử lại sau!",
        "shopSellSuccess": "Bán thành công và nhận được %1$ (+%2$ bonus)\nSố dư hiện tại: %3$",

        "levelUPLevel": "=== [ LEVEL UP ] ===\n→ Cấp độ: %1",
        "levelUPMoney": "\n→ Thưởng lên cấp: %1$",
        "levelUPFields": "\n→ Mảnh vườn: %1 (+5)",
        "levelUPCrops": "\n→ Giống cây mới: %1",
        "levelUPHouse": "\n→ Cấp độ nhà: %1 (+1)",
        "levelUPAnimalShelterChicken": "\n→ Chuồng gà: %1 (+5)",
        "levelUPAnimalShelterCow": "\n→ Chuồng bò: %1 (+5)",
        "levelUPAnimalShelterPig": "\n→ Chuồng heo: %1 (+5)",
        "levelUPAnimalShelterSheep": "\n→ Chuồng cừu: %1 (+5)",
        "levelUPAnimalShelterGoat": "\n→ Chuồng dê: %1 (+5)",
        "levelUPPetRetriever": "\n→ Vật nuôi mới: chó (tối đa 3 con, 2000$/con)",
        "levelUPPetTabbyCat": "\n→ Vật nuôi mới: mèo (tối đa 3 con, 2500$/con)",
        "levelUPPetBayHorse": "\n→ Vật nuôi mới: ngựa (tối đa 2 con, 3000$/con)",
        "levelUPPetWhiteBunny": "\n→ Vật nuôi mới: thỏ (tối đa 2 con, 4000$/con)",

        "registerErrorMissingName": "Bạn chưa nhập tên!",
        "registerConfirm": "Bạn đang tạo tài khoản với:\nID: %1\nTên: %2\n• Thả cảm xúc 👍 vào tin nhắn này để xác nhận!",
        "registerErrorExist": "ID Facebook của bạn đã đăng ký từ trước với tên: %1",
        "registerSuccess": "Bạn đã tạo tài khoản thành công!\n\nID: %1\nTên: %2\n\n• Bạn nhận được %3$ thưởng khởi nghiệp!",

        "stealErrorCooldown": "Thăm ngàn đi, trộm là không tốt!\nThử lại sau %1 giây!",
        "stealError": "Đã xảy ra lỗi, vui lòng thử lại sau!",
        "stealSuccess": "Trộm thành công %1$!",
        "stealFail": "Trộm thất bại và mất %1$!",

        "unknownCommand": "Câu lệnh không hợp lệ, vui lòng thử lại sau!",
    }
}

const headers = {
    "Content-Type": "application/json",
    "token": "Njw862jbHS"
}

module.exports.handleReaction = function ({ api, event, getText, handleReaction }) {
    const { post } = global.nodemodule["axios"];
    const { threadID, messageID, userID, reaction } = event;
    if (userID != handleReaction.author || reaction != "👍") return;

    const send = (msg, type, callback = null) => {
        if (type == 0) api.sendMessage(msg, threadID, callback);
        else if (type == 1) api.sendMessage(msg, threadID, callback, messageID);
    }

    const handleError = err => {
        if (err.response?.status == 404) {
            send(getText("getErrorNotFound"), 0);
        } else {
            send(getText("getError"), 0);
        }
        console.error(err.response?.data?.message || err);
    }

    const body = {
        "id": handleReaction.data.id,
        "name": handleReaction.data.name
    }

    post(`${domain}/create`, body, { headers })
        .then(res => {
            send(getText("registerSuccess", userID, res.data.data.name, res.data.data.money), 0);
        })
        .catch(err => handleError(err));

    return;
}

module.exports.handleReply = function ({ api, event, getText, handleReply }) {
    const { get, put } = global.nodemodule["axios"];
    const { threadID, messageID, senderID, body } = event;

    if (senderID != handleReply.author) return;

    const send = (msg, type, callback = null) => {
        if (type == 0) api.sendMessage(msg, threadID, callback);
        else if (type == 1) api.sendMessage(msg, threadID, callback, messageID);
    }
    const handleError = err => {
        if (err.response?.status == 404) {
            send(getText("getErrorNotFound"), 0);
        } else {
            send(getText("getError"), 0);
        }
        console.error(err.response?.data?.message || err);
    }

    const levelUPMessage = items => {
        const { level, money, fields, crops, houseLevel, animalShelters, pets } = items;
        let output = "", attachment = [];
        if (level) {
            output += getText("levelUPLevel", level);

            if (money) {
                const increasedMoney = houseLevel ? 250 : 100;
                output += getText("levelUPMoney", increasedMoney);
            }
            if (fields && level % 3 == 0 && level <= 150) {
                output += getText("levelUPFields", fields.total);
            }
            if (crops) {
                output += getText("levelUPCrops", crops.name);
            }
            if (level % 10 === 0 && houseLevel <= 7) {
                output += getText("levelUPHouse", houseLevel);
                get(houses[houseLevel].image)
                    .then(res => {
                        attachment.push(res.data);
                    })
                    .catch(err => console.log(err));
            }
            if (animalShelters && animalShelters.length > 0) {
                let chicken, cow, pig, sheep, goat, count = 0;
                if (level == 5) {
                    chicken = 5;
                } else if (level == 14) {
                    chicken = 10;
                    cow = 5;
                } else if (level == 22) {
                    pig = 5;
                } else if (level == 32) {
                    cow = 10;
                    sheep = 5;
                } else if (level == 40) {
                    chicken = 15;
                    sheep = 10;
                    goat = 5;
                }

                for (const item of [chicken, cow, pig, sheep, goat]) {
                    if (item) {
                        count++;
                        const animal = count == 1 ? "Chicken" : count == 2 ? "Cow" : count == 3 ? "Pig" : count == 4 ? "Sheep" : "Goat";
                        output += getText(`levelUPAnimalShelter${animal}`, item);
                    }
                }
            }
            
            if (pets && pets.length > 0) {
                const newPet = pets[pets.length - 1];
                output += getText(`levelUPPet${newPet.name}`);
            }
        }

        return { output, attachment };
    }

    let input = isNaN(body) || body == NaN ? 0 : parseInt(body);
    switch (handleReply.type) {
        case "fields": {
            switch (input) {
                case 1: {
                    get(`${domain}/crops/${senderID}`, { headers })
                        .then(async res => {
                            api.unsendMessage(handleReply.messageID);
                            let count = 1;
                            const attachment = [];
                            const choices = res.data.availableCrops.map(crop => {
                                return `${count++}. ` + crop.name + ' (' + crop.cost.buy + '$, ' + crop.harvestTime / 1000 + getText('second') + ')';
                            }).join('\n');
                            for (let i = 0; i < res.data.availableCrops.length; i++) {
                                try {
                                    const imgStream = (await get(crops[i], { responseType: "stream" })).data;
                                    attachment.push(imgStream);
                                } catch(e) {
                                    console.error(e);
                                }
                            }
                            send({
                                body: getText("crops", res.data.money, choices),
                                attachment
                            }, 1, (err, info) => {
                                if (err) return handleError(err);
                                else global.client.handleReply.push({
                                    name: this.config.name,
                                    type: "crops",
                                    author: senderID,
                                    messageID: info.messageID,
                                    availableCrops: res.data.availableCrops,
                                    money: res.data.money
                                })
                            });
                        })
                        .catch(err => handleError(err));

                    break;
                }
                case 2: {
                    const body = {
                        "action": "harvest"
                    }

                    put(`${domain}/fields/${senderID}`, body, { headers })
                        .then(res => {
                            const { data, message } = res.data;
                            api.unsendMessage(handleReply.messageID);
                            if (message != 'Harvest successfully') {
                                if (message == 'Not enough silo space') {
                                    send(getText("harvestFailNotEnoughSiloSpace"), 0);
                                } else send(getText("harvestFailNoCrops"), 0);
                            } else {
                                const { gainedExp } = data;
                                get(`${domain}/info/${senderID}`, { headers })
                                    .then(res => {
                                        const { data: userData } = res.data;
                                        const silo_size = userData.silo_size;
                                        const silo_current = userData.silo_items.reduce((acc, cur) => acc + cur.amount, 0);

                                        send(getText("harvestSuccess", gainedExp, silo_current, silo_size), 1, (err) => {
                                            if (err) return handleError(err);
                                            else {
                                                let getLevelUPRewards = levelUPMessage(data);
                                                if (getLevelUPRewards.output) {
                                                    send({
                                                        body: getLevelUPRewards.output,
                                                        attachment: getLevelUPRewards.attachment
                                                    }, 1)
                                                }
                                            }
                                        });

                                    })
                                    .catch(err => handleError(err));
                            }
                        })
                        .catch(err => handleError(err));

                    break;
                }
                default: {
                    getText("outOfRange");
                    break;
                }
            }
            break;
        }
        case 'crops': {
            const availableCrops = handleReply.availableCrops;
            const money = handleReply.money;
            
            if (input < 1 || input > availableCrops.length) {
                send(getText("cropsErrorOutOfRange"), 1);
                return;
            } else {
                get(`${domain}/info/${senderID}`, { headers })
                    .then(res => {
                        api.unsendMessage(handleReply.messageID);
                        const crop = availableCrops[input - 1];
                        const totalLeft = res.data.data.fields.total - res.data.data.fields.crops.reduce((acc, curr) => acc + curr.amount, 0);
                        send(getText("plant", money, totalLeft, crop.cost.buy), 1, (err, info) => {
                            if (err) return handleError(err);
                            else global.client.handleReply.push({
                                name: this.config.name,
                                type: "plant",
                                author: senderID,
                                messageID: info.messageID,
                                crop,
                                money,
                                totalLeft
                            })
                        });
                    })
                    .catch(err => handleError(err));
            }

            break;
        }
        case 'plant': {
            const crop = handleReply.crop;
            const money = handleReply.money;
            const totalLeft = handleReply.totalLeft;

            if (input < 1 || input > totalLeft) {
                send(getText("plantErrorOutOfRange"), 1);
            } else if (input * crop.cost.buy > money) {
                send(getText("plantErrorNotEnoughMoney"), 1);
            } else {
                const body = {
                    "action": "plant",
                    "cropId": crop.id,
                    "amount": input
                }

                put(`${domain}/fields/${senderID}`, body, { headers })
                    .then(res => {
                        api.unsendMessage(handleReply.messageID);
                        if (res.data.message != 'Plant successfully') {
                            send(getText("plantFail"), 1);
                        } else {
                            send(getText("plantSuccess"), 1);
                        }
                    })
                    .catch(err => handleError(err));
            }

            break;
        }
        case "animals": {
            switch (input) {
                case 1: {
                    get(`${domain}/animals/${senderID}`, { headers })
                        .then(async res => {
                            api.unsendMessage(handleReply.messageID);
                            let costs = [],
                                attachment = [],
                                totalFeedCost = 0,
                                count = 1,
                                choices = res.data.availableAnimals.map(animal => {
                                    const feedCost = animal.cost.feed * animal.current;
                                    costs.push(feedCost);
                                    totalFeedCost += feedCost;
                                    return `${count++}. ${getText(animal.name.toLowerCase())} (${feedCost}$, ${animal.collectTime / 1000} ${getText("second")})`;
                                });


                            for (let i = 0; i < res.data.availableAnimals.length; i++) {
                                try {
                                    const imgStream = (await get(animals[i], { responseType: "stream" })).data;
                                    attachment.push(imgStream);
                                } catch(e) {
                                    console.error(e);
                                }
                            }

                            choices.push(`${count++}. ${getText("all")} (${totalFeedCost}$)`);
                            costs.push(totalFeedCost);
                            send({
                                body: getText("feed", res.data.money, choices.join("\n")),
                                attachment
                            }, 1, (err, info) => {
                                if (err) return handleError(err);
                                else global.client.handleReply.push({
                                    name: this.config.name,
                                    type: "feed",
                                    author: senderID,
                                    messageID: info.messageID,
                                    money: res.data.money,
                                    availableAnimals: res.data.availableAnimals,
                                    costs
                                })
                            })
                        })
                        .catch(err => handleError(err));

                    break;
                }
                case 2: {
                    let body = {
                        "action": "collect"
                    }
                    put(`${domain}/animalShelters/${senderID}`, body, { headers })
                        .then(res => {
                            const { data, message } = res.data;
                            api.unsendMessage(handleReply.messageID);
                            if (message != 'Collect successfully') {
                                if (message == 'Not enough barn space') {
                                    send(getText("collectFailNotEnoughSiloSpace"), 1);
                                }
                                send(getText("collectFail"), 1);
                            } else {
                                const { gainedExp } = data;
                                get(`${domain}/info/${senderID}`, { headers })
                                    .then(res => {
                                        const { data: userData } = res.data;
                                        const barn_size = userData.barn_size;
                                        const barn_current = userData.barn_items.reduce((acc, cur) => acc + cur.amount, 0);

                                        send(getText("collectSuccess", gainedExp, barn_current, barn_size), 1, (err) => {
                                            if (err) return handleError(err);
                                            else {
                                                let getLevelUPRewards = levelUPMessage(data);
                                                if (getLevelUPRewards.output) {
                                                    send({
                                                        body: getLevelUPRewards.output,
                                                        attachment: getLevelUPRewards.attachment
                                                    }, 1)
                                                }
                                            }
                                        })
                                    })
                                    .catch(err => handleError(err));
                            }
                        })
                        .catch(err => handleError(err));

                    break;
                }
                default: {
                    getText("outOfRange");
                    break;
                }
            }

            break;
        }
        case "feed": {
            const availableAnimals = handleReply.availableAnimals;
            const costs = handleReply.costs;
            const money = handleReply.money;

            if (input < 1 || input > availableAnimals.length) {
                send(getText("feedErrorOutOfRange"), 1);
            } else if (costs[input - 1] > money) {
                send(getText("feedErrorNotEnoughMoney"), 1);
            } else {
                const body = {
                    "action": "feed",
                    "animalId": input == availableAnimals.length ? -1 : availableAnimals[input - 1].id
                }

                put(`${domain}/animalShelters/${senderID}`, body, { headers })
                    .then(res => {
                        api.unsendMessage(handleReply.messageID);
                        if (res.data.message != 'Feed successfully') {
                            send(getText("feedFail"), 1);
                        } else {
                            send(getText("feedSuccess"), 1);
                        }
                    })
                    .catch(err => handleError(err));
            }

            break;
        }
        case "history": {
            get(`${domain}/histories/${senderID}`, { headers })
                .then(res => {
                    const { money, steal, defend } = res.data.data;
                    let msg = getText("historyUserBalance", money, steal, defend);
                    switch (input) {
                        case 1: {
                            msg += getText("historyUserSteal", steal.succeed, steal.failed, steal.history.map((item, index) => `${index + 1}. ${item.victim}: ${getText(item.status)} (${item.money})`).join("\n"));
                            break;
                        }
                        case 2: {
                            msg += getText("historyUserDefend", defend.succeed, defend.failed, defend.history.map((item, index) => `${index + 1}. ${item.thief}: ${getText(item.status)} (${item.money})`).join("\n"));
                        }
                        default: {
                            getText("outOfRange");
                            break;
                        }
                    }

                    send(msg, 1);
                })
                .catch(err => handleError(err));

            break;
        }
        case "shop": {
            get(`${domain}/shop/${senderID}`, { headers })
                .then(res => {
                    let { pets, animals } = res.data.data;
                    let { money } = res.data;

                    switch (input) {
                        case 1: {
                            if (animals.length == 0) {
                                send(getText("shopErrorNoAnimal"), 1);
                            } else {
                                api.unsendMessage(handleReply.messageID);
                                const choices = animals.map((animal, index) => `${index + 1}. ${getText(animal.name.toLowerCase())} (${animal.price}$)`).join("\n");
                                send(getText("shopBuyAnimal", money, choices), 1, (err, info) => {
                                    if (err) return handleError(err);
                                    else global.client.handleReply.push({
                                        name: this.config.name,
                                        type: "buyAnimal",
                                        author: senderID,
                                        messageID: info.messageID,
                                        money,
                                        animals
                                    });
                                })
                            }

                            break;
                        }
                        case 2: {
                            if (pets.length == 0) {
                                send(getText("shopErrorNoPet"), 1);
                            } else {
                                api.unsendMessage(handleReply.messageID);
                                const choices = pets.map((pet, index) => `${index + 1}. ${getText(pet.name.toLowerCase())} (${pet.price}$)`).join("\n");
                                send(getText("shopBuyPet", money, choices), 1, (err, info) => {
                                    if (err) return handleError(err);
                                    else global.client.handleReply.push({
                                        name: this.config.name,
                                        type: "buyPet",
                                        author: senderID,
                                        messageID: info.messageID,
                                        money,
                                        pets
                                    });
                                })
                            }

                            break;
                        }
                        case 3: {
                            get(`${domain}/info/${senderID}`, { headers })
                                .then(res => {
                                    if (res.data.data.barn_items.length == 0) {
                                        send(getText("shopErrorNoBarnItem"), 1);
                                    } else {
                                        api.unsendMessage(handleReply.messageID);

                                        const body = {
                                            action: "sell",
                                            sellTarget: "goods"
                                        }

                                        put(`${domain}/others/${senderID}`, body, { headers })
                                            .then(res => {
                                                if (res.data.message != 'Sell successfully') {
                                                    send(getText("shopErrorSell"), 1);
                                                } else {
                                                    let { moneyGained, moneyBonus, money } = res.data.data;

                                                    send(getText("shopSellSuccess", moneyGained - moneyBonus, moneyBonus, money), 1);
                                                }
                                            })
                                            .catch(err => handleError(err));
                                    }
                                })
                                .catch(err => handleError(err));

                            break;
                        }
                        case 4: {
                            get(`${domain}/info/${senderID}`, { headers })
                                .then(res => {
                                    if (res.data.data.silo_items.length == 0) {
                                        send(getText("shopErrorNoBarnItem"), 1);
                                    } else {
                                        api.unsendMessage(handleReply.messageID);
                                        const body = {
                                            action: "sell",
                                            sellTarget: "crops"
                                        }

                                        put(`${domain}/others/${senderID}`, body, { headers })
                                            .then(res => {
                                                if (res.data.message != 'Sell successfully') {
                                                    send(getText("shopErrorSell"), 1);
                                                } else {
                                                    console.log(JSON.stringify(res.data, null, 4));
                                                    let { moneyGained, moneyBonus, money } = res.data.data;

                                                    send(getText("shopSellSuccess", moneyGained - moneyBonus, moneyBonus, money), 1);
                                                }
                                            })
                                            .catch(err => handleError(err));
                                    }
                                })
                                .catch(err => handleError(err));

                            break;
                        }
                        default: {
                            getText("outOfRange");
                            break;
                        }
                    }
                })
                .catch(err => handleError(err));

            break;
        }
        case "buyAnimal": {
            const { animals, money } = handleReply;

            if (input < 1 || input > animals.length) {
                send(getText("outOfRange"), 1);
            } else {
                api.unsendMessage(handleReply.messageID);

                const chosenAnimal = animals[input - 1];
                send(getText("enterAmount", money, chosenAnimal.inStock, chosenAnimal.price), 1, (err, info) => {
                    if (err) return handleError(err);
                    else global.client.handleReply.push({
                        name: this.config.name,
                        type: "buyAnimalAmount",
                        author: senderID,
                        messageID: info.messageID,
                        money,
                        chosenAnimal
                    });
                })
            }

            break;
        }
        case "buyPet": {
            const { pets, money } = handleReply;

            if (input < 1 || input > pets.length) {
                send(getText("outOfRange"), 1);
            } else {
                api.unsendMessage(handleReply.messageID);

                const chosenPet = pets[input - 1];
                send(getText("enterAmount", money, chosenPet.inStock, chosenPet.price), 1, (err, info) => {
                    if (err) return handleError(err);
                    else global.client.handleReply.push({
                        name: this.config.name,
                        type: "buyPetAmount",
                        author: senderID,
                        messageID: info.messageID,
                        money,
                        chosenPet
                    });
                })
            }

            break;
        }
        case "buyAnimalAmount": {
            const { chosenAnimal, money } = handleReply;

            if (input < 1 || input > chosenAnimal.inStock) {
                send(getText("outOfRange"), 1);
            } else if (money < chosenAnimal.price * input) {
                send(getText("notEnoughMoney"), 1);
            } else {
                const body = {
                    action: "buy",
                    animalId: chosenAnimal.id,
                    amount: input
                }

                put(`${domain}/others/${senderID}`, body, { headers })
                    .then(res => {
                        api.unsendMessage(handleReply.messageID);
                        if (res.data.message != "Buy successfully") {
                            send(getText("buyFail"), 1);
                        } else send(getText("buySuccess", getText(chosenAnimal.name.toLowerCase()), input, chosenAnimal.price * input, res.data.data.money), 1);
                    })
                    .catch(err => handleError(err));
            }

            break;
        }
        case "buyPetAmount": {
            const { chosenPet, money } = handleReply;

            if (input < 1 || input > chosenPet.inStock) {
                send(getText("outOfRange"), 1);
            } else if (money < chosenPet.price * input) {
                send(getText("notEnoughMoney"), 1);
            } else {
                const body = {
                    action: "buy",
                    petId: chosenPet.id,
                    amount: input
                }

                put(`${domain}/others/${senderID}`, body, { headers })
                    .then(res => {
                        api.unsendMessage(handleReply.messageID);
                        if (res.data.message != "Buy successfully") {
                            send(getText("buyFail"), 1);
                        } else send(getText("buySuccess", getText(chosenPet.name.toLowerCase()), input, chosenPet.price * input, res.data.data.money), 1);
                    })
                    .catch(err => handleError(err));
            }

            break;
        }
        default: break;
    }

    return;
}

module.exports.run = function ({ api, event, args, getText }) {
    const { get, put } = global.nodemodule["axios"];
    const { threadID, messageID, senderID } = event;

    const send = (msg, type, callback = null) => {
        if (type == 0) api.sendMessage(msg, threadID, callback);
        else if (type == 1) api.sendMessage(msg, threadID, callback, messageID);
    }
    const handleError = err => {
        if (err.response?.status == 404) {
            send(getText("getErrorNotFound"), 0);
        } else {
            send(getText("getError"), 0);
        }
        console.error(err.response?.data?.message || err);
    }
    const query = args[0]?.toLowerCase();

    if (!query) {
        get(banner, { responseType: "stream" })
            .then(res => {
                send({
                    body: getText("introduction"),
                    attachment: res.data
                }, 0);
            })
            .catch(err => handleError(err));
    } else {
        switch (query) {
            case "đk":
            case "dk":
            case "đăng ký":
            case "dang ky":
            case "dangky":
            case "reg":
            case "-r":
            case "register":
                {
                    get(`${domain}/info/${senderID}`, { headers })
                        .then(res => {
                            send(getText("registerErrorExist", res.data.data.name), 1);
                        })
                        .catch(err => {
                            if (!args[1]) {
                                send(getText("registerErrorMissingName"), 1);
                            } else {
                                send(getText("registerConfirm", senderID, args.slice(1).join(" ")), 1, (err, info) => {
                                    global.client.handleReaction.push({
                                        name: this.config.name,
                                        type: "register",
                                        author: senderID,
                                        messageID: info.messageID,
                                        data: {
                                            id: senderID,
                                            name: args.slice(1).join(" ")
                                        }
                                    })
                                });
                            }
                        })

                    break;
                }
            case "tt":
            case "thongtin":
            case "thong tin":
            case "thông tin":
            case "-i":
            case "info":
                {
                    get(`${domain}/info/${senderID}`, { headers })
                        .then(res => {
                            const { data } = res.data;
                            get(houses[data.houseLevel], { responseType: "stream" })
                                .then(res => {
                                    send({
                                        body: getText("basicInfo",
                                            senderID,
                                            data.name,
                                            data.level,
                                            data.exp,
                                            data.houseLevel,
                                            data.money,
                                            data.silo_items.reduce((acc, cur) => acc + cur.amount, 0),
                                            data.silo_size,
                                            data.barn_items.reduce((acc, cur) => acc + cur.amount, 0),
                                            data.barn_size
                                        ),
                                        attachment: res.data
                                    }, 1)
                                })
                                .catch(err => handleError(err));
                        })
                        .catch(err => handleError(err));

                    break;
                }
            case "ruong":
            case "ruộng":
            case "-f":
            case "fields":
                {
                    get(`${domain}/fields/${senderID}`, { headers })
                        .then(res => {
                            const { data } = res.data;
                            const crops_list = data.crops.map(crop => {
                                const current_crop = crops[crop.id];
                                return `[ ${current_crop.slice(current_crop.lastIndexOf("/") + 1, current_crop.lastIndexOf("."))} ]\n→ ${crop.amount}\n→ ${crop.timeRemaining} (${crop.percentFinished})`;
                            }).join("\n\n");

                            send(getText("fieldsInfo", crops_list), 1, (err, info) => {
                                if (err) handleError(err);
                                else global.client.handleReply.push({
                                    name: this.config.name,
                                    type: "fields",
                                    author: senderID,
                                    messageID: info.messageID
                                })
                            });
                        })
                        .catch(err => handleError(err));

                    break;
                }
            case "gs":
            case "giasuc":
            case "gia suc":
            case "gia súc":
            case "-a":
            case "animals":
                {
                    get(`${domain}/info/${senderID}`, { headers })
                        .then(res => {
                            const { data } = res.data;

                            const animalShelters = data.animalShelters.filter(shelter => shelter.current > 0);
                            get(`${domain}/animalShelters/${senderID}`, { headers })
                                .then(res => {
                                    const animalSheltersDetailed = res.data.data;
                                    const animalSheltersDetailed_list = animalShelters.length == 0 ? "" : animalSheltersDetailed.map(shelter => {
                                        const current_shelter = animalShelters[shelter.id];
                                        let shelterEach = "";

                                        for (let i = 0; i < shelter.data.length; i++) {
                                            const curAnimal = shelter.data[i];

                                            if (!curAnimal || curAnimal.isHungry == true) {
                                                shelterEach += getText("animalHungry");
                                            } else {
                                                shelterEach += `\n• ${curAnimal.timeRemaining} (${curAnimal.percentFinished})`;
                                            }
                                        }

                                        return `[ ${getText(current_shelter.type)} ] ${shelterEach ? '\n\n' + shelterEach : ''} \n\n→ ${current_shelter.current} / ${current_shelter.max} ←`;
                                    }).join("\n\n");

                                    send(getText("animalsInfo", animalSheltersDetailed_list), 1, (err, info) => {
                                        if (err) handleError(err);
                                        else global.client.handleReply.push({
                                            name: this.config.name,
                                            type: "animals",
                                            author: senderID,
                                            messageID: info.messageID
                                        })
                                    })
                                })
                                .catch(err => handleError(err));
                        })
                        .catch(err => handleError(err));

                    break;
                }
            case "ch":
            case "cuahang":
            case "cua hang":
            case "cửa hàng":
            case "-s":
            case "shop":
                {
                    send(getText("shop"), 1, (err, info) => {
                        if (err) handleError(err);
                        else global.client.handleReply.push({
                            name: this.config.name,
                            type: "shop",
                            author: senderID,
                            messageID: info.messageID
                        })
                    })

                    break;
                }
            case "trom":
            case "antrom":
            case "an trom":
            case "trộm":
            case "ăn trộm":
            case "-stl":
            case "steal":
                {
                    const body = {
                        action: "steal"
                    }

                    put(`${domain}/others/${senderID}`, body, { headers })
                        .then(res => {
                            const { message, data, timeLeft } = res.data;

                            if (message != 'Steal successfully' && message != 'Steal failed') {
                                if (message.startsWith('You can steal only once per ')) {
                                    send(getText("stealErrorCooldown", timeLeft), 1);
                                } else send(getText("stealError"), 1);
                            } else {
                                const { stolen, lost } = data;

                                const msg = message == 'Steal successfully' ? getText("stealSuccess", stolen) : getText("stealFailed", lost);
                                send(msg, 1);
                            }
                        })
                        .catch(err => handleError(err));

                    break;
                }
            case "ls":
            case "lichsu":
            case "lich su":
            case "lịch sử":
            case "-h":
            case "history":
                {
                    send(getText("history"), 1, (err, info) => {
                        if (err) handleError(err);
                        else global.client.handleReply.push({
                            name: this.config.name,
                            type: "histories",
                            author: senderID,
                            messageID: info.messageID
                        })
                    })

                    break;
                }
            case "bxh":
            case "rank":
            case "top":
                {
                    get(`${domain}/top`, { headers })
                        .then(res => {
                            const { data } = res;
                            send("==== TOP_LEVEL ====\n" + data.data.map((e, i) => `${i + 1}. ${e.name} - ${e.level} (${e.id})`).join("\n"), 1);
                        })
                        .catch(err => handleError(err));
                    break;
                }
            default: {
                send(getText("unknownCommand"), 1);
                break;
            }
        }
    }

    return;
}
