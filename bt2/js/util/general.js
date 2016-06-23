$(".j-first-nav").on('click', function(){
	var jQself = $(this);
	var jQsub = jQself.closest(".j-first-nav-wrapper").find('.j-second-nav');
	if(jQsub.is(':visible')){
		jQsub.hide();
	}else{
		jQsub.show();
	}
});