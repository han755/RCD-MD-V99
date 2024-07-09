//#ENJOY
/**
**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "Sri lanka .";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "94789958225@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "srilank/ampara";
global.github = process.env.GITHUB || "https://github.com/DEXTER-BOTS/RCD-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "94789958225,94757660788,94770730717,94785274495";
global.owner = process.env.OWNER_NUMBER || "94789958225,94753574803";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "";
global.scan = "";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUd0Vk16SGRjS2tIWVVLSmJQYkh3dGk2Y2JzbTV3OG5VWGtBVHFvUjhuOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiakJQWEFHNFRyUnZRblJycEF2SDdTRkZ1Y1p0a0dlRkJRTEdRcGZCczFTMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3T1NjS3hCdzN4NFZqUTl3VjFEUnlHeklXb0Z1T0RjNXc2YW1rTVgrMDI4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNRG96czd6T096MEhoaDBoNExnQXFTd3BOdnJnbzVKZnNnVi82Q0JiVm13PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdNcEw0clI1T200TE44M3hScDVUWjg4V0E5Z0djYlRQTDVLbnVXcUdzV0E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ims1UHU4ZGdhUjJHTFZ4QURXR2YweDlsZjNZbnlsY3ZyODkzM1VhWTc1Vzg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUFvZ29wSVVuTkxXUC9BK2M1SndwNytVcjFpQVFDamFvMjNHdU9VSjJsUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRjBoaS9zS1NsaFpLMFEvN0dmNlFxVjdsVk5nMVBsNWx4a3o0eU90d21GYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllNMjN5L3B1bVpvU0NsR3FjdUZ2VHZrQ1QyajRxNU1Ebk1FenhmK3l6UmJ2RHgvZUJiTzZsWW1kTmY5VjA2VlJpMU12cGJ5TURaUjBjMkhEUG1FQmlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA1LCJhZHZTZWNyZXRLZXkiOiJmNXh0ekZETkg1WWFhTVBWK0Y3Um5PbEJNZG9DZG01N21LeDFHOWJWNkJJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkxNjIzNTc0NTg2MEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIwODY0RkNDNzlGMjc4QTk5OThDOUJDRDIzQTJBRUZEQyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIwNTM0MTc2fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MTYyMzU3NDU4NjBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMUIxNzA4NTRGRjU1NDMwMUVDRkRGODM0Q0VGQ0Q0RkEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMDUzNDE3Nn0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTE2MjM1NzQ1ODYwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkM0MjE0NENDRkIzQzNCMkEwMDY2QjVGMkM5MTVCQkJGIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjA1MzQxNzl9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjRCb1BuaERwUWVlTjFFR0lOSldvWGciLCJwaG9uZUlkIjoiNzE1MWJjMzgtOWM4Yi00MjM4LWI5MWUtY2UwYjllZWRjM2FiIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhrMEo4ZGdGSEl3KzJObEhLbU1JamJDUXh4bz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJyaXN4TUFpcDE0M2F5R3VDREdjYzNrQ0JwMzg9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRzZDMTRDU0UiLCJtZSI6eyJpZCI6IjkxNjIzNTc0NTg2MDoxQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCfmYIifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tmb3hmMEZFSkNKdGJRR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InpDUmJ5c1JHNjdpcGROVHpQMjJpUjRQdUtSdWJkQ3ZKa3JxbkYwVDlRVU09IiwiYWNjb3VudFNpZ25hdHVyZSI6ImQwVG9xTVhSb25SbHRrK01COGF3WC9iMWw5b3JMRG1jdHU5TVY4Tm1ETmUzM0d3em9PczNSS2hKUXBUREIxN3VicGxmZlZya2plQ05uTGxwN05tb0N3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJQRzZnS2ViSW5Zc3lMdkRKWFo0L25VdUVRMzBSQWdNaHcyZll5RlE0R202WTdoNHdOaUpwUGNvbFlqRThDS3lzcGtPODU0NnM2Mnl0NXA1c1pPTTlodz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkxNjIzNTc0NTg2MDoxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmN3a1c4ckVSdXU0cVhUVTh6OXRva2VEN2lrYm0zUXJ5Wks2cHhkRS9VRkQifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjA1MzQxNzMsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBUExxIn0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐑𝐂𝐃-𝐌𝐃-🏛️",
  author: process.env.PACK_AUTHER || "𝐑𝐂𝐃",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐑𝐂𝐃 𝐌𝐃",
  ownername: process.env.OWNER_NAME || "𝐃𝐄𝐗𝐓𝐄𝐑,𝐕𝐈𝐏𝐄𝐑",
  errorChat: process.env.ERROR_CHAT || "94789958225",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
