import { NowRequest, NowResponse } from "@vercel/node";

import { useWebhook } from "../src/lib";

// main function
export default async function handle(req: NowRequest, res: NowResponse) {
	try {
		await useWebhook(req, res);
	} catch (e) {
		res.statusCode = 500;
		res.json(e.message);
		
	}
}
