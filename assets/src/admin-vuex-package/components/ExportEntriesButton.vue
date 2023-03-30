<template>
	<cx-vui-button
		@click="dispatch( 'clearFiltersWithFetch' )"
		button-style="accent-border"
		size="mini"
	>
		<template #label>{{ label }}</template>
	</cx-vui-button>
</template>

<script>
import ScopeStoreMixin from '../mixins/ScopeStoreMixin';

export default {
	name: 'ExportEntriesButton',
	props: {
		label: {
			type: String,
			default: __( 'Clear all filters', 'jet-form-builder' ),
		},
	},
	mixins: [ ScopeStoreMixin ],
};
</script>

<style scoped>

</style>