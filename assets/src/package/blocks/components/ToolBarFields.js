import useSuccessNotice from '../../hooks/useSuccessNotice';
import useBlockAttributes from '../hooks/useBlockAttributes';
import useUniqKey from '../hooks/useUniqKey';

const {
	      BlockControls,
      } = wp.blockEditor;

const {
	      useCopyToClipboard,
      } = wp.compose;

const {
	      TextControl,
	      ToolbarGroup,
	      ToolbarItem,
	      Button,
      } = wp.components;

function ToolBarFields( props ) {
	const { children = null } = props;

	const uniqKey = useUniqKey();

	const [
		      attributes,
		      setAttributes,
	      ] = useBlockAttributes();

	const displayNotice = useSuccessNotice(
		`Copied "${ attributes.name }" to clipboard.`,
	);

	const copyRef = useCopyToClipboard(
		attributes.name,
		() => displayNotice( true ),
	);

	return <BlockControls
		key={ uniqKey( 'ToolBarFields-BlockControls' ) }
	>
		<ToolbarGroup
			key={ uniqKey( 'ToolBarFields-ToolbarGroup' ) }
			className="jet-fb-block-toolbar"
		>
			<ToolbarItem as="div" className={ 'jet-input-with-button' }>
				<Button
					isSmall
					icon="admin-page"
					showTooltip
					shortcut="Copy name"
					ref={ copyRef }
				/>
				<TextControl
					value={ attributes.name }
					onChange={ name => setAttributes( { name } ) }
				/>
			</ToolbarItem>
			<ToolbarItem as="div">
				// controls
			</ToolbarItem>
			{ children }
		</ToolbarGroup>
	</BlockControls>;
}

export default ToolBarFields;