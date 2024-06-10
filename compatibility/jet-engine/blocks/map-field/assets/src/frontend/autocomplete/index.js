import './index.pcss';
import handleMapFieldWithAutocomplete from './handleMapFieldWithAutocomplete';

const { addAction } = JetPlugins.hooks;

addAction(
	'jet.fb.input.makeReactive',
	'jet-form-builder/map-field-autocomplete',
	handleMapFieldWithAutocomplete,
);