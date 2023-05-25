<template>
	<div :class="className">
		<div
			v-if="$slots.meta"
			class="cx-vui-component__meta"
		>
			<slot name="meta"></slot>
		</div>
		<div
			v-else-if="$slots.label || $slots.description"
			class="cx-vui-component__meta"
		>
			<label
				class="cx-vui-component__label"
				v-if="$slots.label"
				:for="elementIdData"
			>
				<slot name="label"></slot>
			</label>
			<div
				class="cx-vui-component__desc"
				v-if="$slots.description"
			>
				<slot name="description"></slot>
			</div>
		</div>
		<div class="cx-vui-component__control">
			<slot></slot>
		</div>
	</div>
</template>

<script>

export default {
	name: 'RowWrapper',
	props: {
		elementId: {
			type: String,
		},
		/**
		 * Possible values:
		 * 'size--1-x-2': true
		 */
		classNames: {
			type: Object,
			default: () => (
				{ 'cx-vui-component--equalwidth': true }
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
.size--1-x-2 {
	.cx-vui-component__meta {
		flex: 1;
	}

	.cx-vui-component__control {
		flex: 2;
	}
}
</style>