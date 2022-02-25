<template>
	<div class="postbox" :id="slug">
		<div class="postbox-header">
			<h2 class="ui-sortable-handle">{{ title }}</h2>
		</div>
		<div class="postbox-inner submitbox">
			<div id="misc-publishing-actions">
				<div
					class="misc-pub-section"
					v-for="(value, name) in values"
					:key="name"
				>
					<div v-if="$scopedSlots.row">
						<slot name="row" v-bind="{ name, value }"></slot>
					</div>
					<div v-else>
						{{ name }}: <strong>{{ value }}</strong>
					</div>
				</div>
			</div>
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
		values: Object,
		title: String,
		slug: String,
	},
	computed: {
	},
}
</script>

<style>

</style>