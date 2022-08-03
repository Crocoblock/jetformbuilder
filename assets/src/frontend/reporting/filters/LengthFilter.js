import Filter from './Filter';

class LengthFilter extends Filter {

	getSlug() {
		return 'length';
	}

	apply( value ) {
		return value.length;
	}

}

export default LengthFilter;