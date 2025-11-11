import { useContext } from '@wordpress/element';
import { ToggleControl } from '@wordpress/components';
import { CurrentActionEditContext } from 'jet-form-builder-actions';
import { StyledSelectControl, StyledTextControl } from 'jet-form-builder-components';

const {
	ActionFieldsMapContext,
	CurrentPropertyMapContext,
} = JetFBComponents;

const FLAGS_SOURCE = 'single_checkbox_as_array';

function PostPropertySelect() {
	const { FieldSelect, property } = useContext( CurrentPropertyMapContext );
	const { source, setMapField, getMapField } = useContext( CurrentActionEditContext );
	const { name, index } = useContext( ActionFieldsMapContext );

	const mapValue   = getMapField({ name }) ?? '';
	const flagValue  = !!getMapField({ source: FLAGS_SOURCE, name });

	const setMapValue  = (value) => setMapField({ nameField: name, value });
	const setFlagValue = (value) => setMapField({ source: FLAGS_SOURCE, nameField: name, value: !!value });

	switch ( property ) {
		case 'meta_input':
			return (
				<div className="components-base-control jet-margin-bottom-wrapper">
					{ FieldSelect }
					<StyledTextControl
						key={ name + index + '_text' }
						value={ mapValue }
						onChange={ setMapValue }
					/>
					<ToggleControl
						className="jet-margin-top-xs"
						label="Toggle (для этого поля)"
						checked={ flagValue }
						onChange={ setFlagValue }
					/>
				</div>
			);

		case 'post_terms':
			return (
				<div className="components-base-control jet-margin-bottom-wrapper">
					{ FieldSelect }
					<StyledSelectControl
						key={ name + index + '_select' }
						value={ mapValue }
						onChange={ setMapValue }
						options={ source.taxonomies }
					/>
					<ToggleControl
						className="jet-margin-top-xs"
						label="Toggle (для этого поля)"
						checked={ flagValue }
						onChange={ setFlagValue }
					/>
				</div>
			);

		default:
			return FieldSelect;
	}
}

export default PostPropertySelect;
