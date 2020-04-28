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
			var cds = data.response;
			for ( var i = 0; i < cds.length; i++ ) {
				var item = cds[i];
				var cdsToPrint = {
					myPoster: item.poster,
					myTitle: item.title,
					myAuthor: item.author,
					myYear: item.year
				}
				var html = template(cdsToPrint);
				cdsContainer.append(html);
			}
		},
		error: function() {
			console.log('Si è verificato un errore');
		}
	});

});