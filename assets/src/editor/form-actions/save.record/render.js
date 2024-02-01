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
				val => onChangeSettingObj( { save_user_data: val } )
			}
		/>
		<ToggleControl
			label={ label( 'save_spam' ) }
			checked={ settings.save_spam }
			onChange={
				val => onChangeSettingObj( { save_spam: val } )
			}
		/>
	</>;
}

export default SaveRecordRender;