import { useSelectPostMeta } from './hooks-helper';

const {
	      useBlockProps,
      } = wp.blockEditor;

const {
	      useSelect,
	      useDispatch,
      } = wp.data;

function useUniqKey() {
	const blockProps = useBlockProps();

	return slug => (
		slug + '-' + blockProps[ 'data-block' ]
	);
}

function useBlockAttributes() {
	const blockProps = useBlockProps();
	const clientId   = blockProps[ 'data-block' ];

	const attributes      = useSelect( select => {
		return select( 'core/block-editor' ).getBlockAttributes( clientId );
	} );
	const { updateBlock } = useDispatch( 'core/block-editor', [] );

	const updateAttributes = props => {
		if ( 'object' === typeof props ) {
			updateBlock( clientId, { attributes: props } );

			return;
		}

		updateBlock( clientId, {
			attributes: props( attributes ),
		} );
	};

	return [ attributes, updateAttributes ];
}

function useIsAdvancedValidation() {
	const { type }       = useSelectPostMeta( '_jf_validation' );
	const [ attributes ] = useBlockAttributes();

	if ( attributes.validation?.type ) {
		return 'advanced' === attributes.validation?.type;
	}

	return 'advanced' === type;
}

export { useUniqKey, useBlockAttributes, useIsAdvancedValidation };