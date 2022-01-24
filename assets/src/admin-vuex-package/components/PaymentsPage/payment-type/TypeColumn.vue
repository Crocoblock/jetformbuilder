<template>
	<span :class="wrapClasses">{{ value.label }}</span>
</template>

<script>
export default {
	props: [ 'value', 'full-entry' ],
	name: 'type--item',
	methods: {},
	computed: {
		wrapClasses() {
			return {
				'jfb-payment-type': true,
				[ `jfb-payment-type--${ this.value.slug }` ]: true,
			};
		},
	},
};
</script>

<style>

</style>