(function(){
	$('.thumbnails').on('click', '.thumbnail', function(event) {
		$('.hero img').html($(event.target).html());
		// $('.hero img').attr( {
		// 	'src': $(event.target).attr('src'),
		// 	'alt': $(event.target).attr('alt')
		// });
	});
})();
