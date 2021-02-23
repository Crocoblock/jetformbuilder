import Tools from "../helpers/tools";
import JetFieldsMapControl from "../blocks/controls/fields-map";
import ActionMessages from "../components/actions/action-messages";
import { addAction } from "../helpers/action-helper";
import { getFormFieldsBlocks } from "../helpers/blocks-helper";

/**
 * Internal dependencies
 */
const {
	TextControl,
	ToggleControl,
	SelectControl,
	BaseControl
} = wp.components;

const { __ } = wp.i18n;

const {
	useState
} = wp.element;

addAction( 'update_user', class UpdateUserAction extends wp.element.Component {

	constructor( props ) {
		super( props );

		this.fields = getFormFieldsBlocks();
		this.metaOption = 'user_meta';

		this.state = {
			type: '',
		};
	}

	getFieldMap( name ) {
		const settings = this.props.settings;

		if ( settings && settings.fields_map && settings.fields_map[ name ] ) {
			return settings.fields_map[ name ];
		}
		return '';
	}

	render() {
		const { settings, onChange, source, label, help } = this.props;

		const onChangeValue = ( value, key ) => {
			onChange( {
				...settings,
				[ key ]: value
			} );
		};

		/* eslint-disable jsx-a11y/no-onchange */
		return ( <div key="update_user">
			<BaseControl
				label={ label( 'fields_map' ) }
				key='user_fields_map'
			>
				<div className='jet-user-meta-rows'>
					{ this.fields.map( ( field, index ) => {

						const fieldData = this.getFieldMap( field.name );

						return <div
							className="jet-user-meta__row"
							key={ 'user_meta_' + field.name + index }
						>
							<JetFieldsMapControl
								key={ field.name + index }
								fieldValue={ fieldData }
								fieldName={ field.name }
								index={ index }
								metaProp='user_meta'
								fieldsMap={ settings.fields_map }
								fieldTypes={ source.userFields }
								onChange={ ( newValue ) => {
									onChangeValue( newValue, 'fields_map' );
								} }
							/>
						</div>;
					} ) }
				</div>
			</BaseControl>
			<SelectControl
				label={ label( 'user_role' ) }
				labelPosition="side"
				key="user_role_list"
				className="full-width"
				value={ settings.user_role }
				options={ source.userRoles }
				onChange={ newValue => onChangeValue( newValue, 'user_role' ) }
			/>
			<ActionMessages
				{ ...this.props }
			/>
		</div> );
		/* eslint-enable jsx-a11y/no-onchange */
	}
} );
