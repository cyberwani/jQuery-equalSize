## jQuery.equalSize

With this jQuery plugin it is possible to set the same height or width of elements 

## Basic usage

Include the javascript file.
	
	include( 'assets/js/jquery.equalsize.js' );
   

### Set equal size

	//Set equal height
	$('.box').equalHeight();

	// Set equal width
	$('.box').equalWidth();

## Set a minimum value

It's also possible to set a minimum value

	$('.box').equalHeight({ min: 400 });
