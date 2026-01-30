const express = require('express');
const helmet = require('helmet');
const app = express();


app.use(helmet({
 frameguard: {         //configure
  action: 'deny'
  },
  contentSecurityPolicy: {    // enable and configure
    directives:{
     defaultSrc: ["'self'"],
     styleSrc: ["'self'", 'trust-cdn.com'],
   }
  },
    nocache: true   // disable
}))












































module.exports = app;
app.use(express.static('public'));
app.disable('strict-transport-security');
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
let port = process.env.PORT || 3000;
app.listen(port, () => {
   console.log(`Useful Programmer Info Security App server started on port ${port}`); 
});
