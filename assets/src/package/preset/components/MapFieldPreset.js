import GroupedSelectControl from '../../components/GroupedSelectControl';
import {
	CustomSelectControl,
} from '@wordpress/components';
import { Label, StyledSelectControl, StyledTextControl } from 'jet-form-builder-components';

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
					<StyledTextControl
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
					<StyledSelectControl
						key={ 'control_' + data.name + index }
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
							onChangeValue( value,
								'current_field_' + data.name );
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
				>
					<Label>{ data.label }</Label>
					<GroupedSelectControl
						options={ data.options }
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