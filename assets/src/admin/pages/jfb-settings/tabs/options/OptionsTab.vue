<template>
	<div>
		<cx-vui-switcher
			name="enable_dev_mode"
			:wrapper-css="[ 'equalwidth' ]"
			:label="loading.enable_dev_mode ? `${label.enable_dev_mode} (loading...)` : label.enable_dev_mode"
			:description="help.enable_dev_mode"
			:value="storage.hasOwnProperty( 'enable_dev_mode' ) ? storage.enable_dev_mode : false"
			:disabled="isLoading"
			@input="changeVal( 'enable_dev_mode', $event )"
		></cx-vui-switcher>
		<cx-vui-switcher
			name="clear_on_uninstall"
			:wrapper-css="[ 'equalwidth' ]"
			:label="loading.clear_on_uninstall ? `${label.clear_on_uninstall} (loading...)` : label.clear_on_uninstall"
			:description="help.clear_on_uninstall"
			:value="storage.hasOwnProperty( 'clear_on_uninstall' ) ? storage.clear_on_uninstall : false"
			:disabled="isLoading"
			@input="changeVal( 'clear_on_uninstall', $event )"
		></cx-vui-switcher>
    <cx-vui-input
        name="form_records_access_capability"
        :wrapper-css="[ 'equalwidth' ]"
        :size="'fullwidth'"
        :label="loading.form_records_access_capability ? `${label.form_records_access_capability} (loading...)` : label.form_records_access_capability"
        :description="help.form_records_access_capability"
        :value="storage.hasOwnProperty( 'form_records_access_capability' ) ? storage.form_records_access_capability : 'manage_options'"
        :disabled="isLoading"
        @input="changeVal( 'form_records_access_capability', $event )"
    />
    <cx-vui-select
        name="ssr_validation_method"
        :wrapper-css="[ 'equalwidth' ]"
        :size="'fullwidth'"
        :label="loading.ssr_validation_method ? `${label.ssr_validation_method} (loading...)` : label.ssr_validation_method"
        :description="help.ssr_validation_method"
        :value="storage.hasOwnProperty( 'ssr_validation_method' ) ? storage.ssr_validation_method : 'rest'"
        :options-list="selectOptions"
        :disabled="isLoading"
        @input="changeVal( 'ssr_validation_method', $event )"
    ></cx-vui-select>
		<cx-vui-component-wrapper
			:label="__( 'Form Accessibility', 'jet-form-builder' )"
			:wrapper-css="[ 'equalwidth' ]"
		/>
		<div class="cx-vui-inner-panel">
			<cx-vui-switcher
				name="disable_next_button"
				:wrapper-css="[ 'equalwidth' ]"
				:label="loading.disable_next_button ? `${label.disable_next_button} (loading...)` : label.disable_next_button"
				:description="help.disable_next_button"
				:value="storage.hasOwnProperty( 'disable_next_button' ) ? storage.disable_next_button : true"
				:disabled="isLoading"
				@input="changeVal( 'disable_next_button', $event )"
			></cx-vui-switcher>
			<cx-vui-switcher
				name="scroll_on_next"
				:wrapper-css="[ 'equalwidth' ]"
				:label="loading.scroll_on_next ? `${label.scroll_on_next} (loading...)` : label.scroll_on_next"
				:description="help.scroll_on_next"
				:value="storage.hasOwnProperty( 'scroll_on_next' ) ? storage.scroll_on_next : false"
				:disabled="isLoading"
				@input="changeVal( 'scroll_on_next', $event )"
			></cx-vui-switcher>
			<cx-vui-switcher
				name="auto_focus"
				:wrapper-css="[ 'equalwidth' ]"
				:label="loading.auto_focus ? `${label.auto_focus} (loading...)` : label.auto_focus"
				:description="help.auto_focus"
				:value="storage.hasOwnProperty( 'auto_focus' ) ? storage.auto_focus : false"
				:disabled="isLoading"
				@input="changeVal( 'auto_focus', $event )"
			></cx-vui-switcher>
		</div>

    <cx-vui-component-wrapper
        :label="__( 'Form Request Args', 'jet-form-builder' )"
        :wrapper-css="[ 'equalwidth' ]"
    />
    <cx-vui-input
        name="gfb_request_args_key"
        :wrapper-css="[ 'equalwidth' ]"
        :size="'fullwidth'"
        :label="'Request key'"
        :description="'Unique form parameter (key)'"
        :value="storage.hasOwnProperty( 'gfb_request_args_key' ) ? storage.gfb_request_args_key : '1111'"
        :disabled="isLoading"
        @input="changeVal( 'gfb_request_args_key', $event )"
    />

    <cx-vui-input
        name="gfb_request_args_value"
        :wrapper-css="[ 'equalwidth' ]"
        :size="'fullwidth'"
        :label="'Request value'"
        :description="'Unique form parameter (value)'"
        :value="storage.hasOwnProperty( 'gfb_request_args_value' ) ? storage.gfb_request_args_value : '2222'"
        :disabled="isLoading"
        @input="changeVal( 'gfb_request_args_value', $event )"
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
	name: 'options-tab',
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
      selectOptions: [
        { value: 'rest', label: ( 'Rest API' ) },
        { value: 'admin_ajax', label: ( 'Admin Ajax' ) },
        { value: 'self', label: ( 'Self' ) },
      ],
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