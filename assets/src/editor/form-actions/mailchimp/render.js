const {
	      addAction,
	      globalTab,
      } = JetFBActions;

/**
 * Internal dependencies
 */
const {
	      TextControl,
	      ToggleControl: CoreToggleControl,
	      SelectControl,
	      CheckboxControl,
	      BaseControl,
	      Button,
      } = wp.components;

const {
	      ActionFieldsMap,
	      WrapperRequiredControl,
	      ValidateButtonWithStore,
	      ToggleControl,
      } = JetFBComponents;

const {
	      convertObjectToOptionsList,
	      getFormFieldsBlocks,
      } = JetFBActions;

const { __ } = wp.i18n;

const {
	      withRequestFields,
	      withSelectActionLoading,
      } = JetFBHooks;

const {
	      withSelect,
	      withDispatch,
      } = wp.data;

const { compose } = wp.compose;

const {
	      useState,
	      useEffect,
      } = wp.element;

function MailChimpRender( props ) {

	const {
		      settings,
		      label,
		      help,
		      requestFields = [],
		      onChangeSettingObj,
		      getMapField,
		      setMapField,
		      source,
		      loadingState,
	      } = props;

	const currentTab = globalTab( { slug: 'mailchimp-tab' } );

	const [ formFieldsList, setFormFields ] = useState( [] );

	useEffect( () => {
		setFormFields(
			[ ...getFormFieldsBlocks( [], '--' ), ...requestFields ] );
	}, [] );

	const getFields = () => {
		const { data = {} } = loadingState.response || {};

		if ( settings.list_id && data?.fields[ settings.list_id ] ) {
			return Object.entries( data.fields[ settings.list_id ] );
		}
		return [];
	};

	const getLists = () => {
		const { data = {} } = loadingState.response || {};

		if ( data.lists ) {
			return convertObjectToOptionsList( data.lists );
		}
		return [];
	};

	const getGroups = () => {
		const { data = {} } = loadingState.response || {};

		if ( data.groups ) {
			return data.groups[ settings.list_id ] ?? [];
		}
		return [];
	};

	const isCheckedGroup = value => {
		return (
			       value && settings.groups_ids && settings.groups_ids[ value ]
		       )
		       ? settings.groups_ids[ value ]
		       : false;
	};

	const getApiKey = () => {
		return settings.use_global ? currentTab.api_key : settings.api_key;
	};

	/* eslint-disable jsx-a11y/no-onchange */
	return (
		<div key="mailchimp">
			<ToggleControl
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
			<BaseControl
				key={ 'mailchimp_key_inputs' }
				label={ label( 'api_key' ) }
			>
				<div className="jet-control-clear-full jet-d-flex-between">
					<TextControl
						key="api_key"
						disabled={ settings.use_global }
						value={ getApiKey() }
						onChange={ api_key => onChangeSettingObj(
							{ api_key } ) }
					/>
					<ValidateButtonWithStore
						initialLabel={ label( 'validate_api_key' ) }
						label={ label( 'retry_request' ) }
						ajaxArgs={ {
							action: source.action,
							api_key: getApiKey(),
						} }
					/>
				</div>
			</BaseControl>
			<div/>
			<div className="jfb-margin-bottom--small">{ help(
				'api_key_link_prefix' ) } <a
				href={ help( 'api_key_link' ) }>{ help(
				'api_key_link_suffix' ) }</a>
			</div>
			{ loadingState.success && <React.Fragment>
				<SelectControl
					label={ label( 'list_id' ) }
					key="list_id"
					labelPosition="side"
					value={ settings.list_id }
					onChange={ list_id => onChangeSettingObj( { list_id } ) }
					options={ getLists() }
				/>
				{ Boolean( settings.list_id ) && <>
					<BaseControl
						label={ label( 'groups_ids' ) }
					>
						<div className="jet-user-fields-map__list">
							{ getGroups().map( group => <CheckboxControl
								key={ `groups_ids_${ group.value }` }
								checked={ isCheckedGroup( group.value ) }
								label={ group.label }
								onChange={ active => onChangeSettingObj( {
									groups_ids: {
										...(
											settings?.groups_ids || {}
										),
										[ group.value ]: active,
									},
								} ) }
							/> ) }
						</div>
					</BaseControl>
					<TextControl
						key="mailchimp_tags"
						value={ settings.tags }
						label={ label( 'tags' ) }
						help={ help( 'tags' ) }
						onChange={ tags => onChangeSettingObj( { tags } ) }
					/>
					<CoreToggleControl
						key={ 'double_opt_in' }
						label={ label( 'double_opt_in' ) }
						checked={ settings.double_opt_in }
						onChange={ double_opt_in => onChangeSettingObj( {
							double_opt_in: Boolean( double_opt_in ),
						} ) }
					/>
					<ActionFieldsMap
						label={ label( 'fields_map' ) }
						key="mailchimp"
						fields={ getFields() }
					>
						{ ( { fieldId, fieldData, index } ) =>
							<WrapperRequiredControl
								field={ [ fieldId, fieldData ] }
							>
								<SelectControl
									className="full-width"
									key={ fieldId + index }
									value={ getMapField( { name: fieldId } ) }
									onChange={ value => setMapField(
										{ nameField: fieldId, value } ) }
									options={ formFieldsList }
								/>
							</WrapperRequiredControl> }
					</ActionFieldsMap>
				</> }
			</React.Fragment> }
		</div>
	);
	/* eslint-enable jsx-a11y/no-onchange */
}

export default compose(
	withSelect( withRequestFields ),
	withSelect( withSelectActionLoading ),
)( MailChimpRender );