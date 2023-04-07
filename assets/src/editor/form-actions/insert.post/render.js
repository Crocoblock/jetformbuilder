import JetDefaultMetaControl from '../../blocks/controls/default-meta';
import PostPropertySelect from '../../components/post.property.select';

const {
	      convertListToFieldsMap,
      } = JetFBActions;
const {
	      ActionFieldsMap,
	      WrapperRequiredControl,
	      DynamicPropertySelect,
      } = JetFBComponents;
const {
	      useSanitizeFieldsMap,
	      useFields,
      } = JetFBHooks;

/**
 * Internal dependencies
 */
const {
	      BaseControl,
	      SelectControl,
      } = wp.components;
const {
	      __,
      } = wp.i18n;
const {
	      useState,
	      useEffect,
      } = wp.element;
const {
	      applyFilters,
      } = wp.hooks;

const modifiers = applyFilters(
	'jet.fb.insert.post.modifiers',
	[
		{
			id: 'product',
			/**
			 * @since 3.0.4 Make sure WooCommerce is installed
			 *
			 * @param settings
			 * @returns {*|boolean}
			 */
			isSupported: settings => (
				JetFormEditorData.wooExist && 'product' === settings.post_type
			),
		},
		{
			id: 'all',
			isSupported: settings => true,
		},
	],
);

const getActionModifierId = settings => {
	for ( const modifier of modifiers ) {
		if ( !modifier.isSupported( settings ) ) {
			continue;
		}

		return modifier.id;
	}
};

function InsertPostRender( props ) {
	const {
		      settings,
		      onChangeSettingObj,
		      source,
		      help,
		      label,
	      } = props;

	const formFields = convertListToFieldsMap( useFields() );

	const [ properties, setProperties ] = useState( () => {
		const id = getActionModifierId( settings );

		return source.properties[ id ] ?? [];
	} );

	useEffect( () => {
		/**
		 * Clear deprecated data
		 *
		 * @since 3.0
		 */
		if ( settings.requestFields?.length ) {
			onChangeSettingObj( { requestFields: null } );
		}
	}, [] );

	useEffect( () => {
		const id = getActionModifierId( settings );

		setProperties( source.properties[ id ] ?? [] );
	}, [ settings.post_type ] );

	/**
	 * @link https://github.com/Crocoblock/issues-tracker/issues/1315
	 */
	useSanitizeFieldsMap();

	/* eslint-disable jsx-a11y/no-onchange */

	return (
		<>
			<SelectControl
				key="post_type"
				className="full-width"
				labelPosition="side"
				value={ settings.post_type }
				options={ source.postTypes }
				label={ label( 'post_type' ) }
				help={ help( 'post_type' ) }
				onChange={ post_type => onChangeSettingObj( { post_type } ) }
			/>
			<SelectControl
				key="post_status"
				className="full-width"
				labelPosition="side"
				value={ settings.post_status }
				options={ source.postStatuses }
				label={ label( 'post_status' ) }
				help={ help( 'post_status' ) }
				onChange={ post_status => onChangeSettingObj(
					{ post_status },
				) }
			/>
			<ActionFieldsMap
				label={ label( 'fields_map' ) }
				key="user_fields_map"
				fields={ formFields }
			>
				<WrapperRequiredControl>
					<DynamicPropertySelect
						dynamic={ [ 'meta_input', 'post_terms' ] }
						properties={ properties }
						parseValue={ value => (
							value.includes( 'jet_tax__' )
							? 'post_terms'
							: 'meta_input'
						) }
					>
						<PostPropertySelect/>
					</DynamicPropertySelect>
				</WrapperRequiredControl>
			</ActionFieldsMap>
			<BaseControl
				label={ label( 'default_meta' ) }
				key="default_meta"
			>
				<JetDefaultMetaControl
					defaultMeta={ settings.default_meta }
					onChange={ default_meta => onChangeSettingObj(
						{ default_meta },
					) }
				/>
			</BaseControl>
		</>
	);
	/* eslint-enable jsx-a11y/no-onchange */
}

export default InsertPostRender;
