(function() {
	var triggerBttn = document.getElementById( 'trigger-overlay' ),
		overlay = document.querySelector( 'div.overlay' ),
		body = document.querySelector( 'body' ),
		closeBttn = overlay.querySelector( 'a.overlay-close' );
		slideBttnCont = document.getElementById( 'menu' );
		transEndEventNames = {
			'WebkitTransition': 'webkitTransitionEnd',
			'MozTransition': 'transitionend',
			'OTransition': 'oTransitionEnd',
			'msTransition': 'MSTransitionEnd',
			'transition': 'transitionend'
		},
		transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
		support = { transitions : Modernizr.csstransitions };

	function toggleOverlay(e) {
		// e.preventDefault();
		if( classie.has( overlay, 'open' ) ) {
			classie.remove( overlay, 'open' );
			classie.add( overlay, 'close' );
			classie.remove(body, 'no-scroll');
			var onEndTransitionFn = function( ev ) {
				if( support.transitions ) {
					if( ev.propertyName !== 'visibility' ) return;
					this.removeEventListener( transEndEventName, onEndTransitionFn );
				}
				classie.remove( overlay, 'close' );
			};
			if( support.transitions ) {
				overlay.addEventListener( transEndEventName, onEndTransitionFn );
			}
			else {
				onEndTransitionFn();
			}
		}
		else if( !classie.has( overlay, 'close' ) ) {
			classie.add( overlay, 'open' );
			classie.add(body, 'no-scroll');
		}
	}

	triggerBttn.addEventListener( 'click', toggleOverlay );
	closeBttn.addEventListener( 'click', toggleOverlay );
	slideBttnCont.addEventListener( 'click', toggleOverlay );
})();
