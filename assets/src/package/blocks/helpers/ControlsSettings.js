const { applyFilters } = wp.hooks;

const ControlsSettings = () => applyFilters( 'jet.fb.register.fields.controls', {} )

export default ControlsSettings;