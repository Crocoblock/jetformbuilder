import { initClasses } from './useStateValidClasses';

const {
	      useState,
      } = wp.element;

function useStateLoadingClasses() {
	const [ classes, setClasses ] = useState( [ ...initClasses ] );

	const setLoadingClass   = () => {
		setClasses( [ ...initClasses, 'loading' ] );
	};
	const clearLoadingClass = () => {
		setClasses( initClasses );
	};

	return [ classes.join( ' ' ), setLoadingClass, clearLoadingClass ];
}

export default useStateLoadingClasses;