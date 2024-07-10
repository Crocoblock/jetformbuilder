import ConditionsModal from './conditions.modal';
import ConditionsList from './conditions.list';
import ConditionalModalContext from './conditional.model.context';
import preview from './preview';

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
	      Tip,
      } = wp.components;

const {
	      useState,
	      useEffect,
	      RawHTML,
      } = wp.element;

function hasFormBreakField( blocks ) {
	return blocks.some( ( { name } ) => name.includes( 'form-break-field' ) );
}

// eslint-disable-next-line max-lines-per-function
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
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ attributes.name, clientId ] );

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
		// eslint-disable-next-line react-hooks/exhaustive-deps
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

	// jet-form-builder--hidden

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
			<div className="jet-form-builder__conditional">
				<InnerBlocks
					key={ uniqKey( 'conditional-fields' ) }
				/>
			</div>
		</div>
		{ showModal && <ConditionsModal
			key={ uniqKey( 'ConditionsModal' ) }
			setShowModal={ setShowModal }
		/> }
		<BlockControls>
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
		</BlockControls>
		<InspectorControls>
			<PanelBody
				title={ __( 'Conditions', 'jet-form-builder' ) }
				initialOpen
			>
				<p className={ 'jet-fb flex ai-center gap-05em' }>
					<b>{ functionDisplay }</b>
					<Button
						isTertiary
						isSmall
						icon={ 'edit' }
						onClick={ () => setShowModal( true ) }
					/>
				</p>
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
					onChange={ val => setAttributes(
						{ last_page_name: val },
					) }
				/>
			</PanelBody> }
		</InspectorControls>
		<InspectorControls group={ 'advanced' }>
			<div style={ { marginBottom: '1.5em' } }>
				<Tip>
					<RawHTML>
						{ __(
							`Add the CSS class <code>jet-form-builder--hidden</code> to make this block hidden by default.`,
							'jet-form-builder',
						) }
					</RawHTML>
				</Tip>
			</div>
			<TextControl
				label={ __(
					'Additional CSS class(es)',
					'jet-form-builder',
				) }
				help={ __(
					'Separate multiple classes with spaces.',
					'jet-form-builder',
				) }
				value={ attributes.class_name }
				onChange={ val => setAttributes(
					{ class_name: val },
				) }
			/>
		</InspectorControls>
	</>;
}