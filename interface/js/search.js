// Hover img to show btn 
var imgItems = $('.grid-item');
var imgLinks = $('.img-link');
imgItems.each((i,e)=> {
  var thisWidth = $(e).width();
  var thisHeight = $(e).height();

  $(imgLinks[i]).width(thisWidth);
  $(imgLinks[i]).height(thisHeight);
})


// Load Image
var elem = document.querySelector('.grid-container');
imagesLoaded( elem, () => {
    var msnry = new Masonry( elem, {
        // options
        itemSelector: '.img-wrap',
        columnWidth: 230,
        gutter: 16,
        isFitWidth: true,
      });
} )


// Sly Silder
var $frame = $('#main');
var $wrap= $frame.parent();

$frame.sly({
  horizontal: 1,
  itemNav: 'basic',
  smart: 1,
  activateOn: 'click',
  scrollBy: 1,
  speed: 300,
  elasticBounds: 1,
  easing: 'easeOutExpo',
  dragHandle: 1,
  dynamicHandle: 1,
  // clickBar: 1,
  
  prevPage: $wrap.find('.prev'),
  nextPage: $wrap.find('.next'),
});




  







