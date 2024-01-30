import AiFormHeaderButton from './AiFormHeaderButton';
import AiFormPatternButton from './AiFormPatternButton';

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
	name: 'ai',
	title: 'Generate via AI',
	view: AiFormPatternButton,
	icon: <svg width="48" height="48" viewBox="0 0 48 48" fill="currentColor"
	           xmlns="http://www.w3.org/2000/svg">
		<path
			d="M40 16L36 13.76L32 16L34.24 12L32 8L36 10.24L40 8L37.76 12L40 16Z"
		/>
		<path
			d="M21 18L17 15.76L13 18L15.24 14L13 10L17 12.24L21 10L18.76 14L21 18Z"
		/>
		<path
			d="M34.32 30L36 27L33 28.68L30 27L31.68 30L30 33L33 31.32L36 33L34.32 30Z"
		/>
		<path fillRule="evenodd" clipRule="evenodd"
		      d="M8.59073 33.7046C7.80309 34.4923 7.80309 35.7693 8.59073 36.5569L11.4431 39.4093C12.2307 40.1969 13.5077 40.1969 14.2954 39.4093L31.4093 22.2954C32.1969 21.5077 32.1969 20.2307 31.4093 19.4431L28.5569 16.5907C27.7693 15.8031 26.4923 15.8031 25.7046 16.5907L8.59073 33.7046ZM22.8548 22.269L10.0049 35.1188L10.002 35.1221L10.0013 35.123C10.0011 35.1236 10 35.1266 10 35.1308C10 35.1332 10.0003 35.135 10.0005 35.1363L10.0011 35.1382C10.0012 35.1383 10.0023 35.1401 10.0049 35.1427L12.8573 37.9951C12.8581 37.9959 12.8588 37.9966 12.8594 37.9971C12.8599 37.9975 12.8603 37.9978 12.8606 37.9981L12.8614 37.9987C12.862 37.9989 12.865 38 12.8692 38C12.8716 38 12.8735 37.9997 12.8748 37.9994C12.8757 37.9992 12.8763 37.999 12.8766 37.9989C12.8767 37.9988 12.8785 37.9977 12.8812 37.9951L25.731 25.1452L22.8548 22.269ZM24.269 20.8548L27.1452 23.731L29.9951 20.8812L29.9978 20.8781L29.9987 20.877L29.9995 20.8743C29.9998 20.8731 30 20.8713 30 20.8692C30 20.8674 29.9998 20.8659 29.9996 20.8647C29.9994 20.8631 29.999 20.8622 29.9989 20.8618C29.9988 20.8617 29.9977 20.8599 29.9951 20.8573L27.1427 18.0049C27.1401 18.0023 27.1387 18.0014 27.1386 18.0013C27.1384 18.0012 27.1375 18.0009 27.1369 18.0007C27.1356 18.0004 27.1336 18 27.1308 18C27.1266 18 27.124 18.0009 27.1234 18.0011C27.1233 18.0012 27.1215 18.0023 27.1188 18.0049L24.269 20.8548Z"
		/>
	</svg>,
} );