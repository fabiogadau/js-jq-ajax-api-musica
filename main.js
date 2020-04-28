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
		// Chiamo l'API
		url: musicAPI,
		method: 'GET',
		success: function(data) {
			// Definisco una variabile per il response
			var cds = data.response;
			// Ciclo per definire gli oggetti di data e stamparli nel markup
			for ( var i = 0; i < cds.length; i++ ) {
				// Oggetti di data
				var item = cds[i];
				// Li copio nel nuovo oggetto
				var cdsToPrint = {
					myPoster: item.poster,
					myTitle: item.title,
					myAuthor: item.author,
					myYear: item.year
				}
				// Stampo i nuovi oggetti nel markup
				var html = template(cdsToPrint);
				cdsContainer.append(html);
			}
		},
		error: function() {
			console.log('Si è verificato un errore');
		}
	}); // Fine chiamata AJAX

}); // Fine document ready