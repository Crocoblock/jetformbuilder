<template>
	<!--<div class="jfb-actions-item">
		<SubscriptionActions
			:force-current="fullEntry"
		>

		</SubscriptionActions>
	</div>-->
	<cx-vui-button
		button-style="accent-border"
		size="link"
		@click="openPopup"
	>
		<template #label>{{ 'View' }}</template>
	</cx-vui-button>
</template>

<script>
import SubscriptionActions from '../../SubscriptionActions';

export default {
	name: "actions--item",
	props: [ 'value', 'full-entry', 'entry-id' ],
	components: { SubscriptionActions },
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