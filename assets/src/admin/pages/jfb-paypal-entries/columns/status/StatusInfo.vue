<template>
	<span :class="wrapClasses">{{ parsedJson.status }}</span>
</template>

<script>
const { ParseIncomingValueMixin } = JetFBMixins;

export default {
	name: 'status--item',
	mixins: [ ParseIncomingValueMixin ],
	methods: {},
	computed: {
		wrapClasses() {
			return {
				'jfb-status': true,
				[ 'jfb-status-' + this.parsedJson.status.toLowerCase() ]: true,
			};
		},
	},
};
</script>

<style lang="scss">
.jfb-status {
	padding: 0.5em;

	&-active {
		background-color: rgb(165 241 190 / 40%);
	}

	&-cancelled {
		background-color: rgb(245 154 136 / 40%);
	}

	&-suspended {
		background-color: rgb(253 209 95 / 41%);
	}

	&-expired {
		background-color: aliceblue;
	}

	&-approval_pending {
		background-color: antiquewhite;
	}

	&-refunded {
		background-color: antiquewhite;
	}
}
</style>