import TurnstileOptions from './TurnstileOptions';
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

function TurnstileBlockEdit( { isSelected, attributes } ) {
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
				  <TurnstileOptions/>
			  </div>
			  : preview }
		</div>
		<InspectorControls>
			<div style={ { padding: '20px' } }>
				<TurnstileOptions/>
			</div>
		</InspectorControls>
	</>;
}

export default TurnstileBlockEdit;