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
	],
	created() {
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
	computed: {
		...mapGetters( 'scope-default', [
			'getAction',
			'getCurrentAction',
			'fetchListOptions',
			'getChecked',
		] ),
	},
	methods: {
		...mapMutations( [ 'toggleDoingAction' ] ),
		...mapMutations( 'scope-default', [
			'setList',
			'setActionsList',
			'setActionPromises',
			'toggleLoading',
		] ),
		...mapActions( 'scope-default', [
			'fetch',
			'updateList',
		] ),
		beforeRunFetch() {
			if ( ! this.getChecked.length ) {
				throw new Error( this.messages?.empty_checked );
			}

			if ( ! this.getCurrentAction?.endpoint ) {
				throw new Error( this.messages?.empty_action );
			}
		},
		onCheckedOptions() {
			return {
				...this.fetchListOptions( this.getCurrentAction?.endpoint ),
				data: {
					checked: this.getChecked,
				},
			};
		},
		getOptionsStatic( action, payload ) {
			const [ id ] = payload;

			return {
				...this.fetchListOptions( this.getAction( action )?.endpoint ),
				data: {
					checked: [ id ],
				},
			};
		},
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

.cx-vui-panel-table-wrapper {
	margin-bottom: unset;
}

.cx-vue-list-table {
	.cell--id.cell--id {
		flex: 0.3;
	}

	.list-table-item {
		background-color: #ffffff;

		&:not(:last-child) {
			border-bottom: 1px solid #ececec;
		}

		&--not-viewed {
			background-color: #f7fdff;
		}

		&:hover {
			background-color: #e3f6fd;
		}
	}

}

</style>