const {
	      Filter,
      } = JetFormBuilderAbstract;
const {
	      Kb_In_Bytes,
	      Mb_In_Bytes,
	      Gb_In_Bytes,
	      Tb_In_Bytes,
      } = JetFormBuilderConst;

function SizeFormatFilter() {
	Filter.call( this );

	this.getSlug = function () {
		return 'sizeFormat';
	};
	this.apply   = function ( value ) {

		return current.getTime();
	};
}

SizeFormatFilter.prototype = Object.create( Filter.prototype );

export default SizeFormatFilter;