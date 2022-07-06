import BaseSignal from './BaseSignal';

class SignalRepeater extends BaseSignal {

	isSupported( inputData ) {
		const [ node ] = inputData.nodes;

		return 1 === + node.dataset.repeater;
	}

	runSignal( inputData ) {
		inputData.calcValue = inputData.value.length;

		for ( const index in inputData.value ) {
			if ( ! inputData.value.hasOwnProperty( index ) ) {
				continue;
			}
			this.runItem( inputData, index );
		}
	}


	/**
	 * @param inputData {RepeaterData}
	 * @param current
	 */
	runItem( inputData, current ) {
		const observable = inputData.value[ current ];

		if ( observable.isObserved ) {
			return;
		}
		const template = document.createElement( 'template' );
		template.innerHTML = inputData.template.innerHTML.trim();

		// set current index
		const currentIndex = inputData.value.length - 1;
		template.innerHTML = template.innerHTML.replace( /__i__/g, currentIndex );

		template.content.firstChild.dataset.index = '' + currentIndex;
		inputData.container.append( template.content.firstChild );

		const appended = inputData.container.lastChild;

		appended.querySelector( '.jet-form-builder-repeater__remove' ).addEventListener( 'click', () => {
			appended.remove();
			inputData.value = inputData.value.filter( (item, index) => +index !== +current );
		} )

		observable.observe( appended );
	}
}

export default SignalRepeater;