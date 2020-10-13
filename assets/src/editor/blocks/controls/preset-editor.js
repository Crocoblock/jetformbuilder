/**
 * Internal dependencies
 */
const {
	TextControl,
	SelectControl,
	Modal
} = wp.components;

function JetFormPresetEditor( {
	value,
	onChange,
	decode,
	encode,
	availableFields
} ) {

	if ( decode ) {

		if ( ! value ) {
			value = '{}';
		}

		value = JSON.parse( value );

	}

	const isVisible = ( data ) => {

		if ( ! data.condition && ! data.custom_condition ) {
			return true;
		}

		if ( data.custom_condition ) {
			switch ( data.custom_condition ) {
				case 'query_var':
					return ( ( 'post' === value.from && 'query_var' === value.post_from ) || ( 'user' === value.from && 'query_var' === value.user_from ) );
			}
		}

		console.log( data.condition );

		if ( data.condition ) {
			return value[ data.condition.field ] === data.condition.value;
		}

		return true;

	};

	const onChangeValue = ( newValue, name ) => {
		value[ name ] = newValue;
	};

	return ( <div>
		{ window.JetFormEditorData.presetConfig.global_fields.map( ( data, index ) => {
			switch ( data.type ) {
				case 'text':
					return ( isVisible( data ) &&
						<div
							key={ 'field_' + data.name + index }
							className={ 'jet-form-canvas__preset-row' }
						>
							<TextControl
								key={ data.name + index }
								label={ data.label }
								value={ value[ data.name ] }
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
							className={ 'jet-form-canvas__preset-row' }
						>
							<SelectControl
								key={ data.name + index }
								labelPosition="side"
								options={ data.options }
								label={ data.label }
								value={ value[ data.name ] }
								onChange={ newVal => {
									onChangeValue( newVal, data.name )
								} }
							/>
						</div>
					);
			}
		} ) }

		{ availableFields && (
			availableFields.map( ( field, index ) => {

			} )
		) }

		{ ! availableFields && (
			<div></div>
		) }
	</div> );
}

export default JetFormPresetEditor;
