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

    var canvas9 = document.getElementById("canvas9");
    var context9 = canvas9.getContext("2d");

    var canvas10 = document.getElementById("canvas10");
    var context10 = canvas10.getContext("2d");

    var canvas11 = document.getElementById("canvas11");
    var context11 = canvas11.getContext("2d");

    var canvas12 = document.getElementById("canvas12");
    var context12 = canvas12.getContext("2d");

    var canvas13 = document.getElementById("canvas13");
    var context13 = canvas13.getContext("2d");

    var canvas14 = document.getElementById("canvas14");
    var context14 = canvas14.getContext("2d");

    var canvas15 = document.getElementById("canvas15");
    var context15 = canvas15.getContext("2d");

    var canvas16 = document.getElementById("canvas16");
    var context16 = canvas16.getContext("2d");

    var canvas17 = document.getElementById("canvas17");
    var context17 = canvas17.getContext("2d");

    var canvas18 = document.getElementById("canvas18");
    var context18 = canvas18.getContext("2d");

    var canvas19 = document.getElementById("canvas19");
    var context19 = canvas19.getContext("2d");

    var canvas20 = document.getElementById("canvas20");
    var context20 = canvas20.getContext("2d");

    var canvas21 = document.getElementById("canvas21");
    var context21 = canvas21.getContext("2d");

    var canvas22 = document.getElementById("canvas22");
    var context22 = canvas22.getContext("2d");

    var canvas23 = document.getElementById("canvas23");
    var context23 = canvas23.getContext("2d");

    var canvas24 = document.getElementById("canvas24");
    var context24 = canvas24.getContext("2d");

    var canvas25 = document.getElementById("canvas25");
    var context25 = canvas25.getContext("2d");

    var canvas26 = document.getElementById("canvas26");
    var context26 = canvas26.getContext("2d");

    var canvas27 = document.getElementById("canvas27");
    var context27 = canvas27.getContext("2d");

    var canvas28 = document.getElementById("canvas28");
    var context28 = canvas28.getContext("2d");

    var canvas29 = document.getElementById("canvas29");
    var context29 = canvas29.getContext("2d");

    var canvas30 = document.getElementById("canvas30");
    var context30 = canvas30.getContext("2d");

    var canvas31 = document.getElementById("canvas31");
    var context31 = canvas31.getContext("2d");

    var canvas32 = document.getElementById("canvas32");
    var context32 = canvas32.getContext("2d");

    var canvas33 = document.getElementById("canvas33");
    var context33 = canvas33.getContext("2d");

    var canvas34 = document.getElementById("canvas34");
    var context34 = canvas34.getContext("2d");

    var canvas35 = document.getElementById("canvas35");
    var context35 = canvas35.getContext("2d");

    var canvas36 = document.getElementById("canvas36");
    var context36 = canvas36.getContext("2d");

    var canvas37 = document.getElementById("canvas37");
    var context37 = canvas37.getContext("2d");

    var canvas38 = document.getElementById("canvas38");
    var context38 = canvas38.getContext("2d");

    var canvas39 = document.getElementById("canvas39");
    var context39 = canvas39.getContext("2d");

    var canvas40 = document.getElementById("canvas40");
    var context40 = canvas40.getContext("2d");

    var canvas41 = document.getElementById("canvas41");
    var context41 = canvas41.getContext("2d");

    var canvas42 = document.getElementById("canvas42");
    var context42 = canvas42.getContext("2d");

    var canvas43 = document.getElementById("canvas43");
    var context43 = canvas43.getContext("2d");

    var canvas44 = document.getElementById("canvas44");
    var context44 = canvas44.getContext("2d");

    var canvas45 = document.getElementById("canvas45");
    var context45 = canvas45.getContext("2d");

    var canvas46 = document.getElementById("canvas46");
    var context46 = canvas46.getContext("2d");

    var canvas47 = document.getElementById("canvas47");
    var context47 = canvas47.getContext("2d");

    var canvas48 = document.getElementById("canvas48");
    var context48 = canvas48.getContext("2d");

    var canvas49 = document.getElementById("canvas49");
    var context49 = canvas49.getContext("2d");

    var canvas50 = document.getElementById("canvas50");
    var context50 = canvas50.getContext("2d");

    var canvas51 = document.getElementById("canvas51");
    var context51 = canvas51.getContext("2d");

    var canvas52 = document.getElementById("canvas52");
    var context52 = canvas52.getContext("2d");

    var canvas53 = document.getElementById("canvas53");
    var context53 = canvas53.getContext("2d");

    var canvas54 = document.getElementById("canvas54");
    var context54 = canvas54.getContext("2d");

    var canvas55 = document.getElementById("canvas55");
    var context55 = canvas55.getContext("2d");

    var canvas56 = document.getElementById("canvas56");
    var context56 = canvas56.getContext("2d");

    var canvas57 = document.getElementById("canvas57");
    var context57 = canvas57.getContext("2d");

    var canvas58 = document.getElementById("canvas58");
    var context58 = canvas58.getContext("2d");

    var canvas59 = document.getElementById("canvas59");
    var context59 = canvas59.getContext("2d");

    var canvas60 = document.getElementById("canvas60");
    var context60 = canvas60.getContext("2d");

    var canvas61 = document.getElementById("canvas61");
    var context61 = canvas61.getContext("2d");

    var canvas62 = document.getElementById("canvas62");
    var context62 = canvas62.getContext("2d");

    var canvas63 = document.getElementById("canvas63");
    var context63 = canvas63.getContext("2d");

    var canvas64 = document.getElementById("canvas64");
    var context64 = canvas64.getContext("2d");


    var contexts = [ 
    context, 
    context2, 
    context3, 
    context4, 
    context5, 
    context6, 
    context7, 
    context8, 
    context9, 
    context10, 
    context11, 
    context12, 
    context13, 
    context14, 
    context15, 
    context16,
    context17, 
    context18, 
    context19, 
    context20, 
    context21, 
    context22, 
    context23, 
    context24, 
    context25, 
    context26, 
    context27, 
    context28, 
    context29, 
    context30, 
    context31, 
    context32, 
    context33, 
    context34, 
    context35, 
    context36, 
    context37, 
    context38, 
    context39, 
    context40, 
    context41, 
    context42, 
    context43, 
    context44, 
    context45, 
    context46, 
    context47, 
    context48, 
    context49, 
    context50, 
    context51, 
    context52, 
    context53, 
    context54, 
    context55, 
    context56, 
    context57, 
    context58, 
    context59, 
    context60, 
    context61, 
    context62, 
    context63, 
    context64 ];
        
        
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
    setInterval( addScreenshot, 100 );


    function drawScreenshots( ) {
        var counter = -1;

        for ( var i=Math.max(0,screenshots.length-contexts.length); i<screenshots.length; i++ ) {
            var screenshot = screenshots[ i ].getImageData( 0, 0, 320, 240 );

            contexts[ counter += 1 ].putImageData( screenshot, 0, 0 );
        }
    }
	setInterval( drawScreenshots, 100 );
};