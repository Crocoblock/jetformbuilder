const {
	      TextControl,
	      SelectControl,
      } = wp.components;

function GlobalFieldPreset( {
	data,
	value,
	index,
	onChangeValue,
	isVisible,
	excludeOptions = options => options,
	position,
} ) {

	switch ( data.type ) {
		case 'text':
			return ( isVisible( value, data, position ) &&
				<div
					key={ 'field_' + data.name + index }
					className={ 'jet-form-preset__row' }
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
			return ( isVisible( value, data, position ) &&
				<div
					key={ 'field_' + data.name + index }
					className={ 'jet-form-preset__row' }
				>
					<SelectControl
						key={ data.name + index }
						labelPosition="side"
						options={ excludeOptions( data.options ) }
						label={ data.label }
						value={ value[ data.name ] }
						onChange={ newVal => {
							onChangeValue( newVal, data.name )
						} }
					/>
				</div>
			);
	}

	return null;
}

export default GlobalFieldPreset;