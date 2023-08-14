import { getProvider, isMapField } from './functions';

const {
	      BaseSignal,
      } = JetFormBuilderAbstract;
const {
	      toHTML,
      } = JetFormBuilderFunctions;

function SignalMapField() {
	BaseSignal.call( this );

	this.lock.current = true;

	this.map      = null;
	this.marker   = null;
	this.mapFrame = null;
	this.position = null;
	this.preview  = null;

	this.markerDefaults = {
		...SignalMapField.prototype.markerDefaults,
	};

	this.isSupported = function ( node, input ) {
		return isMapField( node );
	};

	this.runSignal = function () {
		let location;
		const { current: position } = this.input.value;

		if ( !position || !Object.keys( position ).length ) {
			this.removeMarker();

			return;
		}

		const [ main, hash, lat, lng ] = this.input.nodes;

		this.setPreview( JetMapFieldsSettings.i18n.loading );

		/**
		 * @see https://github.com/Crocoblock/issues-tracker/issues/3158
		 */
		const onEndRequest = () => {
			this.input.reporting.valuePrev = null;
			this.input.report();
			this.input.loading.end();
		};

		this.input.loading.start();

		switch ( this.input.fieldSettings.format ) {
			case 'location_string':

				location = position.lat + ',' + position.lng;

				this.updateHashFieldPromise( location ).then( () => {
					main.value = location;
					this.setPreview( position );
				} ).finally( onEndRequest );

				break;

			case 'location_array':

				location = JSON.stringify( position );

				this.updateHashFieldPromise( location ).then( () => {
					main.value = location;
					this.setPreview( position );
				} ).finally( onEndRequest );

				break;

			case 'location_address':

				wp.apiFetch( {
					method: 'get',
					path: JetMapFieldsSettings.api + '?lat=' + position.lat +
						'&lng=' + position.lng,
					headers: {
						'nonce': JetMapFieldsSettings.nonce,
					},
				} ).then( ( response ) => {

					if ( response.success ) {
						if ( response.data ) {

							this.updateHashFieldPromise( response.data ).
								then( () => {
									main.value = response.data;
									this.setPreview( response.data );

								} ).finally( onEndRequest );
						}
						else {
							main.value = null;
							this.setPreview(
								JetMapFieldsSettings.i18n.notFound,
							);
							onEndRequest();
						}

					}
					else {
						main.value = null;
						this.setPreview( response.html );
						onEndRequest();
					}

				} ).catch( function ( e ) {
					console.log( e );
				} );

				break;
		}

		if ( lat ) {
			lat.value = position.lat;
		}

		if ( lng ) {
			lng.value = position.lng;
		}
	};
}

SignalMapField.prototype = Object.create( BaseSignal.prototype );
/**
 * @type {null}
 */
SignalMapField.prototype.map = null;
/**
 * @type {null}
 */
SignalMapField.prototype.marker = null;
/**
 * @type {null}
 */
SignalMapField.prototype.preview = null;
/**
 * @type {null}
 */
SignalMapField.prototype.position = null;
/**
 * @type {null}
 */
SignalMapField.prototype.mapFrame = null;
SignalMapField.prototype.mapDefaults    = {
	center: {
		lat: 41,
		lng: 71,
	},
	zoom: 1,
};
SignalMapField.prototype.markerDefaults = {
	content: '<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" fill="#C92C2C"/></svg>',
	shadow: false,
};

SignalMapField.prototype.removeMarker = function () {
	const [ main, hash, lat, lng ] = this.input.nodes;

	if ( this.marker ) {
		getProvider().removeMarker( this.marker );
	}

	this.setPreview( null );
	main.value = null;

	if ( lat ) {
		lat.value = null;
	}

	if ( lng ) {
		lng.value = null;
	}

	if ( hash ) {
		hash.value = null;
	}

};

SignalMapField.prototype.setPreview = function ( position ) {
	let positionText;

	if ( position && position.lat && position.lng ) {
		positionText = '<span title="Lat">' + position.lat +
			'</span>, <span title="Lng">' + position.lng + '</span>';
	}
	else {
		positionText = position;
	}

	this.position.innerHTML    = positionText;
	this.preview.style.display = position ? 'flex' : 'none';
};

SignalMapField.prototype.updateHashFieldPromise = function ( location ) {
	const [ main, hash ] = this.input.nodes;

	if ( !hash ) {
		return new Promise( function ( resolve ) {
			resolve();
		} );
	}

	return wp.apiFetch( {
		method: 'get',
		path: JetMapFieldsSettings.apiHash + '?loc=' + location,
		headers: {
			'nonce': JetMapFieldsSettings.nonce,
		},
	} ).then( response => {
		if ( response.success ) {
			hash.value = response.data;
		}
	} ).catch( function ( e ) {
		console.log( e );
	} );
};

SignalMapField.prototype.render = function () {
	let template = '<div class="jet-engine-map-field__preview" style="display: none; justify-content: space-between; padding: 0 0 5px; align-items: center;">' +
		'<address class="jet-engine-map-field__position"></address>' +
		'<div class="jet-engine-map-field__reset" role="button" style="cursor: pointer; color: #c92c2c; font-weight: 500; flex-shrink: 0;">× ' +
		JetMapFieldsSettings.i18n.resetBtn + '</div>' +
		'</div>' +
		'<div class="jet-engine-map-field__frame" style="height: ' +
		this.input.fieldSettings.height + 'px; width: 100%;"></div>';

	// map field in repeater
	if ( this.input.root.parent ) {
		template += '<div class="jet-engine-map-field__description">' +
			'<p style="margin-bottom: 0;"><strong>' +
			JetMapFieldsSettings.i18n.descTitle + ':</strong> <i>' +
			this.input.fieldSettings.field_prefix + '_lat, ' +
			this.input.fieldSettings.field_prefix + '_lng</i></p>' +
			'</div>';
	}

	const container = this.input.nodes[ 0 ].parentElement;

	container.append( toHTML( template ) );

	this.preview  = container.querySelector(
		'.jet-engine-map-field__preview',
	);
	this.position = container.querySelector(
		'.jet-engine-map-field__position',
	);
	this.mapFrame = container.querySelector(
		'.jet-engine-map-field__frame',
	);

	const provider = getProvider();

	if ( null !== this.input.value.current ) {
		this.mapDefaults = {
			...this.mapDefaults,
			center: this.input.value.current,
			zoom: this.input.fieldSettings.zoom,
		};
	}

	this.map = provider.initMap( this.mapFrame, this.mapDefaults );

	if ( null !== this.input.value.current ) {
		this.marker = provider.addMarker( {
			...this.markerDefaults,
			position: this.input.value.current,
			map: this.map,
		} );
	}

	provider.markerOnClick( this.map, this.markerDefaults, ( marker ) => {

		if ( this.marker ) {
			provider.removeMarker( this.marker );
		}

		this.marker = marker;

		this.input.value.current = provider.getMarkerPosition( marker, true );
	} );

	const resetBtn = container.querySelector( '.jet-engine-map-field__reset' );

	resetBtn.addEventListener( 'click', () => {
		this.input.value.current = null;
	} );

	// allow to run signal
	this.lock.current = false;
};

export default SignalMapField;