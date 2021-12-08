<template>
	<div class="cx-vui-component cx-vui-component--equalwidth">
		<div
			v-if="$slots.meta"
			class="cx-vui-component__meta"
		>
			<slot name="meta"></slot>
		</div>
		<div class="cx-vui-component__control" :style="{ flex: 1 }">
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: "SimpleWrapperComponent",
}
</script>

<style>

</style>