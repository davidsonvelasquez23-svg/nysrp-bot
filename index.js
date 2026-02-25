const { Client, GatewayIntentBits } = require("discord.js");
const express = require("express");
const config = require("./config.json");

const app = express();
app.get("/", (req, res) => res.send("NYS RP Bot online"));
app.listen(process.env.PORT || 3000);

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.once("ready", () => {
  console.log("BOT ONLINE 24/7");
});

client.login(process.env.TOKEN);
