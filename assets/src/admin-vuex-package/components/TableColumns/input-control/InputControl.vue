<template>
	<input :type="options.type" :value="value" @input="onInput">
</template>

<script>


export default {
	name: "input--control",
	props: [ 'value', 'options' ],
	methods: {
		onInput( { target: { value } } ) {
			this.$emit( 'input', value );
		}
	}
}
</script>

<style>

</style>