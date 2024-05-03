console.log("hello");

if (jQuery) {
    console.log("jQuery loaded")
}
else {
    console.log("no jQuery")
}

var splide = new Splide( '#March', {
    type   : 'loop',
    perPage: 3,
    focus  : 'center',
  } );
  
  splide.mount();

  var splide = new Splide( '#Products', {
    type   : 'loop',
    perPage: 3,
    focus  : 'center',
  } );
  
  splide.mount();