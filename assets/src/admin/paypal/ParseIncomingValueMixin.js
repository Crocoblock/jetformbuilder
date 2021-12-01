export default {
	props: [ 'value', 'full-entry' ],
	data() {
		return {
			parsedJson: {}
		};
	},
	created() {
		this.parsedJson = JSON.parse( JSON.stringify( this.value ) );
	}
}