import { Hono } from "hono";
import type { OAuthHelpers } from "@cloudflare/workers-oauth-provider";

export type Bindings = Env & {
	OAUTH_PROVIDER: OAuthHelpers;
};

type Variables = {
	isLoggedIn: boolean;
};
const app = new Hono<{
	Bindings: Bindings;
	Variables: Variables;
}>();
export default app;
