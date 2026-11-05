import './style.css';
import SelectionLimit from './SelectionLimit';
import { getLimits, getWrapper } from './functions';
import { MinSelectionsRestriction, MaxSelectionsRestriction } from './restrictions/SelectionsRestrictions';

const { addAction, addFilter } = JetPlugins.hooks;
const { BaseHtmlAttr } = JetFormBuilderAbstract;

function SelectionLimitAttr( bound ) {
	BaseHtmlAttr.call( this );
	this.attrName = `${ bound }_selections`;
	this.isSupported = input => {
		this.initial = getLimits( input )[ bound ];
		return this.initial > 0;
	};
	this.nodeSignal = () => {
		const wrapper = getWrapper( this.input );
		const key = bound === 'min' ? 'jfbMinSelections' : 'jfbMaxSelections';
		wrapper.dataset[ key ] = this.value.current;
		wrapper.jfbSelectionLimit?.update();
	};
}

SelectionLimitAttr.prototype = Object.create( BaseHtmlAttr.prototype );

function MinSelectionsAttr() {
	SelectionLimitAttr.call( this, 'min' );
}
MinSelectionsAttr.prototype = Object.create( SelectionLimitAttr.prototype );

function MaxSelectionsAttr() {
	SelectionLimitAttr.call( this, 'max' );
}
MaxSelectionsAttr.prototype = Object.create( SelectionLimitAttr.prototype );

addFilter(
	'jet.fb.input.html.attrs',
	'jet-form-builder/selection-limits',
	attrs => [ ...attrs, MinSelectionsAttr, MaxSelectionsAttr ],
);

addFilter(
	'jet.fb.restrictions.default',
	'jet-form-builder/selection-limits',
	restrictions => [ MinSelectionsRestriction, MaxSelectionsRestriction, ...restrictions ],
);

addAction(
	'jet.fb.input.makeReactive',
	'jet-form-builder/selection-limits',
	input => {
		const limits = getLimits( input );
		if ( !limits.min && !limits.max ) {
			return;
		}
		const wrapper = getWrapper( input );
		wrapper.jfbSelectionLimit?.destroy();
		wrapper.jfbSelectionLimit = new SelectionLimit( input );
	},
);
