const {
	addAction,
} = JetFBActions;

const {
	ToggleControl
} = wp.components;

function SaveRecordAction( {
	settings,
	source,
	label,
	help,
	onChangeSettingObj,
} ) {

	return <>
		<ToggleControl
			label={ label( 'save_user_data' ) }
			checked={ settings.save_user_data }
			onChange={ save_user_data => onChangeSettingObj( { save_user_data } ) }
		/>
	</>;
}


addAction( 'save_record', SaveRecordAction );