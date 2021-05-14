import { FieldControl } from './field-control';

const { __ } = wp.i18n;
const { PanelBody } = wp.components;

export default function FieldSettingsWrapper( props ) {
	const {
			  title,
			  children,
			  editProps: { uniqKey = val => val },
		  } = props;

	return <PanelBody
		title={ title || __( 'Field Settings' ) }
	>
		{ children }
		<FieldControl
			type='custom_settings'
			key={ uniqKey( 'customSettingsFields' ) }
			{ ...props }
		/>
	</PanelBody>;
}