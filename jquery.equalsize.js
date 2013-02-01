/**
 * Jquery equalSize
 */

(function($) {

	$.fn.equalWidth = function( options ) 
	{
		var defaults 	= {
				min: null
			},
			options 	= $.extend( defaults, options ),
			tallest		= options.min ? options.min : 0;

		this.each(function()
		{
			var that 	= $(this);
			if( that.width() > tallest ) tallest = that.width();
		});

		return this.each(function()
		{
			var that	= $(this);
			that.css({ minWidth: tallest });
		});
	};

	$.fn.equalHeight = function( options ) 
	{
		var defaults 	= {
				min: null
			},
			options 	= $.extend( defaults, options ),
			tallest		= options.min ? options.min : 0;

		this.each(function()
		{
			var that 	= $(this);
			if( that.height() > tallest ) tallest = that.height();
		});

		return this.each(function()
		{
			var that	= $(this);
			that.css({ minHeight: tallest });
		});
	};

})(jQuery);