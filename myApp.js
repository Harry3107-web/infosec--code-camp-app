const express = require('express');
const helmet = require('helmet');
const app = express();

app.use(helmet.hidePoweredBy());
app.use(helmet.frameguard({action: 'deny'}));
app.use(helmet.xssFilter());
app.use(helmet.noSniff());
app.use(helmet.ieNoOpen());
const timeinseconds = 90 *24 *60 *60;
app.use(helmet.hsts({maxAge: timeinseconds, force: true}));
app.use( helmet.dnsPrefetchControl());
app.use(helmet.noCache());
app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'", "trusted-cdn.com"]
  }
}));












































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
