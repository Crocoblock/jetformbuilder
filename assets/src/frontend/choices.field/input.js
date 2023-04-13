import { isChoicesField } from './functions';

const {
	      InputData,
      } = JetFormBuilderAbstract;

const {
	      getParsedName,
      } = JetFormBuilderFunctions;

function ChoicesData() {
	InputData.call( this );

	this.isSupported = isChoicesField;

	this.setNode = function ( node ) {
		this.nodes     = node.querySelectorAll(
			'.jet-form-builder-choice--item input',
		);
		this.rawName   = this.nodes[ 0 ].name;
		this.name      = getParsedName( this.rawName );
		this.inputType = 'choice';
	};

	this.setValue = function () {

	}
}

ChoicesData.prototype = Object.create( InputData.prototype );

export default ChoicesData;