<template>
	<pre v-html="parsedValue"></pre>
</template>

<script>
export default {
	name: 'value--item',
	props: [ 'value', 'full-entry', 'entry-id', 'scope' ],
	data: () => (
		{
			parsedValue: '',
		}
	),
	created() {
		this.parsedValue = this.getValue();
	},
	methods: {
		getValue() {
			let json;
			try {
				json = JSON.parse( this.value );
			} catch ( error ) {
				return this.value;
			}
			return JSON.stringify( json, undefined, 4 );
		},
	},
};
</script>

<style lang="scss">
pre {
	margin: unset;
}
</style>