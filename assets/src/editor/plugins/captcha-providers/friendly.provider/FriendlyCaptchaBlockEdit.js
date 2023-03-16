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

function FriendlyCaptchaBlockEdit( { attributes, setAttributes } ) {
	const blockProps = useBlockProps();

	return <>
		<div { ...blockProps }>
			Hello to Friendly Captcha!
		</div>
		<InspectorControls>
			Hello to Friendly Captcha options!
		</InspectorControls>
	</>;
}

export default FriendlyCaptchaBlockEdit;