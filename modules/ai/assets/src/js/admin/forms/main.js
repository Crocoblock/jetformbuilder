import GenerateFormButton from './GenerateFormButton';

const {
	      createRoot,
      } = wp.element;

const mountGenerateFormAIButton = () => {
	// Render our button.
	const buttonDiv         = document.createElement( 'div' );
	buttonDiv.style.display = 'inline-flex';

	const title = document.querySelector(
		'.page-title-action[href*="post-new.php"]',
	);

	title.after( buttonDiv );

	createRoot( buttonDiv ).render( <GenerateFormButton/> );
};

wp.domReady( mountGenerateFormAIButton );