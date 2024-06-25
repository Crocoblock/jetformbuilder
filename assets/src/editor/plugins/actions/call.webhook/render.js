import WebhookURLRow from '@/plugins/actions/call.webhook/WebhookURLRow';

function CallWebHookRender( { settings, onChangeSettingObj } ) {
	return <WebhookURLRow
		settings={ settings }
		onChangeSettingObj={ onChangeSettingObj }
	/>;
}

export default CallWebHookRender;
