const replyToMessage = (ctx: any, messageId: string, string: string) =>
  ctx.reply(string, {
    reply_to_message_id: messageId,
  });

const greeting = () => (ctx: any) => {
  const messageId = ctx.message.message_id;
  // const userName = ctx.from.last_name ? `${ctx.from.first_name} ${ctx.from.last_name}` : ctx.from.first_name;
  
  replyToMessage(ctx, messageId, `Welcome to TeleChan, type /sendkey to get your sendkey and api url`);
  // replyToMessage(ctx, messageId, `Hello, ${userName} (user_id: ${ctx.from.id})! \n Your Message id is: ${messageId}`);
};

export { greeting };
