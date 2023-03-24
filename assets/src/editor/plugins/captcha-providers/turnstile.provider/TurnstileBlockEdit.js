import TurnstileOptions from './TurnstileOptions';

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
	element: 'turnstile',
	empty: {},
} );

function TurnstileBlockEdit( { isSelected } ) {
	const blockProps = useBlockProps();

	return <>
		<div { ...blockProps }>
			{ isSelected
			  ? <TurnstileOptions/>
			  : 'Hello to turnstile!' }
		</div>
		<InspectorControls>
			<div style={ { padding: '20px' } }>
				<TurnstileOptions/>
			</div>
		</InspectorControls>
	</>;
}

export default TurnstileBlockEdit;