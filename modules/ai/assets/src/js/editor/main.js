import GenerateFormButton from './GenerateFormButton';

const {
	      createRoot,
      } = wp.element;

const {
	      subscribe,
      } = wp.data;

const buttonDiv = document.createElement( 'div' );
buttonDiv.classList.add( 'jfb-generate-form-ai-wrapper' );

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

const mountGenerateFormAIButton = () => {
	// Render our button.
	createRoot( buttonDiv ).render( <GenerateFormButton/> );

	subscribe( () => {
		setTimeout( appendButton, 0 );
	} );
};

wp.domReady( mountGenerateFormAIButton );