<template>
	<EntriesTableSkeleton
		:list="list"
		:columns="columns"
		:loading="loading"
	></EntriesTableSkeleton>
</template>

<script>
import EntriesTableSkeleton from './EntriesTableSkeleton';

const {
	mapState,
	mapGetters,
	mapActions,
	mapMutations,
} = window.Vuex;

export default {
	name: 'entries-table',
	props: {
		scope: {
			type: String,
			default: 'default'
		},
	},
	components: { EntriesTableSkeleton },
	computed: {
		currentState() {
			return this.$store.state[ 'scope-' + this.scope ];
		},
		list() {
			return this.currentState.list;
		},
		columns() {
			return this.currentState.columns;
		},
		loading() {
			return this.currentState.loading;
		}

	},
	methods: {},
};
</script>

