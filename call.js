// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
var express = require('express');
var bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();

const accountSid = process.env.ACCOUNT_SID;
const authToken =  process.env.AUTH_TOKEN;

// const accountSid = 'ACa316a6846f34abb2312b06a41d0f1d62'; 
// const authToken = '75bbffea4bf2a65245c7c1b112ceed30'; 
const client = require('twilio')(accountSid, authToken);

var app = express();
app.use(express.static('public'))

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.post('/call', urlencodedParser, function (req, res) {
	console.log("1");
	if (!req.body) return res.sendStatus(400)

	var tel = req.body.tel;
	client.studio.flows('FW67a350432425fc6d87fe6541c8373aef')
	.executions
	.create({to: '+57'+tel, from: '+14159939529'})
	.then(execution => console.log(execution.sid))
	.done();


	res.sendFile(path.join(__dirname+'/response.html'));
	//res.send('Sí ya estás registrado, se realizará una llamada al celular: ' + req.body.tel);
});

app.get('/', (req, res) => {

	res.sendFile(path.join(__dirname+'/index.html'));
});

app.listen(3000, () => console.log('Listening on port 3000!'));





// client.studio.flows('FW67a350432425fc6d87fe6541c8373aef')
// .executions
// .create({to: '+573207718655', from: '+14159939529'})
// .then(execution => console.log(execution.sid))
// .done();



