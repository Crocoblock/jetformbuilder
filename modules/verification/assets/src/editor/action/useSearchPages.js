import fetchPages from '../fetchPages';
import getPagesPath from '../getPagesPath';

const {
	      useState,
	      useEffect,
      } = wp.element;

function useSearchPages( base = [] ) {
	const [ pages, setPages ]         = useState( [] );
	const [ inputPage, setInputPage ] = useState( '' );

	useEffect(
		() => {
			if ( !inputPage ) {
				setPages( base );
				return;
			}

			fetchPages( {
				path: getPagesPath( inputPage ),
			} ).then( setPages );
		},
		[ inputPage, base.length ],
	);

	return [ pages, setInputPage ];
}

export default useSearchPages;