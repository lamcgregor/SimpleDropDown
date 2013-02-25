(function( $ ){

  $.fn.dropDown = function(classes) {
  
    // there's no need to do $(this) because
    // "this" is already a jquery object

    // $(this) would be the same as $($('#element'));
        
    $(classes + ' ul li ul').hide();
    $(classes + ' ul li').hover(
    	function() {
    	$(this)
    		.children('ul')
            .delay(50)
    		.stop(true,true)
    		.slideDown('med');
    	},
    	function() {
    		$(this)
                .children('ul')
                .stop(true,true)
                .delay(400)
                .slideUp('med');
    	}
    );
};
})( jQuery );