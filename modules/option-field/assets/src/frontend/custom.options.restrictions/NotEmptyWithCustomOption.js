import isNotEmpty from './isNotEmpty';

const {
	      Restriction,
      } = JetFormBuilderAbstract;

function NotEmptyWithCustomOption() {
	Restriction.call( this );

	this.type = 'required';

	this.isSupported = function ( node, reporting ) {
		return (
			reporting.input.isRequired &&
			[ 'radio', 'checkbox' ].includes( reporting.input.inputType )
		);
	};

	this.validate = function () {
		return isNotEmpty( this.reporting.input );
	};
}

NotEmptyWithCustomOption.prototype = Object.create(
	Restriction.prototype,
);

export default NotEmptyWithCustomOption;