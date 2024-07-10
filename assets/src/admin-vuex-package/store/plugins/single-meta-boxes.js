import {
	config,
	setTableSeed,
	registerNamespacedModule,
	setListSeed
} from './functions';

export function seedMetaBox( store, box ) {
	switch ( box.render_type ) {
		case 'table':
			setTableSeed( store, box );
			break;
		case 'list':
			setListSeed( store, box );
			break;
	}

}

export default function SingleMetaBoxesPlugin( store ) {
	const boxes = [];
	for ( const container of config().containers ) {
		boxes.push( ...container.boxes.filter( box => {
			return [ 'table', 'list' ].includes( box.render_type );
		} ) );
	}

	for ( const boxElem of boxes ) {
		registerNamespacedModule( store, boxElem );
		seedMetaBox( store, boxElem );
	}
};

