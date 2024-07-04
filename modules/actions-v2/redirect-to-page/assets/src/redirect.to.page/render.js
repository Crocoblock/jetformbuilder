import {
	Flex,
} from '@wordpress/components';
import { WideLine } from 'jet-form-builder-components';
import RedirectTypeRow from './RedirectTypeRow';
import RedirectPageRow from './RedirectPageRow';
import RedirectCustomUrl from './RedirectCustomUrl';
import RedirectArgsRow from './RedirectArgsRow';
import RedirectHashRow from './RedirectHashRow';

function RedirectToPageRender( props ) {

	const {
		      settings,
		      onChangeSettingObj,
	      } = props;

	/* eslint-disable jsx-a11y/no-onchange */
	return <Flex direction="column">
		<RedirectTypeRow
			settings={ settings }
			onChangeSettingObj={ onChangeSettingObj }
		/>
		<WideLine/>
		{ 'static_page' === settings.redirect_type && <>
			<RedirectPageRow
				settings={ settings }
				onChangeSettingObj={ onChangeSettingObj }
			/>
			<WideLine/>
		</> }
		{ 'custom_url' === settings.redirect_type && <>
			<RedirectCustomUrl
				settings={ settings }
				onChangeSettingObj={ onChangeSettingObj }
			/>
			<WideLine/>
		</> }
		<RedirectArgsRow
			settings={ settings }
			onChangeSettingObj={ onChangeSettingObj }
		/>
		<WideLine/>
		<RedirectHashRow
			settings={ settings }
			onChangeSettingObj={ onChangeSettingObj }
		/>
	</Flex>;
	/* eslint-enable jsx-a11y/no-onchange */
}

export default RedirectToPageRender;

