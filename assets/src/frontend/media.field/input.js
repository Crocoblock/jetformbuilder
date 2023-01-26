import { createFileList, isFile } from './functions';

const { InputData } = window.JetFormBuilderAbstract;

/**
 * @property {string} rawName
 * @property {string} name
 * @property {Node|boolean} comment
 * @property {Node|*[]} nodes
 * @property {ReactiveVar} value
 * @property {ConditionChecker} checker
 * @property {*} calcValue
 * @property {AdvancedReporting|BrowserReporting} reporting
 * @property {Observable} root
 * @property {PageState} page
 * @property {LoadingReactiveVar} loading
 * @property {SignalFile} callable
 *
 * @constructor
 */
function FileData() {
	InputData.call( this );

	this.isMultiple = false;
	this.prevFiles  = null;

	this.isSupported = function ( node ) {
		return isFile( node );
	};

	this.addListeners = function () {
		const [ node ] = this.nodes;

		node.addEventListener( 'change', event => {
			const { files } = event.target;

			if ( !this.isMultiple ) {
				this.value.current = files;

				return;
			}

			this.value.current = createFileList(
				[ ...this.prevFiles ?? [], ...event.target.files ],
			);
		} );
	};
	this.setNode      = function ( node ) {
		InputData.prototype.setNode.call( this, node );

		this.isMultiple = node.multiple;
	};
	this.valueType    = function () {
		return FileList;
	};

	this.setValue = function () {
		this.callable.loadFiles();
	};
}

FileData.prototype = Object.create( InputData.prototype );

export default FileData;