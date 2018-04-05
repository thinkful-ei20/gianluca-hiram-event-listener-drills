(function(){
	$('.thumbnails').on('click', '.thumbnail', function(event) {
		$('.hero img').attr( {
			'src': $(event.target).attr('src'),
			'alt': $(event.target).attr('alt')
		});
		//$('.hero img').html($(event.target).html());
	});
})();
