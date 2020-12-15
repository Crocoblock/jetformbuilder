/**
 * Internal dependencies
 */
const {
	TextControl,
	SelectControl,
	Modal
} = wp.components;

const JetFormPresetEditor = class extends wp.element.Component {

	constructor( props ) {
		super( props );
		this.state = { value: {} };
	}

	updateValue() {
		if ( this.props.encode ) {
			this.props.onChange( JSON.stringify( this.state.value ) );
		} else {
			this.props.onChange( this.state.value );
		}
	}

	onChangeValue( newValue, name ) {
		this.setState( {
			value: {
				...this.state.value,
				[ name ]: newValue
			}
		}, () => this.updateValue() );
	};


	componentDidMount() {

		if ( this.props.decode ) {

			let value = {};

			if ( this.props.value && 'string' === typeof this.props.value ) {
				try {
					value = JSON.parse( this.props.value );

					if ( 'number' === typeof value ) {
						throw new Error();
					}
				} catch ( exception ) {
					value = {};
				}
			}
			value.jet_preset = true;

			this.setState( { value } );

		} else if ( this.props.value ) {
			this.setState( { value: this.props.value } );
		}

	}

	render() {

		const isVisible = ( data ) => {

			if ( ! data.condition && ! data.custom_condition ) {
				return true;
			}

			if ( data.custom_condition ) {
				switch ( data.custom_condition ) {
					case 'query_var':
						return ( ( 'post' === this.state.value.from && 'query_var' === this.state.value.post_from ) || ( 'user' === this.state.value.from && 'query_var' === this.state.value.user_from ) );
				}
			}

			if ( data.condition ) {
				return this.state.value[ data.condition.field ] === data.condition.value;
			}

			return true;

		};

		const isCurrentFieldVisible = ( data ) => {

			if ( ! data.condition && ! data.parent_condition ) {
				return true;
			}

			if ( data.parent_condition && ! data.condition ) {
				return this.state.value[ data.parent_condition.field ] === data.parent_condition.value;
			} else if ( data.parent_condition && data.condition ) {
				return this.state.value[ 'current_field_' + data.condition.field ] === data.condition.value && this.state.value[ data.parent_condition.field ] === data.parent_condition.value;
			} else if ( ! data.parent_condition && data.condition ) {
				return this.state.value[ 'current_field_' + data.condition.field ] === data.condition.value;
			}

			return true;
		}

		const isMapFieldVisible = ( data, field ) => {

			if ( ! data.condition && ! data.parent_condition ) {
				return true;
			}

			if ( data.parent_condition && ! data.condition ) {
				return this.state.value[ data.parent_condition.field ] === data.parent_condition.value;
			} else if ( data.parent_condition && data.condition ) {
				if ( ! this.state.value.fields_map || ! this.state.value.fields_map[ field ] ) {
					return false;
				} else {
					return this.state.value.fields_map[ field ][ data.condition.field ] === data.condition.value && this.state.value[ data.parent_condition.field ] === data.parent_condition.value;
				}
			} else if ( ! data.parent_condition && data.condition ) {
				if ( ! this.state.value.fields_map || ! this.state.value.fields_map[ field ] ) {
					return false;
				} else {
					return this.state.value.fields_map[ field ][ data.condition.field ] === data.condition.value;
				}
			}

			return true;

		};

		return ( <React.Fragment>
			{ window.JetFormEditorData.presetConfig.global_fields.map( ( data, index ) => {
				switch ( data.type ) {
					case 'text':
						return ( isVisible( data ) &&
							<div
								key={ 'field_' + data.name + index }
								className={ 'jet-form-preset__row' }
							>
								<TextControl
									key={ data.name + index }
									label={ data.label }
									value={ this.state.value[ data.name ] }
									onChange={ newVal => {
										this.onChangeValue( newVal, data.name )
									} }
								/>
							</div>
						);
					case 'select':
						return ( isVisible( data ) &&
							<div
								key={ 'field_' + data.name + index }
								className={ 'jet-form-preset__row' }
							>
								<SelectControl
									key={ data.name + index }
									labelPosition="side"
									options={ data.options }
									className="full-width"
									label={ data.label }
									value={ this.state.value[ data.name ] }
									onChange={ newVal => {
										this.onChangeValue( newVal, data.name )
									} }
								/>
							</div>
						);
				}
			} ) }

			{ ( this.props.availableFields && this.props.value.from ) && (
				this.props.availableFields.map( ( field, index ) => {

					var fieldsMap = this.state.value.fields_map;
					var currentVal = null;

					if ( ! fieldsMap ) {
						fieldsMap = {};
					}

					currentVal = fieldsMap[ field ];

					if ( ! currentVal ) {
						currentVal = {};
					}

					return <React.Fragment>
						<span>{ field }</span>
						{ window.JetFormEditorData.presetConfig.map_fields.map( ( data, fIndex ) => {

							switch ( data.type ) {
								case 'text':
									return ( isMapFieldVisible( data, field ) &&
										<div
											key={ field + data.name + index + fIndex }
											className={ 'jet-form-preset__fields-map-item' }
										>
											<TextControl
												key={ 'control_' + field + data.name + index + fIndex }
												placeholder={ data.label }
												value={ currentVal[ data.name ] }
												onChange={ newVal => {
													currentVal[ data.name ] = newVal;
													this.onChangeValue( {
														...fieldsMap,
														[ field ]: currentVal
													}, 'fields_map' );
												} }
											/>
										</div>
									);
								case 'select':
									return ( isMapFieldVisible( data, field ) &&
										<div
											key={ field + data.name + index + fIndex }
											className={ 'jet-form-preset__fields-map-item' }
										>
											<SelectControl
												key={ 'control_' + field + data.name + index + fIndex }
												options={ data.options }
												//label={ data.label }
												value={ currentVal[ data.name ] }
												onChange={ newVal => {
													currentVal[ data.name ] = newVal;
													this.onChangeValue( {
														...fieldsMap,
														[ field ]: currentVal
													}, 'fields_map' );
												} }
											/>
										</div>
									);
							}
						} ) }
					</React.Fragment>;
				} )
			) }

			{ ! Boolean( this.props.availableFields ) && ( window.JetFormEditorData.presetConfig.map_fields.map( ( data, fIndex ) => {

					switch ( data.type ) {
						case 'text':
							return ( isCurrentFieldVisible( data ) &&
								<div
									key={ data.name + fIndex }
									className={ 'jet-form-preset__row' }
								>
									<TextControl
										key={ 'control_' + data.name + fIndex }
										placeholder={ data.label }
										value={ this.state.value[ 'current_field_' + data.name ] }
										onChange={ newVal => {
											this.onChangeValue( newVal, 'current_field_' + data.name )
										} }
									/>
								</div>
							);
						case 'select':
							return ( isCurrentFieldVisible( data ) &&
								<div
									key={ data.name + fIndex }
									className={ 'jet-form-preset__row' }
								>
									<SelectControl
										className="full-width"
										key={ 'control_' + data.name + fIndex }
										labelPosition="side"
										options={ data.options }
										label={ data.label }
										value={ this.state.value[ 'current_field_' + data.name ] }
										onChange={ newVal => {
											this.onChangeValue( newVal, 'current_field_' + data.name )
										} }
									/>
								</div>
							);
					}
				} )
			) }
		</React.Fragment> );
	}
}

export default JetFormPresetEditor;
