
const { __ } = wp.i18n;

function PluginLimitFormResponses() {
	const { limitResponses } = JetFormEditorData.utmLinks;

	return <p>
		{ __( 'You’re using free version of JetFormBuilder.' ) + "\n" }
		<a href={ limitResponses } target='_blank'>{ __( 'Upgrade', 'jet-form-builder' ) }</a>
		{ ' ' + __( 'to unlock this feature.', 'jet-form-builder' ) }
	</p>;
}


export default PluginLimitFormResponses;
