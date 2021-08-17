import {
	FieldControl,
	filterFieldControls,
} from './field-control';

const { __ } = wp.i18n;
const { PanelBody } = wp.components;

export default function FieldSettingsWrapper( props ) {
	const {
			  title,
			  children,
			  editProps: { uniqKey = val => val },
		  } = props;

	const fieldControls = filterFieldControls( { ...props, type: 'custom_settings' } );

	return Boolean( fieldControls.length || children ) && <PanelBody
		title={ title || __( 'Field Settings' ) }
	>
		{ children }
		<FieldControl
			type='custom_settings'
			fieldControls={ fieldControls }
			key={ uniqKey( 'customSettingsFields' ) }
			{ ...props }
		/>
	</PanelBody>;
}