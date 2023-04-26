import { name } from './index';
import useCheckedChoiceState from './useCheckedChoiceState';
import ChoiceItemContext from './context';

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

const { classnames } = JetFBActions;

export default function EditAdvancedChoice( props ) {
	const { attributes, setAttributes, clientId } = props;

	const [ isChecked ] = useCheckedChoiceState();

	const className = classnames( {
		'jet-form-builder-choice--item': true,
		'is-checked': isChecked,
	} );

	const blockProps       = useBlockProps( { className } );
	const innerBlocksProps = useInnerBlocksProps( blockProps, {
		template: [ [ 'core/paragraph', {} ] ],
	} );

	return <ChoiceItemContext.Provider value={ { clientId } }>
		<li { ...innerBlocksProps }/>
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