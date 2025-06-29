import { Button, FlexItem } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { StyledTextControl } from 'jet-form-builder-components';

class LegacyDefaultMetaControl extends wp.element.Component {

	constructor( props ) {
		super( props );

		this.addNewOption = this.addNewOption.bind( this );
	}

	getDefaultMeta() {
		if ( !this.props.defaultMeta ) {
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

		const items         = Array.from( this.props.defaultMeta );
		items[ id ][ name ] = value;

		this.props.onChange( items );
	}

	// eslint-disable-next-line max-lines-per-function
	render() {

		return <>
			{ this.getDefaultMeta().map( ( currentItem, index ) => {
				return <div
					className="jet-user-meta__row"
					key={ 'jet-form-builder-repeater-item-' + index }
				>
					<div
						className="repeater-item-column jet-margin-bottom-wrapper">
						<StyledTextControl
							key="meta_key"
							label={ __( 'Meta Key', 'jet-form-builder' ) }
							value={ currentItem.key }
							onChange={ ( newValue ) => {
								this.onChangeValue( {
									value: newValue,
									name: 'key',
									id: index,
								} );
							} }
						/>
						<StyledTextControl
							key="meta_value"
							label={ __( 'Meta Value', 'jet-form-builder' ) }
							value={ currentItem.value }
							onChange={ ( newValue ) => {
								this.onChangeValue( {
									value: newValue,
									name: 'value',
									id: index,
								} );
							} }
						/>
					</div>
					<div className="repeater-item-column">
						<Button
							icon="dismiss"
							label="Remove"
							onClick={ () => this.removeOption( index ) }
						/>
					</div>
				</div>;
			} ) }
			<FlexItem>
				<Button
					className="button-add-option"
					isSecondary
					onClick={ this.addNewOption }
				>
					{ __( 'Add New Option', 'jet-form-builder' ) }
				</Button>
			</FlexItem>
		</>;
	}
}

export default LegacyDefaultMetaControl;