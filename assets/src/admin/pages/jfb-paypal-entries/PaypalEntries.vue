<template>
	<div :class="{
		'wrap': true,
		'jet-form-builder-page': true,
		'jet-form-builder-page--paypal-entries': true,
		['jfb-paypal-scenario--' + scenario]: true
	}">
		<h1 class="cs-vui-title">{{ __( 'JetFormBuilder Paypal Entries', 'jet-form-builder' ) }}</h1>
		<cx-vui-pagination
			:total="100"
			:page-size="5"
			:current="1"
		></cx-vui-pagination>
		<EntriesTable
			:entries-list="list"
			:columns="columnsFromStore"
			:columns-components="columnsComponents"
			@dblclick-row="openPopup"
		/>
		<cx-vui-pagination
			:total="100"
			:page-size="5"
			:current="1"
		></cx-vui-pagination>
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
		<div class="loader" v-if="loading"></div>
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

const { apiFetch } = wp;

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
			loading: false,
			scenario: '',
			settings: {},
			actions: {},
			receive_url: '',
			columnsComponents,
			isShowPopup: false,
		};
	},
	mixins: [ GetIncoming, i18n ],
	created() {
		const {
				  list        = [],
				  columns     = {},
				  scenario    = '',
				  actions     = {},
				  receive_url = '',
			  } = this.getIncoming();

		this.list = JSON.parse( JSON.stringify( list ) );
		this.actions = JSON.parse( JSON.stringify( actions ) );
		this.scenario = scenario;
		this.receive_url = receive_url;

		this.$store.commit( 'setColumns', JSON.parse( JSON.stringify( columns ) ) );

		this.maybeOpen();
	},
	computed: {
		columnsFromStore() {
			return this.$store.getters.getColumns;
		},
		current() {
			return this.$store.getters.getCurrent;
		},
		currentSubscription() {
			return this.$store.getters.currentSubscription;
		}
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

			if ( this.currentSubscription.sub_id ) {
				this.isShowPopup = true;
				return;
			}

			this.loading = true;

			this.fetchPlan()
				.then( response => {
					this.$store.commit( 'saveSubscription', response.data )
					this.isShowPopup = true;
				} )
				.finally( () => {
					this.loading = false;
				} );
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
		fetchPlan() {
			const options = {
				...this.current?.links?.value?.plan_details || {},
			};

			return new Promise( ( resolve, reject ) => {
				apiFetch( options ).then( resolve ).catch( error => {
					this.$CXNotice.add( {
						message: error.message,
						type: 'error',
						duration: 4000,
					} );

					reject( error );
				} );
			} );
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

.loader {
	/* Absolute Center Spinner */
	position: fixed;
	z-index: 999;
	height: 2em;
	width: 2em;
	overflow: visible;
	margin: auto;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;

	/* Transparent Overlay */
	&:before {
		content: '';
		display: block;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: radial-gradient(rgba(20, 20, 20,.8), rgba(0, 0, 0, .5));

		background: -webkit-radial-gradient(rgba(20, 20, 20,.8), rgba(0, 0, 0,.5));
	}

	/* :not(:required) hides these rules from IE9 and below */
	&:not(:required) {
		/* hide "loading..." text */
		font: 0/0 a;
		color: transparent;
		text-shadow: none;
		background-color: transparent;
		border: 0;
	}

	&:not(:required):after {
		content: '';
		display: block;
		font-size: 10px;
		width: 1em;
		height: 1em;
		margin-top: -0.5em;
		-webkit-animation: spinner 150ms infinite linear;
		-moz-animation: spinner 150ms infinite linear;
		-ms-animation: spinner 150ms infinite linear;
		-o-animation: spinner 150ms infinite linear;
		animation: spinner 150ms infinite linear;
		border-radius: 0.5em;
		-webkit-box-shadow: rgba(255,255,255, 0.75) 1.5em 0 0 0, rgba(255,255,255, 0.75) 1.1em 1.1em 0 0, rgba(255,255,255, 0.75) 0 1.5em 0 0, rgba(255,255,255, 0.75) -1.1em 1.1em 0 0, rgba(255,255,255, 0.75) -1.5em 0 0 0, rgba(255,255,255, 0.75) -1.1em -1.1em 0 0, rgba(255,255,255, 0.75) 0 -1.5em 0 0, rgba(255,255,255, 0.75) 1.1em -1.1em 0 0;
		box-shadow: rgba(255,255,255, 0.75) 1.5em 0 0 0, rgba(255,255,255, 0.75) 1.1em 1.1em 0 0, rgba(255,255,255, 0.75) 0 1.5em 0 0, rgba(255,255,255, 0.75) -1.1em 1.1em 0 0, rgba(255,255,255, 0.75) -1.5em 0 0 0, rgba(255,255,255, 0.75) -1.1em -1.1em 0 0, rgba(255,255,255, 0.75) 0 -1.5em 0 0, rgba(255,255,255, 0.75) 1.1em -1.1em 0 0;
	}
}
/* Animation */

@-webkit-keyframes spinner {
	0% {
		-webkit-transform: rotate(0deg);
		-moz-transform: rotate(0deg);
		-ms-transform: rotate(0deg);
		-o-transform: rotate(0deg);
		transform: rotate(0deg);
	}
	100% {
		-webkit-transform: rotate(360deg);
		-moz-transform: rotate(360deg);
		-ms-transform: rotate(360deg);
		-o-transform: rotate(360deg);
		transform: rotate(360deg);
	}
}
@-moz-keyframes spinner {
	0% {
		-webkit-transform: rotate(0deg);
		-moz-transform: rotate(0deg);
		-ms-transform: rotate(0deg);
		-o-transform: rotate(0deg);
		transform: rotate(0deg);
	}
	100% {
		-webkit-transform: rotate(360deg);
		-moz-transform: rotate(360deg);
		-ms-transform: rotate(360deg);
		-o-transform: rotate(360deg);
		transform: rotate(360deg);
	}
}
@-o-keyframes spinner {
	0% {
		-webkit-transform: rotate(0deg);
		-moz-transform: rotate(0deg);
		-ms-transform: rotate(0deg);
		-o-transform: rotate(0deg);
		transform: rotate(0deg);
	}
	100% {
		-webkit-transform: rotate(360deg);
		-moz-transform: rotate(360deg);
		-ms-transform: rotate(360deg);
		-o-transform: rotate(360deg);
		transform: rotate(360deg);
	}
}
@keyframes spinner {
	0% {
		-webkit-transform: rotate(0deg);
		-moz-transform: rotate(0deg);
		-ms-transform: rotate(0deg);
		-o-transform: rotate(0deg);
		transform: rotate(0deg);
	}
	100% {
		-webkit-transform: rotate(360deg);
		-moz-transform: rotate(360deg);
		-ms-transform: rotate(360deg);
		-o-transform: rotate(360deg);
		transform: rotate(360deg);
	}
}
</style>