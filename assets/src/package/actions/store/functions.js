import DEFAULT_LOADING_STATE from './loading.state';
import { initClasses } from '../../hooks/useStateValidClasses';

const getLoadingItem = ( additional = {} ) => {
	const item = { ...DEFAULT_LOADING_STATE };
	if ( additional.state ) {
		item.buttonClassName = [ ...initClasses, additional.state ];
	}
	return { ...item, ...additional };
};

export default { getLoadingItem };