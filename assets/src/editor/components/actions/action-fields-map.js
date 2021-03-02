import { saveGlobalComponent } from "../manager";

const {
	TextControl,
	ToggleControl,
	SelectControl,
	BaseControl,
	Button,
} = wp.components;

export const ActionFieldsMap = ( {
									 fields = [], label = '[Empty label]', children = () => {
	}
								 } ) => {

	return <BaseControl
		label={ label }
		key='jet_fields_map'
	>
		<div className='jet-user-fields-map__list'>
			{ fields.map( ( [ fieldId, fieldData ], index ) => <React.Fragment
				key={ `field_in_map_${ fieldId + index }` }
			>
				{ children( { fieldId, fieldData, index } ) }
			</React.Fragment> ) }
		</div>
	</BaseControl>
};

saveGlobalComponent( 'JetFBComponents', { ActionFieldsMap } );