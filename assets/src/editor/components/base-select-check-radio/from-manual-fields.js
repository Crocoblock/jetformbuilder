const {
	RepeaterWithState,
	ActionModal,
} = JFBComponents;

const {
	Button,
	TextControl,
} = wp.components;

const { __ } = wp.i18n;
const { useState } = wp.element;

const addNewOption = {
	label: '',
	value: '',
	calculate: ''
};

function FromManualFields( props ) {

	const [ showManualModal, setShowModal ] = useState( false );

	const {
		setAttributes,
		attributes
	} = props;


	const toggleModal = () => {
		setShowModal( toggle => ! toggle );
	}

	const onUpdateOptions = items => {
		/* Remove empty options */
		const field_options = items.filter( option => {
			return ( Boolean( option.value ) || Boolean( option.calculate ) );
		} );

		setAttributes( { field_options } );
	}

	const itemHeading = ( { currentItem, index } ) => {
		const leftPart = [ `#${ index + 1 }` ];
		const rightPart = [];

		if ( currentItem.label ) {
			rightPart.push( `Label [${ currentItem.label }]` );
		}
		if ( currentItem.value ) {
			rightPart.push( `Value [${ currentItem.value }]` );
		}
		if ( currentItem.calculate ) {
			rightPart.push( `Calculate [${ currentItem.calculate }]` );
		}
		leftPart.push( rightPart.join( ' | ' ) )

		return leftPart.join( ' ' );
	};

	return <React.Fragment key='jet-form/manage-manual-items'>
		<Button
			isSecondary
			onClick={ toggleModal }
			icon={ 'admin-tools' }
			style={ {
				marginBottom: '15px'
			} }
		>
			{ __( 'Manage Items' ) }
		</Button>
		{ showManualModal && <ActionModal
			title={ 'Edit Manual Options' }
			onRequestClose={ toggleModal }
			classNames={ [ 'width-60' ] }
		>
			{ ( { actionClick, onRequestClose } ) => {
				return <RepeaterWithState
					items={ attributes.field_options }
					onSaveItems={ onUpdateOptions }
					newItem={ addNewOption }
					onUnMount={ onRequestClose }
					isSaveAction={ actionClick }
					addNewButtonLabel={ __( 'Add New Option' ) }
					ItemHeading={ itemHeading }
				>
					{ ( { currentItem, changeCurrentItem } ) => {
						return <>
							<TextControl
								key='manual_label'
								label={ __( 'Label' ) }
								value={ currentItem.label }
								onChange={ newValue => {
									changeCurrentItem( { label: newValue } );
								} }
							/>
							<TextControl
								key='manual_value'
								label={ __( 'Value' ) }
								value={ currentItem.value }
								onChange={ ( newValue ) => {
									changeCurrentItem( { value: newValue } );
								} }
							/>
							<TextControl
								key='manual_calculate'
								label={ __( 'Calculate' ) }
								value={ currentItem.calculate }
								onChange={ ( newValue ) => {
									changeCurrentItem( { calculate: newValue } );
								} }
							/>
						</>;
					} }
				</RepeaterWithState>
			} }
		</ActionModal> }
	</React.Fragment>;
}

export default FromManualFields;