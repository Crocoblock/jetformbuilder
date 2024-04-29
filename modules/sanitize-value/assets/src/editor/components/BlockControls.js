import { SUPPORT_NAME } from '../constants';
import SanitizeValueItems from './SanitizeValueItems';

const {
	      createHigherOrderComponent,
      } = wp.compose;
const {
	      BlockControls,
      } = wp.blockEditor;
const {
	      useSelect,
      } = wp.data;

const withBlockToolbarControls = createHigherOrderComponent( ( BlockEdit ) => {
	return ( props ) => {
		const { name } = props;

		const support = useSelect( select => {
			return select( 'core/blocks' ).
				getBlockSupport( name, SUPPORT_NAME );
		} );

		return <>
			<BlockEdit { ...props } />
			{ Boolean( support ) && <BlockControls group="other">
				<SanitizeValueItems/>
			</BlockControls> }
		</>;

	};
}, 'withBlockToolbarControls' );

export default withBlockToolbarControls;