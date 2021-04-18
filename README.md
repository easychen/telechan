Telegram Bot Boilerplate with Vercel's Serverless Functions
======================

This template  is a fork of [Telegram Bot Boilerplate](https://github.com/yakovlevyuri/telegram-bot-boilerplate) framework to be used with [Vercel's Serverless Functions](https://vercel.com/docs/v2/serverless-functions/introduction). Easily deploy to [Vercel](https://vercel.com).

## Deploy your own

The easiest way to get started is deploy using this template by clicking on the Deploy button below.


[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fwaptik%2Ftelegram-bot-boilerplate-now-serverless-api&env=BOT_TOKEN,VERCEL_URL&envDescription=Bot%20token%20and%20Vercel%20url&envLink=https%3A%2F%2Fgithub.com%2Fwaptik%2Ftelegram-bot-boilerplate-now-serverless-api&demo-title=Test%20Vercel's%20Serverless%20Functions&demo-description=A%20telegram%20bot%20based%20on%20this%20source%20code&demo-url=https%3A%2F%2Ft.me%2FVercelServerlessFunctionsBot&project-name=telegram-bot-boilerplate-now-serverless-api&repository-name=telegram-bot-boilerplate-now-serverless-api)

Alternatively, if you want to make some changes before deploying it, you can fork this template and do the necessary changes you need. Then you when are done with your changes simply goto [vercel git import](https://vercel.com/import/git).

## Notes

- When importing a new project on vercel, you'll be asked to set the output directory. Set it to **dist** or the value inside [tsconfig.js](https://github.com/waptik/telegram-bot-boilerplate-now-serverless-api/blob/master/tsconfig.js#L4)
- You also need to set Environment variables. Please note the wording in brackets mentioned below. Also here is a list of environment variables you need to set:
 - `BOT_TOKEN`: Its value should be the token you received from BitFather when creating your bot. (secret)
 - `VERCEL_URL`: set to the system populated value seen in the dropdown when you choose the system variables option. (system)


##  Local development

### Step 1. Clone the project locally

You can clone this template directly or the forked version you have.

```bash
git clone https://github.com/waptik/telegram-bot-boilerplate-now-serverless-api.git

# or

git clone https://github.com/<YOUR_GITHUB_USERNAME>/telegram-bot-boilerplate-now-serverless-api.git
```

Next, navigate to the cloned directory.
```sh
cd telegram-bot-boilerplate-now-serverless-api
```

### Step 2. Configuration

Copy the `.env.example` file in this directory to `.env` (which will be ignored by Git):

```bash
cp .env.example .env
```

Next, copy your bot token you got from BotFather and and open `.env` to do the following changes.

```bash
BOT_TOKEN="<YOUR_BOT_TOKEN>"
```

> **Note:** We are not using `VERCEL_URL` here because we are in development mode as it's not needed.


### Step 3. Run the bot in development mode

Make sure you have [Vercel CLI](https://vercel.com/download) installed on your local machine.

```bash
npm install
npm run dev

# or

yarn install
yarn dev
```

Your app should be up and running! Send a message to your bot on telgram and you'll receive a reply instantly!

### Step 4. Deploy on Vercel
After you are done, simply do the the following.
If you cloned this template directly on your machine, you need set the origin. Read more on how to do that [Add a remote](https://github.com/git-guides/git-remote#common-git-remote-commands).

After you are done or if you cloned the forked version, simply push to GitHub

```bash
git push
```


## Demo
You can see a working version of the bot at  [@VercelServerlessFunctionsBot](https://t.me/VercelServerlessFunctionsBot)



Pull Requests are welcomed 😉
