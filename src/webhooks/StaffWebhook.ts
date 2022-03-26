import { ApplyOptions } from "@sapphire/decorators";
import { MessageEmbed } from "discord.js";
import { WebhookManager, WebhookManagerOptions } from "../lib/pieces/WebhookManager";

@ApplyOptions<WebhookManagerOptions>({
	name: "staff",
	channelId: process.env.STAFF_CHANNEL,
	webhookName: "BeefLands Staff Team"
})
export class StaffWebhook extends WebhookManager {
	public async sendStaffTeam() {
		const guild = await this.container.client.guilds.fetch(this.guildId);
		await guild.members.fetch();
		const roles = await guild.roles.fetch();
		const embed = new MessageEmbed()
			.setColor("#A52A2A")
			.setTitle("BeefLands Staff Team")
			.setFooter({ text: "⌚ Staff team gets updated every hour" });
		process.env.STAFF_ROLES.forEach((roleId) => {
			const role = roles.get(roleId);
			if (role)
				embed.addField(role.name, role.members.map((member) => member.toString()).join("\n") ?? "None", true);
		});
		embed.addField("Special Kid", "<@628829764135813160>");
		embed.addField("Supreme Leader", "<@511209271678074891>");
		return process.env.STAFF_MESSAGE
			? this.editMessage(process.env.STAFF_MESSAGE, { embeds: [embed] })
			: this.send({ embeds: [embed] });
	}
}
