// NEWS Challenge
// 1.  Go to https://newsapi.org/ and get an api key
// 	-it is best to teach them how to create a variable called API_KEY so they don't have to continually type it.

// 2.  Next have students do a wireframe to structure thoughts on how the app should
// 	be laid out.  Also, have them think about how the search will occur and then
// 	what functions will be needed to do the ajax call.  Lastly, how will the information
// 	returned be displayed.  Think about how ajax tutorial worked.

// 3.  Have students read documentation on how to successfully connect to a news endpoint.
// =====================================================================================================
var express = require('express');						
var app = express(); 
var http = require('http').Server(app);
// This is express. 
app.use(express.static(__dirname + '/public'));
// This is express.
app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});
// This is nodes http from line 5.
http.listen(process.env.PORT || 3000, function(){
	console.log('listening on *:3000');
});
// =====================================================================================================