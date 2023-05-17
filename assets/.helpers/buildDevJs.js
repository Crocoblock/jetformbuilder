const { executeCommandForPackages } = require( './executeCommandForPackages' );
const path = require( 'path' );

executeCommandForPackages(
	path.resolve( __dirname, '..' ),
	{ script: 'hidden:dev:js' }
);

executeCommandForPackages(
	path.resolve( __dirname, '../../modules' ),
	{ script: 'hidden:dev:js' }
);