//Twilio_function
exports.handler = function(context, event, callback) {
	var got = require('got');
	var textuser=event.speech_result;
	console.log(event.speech_result);
	console.log(typeof(event.speech_result));
	var requestPayload = {
		'query': textuser,
		'lang': 'es',
		'sessionId': "1" 
	};

	got.post('https://api.dialogflow.com/v1/query?v=20150910', 
	{
		headers: {
			'authorization': "Bearer " + "c2e43204462846b4a4081715ba5a125e",
			'accept': 'application/json',
			'content-type': 'application/json'
		},
		json: true,
		body: requestPayload
	}).then(function(response) {
		var intent_response = response.body.result.fulfillment['speech'];
		var returnJson = {'intent_response': intent_response};

		console.log(JSON.stringify(returnJson));
		callback(null, returnJson);
	}).catch(function(error) {
		console.log(error);
		callback(error)
	});
};