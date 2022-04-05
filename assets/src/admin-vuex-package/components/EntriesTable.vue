<template>
	<EntriesTableSkeleton
		:list="list"
		:columns="columns"
		:loading="isLoading"
		:empty-message="emptyMessage"
		:columns-components="components"
		:scope="scope"
	></EntriesTableSkeleton>
</template>

<script>
import EntriesTableSkeleton from './EntriesTableSkeleton';
import ScopeStoreMixin from '../mixins/ScopeStoreMixin';

const {
	mapState,
	mapGetters,
	mapActions,
	mapMutations,
} = window.Vuex;

const { applyFilters } = wp.hooks;

export default {
	name: 'entries-table',
	data: () => (
		{
			components: [],
		}
	),
	components: { EntriesTableSkeleton },
	mixins: [ ScopeStoreMixin ],
	created() {
		this.components = applyFilters( `jet.fb.admin.table.${ this.scope }`, [] );
	},
	computed: {
		list() {
			return this.getter( 'list' );
		},
		columns() {
			return this.getter( 'columns' );
		},
		emptyMessage() {
			return this.getter( 'emptyMessage' );
		},
		isLoading() {
			return this.getter( 'isLoading', 'page' );
		},
	},
};
</script>

