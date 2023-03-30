<template>
	<cx-vui-button
		@click="dispatch('clearFiltersWithFetch' )"
		button-style="accent-border"
		size="mini"
	>
		<template #label>{{ label }}</template>
	</cx-vui-button>
</template>

<script>

import ScopeStoreMixin from '../mixins/ScopeStoreMixin';

const { __ } = wp.i18n;

const {
	      mapState,
	      mapGetters,
	      mapMutations,
	      mapActions,
      } = Vuex;

export default {
	name: 'ClearFiltersButton',
	props: {
		label: {
			type: String,
			default: __( 'Clear all filters', 'jet-form-builder' ),
		},
	},
	mixins: [ ScopeStoreMixin ],
};
</script>