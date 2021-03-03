import { ValidateButton } from "../components/validate-button";
import IntegrationComponent from "./integration-component";
import WrapperRequiredControl from "../components/wrapper-required-control";
import { addAction } from "../helpers/action-helper";

/**
 * Internal dependencies
 */
const {
	TextControl,
	ToggleControl,
	SelectControl,
	BaseControl,
	Button,
	__experimentalNumberControl,
} = wp.components;

let { NumberControl } = wp.components;

if ( typeof NumberControl === 'undefined' ) {
	NumberControl = __experimentalNumberControl;
}

const { __ } = wp.i18n;

const {
	useState
} = wp.element;

addAction( 'getresponse', class GetResponseAction extends IntegrationComponent {

	getFields() {
		const settings = this.props.settings;

		if ( settings.data && settings.data.fields ) {
			return Object.entries( settings.data.fields );
		}
		return [];
	}

	getLists() {
		const settings = this.props.settings;

		if ( settings.data && settings.data.lists ) {
			return this.formatEntriesArray( settings.data.lists );
		}
		return [];
	}

	formatEntriesArray( entries = [], isNeedPlaceholder = true ) {
		const placeholder = {
			label: '--'
		};
		if ( ! entries ) {
			return [];
		}

		const options = Object.entries( entries ).map( ( [ value, label ] ) => {
			return { value, label };
		} );

		return isNeedPlaceholder ? [ placeholder, ...options ] : options;
	}

	render() {
		const { settings, onChange, source, label, help } = this.props;
		const fields = this.getFields();

		/* eslint-disable jsx-a11y/no-onchange */
		return ( <React.Fragment key="getresponse">
			<BaseControl
				key={ 'getresponse_input_key' }
				className="input-with-button"
			>
				<TextControl
					key='api_key'
					label={ label( 'api_key' ) }
					value={ settings.api_key }
					onChange={ newVal => this.onChangeSetting( newVal, 'api_key' ) }
				/>
				<Button
					key={ 'validate_api_key' }
					isPrimary
					onClick={ this.validateAPIKey }
					className={ this.state.className.join( ' ' ) + ' jet-form-validate-button' }
				>
					<i className="dashicons"/>
					{ label( 'validate_api_key' ) }
				</Button>
			</BaseControl>
			<div/>
			<div className='margin-bottom--small'>{ help( 'api_key_link_prefix' ) } <a
				href={ help( 'api_key_link' ) }>{ help( 'api_key_link_suffix' ) }</a>
			</div>
			{ settings.isValidAPI && <React.Fragment>
				<BaseControl
					key='getresponse_select_lists'
					className='input-with-button'
				>
					<SelectControl
						key='list_id'
						className="full-width"
						label={ label( 'list_id' ) }
						labelPosition="side"
						value={ settings.list_id }
						onChange={ newVal => this.onChangeSetting( newVal, 'list_id' ) }
						options={ this.getLists() }
					/>
					<Button
						key={ 'update_list_ids' }
						isPrimary
						onClick={ this.getApiData }
					>
						{ label( 'update_list_ids' ) }
					</Button>
				</BaseControl>
				<BaseControl
					key={ 'getresponse_day_of_cycle' }
				>
					<NumberControl
						key='day_of_cycle'
						label={ label( 'day_of_cycle' ) }
						labelPosition="side"
						value={ settings.day_of_cycle }
						onChange={ newVal => this.onChangeSetting( Number( newVal ), 'day_of_cycle' ) }
					/>
				</BaseControl>
				<BaseControl
					label={ label( 'fields_map' ) }
					key='getresponse_fields_map'
				>
					<div className='jet-user-fields-map__list'>
						{ fields.map( ( [ fieldName, fieldData ], index ) => {

							return <WrapperRequiredControl
								field={ [ fieldName, fieldData ] }
							>
								<SelectControl
									className="full-width"
									key={ fieldName + index }
									value={ this.getFieldDefault( fieldName ) }
									onChange={ value => this.onChangeFieldMap( value, fieldName ) }
									options={ this.formFieldsList }
								/>
							</WrapperRequiredControl>;
						} ) }
					</div>
				</BaseControl>
			</React.Fragment> }
		</React.Fragment> );
		/* eslint-enable jsx-a11y/no-onchange */
	}
} );
