<template>
	<div :class="{
		'wrap': true,
		'jet-fb-paypal-entries-page': true,
		['jfb-paypal-scenario--' + scenario]: true
	}">
		<h1 class="cs-vui-title">{{ __( 'JetFormBuilder Paypal Entries', 'jet-form-builder' ) }}</h1>
		<div class="cx-vui-panel">
			<cx-vui-list-table>
				<template #heading>
					<cx-vui-list-table-heading
						:slots="columnsIDs"
					>
					<span
						:key="column"
						:slot="column"
						v-for="column in columnsIDs"
					>
						{{ columns[ column ].label }}
            		</span>

					</cx-vui-list-table-heading>
				</template>
				<template #items>
					<div
						:key="entryID"
						v-for="( entry, entryID ) in list"
						:class="classEntry( entryID )"
					>
						<div
							v-for="column in columnsIDs"
							:class="[ 'list-table-item__cell', 'cell--' + column ]"
						>
							<template v-if="getColumnComponent( column )">
								<keep-alive>
									<component
										v-bind:is="getColumnComponent( column )"
										:value="entry[column].value"
										:entry="entry"
									/>
								</keep-alive>
							</template>
							<template v-else>{{ entry[ column ].value }}</template>
						</div>

					</div>
				</template>
			</cx-vui-list-table>
		</div>
	</div>
</template>

<style lang="scss">

.cx-vue-list-table {

	.cell--id {
		width: 4%;
	}

	.cell--record_id {
		width: 15%;
	}

	.cell--status {
		width: 10%;
	}

	.cell--subscriber {
		width: 16%;
	}

	.cell--plan_info {
		width: 20%;
	}

	.cell--status_update_time {
		width: 15%;
	}

	.cell--create_time {
		width: 15%;
	}
}
</style>

<script>
import SubscriberInfo from './columns/SubscriberInfo';

Vue.config.devtools = true;

const { __ } = wp.i18n;
const { applyFilters } = wp.hooks;

const { GetIncoming } = window.JetFBMixins;

const columnsComponents = applyFilters( 'jet.fb.register.paypal.entries.columns', [
	SubscriberInfo,
] );

export default {
	name: 'paypal-entries',
	data() {
		return {
			list: [],
			columns: {},
			columnsIDs: [],
			scenario: '',
			columnsComponents,
		};
	},
	mixins: [ GetIncoming ],
	created() {
		const { list = [], columns = {}, scenario = '' } = this.getIncoming();

		this.list = list;
		this.columns = columns;
		this.columnsIDs = Object.keys( this.columns );
		this.scenario = scenario;
	},
	methods: {
		classEntry( entryID ) {
			return {
				'list-table-item': true,
				[ 'list-table-item--' + entryID ]: true,
			};
		},
		getColumnComponent( column ) {
			return this.columnsComponents.find( comp => comp.name === column );
		},
		__( string, context ) {
			return __( string, context );
		},
	},
};

</script>