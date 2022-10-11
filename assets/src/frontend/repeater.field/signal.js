import { isRepeater } from './functions';

const {
	      BaseSignal,
	      CalculatedFormula,
      } = window.JetFormBuilderAbstract;

/**
 * @property {RepeaterData} input
 */
function SignalRepeater() {
	BaseSignal.call( this );

	this.isSupported = function ( node, inputData ) {
		return isRepeater( node );
	};
	this.runSignal   = function () {
		const { current } = this.input.value;

		for ( const index in current ) {
			if ( !current.hasOwnProperty( index ) ) {
				continue;
			}
			this.runItem( index );
		}

		this.input.calcValue = Object.values( this.calcValues ).reduce(
			( prev, next ) => prev + next,
		);
	};
	/**
	 * @param current {string}
	 */
	this.runItem = function ( current ) {
		const observable = this.input.value.current[ current ];

		if ( observable.isObserved ) {
			return;
		}
		const template     = document.createElement( 'template' );
		template.innerHTML = this.input.template.innerHTML.trim();

		// set current index
		const currentIndex = this.input.value.current.length - 1;
		template.innerHTML = template.innerHTML.replace(
			/__i__/g,
			currentIndex,
		);

		template.content.firstChild.dataset.index = '' + currentIndex;
		this.input.container.append( template.content.firstChild );

		const appended = this.input.container.lastChild;

		appended.querySelector(
			'.jet-form-builder-repeater__remove',
		).addEventListener(
			'click',
			() => {
				appended.remove();
				this.input.value.current = this.input.value.current.filter(
					( item, index ) => {
						if ( +index !== +current ) {
							return true;
						}
						item.onRemove();

						return false;
					},
				);
			},
		);

		observable.observe( appended );
		this.setCalcItem( current );
	};

	this.setCalcItem = function ( currentIndex ) {
		const [ node ]      = this.input.nodes;
		const formulaString = node.dataset?.formula;

		this.calcValues[ currentIndex ] = 1;

		if ( !formulaString ) {
			return;
		}

		const observable = this.input.value.current[ currentIndex ];
		const formula    = new CalculatedFormula( formulaString, observable );

		formula.setResult = () => {
			this.calcValues[ currentIndex ] = formula.calculate();
			this.input.value.notify();
		};
		formula.setResult();
	};
}

SignalRepeater.prototype = Object.create( BaseSignal.prototype );

SignalRepeater.prototype.calcValues = {};

export default SignalRepeater;