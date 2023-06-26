import SignalHiddenArray from './SignalHiddenArray';

/**
 * @property {RenderStateData} input
 * @constructor
 */
function SignalRenderState() {
	SignalHiddenArray.call( this );

	this.isSupported = function ( node, input ) {
		return '_jfb_current_render_states[]' === node.name;
	};

	this.runSignal = function ( prevValue ) {
		SignalHiddenArray.prototype.runSignal.call( this, prevValue );

		const url     = new URL( window.location );
		const formId  = this.input.getSubmit().getFormId();
		const current = this.input.value.current || [];
		const param   = `jfb[${ formId }][state]`;
		const states  = [];

		for ( const stateSlug of current ) {
			if ( !this.input.isCustom( stateSlug ) ) {
				continue;
			}

			states.push( stateSlug );
		}

		if ( !states.length ) {
			if ( !url.searchParams.has( param ) ) {
				return;
			}

			url.searchParams.delete( param );
			window.history.pushState( {}, '', url.toString() );

			return;
		}

		const paramValue = states.join( ',' );
		if ( url.searchParams.get( param ) === paramValue ) {
			return;
		}

		url.searchParams.set( param, paramValue );
		window.history.pushState( {}, '', url.toString() );
	};
}

SignalRenderState.prototype = Object.create( SignalHiddenArray.prototype );

export default SignalRenderState;