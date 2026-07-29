require("dotenv").config();

const qrcode = require("qrcode-terminal");
const {
    Client,
    LocalAuth
} = require("whatsapp-web.js");

const client = new Client({
    authStrategy: new LocalAuth({
        clientId: "financebot"
    }),

    puppeteer: {
        headless: true,
        args: [
            "--no-sandbox",
            "--disable-setuid-sandbox"
        ]
    }
});

client.on("qr", qr => {
    console.clear();

    console.log("Scan QR berikut:");

    qrcode.generate(qr, {
        small: true
    });
});

client.on("authenticated", () => {

    console.log("WhatsApp authenticated");

});

client.on("ready", () => {

    console.log("================================");
    console.log("Finance Bot Ready");
    console.log("================================");

});

client.initialize();