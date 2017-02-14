$(document).ready(function () {
    var img = $(".sliced").find("img");
    var w   = 372;
    var h   = 279;
    $(".sliced").css({
        width: w,
        height: h
    });
    console.log("Width = "+ w + ", Height = "+h);

    var totalTiles = 9;
    var divW = Math.floor(w/3);
    var divH = Math.floor(h/3);
    var tiles = [];
    for ( var i = 0; i < 9; i++ ) {
        tiles.push('<div class="tile"/>');
    }
    var tile2 = [];

    $tiles = $( tiles.join('') );

    $($tiles).css( {
        width: divW,
        height: divH,
        backgroundImage: 'url('+ img.attr('src') +')'
    } );
    var x = 0;
    var y = 0;
    $tiles.each(function(k) {
        var pos = $(this).position();
        var trTime = 450*(k+1);
        $(this).addClass("test").css( {
            width: divW,
            height: divH,
            top: divH*y +'px',
            left: divW*x +'px',
            backgroundPosition: -divW*x +'px '+ -divH*y +'px',
            transform: 'scale(1)',
            transition: 'all '+trTime+'ms ease-in'
        } );

        x++;

        if(x==3){
            x=0;
            y++;
        }
    });
    // Hide original image and insert tiles in DOM
    img.hide().after( $tiles );

});