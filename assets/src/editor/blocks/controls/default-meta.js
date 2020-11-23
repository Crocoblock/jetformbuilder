const {
	Button,
	TextControl,
} = wp.components;

const { __ } = wp.i18n;

class JetDefaultMetaControl extends wp.element.Component {

	constructor( props ) {
		super( props );

		this.addNewOption = this.addNewOption.bind( this );
	}

	getDefaultMeta() {
		if ( ! this.props.defaultMeta ) {
			return [];
		}
		return Array.from( this.props.defaultMeta );
	}


	addNewOption() {
		const items = this.getDefaultMeta();

		items.push( {
			key: '',
			value: '',
		} );

		this.props.onChange( items );
	}

	removeOption( index ) {
		const items = this.getDefaultMeta();
		items.splice( index, 1 );

		this.props.onChange( items );
	}

	onChangeValue( { value, name, id } ) {

		const items = Array.from( this.props.defaultMeta );
		items[ id ][ name ] = value;

		this.props.onChange( items );
	}

	/* eslint-disable jsx-a11y/no-onchange */
	render() {

		return <div
			className="jet-default-meta__row"
		>
			{ this.getDefaultMeta().map( ( currentItem, index ) => {
				return <div
					className="jet-form-repeater-modal"
					key={ 'jet-form-repeater-item-' + index }
				>
					<div className='repeater-item-column'>
						<TextControl
							key='meta_key'
							label={ __( 'Meta Key' ) }
							value={ currentItem.key }
							onChange={ ( newValue ) => {
								this.onChangeValue( {
									value: newValue,
									name: 'key',
									id: index
								} );
							} }
						/>
					</div>
					<div className='repeater-item-column'>
						<TextControl
							key='meta_value'
							label={ __( 'Meta Value' ) }
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
		</div>;
	}
}

export default JetDefaultMetaControl;