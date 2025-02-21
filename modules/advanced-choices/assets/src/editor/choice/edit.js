import useCheckedChoiceState from './useCheckedChoiceState';
import ChoiceItemContext from './context';
import ToggleCheckStateButton from './ToggleCheckStateButton';
import useAllowedBlocks from './useAllowedBlocks';
import preview from './preview';

const { __ } = wp.i18n;

const {
	      InspectorControls,
	      useBlockProps,
	      useInnerBlocksProps,
	      BlockControls,
      } = wp.blockEditor;

const {
	      PanelBody,
	      TextControl,
      } = wp.components;

const { classnames } = JetFBActions;

export default function EditAdvancedChoice( props ) {
	const { attributes, setAttributes, clientId } = props;

	const [ isChecked ] = useCheckedChoiceState();

	const className = classnames( {
		'jet-form-builder-choice--item': true,
		'is-checked': isChecked,
		'jfb-collapse-block-margin': true,
		'jfb-collapse-block-border': true,
	} );

	const allowedBlocks = useAllowedBlocks();

	const blockProps       = useBlockProps( { className } );
	const innerBlocksProps = useInnerBlocksProps( blockProps, {
		template: [ [ 'core/paragraph', {} ] ],
		allowedBlocks,
	} );

	if ( attributes.isPreview ) {
		return <div style={ {
			width: '100%',
			display: 'flex',
			justifyContent: 'center',
		} }>
			{ preview }
		</div>;
	}

	return <ChoiceItemContext.Provider value={ { clientId } }>
		<li { ...innerBlocksProps }/>
		<BlockControls group={ 'block' }>
			<ToggleCheckStateButton/>
		</BlockControls>
		<InspectorControls>
			<PanelBody title={ __( 'General', 'jet-form-builder' ) }>
				<TextControl
					label={ __( 'Value', 'jet-form-builder' ) }
					value={ attributes.value }
					onChange={ val => setAttributes( {
						value: val.trim(),
					} ) }
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
					onChange={ val => setAttributes( {
						calc_value: val.trim(),
					} ) }
				/>
			</PanelBody>
		</InspectorControls>
	</ChoiceItemContext.Provider>;
}