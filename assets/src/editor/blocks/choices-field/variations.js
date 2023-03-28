const {
	      __,
      } = wp.i18n;

const variations = [

];

variations.forEach( ( variation ) => {
	if ( variation.isActive ) {
		return;
	}
	variation.isActive = ( blockAttributes, variationAttributes ) => (
		blockAttributes.provider === variationAttributes.provider
	);
} );

export default variations;