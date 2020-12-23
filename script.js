// Use the  open weather api https://home.openweathermap.org to get the city weather information using latitude & longitude and city name 

let request = new XMLHttpRequest ();
let apiKey = "45065bc77e68c7f6e0ac5c4c53a3cf23";
let lat = "35";
let lon = "139";
request.open("GET","http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid="+apiKey, true);
request.send();

request.onload = function(){
   //    let response = JSON.parse(this.response);
   console.log("Weather details at given lat lon: "+this.response);
}
let cityName = "Chennai";
let request1 = new XMLHttpRequest ();

request1.open("POST","http://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid="+apiKey, true);
request1.send();

request1.onload = function(){
  console.log("Chennai City Weather details: "+this.response);
}