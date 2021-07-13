import GroupedSelectControl from '../grouped-select-control';


const {
		  TextControl,
		  SelectControl,
		  CustomSelectControl,
		  Card,
		  CardBody,
		  CardHeader,
	  } = wp.components;

function GlobalField( {
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

function AvailableMapField( {
								fieldsMap,
								field,
								index,
								value,
								onChangeValue,
								isMapFieldVisible,
							} ) {

	let currentVal = null;

	if ( ! fieldsMap ) {
		fieldsMap = {};
	}

	currentVal = fieldsMap[ field ];

	if ( ! currentVal || 'object' !== typeof currentVal ) {
		currentVal = {};
	}

	const AvailableFieldWrapper = ( { field, name, index, fIndex, children } ) => <Card
		key={ field + name + index + fIndex }
		size={ 'extraSmall' }
		style={ { marginBottom: '10px' } }
	>
		<CardHeader>
			<span className='jet-label-overflow'>{ field }</span>
		</CardHeader>
		<CardBody
			key={ field + name + index + fIndex }
			className={ 'jet-form-preset__fields-map-item' }
		>
			{ children }
		</CardBody>
	</Card>;

	return <React.Fragment key={ `map_field_preset_${ field + index }` }>

		{ window.JetFormEditorData.presetConfig.map_fields.map( ( data, fIndex ) => {
			const props = { field, name: data.name, index, fIndex };

			const uniqKey = 'control_' + field + data.name + index + fIndex;

			switch ( data.type ) {
				case 'text':
					return ( isMapFieldVisible( value, data, field ) &&
						<AvailableFieldWrapper { ...props } key={ uniqKey }>
							<TextControl
								placeholder={ data.label }
								value={ currentVal[ data.name ] }
								onChange={ newVal => {
									currentVal[ data.name ] = newVal;
									onChangeValue( {
										...fieldsMap,
										[ field ]: currentVal,
									}, 'fields_map' );
								} }
							/>
						</AvailableFieldWrapper>
					);
				case 'select':
					return ( isMapFieldVisible( value, data, field ) &&
						<AvailableFieldWrapper { ...props } key={ uniqKey }>
							<SelectControl
								options={ data.options }
								//label={ data.label }
								labelPosition="top"
								value={ currentVal[ data.name ] }
								onChange={ newVal => {
									currentVal[ data.name ] = newVal;
									onChangeValue( {
										...fieldsMap,
										[ field ]: currentVal,
									}, 'fields_map' );
								} }
							/>
						</AvailableFieldWrapper>
					);
				case 'custom_select':
					return ( isMapFieldVisible( value, data, field ) &&
						<AvailableFieldWrapper { ...props } key={ uniqKey }>
							<CustomSelectControl
								options={ data.options }
								onChange={ ( { selectedItem } ) => {
									currentVal[ data.name ] = selectedItem.key;
									onChangeValue( {
										...fieldsMap,
										[ field ]: currentVal,
									}, 'fields_map' );
								} }
								value={ data.options.find( option => option.key === currentVal[ data.name ] ) }
							/>
						</AvailableFieldWrapper> );
				case 'grouped_select':
					return ( isMapFieldVisible( value, data, field ) &&
						<AvailableFieldWrapper { ...props } key={ uniqKey }>
							<GroupedSelectControl
								options={ data.options }
								//label={ data.label }
								labelPosition="top"
								value={ currentVal[ data.name ] }
								onChange={ newVal => {
									currentVal[ data.name ] = newVal;
									onChangeValue( {
										...fieldsMap,
										[ field ]: currentVal,
									}, 'fields_map' );
								} }
							/>
						</AvailableFieldWrapper> );
			}
		} ) }
	</React.Fragment>;
}

function MapField( {
					   data,
					   value,
					   index,
					   currentState,
					   onChangeValue,
					   isCurrentFieldVisible,
					   position = 'general',
				   } ) {

	switch ( data.type ) {
		case 'text':
			return ( isCurrentFieldVisible( currentState, data ) &&
				<div
					key={ data.name + index }
					className={ 'jet-form-preset__row' }
				>
					<TextControl
						key={ 'control_' + data.name + index }
						placeholder={ data.label }
						value={ value }
						onChange={ newVal => {
							onChangeValue( newVal, 'current_field_' + data.name )
						} }
					/>
				</div>
			);
		case 'select':
			return ( isCurrentFieldVisible( currentState, data ) &&
				<div
					key={ data.name + index }
					className={ 'jet-form-preset__row' }
				>
					<SelectControl
						key={ 'control_' + data.name + index }
						labelPosition="side"
						options={ data.options }
						label={ data.label }
						value={ value }
						onChange={ newVal => {
							onChangeValue( newVal, 'current_field_' + data.name )
						} }
					/>
				</div>
			);
		case 'custom_select':
			return ( isCurrentFieldVisible( currentState, data ) &&
				<div
					key={ data.name + index }
					className={ 'jet-form-preset__row' }
				>
					<CustomSelectControl
						className='jet-custom-select-control'
						label={ data.label }
						options={ data.options }
						onChange={ ( { selectedItem } ) => {
							value = selectedItem.key;
							onChangeValue( value, 'current_field_' + data.name )
						} }
						value={ data.options.find( option => option.key === value ) }
					/>
				</div> );
		case 'grouped_select':
			return ( isCurrentFieldVisible( currentState, data ) &&
				<div
					key={ data.name + index }
					className={ 'jet-form-preset__row' }
				>
					<GroupedSelectControl
						options={ data.options }
						label={ data.label }
						labelPosition="side"
						value={ value }
						onChange={ newVal => {
							onChangeValue( newVal, 'current_field_' + data.name )
						} }
					/>
				</div> );
	}
	return null;
}

export {
	GlobalField,
	AvailableMapField,
	MapField,
};