import type { WebhookManagerStore } from "./lib/stores/WebhookManagerStore";

export declare global {
	namespace NodeJS {
		interface ProcessEnv {
			DISCORD_TOKEN: string;
			WELCOME_CHANNEL: string;
			BEEF_ROLE: string;
		}
	}
}

declare module "@sapphire/pieces" {
	interface StoreRegistryEntries {
		webhooks: WebhookManagerStore;
	}
}
