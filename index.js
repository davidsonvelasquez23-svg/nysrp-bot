const { Client, GatewayIntentBits } = require("discord.js");
const express = require("express");

const app = express();
app.get("/", (req, res) => res.send("NYS RP Bot online"));
app.listen(process.env.PORT || 10000);

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.once("ready", () => {
  console.log("BOT CONECTADO A DISCORD");
  console.log("Nombre:", client.user.tag);
});

console.log("TOKEN EXISTE?:", process.env.TOKEN ? "SI" : "NO");

client.login(process.env.TOKEN)
  .then(() => {
    console.log("LOGIN OK");
  })
  .catch(err => {
    console.error("ERROR LOGIN DISCORD:", err.message);
  });
