import useCurrentSanitizer from '../hooks/useCurrentSanitizer';
import SanitizeValueButton from './SanitizeValueButton';

const {
	      TextControl,
	      Flex,
	      Tooltip,
	      Button,
      } = wp.components;

const {
	      isEmpty,
      } = JetFBActions;

const {
	      useSuccessNotice,
      } = JetFBHooks;

const {
	      __,
      } = wp.i18n;

const {
	      useCopyToClipboard,
      } = wp.compose;

const pref    = 'jet_fb_sv_';
const prefReg = new RegExp( `^${pref}` );

function sanitizeCallback( name ) {
	if ( !name?.length || pref === name ) {
		return '';
	}
	name = name.replace( /[^\w]/gi, '' );

	return name.replace( prefReg, '' );
}

const snippet = name => `function jet_fb_sv_${ name }( \\JFB_Modules\\Block_Parsers\\Field_Data_Parser $parser ) {
\t$value = $parser->get_value();

\t// do something with $value...

\t$parser->set_value( $value );
}`;

function CustomSanitizerRender() {
	const { edit, remove, current } = useCurrentSanitizer();

	const notice = useSuccessNotice( __(
		`Paste the copied snippet into your theme's functions.php.`,
		'jet-form-builder',
	) );

	const copyRef = useCopyToClipboard(
		snippet( current?.callback ),
		() => notice( true ),
	);

	return <>
		<SanitizeValueButton/>
		{ Boolean( current ) && <div style={ {
			padding: '6px 12px 6px 8px',
		} }>
			<TextControl
				value={ current?.callback ?? '' }
				onChange={ value => {
					value = sanitizeCallback( value );

					Boolean( value )
					? edit( { callback: value } )
					: remove();
				} }
			/>
			{ Boolean( current?.callback ) && <Button
				isLink
				ref={ copyRef }
			>
				{ __( 'Copy the snippet', 'jet-form-builder' ) }
			</Button> }
		</div> }
	</>;
}

export default CustomSanitizerRender;