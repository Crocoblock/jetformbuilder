const {
	      ToggleControl,
      } = wp.components;

function SaveRecordRender( {
	settings,
	label,
	onChangeSettingObj,
} ) {

	return <>
		<ToggleControl
			label={ label( 'save_user_data' ) }
			checked={ settings.save_user_data }
			onChange={
				save_user_data => onChangeSettingObj( { save_user_data } )
			}
		/>
	</>;
}

export default SaveRecordRender;