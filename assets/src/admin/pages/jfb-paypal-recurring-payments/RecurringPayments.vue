<template>
	<div :class="{
		'wrap': true,
		'jet-form-builder-page': true,
		'jet-form-builder-page--paypal-recurring-payments': true,
	}">
		<h1 class="cs-vui-title">{{ __( 'JetFormBuilder Paypal Recurring Payments', 'jet-form-builder' ) }}</h1>
		<EntriesTable
			:entries-list="list"
			:columns="columnsFromStore"
			:columns-components="columnsComponents"
		/>
		<cx-vui-popup
			v-model="isShowPopup"
			body-width="60vw"
			:footer="false"
			@on-cancel="closePopup"
		>
			<template #content>
				<h3>{{ __( 'Issue Refund', 'jet-form-builder' ) }}</h3>
				<cx-vui-input
					:label="currentPayload.contact_name.label"
					:wrapper-css="[ 'equalwidth' ]"
					:value="current.subscriber.value.name.given_name + ' ' + current.subscriber.value.name.surname"
					size="fullwidth"
					disabled
				/>
				<cx-vui-input
					:label="currentPayload.contact_email.label"
					:wrapper-css="[ 'equalwidth' ]"
					:value="current.subscriber.value.email_address"
					size="fullwidth"
					disabled
				/>
				<cx-vui-input
					:label="currentPayload.amount.label"
					:wrapper-css="[ 'equalwidth' ]"
					:value="current.gross.value"
					size="fullwidth"
					disabled
				/>
				<cx-vui-input
					:label="currentPayload.invoice_id.label"
					:wrapper-css="[ 'equalwidth' ]"
					v-model="currentPayload.invoice_id.value"
					size="fullwidth"
				/>
				<cx-vui-input
					:label="currentPayload.note_to_payer.label"
					:wrapper-css="[ 'equalwidth' ]"
					v-model="currentPayload.note_to_payer.value"
					size="fullwidth"
				/>
			</template>
		</cx-vui-popup>
	</div>
</template>

<script>
import '../../../../scss/admin/default.scss';
import * as subscriber from '../../paypal/subscriber';
import * as actions from '../../paypal/actions';

Vue.config.devtools = true;

const { applyFilters } = wp.hooks;

const { GetIncoming, i18n } = window.JetFBMixins;
const { EntriesTable, DetailsTableWithStore } = window.JetFBComponents;

const columnsComponents = applyFilters( 'jet.fb.register.paypal.recurring-payments.columns', [
	subscriber,
	actions,
] );

window.jfbEventBus = window.jfbEventBus || new Vue();

export default {
	name: 'jfb-paypal-recurring-payments',
	components: { DetailsTableWithStore, EntriesTable },
	data() {
		return {
			list: [],
			current: {},
			currentPayload: {},
			settings: {},
			actions: {},
			columnsComponents,
			isShowPopup: false,
		};
	},
	mixins: [ GetIncoming, i18n ],
	created() {
		const { list = [], columns = {}, actions = {} } = this.getIncoming();

		this.list = JSON.parse( JSON.stringify( list ) );
		this.actions = JSON.parse( JSON.stringify( actions ) );

		this.$store.commit( 'setColumns', JSON.parse( JSON.stringify( columns ) ) );

		jfbEventBus.$on( 'click-refund', this.refund.bind( this ) );
	},
	computed: {
		columnsFromStore() {
			return this.$store.getters.getColumns;
		},
	},
	methods: {
		refund( payload, entry ) {
			this.current = entry;
			this.currentPayload = payload;

			this.openPopup();
		},
		openPopup() {
			this.isShowPopup = true;
		},
		closePopup() {
			this.isShowPopup = false;
			this.current = {};
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

	.cell--date {
		width: 20%;
	}

	.cell--status {
		width: 20%;
	}

	.cell--subscriber {
		width: 20%;
	}

	.cell--gross {
		width: 20%;
	}
}
</style>