import Restriction from './Restriction';

class NotEmail extends Restriction {

	isSupported( node, reporting ) {
		return 'email' === node.type;
	}

	validate() {
		const value = this.getValue();

		return /^[\w-\.]+@([\w-]+\.)+[\w-]{1,6}$/.test( value );
	}

	getRawMessage() {
		return this.getMessageBySlug( 'email' );
	}

}

export default NotEmail