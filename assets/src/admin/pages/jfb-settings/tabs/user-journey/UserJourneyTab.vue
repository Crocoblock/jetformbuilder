<template>
	<div>
		<cx-vui-switcher
			name="enable_user_journey"
			:label="loading.enable_user_journey ? `${label.enable_user_journey} (loading...)` : label.enable_user_journey"
			:description="help.enable_user_journey"
			:wrapper-css="[ 'equalwidth' ]"
			:value="storage.hasOwnProperty( 'enable_user_journey' ) ? storage.enable_user_journey : false"
			:disabled="isLoading"
			@input="changeVal( 'enable_user_journey', $event )"
		></cx-vui-switcher>

		<template v-if="storage.enable_user_journey">
			<cx-vui-select
				name="storage_type"
				class="user-journey-select"
				:label="loading.storage_type ? `${label.storage_type} (loading...)` : label.storage_type"
				:description="help.storage_type"
				:wrapper-css="[ 'equalwidth' ]"
				:options-list="[
					{
						value: 'local',
						label: 'Local Storage'
					},
					{
						value: 'session',
						label: 'Session Storage'
					}
				]"
				:value="storage.hasOwnProperty( 'storage_type' ) ? storage.storage_type : 'local'"
				:disabled="!storage.enable_user_journey || isLoading"
				@input="changeVal( 'storage_type', $event )"
			></cx-vui-select>
			<cx-vui-component-wrapper >
				<div class="cx-vui-component__label">Please note!</div>
				<div><b>Session Storage:</b> The information is kept only while this tab or window is open. Reloading the page is fine, but as soon as you close the tab, the data disappears. Other tabs or windows of the site can’t see it.</div>
				<div><b>Local Storage:</b> The information stays much longer—every tab or window of this site can use it, and it remains even after you close and reopen the browser, until you clear it yourself.</div>
			</cx-vui-component-wrapper>

			<cx-vui-select
				name="clear_after_submit"
				class="user-journey-select"
				:label="loading.clear_after_submit ? `${label.clear_after_submit} (loading...)` : label.clear_after_submit"
				:description="help.clear_after_submit"
				:wrapper-css="[ 'equalwidth' ]"
				:options-list="[
					{
						value: 'always',
						label: 'After any submit (success or failure)'
					},
					{
						value: 'success',
						label: 'After successful submit only'
					}
				]"
				:value="storage.hasOwnProperty( 'clear_after_submit' ) ? storage.clear_after_submit : 'success'"
				:disabled="!storage.enable_user_journey || isLoading"
				@input="changeVal( 'clear_after_submit', $event )"
			></cx-vui-select>
		</template>
	</div>
</template>

<script>

import {
	help,
	label,
} from './source';

const { SaveTabByAjax, i18n } = window.JetFBMixins;

export default {
	name: 'user-journey-tab',
	props: {
		incoming: {
			type: Object,
			default: () => ({}),
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
			if ( 'user-journey-tab' !== slug ) {
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
<style>
.user-journey-select select.cx-vui-select {
	padding: 6px 24px 6px 12px;
}
</style>