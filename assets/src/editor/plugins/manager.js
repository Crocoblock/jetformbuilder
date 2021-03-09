import * as actions from "./actions";
import { jfbHooks } from "../helpers/hooks-helper";

const jfbPlugins = jfbHooks.applyFilters( 'jet.fb.register.plugins', [
	actions
] );

const {
	registerPlugin
} = wp.plugins;

const registerJfbPlugin = plugin => {
	const { id, settings } = plugin;

	registerPlugin( id, settings );
};

jfbPlugins.forEach( registerJfbPlugin );

