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

		this.fieldSettings      = {
			...this.fieldSettings,
			...JSON.parse( node.dataset.settings ),
		};
		this.fieldSettings.zoom = +this.fieldSettings.zoom;

		this.inputType = 'map';
	};

	this.setValue = function () {
		const [ node ] = this.nodes;

		if ( !node.value ) {
			return;
		}

		const getCoordsFromString = value => {
			const valueParts = value.split( ',' ),
			      latNum     = Number( valueParts[ 0 ] ),
			      lngNum     = Number( valueParts[ 1 ] );

			if ( 2 !== valueParts.length ||
				Number.isNaN( latNum ) ||
				Number.isNaN( lngNum )
			) {
				return {};
			}

			return {
				lat: latNum,
				lng: lngNum,
			};
		};

		switch ( this.fieldSettings.format ) {
			case 'location_string':
				this.value.current = getCoordsFromString( node.value );
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
				try {
					this.value.current = JSON.parse( node.value );
				}
				catch ( error ) {
					// for case, when we used inline preset
					this.value.current = getCoordsFromString( node.value );
				}
				break;
		}
	};

	this.makeReactive = function () {
		InputData.prototype.makeReactive.call( this );

		// disable aria attributes
		this.reporting.makeInvalid = () => {};
		this.reporting.makeValid   = () => {};

		const observer = new IntersectionObserver( ( entries, observer ) => {

			entries.forEach( ( entry ) => {
				if ( !entry.isIntersecting ) {
					return;
				}

				this.callable.render();
				this.silenceNotify();

				// Detach observer after the first render the map
				observer.unobserve( entry.target );
			} );
		} );

		observer.observe( this.nodes[ 0 ].parentElement );
	};

	this.hasAutoScroll = function () {
		return false;
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
	zoom: 14,
};

export default MapFieldData;