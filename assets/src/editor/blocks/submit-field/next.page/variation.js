const {
	      __,
      } = wp.i18n;

const variation = {
	name: 'next',
	title: __( 'Next Page', 'jet-form-builder' ),
	isActive: [ 'action_type' ],
	description: __(
		`Go to Next Page button`,
		'jet-form-builder',
	),
	icon: <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M48.615 39.6867C48.1972 40.1045 47.5236 40.1045 47.1058 39.6867C46.688 39.2774 46.688 38.5953 47.0973 38.186L53.279 32.0043L47.1058 25.8225C46.688 25.4047 46.688 24.7311 47.1058 24.3133C47.5236 23.8955 48.1972 23.8955 48.615 24.3133L55.7005 31.3989C56.0331 31.7314 56.0331 32.2686 55.7005 32.6011L48.615 39.6867Z" fill="currentColor"/>
		<path fillRule="evenodd" clipRule="evenodd" d="M39 54C41.2091 54 43 52.2091 43 50H58C60.2091 50 62 48.2091 62 46V18C62 15.7909 60.2091 14 58 14H43C43 11.7909 41.2091 10 39 10H6C3.79086 10 2 11.7909 2 14V50C2 52.2091 3.79086 54 6 54H39ZM39 12H6C4.89543 12 4 12.8954 4 14V50C4 51.1046 4.89543 52 6 52H39C40.1046 52 41 51.1046 41 50V14C41 12.8954 40.1046 12 39 12ZM43 48V16H58C59.1046 16 60 16.8954 60 18V46C60 47.1046 59.1046 48 58 48H43Z" fill="currentColor"/>
	</svg>,
	scope: [ 'block', 'inserter', 'transform' ],
	attributes: {
		action_type: 'next',
	},
};

export default variation;