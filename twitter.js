const request = require("request");

var Twitter = new TwitterPackage(secret)

topNewsTwitter('cnn', null);

function topNewsTwitter(newSource, screen_name, status_id) {
    request({
        url: 'https://newsapi.org/v1/articles?source=' + newSource + '@apikey= MYAPIKEY', method: 'GET'
    },
    function(error, response, body) {
        if (!error && response.statusCode == 200) {
            var botResponse = JSON.parse(body);
            console.log(botResponse);
            tweetTopArticle(botResponse.articles, screen_name);
        } 
        else{
            console.log('Sorry Noting is Cooking in the World!!');
        }
    });
}
//TODO Add the tweet top article
function tweetTopArticle(article, screen_name, status_id){
    var article = articles[0]
    tweet(article.tittle + " " + article.url, screen_name);
    // printing the complete tweet with article name and url 
}


