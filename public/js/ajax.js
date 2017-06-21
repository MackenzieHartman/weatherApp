// NEWS Challenge
// 1.  Go to https://newsapi.org/ and get an api key
// 	-it is best to teach them how to create a variable called API_KEY so they don't have to continually type it.

// 2.  Next have students do a wireframe to structure thoughts on how the app should
// 	be laid out.  Also, have them think about how the search will occur and then
// 	what functions will be needed to do the ajax call.  Lastly, how will the information
// 	returned be displayed.  Think about how ajax tutorial worked.

// 3.  Have students read documentation on how to successfully connect to a news endpoint.
// b764bce151694f8ca3f2ea73492e3abb
// =====================================================================================================

$(document).ready(function(){

    // Define a couple of variables
    var $forecast = $('#forecast');
    var $zipCode = $('#zipCode');


    // Set the API Key (this should be private)
    var API_KEY = '6ad193286898066321d6f495b583dcea';

    var weatherTemplate = "" +
    	"<li>" +
    	"<p><strong> Zip Code </strong> {{zipCode}} </p>" +
    	"<button id='{{id}}' class= 'remove'>X</button>" +
    	"</li>";

    function addZipCode(userZipCode){
    	$zipCode.append(Mustache.render(weatherTemplate, userZipCode));
    };

    $('#add-location').on('click', function(){

    	var $userZipCode = $('#userZipCode').val();
    	// alert($userZipCode);
    	console.log($userZipCode);

    	 // Make the AJAX call to the API using jQuery
    	$.ajax({	
    		type: 'GET',
    		url: 'http://api.openweathermap.org/data/2.5/weather?zip='+ $userZipCode+',us&apikey='+ API_KEY
    	})

    	// If all goes well
		.done(function(response){

            var climate = response.main;

    		// Take a look at the console to see how the API response looks like
    		console.log(response)
    		addZipCode(response)

        // ===========================================================================================

            // Store each item from the API into a variable
            var weather= response.weather[0].description;
            var temp = Math.floor(((9/5) * (response.main.temp - 273)) + 32);
            // var maxTemp = Math.floor(((9/5) * (response.main.temp_max - 273)) + 32);
            // var minTemp = Math.floor(((9/5) * (response.main.temp_min - 273)) + 32);
            var humidity = response.main.humidity;
            var windSpeed = response.wind.speed;
            // var sunRise = response.sys.sunrise;
            // var sunSet = response.sys.sunset;
           
            var city = response.name;
            //console.log();
      
            // Append the stuff to the DOM
            $("#weather").append(weather).append("");
            $("#temp").append(temp).append("°");
            // $("#maxTemp").append(maxTemp).append("°");
            // $("#minTemp").append(minTemp).append("°");
            $("#humidity").append(humidity).append("%");
            $("#windSpeed").append(windSpeed).append(" mph");
            // $("#sunRise").append(sunRise).append(" mph");
            // $("#sunSet").append(sunSet).append(" mph");
            // console.log(sunRise);

            // Apend the city name to the section title
            $("#name").append(city);
            $("#userZipCode").val(" ");
        })
    // ===========================================================================================
    		// If something goes wrong
    	.fail(function(){
    		console.log("Error Loading Forcast: Please Refresh.");
        });
    });
});
