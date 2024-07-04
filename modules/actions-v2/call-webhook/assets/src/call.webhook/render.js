import WebhookURLRow from './WebhookURLRow';

function CallWebHookRender( { settings, onChangeSettingObj } ) {
	return <WebhookURLRow
		settings={ settings }
		onChangeSettingObj={ onChangeSettingObj }
	/>;
}

export default CallWebHookRender;
