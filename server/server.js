var Twitter = Meteor.require("twitter");
var TweetStream = new Meteor.Stream('tweets');
var conf = JSON.parse(Assets.getText('twitter.json'));
var twit = new Twitter({
	consumer_key: 'OVRBntKZyfBZr2bi8TPHg',
	consumer_secret: '8Z9ygiHEYEtS1Du9Vmxa7A6opkQ9kkAZg5D450Two',
	access_token_key: '1161469866-KJZvzBCwi8JtQJKohcZOf8QHog59SidKR476B8M',
	access_token_secret: '2PdcA7Hbqtjihs2ToFFoWMCnrdJasV9xeVtjuSmug4'
});

twit.stream('statuses/filter', {
	'track': '#FGLTownHall'
}, function(stream) {
	stream.on('data', function(data) {
		TweetStream.emit('tweet', data);
	});




// twit.stream('user', {
//  'track': 'SGMConf'
// }, function(stream) {
//  stream.on('data', function(data) {
//      TweetStream.emit('tweet', data);
//  });




});
