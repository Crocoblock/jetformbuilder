import isNotEmpty from './isNotEmpty';

const {
	      AdvancedRestriction = () => {},
      } = JetFormBuilderAbstract;

function NotEmptyAdvancedWithCustomOption() {
	AdvancedRestriction.call( this );

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

	this.getMessage = function () {
		return this.getMessageBySlug( 'empty' );
	};
}

NotEmptyAdvancedWithCustomOption.prototype = Object.create(
	AdvancedRestriction.prototype,
);

export default NotEmptyAdvancedWithCustomOption;