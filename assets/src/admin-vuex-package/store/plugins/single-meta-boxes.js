import {
	config,
	setTableSeed,
	registerNamespacedModule,
} from './functions';

export function registerMetaBox( store, box ) {
	registerNamespacedModule( store, box.slug );
	setTableSeed( store, box );
}

export default function SingleMetaBoxesPlugin( store ) {
	for ( const container of config().containers ) {
		const boxes = [ ...container.boxes.filter( box => box.is_table ) ];

		for ( const box of boxes ) {
			registerMetaBox( store, box );
		}
	}
};

