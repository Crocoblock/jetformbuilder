import * as actions from "./actions";
import * as args from "./arguments";
import * as captcha from "./captcha";

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
	return () => <PluginDocumentSettingPanel { ...base }>
		<PluginRender/>
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
		actions,
		captcha,
	] );

	jfbPlugins.forEach( plugin => {
		const { base: { name } } = plugin;

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

