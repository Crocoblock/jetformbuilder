/**
 * External dependencies
 */
const { isEmpty } = window.lodash;

/**
 * WordPress dependencies
 */
const { withInstanceId } = wp.compose;

/**
 * Internal dependencies
 */
const {
	SelectControl,
	TextControl
} = wp.components;

const {
	useState,
	useEffect
} = wp.element;


class JetFieldsMapControl extends wp.element.Component {

	constructor( props ) {
		super( props );

		this.fieldTypes = this.props.fieldTypes;
		this.taxonomiesList = this.props.taxonomiesList;
		this.className = this.props.className;
		this.metaProp = this.props.metaProp ? this.props.metaProp : 'post_meta';
		this.termsProp = this.props.termsProp ? this.props.termsProp : 'post_terms';
		this.index = this.props.index;

		this.init();
		this.bindFunctions();

		this.state = {
			type: this.getFieldType( this.props.fieldValue ),
		};
	}

	bindFunctions() {
		this.onChangeType = this.onChangeType.bind( this );
		this.onChangeValue = this.onChangeValue.bind( this );
	}


	init() {
		this.id = `inspector-select-control-${ this.index }`;
		this.preparedTaxes = [];
		this.taxPrefix = 'jet_tax__';

		if ( ! this.taxonomiesList ) {
			return;
		}

		for ( var i = 0; i < this.taxonomiesList.length; i ++ ) {
			this.preparedTaxes.push( {
				value: this.taxPrefix + this.taxonomiesList[ i ].value,
				label: this.taxonomiesList[ i ].label,
			} );
		}
	}

	getFieldName( value ) {

		if ( ! value ) {
			return '';
		}

		const fieldType = this.getFieldType( value );

		if ( this.termsProp === fieldType || this.metaProp === fieldType ) {
			return value;
		} else {
			return '';
		}

	};

	isTermOrMeta( value ) {
		return ( this.termsProp === value || this.metaProp === value );
	}


	getFieldType( value ) {

		if ( ! value ) {
			return '';
		}

		for ( var i = 0; i < this.fieldTypes.length; i ++ ) {
			if ( value === this.fieldTypes[ i ].value ) {
				return value;
			}
		}

		if ( value.includes( this.taxPrefix ) ) {
			return this.termsProp;
		} else {
			return this.metaProp;
		}

	};


	onChangeValue( newValue ) {
		this.props.onChange( {
			...this.props.fieldsMap,
			[ this.props.fieldName ]: newValue
		} );
	};


	onChangeType( newValue ) {
		let val = this.getFieldType( newValue );

		this.setState( {
			type: val
		} );

		if ( this.isTermOrMeta( val ) ) {
			val = '';
		}

		this.onChangeValue( val );
	}


	// Disable reason: A select with an onchange throws a warning

	/* eslint-disable jsx-a11y/no-onchange */
	render() {
		return <div
			className="jet-fields-map__row"
		>
			<div className="jet-post-field-control">
				<SelectControl
					key={ 'field_type_' + this.props.fieldName + this.index }
					label={ this.props.fieldName }
					labelPosition="side"
					value={ this.state.type }
					onChange={ this.onChangeType }
					options={ this.fieldTypes }
					style={ {
						width: '160px'
					} }
				/>
				{ ( this.metaProp === this.state.type ) && <TextControl
					key={ 'field_name_' + this.props.fieldName + this.index }
					value={ this.props.fieldValue }
					onChange={ this.onChangeValue }
					style={ { width: '200px' } }
				/> }
				{ ( this.termsProp === this.state.type ) && <SelectControl
					className='jet-control-without-label'
					key={ 'field_tax_' + this.props.fieldName + this.index }
					value={ this.props.fieldValue }
					onChange={ this.onChangeValue }
					options={ this.preparedTaxes }
					style={ { width: '200px' } }
				/> }
			</div>
		</div>;
	}

	/* eslint-enable jsx-a11y/no-onchange */
}

export default JetFieldsMapControl;