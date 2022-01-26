<template>
	<a :href="parsedJson.href">
		{{ parsedJson.text }}
	</a>
</template>

<script>
import ParseIncomingValueMixin from '../../mixins/ParseIncomingValueMixin';

export default {
	name: "link--item",
	mixins: [ ParseIncomingValueMixin ],
	computed: {},
}
</script>

<style>

</style>