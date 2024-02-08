import GroupedSelectControl from '../../components/GroupedSelectControl';

const {
	      TextControl,
	      SelectControl,
	      CustomSelectControl,
      } = wp.components;

// eslint-disable-next-line max-lines-per-function
function MapFieldPreset( {
	data,
	value,
	index,
	currentState,
	onChangeValue,
	isCurrentFieldVisible,
} ) {

	switch ( data.type ) {
		case 'text':
			return (
				isCurrentFieldVisible( currentState, data ) &&
				<div
					key={ data.name + index }
					className={ 'jet-form-preset__row' }
				>
					<TextControl
						key={ 'control_' + data.name + index }
						placeholder={ data.label }
						value={ value }
						onChange={ newVal => {
							onChangeValue( newVal,
								'current_field_' + data.name );
						} }
					/>
				</div>
			);
		case 'select':
			return (
				isCurrentFieldVisible( currentState, data ) &&
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
							onChangeValue( newVal,
								'current_field_' + data.name );
						} }
					/>
				</div>
			);
		case 'custom_select':
			return (
				isCurrentFieldVisible( currentState, data ) &&
				<div
					key={ data.name + index }
					className={ 'jet-form-preset__row' }
				>
					<CustomSelectControl
						className="jet-custom-select-control"
						label={ data.label }
						options={ data.options }
						onChange={ ( { selectedItem } ) => {
							value = selectedItem.key;
							onChangeValue( value, 'current_field_' + data.name );
						} }
						value={ data.options.find(
							option => option.key === value ) }
					/>
				</div>
			);
		case 'grouped_select':
			return (
				isCurrentFieldVisible( currentState, data ) &&
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
							onChangeValue( newVal,
								'current_field_' + data.name );
						} }
					/>
				</div>
			);
	}
	return null;
}

export default MapFieldPreset;