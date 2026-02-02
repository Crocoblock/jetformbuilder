<template>
	<div>
		<cx-vui-input
			name="ipinfo_token"
			:wrapper-css="[ 'equalwidth' ]"
			:size="'fullwidth'"
			:label="loading.ipinfo_token ? `${label.ipinfo_token} (loading...)` : label.ipinfo_token"
			:description="help.ipinfo_token"
			:value="storage.hasOwnProperty( 'ipinfo_token' ) ? storage.ipinfo_token : ''"
			:disabled="isLoading"
			@input="changeVal( 'ipinfo_token', $event )"
		/>
	</div>
</template>

<script>

import {
	help,
	label,
} from './source';


const { SaveTabByAjax, i18n } = window.JetFBMixins;

export default {
	name: 'phone-field-tab',
	props: {
		incoming: {
			type: Object,
			default: {},
		},
	},
	mixins: [ SaveTabByAjax, i18n ],
	data() {
		return {
			label, help,
			storage: JSON.parse( JSON.stringify( this.incoming ) ),
			isLoading: false,
			loading: {},
		};
	},
	created() {
		jfbEventBus.$on( 'request-state', this.onChangeState.bind( this ) );
	},
	methods: {
		getRequestOnSave() {
			return {
				data: { ...this.storage },
			};
		},
		onChangeState( { state, slug } ) {
			if ( 'phone-field-tab' !== slug ) {
				return;
			}

			if ( 'end' === state ) {
				this.loading = {};
			}

			this.$set( this, 'isLoading', state === 'begin' );
		},
		changeVal( name, value ) {
			if ( this.isLoading ) {
				return;
			}

			this.$set( this.storage, name, value );
			this.$set( this.loading, name, true );
			this.saveByAjax( this, this.$options.name );
		},
	},
};

</script>
