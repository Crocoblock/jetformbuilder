import JetFieldsMapControl from '../blocks/controls/fields-map';
import Tools from "../tools/tools";
import JetDefaultMetaControl from "../blocks/controls/default-meta";

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

window.jetFormDefaultActions[ 'insert_post' ] = class InsertPostAction extends wp.element.Component {

	getFieldMap( name ) {
		const settings = this.props.settings;

		if ( settings && settings.fields_map && settings.fields_map[ name ] ) {
			return settings.fields_map[ name ];
		}
		return '';
	}

	isRenderHelp( fields ) {
		return window.jetFormInsertPostData.labels.fields_map_help && ! fields.length;
	}

	render() {

		const settings = this.props.settings;
		const onChange = this.props.onChange;

		const onChangeValue = ( value, key ) => {
			onChange( {
				...settings,
				[ key ]: value
			} );
		};

		const formFields = Tools.getFormFieldsBlocks();

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
				{ this.isRenderHelp( formFields ) &&
				<div className="jet-fields-map__help">
					{ window.jetFormInsertPostData.labels.fields_map_help }
				</div>
				}
				<div className="jet-fields-map__list">
					{ formFields && formFields.map( ( field, index ) => {

						const fieldData = this.getFieldMap( field.name );

						return <div
							className="jet-fields-map__row"
							key={ 'field_map_' + field.name + index }
						>
							<div className="jet-fields-map__item-field">{ field.name }</div>
							<JetFieldsMapControl
								key={ field.name + index }
								fieldValue={ fieldData }
								fieldName={ field.name }
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
			<BaseControl
				label={ window.jetFormInsertPostData.labels.default_meta }
				key="default_meta"
			>
				<JetDefaultMetaControl
					defaultMeta={ settings.default_meta }
					onChange={ ( newValue ) => {
						onChangeValue( newValue, 'default_meta' );
					} }
				/>
			</BaseControl>
		</div> );
		/* eslint-enable jsx-a11y/no-onchange */
	}

}
