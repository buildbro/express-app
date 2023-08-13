const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const port = 3002;app.use(bodyParser.json());


app.get('/', (request, response) => {

    console.log(request.body);

    response.status(200).send("data:"+JSON.stringify(request.body));
});

app.listen(port, () => {
    console.log("server started!");
});