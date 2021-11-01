export default {
	props: [ 'value', 'full-entry' ],
	data() {
		return {
			info: {}
		};
	},
	created() {
		this.info = JSON.parse( JSON.stringify( this.value ) );
	}
}