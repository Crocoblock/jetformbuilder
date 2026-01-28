const { addFilter } = wp.hooks;
const { createHigherOrderComponent } = wp.compose;
const { Fragment } = wp.element;
const { BlockControls } = wp.blockEditor;

const { MacrosFields } = JetFBComponents;
const {	ToolbarGroup } = wp.components;

function toHtmlMacro( name, field ) {
	const macro = String( name ).replace( /^%|%$/g, '' ).trim();

	let repeaterNote = '';
	let data = '';
	if (field.is_repeater) {
		repeaterNote = 'repeater tooltip';
	} else if (field.is_repeater_child) {
		repeaterNote = 'this field can be used only inside repeater - ' + field.repeater_name;
	}

	return `<div data-jfb-macro="${ macro }" >${repeaterNote}</div>`;
}

const withMacrosInserter = createHigherOrderComponent(
	( BlockEdit ) => ( props ) => {
		if ( props.name !== 'core/html' ) {
			return <BlockEdit { ...props } />;
		}

		const { attributes, setAttributes } = props;

		return (
			<Fragment>
				<BlockControls>
					<ToolbarGroup>
						<MacrosFields
							withCurrent
							onClick={ ( name, field ) => {
								const htmlMacro = toHtmlMacro( name, field );
								setAttributes( {
									content: ( attributes.content ?? '' ) + htmlMacro,
								} );
							} }
						/>
						</ToolbarGroup>
				</BlockControls>

				<BlockEdit { ...props } />
			</Fragment>
		);
	},
	'withMacrosInserter'
);

addFilter(
	'editor.BlockEdit',
	'jet-form-builder/macros-inserter',
	withMacrosInserter
);
