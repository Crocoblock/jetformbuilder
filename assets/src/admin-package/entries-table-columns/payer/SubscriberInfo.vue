<template>
	<span>{{ parsedJson.full_name }}</span>
</template>

<script>
import ParseIncomingValueMixin from '../../mixins/ParseIncomingValueMixin';

export default {
	name: 'payer--item',
	mixins: [ ParseIncomingValueMixin ]
};
</script>
