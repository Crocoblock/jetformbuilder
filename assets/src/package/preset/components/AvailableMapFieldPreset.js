import GroupedSelectControl from '../../components/GroupedSelectControl';

const {
	      TextControl,
	      SelectControl,
	      CustomSelectControl,
	      Card,
	      CardBody,
	      CardHeader,
      } = wp.components;

function AvailableMapFieldPreset( {
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

	function AvailableFieldWrapperFunc( { field, name, index, fIndex }, children ) {
		return <Card
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
	}

	return <React.Fragment key={ `map_field_preset_${ field + index }` }>

		{ window.JetFormEditorData.presetConfig.map_fields.map( ( data, fIndex ) => {
			const props = { field, name: data.name, index, fIndex };

			const uniqKey = 'control_' + field + data.name + index + fIndex;

			switch ( data.type ) {
				case 'text':
					return ( isMapFieldVisible( value, data, field ) &&
						AvailableFieldWrapperFunc( props, <TextControl
							key={ uniqKey + 'TextControl' }
							placeholder={ data.label }
							value={ currentVal[ data.name ] }
							onChange={ newVal => {
								currentVal[ data.name ] = newVal;
								onChangeValue( {
									...fieldsMap,
									[ field ]: currentVal,
								}, 'fields_map' );
							} }
							__next40pxDefaultSize
							__nextHasNoMarginBottom
						/> )
					);
				case 'select':
					return ( isMapFieldVisible( value, data, field ) &&
						<AvailableFieldWrapper { ...props } key={ uniqKey }>
							<SelectControl
								options={ data.options }
								value={ currentVal[ data.name ] }
								onChange={ newVal => {
									currentVal[ data.name ] = newVal;
									onChangeValue( {
										...fieldsMap,
										[ field ]: currentVal,
									}, 'fields_map' );
								} }
								__next40pxDefaultSize
								__nextHasNoMarginBottom
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

export default AvailableMapFieldPreset;