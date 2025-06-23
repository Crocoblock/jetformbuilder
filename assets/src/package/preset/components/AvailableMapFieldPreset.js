import GroupedSelectControl from '../../components/GroupedSelectControl';
import { Fragment } from '@wordpress/element';

import {
	CustomSelectControl,
	Card,
	CardHeader,
} from '@wordpress/components';

import {
	StyledSelectControl,
	StyledTextControl,
	StyledCardBodyControl,
} from 'jet-form-builder-components';

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

	if ( ! fieldsMap ) {
		fieldsMap = {};
	}

	currentVal = fieldsMap[ field ];

	if ( ! currentVal || 'object' !== typeof currentVal ) {
		currentVal = {};
	}

	const AvailableFieldWrapper = ( { field: fieldLocal, name, index: indexLocal, fIndex, children } ) => <Card
		key={ fieldLocal + name + indexLocal + fIndex }
		size={ 'extraSmall' }
		style={ { marginBottom: '10px' } }
	>
		<CardHeader>
			<span className='jet-label-overflow'>{ fieldLocal }</span>
		</CardHeader>
		<StyledCardBodyControl
			key={ fieldLocal + name + indexLocal + fIndex }
			className={ 'jet-form-preset__fields-map-item' }
		>
			{ children }
		</StyledCardBodyControl>
	</Card>;

	function AvailableFieldWrapperFunc( { field: fieldLocal, name, index: indexLocal, fIndex }, children ) {
		return <Card
			key={ fieldLocal + name + indexLocal + fIndex }
			size={ 'extraSmall' }
			style={ { marginBottom: '10px' } }
		>
			<CardHeader>
				<span className='jet-label-overflow'>{ fieldLocal }</span>
			</CardHeader>
			<StyledCardBodyControl
				key={ fieldLocal + name + indexLocal + fIndex }
				className={ 'jet-form-preset__fields-map-item' }
			>
				{ children }
			</StyledCardBodyControl>
		</Card>;
	}

	return <Fragment key={ `map_field_preset_${ field + index }` }>

		{/* eslint-disable-next-line max-lines-per-function */}
		{ window.JetFormEditorData.presetConfig.map_fields.map( ( data, fIndex ) => {
			const props = { field, name: data.name, index, fIndex };

			const uniqKey = 'control_' + field + data.name + index + fIndex;

			switch ( data.type ) {
				case 'text':
					return ( isMapFieldVisible( value, data, field ) &&
						AvailableFieldWrapperFunc( props, <StyledTextControl
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
					return ( isMapFieldVisible( value, data, field ) &&
						<AvailableFieldWrapper { ...props } key={ uniqKey }>
							<StyledSelectControl
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
				default:
					return null;
			}
		} ) }
	</Fragment>;
}

export default AvailableMapFieldPreset;