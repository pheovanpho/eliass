module.exports.config = {
    name: "viotp",
    version: "1.0.0",
    hasPermssion: 3,
    credits: "BraSL",
    description: "thuê số đt trên VIOTP.COM",
    commandCategory: "Hệ thống admin-bot",
    usages: "viotp [thuê/check]",
    cooldowns: 3
    
};
module.exports.run = async({api,event,args}) => {
    const fs = global.nodemodule["fs-extra"];
    const request = global.nodemodule["request"];
    const axios = global.nodemodule['axios'];  
    const { threadID, messageID, mentions } = event;
  var token = "3e05ff352da04fafa17eed0bdbd57ff3";
  switch (args[0]) {
      case "-a": { 
         return api.sendMessage(`List nhà mạng trên VIOTP\n\n ID: 1 ⇏ MOBIFONE\n ID: 2 ⇏ VINAPHONE\n ID: 3 ⇏ VIETTEL\n ID: 4 ⇏ VIETNAMOBILE\n ID: 5 ⇏ ITELECOM`, event.threadID, event.messageID);
       }
         case "-dv": { 
           return api.sendMessage(`List dịch vụ trên VIOPT\n\n ID: 1 ⇏ Momo\n▶ Giá: 1300vnd\n ID: 2 ⇏ Lazada\n▶ Giá: 1150vnd\n ID: 3 ⇏ Gmail/Google\n▶ Giá: 1500vnd\n ID: 4 ⇏ Shopee / ShopeePay\n▶ Giá: 1300vnd\n ID: 5 ⇏ Hotmail/Outlook/Azure (Microsoft)\n▶ Giá: 1150vnd\n ID: 6 ⇏ Yahoo\n▶ Giá: 1150vnd\n ID: 7 ⇏ Facebook\n▶ Giá: 1200vnd`, event.threadID, event.messageID);    
        }
       case "-m": {
    const res = await axios.get(`https://api.viotp.com/users/balance?token=${token}`); 
    if (res.data.success == false)  return api.sendMessage(`TOKEN không hợp lệ`, event.threadID, event.messageID);
    var money = res.data.data.balance 
      var success = res.data.success 
      return api.sendMessage(`Số tiền hiện có của bạn trên VIOPT là: ${money}`, event.threadID, event.messageID);
 };
       case "-o": {   
          const id = args.join(" ").trim().replace(/\s+/g, " ").replace(/(\s+\|)/g, "|").replace(/\|\s+/g, "|").split("|")[1];
          const name = args.join(" ").trim().replace(/\s+/g, " ").replace(/(\s+\|)/g, "|").replace(/\|\s+/g, "|").split("|")[2];
        const res = await axios.get(`https://api.viotp.com/request/get?token=${token}&serviceId=${id}&network=${name}`)
          if (res.data.success == false)  return api.sendMessage(`TOKEN không hợp lệ `, event.threadID, event.messageID);
          if (res.data.status_code == -1)  return api.sendMessage(`Nhà mạng không hợp lệ, chỉ chấp nhận: MOBIFONE, VINAPHONE, VIETTEL, VIETNAMOBILE, ITELECOM, METFONE`, event.threadID, event.messageID);
          var phone_number = res.data.data.phone_number
          var request_id = res.data.data.request_id
     var money = res.data.data.balance
     return api.sendMessage(`Tạo yêu cầu thành công !\nSĐT: ${phone_number}\nID check: ${request_id}\nSố tiền còn lại: ${money}vnd`, event.threadID, event.messageID);      
   }
      case "-c": {
        
           const id = args.join(" ").trim().replace(/\s+/g, " ").replace(/(\s+\|)/g, "|").replace(/\|\s+/g, "|").split("|")[1];
        const res = await axios.get(`https://api.viotp.com/session/get?requestId=${id}&token=${token}`)
            if (res.data.success == false) { return api.sendMessage(`TOKEN không hợp lệ`, event.threadID, event.messageID);}
            if (res.data.status_code == -2) {return api.sendMessage(`ID không đúng`, event.threadID, event.messageID);}
       var phone = res.data.data.Phone
            var code = res.data.data.Code
          var SmsContent = res.data.data.SmsContent
        var CreatedTime = res.data.data.CreatedTime
          return api.sendMessage(`Check thành công !\nSĐT: ${phone}\nCODE: ${code}\nNội dung: ${SmsContent}\n\nThời gian tạo: ${CreatedTime}`, event.threadID, event.messageID);    
  }
      case "-sd": {
        
           const id = args.join(" ").trim().replace(/\s+/g, " ").replace(/(\s+\|)/g, "|").replace(/\|\s+/g, "|").split("|")[1];
        const sodau = args.join(" ").trim().replace(/\s+/g, " ").replace(/(\s+\|)/g, "|").replace(/\|\s+/g, "|").split("|")[2];
        const res = await axios.get(`https://api.viotp.com/request/get?token=${token}&serviceId=${id}&prefix=${sodau}`)
            if (res.data.success == false)  return api.sendMessage(`TOKEN không hợp lệ `, event.threadID, event.messageID);
          if (res.data.status_code == -1)  return api.sendMessage(`Đầu số muốn lấy không hợp lệ`, event.threadID, event.messageID);
          var phone_number = res.data.data.phone_number
          var request_id = res.data.data.request_id
        var money = res.data.data.balance
     return api.sendMessage(`Tạo yêu cầu thành công !\nSĐT: ${phone_number}\nID check: ${request_id}\nSố tiền còn lại: ${money}vnd`, event.threadID, event.messageID);   
  }
      case "-socu": {
        const id = args.join(" ").trim().replace(/\s+/g, " ").replace(/(\s+\|)/g, "|").replace(/\|\s+/g, "|").split("|")[1];
        const number = args.join(" ").trim().replace(/\s+/g, " ").replace(/(\s+\|)/g, "|").replace(/\|\s+/g, "|").split("|")[2];
        const res = await axios.get(`https://api.viotp.com/request/get?token=${token}&serviceId=${id}&number=${number}`)
            if (res.data.success == false)  return api.sendMessage(`TOKEN không hợp lệ `, event.threadID, event.messageID);
          if (res.data.status_code == -4)  return api.sendMessage(`Hiện không có sẵn số điện thoại phù hợp, vui lòng thử lại sau!`, event.threadID, event.messageID);
          var phone_number = res.data.data.phone_number
          var request_id = res.data.data.request_id
        var money = res.data.data.balance
     return api.sendMessage(`Tạo yêu cầu thành công !\nSĐT: ${phone_number}\nID check: ${request_id}\nSố tiền còn lại: ${money}vnd`, event.threadID, event.messageID);   
  }
     default: {
        return api.sendMessage(`"Bạn có thể dùng: \n» ${global.config.PREFIX}viotp -m -> xem số tiền \n» ${global.config.PREFIX}viotp -a -> xem các nhà mạng\n» ${global.config.PREFIX}viotp -dv -> xem các dịch vụ trên VIOTP\n» ${global.config.PREFIX}viotp -o -> để thuê sdt\n» ${global.config.PREFIX}viotp -c -> để check mã code\n» ${global.config.PREFIX}viotp -sd -> chọn đầu số muốn thuê (vd: 039,098)\n» ${global.config.PREFIX}viotp -socu -> thuê lại số cũ\n» HDSD: ${global.config.PREFIX}viotp <case>"`, event.threadID, event.messageID); 
        
        }
       
  };  
}   
