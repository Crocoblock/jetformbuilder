import { name } from './index';
import preview from './preview';

const {
	      CaptchaBlockEdit,
	      SelectVariations,
	      ToggleGroupVariations,
      } = JetFBComponents;

const {
	      useMetaState,
      } = JetFBHooks;

const { __ } = wp.i18n;

const {
	      InspectorControls,
	      useBlockProps,
      } = wp.blockEditor;

const {
	      useSelect,
      } = wp.data;

const {
	      useEffect,
	      useState,
      } = wp.element;

let {
	    __experimentalBlockVariationPicker,
	    BlockVariationPicker,
	    BlockControls,
    } = wp.blockEditor;

BlockVariationPicker = (
	BlockVariationPicker || __experimentalBlockVariationPicker
);

function Placeholder( props ) {
	const {
		      setAttributes,
		      attributes,
	      } = props;

	const blockProps = useBlockProps();

	const { blockType, variations } = useSelect(
		( select ) => {
			const {
				      getBlockVariations,
				      getBlockType,
			      } = select( 'core/blocks' );

			return {
				blockType: getBlockType( name ),
				variations: getBlockVariations( name, 'block' ),
			};
		},
		[],
	);

	if ( attributes.isPreview ) {
		return <div style={ {
			width: '100%',
			display: 'flex',
			justifyContent: 'center',
		} }>
			{ preview }
		</div>;
	}

	return <div { ...blockProps }>
		<BlockVariationPicker
			label={ blockType?.title }
			instructions={ __( 'Select captcha provider', 'jet-form-builder' ) }
			variations={ variations }
			onSelect={ ( nextVariation ) => {
				setAttributes( nextVariation.attributes );
			} }
		/>
	</div>;
}

export default function EditCaptchaContainer( props ) {
	const { attributes, setAttributes } = props;

	const [ args, setArgs ]         = useMetaState( '_jf_recaptcha' );
	const [ provider, setProvider ] = useState( () => attributes.provider );

	useEffect( () => {
		setProvider( attributes.provider );
	}, [ attributes.provider ] );

	useEffect( () => {
		setProvider( args.captcha );
	}, [ args.captcha ] );

	useEffect( () => {
		if ( attributes.isPreview ) {
			return;
		}
		if ( provider !== attributes.provider ) {
			setAttributes( { provider: provider } );
		}
		if ( provider !== args.captcha ) {
			setArgs( prev => (
				{ ...prev, captcha: provider }
			) );
		}
	}, [ provider ] );

	return <>
		<InspectorControls>
			<div style={ { padding: '0 20px 20px 20px' } }>
				<SelectVariations
					value={ attributes.provider }
				/>
			</div>
		</InspectorControls>
		<BlockControls>
			<ToggleGroupVariations
				value={ attributes.provider }
			/>
		</BlockControls>
		{ !attributes.provider
		  ? <Placeholder { ...props } />
		  : <CaptchaBlockEdit.Slot fillProps={ props }/> }
	</>;
}