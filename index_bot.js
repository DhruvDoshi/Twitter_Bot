const request = require("request");

var Twitter = new TwitterPackage(secret)

function tweetFromRandomSource(sources, screen_name, status_id){
    var max = sources.length;
    var RandomSource = sources[Math.floor(Math.random()*(max + 1))];
}

function getAllSourcesAndTweet(){
    var sources = [];
    console.log('getting sources .....')
    request({
        url: 'https://newsapi.org/v1/articles?source=' + newSource + '@apikey= MYAPIKEY', method: 'GET'
    },
    function(error, response, body){
        //response if the bot get the error
        if (!error && response.statusCode == 200) {
            //printing the response body
            var botResponse = JSON.parse(body);
            for(var i = 0; i < botResponse.sources.length; i++){
                console.log('adding .....' + botResponse.sources[i].id);
                sources.push(botResponse.sources[i].id)
            }
            tweetFromRandomSource(sources, null, null);
        }
        else {
            console.log('Sorry Nothing is New in the Market')
        }
    });
}