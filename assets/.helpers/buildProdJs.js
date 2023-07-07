const { executeCommandForPackages } = require( './executeCommandForPackages' );
const path = require( 'path' );

executeCommandForPackages(
	path.resolve( __dirname, '..' ),
	{ script: 'hidden:build:js' }
);

executeCommandForPackages(
	path.resolve( __dirname, '../../modules' ),
	{ script: 'hidden:build:js' }
);

executeCommandForPackages(
	path.resolve( __dirname, '../../compatibility' ),
	{ script: 'hidden:build:js' }
);