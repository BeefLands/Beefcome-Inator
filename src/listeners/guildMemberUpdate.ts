import { Events, Listener } from "@sapphire/framework";
import type { GuildMember, PartialGuildMember } from "discord.js";

export class GuildMemberUpdateListener extends Listener<typeof Events.GuildMemberUpdate> {
	public run(oldMember: GuildMember | PartialGuildMember, newMember: GuildMember) {
		if (oldMember.pending && !newMember.pending) {
			this.container.welcomeMember(newMember);
		}
	}
}
