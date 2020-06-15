import $ from "jquery";

(function() {
	function addToCartHanlder() {
		let $btns = $('[data-add-to-cart]');

		$btns.on('click', function(e){
			e.preventDefault();

			$.ajax({
				url: './fakedata/cartResponse.json',
				type: 'GET',
				dataType: 'json',
				success: (res) => {
					if (res.success) {
						$(this)
							.text('Добавлено')
							.removeClass('btn-primary')
							.addClass('btn-success');

						$('[data-cart-count]').text(res.count);
					}
				}
			});
		});
	}

	function main() {
		addToCartHanlder();
	}

	main();
}());
