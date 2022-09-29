const {
	      __,
      } = wp.i18n;

function BaseFilter() {
}

BaseFilter.prototype = {
	docArgument: false,
	help: null,
	isServerSide: false,
	isClientSide: false,
	fullName: () => {},
	getArgumentsList() {
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
			}
		}

		return response.join( '|' );
	},
	fullHelp() {
		if ( !this.docArgument && !this.help ) {
			return null;
		}

		const Help = this.help;
		const list = this.getArgumentsList();

		return <>
			{ list && <div>
				{ __( 'Arguments:', 'jet-form-builder' ) + ' ' }
				<code>{ list }</code>
			</div> }
			{ 'string' === typeof Help ? Help : <Help/> }
		</>;
	},
};

export default BaseFilter;