import { isRepeater } from './functions';

const {
	      BaseSignal,
      } = window.JetFormBuilderAbstract;

/**
 * @property {RepeaterData} input Related input
 */
// eslint-disable-next-line max-lines-per-function
function SignalRepeater() {
	BaseSignal.call( this );

	this.isSupported = function ( node ) {
		return isRepeater( node );
	};
	this.runSignal   = function ( prevValue = [] ) {
		const { current }     = this.input.value;
		const hasDeletedItems = (
			prevValue?.length && prevValue.length > current.length
		);

		if ( hasDeletedItems ) {
			this.removePrevItems( prevValue );
		}

		for ( const index of Object.keys( current ) ) {
			if ( !current.hasOwnProperty( index ) ) {
				continue;
			}
			this.runItem( +index, hasDeletedItems );
		}

		let calcValue = 0;

		for ( const row of Object.values( current ) ) {
			row.initCalc();
			calcValue += row.calc;
		}

		this.input.calcValue = calcValue;
	};
	/**
	 * @param currentIndex    {Number}
	 * @param shouldReObserve
	 */
	this.runItem = function ( currentIndex, shouldReObserve = false ) {
		/**
		 * @type {ObservableRow}
		 */
		const observable = this.input.value.current[ currentIndex ];

		if ( observable.isObserved ) {
			if ( !shouldReObserve ) {
				return;
			}

			observable.rootNode.remove();
		}

		const template     = document.createElement( 'template' );
		template.innerHTML = this.input.template.innerHTML.trim();

		template.innerHTML = template.innerHTML.replace(
			/__i__/g,
			currentIndex,
		);

		/**
		 * Reset input values for a new row
		 *
		 * @since 3.4.7
		 */
		const newRow = template.content.firstElementChild;
		const inputs = newRow.querySelectorAll( "input, select, textarea, output" );

		inputs.forEach( ( input ) => {
			switch ( input.type ) {
				case "checkbox":
				case "radio":
					input.checked = false;
					break;
				case "select-one":
				case "select-multiple":
					input.selectedIndex = -1;
					break;
				case "file":
					input.value = "";
					break;
				case "range":
					input.value = input.defaultValue || "";
					break;
				default:
					input.value = "";
					break;
			}
		} );

		template.content.firstChild.dataset.index = '' + currentIndex;

		this.input.container.append( newRow );

		const appended = this.input.container.lastChild;

		if ( this.input.isManualCount ) {
			appended.querySelector(
				'.jet-form-builder-repeater__remove',
			).addEventListener(
				'click',
				() => observable.removeManually(),
			);
		}

		if ( observable.isObserved ) {
			observable.reObserve( appended );

			return;
		}
		observable.observe( appended );
	};

	this.removePrevItems = function ( prevRows ) {
		/**
		 * @type {ObservableRow[]}
		 */
		const current = this.input.value.current;

		for ( const prevRow of prevRows ) {
			if ( !current.includes( prevRow ) ) {
				prevRow.removeManually();
			}
		}
	};
}

SignalRepeater.prototype = Object.create( BaseSignal.prototype );

export default SignalRepeater;