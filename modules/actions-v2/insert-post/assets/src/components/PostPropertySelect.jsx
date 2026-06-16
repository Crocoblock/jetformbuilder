import { useContext } from '@wordpress/element';
import {
	CurrentActionEditContext,
	SingleValueAsArrayToggle,
} from 'jet-form-builder-actions';
import { StyledSelectControl, StyledTextControl } from 'jet-form-builder-components';

const {
	ActionFieldsMapContext,
	CurrentPropertyMapContext,
} = JetFBComponents;

function PostPropertySelect() {
	const { FieldSelect, property } = useContext(CurrentPropertyMapContext);
	const { source, setMapField, getMapField } = useContext(CurrentActionEditContext);
	const { name, index } = useContext(ActionFieldsMapContext);

	const mapValue = getMapField({ name }) ?? '';

	const setMapValue = value => setMapField({
		nameField: name,
		value,
	});

	switch (property) {
		case 'meta_input':
			return (
				<div className="components-base-control jet-margin-bottom-wrapper">
					{FieldSelect}

					<StyledTextControl
						key={name + index + '_text'}
						value={mapValue}
						onChange={setMapValue}
					/>

					<SingleValueAsArrayToggle
						fieldName={name}
						getMapField={getMapField}
						setMapField={setMapField}
						showHelp={true}
					/>
				</div> 
			);

		case 'post_terms':
			return (
				<div className="components-base-control jet-margin-bottom-wrapper">
					{FieldSelect}
					<StyledSelectControl
						key={name + index + '_select'}
						value={mapValue}
						onChange={setMapValue}
						options={source.taxonomies}
					/>
				</div>
			);

		default:
			return FieldSelect;
	}
}

export default PostPropertySelect;