const { addFilter } = wp.hooks;

function appendField( callback, fieldNames = [] )  {
	addFilter( 'jet.fb.register.fields', 'jet-form-builder', blocks => {
		return blocks.map( block => {
			if ( fieldNames.length && ! fieldNames.includes( block.name ) ) {
				return block;
			}

			return callback( block );
		} );
	} );
}

export default appendField;