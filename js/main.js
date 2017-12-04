$(document).ready(function(){




//isotype js

var count = 0;

var $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    masonry: {
        columnWidth: 100
    }
});

$grid.on( 'click', '.grid-item', function() {
    count++;
    // change size of item by toggling gigante class
    $( this ).toggleClass('gigante');
    $grid.isotope('layout');

});

});