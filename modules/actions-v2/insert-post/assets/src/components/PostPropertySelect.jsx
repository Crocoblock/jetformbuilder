import { useContext } from '@wordpress/element';
import { CurrentActionEditContext } from 'jet-form-builder-actions';
import { StyledSelectControl, StyledTextControl } from 'jet-form-builder-components';

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
				<StyledTextControl
					key={ name + index + '_text' }
					value={ getMapField( { name } ) }
					onChange={ value => setMapField(
						{ nameField: name, value },
					) }
				/>
			</div>;
		case 'post_terms':
			return <div
				className="components-base-control jet-margin-bottom-wrapper"
			>
				{ FieldSelect }
				<StyledSelectControl
					key={ name + index + '_select' }
					value={ getMapField( { name } ) }
					onChange={ value => setMapField(
						{ nameField: name, value },
					) }
					options={ source.taxonomies }
				/>
			</div>;
		default:
			return FieldSelect;
	}
}

export default PostPropertySelect;