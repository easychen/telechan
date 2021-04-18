# TeleChan - message api for telegram bot

[中文：安装教学](https://www.bilibili.com/video/BV1S5411c7Vy/)

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

## 感谢

本应用基于 [Telegram Bot Boilerplate with Vercel's Serverless Functions](https://github.com/waptik/telegram-bot-boilerplate-now-serverless-api)修改而成。