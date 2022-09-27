<template>
	<cx-vui-switcher
		name="enable_dev_mode"
		:wrapper-css="[ 'equalwidth' ]"
		:label="isLoading ? `${label.enable_dev_mode} (loading...)` : label.enable_dev_mode"
		:description="help.enable_dev_mode"
		:value="storage.enable_dev_mode"
		:disabled="isLoading"
		@input="changeVal( 'enable_dev_mode', $event )"
	></cx-vui-switcher>
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

			this.$set( this, 'isLoading', state === 'begin' );
		},
		changeVal( name, value ) {
			if ( this.isLoading ) {
				return;
			}
			this.$set( this.storage, name, value );

			this.saveByAjax( this, this.$options.name );
		},
	},
};

</script>