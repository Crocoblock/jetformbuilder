const { executeCommandForPackages } = require( './executeCommandForPackages' );
const path = require( 'path' );


executeCommandForPackages(
	path.resolve( __dirname, '..' ),
	{ command: 'npm install' }
);

executeCommandForPackages(
	path.resolve( __dirname, '../../includes/modules' ),
	{ command: 'npm install' }
);