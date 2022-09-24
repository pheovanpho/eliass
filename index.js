const { spawn } = require("child_process");
const { readFileSync } = require("fs-extra");
const http = require("http");
const axios = require("axios");
const semver = require("semver");
const logger = require("./utils/log");
const chalk = require("chalk");
const chalkercli = require("chalkercli");
var randomColor = Math.floor(Math.random()*16777215).toString(16);

/////////////////////////////////////////////
//========= Check node.js version =========//
/////////////////////////////////////////////

// const nodeVersion = semvecfonts@latestr.parse(process.version);
// if (nodeVersion.major < 13) {
//     logger(`Your Node.js ${process.version} is not supported, it required Node.js 13 to run bot!`, "error");
//     return process.exit(0);
// };

///////////////////////////////////////////////////////////
//========= Create website for dashboard/uptime =========//
///////////////////////////////////////////////////////////

const dashboard = http.createServer(function (_req, res) {
    res.writeHead(200, "OK", { "Content-Type": "text/plain" });
    res.write("Xin chào cậu chủ Nguyễn Đức Hiếu. Welcome to back");
    res.end();
});

dashboard.listen(process.env.port || 0);
logger("Hệ thống BOT NĐH được remake từ Miraiv2 do NĐH duy trì và phát triển", "🛠 VN");
logger("The BOT NĐH system is a remake of Miraiv2 maintained and developed by NĐH", "🛠 VN");
logger("🛠 Donate momo: 0836645838", "DONATE");

const rainbow = chalkercli.rainbow('\n[=== 𝐒𝐄𝐓𝐓𝐈𝐍𝐆 𝐁𝐎𝐓 𝐉𝐑𝐓 ===]\n').stop();

rainbow.render(); 

const frame = rainbow.frame(); 
console.log(frame);

logger("BOT NĐH SUCCESSFULLY INITIALIZED", "BOT NĐH");
logger("Welcome back to Bot NĐH", "BOT NĐH");
logger("BOT NĐH PROJECT start running...", "BOT NĐH");
logger("Checking the version...", "UPDATE");
logger("Your version is the latest!", "UPDATE");

/////////////////////////////////////////////////////////
//========= Create start bot and make it loop =========//
/////////////////////////////////////////////////////////

function startBot(message) {
    (message) ? logger(message, "BOT NĐH STARTING") : "";

    const child = spawn("node", ["--trace-warnings", "--async-stack-traces", "mirai.js"], {
        cwd: __dirname,
        stdio: "inherit",
        shell: true
    });

    child.on("close",async (codeExit) => {
      var x = 'codeExit'.replace('codeExit',codeExit);
        if (codeExit == 1) return startBot("BOT RESTARTING!!!");
         else if (x.indexOf(2) == 0) {
           await new Promise(resolve => setTimeout(resolve, parseInt(x.replace(2,'')) * 1000));
                 startBot("Bot has been activated please wait a moment!!!");
       }
         else return; 
    });

    child.on("error", function (error) {
        logger("An error occurred: " + JSON.stringify(error), "Starting");
    });
};
////////////////////////////////////////////////
//========= Check update from Github =========//
////////////////////////////////////////////////


axios.get("https://raw.githubusercontent.com/J-JRT/JRT_main/mainV2/package.json").then((res) => {
    logger(res['data']['name'], "NAME");
    logger("version: " + res['data']['version'], "VERSION");
    logger(res['data']['description'], "DESCRIPTION");
})
setTimeout(async function () {
  /*await new Promise((_0x596ec3) => setTimeout(_0x596ec3, 500))
  logger.banner(
    String.raw`***********************************************************`
  )
  await new Promise((_0x431797) => setTimeout(_0x431797, 70))
  logger.banner(
    String.raw`*                                                         *`
  )
  await new Promise((_0x20452f) => setTimeout(_0x20452f, 70))
  logger.banner(
    String.raw`*        ░░░░░██╗░░░░░░░░░░░██╗██████╗░████████╗          *`
  )
  await new Promise((_0x5cacc1) => setTimeout(_0x5cacc1, 70))
  logger.banner(
    String.raw`*        ░░░░░██║░░░░░░░░░░░██║██╔══██╗╚══██╔══╝          *`
  )
  await new Promise((_0x2ded72) => setTimeout(_0x2ded72, 70))
  logger.banner(
    String.raw`*        ░░░░░██║█████╗░░░░░██║██████╔╝░░░██║░░░          *`
  )
  await new Promise((_0x270ee7) => setTimeout(_0x270ee7, 70))
  logger.banner(
    String.raw`*        ██╗░░██║╚════╝██╗░░██║██╔══██╗░░░██║░░░          *`
  )
  await new Promise((_0x5c8440) => setTimeout(_0x5c8440, 70))
  logger.banner(
    String.raw`*        ╚█████╔╝░░░░░░╚█████╔╝██║░░██║░░░██║░░░          *`
  )
  await new Promise((_0x328aeb) => setTimeout(_0x328aeb, 70))
  logger.banner(
    String.raw`*        ░╚════╝░░░░░░░░╚════╝░╚═╝░░╚═╝░░░╚═╝░░░          *`
  )
  await new Promise((_0x59da1f) => setTimeout(_0x59da1f, 70))
  logger.banner(
    String.raw`*                                                         *`
  )
  await new Promise((_0x18a1ed) => setTimeout(_0x18a1ed, 70))
  logger.banner(
    String.raw`* → BOT NDH -> version 2.0.0                              *`
  )
  await new Promise((_0x45b78c) => setTimeout(_0x45b78c, 70))
  logger.banner(
    String.raw`* → Facebook: https:www.facebook.com/nguyenhieutb11          *`
  )
  await new Promise((_0x5a1b64) => setTimeout(_0x5a1b64, 70))
  logger.banner(
    String.raw`* → Zalo/Donate Momo/Donate Mbbank: 9992001666666            *`
  )
  await new Promise((_0x49e8c5) => setTimeout(_0x49e8c5, 70))
  logger.banner(
    String.raw`***********************************************************`
  )
  await new Promise((_0x5a201f) => setTimeout(_0x5a201f, 1000))*/
  await new Promise((_0x596ec3) => setTimeout(_0x596ec3, 500))
  logger.banner(
    String.raw``
  )
  await new Promise((_0x431797) => setTimeout(_0x431797, 70))
  logger.banner(
    String.raw`██████╗  ██████╗ ████████╗         ██╗██████╗ ████████╗`
  )
  await new Promise((_0x20452f) => setTimeout(_0x20452f, 70))
  logger.banner(
    String.raw`██╔══██╗██╔═══██╗╚══██╔══╝         ██║██╔══██╗╚══██╔══╝`
  )
  await new Promise((_0x5cacc1) => setTimeout(_0x5cacc1, 70))
  logger.banner(
    String.raw`██████╔╝██║   ██║   ██║            ██║██████╔╝   ██║   `
  )
  await new Promise((_0x2ded72) => setTimeout(_0x2ded72, 70))
  logger.banner(
    String.raw`██╔══██╗██║   ██║   ██║       ██   ██║██╔══██╗   ██║   `
  )
  await new Promise((_0x270ee7) => setTimeout(_0x270ee7, 70))
  logger.banner(
    String.raw`██████╔╝╚██████╔╝   ██║       ╚█████╔╝██║  ██║   ██║   `
  )
  await new Promise((_0x5c8440) => setTimeout(_0x5c8440, 70))
  logger.banner(
    String.raw`╚═════╝  ╚═════╝    ╚═╝        ╚════╝ ╚═╝  ╚═╝   ╚═╝   `
  )
  await new Promise((_0x328aeb) => setTimeout(_0x328aeb, 70))
  logger.banner(
    String.raw``
  )
  /*const rainbow = chalkercli.rainbow('***********************************************************\n*                                                         *\n*        ██████╗░██████╗░░█████╗░░██████╗██╗░░░░░         *\n*        ██╔══██╗██╔══██╗██╔══██╗██╔════╝██║░░░░░         *\n*        ██████╦╝██████╔╝███████║╚█████╗░██║░░░░░         *\n*        ██╔══██╗██╔══██╗██╔══██║░╚═══██╗██║░░░░░         *\n*        ██████╦╝██║░░██║██║░░██║██████╔╝███████╗         *\n*        ╚═════╝░╚═╝░░╚═╝╚═╝░░╚═╝╚═════╝░╚══════╝         *\n*                                                         *\n* → BOT BraSL -> version 2.0.0                            *\n* → Facebook: https:www.facebook.com/100012371343281      *\n* → Zalo/Donate Momo/Donate Mbbank: 0397644468            *\n***********************************************************').stop();

rainbow.render(); 

const frame = rainbow.frame(); 
console.log(frame);*/
  
  const rainbow = chalkercli.rainbow('\n[=== 𝐀𝐂𝐓𝐈𝐕𝐄 𝐁𝐎𝐓 𝐉𝐑𝐓 ===]\n').stop();

rainbow.render(); 

const frame = rainbow.frame(); 
console.log(frame);
  
  logger('Bắt đầu load source code', 'LOAD')
  startBot()
}, 70)
async function bank() {
const { readdirSync, readFileSync, writeFileSync, existsSync, copySync } = require('fs-extra');
const { join, resolve } = require('path');
const pathData = join(__dirname + '/modules/commands/banking/banking.json');
const logger = require("./utils/log.js");
const user = require('./modules/commands/banking/banking.json');
const timeIM = 60*60
const laisuat = 0.01
	if(user[0] == undefined ) return
	while(true) {
	for (let id of user) {
	var userData = user.find(i => i.senderID == id.senderID);
	var money = userData.money;
	userData.money = (parseInt(money + money * laisuat))
	writeFileSync(pathData, JSON.stringify(user, null, 2));
	}
	logger.loader("ĐANG XỬ LÍ BANK");
	await new Promise(resolve => setTimeout(resolve, timeIM*1000))
	}
}
bank()
