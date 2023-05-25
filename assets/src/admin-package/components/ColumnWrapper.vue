<template>
	<div :class="className">
		<label
			class="cx-vui-component__label"
			v-if="$slots.label"
			:for="elementIdData"
		>
			<slot name="label"></slot>
		</label>
		<slot></slot>
		<div
			class="cx-vui-component__desc"
			v-if="$slots.description"
		>
			<slot name="description"></slot>
		</div>
	</div>
</template>

<script>

export default {
	name: 'ColumnWrapper',
	props: {
		elementId: {
			type: String,
			required: true,
		},
		/**
		 * Possible values:
		 * 'padding-top-bottom-unset': true
		 * 'padding-unset': true
		 */
		classNames: {
			type: Object,
			default: () => (
				{}
			),
		},
	},
	data() {
		return {
			elementIdData: `cx_${ this.elementId }`,
		};
	},
	computed: {
		className() {
			return {
				'cx-vui-component': true,
				...this.classNames,
			};
		},
	},
	provide() {
		return {
			elementId: this.elementIdData,
		};
	},
};
</script>

<style lang="scss" scoped>
.cx-vui-component {
	flex-direction: column;
	width: 100%;
	border-top: unset;
	gap: 0.7em;
}

.padding-top-bottom-unset {
	padding-top: unset;
	padding-bottom: unset;
}

.padding-unset {
	padding: unset;
}
</style>