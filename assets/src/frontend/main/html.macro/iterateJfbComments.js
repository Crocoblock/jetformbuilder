import iterateComments from './iterateComments';

function* iterateJfbComments( rootNode ) {
	const acceptCallback = node => {
		return node.textContent.includes( 'JFB_FIELD::' );
	};

	yield* iterateComments( rootNode, acceptCallback );
}

export default iterateJfbComments;