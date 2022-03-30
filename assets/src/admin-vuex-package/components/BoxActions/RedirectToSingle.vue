<template>
	<a
		v-if="hasSingleEndpoint"
		:href="getSingleHref"
		:title="getSingleTitle"
	>
		<span
			:class="{
			'dashicons': true,
			[ 'dashicons-' + getSingleType ]: true,
		}"
			aria-hidden="true"
		/>
	</a>
</template>

<script>
import ScopeStoreMixin from '../../mixins/ScopeStoreMixin';

const { i18n } = JetFBMixins;

export default {
	name: 'RedirectToSingle',
	mixins: [ ScopeStoreMixin, i18n ],
	computed: {
		hasSingleEndpoint() {
			return this.getter( 'hasSingleEndpoint' );
		},
		getSingleHref() {
			return this.getter( 'getSingleHref' );
		},
		getSingleType() {
			return this.getter( 'getSingleType' );
		},
		getSingleTitle() {
			return this.getter( 'getSingleTitle' );
		},
	},
};
</script>

<style scoped>
a {
	margin-right: 1em;
	text-decoration: none;
}
</style>