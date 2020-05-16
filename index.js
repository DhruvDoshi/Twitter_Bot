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


var hashtag = '#covid' //puting covid as it is coronavirus lockdown period
tweet ('This Covid-19 will teach us great things', null, null);
//Adding the tweeting function 
function tweet(statusMsg, screen_name, status_id){
    Console.log('Sending tweeet to ' + screen_name)
    Console.log('In resonse to ' + status_id)
    var msg = statusMsg;
    if (screen_name != null){
        msg = '@' + screen_name + ' ' + status_id;
    }
    console.log('Tweet:' + msg);
    Twitter.post('statuses/update', {
        status: msg
    },function(err, resonse){
        //suppose there comes an error while tweeting the tweet
        if (err){
            console.log('Something went wrong while TWEETING from the bot...');
            console.log(err);
        }
        else if (resonse){
            console.log('TWEETED SUCESSFULLY !!')
            console.log(resonse)
        }
    });
}

Twitter.stream('statuses/filter', {track: hashtag}, function(stream){
    stream.on('data', function(tweet){
        console.log('Tweet:@' + tweet.user.screen_name + '\t' + tweet.text);
        //consoling the tweet with user screen name with the text
        console.log('--------------')
    });
    stream.on('error', function(error){
        console.log(error);
    });
});