const { executeCommandForPackages } = require( './executeCommandForPackages' );
const path = require( 'path' );


executeCommandForPackages(
	path.resolve( __dirname, '..' ),
	{ command: 'npm install' }
);

executeCommandForPackages(
	path.resolve( __dirname, '../../modules' ),
	{ command: 'npm install' }
);

executeCommandForPackages(
	path.resolve( __dirname, '../../compatibility' ),
	{ command: 'npm install' }
);