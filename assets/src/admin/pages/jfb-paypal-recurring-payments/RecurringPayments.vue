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
				<h3>{{ __( 'Payment Details', 'jet-form-builder' ) }}</h3>
				<div class="jfb-popup-grid cx-vui-inner-panel">
					<div class="jfb-popup-grid-column cx-vui-panel">
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
					</div>
					<div class="jfb-popup-grid-column">
						<cx-vui-button
							button-style="accent"
							@click="refund"
							:loading="loading"
						>
							<template #label>{{ __( 'Issue Refund', 'jet-form-builder' ) }}</template>
						</cx-vui-button>
					</div>
				</div>
			</template>
		</cx-vui-popup>
	</div>
</template>

<script>
import '../../../../scss/admin/default.scss';
import * as subscriber from '../../paypal/subscriber';
import * as actions from '../../paypal/actions';
import * as related from './related-id-column';
import * as gross from './gross';

Vue.config.devtools = true;

const { applyFilters } = wp.hooks;
const { apiFetch } = wp;

const { GetIncoming, i18n } = window.JetFBMixins;
const { EntriesTable, DetailsTableWithStore } = window.JetFBComponents;

const columnsComponents = applyFilters( 'jet.fb.register.paypal.recurring-payments.columns', [
	subscriber,
	actions,
	related,
	gross
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
			loading: false,
		};
	},
	mixins: [ GetIncoming, i18n ],
	created() {
		const { list = [], columns = {}, actions = {} } = this.getIncoming();

		this.list = JSON.parse( JSON.stringify( list ) );
		this.actions = JSON.parse( JSON.stringify( actions ) );

		this.$store.commit( 'setColumns', JSON.parse( JSON.stringify( columns ) ) );

		jfbEventBus.$on( 'click-refund', this.openPopup.bind( this ) );
		jfbEventBus.$on( 'click-view_subscription', this.viewSubscription.bind( this ) );
	},
	computed: {
		columnsFromStore() {
			return this.$store.getters.getColumns;
		},
	},
	methods: {
		openPopup( payload, entry ) {
			this.current = entry;
			this.currentPayload = payload;
			this.isShowPopup = true;
		},
		closePopup() {
			this.isShowPopup = false;
			this.current = {};
			this.currentPayload = {};
		},
		viewSubscription( payload, entry ) {
			window.open( payload.url, '_blank' );
		},
		refund() {
			const options = {
				url: this.currentPayload.url,
				method: this.currentPayload.method,
				data: {
					note_to_payer: this.currentPayload.note_to_payer.value,
					invoice_id: this.currentPayload.invoice_id.value,
				},
			};

			this.loading = true;

			apiFetch( options ).then( res => {
				this.$CXNotice.add( {
					message: res.message,
					type: 'success',
					duration: 4000,
				} );

				this.loading = false;
			} ).catch( error => {
				this.$CXNotice.add( {
					message: error.message,
					type: 'error',
					duration: 4000,
				} );

				this.loading = false;
			} );
		},
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

	.list-table-heading {
		justify-content: space-between;
	}

	.list-table-item {
		justify-content: space-between;
		&__cell {
			white-space: nowrap;
			overflow: hidden;
		}
	}

	.cell--date {
		width: 150px;
	}

	.cell--related_id {
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
		text-align: center;
	}
}
</style>