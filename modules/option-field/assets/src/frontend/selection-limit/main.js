import './style.css';
import SelectionLimit from './SelectionLimit';
import { getLimits, getWrapper } from './functions';
import { MinSelectionsRestriction, MaxSelectionsRestriction } from './restrictions/SelectionsRestrictions';

const { addAction, addFilter, hasAction, hasFilter } = JetPlugins.hooks;
const { BaseHtmlAttr } = JetFormBuilderAbstract;
const namespace = 'jet-form-builder/selection-limits';

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

if ( !hasFilter( 'jet.fb.input.html.attrs', namespace ) ) {
	addFilter(
		'jet.fb.input.html.attrs',
		namespace,
		attrs => [ ...attrs, MinSelectionsAttr, MaxSelectionsAttr ],
	);
}

if ( !hasFilter( 'jet.fb.restrictions.default', namespace ) ) {
	addFilter(
		'jet.fb.restrictions.default',
		namespace,
		restrictions => [ MinSelectionsRestriction, MaxSelectionsRestriction, ...restrictions ],
	);
}

if ( !hasAction( 'jet.fb.input.makeReactive', namespace ) ) {
	addAction(
		'jet.fb.input.makeReactive',
		namespace,
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
}
