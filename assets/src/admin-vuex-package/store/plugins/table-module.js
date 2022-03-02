import { registerNamespacedModule } from './functions';


/**
 * @returns {function(*=): void}
 * @param namespace
 */
export default function TableModulePlugin( namespace = 'default' ) {
	return store => {
		registerNamespacedModule( store, namespace );
	};
}