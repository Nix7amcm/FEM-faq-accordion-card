document.querySelectorAll( '.accordion__question' ).forEach( ( item ) => {
  item.addEventListener( 'click', ( event ) => {

    let accCollapse = item.nextElementSibling;  //<--- set local variable

    //**** OPEN accordian item ****//
    //--- 1-  If '.accordion__question' NO(!) class 'open':
    if ( !item.classList.contains( 'open' ) ) { // 1

      //_____ [ set height on open (w/delay for transition) ] _____//
      accCollapse.style.display = 'block'; // set display to block
      let accHeight = accCollapse.clientHeight; // get the height
      setTimeout( () => { // add delay for transition to take effect
        accCollapse.style.height = accHeight + 'px'; // set the height
        accCollapse.style.display = ''; // change height to hidden
      }, 1 );

      //::::: ( ...after clicked: )
      //--- 2-  (-) 'collapse' from '.accordion__collapse' (sibling) &
      //---     (+) 'collapsing' class:
      accCollapse.classList = 'accordion__collapse collapsing'; // 2

      //--- 3-  After X time:
      setTimeout( () => { // 3
        //::::: ( ...open accordion by: )
        //--- 4-  (-) 'collapsing' class &
        //---     (+) 'collapse open' classes:
        accCollapse.classList = 'accordion__collapse collapse open'; // 4

      }, 300 ); // 3
    }

    //**** CLOSE accordion item ****//
    //--- 5-  If '.accordion__question' HAS class 'open':
    else { // 5
      //::::: ( ...after clicked: )
      //--- 6-  (-) 'collapse open' from '.accordion__collapse' &
      //---     (+) 'collapsing' class:
      accCollapse.classList = 'accordion__collapse collapsing'; // 6

      //_____ [ set height on close (after transition) ] _____//
      setTimeout( () => {
        accCollapse.style.height = '0px';
      }, 1 );

      //--- 7-  After X time: 
      setTimeout( () => { // 7
        //::::: ( ...close accordion by: )
        //--- 8-  (-) 'collapsing' class & 
        //---     (+) 'collapse' class:
        accCollapse.classList = 'accordion__collapse collapse'; // 8

        //_____ [ cancel height ] _____//
        accCollapse.style.height = '';

      }, 300 ); // 7
    }

    item.classList.toggle( 'open' );

  } );
} );