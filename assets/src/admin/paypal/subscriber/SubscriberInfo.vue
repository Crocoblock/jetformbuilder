<template>
	<span>{{ parsedJson.name.given_name + ' ' + parsedJson.name.surname }}</span>
</template>

<script>
import ParseIncomingValueMixin from '../ParseIncomingValueMixin';

export default {
	name: 'subscriber--item',
	mixins: [ ParseIncomingValueMixin ]
};
</script>
