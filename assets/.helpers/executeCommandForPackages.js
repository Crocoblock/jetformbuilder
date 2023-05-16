const fs       = require( 'fs' );
const { exec } = require( 'child_process' );
const path     = require( 'path' );

function runNpmScript( packageJsonPath, command ) {
	try {
		// Read the package.json file
		const packageJson = require( packageJsonPath );
		const scripts     = packageJson.scripts;

		// Execute the specified command if it exists
		if ( !scripts || !scripts[ command ] ) {
			return;
		}

		const fullCommand = `npm run ${ command }`;
		const filePath    = path.dirname( packageJsonPath );

		console.log(
			`Start executing: ${ fullCommand } in ${ filePath }` );
		exec( fullCommand, { cwd: filePath },
			( error, stdout, stderr ) => {
				if ( error ) {
					console.error(
						`Error executing command: ${ error.message }` );
					return;
				}

				if ( stderr ) {
					console.error(
						`Command execution returned an error: ${ stderr }` );
					return;
				}

				console.log(
					`Command output for ${ fullCommand } in ${ filePath }:\n${ stdout }` );
			} );
	}
	catch ( error ) {
		console.error(
			`Error reading package.json file: ${ error.message }` );
	}
}

function executeCommand( packageJsonPath, commandName ) {
	const filePath = path.dirname( packageJsonPath );

	if ( !fs.existsSync( packageJsonPath ) ) {
		// Recursively search in subdirectories
		executeCommandForPackages( filePath, commandName );

		return;
	}

	if ( commandName.hasOwnProperty( 'script' ) ) {
		runNpmScript( packageJsonPath, commandName.script );

		return;
	}

	console.log(
		`Start executing: ${ commandName.command } in ${ filePath }` );
	exec( commandName.command, { cwd: filePath },
		( error, stdout, stderr ) => {
			if ( error ) {
				console.error(
					`Error executing command: ${ error.message }` );
				return;
			}

			if ( stderr ) {
				console.error(
					`Command execution returned an error: ${ stderr }` );
				return;
			}

			console.log(
				`Command output for ${ commandName.command } in ${ filePath }:\n${ stdout }`,
			);
		} );
}

/**
 * @param directory
 * @param commandName {String|{?command: String, ?script: String}}
 */
function executeCommandForPackages( directory, commandName ) {
	// Get the list of files and directories in the current directory
	const files = fs.readdirSync( directory );

	if ( typeof commandName === 'string' ) {
		commandName = {
			script: commandName,
		};
	}

	// Iterate over each file/directory
	for ( const file of files ) {
		if ( 'node_modules' === file ) {
			continue;
		}

		const filePath = path.join( directory, file );
		const stat     = fs.statSync( filePath );

		if ( 'package.json' === file ) {
			executeCommand( filePath, commandName );

			return;
		}

		if ( stat.isDirectory() ) {
			// Check if the package has a package.json file
			const packageJsonPath = path.join( filePath, 'package.json' );

			executeCommand( packageJsonPath, commandName );
		}
	}
}

module.exports = {
	executeCommandForPackages,
};