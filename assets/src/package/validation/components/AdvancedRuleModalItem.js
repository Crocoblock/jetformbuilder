import Tools from '../../tools';
import RepeaterItemContext from '../../repeater/context/repeater.item';
import BaseHelp from '../../components/BaseHelp';
import AdvancedModalControl from '../../components/AdvancedModalControl';
import ChooseRelatedField from './ChooseRelatedField';

const {
	      SelectControl,
	      TextareaControl,
	      TextControl,
	      withFilters,
      } = wp.components;
const {
	      useContext,
	      useState,
	      useEffect,
      } = wp.element;
const {
	      __,
      } = wp.i18n;
const {
	      addFilter,
      } = wp.hooks;
const {
	      rule_types,
	      ssr_callbacks,
      } = window.jetFormValidation;

const ssr_callbacks_keys = ssr_callbacks.map( ( { value } ) => value );

function getLabel( type ) {
	const indexRule = rule_types.findIndex( ( { value } ) => value === type );
	const fallback  = __( 'Enter value', 'jet-form-builder' );

	if ( -1 === indexRule ) {
		return fallback;
	}

	return rule_types[ indexRule ]?.control_label ?? fallback;
}

function RuleSpecificControls( {
	currentItem,
	changeCurrentItem,
} ) {
	const [ label, setLabel ] = useState( () => getLabel( currentItem.type ) );

	useEffect( () => {
		setLabel( getLabel( currentItem.type ) );
	}, [ currentItem.type ] );

	switch ( currentItem.type ) {
		case 'equal':
		case 'contain':
		case 'contain_not':
		case 'regexp':
		case 'regexp_not':
			return <>
				<ChooseRelatedField/>
				{ !Boolean( currentItem.field ) && <AdvancedModalControl
					value={ currentItem.value }
					label={ label }
					onChangePreset={ value => changeCurrentItem( { value } ) }
					onChangeMacros={ name => changeCurrentItem( {
						value: (
							currentItem.value ?? ''
						) + name,
					} ) }
				>
					{ ( { instanceId } ) => <TextareaControl
						id={ instanceId }
						value={ currentItem.value }
						onChange={ value => changeCurrentItem( { value } ) }
					/> }
				</AdvancedModalControl> }
			</>;
		default:
			return null;
	}
}

function withPref( name ) {
	if ( ! name?.length || 'jet_fb_v_' === name ) {
		return '';
	}
	return 'jet_fb_v_' + (
		name.replace( /^jet_fb_v_/, '' )
	);
}

addFilter(
	'jet.fb.advanced.rule.controls',
	'jet-form-builder',
	( DefaultControls ) => ( props ) => {
		const { currentItem, changeCurrentItem } = props;
		const [ showDetails, setShowDetails ]    = useState( false );

		if ( 'ssr' !== currentItem.type ) {
			return <DefaultControls { ...props } />;
		}

		const functionName = currentItem.value || 'custom_jfb_field_validation';

		return <>
			<SelectControl
				labelPosition="side"
				options={ Tools.withPlaceholder(
					ssr_callbacks,
					__( 'Custom function', 'jet-form-builder' ),
				) }
				label={ __( 'Choose callback', 'jet-form-builder' ) }
				value={ currentItem.value }
				onChange={ value => changeCurrentItem( { value } ) }
			/>
			{ !ssr_callbacks_keys.includes( currentItem.value ) && <>
				<TextControl
					label={ __( 'Function name', 'jet-form-builder' ) }
					value={ currentItem.value }
					onChange={ value => changeCurrentItem( {
						value: withPref( value )
					} ) }
				/>
				<BaseHelp>
					{ __( 'Example of registering a function below.' ) + ' ' }
					<a
						href="javascript:void(0)"
						onClick={ () => setShowDetails( prev => !prev ) }
					>
						{ showDetails
						  ? __( 'Hide', 'jet-form-builder' )
						  : __( 'Show', 'jet-form-builder' ) }
					</a>
				</BaseHelp>
				{ showDetails && <pre>
					{ `/**
 * To get all the values of the fields in the form, you can use the expression:
 * jet_fb_request_handler()->get_request() or $context->get_request()
 *
 * If the field is located in the middle of the repeater, then only
 * jet_fb_request_handler()->get_request(), but $context->get_request() 
 * will return the values of all fields of the current repeater element
 *
 * @param $value mixed
 * @param $context \\Jet_Form_Builder\\Request\\Parser_Context
 *
 * @return bool
 */
function ${ functionName }( $value, $context ): bool {
	// your logic
	return true;
}` }
				</pre> }
			</> }
		</>;
	},
);

const RuleControls = withFilters(
	'jet.fb.advanced.rule.controls',
)( RuleSpecificControls );

function AdvancedRuleModalItem() {
	const {
		      currentItem,
		      changeCurrentItem,
	      } = useContext( RepeaterItemContext );

	return <>
		<SelectControl
			labelPosition="side"
			options={ Tools.withPlaceholder( rule_types ) }
			label={ __( 'Rule type', 'jet-form-builder' ) }
			value={ currentItem.type }
			onChange={ type => changeCurrentItem( { type } ) }
		/>
		<RuleControls
			currentItem={ currentItem }
			changeCurrentItem={ changeCurrentItem }
		/>
		<TextareaControl
			label={ __( 'Error message', 'jet-form-builder' ) }
			value={ currentItem.message }
			onChange={ message => changeCurrentItem( { message } ) }
		/>
	</>;
}

export default AdvancedRuleModalItem;