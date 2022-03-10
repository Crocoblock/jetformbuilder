<template>
	<textarea :value="value" @input="onInput"></textarea>
</template>

<script>


export default {
	name: 'textarea--control',
	props: [ 'value', 'options' ],
	methods: {
		onInput( { target: { value } } ) {
			this.$emit( 'input', value );
		},
	},
};
</script>

<style>

</style>