export default {
	props: [ 'value', 'full-entry', 'entry-id', 'scope' ],
	computed: {
		parsedJson() {
			return JSON.parse( JSON.stringify( this.value ) );
		}
	},
}