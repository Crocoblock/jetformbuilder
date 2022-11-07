import Filter from './Filter';

function SetYearFilter() {
	Filter.call( this );

	this.getSlug = function () {
		return 'setYear';
	};

	this.apply = function ( value, year ) {
		year          = year ? +year.trim() : 1;
		const current = new Date( value );

		return current.setFullYear( year );
	};
}

SetYearFilter.prototype = Object.create( Filter.prototype );

export default SetYearFilter;