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
        :wrapper-css="[ 'equalwidth', errors.gfb_request_args_key ? 'jfb-has-error' : '' ]"
    :size="'fullwidth'"
    :label="'Request key'"
    :description="'Unique form parameter (key)'"
    :value="storage.hasOwnProperty( 'gfb_request_args_key' ) ? storage.gfb_request_args_key : '1111'"
    :disabled="isLoading"
    @input="changeVal( 'gfb_request_args_key', $event )"
    />
    <div v-if="errors.gfb_request_args_key" class="jfb-field-error">
      {{ errors.gfb_request_args_key }}
    </div>

    <cx-vui-input
        name="gfb_request_args_value"
        :wrapper-css="[ 'equalwidth', errors.gfb_request_args_value ? 'jfb-has-error' : '' ]"
    :size="'fullwidth'"
    :label="'Request value'"
    :description="'Unique form parameter (value)'"
    :value="storage.hasOwnProperty( 'gfb_request_args_value' ) ? storage.gfb_request_args_value : '2222'"
    :disabled="isLoading"
    @input="changeVal( 'gfb_request_args_value', $event )"
    />
    <div v-if="errors.gfb_request_args_value" class="jfb-field-error">
      {{ errors.gfb_request_args_value }}
    </div>
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
      errors: {
        gfb_request_args_key: '',
        gfb_request_args_value: '',
      },
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
    validateField( name, value ) {
      if ( name !== 'gfb_request_args_key' && name !== 'gfb_request_args_value' ) {
        return true;
      }

      const val = String( value ?? '' );
      const onlyDigits = /^\d+$/.test( val );

      if ( onlyDigits ) {
        const msg = this.__(
            'Must contain at least one letter (A–Z). Numbers only are not allowed.',
            'jet-form-builder'
        );
        this.$set( this.errors, name, msg );
        return false;
      }

      this.$set( this.errors, name, '' );
      return true;
    },
    changeVal( name, value ) {
      if ( this.isLoading ) {
        return;
      }

      this.$set( this.storage, name, value );

      if ( name === 'gfb_request_args_key' || name === 'gfb_request_args_value' ) {
        const ok = this.validateField( name, value );
        if ( ! ok ) {
          return;
        }
      }

      this.$set( this.loading, name, true );
      this.saveByAjax( this, this.$options.name );
    },
	},
};

</script>


<style scoped>
.jfb-has-error .cx-vui-input,
.jfb-has-error input {
  border-color: #dc2626 !important;
  outline: none;
}

.jfb-field-error {
  margin: 6px 0 12px;
  color: #dc2626;
  font-size: 12px;
  line-height: 1.4;
  text-align:right;
}
</style>