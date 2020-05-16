var TwitterPackage = require('twitter')
var request = require('request')

console.log("Hey Bro! This is Twitter Bot!!")
var secret = {
    consumer_key = '',
    consumer_secret = '',
    acces_token_key = '',
    acces_token_secret = ''
}

var Twitter = new TwitterPackage(secret)