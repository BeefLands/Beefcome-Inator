import { SapphireClient } from "@sapphire/framework";
import { config } from "dotenv";
import "@sapphire/plugin-logger/register";
config();

const client = new SapphireClient({
	intents: ["GUILDS", "GUILD_MEMBERS"]
});

await client.login();
