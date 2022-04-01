<template>
	<FormBuilderPage
		:title="__( 'JetFormBuilder Form Records', 'jet-form-builder' )"
	>
		<ActionsWithFilters/>
		<TablePagination/>
		<EntriesTable/>
		<TablePagination/>
	</FormBuilderPage>
</template>

<script>
import ActionsWithFilters from './ActionsWithFilters';

const {
	TablePagination,
	EntriesTable,
	FormBuilderPage,
} = JetFBComponents;

const {
	i18n,
	PromiseWrapper,
	GetIncomingMessages,
	RunActionsMixin,
} = JetFBMixins;

const {
	CHOOSE_ACTION,
	CLICK_ACTION,
} = JetFBConst;

const { apiFetch } = wp;
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
	},
	data() {
		return {
			isFooterVisible: true,
		};
	},
	mixins: [
		i18n,
		PromiseWrapper,
		GetIncomingMessages,
		RunActionsMixin,
	],
	created() {
		/** Delete */
		this.setActionPromises( {
			action: 'delete',
			context: CHOOSE_ACTION,
			promise: this.promiseWrapper( this.deleteChecked.bind( this ) ),
		} );
		this.setActionPromises( {
			action: 'delete',
			context: CLICK_ACTION,
			promise: this.promiseWrapper( this.deleteClicked.bind( this ) ),
		} );

		/** Mark as Viewed */
		this.setActionPromises( {
			action: 'mark_viewed',
			context: CHOOSE_ACTION,
			promise: this.promiseWrapper( this.viewChecked.bind( this ) ),
		} );
		this.setActionPromises( {
			action: 'mark_viewed',
			context: CLICK_ACTION,
			promise: this.promiseWrapper( this.viewClicked.bind( this ) ),
		} );

		/** Mark as Not Viewed */
		this.setActionPromises( {
			action: 'mark_not_viewed',
			context: CHOOSE_ACTION,
			promise: this.promiseWrapper( this.viewChecked.bind( this ) ),
		} );
		this.setActionPromises( {
			action: 'mark_not_viewed',
			context: CLICK_ACTION,
			promise: this.promiseWrapper( this.notViewClicked.bind( this ) ),
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
			'runRowAction',
		] ),
		deleteAction( { resolve, reject, options } ) {
			apiFetch( options ).then( response => {
				this.updateList( response );

				resolve( response.message );

			} ).catch( reject );
		},

		deleteChecked( { resolve, reject } ) {
			this.beforeRunFetch();

			this.deleteAction( {
				resolve,
				reject,
				options: this.onCheckedOptions(),
			} );
		},
		deleteClicked( { resolve, reject }, ...payload ) {
			this.deleteAction( {
				resolve,
				reject,
				options: this.getOptionsStatic( 'delete', payload ),
			} );
		},
		viewAction( { resolve, reject, options } ) {
			apiFetch( options ).then( response => {
				this.setList( response.list );

				resolve( response.message );
			} ).catch( reject );
		},
		viewChecked( { resolve, reject } ) {
			this.beforeRunFetch();

			this.viewAction( {
				resolve,
				reject,
				options: this.onCheckedOptions(),
			} );
		},
		viewClicked( { resolve, reject }, ...payload ) {
			this.viewAction( {
				resolve,
				reject,
				options: this.getOptionsStatic( 'mark_viewed', payload ),
			} );
		},
		notViewClicked( { resolve, reject }, ...payload ) {
			this.viewAction( {
				resolve,
				reject,
				options: this.getOptionsStatic( 'mark_not_viewed', payload ),
			} );
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