module.exports = {
  config: {
    name: "prefix",
    version: "1.0",
    author: "Tokodori_Frtiz", // remodified by cliff
    countDown: 5,
    role: 0,
    shortDescription: "no prefix",
    longDescription: "no prefix",
    category: "auto 🪐",
  },

  onStart: async function () {},

  onChat: async function ({ event, message }) {
    if (event.body && event.body.toLowerCase() === "prefix") {
      try {
        return message.reply({
          body: `
‣ 𝐆𝐥𝐨𝐛𝐚𝐥 𝐏𝐫𝐞𝐟𝐢𝐱: -
‣ 𝐘𝐨𝐮𝐫 𝐆𝐫𝐨𝐮𝐩 𝐏𝐫𝐞𝐟𝐢𝐱: mim

‣ 𝐀𝐝𝐦𝐢𝐧:
‣ 𝐅𝐚𝐡𝐢𝐦 𝐀𝐡𝐦𝐞𝐝

‣ 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 ⓕ:
‣ https://www.facebook.com/hackar.vaiya
          `,
          attachment: await global.utils.getStreamFromURL("https://i.imgur.com/WxtBNOq.jpeg")
        });
      } catch (err) {
        console.error("❌ Error in prefix command:", err);
        return message.reply("Something went wrong while sending the prefix message.");
      }
    }
  }
}