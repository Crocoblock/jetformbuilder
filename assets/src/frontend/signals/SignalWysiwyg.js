import BaseSignal from './BaseSignal';

class SignalWysiwyg extends BaseSignal {

	isSupported( inputData ) {
		const [ node ] = inputData.nodes;

		return node.matches( '.wp-editor-area' );
	}

	/**
	 * @param inputData {InputData|WysiwygData}
	 */
	runSignal( inputData ) {
		inputData.editor.setContent( inputData.value.current );
	}

}

export default SignalWysiwyg;