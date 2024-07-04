import {
	Label, LabelWithActions,
	RowControl,
} from 'jet-form-builder-components';
import { __ } from '@wordpress/i18n';
import { TextControl } from '@wordpress/components';

const {
	      MacrosFields,
      } = JetFBComponents;

function FromNameRow( { settings, onChangeSettingObj } ) {
	return <RowControl>
		{ ( { id } ) => <>
			<LabelWithActions>
				<Label htmlFor={ id }>
					{ __( 'From Name', 'jet-form-builder' ) }
				</Label>
				<MacrosFields
					onClick={ name => onChangeSettingObj( {
						from_name: (
							settings.from_name ?? ''
						) + name,
					} ) }
					withCurrent
				/>
			</LabelWithActions>
			<TextControl
				id={ id }
				value={ settings.from_name }
				onChange={ from_name => onChangeSettingObj(
					{ from_name },
				) }
				__next40pxDefaultSize
				__nextHasNoMarginBottom
			/>
		</> }
	</RowControl>;
}

export default FromNameRow;