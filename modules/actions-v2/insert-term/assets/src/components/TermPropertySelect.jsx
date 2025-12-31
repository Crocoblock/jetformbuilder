import { useContext } from '@wordpress/element';
import { CurrentActionEditContext } from 'jet-form-builder-actions';
import { StyledTextControl } from 'jet-form-builder-components';
const {
	      ActionFieldsMapContext,
	      CurrentPropertyMapContext,
      } = JetFBComponents;

function TermPropertySelect() {
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
		case 'term_meta':
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
		default:
			return FieldSelect;
	}
}

export default TermPropertySelect;