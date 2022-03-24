import { Events, Listener } from "@sapphire/framework";
import type { GuildMember, PartialGuildMember } from "discord.js";

export class GuildMemberUpdateListener extends Listener<typeof Events.GuildMemberUpdate> {
	public run(oldMember: GuildMember | PartialGuildMember, newMember: GuildMember): any {
		if (oldMember.pending && !newMember.pending) {
			return this.container.stores.get("webhooks").get("welcome").sendWelcome(newMember);
		}
	}
}
