import { Events, Listener } from "@sapphire/framework";
import { GuildMember, MessageEmbed } from "discord.js";

export class GuildMemberAddListener extends Listener<typeof Events.GuildMemberAdd> {
	public async run(member: GuildMember) {
		const channel = await this.container.client.channels.fetch(process.env.WELCOME_CHANNEL);
		if (!channel?.isText()) return;
		await channel.send({
			embeds: [
				new MessageEmbed()
					.setColor("BLUE")
					.setTitle("Welcome to BeefLands")
					.setDescription(`Welcome to Beeflands, ${member}!`)
			]
		});
	}
}
