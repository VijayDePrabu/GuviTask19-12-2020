// * Print odd numbers in an array 
let numArray = [3,76,24,66,37,21,34,678,1];

let odd = function (){
    let oddNumArray = [];
    for(let i in numArray){
    if(numArray[i]%2 != 0){
     oddNumArray.push(numArray[i]);
    }
   }
   console.log(oddNumArray);
}
odd();

 //* Convert all the strings to title caps in a string array 
 let capsArray = ["cat","dog","horse", "donkey"];
 let caps = function(){
      let tempArray = [];
      for(let i in capsArray){
          tempArray.push(capsArray[i][0].toUpperCase()+ capsArray[i].substring(1).toLowerCase() );
      }
      console.log(tempArray);

 }
 caps();

// * Sum of all numbers in an array 
let numVenamArray = [3,76,24,66,37,21,34,678,1];

let sum = function (){
    let temp =0;
    for(let i in numVenamArray){
     temp = (numVenamArray[i])+ temp;
    
   }
   return temp;
}
console.log(sum());

// * Return all the prime numbers in an array 
let checkForPrime = function(inputNumber){
let isItPrime = true;
 
if(inputNumber <= 1) 
{
isItPrime = false;
 
return isItPrime;
}
else
{
for (let i = 2; i<= inputNumber/2; i++) 
{
if ((inputNumber % i) == 0)
{
isItPrime = false;
 
break;
}
}
}
return isItPrime;

}

 if(checkForPrime(11)){
console.log("Prime number");
}else{
     console.log("Not a Prime number");
} 

// * Return all the palindromes in an array 
let strArr = ["vibgyor","memo", "Malayalam", "Madam", "dented", "2020", "neem", "meme"];
let palindromes = [];
for(i in strArr){
    let word = strArr[i].split("");
    let reverseWord = strArr[i].split("").reverse();
    let k= word.length;
     for(i in word){
         if((word[i].toLowerCase()).localeCompare((reverseWord[i].toLowerCase())) === 0){
             
         }else{
           k = parseInt(i);
           break;
         }
     }
     if((k) === word.length){
        palindromes.push(word.join(""));
     }
     console.log("word tested: "+ word.join("") +" "+ reverseWord.join("")+" "+ (k)+ " "+ word.length);

}
console.log("Palindrome: "+ palindromes);
// * Return median of two sorted arrays of same size 

// * Remove duplicates from an array


/*  Rotate an array by k times and return the rotated */
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
