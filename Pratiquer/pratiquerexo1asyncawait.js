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

async function getData(url){
  data = await fetch(url)
  res = await data.json()
  console.log(res)
}

getData(url);


