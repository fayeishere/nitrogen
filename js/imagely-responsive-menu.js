jQuery(function( $ ){


	/**
	 * Set up responsive menu for mobile devices. 
	 */
	
	$("header .genesis-nav-menu").addClass("responsive-menu").before('<div class="responsive-menu-icon"></div>');

	$(".responsive-menu-icon").click(function(){
		$(this).next("header .genesis-nav-menu").slideToggle( "fast" );
	});

	$(window).resize(function(){
		if(window.innerWidth > 800) {
			$("header .genesis-nav-menu, header .genesis-nav-menu .sub-menu").removeAttr("style");
			$(".responsive-menu > .menu-item").removeClass("menu-open");
		}
	});

	$(".responsive-menu > .menu-item").click(function(event){
		if (event.target !== this)
		return;
			$(this).find(".sub-menu:first").slideToggle( "fast", function() {
			$(this).parent().toggleClass("menu-open");
		});
	});

});