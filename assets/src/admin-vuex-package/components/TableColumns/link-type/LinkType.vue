<template>
	<a
		:href="parsedJson.href"
		target="_blank"
		:class="{
			'row-title': parsedJson.primary,
			'with-flex': isExternal,
		}"
		:title="parsedJson.title"
	>{{ parsedJson.text }} <span
		v-if="isExternal"
		class="dashicons dashicons-external"
		aria-hidden="true"
	/></a>
</template>

<script>
const { ParseIncomingValueMixin } = JetFBMixins;

export default {
	name: 'link--item',
	mixins: [ ParseIncomingValueMixin ],
	computed: {
		isExternal() {
			return 'external' === this.parsedJson.type;
		},
	},
}
</script>

<style scoped lang="scss">
a {
	text-decoration: none;

	&.with-flex {
		display: flex;
		align-items: center;
		column-gap: 0.3em;
		width: fit-content;
	}
}
</style>