import { container } from "@sapphire/framework";
import { GuildMember, MessageEmbed } from "discord.js";

declare module "@sapphire/pieces" {
	export interface Container {
		welcomeMember(member: GuildMember): unknown;
	}
}

container.welcomeMember = async function welcomeMember(member) {
	await member.roles.add(process.env.BEEF_ROLE);
	const channel = await this.client.channels.fetch(process.env.WELCOME_CHANNEL);
	if (!channel?.isText()) return;
	await channel.send({
		embeds: [
			new MessageEmbed()
				.setColor("BLUE")
				.setTitle("Welcome to BeefLands")
				.setDescription(`Welcome to Beeflands, ${member}!`)
		]
	});
};
