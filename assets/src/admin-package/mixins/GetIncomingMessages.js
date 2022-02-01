import GetIncoming from './GetIncoming';

export default {
	mixins: [ GetIncoming ],
	computed: {
		messages() {
			const { messages } = this.getIncoming();

			return JSON.parse( JSON.stringify( messages ) );
		},
	},
}