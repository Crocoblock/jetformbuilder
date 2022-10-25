import { isMapField } from './functions';

const { InputData } = JetFormBuilderAbstract;

/**
 * @property {SignalMapField} callable
 *
 * @constructor
 */
function MapFieldData() {
	InputData.call( this );

	this.isSupported = function ( node ) {
		return isMapField( node );
	};

	/**
	 * @param node {HTMLInputElement}
	 */
	this.setNode = function ( node ) {
		InputData.prototype.setNode.call( this, node );
		const container = node.parentElement;

		this.nodes.push(
			container.querySelector( '[data-map-field="hash"]' ),
			container.querySelector( '[data-map-field="lat"]' ),
			container.querySelector( '[data-map-field="lng"]' ),
		);

		this.fieldSettings = {
			...this.fieldSettings,
			...JSON.parse( node.dataset.settings ),
		};
	};

	this.setValue = function () {
		const [ node ] = this.nodes;

		if ( !node.value ) {
			return;
		}

		switch ( this.fieldSettings.format ) {
			case 'location_string':
				const valueParts = node.value.split( ',' );

				if ( 2 !== valueParts.length ||
					Number( valueParts[ 0 ] ) ||
					Number( valueParts[ 1 ] )
				) {
					return;
				}

				this.value.current = {
					lat: Number( valueParts[ 0 ] ),
					lng: Number( valueParts[ 1 ] ),
				};
				break;
			case 'location_address':
				const [ main, hash, lat, lng ] = this.nodes;

				if ( !lat?.value || !lng?.value ) {
					return false;
				}

				this.value.current = {
					lat: Number( lat.value ),
					lng: Number( lng?.value ),
				};
				break;
			case 'location_array':
				this.value.current = JSON.parse( node.value );
				break;
		}
	};

	this.makeReactive = function () {
		InputData.prototype.makeReactive.call( this );

		const observer = new IntersectionObserver( ( entries, observer ) => {

			entries.forEach( ( entry ) => {
				if ( !entry.isIntersecting ) {
					return;
				}

				this.callable.render();
				this.value.notify();

				// Detach observer after the first render the map
				observer.unobserve( entry.target );
			} );
		} );

		observer.observe( this.nodes[ 0 ].parentElement );
	};

}

MapFieldData.prototype = Object.create( InputData.prototype );

/**
 *
 * @property {'location_string'|'location_address'|'location_array'} format
 */
MapFieldData.prototype.fieldSettings = {
	height: '300',
	format: 'location_string',
	field_prefix: false,
};

export default MapFieldData;