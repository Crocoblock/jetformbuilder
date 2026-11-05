import { countSelected, getLimits } from './functions';

const { addFilter } = JetPlugins.hooks;
const { AdvancedRestriction } = JetFormBuilderAbstract;

function MinSelectionsAdvancedRestriction() {
	AdvancedRestriction.call( this );
	this.type = 'min_selections';
	this.watchedAttrs.push( 'min_selections' );

	this.isSupported = ( node, reporting ) => getLimits( reporting.input ).min > 0;
	this.validate = () => countSelected( this.reporting.input, 'min' ) >= getLimits( this.reporting.input ).min;
	this.getRawMessage = () => this.getMessageBySlug( 'min_selections' );
}

MinSelectionsAdvancedRestriction.prototype = Object.create( AdvancedRestriction.prototype );

function MaxSelectionsAdvancedRestriction() {
	AdvancedRestriction.call( this );
	this.type = 'max_selections';
	this.watchedAttrs.push( 'max_selections' );

	this.isSupported = ( node, reporting ) => getLimits( reporting.input ).max > 0;
	this.validate = () => countSelected( this.reporting.input, 'max' ) <= getLimits( this.reporting.input ).max;
	this.getRawMessage = () => this.getMessageBySlug( 'max_selections' );
}

MaxSelectionsAdvancedRestriction.prototype = Object.create( AdvancedRestriction.prototype );

addFilter(
	'jet.fb.restrictions',
	'jet-form-builder/selection-limits',
	restrictions => [ MinSelectionsAdvancedRestriction, MaxSelectionsAdvancedRestriction, ...restrictions ],
);
