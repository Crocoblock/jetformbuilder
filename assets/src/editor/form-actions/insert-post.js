import JetFieldsMapControl from '../blocks/controls/fields-map';
import Tools from "../helpers/tools";
import JetDefaultMetaControl from "../blocks/controls/default-meta";
import { addAction } from "../helpers/action-helper";
import { getFormFieldsBlocks } from "../helpers/blocks-helper";

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

addAction( 'insert_post', class InsertPostAction extends wp.element.Component {

	getFieldMap( name ) {
		const settings = this.props.settings;

		if ( settings && settings.fields_map && settings.fields_map[ name ] ) {
			return settings.fields_map[ name ];
		}
		return '';
	}

	isRenderHelp( fields ) {
		const { help } = this.props;
		return help( 'fields_map' ) && ! fields.length;
	}

	render() {
		const { settings, onChange, source, label, help } = this.props;

		const onChangeValue = ( value, key ) => {
			onChange( {
				...settings,
				[ key ]: value
			} );
		};

		const formFields = getFormFieldsBlocks();

		/* eslint-disable jsx-a11y/no-onchange */
		return ( <div key="insert_post">
			<SelectControl
				key="post_type"
				className="full-width"
				labelPosition="side"
				value={ settings.post_type }
				options={ source.postTypes }
				label={ label( 'post_type' ) }
				help={ help( 'post_type' ) }
				onChange={ newValue => onChangeValue( newValue, 'post_type' ) }
			/>
			<SelectControl
				key="post_status"
				className="full-width"
				labelPosition="side"
				value={ settings.post_status }
				options={ source.postStatuses }
				label={ label( 'post_status' ) }
				help={ help( 'post_status' ) }
				onChange={ newValue => onChangeValue( newValue, 'post_status' ) }
			/>
			<BaseControl
				label={ label( 'fields_map' ) }
				key="fields_map"
			>
				{ this.isRenderHelp( formFields ) &&
				<div className="jet-fields-map__help">
					{ help( 'fields_map' ) }
				</div>
				}
				<div className="jet-fields-map__list">
					{ formFields && formFields.map( ( field, index ) => {

						const fieldData = this.getFieldMap( field.name );

						return <div
							className="jet-fields-map__row"
							key={ 'field_map_' + field.name + index }
						>
							<JetFieldsMapControl
								key={ field.name + index }
								fieldValue={ fieldData }
								fieldName={ field.name }
								index={ index }
								fieldsMap={ settings.fields_map }
								taxonomiesList={ source.taxonomies }
								fieldTypes={ source.fieldsMapOptions }
								onChange={ ( newValue ) => {
									onChangeValue( newValue, 'fields_map' );
								} }
							/>
						</div>;
					} ) }
				</div>
			</BaseControl>
			<BaseControl
				label={ label( 'default_meta' ) }
				key="default_meta"
			>
				<JetDefaultMetaControl
					defaultMeta={ settings.default_meta }
					onChange={ newValue => onChangeValue( newValue, 'default_meta' ) }
				/>
			</BaseControl>
		</div> );
		/* eslint-enable jsx-a11y/no-onchange */
	}
} );
