import { ATTRIBUTE_NAME } from './constants';

const {
	      __,
      } = wp.i18n;

const {
	      ToolbarButton,
      } = wp.components;

const {
	      SVG,
	      Path,
      } = wp.primitives;

const {
	      useBlockAttributes,
      } = JetFBHooks;

const SwitchPageOnChangeButton = function () {
	const [ attributes, setAttributes ] = useBlockAttributes();

	return <ToolbarButton
		icon={ <SVG xmlns="http://www.w3.org/2000/svg"
		            viewBox="0 0 24 24">
			<Path
				d="M6.6 6L5.4 7l4.5 5-4.5 5 1.1 1 5.5-6-5.4-6zm6 0l-1.1 1 4.5 5-4.5 5 1.1 1 5.5-6-5.5-6z"/>
		</SVG> }
		title={ attributes[ ATTRIBUTE_NAME ]
		        ? __(
				`Click on the button to disable the 
automatic transition to the next page when the values are changed`,
				'jet-form-builder',
			)
		        : __(
				`Click on the button to enable automatic 
transition to the next page when the values are changed`,
				'jet-form-builder',
			)
		}
		onClick={ () => setAttributes( {
			[ ATTRIBUTE_NAME ]: !attributes[ ATTRIBUTE_NAME ],
		} ) }
		isActive={ attributes[ ATTRIBUTE_NAME ] }
	/>;
};

export default SwitchPageOnChangeButton;