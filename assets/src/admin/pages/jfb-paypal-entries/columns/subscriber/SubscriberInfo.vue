<template>
	<span>{{ info.email_address }}</span>
</template>

<script>
import SubscriberMixin from './SubscriberMixin';

export default {
	name: 'subscriber--item',
	mixins: [ SubscriberMixin ]
};
</script>
