

  const image = document.getElementById( 'productImg' )
  const btn = document.getElementsByClassName( 'btn' )

  btn[0].addEventListener( 'click', function(){
    image.src = 'assets/tarte-1.jpg';
  } );
  
  btn[1].addEventListener( 'click', function(){
      image.src = 'assets/tarte-2.jpg';
  } );
  
  btn[2].addEventListener( 'click', function(){
      image.src = 'assets/tarte-3.jpg';
  } );

  btn[3].addEventListener( 'click', function(){
    image.src = 'assets/tarte-4.jpg';
} );

btn[4].addEventListener( 'click', function(){
    image.src = 'assets/tarte-5.jpg';
} );


  
