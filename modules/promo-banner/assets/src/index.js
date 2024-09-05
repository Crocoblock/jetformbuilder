import './index.scss';

( function( $ ) {

	"use strict";

	const JFBPromoCreateBanner = function( bannerHTML ) {

		const banner = document.createElement( 'div' );
		const bannerDismiss = document.createElement( 'a' );

		banner.classList.add( 'jfb-promo-banner' );

		if ( window.jfbPromoBanner.classes ) {
			banner.classList.add( window.jfbPromoBanner.classes );
		}

		bannerDismiss.classList.add( 'jfb-promo-banner__dismiss' );

		bannerDismiss.setAttribute( 'href', '#' );
		bannerDismiss.setAttribute( 'aria-label', 'Dismiss JetFormBuilder Promo Banner' );
		bannerDismiss.setAttribute( 'role', 'button' );
		bannerDismiss.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><rect x="0" fill="none" width="20" height="20"/><g><path d="M14.95 6.46L11.41 10l3.54 3.54-1.41 1.41L10 11.42l-3.53 3.53-1.42-1.42L8.58 10 5.05 6.47l1.42-1.42L10 8.58l3.54-3.53z"/></g></svg>';

		banner.innerHTML = bannerHTML;
		banner.appendChild( bannerDismiss );

		const bodyContent = document.getElementById( 'wpbody-content' );
		const wrap        = document.querySelector( '.wrap' );

		if ( wrap ) {
			wrap.prepend( banner );
		} else {
			bodyContent.prepend( banner );
		}

		$( banner ).on( 'click', '.jfb-promo-banner__dismiss', ( event ) => {

			event.preventDefault();
			banner.remove();

			$.ajax({
				url: window.ajaxurl,
				type: 'POST',
				dataType: 'json',
				data: {
					action: window.jfbPromoBanner.action,
					hash: window.jfbPromoBanner.hash,
					nonce: window.jfbPromoBanner.nonce,
				},
			});

		});

	}

	if ( window.jfbPromoBanner ) {

		$( window ).load( () => {
			JFBPromoCreateBanner( window.jfbPromoBanner.banner );
		} );

	}

} ( jQuery ) );
