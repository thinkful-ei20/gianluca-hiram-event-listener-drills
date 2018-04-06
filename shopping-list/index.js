function makeItem(text) {
	return `<li>
	<span class="shopping-item">${text}</span>
	<div class="shopping-item-controls">
	  <button class="shopping-item-toggle">
		<span class="button-label">check</span>
	  </button>
	  <button class="shopping-item-delete">
		<span class="button-label">delete</span>
	  </button>
	</div>
  </li>`;
}

/**
 * Commented out alternate implementations using 'event' object instead of 'this';
 */

(function() {
	$('#js-shopping-list-form').on('submit', function(event) {
		event.preventDefault();
		let text = $(this['shopping-list-entry']);
		$('.shopping-list').append(makeItem(text.val()));
		text.val('');
		// let text = $(event.currentTarget).children(':eq(1)');
		// $('.shopping-list').append(makeItem(text.val()));
		// text.val('');
	});

	$('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
		$(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
		//$(event.currentTarget).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
	});

	$('.shopping-list').on('click', '.shopping-item-delete', function(event) {
		$(this).closest('li').remove();
		//$(event.currentTarget).closest('li').remove();
	});
})();
