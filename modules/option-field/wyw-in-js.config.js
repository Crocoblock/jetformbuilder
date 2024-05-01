module.exports = {
	classNameSlug: ( hash, title ) => (
		title.replace( /([a-z])([A-Z])/g, '$1-$2' ).toLowerCase()
	),
};