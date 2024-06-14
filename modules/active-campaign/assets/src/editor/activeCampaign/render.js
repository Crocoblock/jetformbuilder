const {
	      globalTab,
	      Tools: { withPlaceholder },
	      getFormFieldsBlocks,
	      convertListToFieldsMap,
      } = JetFBActions;
const {
	      ActionFieldsMap,
	      WrapperRequiredControl,
	      ActionFetchButton,
	      DynamicPropertySelect,
	      ToggleControl,
      } = JetFBComponents;
const {
	      withRequestFields,
	      withSelectActionLoading,
      } = JetFBHooks;
/**
 * Internal dependencies
 */
const {
	      TextControl,
	      SelectControl,
	      BaseControl,
      } = wp.components;
const {
	      __,
      } = wp.i18n;
const {
	      useState,
	      useEffect,
      } = wp.element;
const {
	      withSelect,
      } = wp.data;
const {
	      compose,
      } = wp.compose;

const legacy_map = {
	first_name: 'firstName',
	last_name: 'lastName',
};

function ActiveCampaignAction( props ) {

	const {
		      settings,
		      onChangeSettingObj,
		      source,
		      label,
		      help,
		      requestFields,
		      loadingState,
	      } = props;

	const currentTab = globalTab( { slug: 'active-campaign-tab' } );

	const [ formFields ] = useState(
		() => (
			[
				...getFormFieldsBlocks( [], '--' ),
				...requestFields,
			]
		),
	);

	useEffect( () => {
		const fields_map = {};

		for ( const [ property, value ] of Object.entries(
			settings.fields_map ?? {} ) ) {
			if ( !legacy_map.hasOwnProperty( property ) ) {
				fields_map[ property ] = value;

				continue;
			}
			fields_map[ legacy_map[ property ] ] = value;
		}

		onChangeSettingObj( { fields_map } );
	}, [] );

	/**
	 * We should to remove old custom fields, which may be removed
	 * @since 3.1.9
	 *
	 * @see https://github.com/Crocoblock/issues-tracker/issues/5102
	 */
	useEffect( () => {
		if ( !loadingState.success ) {
			return;
		}

		const fieldsKeys = new Set(
			loadingState.response.fields.map( field => field.value ),
		);

		const fields_map = {};

		for ( const [ key, value ] of Object.entries( settings.fields_map ) ) {
			if ( !fieldsKeys.has( key ) ) {
				continue;
			}
			fields_map[ key ] = value;
		}

		onChangeSettingObj( { fields_map } );

	}, [ loadingState.success ] );

	const getAPI = prop => settings.use_global
	                       ? currentTab[ prop ]
	                       : (
		                       settings[ prop ] ?? ''
	                       );

	/* eslint-disable jsx-a11y/no-onchange */
	return <>
		<ToggleControl
			checked={ settings.use_global }
			onChange={
				val => onChangeSettingObj( { use_global: Boolean( val ) } )
			}
		>
			{ __( 'Use', 'jet-form-builder' ) + ' ' }
			<a href={ JetFormEditorData.global_settings_url +
			'#active-campaign-tab' }>
				{ __( 'Global Settings', 'jet-form-builder' ) }
			</a>
		</ToggleControl>
		<BaseControl
			label={ label( 'api_data' ) }
			key={ 'activecampaign_input_key' }
		>
			<div className="jet-control-clear-full jet-d-flex-between">
				<div>
					<TextControl
						key="api_url"
						help={ label( 'api_url' ) }
						className="jet-control-clear"
						disabled={ settings.use_global }
						value={ getAPI( 'api_url' ) }
						onChange={
							api_url => onChangeSettingObj( { api_url } )
						}
					/>
					<TextControl
						key="api_key"
						help={ label( 'api_key' ) }
						className="jet-control-clear"
						disabled={ settings.use_global }
						value={ getAPI( 'api_key' ) }
						onChange={
							api_key => onChangeSettingObj( { api_key } )
						}
					/>
				</div>
				<ActionFetchButton
					initialLabel={ label( 'validate_api_key' ) }
					label={ label( 'retry_request' ) }
					apiArgs={ {
						...source.fetch,
						headers: {
							'API-TOKEN': getAPI( 'api_key' ),
							'API-URL': getAPI( 'api_url' ),
						},
					} }
				/>
			</div>
		</BaseControl>
		<div style={ {
			paddingBottom: '1.2em',
		} }>
			{ help( 'api_key_link_prefix' ) } <a
			href={ help( 'api_key_link' ) }>{ help(
			'api_key_link_suffix' ) }</a>
		</div>
		{ loadingState.success && <React.Fragment>
			<SelectControl
				key="activecampaign_select_lists"
				label={ label( 'list_id' ) }
				labelPosition="side"
				value={ settings.list_id }
				onChange={ list_id => onChangeSettingObj( { list_id } ) }
				options={ withPlaceholder( loadingState.response.lists ?? [] ) }
			/>
			<TextControl
				key="activecampaign_tags"
				label={ label( 'tags' ) }
				value={ settings.tags }
				help={ help( 'tags' ) }
				onChange={ tags => onChangeSettingObj( { tags } ) }
			/>
			<ActionFieldsMap
				label={ label( 'fields_map' ) }
				fields={ convertListToFieldsMap(
					loadingState.response.fields,
				) }
			>
				<WrapperRequiredControl>
					<DynamicPropertySelect
						properties={ formFields }
					/>
				</WrapperRequiredControl>
			</ActionFieldsMap>
		</React.Fragment> }
	</>;
	/* eslint-enable jsx-a11y/no-onchange */
}

export default compose(
	withSelect( withRequestFields ),
	withSelect( withSelectActionLoading ),
)( ActiveCampaignAction );
