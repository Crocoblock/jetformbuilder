import FriendlyCaptchaOptions from './FriendlyCaptchaOptions';

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

function FriendlyCaptchaBlockEdit( { isSelected } ) {
	const blockProps = useBlockProps();

	return <>
		<div { ...blockProps }>
			{ isSelected
			  ? <FriendlyCaptchaOptions/>
			  : 'Hello to Friendly Captcha!' }
		</div>
		<InspectorControls>
			<div style={ { padding: '20px' } }>
				<FriendlyCaptchaOptions/>
			</div>
		</InspectorControls>
	</>;
}

export default FriendlyCaptchaBlockEdit;