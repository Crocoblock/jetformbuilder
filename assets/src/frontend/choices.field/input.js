import { getWrapper, isChoicesField } from './functions';

const {
	      InputData,
	      ReactiveSet,
      } = JetFormBuilderAbstract;

const {
	      getParsedName,
      } = JetFormBuilderFunctions;

/**
 * @property {ReactiveSet} value
 *
 * @constructor
 */
function ChoicesData() {
	InputData.call( this );

	this.isSupported = isChoicesField;

	this.setNode = function ( node ) {
		this.nodes     = node.querySelectorAll(
			'.jet-form-builder-choice--item input',
		);
		this.rawName   = this.nodes[ 0 ].name;
		this.name      = getParsedName( this.rawName );
		this.inputType = 'choice';
	};

	this.setValue = function () {
		this.value.current = this.isArray()
		                     ? this.getMultipleValue()
		                     : this.getSingleValue();
	};

	this.addListeners = function () {
		for ( const node of this.nodes ) {
			node.addEventListener( 'change', () => this.setValue() );

			this.addListenerForChoice( node );
		}

		if ( !this.isArray() ) {
			return;
		}

		this.sanitize(
			value => Array.isArray( value ) ? value : [ value ],
		);
	};

	this.getMultipleValue = function () {
		return Array.from( this.nodes ).
			filter( item => item.checked ).
			map( item => item.value );
	};

	this.getSingleValue = function () {
		for ( const node of this.nodes ) {
			if ( node.checked ) {
				return node.value;
			}
		}

		return '';
	};

	this.addListenerForChoice = function ( node ) {
		const wrapperChoice = getWrapper( node );

		wrapperChoice.addEventListener( 'keydown', event => {
			// not enter or space
			if ( ![ 'Enter', 'Spacebar', ' ' ].includes( event.key ) ) {
				return;
			}
			event.preventDefault();

			this.toggleChoice( node );
		} );

		wrapperChoice.addEventListener( 'mousedown', event => {
			wrapperChoice.ariaPressed = true;
		} );

		wrapperChoice.addEventListener( 'mouseup', event => {
			wrapperChoice.ariaPressed = false;
		} );

		wrapperChoice.addEventListener(
			'click',
			() => this.toggleChoice( node ),
		);
	};

	this.toggleChoice = function ( node ) {
		if ( this.isArray() ) {
			this.value.toggle( node.value );

			return;
		}

		if ( this.value.current === node.value ) {
			this.onClear();

			return;
		}
		this.value.current = node.value;
	};
}

ChoicesData.prototype = Object.create( InputData.prototype );

ChoicesData.prototype.getReactive = function () {
	return new ReactiveSet();
};

export default ChoicesData;