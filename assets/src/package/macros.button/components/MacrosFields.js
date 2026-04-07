import { useSelect } from '@wordpress/data';
import MacrosFieldsTemplate from './MacrosFieldsTemplate';
import MacroFieldItem from './MacroFieldItem';
import { useFields } from 'jet-form-builder-blocks-to-actions';

function getFieldNameFromAttrs( attrs = {} ) {
	return (
		attrs.name ||
		attrs.field_name ||
		attrs.fieldName ||
		''
	);
}

function buildFieldsContextMap( blocks = [] ) {
	const map = {};

	const walk = ( list, repeaterParent = null ) => {
		( list || [] ).forEach( ( block ) => {
			const fieldName  = getFieldNameFromAttrs( block?.attributes );
			const isRepeater = block?.name === 'jet-forms/repeater-field';

			if ( fieldName ) {
				map[ fieldName ] = {
					is_repeater: isRepeater,
					is_repeater_child: Boolean( repeaterParent ) && !isRepeater,
					repeater_name: repeaterParent
						? getFieldNameFromAttrs( repeaterParent.attributes )
						: '',
				};
			}

			const nextRepeater = isRepeater ? block : repeaterParent;

			if ( block?.innerBlocks?.length ) {
				walk( block.innerBlocks, nextRepeater );
			}
		} );
	};

	walk( blocks );

	return map;
}

function MacrosFields( {
	   onClick = () => {},
	   withCurrent = false,
	   ...props
   } ) {
	const fields = useFields( { excludeCurrent: !withCurrent } );

	// Map: fieldName -> { is_repeater, is_repeater_child, repeater_name }
	const ctxMap = useSelect(
		( select ) => {
			const be = select( 'core/block-editor' );
			return buildFieldsContextMap( be?.getBlocks?.() || [] );
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[]
	);

	const enrichedFields = ( fields || [] ).map( ( field ) => {
		const ctx = ctxMap?.[ field?.value ];
		return ctx ? { ...field, ...ctx } : field;
	} );

	return (
		<MacrosFieldsTemplate
			withCurrent={ withCurrent }
			fields={ enrichedFields }
			{ ...props }
		>
			<MacroFieldItem onClick={ onClick } />
		</MacrosFieldsTemplate>
	);
}

export default MacrosFields;
