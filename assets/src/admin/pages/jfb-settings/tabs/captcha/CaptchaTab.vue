<template>
	<div>
		<CxVuiCollapseMini
			with-panel
			v-for="( tab, index ) in captcha"
			:icon="tab.icon"
			:label="getTabTitle( tab )"
			:key="tab.component.name"
			:disabled="tab.disabled"
			:initial-active="isActive( tab.component.name )"
			@change="onChangeActive( $event, tab.component.name )"
		>
			<keep-alive>
				<component
					v-bind:is="tab.component"
					ref="captcha"
					:incoming="getIncomingCaptcha( tab.component.name )"
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

<script>

import reCAPTCHAv3 from '../../captcha/google';
import hCaptcha from '../../captcha/hCaptcha';

const { applyFilters } = wp.hooks;

const { SaveTabByAjax, GetIncoming } = window.JetFBMixins;
const { CxVuiCollapseMini }          = window.JetFBComponents;

window.jfbEventBus = window.jfbEventBus || new Vue( {} );

const captchaTabs = applyFilters( 'jet.fb.register.captcha', [
	reCAPTCHAv3,
	hCaptcha,
] );

let requestFunc = () => {
};

export default {
	name: 'captcha-tab',
	props: {
		incoming: {
			type: Object,
			default: {},
		},
		innerSlugs: Array,
	},
	components: { CxVuiCollapseMini },
	mixins: [ SaveTabByAjax ],
	data() {
		return {
			captcha: captchaTabs,
			storage: JSON.parse( JSON.stringify( this.incoming ) ),
			settings: JSON.parse( JSON.stringify(
				window.JetFBPageConfig[ 'captcha-tab-config' ],
			) ),
			activeGatewaysTabs: [],
			loadingGateways: {},
		};
	},
	created() {
		jfbEventBus.$on( 'request-state', props => {
			const { state, slug } = props;
			this.$set( this.loadingGateways, slug, state === 'begin' );
		} );

		jfbEventBus.$on( 'change-tab', (
			function ( { slug } ) {
				if ( slug !== this.$options.name ) {
					return false;
				}

				window.location.hash = '#' + [ this.$options.name, ...this.activeGatewaysTabs ].join( '__' );
			}
		).bind( this ) );

		this.activeGatewaysTabs = this.innerSlugs;

		requestFunc = _.debounce( () => {
			this.saveByAjax( this, this.$options.name );
		}, 1000 );
	},
	methods: {
		getIncomingCaptcha( slug ) {
			return this.incoming?.[ slug ] ?? {};
		},
		getTabTitle( tab ) {
			const { title } = tab;

			if ( title?.length ) {
				return title;
			}

			const { name } = tab.component;
			const item     = this.settings.find( ( { value } ) => value === name );

			return item?.label || 'Undefined captcha title';
		},
		onChangeActive( isActive, tabName ) {
			let [ hash, ...others ] = window.location.hash.replace( '#', '' ).split( '__' );

			if ( !isActive ) {
				others = others.filter( gatewayTab => (
					tabName !== gatewayTab || isActive
				) );
			}
			else {
				others.push( tabName );
			}
			this.changeGatewaysTabs( others );

			window.location.hash = [ this.$options.name, ...others ].join( '__' );
		},
		changeGatewaysTabs( tabs ) {
			this.activeGatewaysTabs = tabs;
		},
		isActive( tabName ) {
			return Boolean( this.activeGatewaysTabs?.includes( tabName ) );
		},
		changeVal( name, value ) {
			this.$set( this.storage, name, value );

			requestFunc();
		},
		onSaveGateway( indexTab, tabSlug ) {
			const current = this.$refs.captcha[ indexTab ];

			this.saveByAjax( current, tabSlug );
		},
		getAjaxObject( currentTab, tabSlug ) {
			const ajaxRequest = {
				url: window.ajaxurl,
				type: 'POST',
				dataType: 'json',
			};

			const current = currentTab.getRequestOnSave();

			ajaxRequest.data = {
				action: `jet_fb_save_tab__${ this.$options.name }`,
				...(
					tabSlug === this.$options.name ? current.data : {
						[ tabSlug ]: current.data,
					}
				),
			};

			if ( window?.JetFBPageConfigPackage?.nonce ) {
				ajaxRequest.data._nonce = window.JetFBPageConfigPackage.nonce;
			}

			return ajaxRequest;
		},
		getRequestOnSave() {
			return {
				data: { ...this.storage },
			};
		},
	},
};
</script>