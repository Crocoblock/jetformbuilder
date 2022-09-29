import useBlockAttributes from '../../blocks/hooks/useBlockAttributes';
import { insertMacro } from '../functions';

const {
	      useRef,
      } = wp.element;

function useInsertMacro( attrName ) {
	const [ attributes, updateAttributes ] = useBlockAttributes();

	const initial = attributes[ attrName ] ?? '';

	const input  = useRef();
	const update = macro => {
		updateAttributes( {
			[ attrName ]: insertMacro( initial, macro, input.current ),
		} );
	};

	return [ input, update ];
}

export default useInsertMacro;