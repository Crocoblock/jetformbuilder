import Restriction from './Restriction';

class NotUrl extends Restriction {

	isSupported( node, reporting ) {
		return 'url' === node.type;
	}

	validate() {
		return /((mailto\:|(news|(ht|f)tp(s?))\:\/\/)\S+)/.test(
			this.getValue(),
		);
	}

	getRawMessage() {
		return this.getMessageBySlug( 'url' );
	}

}

export default NotUrl;