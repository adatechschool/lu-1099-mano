// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

// function reqListener () {
//   console.log(this.responseText);
// }

// var req = new XMLHttpRequest();
// req.responseType = 'json';
// req.open('GET', '<https://www.affirmations.dev/>', true);
// req.onload  = reqListener;
// req.send(null);  

const fetch = require("node-fetch");
let url = 'https://www.affirmations.dev';

fetch(url)
.then((response) => {
  response.json().then((response)=> console.log(response))
})
.catch(err => console.log("oups "+ err));
