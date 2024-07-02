import {
	RowControl,
	Label,
} from 'jet-form-builder-components';
import { __ } from '@wordpress/i18n';
import { TextControl } from '@wordpress/components';

function DayOfCycleRow( { settings, onChangeSettingObj } ) {
	return <RowControl>
		{ ( { id } ) => <>
			<Label htmlFor={ id }>
				{ __( 'Day Of Cycle', 'jet-form-builder' ) }
			</Label>
			<TextControl
				id={ id }
				type="number"
				onChange={ day_of_cycle => onChangeSettingObj(
					{ day_of_cycle },
				) }
				value={ settings.day_of_cycle }
				__next40pxDefaultSize
				__nextHasNoMarginBottom
			/>
		</> }
	</RowControl>;
}

export default DayOfCycleRow;
