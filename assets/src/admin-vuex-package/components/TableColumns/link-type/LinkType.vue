<template>
	<a
		:href="safeHref"
		:target="target"
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
		target() {
			return this.parsedJson.target ?? '_self';
		},
		/**
		 * Link columns are shared with add-ons and may carry stored URLs.
		 * Script-like schemes never become a live link; every other URL
		 * (admin pages, permalinks, mailto:, custom app schemes) is kept.
		 */
		safeHref() {
			const href  = this.parsedJson.href;
			// eslint-disable-next-line no-control-regex
			const clean = String( href ?? '' ).replace( /[\u0000- \u007f-\u009f]/g, '' );

			return /^(javascript|vbscript|data):/i.test( clean ) ? undefined : href;
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