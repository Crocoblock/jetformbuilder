/**
 * @this {ReactiveVar}
 *
 * @class
 */
import ReactiveVar from './ReactiveVar';

function LoadingReactiveVar() {
	ReactiveVar.call( this, false );

	this.start  = function () {
		this.current = true;
	};
	this.end    = function () {
		this.current = false;
	};
	this.toggle = function () {
		this.current = !this.current;
	};
}

LoadingReactiveVar.prototype = Object.create( ReactiveVar.prototype );

export default LoadingReactiveVar;