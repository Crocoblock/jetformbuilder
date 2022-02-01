const {
		  mapGetters,
		  mapMutations,
	  } = Vuex;

export default {
	computed: {
		...mapGetters( [
			'getFilter',
		] ),
		filter() {
			return this.getFilter( this.filter_id );
		},
	},
	methods: {
		...mapMutations( [
			'setFilter',
		] ),
		setCurrentFilter( props ) {
			this.setFilter( {
				slug: this.filter_id,
				props,
			} );
		},
		onChangeFilter( value ) {
			this.setCurrentFilter( {
				selected: value,
			} );
		},
	},
}