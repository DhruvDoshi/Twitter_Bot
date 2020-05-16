<p align="center">
  <a href="" rel="noopener">
 <img width=800px height=200px src="https://github.com/DhruvDoshi/twitter-bot/blob/master/src/twitter_gif.gif" alt="Bot logo"></a>
</p>

<h3 align="center">twitter-bot</h3>

<div align="center">


[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/DhruvDoshi/twitter-bot.svg)](https://github.com/DhruvDoshi/twitter-bot/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/DhruvDoshi/twitter-bot.svg)](https://github.com/DhruvDoshi/twitter-bot/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> 🤖 This bot will reply to any hashtags with predefined lines and it could also work as anews retweeter or a news site twitter bot.
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Demo / Working](#demo)
- [How it works](#working)
- [Usage](#usage)
- [Getting Started](#getting_started)
- [Deploying your own bot](#deployment)
- [Built Using](#built_using)
- [TODO](../TODO.md)
- [Contributing](../CONTRIBUTING.md)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## 🧐 About <a name = "about"></a>

There are two index files whenre each do have theier different utilization, here the major thing the bot does is retweeting teh news from the famous news twitter handle (preferable CNN) and along with that we could derive the system to reply specific lines to targeted hashtags here we are using #covid as it is developed during the lockdown period.

## 🎥 Demo / Working <a name = "demo"></a>

To use this or have a demo please register to developer community of twiter and get the specific codes which would be required to run this api in your system.

## 💭 How it works <a name = "working"></a>

The bot is working with developer.twitter.com api and key which allows the developers to interact with the system with command line. The major theme on which the bot is working is depending on taking the message from the news twitter handle and then tweet it.

During the tweeting part it will take the message along with that to provide the credit to the news website it will also grab the name and status_id and pin it with the tweet.

In any case the tweeting bot fails then it will draft a message to the user in the console and to the tweeting part of the system.

If there are no updates in the news markets then it will tweet like "Nothing new is happening!!". We could tweek the setting to change the message.

## 🎈 Usage <a name = "usage"></a>

To use the bot, type:

```
npm install
```
and then 
```
npm start 
```
This will let you use the replying bot and to use the news bot plese change the package.json file.



## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them.

```
Give examples
```

### Installing

A step by step series of examples that tell you how to get a development env running.

Say what the step will be

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo.

## 🚀 Deploying your own bot <a name = "deployment"></a>

To see an example project on how to deploy your bot, please see my own configuration:

- **Heroku**: https://github.com/kylelobo/Reddit-Bot#deploying_the_bot

## ⛏️ Built Using <a name = "built_using"></a>

- [PRAW](https://praw.readthedocs.io/en/latest/) - Python Reddit API Wrapper
- [Heroku](https://www.heroku.com/) - SaaS hosting platform

## ✍️ Authors <a name = "authors"></a>

- [@kylelobo](https://github.com/kylelobo) - Idea & Initial work

See also the list of [contributors](https://github.com/kylelobo/The-Documentation-Compendium/contributors) who participated in this project.

## 🎉 Acknowledgements <a name = "acknowledgement"></a>

- Hat tip to anyone whose code was used
- Inspiration
- References
