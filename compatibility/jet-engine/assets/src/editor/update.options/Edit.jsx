import { useFields } from 'jet-form-builder-blocks-to-actions';
import { ValidatedSelectControl } from 'jet-form-builder-actions';
import {
	WideLine,
	RowControl,
	Label,
	RowControlEnd,
} from 'jet-form-builder-components';
import { Flex } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import OptionRow from './OptionRow';

function UpdateOptionsEdit( props ) {
	const {
		      settings,
		      onChangeSettingObj,
		      getMapField,
		      setMapField,
	      } = props;

	const formFields = useFields( { withInner: false } );

	return <Flex direction="column">
		<ValidatedSelectControl
			value={ settings.options_page }
			label={ __( 'Options page', 'jet-form-builder' ) }
			onChange={ val => onChangeSettingObj( { options_page: val } ) }
			options={ window.jetFormUpdateOptionsData.optionsPages }
			isErrorSupported={ ( { property } ) => 'options_page' === property }
			required
		/>
		<WideLine/>
		<RowControl align="flex-start">
			<Label>{ __( 'Options map', 'jet-form-builder' ) }</Label>
			<RowControlEnd gap={ 4 }>
				{ formFields.map( ( field ) => <OptionRow
					key={ field.value }
					label={ field.label }
					value={ getMapField( {
						source: 'meta_fields_map',
						name: field.value,
					} ) }
					onChange={ value => setMapField( {
						source: 'meta_fields_map',
						nameField: field.value,
						value,
					} ) }
				/> ) }
			</RowControlEnd>
		</RowControl>
	</Flex>;
}

export default UpdateOptionsEdit;