import JetFieldsMapControl from '../blocks/controls/fields-map';
/**
 * Internal dependencies
 */
const {
	TextControl,
	TextareaControl,
	SelectControl,
	Button,
	Popover,
	PanelBody,
	PanelRow,
	BaseControl
} = wp.components;

const { __ } = wp.i18n;

const {
	useState
} = wp.element;

window.jetFormDefaultActions = window.jetFormDefaultActions || {};

window.jetFormDefaultActions['insert_post'] = ( settings, onChange ) => {

	const onChangeValue = ( value, key ) => {
		onChange( {
			...settings,
			[ key ]: value
		} );
	};

	const formFields = []
	const blocksRecursiveIterator = ( blocks ) => {

		blocks = blocks || wp.data.select( 'core/block-editor' ).getBlocks();

		blocks.map( ( block ) => {

			if ( block.name.includes( 'jet-forms/' ) && block.attributes.name ) {
				formFields.push( {
					value: block.attributes.name,
					label: block.attributes.label || block.attributes.name,
				} );
			}

			if ( block.innerBlocks.length ) {
				blocksRecursiveIterator( block.innerBlocks );
			}

		} );

	};

	if ( ! settings.fields_map ) {
		onChangeValue( {}, 'fields_map' );
	}

	blocksRecursiveIterator();

	/* eslint-disable jsx-a11y/no-onchange */
	return ( <div key="insert_post">
		<SelectControl
			key="post_type"
			value={ settings.post_type }
			options={ window.jetFormInsertPostData.postTypes }
			label={ window.jetFormInsertPostData.labels.post_type }
			help={ window.jetFormInsertPostData.labels.post_type_help }
			onChange={ ( newValue ) => {
				onChangeValue( newValue, 'post_type' );
			} }
		/>
		<SelectControl
			key="post_status"
			value={ settings.post_status }
			options={ window.jetFormInsertPostData.postStatuses }
			label={ window.jetFormInsertPostData.labels.post_status }
			help={ window.jetFormInsertPostData.labels.post_status_help }
			onChange={ ( newValue ) => {
				onChangeValue( newValue, 'post_status' );
			} }
		/>
		<BaseControl
			label={ window.jetFormInsertPostData.labels.fields_map }
			key="fields_map"
		>
			{ window.jetFormInsertPostData.labels.fields_map_help && <div className="jet-fields-map__help">{ window.jetFormInsertPostData.labels.fields_map_help }</div> }
			<div className="jet-fields-map__list">
				{ formFields && formFields.map( ( field, index ) => {
					var fieldData = settings.fields_map[ field.value ];

					if ( ! fieldData ) {
						fieldData = {};
					}

					return <div
						className="jet-fields-map__row"
						key={ 'field_map_' + field.value + index }
					>
						<div className="jet-fields-map__item-field">{ field.value }</div>
						<JetFieldsMapControl
							//value={ fieldData }
							type={ fieldData.type }
							name={ fieldData.name }
							field={ field.value }
							index={ index }
							fieldsMap={ settings.fields_map }
							taxonomiesList={ window.jetFormInsertPostData.taxonomies }
							fieldTypes={ window.jetFormInsertPostData.fieldsMapOptions }
							onChange={ ( newValue ) => {
								onChangeValue( newValue, 'fields_map' );
							} }
						/>
					</div>;
				} ) }
			</div>
		</BaseControl>
	</div> );
	/* eslint-enable jsx-a11y/no-onchange */

}
