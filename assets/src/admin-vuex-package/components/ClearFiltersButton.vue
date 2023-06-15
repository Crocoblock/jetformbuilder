<template>
	<cx-vui-button
		@click="dispatch('clearFiltersWithFetch' )"
		button-style="link-error"
		size="mini"
		:disabled="!hasSelectedFilters"
	>
		<template #label>
<!--			<span class="dashicons dashicons-trash"></span>-->
			<span class="dashicons dashicons-no-alt"></span>
			{{ label }}
		</template>
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
			default: __( 'Clear filters', 'jet-form-builder' ),
		},
	},
	mixins: [ ScopeStoreMixin ],
	computed: {
		hasSelectedFilters() {
			return this.getter( 'hasSelectedFilters' );
		},
	},
};
</script>