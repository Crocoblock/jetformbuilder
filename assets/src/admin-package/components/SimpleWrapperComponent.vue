<template>
	<div class="cx-vui-component cx-vui-component--equalwidth">
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
				:for="elementId"
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
		<div class="cx-vui-component__control" :style="{ flex: 1 }">
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: "SimpleWrapperComponent",
	props: {
		elementId: {
			type: String
		},
	}
}
</script>

<style>

</style>