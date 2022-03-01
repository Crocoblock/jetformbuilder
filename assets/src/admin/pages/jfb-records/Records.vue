<template>
	<div :class="{
		'wrap': true,
		'jet-form-builder-page': true,
		'jet-form-builder-page--records': true,
	}">
		<h1 class="cs-vui-title">{{ __( 'JetFormBuilder Form Records', 'jet-form-builder' ) }}</h1>
		<ActionsWithFilters/>
		<TablePagination/>
		<EntriesTable/>
		<TablePagination/>
	</div>
</template>

<script>
import ActionsWithFilters from './ActionsWithFilters';

const {
		  TablePagination,
		  EntriesTable,
	  } = JetFBComponents;
const {
		  TableViewMixin,
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
	},
	data() {
		return {
			isFooterVisible: true,
		};
	},
	mixins: [
		TableViewMixin,
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
		...mapState( [
			'checked',
			'queryState',
		] ),
		...mapGetters( [
			'getAction',
			'getCurrentAction',
			'fetchListOptions'
		] ),
	},
	methods: {
		...mapMutations( [
			'setList',
			'setActionsList',
			'setActionPromises',
			'toggleDoingAction',
			'toggleLoading',
		] ),
		...mapActions( [
			'fetch',
			'updateList',
		] ),
		beforeRunFetch() {
			if ( ! this.checked.length ) {
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
					checked: this.checked,
				},
			}
		},
		getOptionsStatic( action, payload ) {
			const [ id ] = payload;

			return {
				...this.fetchListOptions( this.getAction( action )?.endpoint ),
				data: {
					checked: [ id ],
				},
			}
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