<template>
	<a
		:href="parsedJson.href"
		target="_blank"
		:class="{
			'row-title': parsedJson.primary
		}"
		:title="parsedJson.title"
	>{{ parsedJson.text }} <span
		v-if="'external' === parsedJson.type"
		class="dashicons dashicons-external"
		aria-hidden="true"
	/></a>
</template>

<script>
const { ParseIncomingValueMixin } = JetFBMixins;

export default {
	name: "link--item",
	mixins: [ ParseIncomingValueMixin ],
	computed: {	},
}
</script>

<style scoped>
a {
	text-decoration: none;
	display: flex;
	align-items: center;
	column-gap: 0.3em;
}
</style>