import ConditionsModal from './conditions.modal';
import ConditionsList from './conditions.list';
import ConditionalModalContext from './conditional.model.context';

const {
	      getCurrentInnerBlocks,
      } = JetFBActions;

const {
	      __,
      } = wp.i18n;
const {
	      useSelect,
      } = wp.data;

const {
	      BlockControls,
	      InnerBlocks,
	      useBlockProps,
	      InspectorControls,
      } = wp.blockEditor;

const {
	      Button,
	      ToolbarGroup,
	      TextControl,
	      PanelBody,
      } = wp.components;

const {
	      useState,
	      useEffect,
      } = wp.element;

function hasFormBreakField( blocks ) {
	return blocks.some( ( { name } ) => name.includes( 'form-break-field' ) );
}

export default function ConditionalBlockEdit( props ) {

	const blockProps = useBlockProps();

	const {
		      setAttributes,
		      attributes,
		      clientId,
		      editProps: { uniqKey },
	      } = props;

	useEffect( () => {
		if ( !attributes.name ) {
			setAttributes( { name: clientId } );
		}
	}, [] );

	const blocks     = getCurrentInnerBlocks();
	const blockNames = blocks.reduce(
		( prev, { name } ) => prev + name, '',
	);

	const [ showModal, setShowModal ]         = useState( false );
	const [ showMultistep, setShowMultistep ] = useState(
		() => hasFormBreakField( blocks ),
	);

	useEffect( () => {
		setShowMultistep( hasFormBreakField( blocks ) );
	}, [ blockNames ] );

	const functionDisplay = useSelect( select => (
		select( 'jet-forms/block-conditions' ).getFunctionDisplay(
			attributes.func_type || 'show',
		)
	), [ attributes.func_type ] );

	const conditionsIcon = attributes?.conditions?.length ? <span
		className="dashicon dashicons dashicons-randomize"
		data-count={ attributes.conditions.reduce(
			( prev, current ) => current?.or_operator ? prev : prev + 1,
			0,
		) }
	/> : <span className="dashicon dashicons dashicons-randomize"/>;

	return [
		<InspectorControls key={ uniqKey( 'InspectorControls' ) }>
			<PanelBody
				title={ __( 'Conditions', 'jet-form-builder' ) }
				initialOpen
			>
				<p><b>{ functionDisplay }</b></p>
				<ConditionalModalContext.Provider value={ {
					showModal, setShowModal,
				} }>
					<ConditionsList attributes={ attributes }/>
				</ConditionalModalContext.Provider>
			</PanelBody>
			{ showMultistep && <PanelBody
				title={ __( 'Multistep', 'jet-form-builder' ) }
			>
				<TextControl
					label={ __( 'Last Page Name', 'jet-form-builder' ) }
					key={ uniqKey( 'last_page_name' ) }
					value={ attributes.last_page_name }
					help={ __(
						'The value of this field will be set as the name of the last page with the "Progress Bar" block.',
						'jet-form-builder' ) }
					onChange={ last_page_name => setAttributes(
						{ last_page_name },
					) }
				/>
			</PanelBody> }
		</InspectorControls>,
		<BlockControls key={ uniqKey( 'BlockControls' ) }>
			<ToolbarGroup key={ uniqKey( 'ToolbarGroup' ) }>
				<Button
					className={ 'jet-fb-button' }
					key={ uniqKey( 'randomize' ) }
					isTertiary
					isSmall
					icon={ conditionsIcon }
					onClick={ () => setShowModal( true ) }
				/>
			</ToolbarGroup>
		</BlockControls>,
		<div { ...blockProps } key={ uniqKey( 'viewBlock' ) }>
			<div className="jet-form-builder__conditional">
				<InnerBlocks
					key={ uniqKey( 'conditional-fields' ) }
				/>
			</div>
		</div>,
		showModal && <ConditionsModal
			key={ uniqKey( 'ConditionsModal' ) }
			setShowModal={ setShowModal }
		/>,
	];
}