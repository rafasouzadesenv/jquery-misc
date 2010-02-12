/*!
 * jQuery viewportOffset - v0.3 - 2/3/2010
 * http://benalman.com/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */

(function($){
  '$:nomunge'; // Used by YUI compressor.
  
  var win = $(window);
  
  $.fn.viewportOffset = function() {
    var offset = $(this).offset();
    
    return {
      left: offset.left - win.scrollLeft(),
      top: offset.top - win.scrollTop()
    };
  };
  
})(jQuery);
