import { container, SapphireClient } from "@sapphire/framework";
import { config } from "dotenv";
import "@sapphire/plugin-logger/register";
import { WebhookManagerStore } from "./lib/stores/WebhookManagerStore";
config();

const client = new SapphireClient({
	intents: ["GUILDS", "GUILD_MEMBERS"]
});

container.stores.register(new WebhookManagerStore());

await client.login();
