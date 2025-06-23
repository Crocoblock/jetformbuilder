import { Label, RowControl, StyledSelectControl } from 'jet-form-builder-components';
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { STORE_NAME } from '../store';

function ListsRow( { settings, onChangeSettingObj } ) {

	const lists = useSelect( select => (
		select( STORE_NAME ).getLists()
	), [] );

	return <RowControl>
		{ ( { id } ) => <>
			<Label htmlFor={ id }>
				{ __( 'List Id', 'jet-form-builder' ) }
			</Label>
			<StyledSelectControl
				id={ id }
				value={ settings.list_id }
				onChange={ list_id => onChangeSettingObj( { list_id } ) }
				options={ [
					{ value: '', label: '--' },
					...lists,
				] }
			/>
		</> }
	</RowControl>;
}

export default ListsRow;