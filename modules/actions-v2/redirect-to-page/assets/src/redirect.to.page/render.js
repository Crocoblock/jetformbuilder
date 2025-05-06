import {
	Flex,
} from '@wordpress/components';
import { WideLine } from 'jet-form-builder-components';
import RedirectTypeRow from './RedirectTypeRow';
import RedirectPageRow from './RedirectPageRow';
import RedirectCustomUrl from './RedirectCustomUrl';
import RedirectArgsRow from './RedirectArgsRow';
import RedirectHashRow from './RedirectHashRow';
import RedirectNewTabRow from './RedirectNewTabRow';
import { styled } from '@linaria/react';

const StyledFlex = styled(Flex)`
	&.buddypress-active {
		width: 100%;
	}
`;

function RedirectToPageRender( props ) {

	const {
		      settings,
		      onChangeSettingObj,
	      } = props;

	const isBuddypress = document.body.classList.contains( 'buddypress' );

	/* eslint-disable jsx-a11y/no-onchange */
	return <StyledFlex direction="column" className={ `${isBuddypress ? 'buddypress-active' : ''}` }>
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
		<WideLine/>
		<RedirectNewTabRow
			settings={ settings }
			onChangeSettingObj={ onChangeSettingObj }
		/>
	</StyledFlex>;
	/* eslint-enable jsx-a11y/no-onchange */
}

export default RedirectToPageRender;

