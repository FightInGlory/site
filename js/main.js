// JavaScript Document
(function($) {

	//bxsliders
	var $initSlider = $('.bxslider');

	if($initSlider.length){
		var $promoSlider = $('#bx__promo-slider');

		if($promoSlider.length){
			$promoSlider.bxSlider();
		}
	}

	//dropdown lang
	var $dropdownLang = $('.dropdown-lang'),
			$dropdownLangItem = $dropdownLang.find('li');

	$dropdownLangItem.on("click touchstart", function() {

		var $this = $(this),
				$thisDropdown = $this.closest('.dropdown-lang'),
				$thisButton = $thisDropdown.find('button'),
				langData = $this.html();

		$thisButton.html(langData);

	});

}) (jQuery);//end ready
