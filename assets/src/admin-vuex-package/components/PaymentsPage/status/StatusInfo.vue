<template>
	<span :class="wrapClasses">{{ value }}</span>
</template>

<script>

export default {
	name: 'payment_status--item',
	props: [ 'value' ],
	methods: {},
	computed: {
		wrapClasses() {
			return {
				'jfb-status': true,
				[ 'jfb-status-' + this.status ]: true,
			};
		},
		status() {
			return this.value.toLowerCase();
		}
	},
};
</script>

<style lang="scss">
.jfb-status {
	padding: 0.5em;

	&-completed {
		background-color: rgb(165 241 190 / 40%);
	}

	&-refunded {
		background-color: rgb(245 154 136 / 40%);
	}
}
</style>