<template>
	<div :class="{
		'wrap': true,
		'jet-form-builder-page': true,
		'jet-form-builder-page--records': true,
	}">
		<h1 class="cs-vui-title">{{ __( 'JetFormBuilder Form Records', 'jet-form-builder' ) }}</h1>
		<TablePagination/>
		<ChooseAction/>
		<EntriesStoreTable/>
		<ChooseAction/>
		<TablePagination/>
	</div>
</template>

<script>
const {
	TablePagination,
	EntriesStoreTable,
	ChooseAction,
} = JetFBComponents;
const {
	TableViewMixin,
	i18n,
	PromiseWrapper
} = JetFBMixins;

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
		ChooseAction,
	},
	data() {
		return {
			messages: {},
		};
	},
	mixins: [
		TableViewMixin,
		i18n,
		PromiseWrapper
	],
	created() {
		const { actions_list, messages } = this.getIncoming();

		this.messages = JSON.parse( JSON.stringify( messages ) );

		this.setActionsList( actions_list );

		this.addActionPromise( {
			action: 'delete',
			promise: this.promiseWrapper( this.deleteChecked.bind( this ) ),
		} );
	},
	computed: {
		...mapState( [
			'checked',
			'queryState'
		] ),
		...mapGetters( [
			'getCurrentAction'
		] )
	},
	methods: {
		...mapMutations( [
			'setList',
			'setQueryState',
			'setActionsList',
			'addActionPromise',
		] ),
		...mapActions( [
			'fetch'
		] ),
		deleteChecked( { onSuccess, onError } ) {
			this.beforeRunFetch();

			const options = {
				...this.getCurrentAction?.endpoint,
				data: {
					checked: this.checked
				}
			}

			apiFetch( options ).then( response => {
				this.setList( response.list );

				const state = {
					total: + response.total
				};

				if ( response.list.length < this.queryState.limit ) {
					state.limit = response.list.length;
				}

				this.setQueryState( state );

				onSuccess( response.message );
			} ).catch( onError );

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

		.cell--id {
			width: 120px;
		}

		.cell--status {
			width: 150px;
		}

		.cell--form {
			width: 250px;
		}

		.cell--referrer {
			width: 250px;
		}

		.cell--user {
			width: 220px;
		}
	}
}

</style>