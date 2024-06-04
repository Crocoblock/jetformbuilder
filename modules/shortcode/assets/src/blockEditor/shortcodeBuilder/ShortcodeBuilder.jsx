import { Button, Flex } from '@wordpress/components';
import { copySmall } from '@wordpress/icons';
import { __ } from '@wordpress/i18n';
import { useDispatch, useSelect } from '@wordpress/data';
import { useCopyToClipboard } from '@wordpress/compose';

const {
	      BuilderHelpSlotFill,
      } = JetFBComponents;

const {
	      usePluginUseSettings,
      } = JetFBHooks;

function ShortcodeBuilder( { name } ) {
	const [ settings, updateSettings ] = usePluginUseSettings();

	const isActive = name === settings.builder;
	const formId   = useSelect( select => (
		select( 'core/editor' ).getEditedPostAttribute( 'id' )
	), [] );

	const shortcode = `[jet_fb_form form_id="${ formId }" submit_type="ajax"]`;

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
			<p>
				<b>
					{ __(
						'Copy the shortcode and paste it where you need on the selected page:',
						'jet-form-builder',
					) }
				</b>
			</p>
			<Flex as="p" justify="flex-start">
				<code>{ shortcode }</code>
				<Button ref={ copyButtonRef } variant="tertiary">
					{ __( 'Copy', 'jet-form-builder' ) }
				</Button>
			</Flex>
		</BuilderHelpSlotFill.Fill> }
	</>;
}

export default ShortcodeBuilder;