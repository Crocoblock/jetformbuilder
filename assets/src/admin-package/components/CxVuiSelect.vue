<template>
	<select
		:class="className"
		:value="value"
		@input="handleInput"
	>
		<slot></slot>
	</select>
</template>

<script>
export default {
	name: 'CxVuiSelect',
	props: {
		value: {
			type: [ String, Number ],
			default: '',
		},
		classNames: {
			type: Object,
			default: () => (
				{}
			),
		},
	},
	computed: {
		className() {
			return {
				'cx-vui-select': true,
				...this.classNames,
			};
		},
	},
	methods: {
		handleInput( event ) {
			this.$emit( 'input', event.target.value );
		},
	},
};
</script>

<style lang="scss" scoped>
.cx-vui-select {
	line-height: 2em;
	padding: 6px 24px 6px 8px;
}
</style>