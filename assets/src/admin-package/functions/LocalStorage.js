const namespace = 'JetFBConfig';

function setStorage( value ) {
	localStorage.setItem( namespace, JSON.stringify( value ) );
}

function getStorage() {
	const config = localStorage.getItem( namespace );

	if ( null === config ) {
		return {};
	}

	return JSON.parse( config );
}

function setItem( key, value ) {
	let config = getStorage();

	config = {
		...config,
		[ key ]: value,
	};

	setStorage( config );
}

function getItem( key, ifEmpty = false ) {
	const config = getStorage();

	return config[ key ] ?? ifEmpty;
}

function storage( name ) {
	const base = {
		setStorage( value ) {
			setItem( name, value );
		},
		getStorage() {
			return getItem( name, {} );
		},
	};

	return {
		...base,
		setItem( key, value ) {
			let config = base.getStorage();

			config = {
				...config,
				[ key ]: value,
			};

			base.setStorage( config );
		},
		getItem( key, ifEmpty = false ) {
			const config = base.getStorage();

			return config[ key ] ?? ifEmpty;
		},
	};
}

export default {
	setStorage,
	getStorage,
	setItem,
	getItem,
	storage,
};

