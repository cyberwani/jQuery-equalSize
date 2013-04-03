/**
 * Jquery equalSize
 * https://github.com/Gizburdt/jQuery-equalSize
 * 
 * @copyright Gijs Jorissen
 * http://gizburdt.com
 *
 * With jQuery.equalSize it's possible to set the same width or height for elements
 */

(function($) {

	/**
	 * Set the same height
	 * 
	 * @param  	array 	options
	 * @return 	void
	 */
	$.fn.equalHeight = function( options ) 
	{
		var defaults 	= { min: 0 },
			options 	= $.extend( defaults, options ),
			that		= this;
		
		return this.each(function(){ that.equalSize( options, 'height' ) });
	}

	/**
	 * Set the same width
	 * 
	 * @param  	array 	options
	 * @return 	void
	 */
	$.fn.equalWidth = function( options ) 
	{
		var defaults 	= { min: 0 },
			options 	= $.extend( defaults, options ),
			that		= this;
		
		return this.each(function(){ that.equalSize( options, 'width' ) });
	}

	/**
	 * Set a dimension (height, width) to the same value
	 * 
	 * @param  	array 	options
	 * @param 	string 	dimension
	 * @return 	void
	 */
	$.fn.equalSize = function( options, dimension )
	{
		var defaults	= {	min: 0 },
			options		= $.extend( defaults, options ),
			that		= $(this),
			tallest		= options.min,
			tallest		= (dimension == 'height' ) ? ( that.height() > tallest ? that.height() : tallest ) : ( that.width() > tallest ? that.width() : tallest ),
			properties	= (dimension == 'height' ) ? { minHeight: tallest } : { minWidth: tallest };
			
		that.css( properties );
	}

})(jQuery);