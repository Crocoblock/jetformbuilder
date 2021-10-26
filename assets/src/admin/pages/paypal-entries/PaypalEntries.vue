<template>
	<div class="jet-fb-paypal-entries-page wrap">
		<h1 class="cs-vui-title">{{ __( 'JetFormBuilder Paypal Entries', 'jet-form-builder' ) }}</h1>
		<div class="cx-vui-panel">
			<cx-vui-list-table>
				<cx-vui-list-table-heading
					:slots="columnsIDs"
					#heading
				>
					<span
						:key="column"
						:slot="column"
						v-for="column in columnsIDs"
					>
						{{ columns[ column ].label }}
            		</span>
				</cx-vui-list-table-heading>
			</cx-vui-list-table>
		</div>
	</div>
</template>

<script>
import GetIncoming from '@admin/mixins/GetIncoming';

Vue.config.devtools = true;

const { __ } = wp.i18n;

export default {
	name: 'paypal-entries',
	data() {
		return {
			list: [],
			columns: {},
			columnsIDs: [],
			scenario: ''
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
		__( string, context ) {
			return __( string, context );
		},
	},
}

</script>