import { createHigherOrderComponent } from '@wordpress/compose';
import { useSelect } from '@wordpress/data';
import { useEffect } from '@wordpress/element';

export const withBlockUniqueClass = createHigherOrderComponent( ( BlockListBlockComponent ) => {
	return ( props ) => {
		const {
			name,
			className = '',
			clientId,
			setAttributes,
			attributes,
		} = props;

		// Pull the block’s registration info
		const blockType = useSelect(
			( select ) => select( 'core/blocks' ).getBlockType( name ),
			[ name ]
		);

		// If crocoblock_styles support is present, add our class
		if ( blockType?.supports?.crocoblock_styles ) {

			const uniqueClass = props?.attributes?.[ window.crocoStyleEditorData.support_name ]?.[ '_uniqueClassName' ];

			useEffect( () => {
				if ( window.crocoBlockStyleEditor.classIsUsed( uniqueClass, clientId ) ) {
					// If the class is already used, we need to generate a new one
					const newUniqueClass = generateUniqueClassName();

					setAttributes( {
						[ window.crocoStyleEditorData.support_name ]: {
							...attributes[ window.crocoStyleEditorData.support_name ],
							_uniqueClassName: newUniqueClass,
						},
					} );
				}
			}, [] );

			return (
				<BlockListBlockComponent
					{ ...props }
					className={ `${ className } ${ uniqueClass }`.trim() }
				/>
			);
		}

		// Otherwise render unmodified
		return <BlockListBlockComponent
			{ ...props }
		/>;
	};
}, 'withBlockUniqueClass' );

export const generateUniqueClassName = () => {

	const length = 8;

	let chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
	let result = '';

	for ( let i = 0; i < length; i++ ) {

		if ( i === 0 ) {
			// Ensure the first character is a letter
			result += chars.charAt( Math.floor( Math.random() * 26 ) );
			continue;
		}

		result += chars.charAt( Math.floor( Math.random() * chars.length ) );
	}

	return window.crocoStyleEditorData.class_prefix + result;
}
