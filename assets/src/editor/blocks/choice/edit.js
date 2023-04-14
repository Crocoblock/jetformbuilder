import { name } from './index';

const { __ } = wp.i18n;

const {
	      InspectorControls,
	      useBlockProps,
	      useInnerBlocksProps,
      } = wp.blockEditor;

const {
	      PanelBody,
	      TextControl,
      } = wp.components;

export default function EditAdvancedChoice( props ) {
	const { attributes, setAttributes } = props;

	const blockProps       = useBlockProps( {
		className: 'jet-form-builder-choice--item',
	} );
	const innerBlocksProps = useInnerBlocksProps( blockProps );

	return <>
		<li { ...innerBlocksProps }/>
		<InspectorControls>
			<PanelBody title={ __( 'General', 'jet-form-builder' ) }>
				<TextControl
					label={ __( 'Value', 'jet-form-builder' ) }
					value={ attributes.value }
					onChange={ label => setAttributes( { label } ) }
				/>
				<TextControl
					label={ __(
						'Value for Calculated Field',
						'jet-form-builder',
					) }
					help={ __(
						`This value will be used for calculations 
in the Calculated Field.`,
						'jet-form-builder',
					) }
					value={ attributes.calc_value }
					onChange={ calc_value => setAttributes( { calc_value } ) }
				/>
			</PanelBody>
		</InspectorControls>
	</>;
}