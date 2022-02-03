<template>
	<div :class="{
		'wrap': true,
		'jet-form-builder-page': true,
		'jet-form-builder-page--records': true,
	}">
		<h1 class="cs-vui-title">{{ __( 'JetFormBuilder Form Records', 'jet-form-builder' ) }}</h1>
		<div class="jfb-page-header">
			<ActionsWithFilters/>
		</div>
		<EntriesStoreTable/>
		<div v-show="isFooterVisible">
			<ActionsWithFilters/>
		</div>
		<TablePagination/>
	</div>
</template>

<script>
import ActionsWithFilters from './ActionsWithFilters';

const {
		  TablePagination,
		  EntriesStoreTable,
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
		EntriesStoreTable,
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
		const { actions } = this.getIncoming();

		this.setActionsList( actions );

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
			action: 'view',
			context: CHOOSE_ACTION,
			promise: this.promiseWrapper( this.viewChecked.bind( this ) ),
		} );
		this.setActionPromises( {
			action: 'view',
			context: CLICK_ACTION,
			promise: this.promiseWrapper( this.viewClicked.bind( this ) ),
		} );

		this.setActionPromises( {
			action: 'not_view',
			context: CHOOSE_ACTION,
			promise: this.promiseWrapper( this.viewChecked.bind( this ) ),
		} );
		this.setActionPromises( {
			action: 'not_view',
			context: CLICK_ACTION,
			promise: this.promiseWrapper( this.notViewClicked.bind( this ) ),
		} );
	},
	mounted() {
		const observer = new IntersectionObserver( ( entries, observer ) => {
			entries.forEach( entry => {
				// если элемент является наблюдаемым
				this.isFooterVisible = ( ! entry.isIntersecting );
			} )
		}, {
			root: null,
			rootMargin: '0px',
		} )

		observer.observe( document.querySelector( '.jfb-page-header' ) );
	},
	computed: {
		...mapState( [
			'checked',
			'queryState',
		] ),
		...mapGetters( [
			'getAction',
			'getCurrentAction',
		] ),
	},
	methods: {
		...mapMutations( [
			'setList',
			'setQueryState',
			'setActionsList',
			'setActionPromises',
			'toggleDoingAction',
			'toggleLoading',
		] ),
		...mapActions( [
			'fetch',
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
				...this.getCurrentAction?.endpoint,
				data: {
					checked: this.checked,
				},
			}
		},
		getOptionsStatic( action, payload ) {
			const [ id ] = payload;

			return {
				...this.getAction( action )?.endpoint,
				data: {
					checked: [ id ],
				},
			}
		},
		deleteAction( { resolve, reject, options } ) {
			apiFetch( options ).then( response => {
				this.setList( response.list );

				const state = {
					total: +response.total,
				};

				if ( response.list.length < this.queryState.limit ) {
					state.limit = response.list.length;
				}

				this.setQueryState( state );

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
				options: this.getOptionsStatic( 'view', payload ),
			} );
		},
		notViewClicked( { resolve, reject }, ...payload ) {
			this.viewAction( {
				resolve,
				reject,
				options: this.getOptionsStatic( 'not_view', payload ),
			} );
		},

	},
};
</script>

<style lang="scss">

.jet-form-builder-page--records {
	.cx-vue-list-table {
		.cell--id.cell--id {
			flex: 0.3;
		}
	}
}

</style>