import Repeater from "../../components/repeater";
import ActionModal from "../../components/action-modal";

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
			isUpdate: false
		};
		this.onClickManageButton = this.onClickManageButton.bind( this );
		this.onClickUpdate = this.onClickUpdate.bind( this );
		this.onClickCancel = this.onClickCancel.bind( this );
		this.closeModal = this.closeModal.bind( this );
		this.onUpdateOptions = this.onUpdateOptions.bind( this );
	}

	onClickManageButton() {
		this.setState( {
			showManualModal: ! this.state.showManualModal,
		} );
	}

	closeModal() {
		this.setState( { showManualModal: ! this.state.showManualModal } );
		this.setState( { isUpdate: false } );
	}

	onUpdateOptions( items ) {
		/* Remove empty options */
		const valid_options = items.filter( option => {
			return ( Boolean( option.value ) || Boolean( option.calculate ) );
		} );

		this.props.parentProps.setAttributes( {
			field_options: valid_options
		} );
	}


	getOptions() {
		return [...this.props.attributes.field_options];
	}

	onClickUpdate () {
		this.setState( {
			isUpdate: 'update',
		} )
	};

	onClickCancel () {
		this.setState( {
			isUpdate: 'cancel',
		} )
	};

	render() {
		const addNewOption = {
			label: '',
			value: '',
			calculate: ''
		};

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
				{ this.state.showManualModal && <ActionModal
					title={ 'Edit Manual Options' }
					onRequestClose={ this.closeModal }
					onCancelClick={ this.onClickCancel }
					onUpdateClick={ this.onClickUpdate }
				>

					<Repeater
						items={ this.getOptions() }
						addNewButtonLabel={ __( 'Add New Option' ) }
						newItem={ addNewOption }
						onSaveItems={ this.onUpdateOptions }
						isUpdateModal={ this.state.isUpdate }
						closeModal={ this.closeModal }
						ItemTemplate={ ( { currentItem, index, changeCurrentItem } ) => {

							return <div
								className="jet-form-builder__flex-controls"
								key={ 'jet-form-builder-repeater-item-' + index }
							>
								<div className='repeater-item-column'>
									<TextControl
										key='manual_label'
										label={ __( 'Label' ) }
										value={ currentItem.label }
										onChange={ newValue => {
											changeCurrentItem( {
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
											changeCurrentItem( {
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
											changeCurrentItem( {
												value: newValue,
												name: 'calculate',
												id: index
											} );
										} }
									/>
								</div>
							</div>;
						} }
					/>
				</ActionModal> }
			</div>
		);
	}
}

export default FromManualFields;