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

$(document).ready(function () {
    // init Isotope
    var $grid = $('.grid').isotope();
// filter items on button click
    $('.filter-button-group').on('click', '.btn-filter', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({filter: filterValue});
    });
});

$(document).ready(function () {
    $(".zious-default-nav").find("li.dropdown").each(function () {
        var text= $(this).text();
        var ww = $('body').width();
        var d = (ww - $(this).prop('offsetLeft'));
        if(d<250)
        {
            $(this).find(".dropdown-ul").addClass("right-0");
        }
        console.log(ww);
    });


    // OWL SIMPLE

    function addanim(){
        var img = $(".owl-carousel-simple").find(".current").find(".slide-item").css('background-image');
        img = img.replace('url(','').replace(')','').replace(/\"/gi, "");
        $(this).css({'background-image':'none','background-color':'red'});
        var w = $(".slide-item").width();
        var h = $(".slide-item").height();

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
            backgroundImage: 'url('+ img +')'
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
                transition: 'all '+trTime+'ms ease-in'
            } );

            x++;

            if(x==3){
                x=0;
                y++;
            }
        });

        $(".owl-carousel-simple").find(".current").find(".slide-item").html( $tiles );
    }

    $(".owl-carousel-simple").owlCarousel({
        items:1,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        },
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        afterAction: function(el){
            //remove class active
            this
                .$owlItems
                .removeClass('active')

            //add class active
            this
                .$owlItems //owl internal $ object containing items
                .eq(this.currentItem + 1)
                .addClass('active')
        },
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        afterMove: function (elem) {
            $(".owl-carousel-simple").find(".current").removeClass("current");
            var current = this.$owlItems.eq(this.currentItem).addClass("current");

            addanim();
        }
    });






});

$(document).ready(function () {
    /*$(".owl-carousel-simple").find(".slide-item").each(function () {
        var img = $(this).css('background-image');
        img = img.replace('url(','').replace(')','').replace(/\"/gi, "");
        $(this).css({'background-image':'none','background-color':'red'});
        var w = $(".slide-item").width();
        var h = $(".slide-item").height();

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
            backgroundImage: 'url('+ img +')'
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

        $(this).html( $tiles );

    });*/

});

/*function TileSlide(){
    var img = $(".owl-carousel-simple").find(".current").find(".slide-item").css('background-image');
    img = img.replace('url(','').replace(')','').replace(/\"/gi, "");
    $(this).css({'background-image':'none','background-color':'red'});
    var w = $(".slide-item").width();
    var h = $(".slide-item").height();

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
        backgroundImage: 'url('+ img +')'
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
            transition: 'all '+trTime+'ms ease-in'
        } );

        x++;

        if(x==3){
            x=0;
            y++;
        }
    });

    $(".owl-carousel-simple").find(".current").find(".slide-item").html( $tiles );
}*/

function slideSwitch() {

    var $active = $('.zious-carousel').find(".slide-item").hasClass("active");


    var w = $(".slide-item").width();
    var h = $(".slide-item").height();

    console.log($active);
    if($active){
        var $currItem = $('.zious-carousel').find(".active");
        var $next;
        if(!$currItem.is(':last-child'))
        {
            $next = $currItem.next();
            $next.addClass('active').css({'z-index':99});
            console.log("TGTG "+$next);
        }
        else{

            $('.zious-carousel').find(".slide-item:first").addClass('active').css({'z-index':98});
        }


        $currItem.removeClass('active').css({'z-index':0}).find('.tile').remove();
    }
    else{
        $('.zious-carousel').find(".slide-item:first").addClass('active').css({'z-index':99});
    }


    var $disItem = $(".zious-carousel").find(".active");
    var $img = $(".zious-carousel").find(".active").css('background-image');

    $img = $img.replace('url(','').replace(')','').replace(/\"/gi, "");
    $disItem.css({'background-image':'none'});
    setTimeout(function(){ $(".zious-carousel").find(".active").css('background-image','url('+ $img +')'); alert($img); },2000);

    var w = $(".slide-item").width();
    var h = $(".slide-item").height();

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
        backgroundImage: 'url('+ $img +')'
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

    $($disItem).html( $tiles );


}




$(document).ready(function(){
    slideSwitch();
    $(function() {
        setInterval( "slideSwitch()", 3000 );
    });
});

