<template>
	<span>{{ lastPayment }}</span>
</template>

<script>
import ParseIncomingValueMixin from '../../ParseIncomingValueMixin';

export default {
	name: 'billing_info--item',
	mixins: [ ParseIncomingValueMixin ],
	data() {
		return {
			lastPayment: '',
		};
	},
	created() {
		this.lastPayment = [
			this.parsedJson?.last_payment?.amount?.value,
			this.parsedJson?.last_payment?.amount?.currency_code,
		].filter( val => val ).join( ' ' );
	},
};
</script>

<style scoped>

</style>