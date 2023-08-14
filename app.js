const express = require("express");
const app = express();
const bodyParser = require('body-parser');
//const port = 3002;
const port = process.env.PORT || 3002;
app.use(bodyParser.json());


app.post('/', (request, response) => {

    //console.log(request.body);
    const returnData = {
        "is_allowed": true
      };
    console.log(request.body)
    response.status(200).type('json').send(
        returnData
    );
});

app.listen(port, () => {
    console.log("server started!");
});