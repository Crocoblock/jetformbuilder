<template>
	<cx-vui-button
		v-if="value"
		button-style="accent-border"
		size="link"
		@click="viewSubscription"
	>
		<template #label>{{ value }}</template>
	</cx-vui-button>
</template>

<script>
const { createPath } = JetFBActions;

export default {
	props: [ 'value', 'full-entry' ],
	name: 'related_id--item',
	methods: {
		getLink() {
			const { actions } = this.fullEntry;

			return actions.value?.view_subscription?.payload?.url;
		},
		viewSubscription() {
			window.open(
				this.getLink(),
				'_blank',
			);
		},
	},
};
</script>

<style lang="scss">

.cx-vui-button__content {
	padding: 0.4em;
}

</style>