import AiFormHeaderButton from './AiFormHeaderButton';
import AiFormPatternButton from './AiFormPatternButton';
import AiPattern from './ai.pattern.json';

const {
	      createRoot,
      } = wp.element;

const {
	      subscribe,
	      dispatch,
      } = wp.data;

const buttonDiv = document.createElement( 'div' );
buttonDiv.classList.add( 'jfb-generate-form-ai-wrapper' );

// Render our button.
createRoot( buttonDiv ).render( <AiFormHeaderButton/> );

const appendButton = function () {
	const header = document.querySelector(
		'.edit-post-header-toolbar',
	);

	if ( !header ||
		header.querySelector( '.jfb-generate-form-ai-wrapper' )
	) {
		return null;
	}

	header.appendChild( buttonDiv );

	return null;
};

wp.domReady( () => {
	subscribe( () => {
		setTimeout( appendButton, 0 );
	} );
} );

dispatch( 'jet-forms/patterns' ).register( {
	...AiPattern,
	view: AiFormPatternButton,
} );