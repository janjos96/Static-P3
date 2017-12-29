$(document).ready(function(){
    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene);


    var x = 0;
   // console.log(x);

    $(".scrollbar").scroll(function(){
        x+= 1;
        console.log($(this).scrollTop());

        if($(this).scrollTop() >= 800){

            $("#navb").css("display", "block");

        } else {
            $("#navb").css("display", "none");

        }
    });





//isotype js


var $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    transitionDuration: 0,
    masonry: {
        columnWidth: 100,

    }
});

$grid.on( 'click', '.grid-item', function() {

    // change size of item by toggling gigante class
    $('.grid-item').removeClass('gigante');
    $('.viewmore').css('display','none');
    $(this).addClass('gigante');
    $(this).find(".viewmore").fadeIn(0);
    $grid.isotope('layout');

});



});
