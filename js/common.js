head.ready(function() {

	//galleries synchronize
	var slideshows = $('.cycle-slideshow').on('cycle-next cycle-prev', function(e, opts) {
	  slideshows.not(this).cycle('goto', opts.currSlide);
	});

	$('.gallery__pager .slide').click(function() {
	  var index = $('.gallery__pager').data('cycle.API').getSlideIndex(this);
	  console.log(index);
	  slideshows.cycle('goto', index);
	});

	//input value remove
	var Input = $('input');
	var defaultValue = $('input').val();

	Input.focus(function() {
		if(Input.val() == defaultValue) Input.val("");
		}).blur(function(){
		if(Input.val().length == 0) Input.val(defaultValue);
		});

});