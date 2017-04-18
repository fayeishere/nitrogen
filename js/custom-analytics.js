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
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-96382606-1']);
_gaq.push(['_trackPageview']);

(function() {
var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();