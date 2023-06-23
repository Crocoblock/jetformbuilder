import preview from './preview';

const { __ } = wp.i18n;

const {
	      PanelBody,
      } = wp.components;

const {
	      BlockClassName,
      } = JetFBComponents;
const {
	      useUniqKey,
      } = JetFBHooks;

const {
	      InspectorControls,
	      useBlockProps,
      } = wp.blockEditor;

export default function FormBreakStart( props ) {
	const blockProps = useBlockProps(
		{ className: 'jet-form-builder__bottom-line' },
	);

	const uniqKey = useUniqKey();

	if ( props.attributes.isPreview ) {
		return <div style={ {
			width: '100%',
			display: 'flex',
			justifyContent: 'center',
		} }>
			{ preview }
		</div>;
	}

	return [
		<InspectorControls key={ uniqKey( 'InspectorControls' ) }>
			<PanelBody
				title={ __( 'Advanced', 'jet-form-builder' ) }
			>
				<BlockClassName/>
			</PanelBody>
		</InspectorControls>,
		<div key={ uniqKey( 'viewBlock' ) } { ...blockProps }>
			<span>{ __( 'Form Break Start', 'jet-form-builder' ) }</span>
		</div>,
	];
}