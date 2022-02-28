<template>
	<div
		:id="wrapId"
		class="postbox-container"
	>
		<div :id="id" :class="classes">
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: "PostBoxContainer",
	props: {
		wrapId: String,
		id: String,
		classes: String
	},
	computed: {
	}
}
</script>

<style>

</style>