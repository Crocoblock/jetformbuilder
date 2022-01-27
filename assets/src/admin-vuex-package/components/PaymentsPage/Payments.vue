<template>
	<div :class="{
		'wrap': true,
		'jet-form-builder-page': true,
		'jet-form-builder-page--payments': true,
	}">
		<h1 class="cs-vui-title">{{ __( 'JetFormBuilder Payments', 'jet-form-builder' ) }}</h1>
		<template v-if="$slots.top">
			<slot name="top"></slot>
		</template>
		<TablePagination v-else/>

		<EntriesTable
			:loading="loadingPage"
			:columns="columnsFromStore"
			:columns-components="columnsComponents"
		/>
		<template v-if="$slots.default">
			<slot name="default"></slot>
		</template>

		<template v-if="$slots.bottom">
			<slot name="bottom"></slot>
		</template>
		<TablePagination v-else/>
	</div>
</template>

<script>
import TablePagination from '../TablePagination';
import * as PaymentType from './payment-type';
import * as StatusColumn from './status';

const { PayerColumn, EntriesTable } = JetFBComponents;
const { GetIncoming, i18n } = JetFBMixins;

Vue.config.devtools = true;

const { applyFilters } = wp.hooks;
const { apiFetch } = wp;
const { mapState } = Vuex;
window.jfbEventBus = window.jfbEventBus || new Vue();

export default {
	name: 'payments-table-core',
	props: {
		columns: {
			type: Array,
			default: () => [],
		},
	},
	components: {
		EntriesTable,
		TablePagination,
	},
	data() {
		return {
			actions: {},
			columnsComponents: [],
			isShowPopup: false,
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

		this.columnsComponents = [
			PayerColumn,
			PaymentType,
			StatusColumn,
			...this.columns,
		]
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
	methods: {},
};

</script>

<style lang="scss">

.jet-form-builder-page--payments {
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
		.cell--id {
			width: 100px;
		}
		.cell--date {
			width: 200px;
		}
		.cell--type {
			width: 160px;
		}
		.cell--status {
			width: 160px;
		}
		.cell--payer {
			width: 220px;
		}
		.cell--gross {
			width: 160px;
		}
		.cell--transaction_id {
			width: 200px;
		}
	}
}
</style>