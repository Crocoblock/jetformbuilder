import { registerNamespacedModule } from './functions';


/**
 * @return {function(*=): void}
 * @param  namespace
 */
export default function TableModulePlugin( namespace = 'default' ) {
	return store => {
		registerNamespacedModule( store, namespace );
	};
}