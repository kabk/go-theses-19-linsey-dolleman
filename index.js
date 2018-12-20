$( function( ) {
    var images = $( 'img[data-src]');
    var imagebar = $( '<div class="images">').insertBefore( $( '.text' ) );

    var image_anchors = [ ];
    var image_holders = [ ];

    images.each( function( index ) {
        var image = $( this );


        var image_anchor = $( '<span id="anchor-' + index + '">' )
            .insertBefore( image );
        image_anchors.push( image_anchor );

        var image_holder = $( '<div id="image-' + index + '">' )
            .hover( showImage, hideImage )
            .appendTo( imagebar );
        image_holders.push( image_holder );

        var image_url = image.data( 'src' );
        image.prop( 'src', image_url )
             .appendTo( image_holder )
             .removeAttr( 'data-src' );
    } );

    function showImage( ) {
        var image_holder = $( this );
        var image = image_holder.find( 'img' );
        image.css( 'display', 'block' );
        setTimeout(function(){ 
            image.css( 'display', 'none' );
        }, 200);
    }
    function hideImage( ) {
        var image_holder = $( this );
        var image = image_holder.find( 'img' );
        image.css( 'display', 'none' );

    }

    function positionImages( ) {
        for ( var i=0; i<image_anchors.length; i++ ) {
            var image_anchor = image_anchors[ i ];
            var image_holder = image_holders[ i ];

            image_holder.css( 'top', image_anchor.offset( ).top + 'px' );

            console.log( image_anchor );
        }
    }

    $( window ).resize( positionImages )
               .trigger( 'resize' );
} );



window.onload = function() {

    var video = document.getElementById("video");

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d"); 

    var canvas2 = document.getElementById("canvas2");
    var context2 = canvas2.getContext("2d");

    var canvas3 = document.getElementById("canvas3");
    var context3 = canvas3.getContext("2d");

    var canvas4 = document.getElementById("canvas4");
    var context4 = canvas4.getContext("2d");

    var canvas5 = document.getElementById("canvas5");
    var context5 = canvas5.getContext("2d");

    var canvas6 = document.getElementById("canvas6");
    var context6 = canvas6.getContext("2d");

    var canvas7 = document.getElementById("canvas7");
    var context7 = canvas7.getContext("2d");

    var canvas8 = document.getElementById("canvas8");
    var context8 = canvas8.getContext("2d");


    var contexts = [ context, context2, context3, context4, context5, context6, context7, context8 ];
        
        
	navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;
	if (navigator.getUserMedia) {
	    navigator.getUserMedia({video: true}, handleVideo, videoError);
	}

	function handleVideo( stream ) {
        try {
          video.srcObject = stream;
        } catch (error) {
          video.src = window.URL.createObjectURL(stream);
        }
	}

	function videoError(e) {
	    document.write("can't use the webcam");
	}






    var screenshots = [ ];

    function addScreenshot( ) {
        var screenshot = document.createElement( "canvas" );
        screenshot.width = 320;
        screenshot.height = 240;

        var context = screenshot.getContext( "2d" ); 
        context.drawImage( video, 0, 0, screenshot.width, screenshot.height );

        screenshots.push( context );
    }
    setInterval( addScreenshot, 1000 );


    function drawScreenshots( ) {
        var counter = -1;

        for ( var i=Math.max(0,screenshots.length-contexts.length); i<screenshots.length; i++ ) {
            var screenshot = screenshots[ i ].getImageData( 0, 0, 320, 240 );

            contexts[ counter += 1 ].putImageData( screenshot, 0, 0 );
        }
    }
	setInterval( drawScreenshots, 100 );
};