# TeleChan - message api for telegram bot 
> 可供多人发送消息的 telegram 机器人 api ， 类似server酱的开源实现

## 直接试用我搭建的机器人

1. 添加 @TeleChan8Bot
2. 发送 /sendkey 获得 key 和 url
3. 通过 url 发送请求即可

## Example

1. add @TeleChan8Bot in telegram
2. `/sendkey` to get key & url
3. send request via url 

## How to use

1. star and fork this repo
2. goto https://vercel.com/ create a new project, select the repo just created
3. add [BotFather](https://t.me/botfather) in telegram, create new bot and get `telegram api token` 
4. set output dir to `dist` , set `BOT_TOKEN` to `telegram api token`, set `TCKEY` a random string ![image](https://user-images.githubusercontent.com/1294760/115171377-7c6ecd00-a0f5-11eb-8677-86f207ceb724.png)
5. deploy
6. send /sendkey command to the bot, you will get sendkey and api url

## API

Both HTTP `GET` or `POST` are OK 

- sendkey,required
- text,required
- desp,optional
- markdown,optional

`text` and `desp` support [telegram markdown](https://core.telegram.org/bots/api#markdownv2-style) which is a very small subset of markdown without image support

### send function 

```php
function tg_send(  $text , $desp = '' , $key = '<sendkey>'  )
{
    $postdata = http_build_query( array( 'text' => $text, 'desp' => $desp ));
    $opts = array('http' =>
    array(
        'method'  => 'POST',
        'header'  => 'Content-type: application/x-www-form-urlencoded',
        'content' => $postdata));
    
    $context  = stream_context_create($opts);
    return $result = file_get_contents('telechan8.vercel.app/api/send?sendkey='.$key, false, $context);
 
}
```

## Thanks

Heavily modified base [Telegram Bot Boilerplate with Vercel's Serverless Functions](https://github.com/waptik/telegram-bot-boilerplate-now-serverless-api)


## 中文教程

[![image](https://user-images.githubusercontent.com/1294760/115172022-f05da500-a0f6-11eb-9bb8-5919442523c6.png)](https://www.bilibili.com/video/BV1S5411c7Vy/)

[安装视频@B站，欢迎关注作者](https://www.bilibili.com/video/BV1S5411c7Vy/)

参数说明：

- sendkey,required
- text,required
- desp,optional
- markdown,optional

仅支持部分 Markdown 语法，任何不兼容以下语法的的提交，都会导致 400 错误。[注意不支持图片](https://core.telegram.org/bots/api#markdownv2-style)，注意不支持图片，注意不支持图片：

```
    *bold \*text*
    _italic \*text_
    __underline__
    ~strikethrough~
    *bold _italic bold ~italic bold strikethrough~ __underline italic bold___ bold*
    [inline URL](http://www.example.com/)
    [inline mention of a user](tg://user?id=123456789)
    `inline fixed-width code`
    ```
    pre-formatted fixed-width code block
    ```
    ```python
    pre-formatted fixed-width code block written in the Python programming language
    ```
```
