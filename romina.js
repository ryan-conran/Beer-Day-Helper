// let breweryName = document.querySelector("#brewery-name");
// let breweryType = document.querySelector("#brewery-type");
// let breweryAddress = document.querySelector("brewery-address");
// let breweryPhone = document.querySelector("brewery-phone");
// let breweryWebsite = document.querySelector("#brewery-website");





function breweryAPICall(queryName){
  
  let queryURL = "https://api.openbrewerydb.org/breweries/search?query="+queryName;

  $.ajax({
    url: queryURL,
    method: "GET"
  })
  
  .then(function(response) {
    let brewery = response[0];
  
    // Log the queryURL
    console.log(queryURL);
  
    // Log the resulting object
    console.log(response);
  
    // Transfer content to HTML
    console.log(brewery.name);
    $("#brewery-name").text(brewery.name);
    $("#brewery-type").text(response.name);
    $("#brewery-address").text(response.name);
    $("#brewery-phone").text(response.name);
    $("#brewery-website").text(response.name);
  
  // Log the data in the console as well
  //   console.log("Wind Speed: " + response.wind.speed);
  //   console.log("Humidity: " + response.main.humidity);
  //   console.log("Temperature (F): " + tempF);
  });


}  

