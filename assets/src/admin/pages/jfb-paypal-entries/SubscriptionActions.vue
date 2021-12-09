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

const {
		  mapState,
		  mapGetters,
	  } = Vuex;

export default {
	name: "SubscriptionActions",
	props: {
		forceCurrent: Object,
		buttonProps: Object,
	},
	components: { SubscriptionActionPanel },
	computed: {
		...mapState( [
			'actions'
		] )
	},
}
</script>