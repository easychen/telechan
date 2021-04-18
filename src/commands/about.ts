import { author, homepage, name, version } from "../../package.json";

const debug = require("debug")("bot:about_command");

const about = () => (ctx: any) => {
	const message = `*${name} ${version}*\n${author}\n${homepage}`;
	debug(`Triggered "about" command with message \n${message}`);

	return ctx.replyWithMarkdown(message);
};

export { about };
