<template>
	<a
		:href="parsedJson.href"
		target="_blank"
	>
		{{ parsedJson.text }}
	</a>
</template>

<script>
const { ParseIncomingValueMixin } = JetFBMixins;

export default {
	name: "link--item",
	mixins: [ ParseIncomingValueMixin ],
	computed: {	},
}
</script>

<style>

</style>