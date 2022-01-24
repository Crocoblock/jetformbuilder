<template>
	<DetailsTable
		:columns="columnsFromStore"
		:source="currentFromStore"
	/>
</template>

<script>
const { DetailsTable } = JetFBComponents

export default {
	name: 'DetailsTableWithStore',
	props: {
		columns: {
			type: String,
			default: 'columns',
		},
		current: {
			type: String,
			default: 'currentPopupData',
		},
	},
	components: { DetailsTable },
	computed: {
		columnsFromStore() {
			return this.$store.state[ this.columns ];
		},
		currentFromStore() {
			return this.$store.state[ this.current ];
		},
	},
};
</script>

<style>

</style>