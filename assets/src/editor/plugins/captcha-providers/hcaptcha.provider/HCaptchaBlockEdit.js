const {
	      __,
      } = wp.i18n;
const {
	      ToggleControl,
	      BaseHelp,
      } = JetFBComponents;
let {
	    TextControl,
	    NumberControl,
	    __experimentalNumberControl,
    }   = wp.components;

const {
	      InspectorControls,
	      useBlockProps,
      } = wp.blockEditor;

NumberControl = NumberControl || __experimentalNumberControl;

const { globalTab } = JetFBActions;

const currentTab = globalTab( {
	slug: 'captcha-tab',
	element: 'hcaptcha',
	empty: {},
} );

function HCaptchaBlockEdit( { attributes, setAttributes } ) {
	const blockProps = useBlockProps();

	return <>
		<div { ...blockProps }>
			Hello to hCaptcha!
		</div>
		<InspectorControls>
			Hello to hCaptcha options!
		</InspectorControls>
	</>;
}

export default HCaptchaBlockEdit;