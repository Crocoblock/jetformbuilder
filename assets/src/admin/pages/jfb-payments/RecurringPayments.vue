<template>
	<div :class="{
		'wrap': true,
		'jet-form-builder-page': true,
		'jet-form-builder-page--paypal-recurring-payments': true,
	}">
		<h1 class="cs-vui-title">{{ __( 'JetFormBuilder Payments', 'jet-form-builder' ) }}</h1>
		<TablePagination/>
		<EntriesTable
			:loading="loadingPage"
			:columns="columnsFromStore"
			:columns-components="columnsComponents"
		/>
		<TablePagination/>
	</div>
</template>

<script>
import * as related from './related-id-column';
import * as gross from './gross';

Vue.config.devtools = true;

const { applyFilters } = wp.hooks;
const { apiFetch } = wp;
const { mapState } = Vuex;

const { GetIncoming, i18n } = window.JetFBMixins;
const {
		  EntriesTable,
		  DetailsTableWithStore,
		  TablePagination,
		  ActionsColumn,
		  PaypalSubscriberColumn,
	  } = window.JetFBComponents;

const columnsComponents = applyFilters( 'jet.fb.register.paypal.recurring-payments.columns', [
	PaypalSubscriberColumn,
	ActionsColumn,
	related,
	gross,
] );

window.jfbEventBus = window.jfbEventBus || new Vue();

export default {
	name: 'jfb-paypal-payments',
	components: {
		DetailsTableWithStore,
		EntriesTable,
		TablePagination,
	},
	data() {
		return {
			list: [],
			current: {},
			currentPayload: {},
			settings: {},
			actions: {},
			columnsComponents,
			isShowPopup: false,
			loading: false,
		};
	},
	mixins: [ GetIncoming, i18n ],
	created() {
		const {
				  list    = [],
				  columns = {},
				  actions = {},
				  total,
			  } = this.getIncoming();

		this.actions = JSON.parse( JSON.stringify( actions ) );

		this.$store.commit( 'setColumns', JSON.parse( JSON.stringify( columns ) ) );
		this.$store.commit( 'setList', JSON.parse( JSON.stringify( list ) ) );

		this.$store.commit( 'setQueryState', {
			total: +total,
			limit: this.$store.state.currentList.length,
		} );

		this.$store.dispatch( 'setQueriedPage', 1 );
	},
	computed: {
		columnsFromStore() {
			return this.$store.getters.getColumns;
		},
		...mapState( [
			'loadingPage',
		] ),
	},
	methods: {
	},
};

</script>

<style lang="scss">

.jfb-popup-grid {
	display: flex;
	&-column:first-child {
		flex: 3;
	}
	&-column:not(:first-child) {
		flex: 1;
		text-align: center;
	}
}

.cx-vue-list-table {
	.cell--date {
		width: 200px;
	}
	.cell--status {
		width: 160px;
	}
	.cell--subscriber {
		width: 220px;
	}
	.cell--gross {
		width: 130px;
	}
}
</style>