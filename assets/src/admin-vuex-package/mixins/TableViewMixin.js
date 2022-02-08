const {
	GetIncoming,
} = JetFBMixins;

const {
	mapMutations,
	mapActions,
	mapState,
} = Vuex;

export default {
	mixins: [ GetIncoming ],
	created() {
		const {
			list = [],
			columns = {},
			total,
			actions
		} = this.getIncoming();

		this.setColumns( JSON.parse( JSON.stringify( columns ) ) );
		this.setList( JSON.parse( JSON.stringify( list ) ) );
		this.setActionsList( actions );

		this.setQueryState( {
			total: + total,
			limit: this.currentList.length,
		} );

		this.setQueriedPage( 1 );
	},
	computed: {
		...mapState( [
			'currentList',
		] ),
	},
	methods: {
		...mapMutations( [
			'setList',
			'setQueryState',
			'setColumns',
			'setActionsList',
		] ),
		...mapActions( [
			'setQueriedPage',
		] ),
	},
};