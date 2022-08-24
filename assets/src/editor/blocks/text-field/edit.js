import {
	fieldTypesList,
	maskPlaceholdersList,
	maskTypesList,
	maskVisibilitiesList,
} from './options';

const {
	      ToolBarFields,
	      GeneralFields,
	      AdvancedFields,
	      FieldWrapper,
	      FieldSettingsWrapper,
	      ValidationToggleGroup,
	      ValidationBlockMessage,
	      BaseHelp,
	      BlockValueItemContext,
	      ActionModal,
	      ActionModalContext,
	      Repeater,
	      RepeaterAddNew,
      } = JetFBComponents;
const {
	      Tools,
      } = JetFBActions;
const {
	      useIsAdvancedValidation,
	      useBlockAttributes,
	      useUniqKey,
      } = JetFBHooks;
const {
	      __,
	      sprintf,
      } = wp.i18n;
const {
	      useState,
	      useContext,
	      useEffect,
      } = wp.element;
const {
	      InspectorControls,
	      useBlockProps,
      } = wp.blockEditor;

const {
	      TextControl,
	      SelectControl,
	      ToggleControl,
	      PanelBody,
	      Button,
	      ButtonGroup,
	      Flex,
	      __experimentalNumberControl,
      } = wp.components;

let { NumberControl } = wp.components;

if ( typeof NumberControl === 'undefined' ) {
	NumberControl = __experimentalNumberControl;
}

function DynamicItemBody() {
	const {
		      current: currentValue,
		      update,
	      } = useContext( BlockValueItemContext );
	const {
		      actionClick,
		      onRequestClose,
	      } = useContext( ActionModalContext );

	const [ current, setCurrent ] = useState( () => currentValue );

	const updateConditions = conditions => {
		setCurrent( {
			...current,
			conditions: 'function' === typeof conditions
			            ? conditions( current.conditions ?? [] )
			            : conditions,
		} );
	};

	useEffect( () => {
		// update field attributes
		if ( actionClick ) {
			update( current );
		}

		if ( null !== actionClick ) {
			onRequestClose();
		}
	}, [ actionClick ] );

	return <>
		<Repeater
			onSetState={ updateConditions }
			items={ current.conditions ?? [] }
		>
			Test
		</Repeater>
		<RepeaterAddNew
			onSetState={ updateConditions }
		>
			{ __( 'Add New Condition', 'jet-form-builder' ) }
		</RepeaterAddNew>
	</>;
}

function DynamicValueItem( { current, update } ) {
	const updateCurrent = settings => {
		update( value => {
			const groups = JSON.parse( JSON.stringify( value.groups ) );

			for ( const groupIndex in groups ) {
				if (
					!groups.hasOwnProperty( groupIndex ) ||
					current.id !== groups[ groupIndex ].id
				) {
					continue;
				}
				groups[ groupIndex ] = {
					...groups[ groupIndex ],
					...settings,
				};
			}
			return { groups };
		} );
	};

	const deleteCurrent = () => {
		update( value => {
			const groups = JSON.parse( JSON.stringify( value.groups ) );

			return { groups: groups.filter( ( { id } ) => id !== current.id ) };
		} );
	};

	const [ showModal, setShowModal ] = useState( false );

	return <BlockValueItemContext.Provider value={ {
		update: updateCurrent,
		current,
	} }>
		<div className={ 'jet-form-action-details' }>
			<div data-title={ 'ID:' }>{ current.id }</div>
			<ButtonGroup
				style={ {
					alignSelf: 'flex-end',
				} }
			>
				<Button
					isSmall
					isSecondary
					className={ 'jet-fb-is-thick' }
					icon={ showModal ? 'no-alt' : 'edit' }
					onClick={ () => setShowModal( prev => !prev ) }
				/>
				<Button
					isSmall
					isDestructive
					className={ 'jet-fb-is-thick' }
					icon={ 'trash' }
					onClick={ deleteCurrent }
				/>
			</ButtonGroup>
		</div>
		{ showModal && <ActionModal
			classNames={ [ 'width-60' ] }
			onRequestClose={ () => setShowModal( false ) }
			title={ __( 'Edit Dynamic Value', 'jet-form-builder' ) }
		>
			<DynamicItemBody/>
		</ActionModal> }
	</BlockValueItemContext.Provider>;

}

function DynamicValues() {
	const [ attributes, setAttributes ] = useBlockAttributes();

	const uniqKey = useUniqKey();
	const value   = attributes.value ?? {};
	const groups  = value.groups ?? [];

	const updateValue = settings => {
		setAttributes( {
			...attributes,
			value: {
				...value,
				...(
					'function' === typeof settings
					? settings( value )
					: settings
				),
			},
		} );
	};

	return <PanelBody
		title={ __( 'Dynamic Value', 'jet-form-builder' ) }
	>
		<BaseHelp>
			{ __(
				`This is a moved functionality from 
					the conditional block with the Set Value function`,
				'jet-form-builder',
			) }
		</BaseHelp>
		{ Boolean( groups.length ) ? <Flex
			direction={ 'column' }
			align={ 'center' }
			style={ {
				marginBottom: '1em',
			} }
		>
			{ groups.map( current => (
				<DynamicValueItem
					key={ uniqKey( current.id ) }
					current={ current }
					update={ updateValue }
				/>
			) ) }
		</Flex> : null }
		<Button
			isSecondary
			onClick={ () => {
				updateValue( {
					groups: [ ...groups, { id: Tools.getRandomID() } ],
				} );
			} }
		>
			{ __( 'Add Value', 'jet-form-builder' ) }
		</Button>
	</PanelBody>;
}

export default function TextEdit( props ) {
	const {
		      attributes,
		      setAttributes,
		      isSelected,
		      editProps: { uniqKey, attrHelp },
	      } = props;

	const changeNumberValue = ( key, newValue ) => {
		const value = (
			              newValue && newValue > 0
		              ) ? parseInt( newValue ) : null;

		props.setAttributes( { [ key ]: value } );
	};

	const blockProps           = useBlockProps();
	const isAdvancedValidation = useIsAdvancedValidation();

	return [
		<ToolBarFields
			key={ uniqKey( 'ToolBarFields' ) }
			{ ...props }
		/>,
		isSelected && <InspectorControls
			key={ uniqKey( 'InspectorControls' ) }
		>
			<GeneralFields
				key={ uniqKey( 'GeneralFields' ) }
				{ ...props }
			/>
			<FieldSettingsWrapper { ...props }>
				<SelectControl
					key="field_type"
					label={ __( 'Field Type' ) }
					labelPosition="top"
					value={ attributes.field_type }
					onChange={ newValue => {
						setAttributes( { field_type: newValue } );
					} }
					options={ fieldTypesList }
				/>
				<NumberControl
					label={ __( 'Min length (symbols)' ) }
					labelPosition="top"
					key="minlength"
					min={ 1 }
					value={ attributes.minlength }
					onChange={ ( newValue ) => changeNumberValue( 'minlength',
						newValue ) }
				/>
				<NumberControl
					label={ __( 'Max length (symbols)' ) }
					labelPosition="top"
					key="maxlength"
					min={ 1 }
					value={ attributes.maxlength }
					onChange={ ( newValue ) => changeNumberValue( 'maxlength',
						newValue ) }
				/>
				<ToggleControl
					key={ 'enable_input_mask' }
					label={ __( 'Set Input Mask' ) }
					checked={ attributes.enable_input_mask }
					help={ __(
						'Check this to setup specific input format for the current field' ) }
					onChange={ newVal => {
						setAttributes( { enable_input_mask: newVal } );
					} }
				/>
				{ attributes.enable_input_mask && <React.Fragment>
					<SelectControl
						key="mask_type"
						label={ __( 'Mask type' ) }
						labelPosition="top"
						value={ attributes.mask_type }
						onChange={ ( newValue ) => {
							setAttributes( { mask_type: newValue } );
						} }
						options={ maskTypesList }
					/>
					<TextControl
						key="input_mask"
						label={ __( 'Input mask' ) }
						value={ attributes.input_mask }
						onChange={ ( newValue ) => {
							setAttributes( { input_mask: newValue } );
						} }
					/>
					{ (
						!attributes.mask_type
					) && <div className={ 'help-input' }>
						{ attrHelp( 'input_mask_default' ) }
					</div> }

					{ 'datetime' === attributes.mask_type &&
					<div className={ 'help-input' }>
						{ __( 'Examples:', 'jet-form-builder' ) } dd/mm/yyyy,
						mm/dd/yyyy<br/>
						{ __( 'More info - ', 'jet-form-builder' ) }
						<a href={ attrHelp( 'input_mask_datetime_link' ) }
						   target="_blank">{ __( 'here',
							'jet-form-builder' ) }</a>
					</div> }

					<SelectControl
						key="mask_visibility"
						label={ __( 'Mask visibility' ) }
						labelPosition="top"
						value={ attributes.mask_visibility }
						onChange={ ( newValue ) => {
							setAttributes( { mask_visibility: newValue } );
						} }
						options={ maskVisibilitiesList }
					/>
					<SelectControl
						key="mask_placeholder"
						label={ __( 'Mask placeholder' ) }
						labelPosition="top"
						value={ attributes.mask_placeholder }
						onChange={ ( newValue ) => {
							setAttributes( { mask_placeholder: newValue } );
						} }
						options={ maskPlaceholdersList }
					/>
				</React.Fragment> }
			</FieldSettingsWrapper>
			<PanelBody
				title={ __( 'Validation', 'jet-form-builder' ) }
			>
				<ValidationToggleGroup/>
				{ isAdvancedValidation && <>
					{ 'email' === attributes.field_type && (
						<ValidationBlockMessage name="email"/>
					) }
					{ 'url' === attributes.field_type && (
						<ValidationBlockMessage name="url"/>
					) }
					{ attributes.enable_input_mask && (
						<ValidationBlockMessage name="inputmask"/>
					) }
					<ValidationBlockMessage name="empty"/>
					<ValidationBlockMessage name="char_max"/>
					<ValidationBlockMessage name="char_min"/>
				</> }
			</PanelBody>
			<DynamicValues/>
			<AdvancedFields
				key={ uniqKey( 'AdvancedFields' ) }
				{ ...props }
			/>
		</InspectorControls>,
		<div key={ uniqKey( 'viewBlock' ) } { ...blockProps }>
			<FieldWrapper
				key={ uniqKey( 'FieldWrapper' ) }
				{ ...props }
			>
				<TextControl
					placeholder={ attributes.placeholder }
					key={ uniqKey( 'place_holder_block' ) }
					onChange={ () => {
					} }
				/>
			</FieldWrapper>
		</div>,
	];
}
;
