<template>
	<cx-vui-button
		@click="showPopup = true"
		button-style="accent-border"
		size="mini"
	>
		<template #label>{{ getLabel }}</template>
		<cx-vui-popup
			v-model="showPopup"
			body-width="650px"
			:ok-label="__( 'Export', 'jet-form-builder' )"
			:cancel-label="__( 'Cancel', 'jet-form-builder' )"
			@on-ok="handlePopupExport"
			@on-cancel="showPopup = false"
		>
			<template #title>{{ __( 'Export settings', 'jet-form-builder' ) }}</template>
			<template #content>

			</template>
		</cx-vui-popup>
	</cx-vui-button>
</template>

<script>
import ScopeStoreMixin from '../mixins/ScopeStoreMixin';

const {
	      __,
      } = wp.i18n;

const {
	      i18n,
      } = JetFBMixins;

const defaultLabel = __( 'Export All', 'jet-form-builder' );

export default {
	name: 'ExportEntriesButton',
	props: {
		label: {
			type: String,
			default: defaultLabel,
		},
	},
	data: () => (
		{
			showPopup: false,
		}
	),
	mixins: [ ScopeStoreMixin, i18n ],
	computed: {
		getLabel() {
			const checkedLength = this.getter( 'getChecked' )?.length;

			if ( checkedLength ) {
				return __( 'Export checked', 'jet-form-builder' );
			}

			return this.getter( 'hasSelectedFilters' )
			       ? __( 'Export filtered', 'jet-form-builder' )
			       : this.label;
		},
	},
	methods: {
		handlePopupExport() {

		},
	},
};
</script>

<style scoped>
.wrapper {
	display: inline-block;
}
</style>