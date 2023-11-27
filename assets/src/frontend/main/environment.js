// https://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browser

const userAgent = navigator.userAgent;

// Safari 3.0+ "[object HTMLElementConstructor]"
const isSafari = /^((?!chrome|android).)*safari/i.test( userAgent ) ||
	/constructor/i.test( window.HTMLElement ) ||
	(
		( p ) => {
			return '[object SafariRemoteNotification]' === p.toString();
		}
	)( !window.safari || (
		typeof safari !== 'undefined' && safari.pushNotification
	) );

const environment = {
	safari: isSafari,
};

export default environment;