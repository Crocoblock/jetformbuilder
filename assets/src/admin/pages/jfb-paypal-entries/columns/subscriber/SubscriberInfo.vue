<template>
	<span>{{ parsedJson.email_address }}</span>
</template>

<script>
import ParseIncomingValueMixin from '../../ParseIncomingValueMixin';

export default {
	name: 'subscriber--item',
	mixins: [ ParseIncomingValueMixin ]
};
</script>
