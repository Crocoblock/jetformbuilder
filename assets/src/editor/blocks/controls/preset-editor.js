/**
 * Internal dependencies
 */
const {
	TextControl,
	SelectControl,
	Modal
} = wp.components;

const {
	useState,
	useEffect
} = wp.element;

function JetFormPresetEditor( {
								  value,
								  isSaveAction,
								  onSavePreset,
								  onUnMount,
								  availableFields,
							  } ) {

	const parseValue = () => {
		let val = {};

		if ( 'object' === typeof value ) {
			val = { ...value };
		} else if ( value && 'string' === typeof value ) {
			try {
				val = JSON.parse( value );
				if ( 'number' === typeof val ) {
					throw new Error();
				}
			} catch ( exception ) {
				val = {};
			}
		}
		val.jet_preset = true;

		return val;
	}

	const [stateValue, setValue] = useState( parseValue );

	const onChangeValue = ( newValue, name ) => {
		setValue( prev => ( { ...prev, [ name ]: newValue } ) );
	}

	useEffect( () => {
		if ( true === isSaveAction ) {
			const cloneItems = { ...stateValue };

			if ( onSavePreset ) {
				onSavePreset( JSON.stringify( cloneItems ) );
			}
			onUnMount();

		} else if ( false === isSaveAction ) {
			onUnMount();
		}
	}, [isSaveAction] );

	const isVisible = ( data ) => {

		if ( ! data.condition && ! data.custom_condition ) {
			return true;
		}

		if ( data.custom_condition ) {
			switch ( data.custom_condition ) {
				case 'query_var':
					return ( ( 'post' === stateValue.from && 'query_var' === stateValue.post_from ) || ( 'user' === stateValue.from && 'query_var' === stateValue.user_from ) );
			}
		}

		if ( data.condition ) {
			return stateValue[ data.condition.field ] === data.condition.value;
		}

		return true;

	};

	const isCurrentFieldVisible = ( data ) => {

		if ( ! data.condition && ! data.parent_condition ) {
			return true;
		}

		if ( data.parent_condition && ! data.condition ) {
			return stateValue[ data.parent_condition.field ] === data.parent_condition.value;
		} else if ( data.parent_condition && data.condition ) {
			return stateValue[ 'current_field_' + data.condition.field ] === data.condition.value && stateValue[ data.parent_condition.field ] === data.parent_condition.value;
		} else if ( ! data.parent_condition && data.condition ) {
			return stateValue[ 'current_field_' + data.condition.field ] === data.condition.value;
		}

		return true;
	}

	const isMapFieldVisible = ( data, field ) => {

		if ( ! data.condition && ! data.parent_condition ) {
			return true;
		}

		if ( data.parent_condition && ! data.condition ) {
			return stateValue[ data.parent_condition.field ] === data.parent_condition.value;
		} else if ( data.parent_condition && data.condition ) {
			if ( ! stateValue.fields_map || ! stateValue.fields_map[ field ] ) {
				return false;
			} else {
				return stateValue.fields_map[ field ][ data.condition.field ] === data.condition.value && stateValue[ data.parent_condition.field ] === data.parent_condition.value;
			}
		} else if ( ! data.parent_condition && data.condition ) {
			if ( ! stateValue.fields_map || ! stateValue.fields_map[ field ] ) {
				return false;
			} else {
				return stateValue.fields_map[ field ][ data.condition.field ] === data.condition.value;
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
								value={ stateValue[ data.name ] }
								onChange={ newVal => {
									onChangeValue( newVal, data.name )
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
								labelPosition="top"
								options={ data.options }
								label={ data.label }
								value={ stateValue[ data.name ] }
								onChange={ newVal => {
									onChangeValue( newVal, data.name )
								} }
							/>
						</div>
					);
			}
		} ) }

		{ ( availableFields && stateValue.from ) && (
			availableFields.map( ( field, index ) => {

				var fieldsMap = stateValue.fields_map;
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
												onChangeValue( {
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
												onChangeValue( {
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

		{ ! Boolean( availableFields ) && ( window.JetFormEditorData.presetConfig.map_fields.map( ( data, fIndex ) => {

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
									value={ stateValue[ 'current_field_' + data.name ] }
									onChange={ newVal => {
										onChangeValue( newVal, 'current_field_' + data.name )
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
									key={ 'control_' + data.name + fIndex }
									labelPosition="side"
									options={ data.options }
									label={ data.label }
									value={ stateValue[ 'current_field_' + data.name ] }
									onChange={ newVal => {
										onChangeValue( newVal, 'current_field_' + data.name )
									} }
								/>
							</div>
						);
				}
			} )
		) }
	</React.Fragment> );
}

export default JetFormPresetEditor;
