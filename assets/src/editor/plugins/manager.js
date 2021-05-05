import * as actions from "./actions";
import * as args from "./arguments";
import * as captcha from "./captcha";
import * as gateways from "./gateways";
import * as preset from "./preset";
import * as messages from "./messages";

const {
	applyFilters
} = wp.hooks;

const {
	registerPlugin
} = wp.plugins;

const {
	PluginDocumentSettingPanel
} = wp.editPost;

const withPluginProps = ( settings, base ) => {
	const PluginRender = settings.render;
	return () => <PluginDocumentSettingPanel { ...base } key={ `plugin-panel-${ base.name }` }>
		<PluginRender key={ `plugin-render-${ base.name }` }/>
	</PluginDocumentSettingPanel>;
}

const registerJfbPlugin = plugin => {
	const { base, settings } = plugin;

	settings.render = withPluginProps( settings, base );

	registerPlugin( base.name, settings );
};

export default function RegisterPlugins() {
	const sortedPlugins = [];
	const jfbPlugins = applyFilters( 'jet.fb.register.plugins', [
		args,
		captcha,
		gateways,
		actions,
		preset,
		messages
	] );

	jfbPlugins.forEach( plugin => {
		const { base: { name, condition = true } } = plugin;

		if ( ! condition ) {
			return false;
		}

		const beforePlugin = applyFilters( `jet.fb.register.plugin.${ name }.before`, [] );
		if ( beforePlugin ) {
			sortedPlugins.push( ...beforePlugin );
		}
		sortedPlugins.push( plugin );

		const afterPlugin = applyFilters( `jet.fb.register.plugin.${ name }.after`, [] );
		if ( afterPlugin ) {
			sortedPlugins.push( ...afterPlugin );
		}
	} );

	sortedPlugins.forEach( registerJfbPlugin );
}

