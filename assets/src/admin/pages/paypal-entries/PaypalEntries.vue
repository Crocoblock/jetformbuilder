<template>
	<div :class="{
		'wrap': true,
		'jet-fb-paypal-entries-page': true,
		['jfb-paypal-scenario--' + scenario]: true
	}">
		<h1 class="cs-vui-title">{{ __( 'JetFormBuilder Paypal Entries', 'jet-form-builder' ) }}</h1>
		<EntriesTable
			:entries-list="list"
			:columns="columns"
			:columns-components="columnsComponents"
		/>
	</div>
</template>

<script>
import * as subscriber from './columns/subscriber';
import * as status from './columns/status';

Vue.config.devtools = true;

const { __ } = wp.i18n;
const { applyFilters } = wp.hooks;

const { GetIncoming } = window.JetFBMixins;
const { EntriesTable } = window.JetFBComponents;

const columnsComponents = applyFilters( 'jet.fb.register.paypal.entries.columns', [
	subscriber,
	status
] );

export default {
	name: 'paypal-entries',
	components: { EntriesTable },
	data() {
		return {
			list: [],
			columns: {},
			scenario: '',
			settings: {},
			columnsComponents,
		};
	},
	mixins: [ GetIncoming ],
	created() {
		const { list = [], columns = {}, scenario = '', settings = {} } = this.getIncoming();

		this.list = list;
		this.columns = columns;
		this.scenario = scenario;
	},
	methods: {
		__( string, context ) {
			return __( string, context );
		},
	},
};

</script>

<style lang="scss">

.cx-vue-list-table {

	.list-table-item__cell {
		white-space: nowrap;
		overflow: hidden;
	}

	.cell--choose {
		width: 4%;
	}

	.cell--id {
		width: 4%;
	}

	.cell--record_id {
		width: 13%;
	}

	.cell--status {
		width: 11%;
	}

	.cell--subscriber {
		width: 24%;
	}

	.cell--plan_info {
		width: 27%;
	}

	.cell--create_time {
		width: 15%;
	}
}
</style>