<template>
	<div>
		<cx-vui-switcher
			name="enable_dev_mode"
			:wrapper-css="[ 'equalwidth' ]"
			:label="loading.enable_dev_mode ? `${label.enable_dev_mode} (loading...)` : label.enable_dev_mode"
			:description="help.enable_dev_mode"
			:value="storage.enable_dev_mode"
			:disabled="isLoading"
			@input="changeVal( 'enable_dev_mode', $event )"
		></cx-vui-switcher>
		<cx-vui-switcher
			name="disable_next_button"
			:wrapper-css="[ 'equalwidth' ]"
			:label="loading.disable_next_button ? `${label.disable_next_button} (loading...)` : label.disable_next_button"
			:description="help.disable_next_button"
			:value="storage.disable_next_button"
			:disabled="isLoading"
			@input="changeVal( 'disable_next_button', $event )"
		></cx-vui-switcher>
	</div>
</template>

<script>

import {
	help,
	label,
} from './source';

const { SaveTabByAjax } = window.JetFBMixins;

export default {
	name: 'options-tab',
	props: {
		incoming: {
			type: Object,
			default: {},
		},
	},
	mixins: [ SaveTabByAjax ],
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
			if ( 'options-tab' !== slug ) {
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