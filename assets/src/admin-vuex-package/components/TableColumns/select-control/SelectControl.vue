<template>
	<select @input="onInput" :value="getValue">
		<option
			v-for="type in options.options"
			:value="type.value"
			:disabled="type.disabled"
		>
			{{ label( type ) }}
		</option>
	</select>
</template>

<script>


export default {
	name: 'select--control',
	props: [ 'value', 'options' ],
	computed: {
		getValue() {
			return this.value?.value ?? this.value;
		},
	},
	methods: {
		onInput( { target: { value } } ) {
			this.$emit( 'input', value );
		},
		label( option ) {
			return option.label ?? option.text ?? '';
		},
	},
};
</script>

<style scoped lang="scss">

select {
	option:disabled {
		background-color: #f5f5f5;
	}
}

</style>