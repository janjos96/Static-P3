$(document).ready(function(){




//isotype js


var $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    masonry: {
        columnWidth: 100
    }
});

$grid.on( 'click', '.grid-item', function() {

    // change size of item by toggling gigante class
    $( this ).toggleClass('gigante');
    $grid.isotope('layout');

});

});