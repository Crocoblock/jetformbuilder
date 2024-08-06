import { Button, Flex } from '@wordpress/components';
import { copySmall } from '@wordpress/icons';
import { __ } from '@wordpress/i18n';
import { useDispatch } from '@wordpress/data';
import { useCopyToClipboard } from '@wordpress/compose';
import useShortcodeArgumentsString from './useShortcodeArgumentsString';
import { styled } from '@linaria/react';
import {
	usePluginUseSettings,
	BuilderHelpSlotFill,
	Description,
} from 'jet-form-builder-use-form';

const ShortCode = styled.code`
    overflow-x: auto;
    text-wrap: nowrap;
    padding: 3px 5px 2px;
    background: rgba(0, 0, 0, .07);
    font-size: 13px;
    font-family: Consolas, Monaco, monospace;
    flex: 1;
`;

function ShortcodeBuilder( { name } ) {
	const [ settings, updateSettings ] = usePluginUseSettings();

	const isActive      = name === settings.builder;
	const shortcodeArgs = useShortcodeArgumentsString();

	const shortcode = `[jet_fb_form ${ shortcodeArgs }]`;

	const { createNotice } = useDispatch( 'core/notices' );
	const copyButtonRef    = useCopyToClipboard(
		shortcode,
		() => {
			createNotice(
				'info',
				__( 'Copied shortcode to clipboard.', 'jet-form-builder' ),
				{
					isDismissible: true,
					type: 'snackbar',
				},
			);
		},
	);

	return <>
		<Button
			onClick={ () => updateSettings( { builder: name } ) }
			icon={ copySmall }
			variant={ isActive ? 'primary' : 'secondary' }
		>
			{ __(
				'Shortcode to use anywhere',
				'jet-form-builder',
			) }
		</Button>
		{ isActive && <BuilderHelpSlotFill.Fill>
			<Description>
				<b>
					{ __(
						'Copy the shortcode and paste it where you need on the selected page:',
						'jet-form-builder',
					) }
				</b>
			</Description>
			<Flex justify="flex-start">
				<ShortCode>{ shortcode }</ShortCode>
				<Button ref={ copyButtonRef } variant="secondary">
					{ __( 'Copy', 'jet-form-builder' ) }
				</Button>
			</Flex>
		</BuilderHelpSlotFill.Fill> }
	</>;
}

export default ShortcodeBuilder;