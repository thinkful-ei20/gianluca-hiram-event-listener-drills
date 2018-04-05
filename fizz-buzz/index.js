function fizzBuzz(number) {
	if (number % 15 === 0) 
		return('<div class="fizz-buzz-item fizzbuzz"><span>fizzbuzz</span></div>');
	if(number % 3 === 0)
		return('<div class="fizz-buzz-item fizz"><span>fizz</span></div>');
	if(number % 5 === 0)
		return('<div class="fizz-buzz-item buzz"><span>buzz</span></div>');
	return(`<div class="fizz-buzz-item"><span>${number}</span></div>`);
}

(function() {
	$('#number-chooser').on('submit', function(event) {
		event.preventDefault();
		console.log(event.target);
		for(let i = 1; i <= $(event.target).find('input').val() ; i++)
		{
			$('.js-results').append(fizzBuzz(i));
		}
	});
})();