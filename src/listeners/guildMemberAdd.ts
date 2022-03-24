import { Events, Listener } from "@sapphire/framework";
import type { GuildMember } from "discord.js";

export class GuildMemberAddListener extends Listener<typeof Events.GuildMemberAdd> {
	public run(member: GuildMember) {
		if (member.pending) return;
		this.container.welcomeMember(member);
	}
}
