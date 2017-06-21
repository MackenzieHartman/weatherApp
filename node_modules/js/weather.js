$(function(){
	$('#check-weather').on('click', function(){

		var state = $('#state').val();
		var city = $('#city').val();

		$.ajax({
			type: 'GET',
			//need to use variables to 'GET' from correct url
			url: 'http://api.wunderground.com/api/a40d67f295f63f82/conditions/q/' + state + '/' + city + '.json',
			success: function(r) {
				var location = r.current_observation.display_location.full;
				var temp = r.current_observation.temp_f;
				var wind = r.current_observation.wind_string;
				var weather = r.current_observation.weather;
				var needCoat = " ";
				var needSunscreen = " ";
				var tempConverted = parseInt(temp);
				console.log(weather);
				
				if (tempConverted < 65){
					// console.log("Yes, you need a coat");
					needCoat = "Yes";
				}else{
					// console.log("No, you don't need a coat");
					needCoat = "No";
				};
				if (weather === "sunny"){
					needSunscreen = "Yes";
				}else{
					needSunscreen = "No";
				};
				
				//For testing your variables
				// console.log(location);
				// console.log(temp);
				// console.log(wind);

				$("#location").text(location);
				$("#temp").text(temp + " F");
				$("#wind").text(wind);
				$("#coat").text(needCoat);
				$("#sunscreen").text(needSunscreen);
				$("#weather").text(weather);
				
			},
			error: function(){
				alert('error loading');
			}
		}); //closes AJAX call

	}); //closes click function
});