import { author, homepage, name, version } from "../../package.json";

const debug = require("debug")("bot:about_command");

const getName = () => (ctx: any) => {
	
	const name=  ctx.from.last_name ? `${ctx.from.first_name} ${ctx.from.last_name}` : ctx.from.first_name;

	const message = `*${name}`;
	debug(`Triggered "about" command with message \n${message}`);

	ctx.reply(message);
};

export { getName };
