export default {
	props: [ 'value', 'full-entry' ],
	computed: {
		parsedJson() {
			return JSON.parse( JSON.stringify( this.value ) );
		}
	},
}