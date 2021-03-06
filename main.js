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
	var musicGenres = $('#genres');

	// Init Handlebars
	var source = $('#cd-template').html();
	var template = Handlebars.compile(source);

	// Inizio chiamata AJAX
	$.ajax({
		// Chiamo l'API
		url: musicAPI,
		method: 'GET',
		success: function(data) {
			// Definisco una variabile per il response di data
			var cds = data.response;
			// Definisco una variabile per il success di data
			var dataStable = data.success;
			// Ciclo per definire gli oggetti di data e stamparli nel markup
			for ( var i = 0; i < cds.length; i++ ) {
				// Oggetti di data
				var item = cds[i];
				// Validazione
				if ( dataStable == true ) {
					// Copio nel nuovo oggetto
					var cdsToPrint = {
						myPoster: item.poster,
						myTitle: item.title,
						myAuthor: item.author,
						myYear: item.year,
						genres: item.genre.toLowerCase()
					}
					// Stampo i nuovi oggetti nel markup
					var html = template(cdsToPrint);
					cdsContainer.append(html);
				}
			}
		},
		error: function() {
			console.log('Si è verificato un errore');
		}
	}); // Fine chiamata AJAX

	// Selezione genere musicale
	musicGenres.change(function(){
		var genre = $(this).val();
		if ( genre === 'all' ) {
			$('.cd').show();
		}
		else {
			$('.cd').hide();
			$('.cd.' + genre).show();
		}
	});

}); // Fine document ready