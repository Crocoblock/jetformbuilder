<template>
	<div :class="{
		'wrap': true,
		'jet-form-builder-page': true,
		'jet-form-builder-page--payments': true,
	}">
		<h1 class="cs-vui-title">{{ __( 'JetFormBuilder Payments', 'jet-form-builder' ) }}</h1>
		<TablePagination/>
		<EntriesTable
			:loading="loadingPage"
			:columns="getColumns"
			:columns-components="columnsComponents"
		/>
		<template v-if="$slots.default">
			<slot name="default"></slot>
		</template>
		<TablePagination />
	</div>
</template>

<script>
import TablePagination from '../TablePagination';
import * as PaymentType from './payment-type';
import * as StatusColumn from './status';
import EntriesTable from '../EntriesTable';

const { PayerColumn } = JetFBComponents;
const { GetIncoming, i18n } = JetFBMixins;

Vue.config.devtools = true;

const { applyFilters } = wp.hooks;
const { apiFetch } = wp;
const { mapState, mapGetters } = Vuex;

window.jfbEventBus = window.jfbEventBus || new Vue( {} );

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
			columnsComponents: [],
		};
	},
	mixins: [ GetIncoming, i18n ],
	created() {
		this.columnsComponents = [
			PayerColumn,
			PaymentType,
			StatusColumn,
			...this.columns,
		]
	},
	computed: {
		...mapState( [
			'loadingPage',
		] ),
		...mapGetters( [
			'getColumns'
		] )
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

		&:hover {
			background-color: #e3f6fd;
		}
	}

}
</style>