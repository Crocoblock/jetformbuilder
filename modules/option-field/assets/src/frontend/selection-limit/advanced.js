import { countSelected, getLimits, validateMinSelections } from './functions';

const { addFilter, hasFilter } = JetPlugins.hooks;
const { AdvancedRestriction } = JetFormBuilderAbstract;
const namespace = 'jet-form-builder/selection-limits';

function MinSelectionsAdvancedRestriction() {
	AdvancedRestriction.call( this );
	this.type = 'min_selections';
	this.watchedAttrs.push( 'min_selections' );

	this.isSupported = ( node, reporting ) => getLimits( reporting.input ).min > 0;
	this.validate = () => validateMinSelections( this.reporting.input );
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

if ( !hasFilter( 'jet.fb.restrictions', namespace ) ) {
	addFilter(
		'jet.fb.restrictions',
		namespace,
		restrictions => [ MinSelectionsAdvancedRestriction, MaxSelectionsAdvancedRestriction, ...restrictions ],
	);
}
