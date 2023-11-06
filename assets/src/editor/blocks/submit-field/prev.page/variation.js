const {
	      __,
      } = wp.i18n;

const variation = {
	name: 'prev',
	title: __( 'Prev Page', 'jet-form-builder' ),
	isActive: [ 'action_type' ],
	description: __(
		`Go to Prev Page button`,
		'jet-form-builder',
	),
	icon: <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M15.385 39.6867C15.8028 40.1045 16.4764 40.1045 16.8942 39.6867C17.312 39.2774 17.312 38.5953 16.9027 38.186L10.721 32.0043L16.8942 25.8225C17.312 25.4047 17.312 24.7311 16.8942 24.3133C16.4764 23.8955 15.8028 23.8955 15.385 24.3133L8.29947 31.3989C7.96694 31.7314 7.96694 32.2686 8.29947 32.6011L15.385 39.6867Z" fill="currentColor"/>
		<path fillRule="evenodd" clipRule="evenodd" d="M25 54C22.7909 54 21 52.2091 21 50H6C3.79086 50 2 48.2091 2 46V18C2 15.7909 3.79086 14 6 14H21C21 11.7909 22.7909 10 25 10H58C60.2091 10 62 11.7909 62 14V50C62 52.2091 60.2091 54 58 54H25ZM25 12H58C59.1046 12 60 12.8954 60 14V50C60 51.1046 59.1046 52 58 52H25C23.8954 52 23 51.1046 23 50V14C23 12.8954 23.8954 12 25 12ZM21 48V16H6C4.89543 16 4 16.8954 4 18V46C4 47.1046 4.89543 48 6 48H21Z" fill="currentColor"/>
	</svg>,
	scope: [ 'block', 'inserter', 'transform' ],
	attributes: {
		action_type: 'prev',
	},
};

export default variation;