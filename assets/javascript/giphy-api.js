var cars = ["Ferrari", "Audi R8", "Ford Mustang GT", "Chevy Camero", "Lamborghini", "Toyota 4runner", "BMW M6", "Ferrari Spyder"];

$("button").on("click", function() {

	var cars = $(this).attr("cars");

	var queryURL = "https://api.giphy.com/v1/gifs/search?t=" +
        car + "&api_key=dc6zaTOxFJmzC&limit=10";

     $.ajax({
          url: queryURL,
          method: "GET"
        })

     	.done(function(response) {
          
          var results = response.data;

          
          for (var i = 0; i < results.length; i++) {

            
            if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
              
              var gifDiv = $("<div class='item'>");

              
              var rating = results[i].rating;

              
              var p = $("<p>").text("Rating: " + rating);

              
              var carImage = $("<img>");

              
              carImage.attr("src", results[i].images.fixed_height.url);

              gifDiv.append(p);
              gifDiv.append(carImage);

              $("#cars").prepend(gifDiv);
            }
          }
        });
    });