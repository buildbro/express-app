const express = require("express");
const app = express();
const bodyParser = require('body-parser');
//const port = 3002;
const port = process.env.PORT || 3002;
app.use(bodyParser.json());


app.get('/', (request, response) => {

    //console.log(request.body);

    response.status(200).type('json').send(

        {
            "is_allowed": false,
            "reason": "some reason",
            "title": "some title"
          }
    );
});

app.listen(port, () => {
    console.log("server started!");
});