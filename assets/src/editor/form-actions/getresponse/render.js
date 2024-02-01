import IntegrationComponent from '../integration-component';

const {
	      globalTab,
      } = JetFBActions;

const {
	      WrapperRequiredControl,
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
	      __experimentalNumberControl,
      } = wp.components;

let { NumberControl } = wp.components;

if ( typeof NumberControl === 'undefined' ) {
	NumberControl = __experimentalNumberControl;
}

const { withRequestFields } = JetFBHooks;
const { withSelect }        = wp.data;

class GetResponseAction extends IntegrationComponent {
	constructor( props ) {
		super( props );

		this.formFieldsList = [
			...this.formFieldsList,
			...this.props.requestFields,
		];
	}

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
			return GetResponseAction.formatEntriesArray( settings.data.lists );
		}
		return [];
	}

	static formatEntriesArray( entries = [], isNeedPlaceholder = true ) {
		const placeholder = {
			label: '--',
		};
		if ( !entries ) {
			return [];
		}

		const options = Object.entries( entries ).map( ( [ value, label ] ) => {
			return { value, label };
		} );

		return isNeedPlaceholder ? [ placeholder, ...options ] : options;
	}

	/* eslint-disable
		 no-unused-expressions,
		 @wordpress/no-base-control-with-label-without-id
	 */

	// eslint-disable-next-line max-lines-per-function, complexity
	render() {
		const { settings, label, help } = this.props;
		const fields                    = this.getFields();
		const currentTab                = globalTab(
			{ slug: 'get-response-tab' } );

		/* eslint-disable jsx-a11y/no-onchange */
		return (
			<>
				<ToggleControl
					key={ 'use_global' }
					label={ label( 'use_global' ) }
					checked={ settings.use_global }
					onChange={ useGlobal => {
						this.onChangeSetting( Boolean( useGlobal ),
							'use_global' );
					} }
				/>
				<BaseControl
					label={ label( 'api_key' ) }
				>
					<div className="jet-control-clear-full jet-d-flex-between">
						<TextControl
							disabled={ settings.use_global }
							value={ settings.use_global
							        ? currentTab.api_key
							        : settings.api_key
							}
							onChange={ newVal => this.onChangeSetting( newVal,
								'api_key' ) }
						/>
						<Button
							isPrimary
							onClick={ () => {
								settings.use_global
								? this.validateAPIKey( currentTab.api_key )
								: this.validateAPIKey();
							} }
							className={ this.state.className.join( ' ' ) +
								' jet-form-validate-button' }
						>
							<i className="dashicons"/>
							{ label( 'validate_api_key' ) }
						</Button>
					</div>
				</BaseControl>
				<div className="jfb-margin-bottom--small">{ help(
					'api_key_link_prefix' ) } <a
					href={ help( 'api_key_link' ) }>{ help(
					'api_key_link_suffix' ) }</a>
				</div>
				{ settings.isValidAPI && <>
					<BaseControl
						label={ label( 'list_id' ) }
					>
						<div
							className="jet-control-clear-full jet-d-flex-between">
							<SelectControl
								key="list_id"
								className="full-width"
								value={ settings.list_id }
								onChange={ newVal => this.onChangeSetting(
									newVal,
									'list_id' ) }
								options={ this.getLists() }
							/>
							<Button
								key={ 'update_list_ids' }
								isPrimary
								onClick={ () => {
									settings.use_global
									? this.getApiData( settings.api_key )
									: this.getApiData( currentTab.api_key );
								} }
							>
								{ label( 'update_list_ids' ) }
							</Button>
						</div>
					</BaseControl>
					<BaseControl
						label={ label( 'day_of_cycle' ) }
					>
						<NumberControl
							className="full-width jet-control-clear-full"
							value={ settings.day_of_cycle }
							onChange={ newVal => this.onChangeSetting(
								Number( newVal ), 'day_of_cycle' ) }
						/>
					</BaseControl>
					<BaseControl
						label={ label( 'fields_map' ) }
						key="getresponse_fields_map"
					>
						<div className="jet-user-fields-map__list">
							{ fields.map(
								( [ fieldName, fieldData ], index ) => {

									return <WrapperRequiredControl
										key={ fieldName + index }
										field={ [ fieldName, fieldData ] }
									>
										<SelectControl
											className="full-width"
											key={ fieldName + index }
											value={ this.getFieldDefault(
												fieldName ) }
											onChange={ value => this.onChangeFieldMap(
												value, fieldName ) }
											options={ this.formFieldsList }
										/>
									</WrapperRequiredControl>;
								} ) }
						</div>
					</BaseControl>
				</> }
			</>
		);
		/* eslint-enable */
	}

}

export default withSelect( withRequestFields )( GetResponseAction );
