import {
	Flex,
	ToggleControl as CoreToggleControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { ClearBaseControlStyle, WideLine } from 'jet-form-builder-components';
import APIKeyRow from './APIKeyRow';
import SelectListRow from './SelectListRow';
import GroupsSelectRow from './GroupsSelectRow';
import TagsRow from './TagsRow';
import FieldsMapRow from './FieldsMapRow';
import { useSelect } from '@wordpress/data';
import { STORE_NAME } from '../store';

const { ToggleControl } = JetFBComponents;

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

	/* eslint-disable jsx-a11y/no-onchange */
	return (
		<Flex direction="column">
			<ToggleControl
				className={ ClearBaseControlStyle }
				checked={ settings.use_global }
				onChange={ val => {
					onChangeSettingObj( {
						use_global: Boolean( val ),
					} );
				} }
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