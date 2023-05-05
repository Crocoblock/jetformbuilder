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
	      StyleBorderItem,
	      StyleBorderRadiusItem,
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

const baseProps = {
	className: 'jet-form-builder-choice',
};

export default function EditAdvancedChoicesField( props ) {
	const {
		      isSelected,
		      attributes,
		      setAttributes,
	      } = props;

	useUniqueNameOnDuplicate();

	const uniqKey    = useUniqKey();
	const blockProps = useBlockProps();
	const jetStyle   = useJetStyle( baseProps );

	const innerBlocksProps = useInnerBlocksProps( jetStyle, {
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
				label={ __( 'Default choice', 'jet-form-builder' ) }
			>
				<StyleColorItemsWrapper>
					<StyleColorItem
						cssVar="--jfb-choice-text"
						label={ __( 'Text Choice', 'jet-form-builder' ) }
					/>
					<StyleColorItem
						cssVar="--jfb-choice-bg"
						label={ __( 'Background Choice', 'jet-form-builder' ) }
					/>
				</StyleColorItemsWrapper>
				<StyleBorderItem
					cssVar="--jfb-choice-border"
					label={ __( 'Border', 'jet-form-builder' ) }
					enableAlpha
					labelForControl
				/>
				<StyleBorderRadiusItem
					cssVar="--jfb-choice-border-radius"
					label={ __( 'Radius', 'jet-form-builder' ) }
				/>
			</StylePanel>
			<StylePanel
				label={ __( 'Hover choice', 'jet-form-builder' ) }
			>
				<StyleColorItemsWrapper>
					<StyleColorItem
						cssVar="--jfb-choice-hover-text"
						label={ __( 'Text Choice', 'jet-form-builder' ) }
					/>
					<StyleColorItem
						cssVar="--jfb-choice-hover-bg"
						label={ __( 'Background Choice', 'jet-form-builder' ) }
					/>
				</StyleColorItemsWrapper>
				<StyleBorderItem
					cssVar="--jfb-choice-hover-border"
					label={ __( 'Border', 'jet-form-builder' ) }
					enableAlpha
					labelForControl
				/>
				<StyleBorderRadiusItem
					cssVar="--jfb-choice-hover-border-radius"
					label={ __( 'Radius', 'jet-form-builder' ) }
				/>
			</StylePanel>
			<StylePanel
				label={ __( 'Checked choice', 'jet-form-builder' ) }
			>
				<StyleColorItemsWrapper>
					<StyleColorItem
						cssVar="--jfb-choice-checked-text"
						label={ __( 'Text Choice', 'jet-form-builder' ) }
					/>
					<StyleColorItem
						cssVar="--jfb-choice-checked-bg"
						label={ __( 'Background Choice', 'jet-form-builder' ) }
					/>
				</StyleColorItemsWrapper>
				<StyleBorderItem
					cssVar="--jfb-choice-checked-border"
					label={ __( 'Border', 'jet-form-builder' ) }
					enableAlpha
					labelForControl
				/>
				<StyleBorderRadiusItem
					cssVar="--jfb-choice-checked-border-radius"
					label={ __( 'Radius', 'jet-form-builder' ) }
				/>
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