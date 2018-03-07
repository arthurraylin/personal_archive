$('.hover-block').mouseenter(function(){
	var button_name = $(this).data('button');

	$('.sentence').removeClass('hide');
	$('.sentence').addClass('fade-in');

});

$('.hover-block').mouseleave(function(){
	var button_name = $(this).data('button');

	$('.sentence').removeClass('fade-in');
	$('.sentence').addClass('fade-out');


});

$('.H').click(function(){
	var button_name = $(this).data('button');

	$('.hearted').removeClass('hide');
	$('.earted-text').removeClass('hide');
	$('.H').addClass('black')
	$('.K').addClass('hide');
	$('.C').addClass('hide');
	$('.S').addClass('hide');
	$('.Z').addClass('hide');
	$('.hover-block').addClass('hide');

});

$('.K').click(function(){
	var button_name = $(this).data('button');

	$('.kombucha').removeClass('hide');
	$('.ombucha-text').removeClass('hide');
	$('.K').addClass('black')
	$('.H').addClass('hide');
	$('.C').addClass('hide');
	$('.S').addClass('hide');
	$('.Z').addClass('hide');
	$('.hover-block').addClass('hide');

});

$('.Z').click(function(){
	var button_name = $(this).data('button');

	$('.zivit').removeClass('hide');
	$('.ivit-text').removeClass('hide');
	$('.Z').addClass('black')
	$('.H').addClass('hide');
	$('.C').addClass('hide');
	$('.S').addClass('hide');
	$('.K').addClass('hide');
	$('.hover-block').addClass('hide');

});
