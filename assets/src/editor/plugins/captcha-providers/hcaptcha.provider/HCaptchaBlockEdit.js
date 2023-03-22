import HCaptchaOptions from './HCaptchaOptions';

const {
	      __,
      } = wp.i18n;
const {
	      ToggleControl,
	      BaseHelp,
      } = JetFBComponents;
const {
	      useCaptchaProvider,
      } = JetFBHooks;
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

function HCaptchaBlockEdit( { isSelected } ) {
	const blockProps = useBlockProps();

	return <>
		<div { ...blockProps }>
			{ isSelected
			  ? <HCaptchaOptions/>
			  : 'Hello to hCaptcha!' }
		</div>
		<InspectorControls>
			<div style={ { padding: '20px' } }>
				<HCaptchaOptions/>
			</div>
		</InspectorControls>
	</>;
}

export default HCaptchaBlockEdit;