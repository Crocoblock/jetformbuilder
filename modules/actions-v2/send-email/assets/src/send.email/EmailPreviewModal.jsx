import {
	Button,
	DropdownMenu,
	MenuGroup,
	MenuItemsChoice,
	Modal,
	Notice,
	Spinner,
} from '@wordpress/components';
import { useMemo, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { desktop, mobile } from '@wordpress/icons';
import { styled } from '@linaria/react';
import useEmailPreview from './useEmailPreview';
import previewDocument from './previewDocument';

// Change only the email preview width, not the editor device state.
const PREVIEW_DEVICES = {
	Desktop: { label: __( 'Desktop', 'jet-form-builder' ), icon: desktop, width: '100%' },
	Mobile: { label: __( 'Mobile', 'jet-form-builder' ), icon: mobile, width: 479 },
};

const deviceChoices = Object.entries( PREVIEW_DEVICES ).map( ( [ value, device ] ) => ( {
	value,
	label: device.label,
	icon: device.icon,
} ) );

const PreviewModal = styled( Modal )`
	&& {
		height: 85vh;
		height: 85dvh;
		max-height: 85vh;
		max-height: 85dvh;
	}

	.components-modal__content {
		display: flex;
		flex-direction: column;
		min-height: 0;
		overflow: hidden;
	}

	.components-modal__content > div:not(.components-modal__header) {
		display: flex;
		flex-direction: column;
		flex: 1;
		min-height: 0;
	}
`;

const PreviewSurface = styled.div`
	flex: 1;
	min-height: 0;
	background: #f0f0f1;
	padding: 16px;
	overflow: auto;
`;

const PreviewFrame = styled.iframe`
	display: block;
	border: 0;
	background: #fff;
	height: 100%;
	width: 100%;
	margin: 0 auto;
	max-width: none;
`;

const PlainText = styled.pre`
	background: #fff;
	color: #1e1e1e;
	margin: 0 auto;
	padding: 16px;
	box-sizing: border-box;
	min-height: 100%;
	max-width: none;
	white-space: pre-wrap;
	overflow-wrap: anywhere;
`;

function EmailPreviewDeviceControl( { device, onChange } ) {
	return <DropdownMenu
		icon={ PREVIEW_DEVICES[ device ].icon }
		label={ __( 'View', 'jet-form-builder' ) }
		popoverProps={ { placement: 'bottom-start' } }
		toggleProps={ { size: 'compact', showTooltip: true } }
		menuProps={ { 'aria-label': __( 'View options', 'jet-form-builder' ) } }
	>
		{ ( { onClose } ) => <MenuGroup>
			<MenuItemsChoice
				choices={ deviceChoices }
				value={ device }
				onSelect={ value => {
					onChange( value );
					onClose();
				} }
			/>
		</MenuGroup> }
	</DropdownMenu>;
}

function PreviewBody( { preview, width } ) {
	const isHtml = 'text/html' === preview.content_type;
	const srcDoc = useMemo(
		() => isHtml ? previewDocument( preview.content ) : '',
		[ isHtml, preview.content ],
	);

	return <PreviewSurface>
		{ isHtml ? <PreviewFrame
			title={ __( 'Email content preview', 'jet-form-builder' ) }
			sandbox=""
			referrerPolicy="no-referrer"
			srcDoc={ srcDoc }
			style={ { width } }
		/> : <PlainText style={ { width } }>{ preview.content }</PlainText> }
	</PreviewSurface>;
}

function EmailPreviewModal( { settings, onRequestClose } ) {
	const [ device, setDevice ] = useState( 'Desktop' );
	const { preview, error, retry } = useEmailPreview( settings );

	return <PreviewModal
		title={ __( 'Email preview', 'jet-form-builder' ) }
		size="large"
		onRequestClose={ onRequestClose }
		shouldCloseOnClickOutside={ false }
		headerActions={ <EmailPreviewDeviceControl device={ device } onChange={ setDevice }/> }
	>
		{ error && <Notice status="error" isDismissible={ false }>
			{ error } <Button variant="link" onClick={ retry }>
				{ __( 'Retry', 'jet-form-builder' ) }
			</Button>
		</Notice> }
		{ !preview && !error && <div role="status">
			<Spinner/> { __( 'Loading preview…', 'jet-form-builder' ) }
		</div> }
		{ preview && <PreviewBody preview={ preview } width={ PREVIEW_DEVICES[ device ].width }/> }
	</PreviewModal>;
}

export default EmailPreviewModal;
