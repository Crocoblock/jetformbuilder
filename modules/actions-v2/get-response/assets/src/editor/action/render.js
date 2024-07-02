import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { ClearBaseControlStyle, WideLine } from 'jet-form-builder-components';
import { STORE_NAME } from '../store';
import ListsRow from './ListsRow';
import FieldsMapRow from './FieldsMapRow';
import { Flex } from '@wordpress/components';
import APIKeyRow from './APIKeyRow';
import DayOfCycleRow from './DayOfCycleRow';

const {
	      ToggleControl,
      } = JetFBComponents;

function ActiveCampaignAction( props ) {

	const {
		      settings,
		      onChangeSettingObj,
		      getMapField,
		      setMapField,
	      } = props;

	const { fields, hasError } = useSelect(
		select => (
			{
				hasError: Boolean( select( STORE_NAME ).getFetchError() ),
				fields: select( STORE_NAME ).getFields(),
			}
		),
		[],
	);

	/* eslint-disable jsx-a11y/no-onchange */
	return <Flex direction="column">
		<ToggleControl
			className={ ClearBaseControlStyle }
			checked={ settings.use_global }
			onChange={
				val => onChangeSettingObj( { use_global: Boolean( val ) } )
			}
		>
			{ __( 'Use', 'jet-form-builder' ) + ' ' }
			<a href={ JetFormEditorData.global_settings_url +
				'#get-response-tab' }>
				{ __( 'Global Settings', 'jet-form-builder' ) }
			</a>
		</ToggleControl>
		<WideLine/>
		<APIKeyRow
			settings={ settings }
			onChangeSettingObj={ onChangeSettingObj }
		/>
		{ !hasError && Boolean( fields.length ) && <>
			<WideLine/>
			<ListsRow
				settings={ settings }
				onChangeSettingObj={ onChangeSettingObj }
			/>
			<WideLine/>
			<DayOfCycleRow
				settings={ settings }
				onChangeSettingObj={ onChangeSettingObj }
			/>
			<WideLine/>
			<FieldsMapRow
				getMapField={ getMapField }
				setMapField={ setMapField }
			/>
		</> }
	</Flex>;
	/* eslint-enable jsx-a11y/no-onchange */
}

export default ActiveCampaignAction;
