import NoListenData from './NoListenData';
import ReactiveSet from '../reactive/ReactiveSet';

/**
 * @property {ReactiveSet} value
 *
 * @constructor
 */
function RenderStateData() {
	NoListenData.call( this );

	this.isSupported = function ( node ) {
		return (
			'hidden' === node?.type &&
			'_jfb_current_render_states[]' === node.name
		);
	};

	this.add = function ( stateName ) {
		this.value.add( stateName );
	};

	this.remove = function ( stateName ) {
		this.value.remove( stateName );
	};

	this.toggle = function ( stateName ) {
		this.value.toggle( stateName );
	};
}

RenderStateData.prototype = Object.create( NoListenData.prototype );

RenderStateData.prototype.getReactive = function () {
	return new ReactiveSet();
};

export default RenderStateData;