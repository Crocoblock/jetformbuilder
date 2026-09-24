import CustomBaseRestriction from './CustomBaseRestriction';
import { observeFieldRestriction } from '../functions';

function MustEqual() {
	CustomBaseRestriction.call( this );

	this.getSlug  = function () {
		return 'equal';
	};
	this.validate = function () {
		if ( this.attrs.field ) {
			const { input } = this.reporting;
			const relatedInput = input.root.getInput( this.attrs.field );
			const node = input.nodes[ 0 ];
			const relatedNode = relatedInput?.nodes?.[ 0 ];

			if ( node?.inputmask && relatedNode?.inputmask ) {
				// Read both values directly: reactive values may temporarily be unmasked.
				// node.value respects each field's autoUnmask option.
				const value = node.inputmask.unmaskedvalue() ? node.value : '';
				const expected = relatedNode.inputmask.unmaskedvalue()
				                 ? relatedNode.value
				                 : '';

				return !value || value === expected;
			}
		}

		const value = this.getValue();

		return !value || value === this.attrs.value;
	};
}

MustEqual.prototype          = Object.create(
	CustomBaseRestriction.prototype,
);
MustEqual.prototype.setAttrs = function ( attrs ) {
	CustomBaseRestriction.prototype.setAttrs.call( this, attrs );
	observeFieldRestriction.call( this );
};

export default MustEqual;
