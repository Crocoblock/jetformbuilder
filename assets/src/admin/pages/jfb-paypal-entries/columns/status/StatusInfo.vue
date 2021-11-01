<template>
	<span>{{ status }}</span>
</template>

<script>
export default {
	name: 'status--item',
	props: [ 'value', 'full-entry' ],
	data() {
		return {
			status: '',
			otherInfo: {},
		};
	},
	created() {
		let info;

		try {
			info = JSON.parse( JSON.stringify( this.value ) );
		} catch ( e ) {
			return false;
		}

		this.status = info.status;
		delete info.status;

		this.otherInfo = info;
	},
};
</script>

<style scoped>

</style>