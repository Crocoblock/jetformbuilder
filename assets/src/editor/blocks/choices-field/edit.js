import { name } from './index';
import Placeholder from './placeholder';
import ChoicesFieldContext from './context';

const { __ } = wp.i18n;

let {
	    InspectorControls,
	    useBlockProps,
	    useInnerBlocksProps,
    } = wp.blockEditor;

const {
	      ToolBarFields,
	      BlockLabel,
	      BlockName,
	      BlockDescription,
	      StyleManagerEditControls,
      } = JetFBComponents;

const {
	      PanelBody,
	      ToggleControl,
      } = wp.components;

const {
	      useJetStyle,
	      useUniqueNameOnDuplicate,
      } = JetFBHooks;

const {
	      useState,
      } = wp.element;

const ALLOWED_BLOCKS = [ 'jet-forms/choice' ];

const DefaultPlaceHolder = (
	<>
		<li className="jet-form-builder-choice--item">
			{ __( 'Yes', 'jet-form-builder' ) }
		</li>
		<li className="jet-form-builder-choice--item">
			{ __( 'No', 'jet-form-builder' ) }
		</li>
	</>
);

function useCreateCurrentChoice( { allow_multiple } ) {
	const [ current, setCurrent ] = useState(
		() => allow_multiple ? [] : '',
	);

	const updateCurrent = value => {
		if ( !allow_multiple ) {
			if ( current !== value ) {
				setCurrent( value );
			}

			return;
		}

		const tempCurrent = Array.isArray( current ) ? current : [ current ];

		if ( !tempCurrent.includes( value ) ) {
			setCurrent( [ ...tempCurrent, value ] );

			return;
		}

		setCurrent( tempCurrent.filter(
			item => item !== value,
		) );
	};

	return { current, updateCurrent };
}

export default function EditAdvancedChoicesField( props ) {
	const {
		      isSelected,
		      attributes,
		      setAttributes,
	      } = props;

	useUniqueNameOnDuplicate();

	const jetStyle = useJetStyle();

	const blockProps       = useBlockProps( {
		className: 'jet-form-builder-choice',
		style: jetStyle,
	} );
	const innerBlocksProps = useInnerBlocksProps( blockProps, {
		allowedBlocks: ALLOWED_BLOCKS,
		placeholder: isSelected ? <Placeholder/> : DefaultPlaceHolder,
	} );

	const state = useCreateCurrentChoice( attributes );

	return <ChoicesFieldContext.Provider value={ state }>
		<ToolBarFields/>
		<StyleManagerEditControls optionVars={ {
			'--choice-bg': {
				label: __( 'Choice background', 'jet-form-builder' ),
			},
			'--choice-checked-bg': {
				label: __( 'Choice checked background', 'jet-form-builder' ),
			},
		} }/>
		<InspectorControls>
			<PanelBody title={ __( 'General', 'jet-form-builder' ) }>
				<BlockLabel/>
				<BlockName/>
				<BlockDescription/>
			</PanelBody>
			<PanelBody title={ __( 'Value', 'jet-form-builder' ) }>
				<ToggleControl
					label={ __( 'Allow multiple choices', 'jet-form-builder' ) }
					checked={ attributes.allow_multiple }
					onChange={
						allow_multiple => setAttributes( { allow_multiple } )
					}
				/>
			</PanelBody>
		</InspectorControls>
		<ul { ...innerBlocksProps } />
	</ChoicesFieldContext.Provider>;
}