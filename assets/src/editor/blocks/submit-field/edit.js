import './change.state.action';

const {
	GeneralFields,
	AdvancedFields,
	FieldSettingsWrapper,
} = JetFBComponents;

const { useActionButtonEdit, useUniqKey } = JetFBHooks;

const { __ } = wp.i18n;

const {
	InspectorControls,
	useBlockProps,
} = wp.blockEditor ? wp.blockEditor : wp.editor;

const {
	Button,
	SelectControl,
} = wp.components;

const {
	RichText,
} = wp.blockEditor;

const { useState, useEffect } = wp.element;

const defaultClasses = [ 'jet-form-builder__action-button' ];
const defaultWrapperClasses = [
	'jet-form-builder__action-button-wrapper',
];

const ButtonEdit = ( {
	attributes: rootAttributes,
	setAttributes: setRootAttributes,
} ) => {

	const uniqKey = useUniqKey();
	const CurrentButtonEdit = useActionButtonEdit( rootAttributes.action_type );

	const setAttributes = attrs => {
		const buttons = JSON.parse( JSON.stringify( rootAttributes.buttons ) );
		const current = buttons[ rootAttributes.action_type ] ?? {};

		buttons[ rootAttributes.action_type ] = {
			...current,
			...attrs,
		};

		setRootAttributes( { buttons } );
	};

	return CurrentButtonEdit && <CurrentButtonEdit
		key={ uniqKey( 'ButtonControls' ) }
		rootAttributes={ rootAttributes }
		setRootAttributes={ setRootAttributes }
		attributes={ rootAttributes.buttons[ rootAttributes.action_type ] ?? {} }
		setAttributes={ setAttributes }
	/>;
};

export default function ActionButtonEdit( props ) {

	const {
		attributes,
		setAttributes,
		isSelected,
		editProps: { uniqKey },
	} = props;

	const classesButton = () => {
		if ( ! attributes.action_type ) {
			return defaultClasses;
		}
		const action = JetFormActionButton.actions.find( elem => attributes.action_type === elem.value );

		if ( ! action ) {
			return defaultClasses;
		}
		if ( ! attributes.label ) {
			setAttributes( { label: action.preset_label } );
		}

		return [ ...defaultClasses, action.button_class ];
	};

	const classesWrapper = () => {
		if ( ! attributes.action_type ) {
			return [ ...defaultWrapperClasses ];
		}
		const action = JetFormActionButton.actions.find( elem => attributes.action_type === elem.value );

		if ( ! action ) {
			return [ ...defaultWrapperClasses ];
		}

		return [ ...defaultWrapperClasses, action.wrapper_class ];
	};

	const [ buttonClasses, setButtonClasses ] = useState( classesButton );
	const [ wrapperClasses, setWrapperClasses ] = useState( classesWrapper );

	useEffect( () => {
		setButtonClasses( classesButton() );
		setWrapperClasses( classesWrapper() );
	}, [ attributes.action_type ] );

	const blockProps = useBlockProps();

	return [
		isSelected && <InspectorControls
			key={ uniqKey( 'InspectorControls' ) }
		>
			<GeneralFields
				key={ uniqKey( 'GeneralFields' ) }
				autoCompleteLabel={ false }
				{ ...props }
			/>
			<FieldSettingsWrapper { ...props } key={ uniqKey( 'FieldSettingsWrapper' ) }>
				<SelectControl
					key={ uniqKey( 'action_type' ) }
					label={ __( 'Button Action Type', 'jet-form-builder' ) }
					value={ attributes.action_type }
					options={ JetFormActionButton.actions }
					onChange={ action_type => setAttributes( { action_type } ) }
				/>
				<ButtonEdit
					key={ uniqKey( 'ButtonControls' ) }
					attributes={ attributes }
					setAttributes={ setAttributes }
				/>
			</FieldSettingsWrapper>
			<AdvancedFields
				key={ uniqKey( 'AdvancedFields' ) }
				{ ...props }
			/>
		</InspectorControls>,
		<div
			key={ uniqKey( 'submit-wrap' ) }
			{ ...blockProps }
		>
			<div className={ wrapperClasses.join( ' ' ) }>
				<Button
					isPrimary
					className={ buttonClasses.join( ' ' ) }
					key={ uniqKey( 'place_holder_block' ) }
				>
					<RichText
						placeholder='Input Submit label...'
						allowedFormats={ [] }
						value={ attributes.label }
						onChange={ label => setAttributes( { label } ) }
					/>
				</Button>
			</div>
		</div>,
	];
}