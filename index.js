const express =require('express');
const app = express();
const bodyParser=require('body-parser');

app.use(bodyParser.json());
app.listen(3000);

app.get('/secret', (request, response) => {
    response.send('801181e2d7e2a2299834d209f1601c0e2658fd09016c8ab795a4873f21a3758d5c8');
})

app.post('/success', (request, response) => {
    console.log(request.body);
})

app.post('/claim-victory', (request, response) => {
    response.send({
        "keys": [
            "801181e2d7e2a2299834d209f1601c0e2658fd09016c8ab795a4873f21a3758d5c8",
            "803a1cfba8c29bdc45a5b1d63b0ae1b5b045281d04f601fd65c35e4e09e67540363",
            "802b9d197f2039f5dd9163dfca7afa9b951dd29406da8dcaf267de312b7503fd6c7"
        ],
        "successURL": "http://ca2e6bae.ngrok.io/success"
    }
    )
})

