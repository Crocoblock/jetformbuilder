const {
	      ToggleControl,
		  Notice
      } = wp.components;

const { __ } = wp.i18n;

function SaveRecordRender( {
	settings,
	label,
	onChangeSettingObj,
} ) {

	const jetFormEditorData = window.JetFormEditorData;

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
		{ ! jetFormEditorData?.user_journey?.enabled && (
			<Notice
				status="info"
				isDismissible={ false }
			>
				<div>
					<p>
						{ __( 'You can track User Journey and save it with form submission. To enable this feature, please activate it in global settings.', 'jet-form-builder' ) }
					</p>
					<a
						href={ jetFormEditorData.global_settings_url + '#user-journey-tab' }
						target="_blank"
						rel="noopener noreferrer"
					>
						{ __( 'Go to Settings', 'jet-form-builder' ) }
					</a>
				</div>
			</Notice>
		) }
		{jetFormEditorData?.user_journey?.enabled && (
			<ToggleControl
				label={ label( 'save_user_journey' ) }
				checked={ settings.save_user_journey }
				onChange={
					save_user_journey => onChangeSettingObj( { save_user_journey } )
				}
			/>
		)}
	</>;
}

export default SaveRecordRender;