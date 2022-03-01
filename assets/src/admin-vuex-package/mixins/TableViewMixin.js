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