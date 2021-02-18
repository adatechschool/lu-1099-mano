const http = require('http');
const fetch = require("node-fetch");
let url = 'http://selfconfidencequotes.herokuapp.com/';
async function getData(url){
  data = await fetch(url)
  res = await data.json()
  return res.data[0].quote
}
const hostname = '127.0.0.1';
const port = 2000;
const server = http.createServer(async (req, res) => {
  if(req.method==='GET'){
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  let data = await getData(url);
  res.end(JSON.stringify(data));
  }
  else if(req.method==='POST'){
      var body = "";
      res.on('data',function (chunk) {
    console.log('BODY: ' +chunk);
  });
//res.write("");
res.write('data\n');
res.write('data\n');
res.end();
  };
  });




async function test(){
    try{
      const test1 = await server;
      //console.log(test1);
    }
    catch(err){
      console.log(err);
    }
}
test()
server.listen(port, hostname, () => {
console.log(`Server running at http://${hostname}:${port}/`);
});