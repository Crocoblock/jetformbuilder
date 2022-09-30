export const initClasses = [ 'jet-form-validate-button' ];

const {
	      useState,
      } = wp.element;

function useStateValidClasses( initialValid ) {
	const validClass   = 'is-valid';
	const invalidClass = 'is-invalid';

	const initStateClasses = () => {
		if ( initialValid ) {
			return [ ...initClasses, validClass ];
		}
		else if ( !initialValid ) {
			return [ ...initClasses, invalidClass ];
		}
	};

	const [ classes, setClasses ] = useState( initStateClasses() );

	const setValidClass   = () => {
		setClasses( [ ...initClasses, validClass ] );
	};
	const setInvalidClass = () => {
		setClasses( [ ...initClasses, invalidClass ] );
	};
	const setLoadingClass = () => {
		setClasses( [ ...initClasses, 'loading' ] );
	};

	return [
		classes.join( ' ' ),
		setValidClass,
		setInvalidClass,
		setLoadingClass,
	];
}

export default useStateValidClasses;