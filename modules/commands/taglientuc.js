module.exports.config = {
  name: "taglientuc",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "NTKhang",
  description: "tag liên tục, gọi hồn người được tag",
  commandCategory: "TIỆN ÍCH",
  usages: "@tag <nội dung gọi hồn> <số lần tag> <thời gian giữa mỗi lần tag (giây)>\NVí dụ: taglientuc @tag dô đây tương tác bạn ey 10 2",
  cooldowns: 5
};

module.exports. run = async function({ api, args, Users, event }) {
  function delay(ms) {
   return new Promise(resolve => setTimeout(resolve, ms));
  };
  const { mentions, threadID, messageID } = event;
  function reply(body) {
    api.sendMessage(body, threadID, messageID);
  }
  
	let solantag = args[args.length - 2];
  let time = args[args.length - 1]; // khoảng cách mỗi lần tag
	
                // Check syntax
  if (Object.keys(mentions) == 0) return reply("🌸Vui lòng tag người bạn muốn gọi hồn🌸");
  if (!solantag || !time) return global.utils.throwError(this.config.name, threadID, messageID);
  if (isNaN(solantag)) return reply("🌸Số lần tag phải là một con số🌸");
  if (isNaN(time)) return reply("🌸Thời gian giữa mỗi lần tag phải là một con số🌸");
  time = time*1000;
  const target = Object.keys(mentions)[0];
  const mentionsTag = [];
  for (let id in mentions) {
    mentionsTag.push({
      id,
      tag: mentions[id].replace("@", "")
    })
  }
  reply(`🌸Chuẩn bị gọi hồn...🌸`);
  const noidungtag = args.slice(0, args.length - 2).join(" ").replace(/@/g, "");
  let i = 0;
  for (let i = 0; i < solantag; i++) {
    await delay(time);
    api.sendMessage({
      body: `${noidungtag}`,
      mentions
    }, threadID);
  }
};