/*
* Esercizio Dischi
Attraverso una chiamata ajax all’Api di boolean avremo a disposizione una decina di dischi musicali. 
Servendoci di handlebars stampiamo tutto a schermo.
In questo momento non è importante la parte grafica.
Bonus: Creare una select con i seguenti generi: pop, rock, metal e jazz. In base a cosa scegliamo nella select vedremo i corrispondenti cd.
*/

$(document).ready(function() {
	
	// Referenze
	var musicAPI = 'https://flynn.boolean.careers/exercises/api/array/music';
	var cdsContainer = $('.cds-container');

	// Init Handlebars
	var source = $('#cd-template').html();
	var template = Handlebars.compile(source);

	// Inizio chiamata AJAX
	$.ajax({
		url: musicAPI,
		method: 'GET',
		success: function(data) {
			
		},
		error: function() {
			console.log('Si è verificato un errore');
		}
	});

});