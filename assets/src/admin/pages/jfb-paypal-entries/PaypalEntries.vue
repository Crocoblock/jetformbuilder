<template>
	<div :class="{
		'wrap': true,
		'jet-form-builder-page': true,
		'jet-form-builder-page--paypal-entries': true,
		['jfb-paypal-scenario--' + scenario]: true
	}">
		<h1 class="cs-vui-title">{{ __( 'JetFormBuilder Paypal Entries', 'jet-form-builder' ) }}</h1>
		<EntriesTable
			:entries-list="list"
			:columns="columnsFromStore"
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
					<DetailsTableWithStore/>
				</div>
				<h3>{{ __( 'Subscription Actions', 'jet-form-builder' ) }}</h3>
				<div class="cx-vui-inner-panel">
					<SubscriptionActionPanel
						v-for="( actionOptions, actionSlug ) in actions"
						:key="actionSlug"
						:type="actionSlug"
						v-bind="actionOptions"
					/>
				</div>
			</template>
		</cx-vui-popup>
	</div>
</template>

<script>
import * as subscriber from '../../paypal/subscriber';
import * as status from './columns/status';
import * as billing from './columns/billing-info';

import SubscriptionActionPanel from './SubscriptionActionPanel';

import '../../../../scss/admin/default.scss';

Vue.config.devtools = true;

const { applyFilters } = wp.hooks;

const { GetIncoming, i18n } = window.JetFBMixins;
const { EntriesTable, DetailsTableWithStore } = window.JetFBComponents;
const { getSearch, createPath } = window.JetFBActions;

const columnsComponents = applyFilters( 'jet.fb.register.paypal.entries.columns', [
	subscriber,
	status,
	billing,
] );

export default {
	name: 'jfb-paypal-entries',
	components: { DetailsTableWithStore, SubscriptionActionPanel, EntriesTable },
	data() {
		return {
			list: [],
			scenario: '',
			settings: {},
			actions: {},
			columnsComponents,
			isShowPopup: false,
		};
	},
	mixins: [ GetIncoming, i18n ],
	created() {
		const { list = [], columns = {}, scenario = '', actions = {} } = this.getIncoming();

		this.list = JSON.parse( JSON.stringify( list ) );
		this.actions = JSON.parse( JSON.stringify( actions ) );
		this.scenario = scenario;

		this.$store.commit( 'setColumns', JSON.parse( JSON.stringify( columns ) ) );

		this.maybeOpen();
	},
	computed: {
		columnsFromStore() {
			return this.$store.getters.getColumns;
		},
	},
	methods: {
		openPopup( entryID ) {
			const current = this.list[ entryID ] || {};

			this.$store.commit( 'setCurrent', current );

			window.history.replaceState(
				'on_open_modal',
				document.title,
				createPath( {
					sub: current.record_id.value,
				} ),
			);

			this.isShowPopup = true;
		},
		closePopup() {
			this.isShowPopup = false;
			this.$store.commit( 'clearCurrent' );

			window.history.replaceState(
				'on_open_modal',
				document.title,
				createPath( {}, {}, [ 'sub' ] ),
			);
		},
		maybeOpen() {
			const { sub } = getSearch();

			if ( ! sub ) {
				return;
			}

			for ( const entryID in this.list ) {
				const entry = this.list[ entryID ] || {};

				if ( sub === entry.record_id.value ) {
					this.openPopup( entryID );

					return;
				}
			}
		},
	},
};

</script>

<style lang="scss">

.cx-vui-popup__body {
	max-height: 85vh;
	overflow: auto;
}

.cx-vui-button--style-link-error {
	background: #ffffff;
	box-shadow: 0 4px 4px rgb(201 44 44 / 50%);
}

.cx-vui-component--fullwidth-label {
	.cx-vui-component__meta {
		justify-content: center;
		flex: 1;
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

	.cell--record_id {
		width: 160px;
	}

	.cell--status {
		width: 160px;
		text-align: center;
	}

	.cell--subscriber {
		width: 220px;
	}

	.cell--plan_info {
		width: 300px;
	}

	.cell--create_time {
		width: 160px;
	}
}
</style>