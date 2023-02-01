import { isRepeater } from '../functions';

let {
	    AdvancedRestriction,
	    Restriction,
    } = JetFormBuilderAbstract;

AdvancedRestriction = AdvancedRestriction || Restriction;

const {
	      allRejected,
      } = JetFormBuilderFunctions;

function RepeaterRestriction() {
	AdvancedRestriction.call( this );

	this.silenceInner = true;

	this.isSupported = function ( node, reporting ) {
		return isRepeater( node );
	};

	this.setReporting = function ( reporting ) {
		AdvancedRestriction.prototype.setReporting.call( this, reporting );

		/**
		 * @type {RepeaterData}
		 */
		const repeater = reporting.input;
		/**
		 * @type {ObservableRow[]}
		 */
		const current  = repeater.value.current || [];

		const report = () => {
			reporting.valuePrev = null;
			repeater.report();
		};

		for ( const observableRow of current ) {
			for ( const input of observableRow.getInputs() ) {
				input.watchValidity( report );
			}
		}

		repeater.lastObserved.watch( () => {
			for ( const curInput of repeater.lastObserved.current.getInputs() ) {
				curInput.watchValidity( report );
			}
		} );
	};

	this.validatePromise = async function () {
		/**
		 * @type {Observable[]}
		 */
		const rows         = this.reporting.input.value.current;
		const callbacks    = [];
		const silenceInner = this.silenceInner;
		this.silenceInner  = true;

		for ( const observable of rows ) {
			for ( const input of observable.getInputs() ) {
				callbacks.push(
					( resolve, reject ) => input.reporting.checkValidity(
						silenceInner,
					).
						then( resolve ).
						catch( reject ),
				);
			}
		}

		const results = await allRejected( callbacks );

		return results.length
		       ? Promise.reject(
				`Repeater has ${ results.length } invalid fields`,
			)
		       : Promise.resolve();
	};

	this.getRawMessage = function () {
		return '';
	};
}

RepeaterRestriction.prototype = Object.create( AdvancedRestriction.prototype );

RepeaterRestriction.prototype.silenceInner = null;

export default RepeaterRestriction;