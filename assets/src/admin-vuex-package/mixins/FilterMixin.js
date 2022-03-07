import ScopeStoreMixin from './ScopeStoreMixin';

export default {
	mixins: [ ScopeStoreMixin ],
	computed: {
		filter() {
			return this.getter( 'getFilter', this.filter_id );
		},
	},
	methods: {
		setCurrentFilter( props ) {
			this.commit( 'setFilter', {
				slug: this.filter_id,
				props,
			} );
		},
		onChangeFilter( value ) {
			this.setCurrentFilter( {
				selected: value,
			} );
			this.dispatch( 'fetchPageWithFilters' );
		},
	},
};