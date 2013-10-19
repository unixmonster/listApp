jQuery(function ($) {
	'use strict';
	$('document').ready(function () {
		$.support.cors = true;

		$(document).bind('mobileinit', function () {
			$.mobile.allowCrossDomainPages = true;
		})

		ListApp.init();
		document.addEventListener('deviceready', onDeviceReady, true);
	})

	function onDeviceReady () {
		ListApp.init();
	}
})