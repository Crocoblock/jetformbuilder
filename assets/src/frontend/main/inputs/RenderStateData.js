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

	/**
	 * @param stateName {String}
	 */
	this.add = function ( stateName ) {
		this.value.add( stateName );
	};

	/**
	 * @param stateName {String}
	 */
	this.remove = function ( stateName ) {
		this.value.remove( stateName );
	};

	/**
	 * @param stateName {String}
	 * @param force {null|Boolean}
	 */
	this.toggle = function ( stateName, force = null ) {
		this.value.toggle( stateName, force );
	};
}

RenderStateData.prototype = Object.create( NoListenData.prototype );

RenderStateData.prototype.getReactive = function () {
	return new ReactiveSet();
};

export default RenderStateData;