import HCaptchaOptions from './HCaptchaOptions';
import preview from './preview';

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

const currentTab = JetFBActions.globalTab( {
	slug: 'captcha-tab',
	element: 'hcaptcha',
	empty: {},
} );

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
			  ? <div style={ { padding: '20px' } }>
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