const filterUniqueColors = ( colors = [] ) => {
	const usedKeys = new Set();

	return colors.filter( ( color ) => {
		const key = color?.slug || color?.color;

		if ( ! color?.color || ! key || usedKeys.has( key ) ) {
			return false;
		}

		usedKeys.add( key );

		return true;
	} );
};

const getPaletteFromSettings = ( settings = {} ) => {
	const paletteSettings = settings?.color?.palette || settings?.__experimentalFeatures?.color?.palette || {};
	const themeColors = Array.isArray( paletteSettings?.theme ) ? paletteSettings.theme : [];
	const customColors = Array.isArray( paletteSettings?.custom ) ? paletteSettings.custom : [];

	return filterUniqueColors( [ ...themeColors, ...customColors ] );
};

export const getColorsList = ( settings = {} ) => {
	const fallbackSettings = window?.crocoStyleEditorData?.global_settings || {};
	const colorsList = getPaletteFromSettings( settings );

	if ( colorsList.length ) {
		return colorsList;
	}

	const fallbackColorsList = getPaletteFromSettings( fallbackSettings );

	const legacyColors = Array.isArray( settings?.colors ) ? settings.colors : fallbackSettings?.colors;

	return filterUniqueColors( [ ...fallbackColorsList, ...legacyColors ] );
};