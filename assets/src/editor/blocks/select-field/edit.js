import { SelectRadioCheckPlaceholder } from '../../components/base-select-check-radio/select-radio-check-placeholder';
import SelectRadioCheck from '../../components/base-select-check-radio/select-radio-check';

const { __ } = wp.i18n;
const { applyFilters } = wp.hooks;

const {
	ToolBarFields,
	GeneralFields,
	AdvancedFields,
	FieldControl,
	HorizontalLine,
} = JetFBComponents;

const {
	BlockControls,
	InspectorControls,
	useBlockProps,
} = wp.blockEditor ? wp.blockEditor : wp.editor;

const {
	ToggleControl,
} = wp.components;

/*const { registerPlugin } = wp.plugins;
const { PluginBlockSettingsMenuItem } = wp.editPost;

const PluginBlockSettingsMenuGroupTest = () => (
	<PluginBlockSettingsMenuItem
		allowedBlocks={ [ 'jet-forms/select-field' ] }
		icon="smiley"
		label="Read about Hierarchical Select addon"
		onClick={ () => {
			window.open( 'https://jetformbuilder.com/addons/hierarchical-select/', '_blank' );
		} }
	/>
);

registerPlugin( 'block-settings-menu-group-test', {
	render: PluginBlockSettingsMenuGroupTest,
} );*/

export default function SelectEdit( props ) {

	const {
		attributes,
		setAttributes,
		isSelected,
		editProps: { uniqKey, attrHelp },
	} = props;

	const blockProps = useBlockProps();

	return [
		<ToolBarFields
			key={ uniqKey( 'ToolBarFields' ) }
			{ ...props }
		/>,
		isSelected && <InspectorControls
			key={ uniqKey( 'InspectorControls' ) }
		>
			<GeneralFields
				key={ uniqKey( 'GeneralFields' ) }
				{ ...props }
			/>
			<AdvancedFields
				key={ uniqKey( 'AdvancedFields' ) }
				{ ...props }
			/>
		</InspectorControls>,
		<div key={ uniqKey( 'viewBlock' ) } { ...blockProps }>
			<SelectRadioCheckPlaceholder
				scriptData={ window.JetFormSelectFieldData }
				{ ...props }
			/>
			<SelectRadioCheck { ...props }>
				<ToggleControl
					key='switch_on_change'
					label={ __( 'Switch page on change' ) }
					checked={ attributes.switch_on_change }
					help={ attrHelp( 'switch_on_change' ) }
					onChange={ ( newValue ) => {
						setAttributes( { switch_on_change: Boolean( newValue ) } );
					} }
				/>
				<FieldControl
					type='custom_settings'
					key={ uniqKey( 'customSettingsFields' ) }
					{ ...props }
				/>
			</SelectRadioCheck>
		</div>
	];
}