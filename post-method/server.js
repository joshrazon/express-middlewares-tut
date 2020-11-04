const path = require('path');
const express = require('express');
const app = express();

// __dirname is the current folder path + public
// request goes into middleware first because its on top of the file 

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// The standard HTTP methods
app.get('/',function(request,response){
  console.log(request.method);

    // response is magically turned into JSON. express middlewares are the bees knees
  response.send({name: 'Josh', age: 24});
});

app.post('/users',function(request,response){
  console.log(request.body.username)
  response.send(`Thanks for subscribing ${request.body.username}!`);
});

app.put('/',function(request,response){
  response.send('PUT request: Update data');
});

app.delete('/',function(request,response){
  response.send('DELETE request: Delete data');
});

app.use(function(req, res) {
  res.status(404);
  res.send('404: File Not Found');
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});


