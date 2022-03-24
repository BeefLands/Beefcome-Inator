import { container, SapphireClient } from "@sapphire/framework";
import { config } from "dotenv";
import "@sapphire/plugin-logger/register";
import { WebhookManagerStore } from "./lib/stores/WebhookManagerStore";
import { join } from "path";
config();

const client = new SapphireClient({
	intents: ["GUILDS", "GUILD_MEMBERS"]
});

container.stores.register(new WebhookManagerStore().registerPath(join(__dirname, "webhooks")));

await client.login();
