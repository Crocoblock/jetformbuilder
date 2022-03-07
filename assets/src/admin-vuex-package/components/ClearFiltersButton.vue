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

const {
	mapState,
	mapGetters,
	mapMutations,
	mapActions,
} = Vuex;

export default {
	name: 'ClearFiltersButton',
	props: {
		label: String,
	},
	mixins: [ ScopeStoreMixin ],
};
</script>

<style>

</style>