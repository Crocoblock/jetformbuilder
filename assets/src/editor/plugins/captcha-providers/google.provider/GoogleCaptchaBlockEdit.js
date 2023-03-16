import GoogleCaptchaOptions from './GoogleCaptchaOptions';

const {
	      __,
      } = wp.i18n;

const {
	      InspectorControls,
	      useBlockProps,
      } = wp.blockEditor;

function GoogleCaptchaBlockEdit( { attributes, setAttributes, isSelected } ) {
	const blockProps = useBlockProps();

	return <>
		<div { ...blockProps }>
			Hello to Google!
			{ isSelected && <GoogleCaptchaOptions/> }
		</div>
		<InspectorControls>
			<div style={ { padding: '20px' } }>
				<GoogleCaptchaOptions/>
			</div>
		</InspectorControls>
	</>;
}

export default GoogleCaptchaBlockEdit;