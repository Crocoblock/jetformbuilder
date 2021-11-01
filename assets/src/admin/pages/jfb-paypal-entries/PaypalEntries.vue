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
			@dblclick-row="openPopup"
		/>
		<cx-vui-popup
			v-model="isShowPopup"
			body-width="60vw"
			:footer="false"
			@on-cancel="closePopup"
		>
			<template #content>
				<h3>{{ __( 'Subscription Information', 'jet-form-builder' ) }}</h3>
				<div class="cx-vui-inner-panel">
					<DetailsTable
						:source="currentPopupData"
						:columns="columns"
					/>
				</div>
				<h3>{{ __( 'Subscription Actions', 'jet-form-builder' ) }}</h3>
				<div class="cx-vui-inner-panel">
					<cx-vui-button
						button-style="link-error"
					>
						<template #label>{{ __( 'Cancel', 'jet-form-builder' ) }}</template>
					</cx-vui-button>
					<cx-vui-button
						button-style="link-error"
					>
						<template #label>{{ __( 'Suspend', 'jet-form-builder' ) }}</template>
					</cx-vui-button>
				</div>
			</template>
		</cx-vui-popup>
	</div>
</template>

<script>
import * as subscriber from './columns/subscriber';
import * as status from './columns/status';

Vue.config.devtools = true;

const { applyFilters } = wp.hooks;

const { GetIncoming, i18n } = window.JetFBMixins;
const { EntriesTable, DetailsTable } = window.JetFBComponents;

const columnsComponents = applyFilters( 'jet.fb.register.paypal.entries.columns', [
	subscriber,
	status,
] );

export default {
	name: 'jfb-paypal-entries',
	components: { DetailsTable, EntriesTable },
	data() {
		return {
			list: [],
			columns: {},
			scenario: '',
			settings: {},
			columnsComponents,
			isShowPopup: false,
			currentPopupData: {},
		};
	},
	mixins: [ GetIncoming, i18n ],
	created() {
		const { list = [], columns = {}, scenario = '', settings = {} } = this.getIncoming();

		this.list = JSON.parse( JSON.stringify( list ) );
		this.columns = JSON.parse( JSON.stringify( columns ) );
		this.scenario = scenario;
	},
	methods: {

		openPopup( entryID ) {
			this.currentPopupData = this.list[ entryID ] || {};
			this.isShowPopup = true;
		},
		closePopup() {
			this.isShowPopup = false;
			this.currentPopupData = {};
		},
		getCurrentValueInPopup( columnName ) {
			return this.currentPopupData[ columnName ]?.value;
		},
	},
};

</script>

<style lang="scss">

.cx-vui-button--style-link-error {
	background: #ffffff;
	box-shadow: 0 4px 4px rgb(201 44 44 / 50%);
}

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