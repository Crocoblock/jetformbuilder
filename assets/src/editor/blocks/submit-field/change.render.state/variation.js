const {
	      __,
      } = wp.i18n;

const variation = {
	name: 'switch-state',
	title: __( 'Change Render State', 'jet-form-builder' ),
	isActive: ( blockAttributes, variationAttributes ) => (
		blockAttributes.action_type === variationAttributes.action_type
	),
	description: __(
		`Change Render State button`,
		'jet-form-builder',
	),
	icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24"
	           height="24" aria-hidden="true" focusable="false">
		<path
	d="M4 6v12c0 1.1.9 2 2 2h3v-1.5H6c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h3V4H6c-1.1 0-2 .9-2 2zm7.2 16h1.5V2h-1.5v20zM15 5.5h1.5V4H15v1.5zm3.5.5H20c0-1.1-.9-2-2-2v1.5c.3 0 .5.2.5.5zm0 10.5H20v-2h-1.5v2zm0-3.5H20v-2h-1.5v2zm-.5 5.5V20c1.1 0 2-.9 2-2h-1.5c0 .3-.2.5-.5.5zM15 20h1.5v-1.5H15V20zm3.5-10.5H20v-2h-1.5v2z"/>
	</svg>,
	scope: [ 'block', 'inserter', 'transform' ],
	attributes: {
		action_type: 'switch-state',
	},
};

export default variation;