<template>
	<FormBuilderPage
		:title="__( 'JetFormBuilder Payments', 'jet-form-builder' )"
	>
		<ActionsWithFilters/>
		<TablePagination/>
		<EntriesTable/>
		<template v-if="$slots.default">
			<slot name="default"></slot>
		</template>
		<TablePagination/>
	</FormBuilderPage>
</template>

<script>
import ActionsWithFilters from './ActionsWithFilters';
import TablePagination from '../TablePagination';
import EntriesTable from '../EntriesTable';
import FormBuilderPage from '../FormBuilderPage';

const {
	      GetIncoming,
	      i18n,
	      PromiseWrapper,
      } = JetFBMixins;
const {
	      apiFetch,
      } = wp;
const {
	      mapMutations,
	      mapState,
	      mapActions,
	      mapGetters,
      } = Vuex;

export default {
	name: 'payments-table-core',
	components: {
		ActionsWithFilters,
		FormBuilderPage,
		EntriesTable,
		TablePagination,
	},
	mixins: [ GetIncoming, i18n, PromiseWrapper ],
	created() {
		/** Delete */
		this.setActionPromises( {
			action: 'delete',
			promise: this.promiseWrapper( this.delete.bind( this ) ),
		} );
	},
	methods: {
		...mapMutations( 'scope-default', [
			'setActionPromises',
		] ),
		...mapActions( 'scope-default', [
			'updateList',
			'apiFetch',
		] ),
		delete( { resolve, reject } ) {
			this.apiFetch().then( response => {
				this.updateList( response );

				resolve( response.message );
			} ).catch( reject );
		},
	},
};

</script>

<style lang="scss">

.cx-vue-list-table {
	.cell--id.cell--id {
		flex: 0.3;
	}
}
</style>