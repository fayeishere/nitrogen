jQuery(document).ready(function($) {
    $('body').click(function(event) {
    	var cat = "unknown";
        var action = $(event.target).prop('innerHTML');
        var label = $(event.target).prop('outerHTML');

        if ($(event.target).is('header *, header')){
            cat = "header";
        }
        else if ($(event.target).is('main *, main')){
            cat = "main";
        }
        else if ($(event.target).is('footer *, footer')){
            cat = "footer";
        }

        if ($(event.target).parents().hasClass('ga-event') && (($(event.target).parents().attr('id')) !== undefined)) {
        	action = $(event.target).parents().attr('id');
        }
        try {
          _gaq.push(['_trackEvent', cat, action, label]);
        } catch(err){
          console.log("error" + err);
        }
    });

});
