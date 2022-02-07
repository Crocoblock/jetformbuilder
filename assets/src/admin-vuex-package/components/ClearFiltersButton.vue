<template>
	<cx-vui-button
		@click="clearFiltersWithFetch"
		button-style="accent-border"
		size="mini"
	>
		<template #label>{{ label }}</template>
	</cx-vui-button>
</template>

<script>

const {
		  mapState,
		  mapGetters,
		  mapMutations,
		  mapActions,
	  } = Vuex;

export default {
	name: "ClearFiltersButton",
	props: {
		label: String,
	},
	methods: {
		...mapActions( [
			'clearFiltersWithFetch'
		] )
	},
}
</script>

<style>

</style>