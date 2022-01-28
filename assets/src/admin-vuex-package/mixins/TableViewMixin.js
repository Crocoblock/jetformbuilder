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
		} = this.getIncoming();

		this.setColumns( JSON.parse( JSON.stringify( columns ) ) );
		this.setList( JSON.parse( JSON.stringify( list ) ) );

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
			'setColumns',
			'setQueryState',
			'setActionsList',
		] ),
		...mapActions( [
			'setQueriedPage',
		] ),
	},
};