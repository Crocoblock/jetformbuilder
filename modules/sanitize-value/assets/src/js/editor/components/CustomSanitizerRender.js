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
	      __,
      } = wp.i18n;

const pref    = 'jet_fb_sv_';
const prefReg = new RegExp( `^${pref}` );

function sanitizeCallback( name ) {
	if ( !name?.length || pref === name ) {
		return '';
	}
	name = name.replace( /[^\w]/gi, '' );

	return name.replace( prefReg, '' );
}

function CustomSanitizerRender( { control, edit, remove, current } ) {
	return <>
		<Tooltip
			text={ __(
				'Specify the name of the PHP function that will process the value',
				'jet-form-builder',
			) }
			delay={ 200 }
			position={ 'top center' }
		>
			<Flex
				className={ [
					'components-dropdown-menu__menu-item',
					'has-separator',
					isEmpty( current ) ? '' : 'is-active',
				].join( ' ' ) }
				justify="flex-start"
				gap="4px"
				style={ {
					whiteSpace: 'nowrap',
					padding: '6px 12px 6px 8px',
					cursor: 'default',
				} }
			>
				{ control.icon }
				{ control.label }
			</Flex>
		</Tooltip>
		<TextControl
			value={ current?.callback ?? '' }
			onChange={ value => {
				value = sanitizeCallback( value );

				Boolean( value )
				? edit( { callback: value } )
				: remove();
			} }
		/>
		<Button
			isLink
			onClick={ () => {} }
		>
			{ __( 'Copy the sample snippet', 'jet-form-builder' ) }
		</Button>
	</>;
}

export default CustomSanitizerRender;