import GroupedSelectControl from '../../components/GroupedSelectControl';

const {
	      TextControl,
	      SelectControl,
	      CustomSelectControl,
	      Card,
	      CardBody,
	      CardHeader,
      } = wp.components;

// eslint-disable-next-line max-lines-per-function
function AvailableMapFieldPreset( {
	fieldsMap,
	field,
	index,
	value,
	onChangeValue,
	isMapFieldVisible,
} ) {

	let currentVal = null;

	if ( !fieldsMap ) {
		fieldsMap = {};
	}

	currentVal = fieldsMap[ field ];

	if ( !currentVal || 'object' !== typeof currentVal ) {
		currentVal = {};
	}

	const AvailableFieldWrapper = ( {
		field: localField,
		name,
		index: localIndex,
		fIndex,
		children,
	} ) => <Card
		key={ localField + name + localIndex + fIndex }
		size={ 'extraSmall' }
		style={ { marginBottom: '10px' } }
	>
		<CardHeader>
			<span className="jet-label-overflow">{ localField }</span>
		</CardHeader>
		<CardBody
			key={ localField + name + localIndex + fIndex }
			className={ 'jet-form-preset__fields-map-item' }
		>
			{ children }
		</CardBody>
	</Card>;

	function AvailableFieldWrapperFunc( {
		field: localField,
		name,
		index: localIndex,
		fIndex,
	}, children ) {
		return <Card
			key={ localField + name + localIndex + fIndex }
			size={ 'extraSmall' }
			style={ { marginBottom: '10px' } }
		>
			<CardHeader>
				<span className="jet-label-overflow">{ localField }</span>
			</CardHeader>
			<CardBody
				key={ localField + name + localIndex + fIndex }
				className={ 'jet-form-preset__fields-map-item' }
			>
				{ children }
			</CardBody>
		</Card>;
	}

	return window.JetFormEditorData.presetConfig.map_fields.map(
		// eslint-disable-next-line max-lines-per-function
		( data, fIndex ) => {
			const props = { field, name: data.name, index, fIndex };

			const uniqKey = 'control_' + field + data.name + index + fIndex;

			switch ( data.type ) {
				case 'text':
					return (
						isMapFieldVisible( value, data, field ) &&
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
						/> )
					);
				case 'select':
					return (
						isMapFieldVisible( value, data, field ) &&
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
					return (
						isMapFieldVisible( value, data, field ) &&
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
								value={ data.options.find(
									option => option.key ===
										currentVal[ data.name ] ) }
							/>
						</AvailableFieldWrapper>
					);
				case 'grouped_select':
					return (
						isMapFieldVisible( value, data, field ) &&
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
						</AvailableFieldWrapper>
					);
				default:
					return null;
			}
		} );
}

export default AvailableMapFieldPreset;