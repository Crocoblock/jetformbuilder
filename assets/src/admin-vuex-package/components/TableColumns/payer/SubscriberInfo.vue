<template>
	<span>{{ parsedJson.full_name }}</span>
</template>

<script>
const { ParseIncomingValueMixin } = JetFBMixins;

export default {
	name: 'payer--item',
	mixins: [ ParseIncomingValueMixin ]
};
</script>
