<template>
	<select
		:class="className"
		:value="value"
		@input="handleInput"
		:name="elementId"
		:id="elementId"
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
		elementId: {
			type: String,
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
	inject: [ 'elementId' ]
};
</script>

<style lang="scss" scoped>
.cx-vui-select {
	line-height: 2em;
	padding: 6px 24px 6px 8px;
}
</style>