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
			:page-size="query.limit"
			:current="query.currentPage"
		></cx-vui-pagination>
		<EntriesTable
			:entries-list="currentList"
			:columns="columnsFromStore"
			:columns-components="columnsComponents"
		/>
		<cx-vui-pagination
			:total="100"
			:page-size="5"
			:current="1"
		></cx-vui-pagination>
		<cx-vui-popup
			:value="isShowPopup"
			@change="togglePopup"
			body-width="60vw"
			:footer="false"
			@on-cancel="closePopup"
		>
			<template #content>
				<DetailsTableWithStore/>
				<div class="jfb-subscriptions-actions">
					<SubscriptionActions/>
				</div>
				<h3>{{ __( 'Notes', 'jet-form-builder' ) }}</h3>
				<SimpleWrapperComponent>
					<template #meta>
						<div
							class="jfb-note"
							v-for="val in current.notes.value"
							:key="val"
						>
							{{ val.created_dt }} <{{ val.by }}>: {{ val.note }}
						</div>
					</template>
					<cx-vui-textarea
						:size="'fullwidth'"
						rows="10"
						prevent-wrap
						v-model="note"
					>
						<cx-vui-button
							@click="addNote"
							:loading="loadingNote"
							:disabled="isDoingAction"
							button-style="accent"
							size="mini"
						>
							<template #label>{{ 'Add' }}</template>
						</cx-vui-button>
					</cx-vui-textarea>
				</SimpleWrapperComponent>
			</template>
		</cx-vui-popup>
		<div class="loader" v-if="isLoadingPopup"></div>
	</div>
</template>

<script>
import * as status from './columns/status';
import * as actions from './columns/actions';

import SubscriptionActions from './SubscriptionActions';

import '../../../../scss/admin/default.scss';

Vue.config.devtools = true;

const { applyFilters } = wp.hooks;

const {
		  GetIncoming,
		  i18n,
	  } = window.JetFBMixins;
const {
		  EntriesTable,
		  DetailsTableWithStore,
		  DetailsTable,
		  SimpleWrapperComponent,
	  } = window.JetFBComponents;

const {
		  getSearch,
		  createPath,
	  } = window.JetFBActions;

const columnsComponents = applyFilters( 'jet.fb.register.paypal.entries.columns', [
	status,
	actions,
] );

export default {
	name: 'jfb-paypal-entries',
	components: {
		DetailsTableWithStore,
		SubscriptionActions,
		EntriesTable,
		SimpleWrapperComponent,
	},
	data() {
		return {
			scenario: '',
			settings: {},
			receive_url: '',
			columnsComponents,
			note: '',
			loadingNote: false,
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

		this.scenario = scenario;
		this.receive_url = receive_url;

		this.$store.commit( 'setList', JSON.parse( JSON.stringify( list ) ) );
		this.$store.commit( 'setColumns', JSON.parse( JSON.stringify( columns ) ) );
		this.$store.commit( 'setActions', JSON.parse( JSON.stringify( actions ) ) );

		this.maybeOpen();
	},
	computed: {
		columnsFromStore() {
			return this.$store.getters.getColumns;
		},
		current() {
			return this.$store.getters.getCurrent;
		},
		currentList() {
			return this.$store.getters.getList;
		},
		currentSubscription() {
			return this.$store.getters.currentSubscription;
		},
		isLoadingPopup() {
			return this.$store.getters.isLoadingPopup;
		},
		isShowPopup() {
			return this.$store.getters.isShowPopup;
		},
		isDoingAction() {
			return this.$store.getters.isDoingAction;
		},
		query() {
			return this.$store.getters.getQueryState;
		}
	},
	methods: {
		togglePopup() {
			this.$store.commit( 'togglePopup' );
		},
		openPopup( entryID ) {
			this.$store.dispatch( 'openPopup', entryID );
		},
		closePopup() {
			this.note = '';
			this.$store.dispatch( 'closePopup' );
		},
		addNote() {
			this.loadingNote = true;

			this.$store.dispatch( 'addNote', this.note ).then( () => {
				this.loadingNote = false;
				this.note = '';
			} );
		},
		maybeOpen() {
			const { sub } = getSearch();

			if ( ! sub ) {
				return;
			}

			for ( const [ entryID, entry ] of Object.entries( this.currentList ) ) {
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
	position: relative;
	.cx-vui-component-raw {
		position: sticky;
		top: 0;
		text-align: end;
	}
}

.jfb-subscriptions-actions {
	width: 60vw;
	background-color: #fff;
	padding: 1em;
	border-top: 1px solid #eee;
	box-sizing: border-box;
	position: sticky;
	bottom: -3em;
	& > div {
		display: flex;
		column-gap: 10px;
		justify-content: flex-end;
	}
}

.jfb-note {
	padding: 1em 0.5em;
	width: 100%;
	&:nth-child(odd) {
		background-color: #eee;
	}
}

button.cx-vui-button.cx-vui-button--size-link:hover {
	box-shadow: 0 4px 4px;
}

.cx-vui-component--fullwidth-label {
	.cx-vui-component__meta {
		justify-content: center;
		flex: 1;
	}
}

.cx-vue-list-table {
	.cell--record_id {
		width: 160px;
	}
	.cell--status {
		width: 160px;
		text-align: center;
	}
	.cell--subscriber_name {
		width: 250px;
	}
	.cell--create_time {
		width: 160px;
	}
	.cell--actions {
		width: 200px;
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
		background: radial-gradient(rgba(20, 20, 20, .8), rgba(0, 0, 0, .5));
		background: -webkit-radial-gradient(rgba(20, 20, 20, .8), rgba(0, 0, 0, .5));
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
		-webkit-box-shadow: rgba(255, 255, 255, 0.75) 1.5em 0 0 0, rgba(255, 255, 255, 0.75) 1.1em 1.1em 0 0, rgba(255, 255, 255, 0.75) 0 1.5em 0 0, rgba(255,255,255, 0.75) -1.1em 1.1em 0 0, rgba(255,255,255, 0.75) -1.5em 0 0 0, rgba(255,255,255, 0.75) -1.1em -1.1em 0 0, rgba(255, 255, 255, 0.75) 0 -1.5em 0 0, rgba(255, 255, 255, 0.75) 1.1em -1.1em 0 0;
		box-shadow: rgba(255, 255, 255, 0.75) 1.5em 0 0 0, rgba(255, 255, 255, 0.75) 1.1em 1.1em 0 0, rgba(255, 255, 255, 0.75) 0 1.5em 0 0, rgba(255,255,255, 0.75) -1.1em 1.1em 0 0, rgba(255,255,255, 0.75) -1.5em 0 0 0, rgba(255,255,255, 0.75) -1.1em -1.1em 0 0, rgba(255, 255, 255, 0.75) 0 -1.5em 0 0, rgba(255, 255, 255, 0.75) 1.1em -1.1em 0 0;
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