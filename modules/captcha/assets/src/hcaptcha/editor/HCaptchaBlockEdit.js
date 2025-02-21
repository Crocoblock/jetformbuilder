import HCaptchaOptions from './HCaptchaOptions';
import preview from './preview';
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';

function HCaptchaBlockEdit( { isSelected, attributes } ) {
	const blockProps = useBlockProps();

	if ( attributes.isPreview ) {
		return <div style={ {
			width: '100%',
			display: 'flex',
			justifyContent: 'center',
		} }>
			{ preview }
		</div>;
	}

	return <>
		<div { ...blockProps }>
			{ isSelected
			  ? <div>
				  <HCaptchaOptions/>
			  </div>
			  : preview }
		</div>
		<InspectorControls>
			<div style={ { padding: '20px' } }>
				<HCaptchaOptions/>
			</div>
		</InspectorControls>
	</>;
}

export default HCaptchaBlockEdit;