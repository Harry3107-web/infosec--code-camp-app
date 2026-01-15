const express = require('express');
const helmet = require('helmet');
const app = express();

app.use(helmet.hidePoweredBy())
app.use(helmet.frameguard({action: 'deny'}));
 















































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
