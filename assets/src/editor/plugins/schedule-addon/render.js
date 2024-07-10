
const { __ } = wp.i18n;

function PluginScheduleForm() {
	const { scheduleForm } = JetFormEditorData.utmLinks;

	return <p>
		{ __( 'You’re using free version of JetFormBuilder.', 'jet-form-builder' ) + "\n" }
		<a href={ scheduleForm } target='_blank' rel="noreferrer">{ __( 'Upgrade', 'jet-form-builder' ) }</a>
		{ ' ' + __( 'to unlock this feature.', 'jet-form-builder' ) }
	</p>;
}


export default PluginScheduleForm;
