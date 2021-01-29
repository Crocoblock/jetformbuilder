export default class BaseActionComponent extends wp.element.Component {

	addPlaceholderForSelect( array, label = '--' ) {
		return [
			{ label },
			...array
		];
	}

	onChangeSetting( value, key ) {
		this.props.onChange( {
			...this.props.settings,
			[ key ]: value
		} );
	};

	getFieldDefault( name ) {
		const source = 'fields_map';

		return this.getFieldByName(
			{ name, source }
		);
	}

	getFieldMeta( name ) {
		const source = 'meta_fields_map';

		return this.getFieldByName(
			{ name, source }
		);
	}

	getFieldByName( { source, name } ) {
		const settings = this.props.settings;

		if ( typeof settings[ source ] !== 'undefined' && typeof settings[ source ][ name ] !== 'undefined' ) {
			return settings[ source ][ name ];
		}
		return '';
	}

	onChangeFieldMap( value, nameField ) {
		const source = 'fields_map';

		this.changeFieldsMap(
			{ value, nameField, source }
		);
	};

	onChangeMetaFieldMap( value, nameField ) {
		const source = 'meta_fields_map';

		this.changeFieldsMap(
			{ value, nameField, source }
		);
	};


	changeFieldsMap( { source, nameField, value } ) {
		const fieldsMap = Object.assign(
			{},
			this.props.settings[ source ],
			{ [ nameField ]: value }
		);

		this.props.onChange( {
			...this.props.settings,
			[ source ]: fieldsMap
		} );
	}

}