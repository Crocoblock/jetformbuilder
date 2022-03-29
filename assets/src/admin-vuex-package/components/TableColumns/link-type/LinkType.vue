<template>
	<a
		:href="parsedJson.href"
		target="_blank"
		:class="{
			'row-title': parsedJson.primary,
			'with-flex': hasIcon,
		}"
		:title="parsedJson.title"
	>
		<span>{{ parsedJson.text }}</span>
		<span
			v-if="hasIcon"
			:class="{
			'dashicons': true,
			[ 'dashicons-' + parsedJson.type ]: true,
		}"
			aria-hidden="true"
		/>
	</a>
</template>

<script>
const { ParseIncomingValueMixin } = JetFBMixins;

export default {
	name: 'link--item',
	mixins: [ ParseIncomingValueMixin ],
	computed: {
		hasIcon() {
			return !! this.parsedJson.type;
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