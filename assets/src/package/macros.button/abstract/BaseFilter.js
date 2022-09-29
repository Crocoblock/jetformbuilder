import BasePopoverItem from './BasePopoverItem';

const {
	      __,
      } = wp.i18n;

function BaseFilter() {
	BasePopoverItem.call( this );
}

BaseFilter.prototype = Object.create( BasePopoverItem.prototype );

BaseFilter.prototype.docArgument      = false;
BaseFilter.prototype.help             = null;
BaseFilter.prototype.isServerSide     = false;
BaseFilter.prototype.isClientSide     = false;
BaseFilter.prototype.getArgumentsList = function () {
	if ( !this.docArgument || !this.docArgument.length ) {
		return null;
	}

	const list = Array.isArray( this.docArgument )
	             ? this.docArgument
	             : [ this.docArgument ];

	const response = [];

	for ( const listElement of list ) {
		switch ( listElement ) {
			case 'string':
			case String:
				response.push( __( 'String', 'jet-form-builder' ) );
				break;
			case 'number':
			case Number:
				response.push( __( 'Number', 'jet-form-builder' ) );
				break;
			case 'array':
			case Array:
				response.push( __( 'Array', 'jet-form-builder' ) );
				break;
			case 'any':
				response.push( __( 'Anything', 'jet-form-builder' ) );
				break;
		}
	}

	return response.join( ' | ' );
};
BaseFilter.prototype.fullHelp         = function () {
	if ( !this.docArgument && !this.help ) {
		return null;
	}

	const Help = this.help;
	const list = this.getArgumentsList();

	return <>
		{ list && <div style={ {
			marginBottom: '0.5em',
		} }>
			{ __( 'Arguments:', 'jet-form-builder' ) + ' ' }
			<code>{ list }</code>
		</div> }
		{ 'function' !== typeof Help ? Help : <Help/> }
	</>;
};

export default BaseFilter;