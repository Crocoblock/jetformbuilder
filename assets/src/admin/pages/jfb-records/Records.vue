<template>
	<FormBuilderPage
		:title="__( 'JetFormBuilder Form Records', 'jet-form-builder' )"
	>
		<Portal to="scope-default/filters">
			<FormFilter/>
		</Portal>
		<Portal to="scope-default/buttons">
			<ClearFiltersButton/>
		</Portal>
		<ActionsWithFilters/>
		<TablePagination/>
		<EntriesTable/>
		<TablePagination/>
	</FormBuilderPage>
</template>

<script>
import FormFilter from './filters/FormFilter';

const {
	      TablePagination,
	      EntriesTable,
	      FormBuilderPage,
	      ActionsWithFilters,
	      ClearFiltersButton,
	      Portal,
      } = JetFBComponents;

const {
	      i18n,
	      PromiseWrapper,
      } = JetFBMixins;

const {
	      CHOOSE_ACTION,
	      CLICK_ACTION,
      } = JetFBConst;

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
	name: 'jfb-records',
	components: {
		TablePagination,
		EntriesTable,
		ActionsWithFilters,
		FormBuilderPage,
		Portal,
		FormFilter,
		ClearFiltersButton,
	},
	mixins: [
		i18n,
		PromiseWrapper,
	],
	created() {
		/** Delete */
		this.setActionPromises( {
			action: 'delete',
			promise: this.promiseWrapper( this.deleteAction.bind( this ) ),
		} );

		/** Mark as Viewed */
		this.setActionPromises( {
			action: 'mark_viewed',
			promise: this.promiseWrapper( this.viewAction.bind( this ) ),
		} );

		/** Mark as Not Viewed */
		this.setActionPromises( {
			action: 'mark_not_viewed',
			promise: this.promiseWrapper( this.viewAction.bind( this ) ),
		} );
	},
	methods: {
		...mapMutations( [ 'toggleDoingAction' ] ),
		...mapMutations( 'scope-default', [
			'setList',
			'setActionPromises',
			'setBeforeAction',
		] ),
		...mapActions( 'scope-default', [
			'updateList',
			'apiFetch',
		] ),
		deleteAction( { resolve, reject } ) {
			this.apiFetch().then( response => {
				this.updateList( response );

				resolve( response.message );
			} ).catch( reject );
		},
		viewAction( { resolve, reject } ) {
			this.apiFetch().then( response => {
				this.setList( response.list );

				resolve( response.message );
			} ).catch( reject );
		},
	},
};
</script>

<style lang="scss">
.cx-vue-list-table {
	.list-table-item--not-viewed {
		background-color: #f7fdff;
	}
}

</style>