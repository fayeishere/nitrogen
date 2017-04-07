jQuery(document).ready(function($) {
    $('body').click(function(event) {
    	var cat = "unknown";
        var action = "unknown";
	    if ($(event.target).parents().hasClass('ga-event')) {
        	action = $(event.target).parents().attr('id');
        	if (action = "undefined"){
        		action = $(event.target).prop('outerHTML');
        	}
        }
        else{
        	action = $(event.target).prop('outerHTML');
        }
        if ($(event.target).is('header *, header')){
            cat = "header";
        }
        else if ($(event.target).is('main *, main')){
            cat = "main";
        }
        else if ($(event.target).is('footer *, footer')){
            cat = "footer";
        }
        try {
          _gaq.push(['_trackEvent', cat, action]);
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