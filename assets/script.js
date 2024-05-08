console.log("hello");

if (jQuery) {
    console.log("jQuery loaded")
}
else {
    console.log("no jQuery")
}

var splide = new Splide( '#March', {
    type   : 'loop',
    perPage: 4,
    focus  : 'center',
  } );
  
  splide.mount();

  var splide = new Splide( '#Products', {
    type   : 'loop',
    perPage: 4,
    focus  : 'center',
  } );
  
  splide.mount();

  const image = document.getElementById( 'productImg' )
  const btn = document . getElementByClassName( 'btn' )

  btn[0].addEventListener( 'click', function(){
    image.scr = 'assets/tarte-1.jpg';
  } );
  
  btn[1].addEventListener( 'click', function(){
      image.scr = 'assets/tarte-2.jpg';
  } );
  
  btn[2].addEventListener( 'click', function(){
      image.scr = 'assets/tarte-3.jpg';
  } );

