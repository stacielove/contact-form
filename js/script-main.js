$('.btn-toggle').on('click', function() {
  $('.container').stop().addClass('active');
	console.log("click");
});

$('.close').on('click', function() {
  $('.container').stop().removeClass('active');
});