import BaseSignal from './BaseSignal';
import { getCustomCheckboxInput } from '../inputs/functions';

/**
 * @property {CheckboxData} input
 *
 * @constructor
 */
function SignalCheckbox() {
	BaseSignal.call( this );

	this.isSupported = function ( node, inputData ) {
		return 'checkbox' === node.type;
	};

	this.runSignal = function () {
		this.input.calcValue = 0;
		const { current }    = this.input.value;

		for ( const node of this.input.nodes ) {
			(
				!node.dataset.custom
			) && this.processOption( node, current );
		}

		const customNodes = this.getCustomNodes();

		if ( !customNodes.length && !current.length ) {
			return;
		}

		const limit = Math.max( customNodes.length, current.length );

		for ( let i = 0; i < limit; i++ ) {
			let currentNode    = customNodes[ i ];
			const currentValue = current[ i ];

			// value has been removed
			if ( null === currentValue ) {
				currentNode.closest( '.custom-option' ).remove();

				continue;
			}

			// add row element in dom
			if ( 'undefined' === typeof currentNode ) {
				// it can't be disabled, something went wrong
				if ( false === currentValue ) {
					continue;
				}
				this.addCustomOption();

				currentNode = this.input.nodes[ this.input.nodes.length - 1 ];
			}

			this.input.calcValue += 1;

			const input    = getCustomCheckboxInput( currentNode );
			input.disabled = false === currentValue;

			if ( input.value === currentValue ||
				'boolean' === typeof currentValue
			) {
				continue;
			}

			input.value = currentValue;
		}

		this.input.value.silence();
		this.input.value.current = this.input.value.current.filter(
			valueItem => null !== valueItem,
		);
		this.input.value.silence();
	};
}

SignalCheckbox.prototype = Object.create( BaseSignal.prototype );

SignalCheckbox.prototype.processOption = function ( node, current ) {
	node.checked = current?.includes( node.value );

	if ( !node.checked ) {
		return;
	}

	const index = current.indexOf( node.value );

	// remove from array values
	current.splice( index, 1 );

	this.input.calcValue += parseFloat(
		node.dataset?.calculate ?? node.value,
	);
};

/*SignalCheckbox.prototype.makeEqualRows = function ( customNodes ) {
 if ( !this.input.isArray() ) {
 return;
 }

 const { current } = this.input.value;

 // if greater than 0 - add {diff} rows
 // if less than 0 - remove {diff} rows
 const diff = current.length - this.getCustomNodes().length;

 // remove
 if ( 0 > diff ) {
 this.removeCustomOptions( -1 * diff );
 }
 else if ( 0 < diff ) { // add new
 this.addCustomOptions( diff );
 }
 };

 SignalCheckbox.prototype.addCustomOptions = function ( count = 1 ) {
 for ( let i = 0; i < count; i++ ) {
 this.input.addCustomOption();
 }
 };

 /!**
 * If count is "-1" - when all custom options would be removed
 *
 * @param count
 *!/
 SignalCheckbox.prototype.removeCustomOptions = function ( count = -1 ) {
 const nodes = [ ...this.input.nodes ].reverse();

 loop: for ( const node of nodes ) {
 if ( !node.dataset.custom ) {
 continue;
 }
 node.closest( '.checkboxes-wrap' ).remove();

 switch ( count ) {
 case -1: // remove all
 continue;
 case 1: // the last
 break loop;
 }
 --count;
 }
 };*/
/**
 * @returns {ChildNode|Element}
 */
SignalCheckbox.prototype.addCustomOption = function () {
	const rowWrapper = this.input.addNewButton.closest(
		'.custom-option',
	);

	return this.input.wrapper.insertBefore(
		this.getCustomOptionNode(),
		rowWrapper,
	);
};

/**
 * @returns {*[]}
 */
SignalCheckbox.prototype.getCustomNodes = function () {
	return [ ...this.input.nodes ].filter(
		node => node.dataset.custom && node.nextElementSibling,
	);
};

/**
 * @returns {boolean|Element}
 */
SignalCheckbox.prototype.getCustomOptionNode = function () {
	if ( !this.input.addNewButton ) {
		return false;
	}

	const initial = this.input.addNewButton.querySelector( 'template' );

	const template     = document.createElement( 'template' );
	template.innerHTML = initial.innerHTML.trim();

	return template.content.firstChild;
};

export default SignalCheckbox;