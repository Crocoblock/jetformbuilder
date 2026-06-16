/**
 * i18n Loader for intl-tel-input translations (side-effect imports)
 *
 * This module uses side-effect imports as recommended by intl-tel-input authors.
 * Each locale import registers itself in the global intlTelInputGlobals object.
 */

/**
 * Map normalized locale codes to intl-tel-input i18n folder names.
 */
const localeMap = {
	ar: 'ar',
	bg: 'bg',
	bn: 'bn',
	bs: 'bs',
	ca: 'ca',
	cs: 'cs',
	da: 'da',
	de: 'de',
	el: 'el',
	en: 'en',
	es: 'es',
	fa: 'fa',
	fi: 'fi',
	fr: 'fr',
	hi: 'hi',
	hr: 'hr',
	hu: 'hu',
	id: 'id',
	it: 'it',
	ja: 'ja',
	ko: 'ko',
	mr: 'mr',
	nl: 'nl',
	no: 'no',
	pl: 'pl',
	pt: 'pt',
	ro: 'ro',
	ru: 'ru',
	sk: 'sk',
	sv: 'sv',
	te: 'te',
	th: 'th',
	tr: 'tr',
	uk: 'uk',
	ur: 'ur',
	vi: 'vi',
	zh: 'zh',
};

/**
 * Dynamic import loaders for each supported locale
 * These are side-effect imports that register translations globally
 * Note: English is built-in to intl-tel-input, so no loader needed
 */
const loaders = {
	uk: () => import( /* webpackChunkName: "phone-i18n-uk" */ '../../../lib/intl-tel-input/i18n/uk' ),
	ru: () => import( /* webpackChunkName: "phone-i18n-ru" */ '../../../lib/intl-tel-input/i18n/ru' ),
	de: () => import( /* webpackChunkName: "phone-i18n-de" */ '../../../lib/intl-tel-input/i18n/de' ),
	fr: () => import( /* webpackChunkName: "phone-i18n-fr" */ '../../../lib/intl-tel-input/i18n/fr' ),
	es: () => import( /* webpackChunkName: "phone-i18n-es" */ '../../../lib/intl-tel-input/i18n/es' ),
	it: () => import( /* webpackChunkName: "phone-i18n-it" */ '../../../lib/intl-tel-input/i18n/it' ),
	pl: () => import( /* webpackChunkName: "phone-i18n-pl" */ '../../../lib/intl-tel-input/i18n/pl' ),
	pt: () => import( /* webpackChunkName: "phone-i18n-pt" */ '../../../lib/intl-tel-input/i18n/pt' ),
	nl: () => import( /* webpackChunkName: "phone-i18n-nl" */ '../../../lib/intl-tel-input/i18n/nl' ),
	ja: () => import( /* webpackChunkName: "phone-i18n-ja" */ '../../../lib/intl-tel-input/i18n/ja' ),
	zh: () => import( /* webpackChunkName: "phone-i18n-zh" */ '../../../lib/intl-tel-input/i18n/zh' ),
	ko: () => import( /* webpackChunkName: "phone-i18n-ko" */ '../../../lib/intl-tel-input/i18n/ko' ),
	ar: () => import( /* webpackChunkName: "phone-i18n-ar" */ '../../../lib/intl-tel-input/i18n/ar' ),
	tr: () => import( /* webpackChunkName: "phone-i18n-tr" */ '../../../lib/intl-tel-input/i18n/tr' ),
	sv: () => import( /* webpackChunkName: "phone-i18n-sv" */ '../../../lib/intl-tel-input/i18n/sv' ),
	da: () => import( /* webpackChunkName: "phone-i18n-da" */ '../../../lib/intl-tel-input/i18n/da' ),
	fi: () => import( /* webpackChunkName: "phone-i18n-fi" */ '../../../lib/intl-tel-input/i18n/fi' ),
	no: () => import( /* webpackChunkName: "phone-i18n-no" */ '../../../lib/intl-tel-input/i18n/no' ),
	cs: () => import( /* webpackChunkName: "phone-i18n-cs" */ '../../../lib/intl-tel-input/i18n/cs' ),
	hu: () => import( /* webpackChunkName: "phone-i18n-hu" */ '../../../lib/intl-tel-input/i18n/hu' ),
	ro: () => import( /* webpackChunkName: "phone-i18n-ro" */ '../../../lib/intl-tel-input/i18n/ro' ),
	bg: () => import( /* webpackChunkName: "phone-i18n-bg" */ '../../../lib/intl-tel-input/i18n/bg' ),
	hr: () => import( /* webpackChunkName: "phone-i18n-hr" */ '../../../lib/intl-tel-input/i18n/hr' ),
	sk: () => import( /* webpackChunkName: "phone-i18n-sk" */ '../../../lib/intl-tel-input/i18n/sk' ),
	el: () => import( /* webpackChunkName: "phone-i18n-el" */ '../../../lib/intl-tel-input/i18n/el' ),
	th: () => import( /* webpackChunkName: "phone-i18n-th" */ '../../../lib/intl-tel-input/i18n/th' ),
	vi: () => import( /* webpackChunkName: "phone-i18n-vi" */ '../../../lib/intl-tel-input/i18n/vi' ),
	id: () => import( /* webpackChunkName: "phone-i18n-id" */ '../../../lib/intl-tel-input/i18n/id' ),
	hi: () => import( /* webpackChunkName: "phone-i18n-hi" */ '../../../lib/intl-tel-input/i18n/hi' ),
	bn: () => import( /* webpackChunkName: "phone-i18n-bn" */ '../../../lib/intl-tel-input/i18n/bn' ),
	ur: () => import( /* webpackChunkName: "phone-i18n-ur" */ '../../../lib/intl-tel-input/i18n/ur' ),
	fa: () => import( /* webpackChunkName: "phone-i18n-fa" */ '../../../lib/intl-tel-input/i18n/fa' ),
	mr: () => import( /* webpackChunkName: "phone-i18n-mr" */ '../../../lib/intl-tel-input/i18n/mr' ),
	te: () => import( /* webpackChunkName: "phone-i18n-te" */ '../../../lib/intl-tel-input/i18n/te' ),
	bs: () => import( /* webpackChunkName: "phone-i18n-bs" */ '../../../lib/intl-tel-input/i18n/bs' ),
	ca: () => import( /* webpackChunkName: "phone-i18n-ca" */ '../../../lib/intl-tel-input/i18n/ca' ),
};

/**
 * Cache for loaded translation modules
 */
const translationCache = {};

const getWindowLocaleContext = () => {
	return typeof window.jfbPhoneFieldLocaleContext === 'object' &&
		window.jfbPhoneFieldLocaleContext !== null
		? window.jfbPhoneFieldLocaleContext
		: {};
};

const getFirstNormalizedLocale = ( candidates = [] ) => {
	for ( const locale of candidates ) {
		const normalizedLocale = normalizeLocale( locale );

		if ( normalizedLocale ) {
			return normalizedLocale;
		}
	}

	return '';
};

export function normalizeLocale( locale ) {
	if ( ! locale || 'string' !== typeof locale ) {
		return '';
	}

	const sanitized = locale.trim().replace( /-/g, '_' );

	if ( ! sanitized ) {
		return '';
	}

	const [ language = '', region = '' ] = sanitized.split( '_' );

	if ( ! language ) {
		return '';
	}

	return region
		? `${ language.toLowerCase() }_${ region.toUpperCase() }`
		: language.toLowerCase();
}

export function resolveIntlLocale( locale ) {
	const normalizedLocale = normalizeLocale( locale );

	if ( ! normalizedLocale ) {
		return 'en';
	}

	const [ language ] = normalizedLocale.split( '_' );

	return localeMap[ normalizedLocale ] || localeMap[ language ] || 'en';
}

/**
 * Load translations for intl-tel-input (ESM import approach)
 *
 * @param {string} wpLocale - WordPress locale (e.g., 'uk', 'de_DE')
 * @return {Promise<Object>} - Promise that resolves to translations object
 */
export async function loadIntlTelInputLocale( wpLocale ) {
	const locale = resolveIntlLocale( wpLocale );

	// English is built-in to intl-tel-input, no need to load
	if ( locale === 'en' ) {
		return {};
	}

	// Check cache first
	if ( translationCache[ locale ] ) {
		return translationCache[ locale ];
	}

	// Get loader for this locale
	const loader = loaders[ locale ];

	if ( ! loader ) {
		// No loader found, return empty (will use English default)
		return {};
	}

	try {
		// Execute import and get the module
		const module = await loader();

		// Extract translations from the module
		// module.default contains merged translations (countries + interface)
		const translations = module.default || {};

		// Cache the result
		translationCache[ locale ] = translations;

		return translations;
	} catch {
		return {};
	}
}

/**
 * Get WordPress locale from document or global variable
 *
 * @return {string} WordPress locale code
 */
export function getPageLocale() {
	const localeContext = getWindowLocaleContext();

	return getFirstNormalizedLocale( [
		localeContext.pageLocale,
		localeContext.pageLang,
		document.documentElement?.lang,
		localeContext.siteLocale,
		localeContext.siteLang,
	] );
}

export function getSiteLocale() {
	const localeContext = getWindowLocaleContext();

	return getFirstNormalizedLocale( [
		localeContext.siteLocale,
		localeContext.siteLang,
	] );
}

export function resolveCurrentLocale() {
	return getPageLocale() || 'en';
}

/**
 * Load translations based on current WordPress locale
 *
 * @return {Promise<Object>} Country translations
 */
export async function loadCurrentLocaleTranslations() {
	const locale = resolveCurrentLocale();

	return await loadIntlTelInputLocale( locale );
}

export default {
	loadIntlTelInputLocale,
	loadCurrentLocaleTranslations,
	getPageLocale,
	getSiteLocale,
	resolveCurrentLocale,
	resolveIntlLocale,
	normalizeLocale,
	localeMap,
};
