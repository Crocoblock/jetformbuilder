<template>
	<div>
		<SubscriptionActionPanel
			v-for="( actionOptions, actionSlug ) in actions"
			:key="actionSlug"
			:type="actionSlug"
			v-bind="actionOptions"
			:force-current="forceCurrent"
			:button-props="buttonProps"
		/>
		<slot></slot>
	</div>
</template>

<script>
import SubscriptionActionPanel from './SubscriptionActionPanel';

export default {
	name: "SubscriptionActions",
	props: {
		forceCurrent: Object,
		buttonProps: Object,
	},
	components: { SubscriptionActionPanel },
	computed: {
		actions() {
			return this.$store.getters.getActions;
		},
	},
}
</script>