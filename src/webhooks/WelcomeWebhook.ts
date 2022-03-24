import { ApplyOptions } from "@sapphire/decorators";
import { GuildMember, MessageEmbed } from "discord.js";
import { WebhookManager, WebhookManagerOptions } from "../lib/pieces/WebhookManager";

@ApplyOptions<WebhookManagerOptions>({
	name: "welcome",
	channelId: process.env.WELCOME_CHANNEL,
	webhookName: "BeefLands Welcomes"
})
export class WelcomeWebhook extends WebhookManager {
	public async sendWelcome(member: GuildMember) {
		await member.roles.add(process.env.BEEF_ROLE);
		return this.send({
			embeds: [
				new MessageEmbed()
					.setColor("BLUE")
					.setTitle("Welcome to BeefLands")
					.setDescription(`Welcome to Beeflands, ${member}!`)
			]
		});
	}
}
