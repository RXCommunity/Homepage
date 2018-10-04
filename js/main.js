$(document).ready(function () {
	$("head").append(
		'<link rel="stylesheet" href="css/rules.css">' +
		'<link rel="stylesheet" href="css/responsive.css">' +
		'<link rel="stylesheet" href="css/animations.css">'
	);
	$('#abt-btn').click(function () {
		$('#abt').toggleClass('hide');
		$('.h-hide').toggleClass('h-on');
		LoadOnce();
	});
	$('#close').click(function () {
		$('#abt').addClass('hide');
		$('.h-hide').removeClass('h-on');
	});
	$('.tab').click(function () {
		var tab_id = $(this).attr('data-tab');
		$('div.tabs a').removeClass('chosen');
		$('.tab-content').addClass('hide');
		$(this).addClass('chosen');
		$('#' + tab_id).removeClass('hide');
	});
});

function LoadOnce() {
	$('#content').load('ajax/about.html');
	$('.tab-content').addClass('hide');
	LoadOnce = function () {};
}

var scene = document.getElementById('bg');
var parallaxInstance = new Parallax(scene, {
	relativeInput: true,
	hoverOnly: true
});
