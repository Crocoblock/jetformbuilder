const {
		  addAction,
		  globalTab,
		  Tools: { withPlaceholder },
		  getFormFieldsBlocks,
	  } = JetFBActions;

const {
		  ActionFieldsMap,
		  WrapperRequiredControl,
		  PlaceholderMessage,
	  } = JetFBComponents;

/**
 * Internal dependencies
 */
const {
		  TextControl,
		  ToggleControl,
		  SelectControl,
		  BaseControl,
		  Button,
	  } = wp.components;

const { __ } = wp.i18n;

const {
		  useState,
		  useEffect,
	  } = wp.element;

const { withRequestFields } = JetFBHooks;
const { withSelect } = wp.data;

function ActiveCampaignAction( props ) {

	const {
			  settings,
			  onChangeSetting,
			  onChange,
			  getMapField,
			  setMapField,
			  source,
			  label,
			  help,
			  requestFields,
		  } = props;

	const currentTab = globalTab( { slug: 'active-campaign-tab' } )

	const [ formFieldsList, setFormFields ] = useState( [] );

	const [ buttonClass, setButtonClass ] = useState( () => ( settings.isValidAPI
		? 'is-valid'
		: 'is-invalid' ),
	);

	useEffect( () => {
		setFormFields( [ ...getFormFieldsBlocks( [], '--' ), ...requestFields ] );
	}, [] )

	function getAPI( prop ) {
		return settings.use_global ? currentTab[ prop ] : ( settings[ prop ] || "" );
	}

	function validateActiveCampaignData() {
		const api = {
			api_key: getAPI( 'api_key' ),
			api_url: getAPI( 'api_url' ),
		};

		getActiveCampaignData( true, api );
	}

	function getActiveCampaignData( isValidate = false, { api_key = '', api_url = '' } ) {
		if ( ! api_key || ! api_url ) {
			onChangeSetting( false, 'isValidAPI' );
			setButtonClass( 'is-invalid' );

			return;
		}

		const endpoint = '/admin/api.php?api_action=list_list';
		const url = api_url + endpoint + '&api_key=' + api_key + '&ids=all&api_output=json';

		setButtonClass( 'loading' );

		jQuery.getJSON( url )
			.success( function( data ) {
				if ( undefined !== data.result_code && data.result_code ) {
					const lists = [];

					for ( var prop in data ) {
						if ( undefined === data[ prop ].id ) {
							continue;
						}
						lists.push( {
							value: data[ prop ].id,
							label: data[ prop ].name,
						} );
					}

					onChange( {
						...settings,
						data: lists,
						isValidAPI: true,
					} );
					setButtonClass( 'is-valid' );
				} else {
					onChangeSetting( false, 'isValidAPI' );
					setButtonClass( 'is-invalid' );
				}
			} )
			.error( function() {
				setButtonClass( 'is-invalid' );
				onChangeSetting( false, 'isValidAPI' );
			} );
	}

	/* eslint-disable jsx-a11y/no-onchange */
	return <>
		<ToggleControl
			key={ 'use_global' }
			label={ label( 'use_global' ) }
			checked={ settings.use_global }
			onChange={ use_global => {
				onChangeSetting( Boolean( use_global ), 'use_global' )
			} }
		/>
		<BaseControl
			label={ label( 'api_data' ) }
			key={ 'activecampaign_input_key' }
		>
			<div className='jet-control-clear-full jet-d-flex-between'>
				<div>
					<TextControl
						key='api_url'
						help={ label( 'api_url' ) }
						className='jet-control-clear'
						disabled={ settings.use_global }
						value={ getAPI( 'api_url' ) }
						onChange={ newVal => onChangeSetting( newVal, 'api_url' ) }
					/>
					<TextControl
						key='api_key'
						help={ label( 'api_key' ) }
						className='jet-control-clear'
						disabled={ settings.use_global }
						value={ getAPI( 'api_key' ) }
						onChange={ newVal => onChangeSetting( newVal, 'api_key' ) }
					/>
				</div>
				<Button
					key={ 'validate_api_key' }
					isPrimary
					onClick={ validateActiveCampaignData }
					className={ `${ buttonClass } jet-form-validate-button` }
				>
					<i className="dashicons"/>
					{ settings.isValidAPI ? label( 'retry_request' ) : label( 'validate_api_key' ) }
				</Button>
			</div>

		</BaseControl>
		<div style={ {
			paddingBottom: '1.2em',
		} }>
			{ help( 'api_key_link_prefix' ) } <a
			href={ help( 'api_key_link' ) }>{ help( 'api_key_link_suffix' ) }</a>
		</div>
		{ settings.isValidAPI && <React.Fragment>
			<SelectControl
				key='activecampaign_select_lists'
				label={ label( 'list_id' ) }
				labelPosition="side"
				value={ settings.list_id }
				onChange={ newVal => onChangeSetting( newVal, 'list_id' ) }
				options={ withPlaceholder( settings.data || [] ) }
			/>
			<TextControl
				key='activecampaign_tags'
				label={ label( 'tags' ) }
				value={ settings.tags }
				help={ help( 'tags' ) }
				onChange={ newVal => onChangeSetting( newVal, 'tags' ) }
			/>
			<ActionFieldsMap
				label={ label( 'fields_map' ) }
				fields={ Object.entries( source.activecampaign_fields ) }
			>
				{ ( { fieldId, fieldData, index } ) => <WrapperRequiredControl
					field={ [ fieldId, fieldData ] }
				>
					<SelectControl
						key={ fieldId + index }
						value={ getMapField( { name: fieldId } ) }
						onChange={ value => setMapField( { nameField: fieldId, value } ) }
						options={ formFieldsList }
					/>
				</WrapperRequiredControl> }
			</ActionFieldsMap>
		</React.Fragment> }
	</>;
	/* eslint-enable jsx-a11y/no-onchange */
}

addAction( 'active_campaign', withSelect( withRequestFields )( ActiveCampaignAction ) )
