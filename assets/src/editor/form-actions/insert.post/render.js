import JetDefaultMetaControl from '../../blocks/controls/default-meta';
import PostPropertySelect from '../../components/post.property.select';

const {
	      addAction,
	      getFormFieldsBlocks,
	      convertListToFieldsMap,
      } = JetFBActions;
const {
	      ActionFieldsMap,
	      WrapperRequiredControl,
	      DynamicPropertySelect,
      } = JetFBComponents;
const {
	      withRequestFields,
	      useSanitizeFieldsMap,
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
	      withSelect,
      } = wp.data;
const {
	      applyFilters,
      } = wp.hooks;

const modifiers = applyFilters(
	'jet.fb.insert.post.modifiers',
	[
		{
			id: 'product',
			isSupported: settings => 'product' === settings.post_type,
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
		      requestFields,
	      } = props;

	const [ formFields, setFormFields ] = useState( [] );
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
		setFormFields(
			convertListToFieldsMap( getFormFieldsBlocks(), requestFields ),
		);
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

export default withSelect( withRequestFields )( InsertPostRender );
