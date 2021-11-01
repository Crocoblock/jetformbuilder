<template>
	<section>
		<cx-vui-switcher
			name="use_gateways"
			:wrapper-css="[ 'equalwidth' ]"
			:label="label.use_gateways"
			:description="help.use_gateways"
			:value="storage.use_gateways"
			@input="changeVal( 'use_gateways', $event )"
		></cx-vui-switcher>
		<cx-vui-switcher
			v-if="storage.use_gateways"
			name="enable_test_mode"
			:wrapper-css="[ 'equalwidth' ]"
			:description="help.enable_test_mode"
			:label="label.enable_test_mode"
			:value="storage.enable_test_mode"
			@input="changeVal( 'enable_test_mode', $event )"
		></cx-vui-switcher>
		<template v-if="storage.use_gateways">
			<div class="cx-vui-inner-panel">
				<CxVuiCollapseMini
					with-panel
					v-for="( tab, index ) in gateways"
					:desc="tab.desc || ''"
					:label="tab.title"
					:key="tab.component.name"
					:initial-active="isActive( tab.component.name )"
					@change="onChangeActive( $event, tab.component.name )"
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
			</div>
		</template>
	</section>
</template>

<script>
import {
	help,
	label,
} from "./source";
import * as paypal from '../../gateways/paypal';

const { applyFilters } = wp.hooks;

const { SaveTabByAjax, GetIncoming } = window.JetFBMixins;
const { CxVuiCollapseMini } = window.JetFBComponents;

window.jfbEventBus = window.jfbEventBus || new Vue();

const gatewaysTabs = applyFilters( 'jet.fb.register.gateways', [
	paypal,
] );

let requestFunc = () => {
};

export default {
	name: 'payments-gateways',
	props: {
		incoming: {
			type: Object,
			default() {
				return {};
			},
		},
		innerSlugs: Array,
	},
	components: { CxVuiCollapseMini },
	mixins: [ SaveTabByAjax, GetIncoming ],
	data() {
		return {
			label, help,
			storage: JSON.parse( JSON.stringify( this.incoming ) ),
			gateways: gatewaysTabs,
			loadingGateways: {},
			activeGatewaysTabs: [],
		};
	},
	created() {
		jfbEventBus.$on( 'request-state', props => {
			const { state, slug } = props;
			this.$set( this.loadingGateways, slug, state === 'begin' );
		} );


		jfbEventBus.$on( 'change-tab', ( function( { slug } ) {
			if ( slug !== this.$options.name ) {
				return false;
			}

			window.location.hash = '#' + [ this.$options.name, ...this.activeGatewaysTabs ].join( '__' );
		} ).bind( this ) );

		this.activeGatewaysTabs = this.innerSlugs;

		requestFunc = _.debounce( () => {
			this.saveByAjax( this, this.$options.name )
		}, 1000 );
	},
	methods: {
		onChangeActive( isActive, tabName ) {
			let [ hash, ...others ] = window.location.hash.replace( '#', '' ).split( '__' );

			if ( ! isActive ) {
				others = others.filter( gatewayTab => ( tabName !== gatewayTab || isActive ) );
			} else {
				others.push( tabName );
			}
			this.changeGatewaysTabs( others );

			window.location.hash = [ this.$options.name, ...others ].join( '__' );
		},
		changeGatewaysTabs( tabs ) {
			this.activeGatewaysTabs = tabs;
		},
		isActive( tabName ) {
			return Boolean( this.activeGatewaysTabs.length && this.activeGatewaysTabs.includes( tabName ) );
		},
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