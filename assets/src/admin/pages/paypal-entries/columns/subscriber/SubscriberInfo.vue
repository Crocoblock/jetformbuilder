<template>
	<span>{{ subscriberEmail }}</span>
</template>

<script>
export default {
	name: 'subscriber--item',
	props: [ 'value', 'full-entry' ],
	data() {
		return {
			isset: false,
			subscriberEmail: 'NONE',
			otherInfo: {}
		};
	},
	created() {
		let info;

		try {
			info = JSON.parse( JSON.stringify( this.value ) );
		} catch ( e ) {
			return false;
		}

		this.subscriberEmail = info.email_address;
		delete info.email_address;

		this.otherInfo = info;
	}
};
</script>
