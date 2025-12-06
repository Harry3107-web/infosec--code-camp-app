const express = require('express');
const app = express();


 















































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
