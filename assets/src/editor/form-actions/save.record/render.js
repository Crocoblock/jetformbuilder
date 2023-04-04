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
		<ToggleControl
			label={ label( 'save_spam' ) }
			checked={ settings.save_spam }
			onChange={
				save_spam => onChangeSettingObj( { save_spam } )
			}
		/>
	</>;
}

export default SaveRecordRender;