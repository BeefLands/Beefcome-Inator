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
		const usedMembers: string[] = [];
		const embed = new MessageEmbed()
			.setColor("#A52A2A")
			.setTitle("BeefLands Staff Team")
			.addFields(
				...process.env.STAFF_ROLES.filter((roleID) => roles.has(roleID)).map((roleID) => {
					const role = roles.get(roleID)!;
					const ignoreDouble = process.env.IGNORE_DOUBLE.includes(roleID);
					const members = ignoreDouble
						? role.members
						: role.members.filter((member) => !usedMembers.includes(member.id));
					if (!ignoreDouble) {
						usedMembers.push(...members.map((member) => member.id));
					}
					return {
						name: role.name,
						value: members.size ? members.map((member) => member.toString()).join("\n") : "None",
						inline: true
					};
				}),
				{
					name: "Special Kid",
					value: "<@628829764135813160>"
				},
				{
					name: "Supreme Leader",
					value: "<@511209271678074891>"
				}
			)
			.setFooter({ text: "⌚ Staff team gets updated every hour" })
			.setTimestamp();
		return process.env.STAFF_MESSAGE
			? this.editMessage(process.env.STAFF_MESSAGE, { embeds: [embed] })
			: this.send({ embeds: [embed] });
	}
}
