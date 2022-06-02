import ConditionsModal from './conditions.modal';

const {
	FieldSettingsWrapper,
} = JetFBComponents;


const { __ } = wp.i18n;

const {
	BlockControls,
	InnerBlocks,
	useBlockProps,
	InspectorControls,
} = wp.blockEditor ? wp.blockEditor : wp.editor;

const {
	Button,
	ToolbarGroup,
	TextControl,
} = wp.components;

const {
	useState,
	useEffect,
} = wp.element;

export default function ConditionalBlockEdit( props ) {

	const blockProps = useBlockProps();

	const {
		setAttributes,
		attributes,
		clientId,
		editProps: { uniqKey },
	} = props;

	useEffect( () => {
		if ( ! attributes.name ) {
			setAttributes( { name: clientId } );
		}
	}, [] );

	const [ showModal, setShowModal ] = useState( false );

	return [
		<InspectorControls key={ uniqKey( 'InspectorControls' ) }>
			<FieldSettingsWrapper
				key={ uniqKey( 'FieldSettingsWrapper' ) }
				{ ...props }
			>
				<TextControl
					label={ __( 'Last Page Name', 'jet-form-builder' ) }
					key={ uniqKey( 'last_page_name' ) }
					value={ attributes.last_page_name }
					help={ __( 'The value of this field will be set as the name of the last page with the "Progress Bar" block.', 'jet-form-builder' ) }
					onChange={ last_page_name => setAttributes( { last_page_name } ) }
				/>
			</FieldSettingsWrapper>
		</InspectorControls>,
		<BlockControls key={ uniqKey( 'BlockControls' ) }>
			<ToolbarGroup key={ uniqKey( 'ToolbarGroup' ) }>
				<Button
					key={ uniqKey( 'randomize' ) }
					isTertiary
					isSmall
					icon='randomize'
					onClick={ () => setShowModal( true ) }
				/>
			</ToolbarGroup>
		</BlockControls>,
		<div { ...blockProps } key={ uniqKey( 'viewBlock' ) }>
			<div className='jet-form-builder__conditional'>
				<InnerBlocks
					key={ uniqKey( 'conditional-fields' ) }
					renderAppender={ () => <InnerBlocks.ButtonBlockAppender key={ uniqKey( 'ButtonBlockAppender' ) }/> }
				/>
			</div>
		</div>,
		showModal && <ConditionsModal
			setShowModal={ setShowModal }
			attributes={ attributes }
			setAttributes={ setAttributes }
		/>,
	];
}