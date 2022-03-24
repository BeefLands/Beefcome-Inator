import { Events, Listener } from "@sapphire/framework";
import { Time } from "@sapphire/time-utilities";
import type { Client } from "discord.js";

export class ReadyListener extends Listener<typeof Events.ClientReady> {
	public run(client: Client<true>) {
		this.container.logger.info(`Logged in as ${client.user.tag}!`);
		this.container.client.user?.setActivity({ type: "WATCHING", name: "people join" });
		setInterval(() => this.container.stores.get("webhooks").get("staff").sendStaffTeam(), Time.Hour);
	}
}
