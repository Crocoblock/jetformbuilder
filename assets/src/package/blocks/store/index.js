import reducer from './reducer';
import actions from './actions';
import selectors from './selectors';
import getPreparedBlocks from './getPreparedBlocks';

const {
	      createReduxStore,
	      dispatch,
	      select,
	      subscribe,
      } = wp.data;

export const storeName = 'jet-forms/fields';

let prevBlockCount;
let prevBlockAttrs;

subscribe( () => {
	const { debounce }  = lodash;
	const { setBlocks } = dispatch( storeName );

	const resetBlocks = debounce( () => {
		const countBlocks = select( 'core/block-editor' ).getGlobalBlockCount();

		if ( prevBlockCount !== countBlocks ) {
			prevBlockCount = countBlocks;
			setBlocks();

			return;
		}

		const action    = getPreparedBlocks();
		const jsonAttrs = JSON.stringify( action.blocks );

		if ( jsonAttrs === prevBlockAttrs ) {
			return;
		}

		prevBlockAttrs = jsonAttrs;
		setBlocks( action );
	}, 100 );

	resetBlocks();
} );

export default createReduxStore( storeName, {
	reducer,
	actions,
	selectors,
} );
