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
	$('.summary-H').removeClass('hide');
	$('.enter-H').removeClass('hide');
	$('.back-H').removeClass('hide');

});

$('.back-H').click(function(){
	var button_name = $(this).data('button');

	$('.hearted').addClass('hide');
	$('.earted-text').addClass('hide');
	$('.H').removeClass('black')
	$('.K').removeClass('hide');
	$('.C').removeClass('hide');
	$('.S').removeClass('hide');
	$('.Z').removeClass('hide');
	$('.hover-block').removeClass('hide');
	$('.summary-H').addClass('hide');
	$('.summary-block-H').addClass('hide');
	$('.enter-H').addClass('hide');
	$('.back-H').addClass('hide');

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
	$('.summary-K').removeClass('hide');
	$('.enter-K').removeClass('hide');
	$('.back-K').removeClass('hide');

});

$('.back-K').click(function(){
	var button_name = $(this).data('button');

	$('.kombucha').addClass('hide');
	$('.ombucha-text').addClass('hide');
	$('.K').removeClass('black')
	$('.H').removeClass('hide');
	$('.C').removeClass('hide');
	$('.S').removeClass('hide');
	$('.Z').removeClass('hide');
	$('.hover-block').removeClass('hide');
	$('.summary-K').addClass('hide');
	$('.summary-block-K').addClass('hide');
	$('.enter-K').addClass('hide');
	$('.back-K').addClass('hide');

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
	$('.summary-Z').removeClass('hide');
	$('.enter-Z').removeClass('hide');
	$('.back-Z').removeClass('hide');

});

$('.back-Z').click(function(){
	var button_name = $(this).data('button');

	$('.zivit').addClass('hide');
	$('.ivit-text').addClass('hide');
	$('.Z').removeClass('black')
	$('.H').removeClass('hide');
	$('.C').removeClass('hide');
	$('.S').removeClass('hide');
	$('.K').removeClass('hide');
	$('.hover-block').removeClass('hide');
	$('.summary-Z').addClass('hide');
	$('.summary-block-Z').addClass('hide');
	$('.enter-Z').addClass('hide');
	$('.back-Z').addClass('hide');

});

$('.summary-H').click(function(){
	var button_name = $(this).data('button');

	$('.summary-block-H').removeClass('hide');
});

$('.summary-K').click(function(){
	var button_name = $(this).data('button');

	$('.summary-block-K').removeClass('hide');
});

$('.summary-Z').click(function(){
	var button_name = $(this).data('button');

	$('.summary-block-Z').removeClass('hide');
});



