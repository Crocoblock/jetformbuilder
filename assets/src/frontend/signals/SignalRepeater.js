import BaseSignal from './BaseSignal';
import { isRepeater } from '../supports';

/**
 * @property {RepeaterData} input
 */
class SignalRepeater extends BaseSignal {

	isSupported( node, inputData ) {
		return isRepeater( node );
	}

	runSignal() {
		const { current }    = this.input.value;
		this.input.calcValue = current.length;

		for ( const index in current ) {
			if ( !current.hasOwnProperty( index ) ) {
				continue;
			}
			this.runItem( index );
		}
	}

	/**
	 * @param current {string}
	 */
	runItem( current ) {
		const observable = this.input.value.current[ current ];

		if ( observable.isObserved ) {
			return;
		}
		const template     = document.createElement( 'template' );
		template.innerHTML = this.input.template.innerHTML.trim();

		// set current index
		const currentIndex = this.input.value.current.length - 1;
		template.innerHTML = template.innerHTML.replace( /__i__/g,
			currentIndex );

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
	}
}

export default SignalRepeater;