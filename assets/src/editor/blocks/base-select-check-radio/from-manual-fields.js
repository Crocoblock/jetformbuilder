const {
	Modal,
	Button,
	ButtonGroup,
	Path,
	SVG,
	TextControl,
	IconButton
} = wp.components;

const { __ } = wp.i18n;

const localizeData = window.JetFormSelectFieldData;

class FromManualFields extends wp.element.Component {

	constructor( props ) {
		super( props );
		this.state = {
			showManualModal: false,
			prevManual: null,
		};
		this.onClickManageButton = this.onClickManageButton.bind( this );
		this.closeModal = this.closeModal.bind( this );
		this.onChangeValue = this.onChangeValue.bind( this );
		this.addNewOption = this.addNewOption.bind( this );
		this.removeOption = this.removeOption.bind( this );
	}

	onClickManageButton() {
		this.setState( {
			showPresetModal: ! this.state.showPresetModal,
		} );
	}

	closeModal() {
		const manual_items = this.getOptions();

		/* Remove empty options */
		const valid_options = manual_items.filter( option => {
			return ( option.value || option.calculate );
		} );

		this.props.parentProps.setAttributes( {
			field_options: valid_options
		} );

		this.setState( { showPresetModal: ! this.state.showPresetModal } )
	}

	onChangeValue( { value, name, id } ) {

		const manual_items = Array.from( this.props.attributes.field_options );
		manual_items[ id ][ name ] = value;

		this.props.parentProps.setAttributes( {
			field_options: manual_items
		} );
	}

	getOptions() {
		return Array.from( this.props.attributes.field_options );
	}

	addNewOption() {
		const manual_items = this.getOptions();

		manual_items.push( {
			label: '',
			value: '',
			calculate: ''
		} );

		this.props.parentProps.setAttributes( {
			field_options: manual_items
		} );
	}

	removeOption( index ) {
		const manual_items = this.getOptions();
		manual_items.splice( index, 1 );

		this.props.parentProps.setAttributes( {
			field_options: manual_items
		} );
	}

	render() {
		const props = this.props;
		const attributes = props.attributes;

		return (
			<div
				key='jet-form/manage-manual-items'
			>
				<Button
					isSecondary
					onClick={ this.onClickManageButton }
					icon={ 'admin-tools' }
					style={ {
						marginBottom: '15px'
					} }
				>
					{ __( 'Manage Items' ) }
				</Button>
				{ this.state.showPresetModal && (
					<Modal
						onRequestClose={ this.closeModal }
						className={ 'jet-form-edit-modal' }
						/*style={ { width: '60vw' } }*/
						title={ 'Edit Manual Options' }
					>
						<div>
							<div className="jet-form-edit-modal__content">
								{ attributes.field_options.map( ( currentItem, index ) => {
									return <div
										className="jet-form-repeater-modal"
										key={ 'jet-form-repeater-item-' + index }
									>
										<div className='repeater-item-column'>
											<TextControl
												key='manual_label'
												label={ __( 'Label' ) }
												value={ currentItem.label }
												onChange={ ( newValue ) => {
													this.onChangeValue( {
														value: newValue,
														name: 'label',
														id: index
													} );
												} }
											/>
										</div>
										<div className='repeater-item-column'>
											<TextControl
												key='manual_value'
												label={ __( 'Value' ) }
												value={ currentItem.value }
												onChange={ ( newValue ) => {
													this.onChangeValue( {
														value: newValue,
														name: 'value',
														id: index
													} );
												} }
											/>
										</div>
										<div className='repeater-item-column'>
											<TextControl
												key='manual_calculate'
												label={ __( 'Calculate' ) }
												value={ currentItem.calculate }
												onChange={ ( newValue ) => {
													this.onChangeValue( {
														value: newValue,
														name: 'calculate',
														id: index
													} );
												} }
											/>
										</div>
										<div className='repeater-item-column'>
											<Button
												icon="dismiss"
												label="Remove"
												onClick={ () => this.removeOption( index ) }
											/>
										</div>
									</div>
								} ) }
								<Button
									className='button-add-option'
									isSecondary
									onClick={ this.addNewOption }
								>
									{ __( 'Add New Option' ) }
								</Button>

							</div>

						</div>
					</Modal>
				) }
			</div>
		);
	}
}

export default FromManualFields;