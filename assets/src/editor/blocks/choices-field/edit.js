import { name } from './index';
import Placeholder from './placeholder';
import ChoicesFieldContext from './context';
import AddChoiceButton from './AddChoiceButton';

const { __ } = wp.i18n;

let {
	    InspectorControls,
	    useBlockProps,
	    useInnerBlocksProps,
	    useBlockEditContext,
    } = wp.blockEditor;

const {
	      ToolBarFields,
	      BlockLabel,
	      BlockName,
	      BlockDescription,
	      BlockAdvancedValue,
	      FieldWrapper,
	      StylePanel,
	      StyleColorItem,
	      StyleColorItemsWrapper,
      } = JetFBComponents;

const {
	      PanelBody,
	      ToggleControl,
      } = wp.components;

const {
	      useJetStyle,
	      useUniqueNameOnDuplicate,
	      useUniqKey,
      } = JetFBHooks;

const {
	      useState,
      } = wp.element;

const ALLOWED_BLOCKS = [ 'jet-forms/choice' ];

const DefaultPlaceHolder = () => {
	const { clientId } = useBlockEditContext();

	const id1 = clientId + 'sample-control-1';
	const id2 = clientId + 'sample-control-2';

	return <>
		<li className="jet-form-builder-choice--item">
			<span className={ 'jet-form-builder-choice--item-control' }>
				<input
					id={ id1 }
					type="checkbox"
					className={ 'jet-form-builder-choice--item-control-input' }
				/>
				<label htmlFor={ id1 }>
					{ __( 'Item #1', 'jet-form-builder' ) }
				</label>
			</span>
		</li>
		<li className="jet-form-builder-choice--item">
			<span className={ 'jet-form-builder-choice--item-control' }>
				<input
					id={ id2 }
					type="checkbox"
					className={ 'jet-form-builder-choice--item-control-input' }
				/>
				<label htmlFor={ id2 }>
					{ __( 'Item #2', 'jet-form-builder' ) }
				</label>
			</span>
		</li>
	</>;
};

function useCreateCurrentChoice( { allow_multiple } ) {
	const [ current, setCurrent ] = useState(
		() => allow_multiple ? [] : '',
	);

	const updateCurrent = value => {
		if ( !allow_multiple ) {
			setCurrent( current !== value ? value : '' );

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
	const uniqKey  = useUniqKey();

	const blockProps = useBlockProps( { style: jetStyle } );

	const innerBlocksProps = useInnerBlocksProps( {
		className: 'jet-form-builder-choice',
	}, {
		allowedBlocks: ALLOWED_BLOCKS,
		placeholder: isSelected ? <Placeholder/> : <DefaultPlaceHolder/>,
	} );

	const state = useCreateCurrentChoice( attributes );

	return <ChoicesFieldContext.Provider value={ state }>
		<ToolBarFields>
			<AddChoiceButton/>
		</ToolBarFields>
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
					help={ __(
						`Enable this option if you need to be able 
to select multiple options`,
						'jet-form-builder',
					) }
					onChange={
						allow_multiple => setAttributes( { allow_multiple } )
					}
				/>
				<BlockAdvancedValue
					help={ attributes.allow_multiple && __(
						`You should list the choice 
values separated by commas that should be selected by default. But this 
is not the case when you use a dynamic value using a preset, macros, etc.`,
						'jet-form-builder',
					) }
				/>
			</PanelBody>
		</InspectorControls>
		<InspectorControls group="styles">
			<StylePanel
				label={ __( 'Single choice color', 'jet-form-builder' ) }
			>
				<StyleColorItemsWrapper>
					<StyleColorItem
						cssVar="--choice-text"
						label={ __( 'Text Choice', 'jet-form-builder' ) }
					/>
					<StyleColorItem
						cssVar="--choice-bg"
						label={ __( 'Background Choice', 'jet-form-builder' ) }
					/>
				</StyleColorItemsWrapper>
			</StylePanel>
			<StylePanel
				label={ __( 'Hover single choice color', 'jet-form-builder' ) }
			>
				<StyleColorItemsWrapper>
					<StyleColorItem
						cssVar="--choice-hover-text"
						label={ __( 'Text Choice', 'jet-form-builder' ) }
					/>
					<StyleColorItem
						cssVar="--choice-hover-bg"
						label={ __( 'Background Choice', 'jet-form-builder' ) }
					/>
				</StyleColorItemsWrapper>
			</StylePanel>
			<StylePanel
				label={ __( 'Checked single choice color',
					'jet-form-builder' ) }
			>
				<StyleColorItemsWrapper>
					<StyleColorItem
						cssVar="--choice-checked-text"
						label={ __( 'Text Choice', 'jet-form-builder' ) }
					/>
					<StyleColorItem
						cssVar="--choice-checked-bg"
						label={ __( 'Background Choice', 'jet-form-builder' ) }
					/>
				</StyleColorItemsWrapper>
			</StylePanel>
			<StylePanel
				label={ __( 'Border single choice', 'jet-form-builder' ) }
			>

			</StylePanel>
		</InspectorControls>
		<div { ...blockProps } key={ uniqKey( 'viewBlock' ) }>
			<FieldWrapper { ...props } key={ uniqKey( 'viewBlockWrapper' ) }>
				<ul
					{ ...innerBlocksProps }
				/>
			</FieldWrapper>
		</div>
	</ChoicesFieldContext.Provider>;
}