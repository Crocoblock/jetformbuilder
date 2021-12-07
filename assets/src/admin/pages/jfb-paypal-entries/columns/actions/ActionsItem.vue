<template>
	<div class="jfb-actions-item">
		<SubscriptionActions
			:force-current="fullEntry"
			:button-props="{
			size: 'link'
		}"
		/>
	</div>
</template>

<script>
import SubscriptionActions from '../../SubscriptionActions';

export default {
	name: "actions--item",
	props: [ 'value', 'full-entry' ],
	components: { SubscriptionActions },
	created() {
	},
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
			padding: 0.5em;
		}
	}
</style>