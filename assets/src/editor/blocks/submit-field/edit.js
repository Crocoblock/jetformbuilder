import preview from './preview';

const {
	      GeneralFields,
	      AdvancedFields,
	      ActionButtonBlockEditSlotFills,
	      ActionButtonPlaceholder,
      } = JetFBComponents;


const {
	      __,
      } = wp.i18n;

const {
	      InspectorControls,
	      useBlockProps,
      } = wp.blockEditor;

const { useState, useEffect } = wp.element;

const defaultClasses        = [ 'jet-form-builder__action-button' ];
const defaultWrapperClasses = [
	'jet-form-builder__action-button-wrapper',
];

const ButtonEdit = ( props ) => {

	const {
		      attributes,
		      setAttributes,
	      } = props;

	const classesButton = () => {
		if ( !attributes.action_type ) {
			return defaultClasses;
		}
		const action = JetFormActionButton.actions.find(
			elem => attributes.action_type === elem.value );

		if ( !action ) {
			return defaultClasses;
		}
		if ( !attributes.label ) {
			setAttributes( { label: action.preset_label } );
		}

		return [ ...defaultClasses, action.button_class ];
	};

	const classesWrapper = () => {
		if ( !attributes.action_type ) {
			return [ ...defaultWrapperClasses ];
		}
		const action = JetFormActionButton.actions.find(
			elem => attributes.action_type === elem.value );

		if ( !action ) {
			return [ ...defaultWrapperClasses ];
		}

		return [ ...defaultWrapperClasses, action.wrapper_class ];
	};

	const [ buttonClasses, setButtonClasses ]   = useState( classesButton );
	const [ wrapperClasses, setWrapperClasses ] = useState( classesWrapper );

	useEffect( () => {
		setButtonClasses( classesButton() );
		setWrapperClasses( classesWrapper() );
	}, [ attributes.action_type ] );

	const setActionAttributes = attrs => {
		const buttons = JSON.parse( JSON.stringify( attributes.buttons ) );
		const current = buttons[ attributes.action_type ] ?? {};

		buttons[ attributes.action_type ] = {
			...current,
			...attrs,
		};

		setAttributes( { buttons } );
	};

	const fillProps = {
		attributes,
		setAttributes,
		setActionAttributes,
		actionAttributes: attributes.buttons[ attributes.action_type ] ?? {},
		buttonClasses,
		wrapperClasses,
	};

	return <ActionButtonBlockEditSlotFills.Slot fillProps={ fillProps }>
		{ ( fills ) => {
			return (
				Boolean( fills?.length ) ? fills : <ActionButtonPlaceholder
					{ ...fillProps }
				/>
			);
		} }
	</ActionButtonBlockEditSlotFills.Slot>;
};

export default function ActionButtonEdit( props ) {

	const {
		      attributes,
		      setAttributes,
	      } = props;

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
		<InspectorControls>
			<GeneralFields { ...props } />
			<AdvancedFields { ...props } />
		</InspectorControls>
		<ButtonEdit
			attributes={ attributes }
			setAttributes={ setAttributes }
		/>
	</>;
}