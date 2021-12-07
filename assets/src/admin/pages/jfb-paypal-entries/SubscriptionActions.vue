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
	</div>
</template>

<script>
import SubscriptionActionPanel from './SubscriptionActionPanel';

export default {
	name: "SubscriptionActions",
	props: {
		forceCurrent: Object,
		buttonProps: {
			type: Object,
			default() {
				return {
					buttonStyle: 'accent',
					size: 'mini',
				}
			},
		},
	},
	components: { SubscriptionActionPanel },
	computed: {
		actions() {
			return this.$store.getters.getActions;
		},
	},
}
</script>