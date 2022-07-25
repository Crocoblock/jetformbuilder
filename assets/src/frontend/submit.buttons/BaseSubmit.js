
class BaseSubmit {

	/**
	 * @param node {HTMLElement}
	 * @param root {Observable}
	 */
	constructor( node, root ) {
		this.node = node;
		this.root = root;
	}

	/**
	 * @param event {Event}
	 */
	onSubmit( event ) {
		throw new Error( 'You need to replace this callback' );
	}

}

export default BaseSubmit;