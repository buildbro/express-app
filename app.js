const express = require("express");
const app = express();
const bodyParser = require('body-parser');
//const port = 3002;
const port = process.env.PORT || 3002;
app.use(bodyParser.json());


app.post('/', (request, response) => {

    const requestPayload = request.body;
    console.log(requestPayload)

    $orgIp = '102.215.57.241';
    if (requestPayload.context.ip_address == $orgIp) {

        //this user is from the organisation network, continue with sign up.
        response.status(200).type('json').send(
            {
                "is_allowed": true
              }
        );

    } else {
        //user has an IP address outside of the organisation network so disallow sign up.
        response.status(200).type('json').send(
            {
                "is_allowed": false,
                "reason": "You are not allow to sign up to this organisation",
                "title": "Sign-up not allowed!"
              }
        )
    }
    
});

app.listen(port, () => {
    console.log("server started!");
});