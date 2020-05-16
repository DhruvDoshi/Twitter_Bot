var Twitter = new TwitterPackage(secret)

function tweetFromRandomSource(sources, screen_name, status_id){
    var max = sources.length;
    var RandomSource = sources[Math.floor(Math.random()*(max + 1))];
}