<template>
	<div style="display:inline-block;">
		<cx-vui-button
			@click="showPopup = true"
			button-style="link-accent"
			size="mini"
		>
			<template #label>
				<span class="dashicons dashicons-database-export"></span>
				{{ __( 'Export', 'jet-form-builder' ) }}
			</template>
		</cx-vui-button>
	</div>
</template>

<script>
const {
	      __,
      } = wp.i18n;

const {
	      i18n,
	      ScopeStoreMixin,
	      GetIncoming,
      } = JetFBMixins;

const {
	      RowWrapper,
	      ColumnWrapper,
	      CxVuiPopup,
      } = JetFBComponents;

const {
	      addQueryArgs,
      } = JetFBActions;

const {
	      export_url,
      } = window.JetFBPageConfig;

export default {
	name: 'ExportPaymentsButton',
	mixins: [
		i18n,
		ScopeStoreMixin,
		GetIncoming,
	],
	data: () => (
		{
			showPopup: false,
		}
	),
	computed: {
		exportUrl() {
			return addQueryArgs(
				{},
				export_url,
			);
		},
	}
};

</script>

<style scoped>

</style>