<template>
	<cx-vui-button
		button-style="link-accent"
		size="link"
		@click="openPopup"
	>
		<template #label>{{ 'View' }}</template>
	</cx-vui-button>
</template>

<script>

export default {
	name: "actions--item",
	props: [ 'value', 'full-entry', 'entry-id' ],
	created() {
	},
	methods: {
		openPopup() {
			this.$store.dispatch( 'openPopup', this.entryId );
		}
	}
}
</script>

<style lang="scss">
	.jfb-actions-item {
		& > div {
			display: flex;
			flex-direction: column;
			column-gap: 10px;
			row-gap: 4px;
		}
		button {
			flex: 1;
		}
	}
</style>