<template>
	<span>{{ parsedJson.status }}</span>
</template>

<script>
import ParseIncomingValueMixin from '../../../../paypal/ParseIncomingValueMixin';

export default {
	name: 'status--item',
	mixins: [ ParseIncomingValueMixin ]
};
</script>

<style scoped>

</style>