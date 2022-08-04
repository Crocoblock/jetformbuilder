import Filter from './Filter';

class FallBackFilter extends Filter {

	getSlug() {
		return 'ifEmpty';
	}

	apply( value, fallback ) {
		return value ? value : fallback;
	}

}

export default FallBackFilter;