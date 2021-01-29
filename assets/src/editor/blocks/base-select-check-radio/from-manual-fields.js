import RepeaterWithState from "../../components/repeater-with-state";
import ActionModal from "../../components/actions/action-modal";

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
			isUpdate: null
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
		this.setState( { isUpdate: null } );
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

	onClickUpdate() {
		this.setState( { isUpdate: true } )
	};

	onClickCancel() {
		this.setState( { isUpdate: false } )
	};

	render() {
		const addNewOption = {
			label: '',
			value: '',
			calculate: ''
		};

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
					classNames={ ['width-60'] }
				>
					{ ( { actionClick, onRequestClose } ) => {
						return <RepeaterWithState
							items={ this.getOptions() }
							onSaveItems={ this.onUpdateOptions }
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
			</div>
		);
	}
}

export default FromManualFields;