import { FreshContext, Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
    GET(_req: Request, _ctx: FreshContext) {
        return new Response("Hello World");
    },
    POST(_req: Request, _ctx: FreshContext) {
        return new Response("Posting World");
    },
}