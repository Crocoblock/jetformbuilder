import useBlockAttributes from '../hooks/useBlockAttributes';
import useIsHasAttribute from '../../hooks/useIsHasAttribute';

const {
	      __,
      } = wp.i18n;

const {
	    ToolbarButton,
    } = wp.components;

const {
	      BlockControls,
      } = wp.blockEditor;

const { SVG, Path } = wp.primitives;

function BlockRequired() {
	const [
		      attributes,
		      setAttributes,
	      ] = useBlockAttributes();

	if ( !useIsHasAttribute( 'required' ) ) {
		return null;
	}

	return <BlockControls group="block">
		<ToolbarButton
			icon={ <SVG xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none">
				<Path d="M12 4L12 20" stroke="currentcolor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
				<Path d="M17.3137 6.00024L6.00001 17.314" stroke="currentcolor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
				<Path d="M20 12L4 12" stroke="currentcolor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
				<Path d="M17.3137 17.3137L6.00001 6.00001" stroke="currentcolor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
			</SVG> }
			title={ attributes.required
			        ? __(
					'Click to make this field optional',
					'jet-form-builder',
				)
			        : __(
					'Click to make this field required',
					'jet-form-builder',
				)
			}
			onClick={ () => setAttributes( {
				required: !attributes.required,
			} ) }
			isActive={ attributes.required }
		/>
	</BlockControls>;
}

export default BlockRequired;