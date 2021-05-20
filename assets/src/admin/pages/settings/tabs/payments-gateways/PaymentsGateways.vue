<template>
	<section>
		<cx-vui-switcher
			name="use_gateways"
			:wrapper-css="[ 'equalwidth' ]"
			:label="label.use_gateways"
			:value="storage.use_gateways"
			@input="changeVal( 'use_gateways', $event )"
		></cx-vui-switcher>
		<cx-vui-switcher
			v-if="storage.use_gateways"
			name="enable_test_mode"
			:wrapper-css="[ 'equalwidth' ]"
			:label="label.enable_test_mode"
			:value="storage.enable_test_mode"
			@input="changeVal( 'enable_test_mode', $event )"
		></cx-vui-switcher>
		<template v-if="storage.use_gateways">
			<CxVuiCollapseMini
				v-for="( tab, index ) in gateways"
				:desc="tab.desc || ''"
				:label="tab.title"
				:key="tab.component.name"
			>
				<keep-alive>
					<component
						v-bind:is="tab.component"
						ref="gateways"
						:incoming="getIncoming( tab.component.name )"
					/>
				</keep-alive>
				<cx-vui-button
					button-style="accent"
					:loading="loadingGateways[ tab.component.name ]"
					@click="onSaveGateway( index, tab.component.name )"
				>
					<span slot="label">Save</span>
				</cx-vui-button>
			</CxVuiCollapseMini>
		</template>
	</section>
</template>

<script>
import CxVuiCollapseMini from '@admin/components/collapse-mini/CxVuiCollapseMini';
import {
	help,
	label,
} from "./source";
import SaveTabByAjax from '@admin/mixins/SaveTabByAjax';
import GetIncoming from '@admin/mixins/GetIncoming';
import * as paypal from '../../gateways/paypal';

const { applyFilters } = wp.hooks;

const gatewaysTabs = applyFilters( 'jet.fb.register.gateways', [
	paypal,
] );

let requestFunc = () => {};

export default {
	name: 'payments-gateways',
	props: {
		incoming: {
			type: Object,
			default() {
				return {};
			},
		},
	},
	components: { CxVuiCollapseMini },
	mixins: [ SaveTabByAjax, GetIncoming ],
	data() {
		return {
			label, help,
			storage: JSON.parse( JSON.stringify( this.incoming ) ),
			gateways: gatewaysTabs,
			loadingGateways: {},
		};
	},
	created() {
		jfbEventBus.$on( 'request-state', props => {
			const { state, slug } = props;
			this.$set( this.loadingGateways, slug, state === 'begin' );
		} );

		requestFunc = _.debounce( () => {
			this.saveByAjax( this, this.$options.name )
		}, 1000 );
	},
	methods: {
		changeVal( name, value ) {
			this.$set( this.storage, name, value );

			requestFunc();
		},
		onSaveGateway( indexTab, tabSlug ) {
			const current = this.$refs.gateways[ indexTab ];

			this.saveByAjax( current, tabSlug );
		},
		getRequestOnSave() {
			return {
				data: { ...this.storage },
			};
		},
	},
}

</script>