import actions from './actions';
import args from './arguments';
import preset from './preset';
import messages from './messages';
import limitAddon from './limit-addon';
import scheduleAddon from './schedule-addon';
import validation from './validation';
import './rating-popover';
import {
	applyFilters,
	addFilter,
} from '@wordpress/hooks';
import {
	registerPlugin,
	getPlugin,
	unregisterPlugin,
} from '@wordpress/plugins';
import { PluginDocumentSettingPanel } from '@wordpress/edit-post';

const withPluginProps = ( settings, base ) => {
	const PluginRender = settings.render;
	return () => <PluginDocumentSettingPanel
		key={ `plugin-panel-${ base.name }` }
		{ ...base }>
		<PluginRender key={ `plugin-render-${ base.name }` }/>
	</PluginDocumentSettingPanel>;
};

const registerJfbPlugin = plugin => {
	const { base, settings } = plugin;

	if ( !base.jfbApiVersion || 1 === base.jfbApiVersion ) {
		settings.render = withPluginProps( settings, base );
	}

	if ( getPlugin( base.name ) ) {
		unregisterPlugin( base.name );
	}
	registerPlugin( base.name, settings );
};

if ( !JetFormEditorData.isActivePro ) {
	addFilter( 'jet.fb.register.plugin.jf-actions-panel.after',
		'jet-form-builder', plugins => {
			plugins.push( scheduleAddon, limitAddon );

			return plugins;
		}, 0 );
}

export default function RegisterPlugins() {
	const sortedPlugins = [];
	const jfbPlugins    = applyFilters( 'jet.fb.register.plugins', [
		actions,
		args,
		validation,
		preset,
		messages,
	] );

	jfbPlugins.forEach( plugin => {
		const { base: { name, condition = true } } = plugin;

		if ( !condition ) {
			return false;
		}

		const beforePlugin = applyFilters(
			`jet.fb.register.plugin.${ name }.before`, [] );
		if ( beforePlugin ) {
			sortedPlugins.push( ...beforePlugin );
		}
		sortedPlugins.push( plugin );

		const afterPlugin = applyFilters(
			`jet.fb.register.plugin.${ name }.after`, [] );
		if ( afterPlugin ) {
			sortedPlugins.push( ...afterPlugin );
		}
	} );

	sortedPlugins.forEach( registerJfbPlugin );
}

