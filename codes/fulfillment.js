//Fulfilment DialogFlow
'use strict';

// Import the Dialogflow module from the Actions on Google client library.
const {dialogflow} = require('actions-on-google');

// Import the firebase-functions package for deployment.
const functions = require('firebase-functions');

// Instantiate the Dialogflow client.
const app = dialogflow({debug: true});
const capitales = {
  	Amazonas: 'Leticia',
	Antioquia: 'Medellín',
	Arauca: 'Arauca',
	Atlantico: 'Barranquilla',
	Bolivar: 'Cartagena',
	Boyaca: 'Tunja',
	Caldas: 'Manizales',
	Caqueta: 'Florencia',
	Casanare: 'Yopal',
	Cauca: 'Popayán',
	Cesar: 'Valledupar',
	Choco: 'Quibdó',
	Cordoba: 'Montería',
	Cundinamarca: 'Bogotá',
	Guainia: 'Puerto Inírida',
	Guaviare: 'San José del Guaviare',
	Huila: 'Neiva',
	Guajira: 'Riohacha',
	Magdalena: 'Santa Marta',
	Meta: 'Villavicencio',
	Nariño: 'Pasto',
	Nortedesantander: 'Cúcuta',
	Putumayo: 'Mocoa',
	Quindio: 'Armenia',
	Risaralda: 'Pereira',
	Sanandresyprovidencia: 'San Andres',
	Santander: 'Bucaramanga',
	Sucre: 'Sincelejo',
	Tolima: 'Ibagué',
	Valle: 'Cali',
	Vaupes: 'Mitú',
	Vichada: 'Puerto Carreño' 
};

app.intent('capitales', (conv, {departamento}) => {
 
    let capital = capitales[departamento];
  
    conv.add('La capital de '+departamento+ " es " + capital);
    
});

// Set the DialogflowApp object to handle the HTTPS POST request.
exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);