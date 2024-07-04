import { SelectControl, TextControl } from '@wordpress/components';
import { useContext } from '@wordpress/element';
import { CurrentActionEditContext } from 'jet-form-builder-actions';

const {
	      ActionFieldsMapContext,
	      CurrentPropertyMapContext,
      } = JetFBComponents;

function PostPropertySelect() {
	// context with action props
	const {
		      FieldSelect,
		      property,
	      } = useContext( CurrentPropertyMapContext );
	const {
		      source,
		      setMapField,
		      getMapField,
	      } = useContext( CurrentActionEditContext );
	// context with current field in fields map
	const {
		      name,
		      index,
	      } = useContext( ActionFieldsMapContext );

	switch ( property ) {
		case 'meta_input':
			return <div
				className="components-base-control jet-margin-bottom-wrapper"
			>
				{ FieldSelect }
				<TextControl
					key={ name + index + '_text' }
					value={ getMapField( { name } ) }
					onChange={ value => setMapField(
						{ nameField: name, value },
					) }
					__next40pxDefaultSize
					__nextHasNoMarginBottom
				/>
			</div>;
		case 'post_terms':
			return <div
				className="components-base-control jet-margin-bottom-wrapper"
			>
				{ FieldSelect }
				<SelectControl
					key={ name + index + '_select' }
					value={ getMapField( { name } ) }
					onChange={ value => setMapField(
						{ nameField: name, value },
					) }
					options={ source.taxonomies }
					__next40pxDefaultSize
					__nextHasNoMarginBottom
				/>
			</div>;
		default:
			return FieldSelect;
	}
}

export default PostPropertySelect;