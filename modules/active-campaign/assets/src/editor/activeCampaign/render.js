import { __ } from '@wordpress/i18n';
import { useEffect } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { ClearBaseControlStyle, WideLine } from 'jet-form-builder-components';
import APIDataStaticRow from './APIData/APIDataStaticRow';
import APIDataGlobalRow from './APIData/APIDataGlobalRow';
import { STORE_NAME } from '../store';
import ListsRow from './ListsRow';
import FieldsMapRow from './FieldsMapRow';
import TagsRow from './TagsRow';
import { Flex } from '@wordpress/components';

const {
	      ToggleControl,
      } = JetFBComponents;

const legacyMap = {
	first_name: 'firstName',
	last_name: 'lastName',
};

function ActiveCampaignAction( props ) {

	const {
		      settings,
		      onChangeSettingObj,
		      getMapField,
		      setMapField,
	      } = props;

	const { isFetchLoading, hasLists, fields, hasError } = useSelect(
		select => (
			{
				isFetchLoading: select( STORE_NAME ).isFetchLoading(),
				hasError: Boolean( select( STORE_NAME ).getFetchError() ),
				hasLists: Boolean( select( STORE_NAME ).getLists().length ),
				fields: select( STORE_NAME ).getFields(),
			}
		),
		[],
	);

	useEffect( () => {
		const fieldsMap = {};

		for ( const [ property, value ] of Object.entries(
			settings.fields_map ?? {},
		) ) {
			if ( !legacyMap.hasOwnProperty( property ) ) {
				fieldsMap[ property ] = value;

				continue;
			}
			fieldsMap[ legacyMap[ property ] ] = value;
		}

		onChangeSettingObj( { fields_map: fieldsMap } );
	}, [] );

	/**
	 * We should to remove old custom fields, which may be removed
	 * @since 3.1.9
	 *
	 * @see https://github.com/Crocoblock/issues-tracker/issues/5102
	 */
	useEffect( () => {
		if ( !fields?.length ) {
			return;
		}

		const fieldsKeys = new Set( fields.map( field => field.value ) );
		const fieldsMap  = {};

		for ( const [ key, value ] of Object.entries( settings.fields_map ) ) {
			if ( !fieldsKeys.has( key ) ) {
				continue;
			}
			fieldsMap[ key ] = value;
		}

		onChangeSettingObj( { fields_map: fieldsMap } );

	}, [ isFetchLoading ] );

	useEffect( () => {
		if ( !settings.tags || Array.isArray( settings.tags ) ) {
			return;
		}
		onChangeSettingObj( {
			tags: settings.tags.split( ',' ).map( tag => tag.trim() ),
		} );
	}, [] );

	/* eslint-disable jsx-a11y/no-onchange */
	return <Flex direction="column">
		<ToggleControl
			className={ ClearBaseControlStyle }
			checked={ settings.use_global }
			onChange={ val => (
				onChangeSettingObj( { use_global: Boolean( val ) } )
			) }
		>
			{ __( 'Use', 'jet-form-builder' ) + ' ' }
			<a href={ JetFormEditorData.global_settings_url +
				'#active-campaign-tab' }>
				{ __( 'Global Settings', 'jet-form-builder' ) }
			</a>
		</ToggleControl>
		<WideLine/>
		{ settings.use_global ? <APIDataGlobalRow/> : <APIDataStaticRow
			settings={ settings }
			onChangeSettingObj={ onChangeSettingObj }
		/> }
		{ !hasError && Boolean( fields.length ) && <>
			{ hasLists && <>
				<WideLine/>
				<ListsRow
					settings={ settings }
					onChangeSettingObj={ onChangeSettingObj }
				/>
			</> }
			<WideLine/>
			<TagsRow
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
