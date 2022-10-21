const {
	      Filter,
      } = JetFormBuilderAbstract;
const {
	      Kb_In_Bytes,
	      Mb_In_Bytes,
	      Gb_In_Bytes,
	      Tb_In_Bytes,
      } = JetFormBuilderConst;
const {
	      getLanguage,
      } = JetFormBuilderFunctions;
const {
	      _x,
      } = wp.i18n;

const symbols = {
	[ _x( 'TB', 'unit symbol', 'jet-form-builder' ) ]: Tb_In_Bytes,
	[ _x( 'GB', 'unit symbol', 'jet-form-builder' ) ]: Gb_In_Bytes,
	[ _x( 'MB', 'unit symbol', 'jet-form-builder' ) ]: Mb_In_Bytes,
	[ _x( 'KB', 'unit symbol', 'jet-form-builder' ) ]: Kb_In_Bytes,
	[ _x( 'B', 'unit symbol', 'jet-form-builder' ) ]: 1,
};

const lang = getLanguage();

function SizeFormatFilter() {
	Filter.call( this );

	this.getSlug = function () {
		return 'sizeFormat';
	};
	this.apply   = function ( value ) {
		value = +value;

		if ( Number.isNaN( value ) || 0 === value ) {
			return '0 B';
		}

		for ( const [ name, size ] of Object.entries( symbols ) ) {
			if ( value < size ) {
				continue;
			}
			value = (
				value / size
			).toFixed( 2 );

			const formatted = new Intl.NumberFormat( lang ).format( value );

			return formatted + ' ' + name;
		}

		return '0 B';
	};
}

SizeFormatFilter.prototype = Object.create( Filter.prototype );

export default SizeFormatFilter;