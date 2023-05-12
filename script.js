document.querySelectorAll( '.accordion__question' ).forEach( ( item ) => {
  item.addEventListener( 'click', ( event ) => {

    //### OPEN accordian item ###//
    //--- 1-  If '.accordion__question' NO(!) class 'open':
    if ( !item.classList.contains( 'open' ) ) {                              // 1
      //::::: ( ...then clicked: )
      //--- 2-  (-) 'collapse' from '.accordion__collapse' (sibling) &
      //---     (+) 'collapsing' class:
      item.nextElementSibling.classList = 'accordion__collapse collapsing';  // 2
      //--- 3-  After X time:
      setTimeout( () => {                                                    // 3
        //::::: ( ...open accordion by: )
        //--- 4-  (-) 'collapsing' class &
        //---     (+) 'open' class:
        item.nextElementSibling.classList = 'accordion__collapse open';      // 4
      }, 300 );                                                              // 3

    }

    //### CLOSE accordion item ###//
    //--- 5-  If '.accordion__question' HAS class 'open':
    else {                                                                   // 5
      //::::: ( ...then clicked: )
      //--- 6-  (-) 'open' from '.accordion__collapse' (sibling) &
      //---     (+) 'collapsing' class:
      item.nextElementSibling.classList = 'accordion__collapse collapsing';  // 6
      //--- 7-  After X time: 
      setTimeout( () => {                                                    // 7
        //::::: ( ...close accordion by: )
        //--- 8-  (-) 'collapsing' class & 
        //---     (+) 'collapse' class:
        item.nextElementSibling.classList = 'accordion__collapse collapse';  // 8
      }, 300 );                                                              // 7

    }

    item.classList.toggle( 'open' );

  } );
} );