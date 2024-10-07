import WebhookURLRow from './WebhookURLRow';
import WebhookTimeoutRow from './WebhookTimeoutRow';

import {Flex} from "@wordpress/components";

function CallWebHookRender( { settings, onChangeSettingObj } ) {
	return <Flex direction="column">
		<WebhookURLRow
			settings={ settings }
			onChangeSettingObj={ onChangeSettingObj }
		/>
		<WebhookTimeoutRow
			settings={ settings }
			onChangeSettingObj={ onChangeSettingObj }
		/>
	</Flex>;
}

export default CallWebHookRender;
