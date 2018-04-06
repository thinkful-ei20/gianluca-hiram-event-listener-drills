function fizzBuzz(number) {
	if (number % 15 === 0)
		return 'fizzbuzz';
	if(number % 3 === 0)
		return 'fizz';
	if(number % 5 === 0)
		return  'buzz';
	return number;
}

function toHtml(value) {
	return `
	<div class="fizz-buzz-item ${ typeof value === 'string'? value : '' }">
        <span>${value}</span>
    </div>`;
}

(function() {
	$('#number-chooser').on('submit', function(event) {
		event.preventDefault();
		$('.js-results').html('');
		for(let i = 1; i <= $(event.target).find('input').val() ; i++){
			$('.js-results').append(toHtml(fizzBuzz(i)));
		}
	});
})();