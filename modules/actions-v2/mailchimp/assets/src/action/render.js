import {
	Flex,
	ToggleControl as CoreToggleControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { ClearBaseControlStyle, WideLine } from 'jet-form-builder-components';
import APIKeyRow from './APIKeyRow';
import SelectListRow from './SelectListRow';
import GroupsSelectRow, { transformGroupsToArray } from './GroupsSelectRow';
import TagsRow from './TagsRow';
import FieldsMapRow from './FieldsMapRow';
import { useSelect } from '@wordpress/data';
import { STORE_NAME } from '../store';
import { useEffect } from '@wordpress/element';

const { ToggleControl } = JetFBComponents;

// eslint-disable-next-line max-lines-per-function
function MailChimpRender( props ) {

	const {
		      settings,
		      onChangeSettingObj,
		      getMapField,
		      setMapField,
	      } = props;

	const { hasError, hasLists } = useSelect( select => (
		{
			hasError: Boolean( select( STORE_NAME ).getFetchError() ),
			hasLists: Boolean( select( STORE_NAME ).getLists().length ),
		}
	), [] );

	useEffect( () => {
		const newSettings = {};

		if ( settings.tags && !Array.isArray( settings.tags ) ) {
			newSettings.tags = settings.tags.split( ',' ).map(
				tag => tag.trim(),
			);
		}

		if ( settings.groups_ids && !Array.isArray( settings.groups_ids ) ) {
			newSettings.groups_ids = transformGroupsToArray(
				settings.groups_ids,
			);
		}

		if ( !Object.values( newSettings )?.length ) {
			return;
		}

		onChangeSettingObj( { ...newSettings } );
	}, [] );

	/* eslint-disable jsx-a11y/no-onchange */
	return (
		<Flex direction="column">
			<ToggleControl
				className={ ClearBaseControlStyle }
				checked={ settings.use_global }
				onChange={ val => (
					onChangeSettingObj( { use_global: Boolean( val ) } )
				) }
				__nextHasNoMarginBottom
			>
				{ __( 'Use', 'jet-form-builder' ) + ' ' }
				<a href={ JetFormEditorData.global_settings_url +
					'#mailchimp-tab' }>
					{ __( 'Global Settings', 'jet-form-builder' ) }
				</a>
			</ToggleControl>
			<WideLine/>
			<APIKeyRow
				settings={ settings }
				onChangeSettingObj={ onChangeSettingObj }
			/>
			{ !hasError && hasLists && <>
				<WideLine/>
				<SelectListRow
					settings={ settings }
					onChangeSettingObj={ onChangeSettingObj }
				/>
				{ Boolean( settings.list_id ) && <>
					<WideLine/>
					<GroupsSelectRow
						listId={ settings.list_id }
						settings={ settings }
						onChangeSettingObj={ onChangeSettingObj }
					/>
					<WideLine/>
					<TagsRow
						settings={ settings }
						onChangeSettingObj={ onChangeSettingObj }
					/>
					<WideLine/>
					<CoreToggleControl
						label={ __( 'Double Opt-In', 'jet-form-builder' ) }
						className={ ClearBaseControlStyle }
						checked={ settings.double_opt_in }
						onChange={ val => {
							onChangeSettingObj( {
								double_opt_in: Boolean( val ),
							} );
						} }
					/>
					<WideLine/>
					<FieldsMapRow
						listId={ settings.list_id }
						getMapField={ getMapField }
						setMapField={ setMapField }
					/>
				</> }
			</> }
		</Flex>
	);
	/* eslint-enable jsx-a11y/no-onchange */
}

export default MailChimpRender;