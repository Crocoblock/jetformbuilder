<template>
	<div class="postbox" :id="slug">
		<div class="postbox-header">
			<h2 class="ui-sortable-handle">{{ title }}</h2>
		</div>
		<div class="postbox-inner submitbox">
			<slot></slot>
			<div id="major-publishing-actions" v-if="$slots.actions">
				<slot name="actions"></slot>
				<div class="clear"></div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "PostBox",
	props: {
		title: String,
		slug: String,
	},
	computed: {
	},
}
</script>

<style>

</style>