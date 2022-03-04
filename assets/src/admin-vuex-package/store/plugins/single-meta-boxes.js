import {
	config,
	setTableSeed,
	registerNamespacedModule,
} from './functions';

export function registerMetaBox( store, box ) {
	registerNamespacedModule( store, box );
	setTableSeed( store, box );
}

export default function SingleMetaBoxesPlugin( store ) {
	for ( const container of config().containers ) {
		const boxes = [ ...container.boxes.filter( box => {
			return ['table', 'list' ].includes( box.render_type );
		} ) ];

		for ( const boxItem of boxes ) {
			registerMetaBox( store, boxItem );
		}
	}
};

