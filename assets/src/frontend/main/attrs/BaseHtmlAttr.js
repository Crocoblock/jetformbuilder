import ReactiveVar from '../reactive/ReactiveVar';

function BaseHtmlAttr() {
	this.attrName   = '';
	this.initial    = null;
	this.isFromData = false;
	this.value      = null;
}

BaseHtmlAttr.prototype = {
	/**
	 * Name of data attribute
	 */
	attrName: '',
	/**
	 * @type {InputData}
	 */
	input: null,
	initial: null,
	/**
	 * @type {ReactiveVar}
	 */
	value: null,
	observe() {
		this.value = new ReactiveVar( this.initial );
		this.value.make();

		this.addWatcherAttr();
	},
	nodeSignal() {
		const [ node ] = this.input.nodes;

		node[ this.attrName ] = this.value.current;
	},
	addWatcherAttr() {
		this.value.watch( () => this.nodeSignal() );
	},
	/**
	 * If you need specific check,
	 * you can rewrite this function
	 *
	 * @param  input {InputData}
	 * @return {boolean}
	 */
	isSupported( input ) {
		const [ node ] = input.nodes;

		const hasInRoot    = -1 !== node[ this.attrName ] ?? -1;
		const hasInDataSet = node.dataset.hasOwnProperty( this.attrName );

		if ( !hasInDataSet && !hasInRoot ) {
			return false;
		}

		this.initial = this.getInitial( input );

		return Boolean( this.initial );
	},
	/**
	 * @param  input {InputData}
	 * @return {*|boolean}
	 */
	getInitial( input ) {
		const [ node ] = input.nodes;

		return node.dataset[ this.attrName ] || node[ this.attrName ] || false;
	},

	/**
	 * @param input {InputData}
	 */
	setInput( input ) {
		this.input = input;
	},
};

export default BaseHtmlAttr;