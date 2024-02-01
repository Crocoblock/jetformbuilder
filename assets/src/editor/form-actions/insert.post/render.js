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
			id: 'all',
			isSupported: () => true,
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

// eslint-disable-next-line max-lines-per-function, complexity
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
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [] );

	useEffect( () => {
		const id = getActionModifierId( settings );

		setProperties( source.properties[ id ] ?? [] );

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ settings.post_type ] );

	/**
	 * @see https://github.com/Crocoblock/issues-tracker/issues/1315
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
				onChange={ val => onChangeSettingObj( { post_type: val } ) }
			/>
			<SelectControl
				key="post_status"
				className="full-width"
				labelPosition="side"
				value={ settings.post_status }
				options={ source.postStatuses }
				label={ label( 'post_status' ) }
				help={ help( 'post_status' ) }
				onChange={ val => onChangeSettingObj(
					{ post_status: val },
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
			{/* eslint-disable-next-line @wordpress/no-base-control-with-label-without-id */}
			<BaseControl
				label={ label( 'default_meta' ) }
				key="default_meta"
			>
				<JetDefaultMetaControl
					defaultMeta={ settings.default_meta }
					onChange={ val => onChangeSettingObj(
						{ default_meta: val },
					) }
				/>
			</BaseControl>
		</>
	);
	/* eslint-enable jsx-a11y/no-onchange */
}

export default InsertPostRender;
