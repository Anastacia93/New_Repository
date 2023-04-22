let weather = {
 paris: {
  temp: 19.7,
  humidity: 80,
 },
 tokyo: {
  temp: 17.3,
  humidity: 50,
 },
 lisbon: {
  temp: 30.2,
  humidity: 20,
 },
 "san francisco": {
  temp: 20.9,
  humidity: 100,
 },
 oslo: {
  temp: -5,
  humidity: 20,
 },
};

// false, undefined, null, 0, '', NaN
// weather['oslo'];

function showWeather () {
    let city = prompt("Enter your city.");
    city = city.toLowerCase();
    if(weather[city]){
        let tempC = Math.round(weather[city].temp);
        let tempF = Math.round(tempC*9/5+32);
        alert(
         `In ${city} temperature is ${tempC} (${tempF}F) and humidity is ${weather[city].humidity}%`
        );
    } else {
        alert(`Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}. 
    `)}
}
showWeather()