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
		this.addActionPromise( [
			'delete',
			{
				[ CHOOSE_ACTION ]: () => this.promiseWrapper( this.deleteChecked.bind( this ) ),
				[ CLICK_ACTION ]: () => this.promiseWrapper( this.deleteClicked.bind( this ) )
			}
		] );
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
			'getCurrentAction',
		] ),
	},
	methods: {
		...mapMutations( [
			'setList',
			'setQueryState',
			'setActionsList',
			'addActionPromise',
		] ),
		...mapActions( [
			'fetch',
		] ),
		deleteAction( { onSuccess, onError, options } ) {
			apiFetch( options ).then( response => {
				this.setList( response.list );

				const state = {
					total: +response.total,
				};

				if ( response.list.length < this.queryState.limit ) {
					state.limit = response.list.length;
				}

				this.setQueryState( state );

				onSuccess( response.message );
			} ).catch( onError );
		},
		deleteChecked( { onSuccess, onError } ) {
			this.beforeRunFetch();

			const options = {
				...this.getCurrentAction?.endpoint,
				data: {
					checked: this.checked,
				},
			}

			this.deleteAction( { onSuccess, onError, options } );

		},
		deleteClicked( { onSuccess, onError } ) {

		},
		beforeRunFetch() {
			if ( ! this.checked.length ) {
				throw new Error( this.messages?.empty_checked );
			}

			if ( ! this.getCurrentAction?.endpoint ) {
				throw new Error( this.messages?.empty_action );
			}
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