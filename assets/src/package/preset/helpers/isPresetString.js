function isPresetString( preset ) {
	let parsedPreset;
	try {
		parsedPreset = JSON.parse( preset );
	}
	catch ( error ) {
		return false;
	}

	return !!parsedPreset?.jet_preset;
}

export default isPresetString;