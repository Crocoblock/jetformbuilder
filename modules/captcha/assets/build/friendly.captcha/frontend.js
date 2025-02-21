/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./friendly.captcha/frontend/observableHandle.js":
/*!*******************************************************!*\
  !*** ./friendly.captcha/frontend/observableHandle.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var friendly_challenge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! friendly-challenge */ "../../../../node_modules/friendly-challenge/index.js");
const {
  applyFilters
} = JetPlugins.hooks;
// eslint-disable-next-line import/no-extraneous-dependencies


/**
 * @param observable {Observable}
 */
function observableHandle(observable) {
  var _window$JetFormBuilde;
  if (observable.parent) {
    return;
  }

  /**
   * @type {null|InputData}
   */
  const token = observable.getInput('_captcha_token');
  const formID = observable.getSubmit().getFormId();
  const container = token?.nodes?.[0]?.nextElementSibling;
  let options = (_window$JetFormBuilde = window?.JetFormBuilderCaptchaConfig?.[formID]) !== null && _window$JetFormBuilde !== void 0 ? _window$JetFormBuilde : false;
  if (!container || !options) {
    return;
  }

  // for correct applying validation logics
  token.isVisible = () => true;
  options = {
    ...options,
    doneCallback(responseHash) {
      token.value.current = responseHash;
      token.loading.end();
    },
    startedCallback: () => token.loading.start(),
    errorCallback: () => token.loading.end()
  };
  options = applyFilters('jet.fb.friendlyCaptcha.options', options, observable);
  const widget = new friendly_challenge__WEBPACK_IMPORTED_MODULE_0__.WidgetInstance(container, options);
  observable.getSubmit().submitter?.status?.watch?.(() => {
    widget.reset();
    token.onClear();
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (observableHandle);

/***/ }),

/***/ "../../../../node_modules/friendly-challenge/index.js":
/*!************************************************************!*\
  !*** ../../../../node_modules/friendly-challenge/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WidgetInstance: () => (/* binding */ WidgetInstance),
/* harmony export */   localizations: () => (/* binding */ localizations)
/* harmony export */ });
// Adapted from the base64-arraybuffer package implementation
// (https://github.com/niklasvh/base64-arraybuffer, MIT licensed)
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
const EQ_CHAR = "=".charCodeAt(0);
// Use a lookup table to find the index.
const lookup = new Uint8Array(256);
for (let i = 0; i < CHARS.length; i++) {
    lookup[CHARS.charCodeAt(i)] = i;
}
function encode(bytes) {
    const len = bytes.length;
    let base64 = "";
    for (let i = 0; i < len; i += 3) {
        const b0 = bytes[i + 0];
        const b1 = bytes[i + 1];
        const b2 = bytes[i + 2];
        // This temporary variable stops the NextJS 13 compiler from breaking this code in optimization.
        // See issue https://github.com/FriendlyCaptcha/friendly-challenge/issues/165
        let t = "";
        t += CHARS.charAt(b0 >>> 2);
        t += CHARS.charAt(((b0 & 3) << 4) | (b1 >>> 4));
        t += CHARS.charAt(((b1 & 15) << 2) | (b2 >>> 6));
        t += CHARS.charAt(b2 & 63);
        base64 += t;
    }
    if (len % 3 === 2) {
        base64 = base64.substring(0, base64.length - 1) + "=";
    }
    else if (len % 3 === 1) {
        base64 = base64.substring(0, base64.length - 2) + "==";
    }
    return base64;
}
function decode(base64) {
    const len = base64.length;
    let bufferLength = (len * 3) >>> 2; // * 0.75
    if (base64.charCodeAt(len - 1) === EQ_CHAR)
        bufferLength--;
    if (base64.charCodeAt(len - 2) === EQ_CHAR)
        bufferLength--;
    const bytes = new Uint8Array(bufferLength);
    for (let i = 0, p = 0; i < len; i += 4) {
        const encoded1 = lookup[base64.charCodeAt(i + 0)];
        const encoded2 = lookup[base64.charCodeAt(i + 1)];
        const encoded3 = lookup[base64.charCodeAt(i + 2)];
        const encoded4 = lookup[base64.charCodeAt(i + 3)];
        bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
        bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
        bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
    }
    return bytes;
}

var css = '.frc-captcha *{margin:0;padding:0;border:0;text-align:initial;border-radius:px;filter:none!important;transition:none!important;font-weight:400;font-size:14px;line-height:1.2;text-decoration:none;background-color:initial;color:#222}.frc-captcha{position:relative;min-width:250px;max-width:312px;border:1px solid #f4f4f4;padding-bottom:12px;background-color:#fff}.frc-captcha b{font-weight:700}.frc-container{display:flex;align-items:center;min-height:52px}.frc-icon{fill:#222;stroke:#222;flex-shrink:0;margin:8px 8px 0}.frc-icon.frc-warning{fill:#c00}.frc-success .frc-icon{animation:1s ease-in both frc-fade-in}.frc-content{white-space:nowrap;display:flex;flex-direction:column;margin:4px 6px 0 0;overflow-x:auto;flex-grow:1}.frc-banner{position:absolute;bottom:0;right:6px;line-height:1}.frc-banner *{font-size:10px;opacity:.8;text-decoration:none}.frc-progress{-webkit-appearance:none;-moz-appearance:none;appearance:none;margin:3px 0;height:4px;border:none;background-color:#eee;color:#222;width:100%;transition:.5s linear}.frc-progress::-webkit-progress-bar{background:#eee}.frc-progress::-webkit-progress-value{background:#222}.frc-progress::-moz-progress-bar{background:#222}.frc-button{cursor:pointer;padding:2px 6px;background-color:#f1f1f1;border:1px solid transparent;text-align:center;font-weight:600;text-transform:none}.frc-button:focus{border:1px solid #333}.frc-button:hover{background-color:#ddd}.frc-captcha-solution{display:none}.frc-err-url{text-decoration:underline;font-size:.9em}.frc-rtl{direction:rtl}.frc-rtl .frc-content{margin:4px 0 0 6px}.frc-banner.frc-rtl{left:6px;right:auto}.dark.frc-captcha{color:#fff;background-color:#222;border-color:#333}.dark.frc-captcha *{color:#fff}.dark.frc-captcha button{background-color:#444}.dark .frc-icon{fill:#fff;stroke:#fff}.dark .frc-progress{background-color:#444}.dark .frc-progress::-webkit-progress-bar{background:#444}.dark .frc-progress::-webkit-progress-value{background:#ddd}.dark .frc-progress::-moz-progress-bar{background:#ddd}@keyframes frc-fade-in{from{opacity:0}to{opacity:1}}';

// This is not an enum to save some bytes in the output bundle.
const SOLVER_TYPE_JS = 1;
const CHALLENGE_SIZE_BYTES = 128;

// @ts-ignore
const loaderSVG = `<circle cx="12" cy="12" r="8" stroke-width="3" stroke-dasharray="15 10" fill="none" stroke-linecap="round" transform="rotate(0 12 12)"><animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="0.9s" values="0 12 12;360 12 12"/></circle>`;
const errorSVG = `<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>`;
/**
 * Base template used for all widget states
 * The reason we use raw string interpolation here is so we don't have to ship something like lit-html.
 */
function getTemplate(fieldName, rtl, svgContent, svgAriaHidden, textContent, solutionString, buttonText, progress = false, debugData, additionalContainerClasses) {
    return `<div class="frc-container${additionalContainerClasses ? " " + additionalContainerClasses : ""}${rtl ? " frc-rtl" : ""}">
<svg class="frc-icon"${svgAriaHidden ? ' aria-hidden="true"' : ""} role="img" xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 24 24">${svgContent}</svg>
<div class="frc-content">
    <span class="frc-text" ${debugData ? `data-debug="${debugData}"` : ``}>${textContent}</span>
    ${buttonText ? `<button type="button" class="frc-button">${buttonText}</button>` : ""}
    ${progress ? `<progress class="frc-progress" value="0">0%</progress>` : ""}
</div>
</div><span class="frc-banner${rtl ? " frc-rtl" : ""}"><a lang="en" href="https://friendlycaptcha.com/" rel="noopener" target="_blank"><b>Friendly</b>Captcha ⇗</a></span>
${fieldName === "-" ? "" : `<input name="${fieldName}" class="frc-captcha-solution" type="hidden" value="${solutionString}">`}`;
}
/**
 * Used when the widget is ready to start solving.
 */
function getReadyHTML(fieldName, l) {
    return getTemplate(fieldName, l.rtl, `<path d="M17,11c0.34,0,0.67,0.04,1,0.09V6.27L10.5,3L3,6.27v4.91c0,4.54,3.2,8.79,7.5,9.82c0.55-0.13,1.08-0.32,1.6-0.55 C11.41,19.47,11,18.28,11,17C11,13.69,13.69,11,17,11z"/><path d="M17,13c-2.21,0-4,1.79-4,4c0,2.21,1.79,4,4,4s4-1.79,4-4C21,14.79,19.21,13,17,13z M17,14.38"/>`, true, l.text_ready, ".UNSTARTED", l.button_start, false);
}
/**
 * Used when the widget is retrieving a puzzle
 */
function getFetchingHTML(fieldName, l) {
    return getTemplate(fieldName, l.rtl, loaderSVG, true, l.text_fetching, ".FETCHING", undefined, true);
}
/**
 * Used when the solver is running, displays a progress bar.
 */
function getRunningHTML(fieldName, l) {
    return getTemplate(fieldName, l.rtl, loaderSVG, true, l.text_solving, ".UNFINISHED", undefined, true);
}
function getDoneHTML(fieldName, l, solution, data) {
    const timeData = `${data.t.toFixed(0)}s (${((data.h / data.t) * 0.001).toFixed(0)}K/s)${data.solver === SOLVER_TYPE_JS ? " JS Fallback" : ""}`;
    return getTemplate(fieldName, l.rtl, `<title>${l.text_completed_sr}</title><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"></path>`, false, l.text_completed, solution, undefined, false, timeData, "frc-success");
}
function getExpiredHTML(fieldName, l) {
    return getTemplate(fieldName, l.rtl, errorSVG, true, l.text_expired, ".EXPIRED", l.button_restart);
}
function getErrorHTML(fieldName, l, errorDescription, recoverable = true, headless = false) {
    return getTemplate(fieldName, l.rtl, errorSVG, true, `<b>${l.text_error}</b><br>${errorDescription}`, headless ? ".HEADLESS_ERROR" : ".ERROR", recoverable ? l.button_retry : undefined);
}
/**
 * Injects the style if no #frc-style element is already present
 * (to support custom stylesheets)
 */
function injectStyle(styleNonce = null) {
    if (!document.querySelector("#frc-style")) {
        const styleSheet = document.createElement("style");
        styleSheet.id = "frc-style";
        styleSheet.innerHTML = css;
        if (styleNonce) {
            styleSheet.setAttribute('nonce', styleNonce);
        }
        document.head.appendChild(styleSheet);
    }
}
/**
 * @param element parent element of friendlycaptcha
 * @param progress value between 0 and 1
 */
function updateProgressBar(element, data) {
    const p = element.querySelector(".frc-progress");
    const perc = (data.i + 1) / data.n;
    if (p) {
        p.value = perc;
        p.innerText = (perc * 100).toFixed(1) + "%";
        p.title = data.i + 1 + "/" + data.n + " (" + ((data.h / data.t) * 0.001).toFixed(0) + "K/s)";
    }
}
/**
 * Traverses parent nodes until a <form> is found, returns null if not found.
 */
function findParentFormElement(element) {
    while (element.tagName !== "FORM") {
        element = element.parentElement;
        if (!element) {
            return null;
        }
    }
    return element;
}
/**
 * Add listener to specified element that will only fire once on focus.
 */
function executeOnceOnFocusInEvent(element, listener) {
    element.addEventListener("focusin", listener, { once: true, passive: true });
}

// Defensive init to make it easier to integrate with Gatsby, NextJS, and friends.
let nav;
let ua;
if (typeof navigator !== "undefined" && typeof navigator.userAgent === "string") {
    nav = navigator;
    ua = nav.userAgent.toLowerCase();
}
/**
 * Headless browser detection on the clientside is imperfect. One can modify any clientside code to disable or change this check,
 * and one can spoof whatever is checked here. However, that doesn't make it worthless: it's yet another hurdle for spammers and
 * it stops unsophisticated scripters from making any request whatsoever.
 */
function isHeadless() {
    return (
    //tell-tale bot signs
    ua.indexOf("headless") !== -1 ||
        nav.appVersion.indexOf("Headless") !== -1 ||
        ua.indexOf("bot") !== -1 || // http://www.useragentstring.com/pages/useragentstring.php?typ=Browser
        ua.indexOf("crawl") !== -1 || // Only IE5 has two distributions that has this on windows NT.. so yeah.
        nav.webdriver === true ||
        !nav.language ||
        (nav.languages !== undefined && !nav.languages.length) // IE 11 does not support NavigatorLanguage.languages https://developer.mozilla.org/en-US/docs/Web/API/NavigatorLanguage/languages
    );
}

/**
 * Maps a value between 0 and 255 to a difficulty threshold (as uint32)
 * Difficulty 0 maps to 99.99% probability of being right on the first attempt
 * Anything above 250 needs 2^32 tries on average to solve.
 * 150 to 180 seems reasonable
 */
function difficultyToThreshold(value) {
    if (value > 255) {
        value = 255;
    }
    else if (value < 0) {
        value = 0;
    }
    return Math.pow(2, (255.999 - value) / 8.0) >>> 0;
}

const PUZZLE_EXPIRY_OFFSET = 13;
const NUMBER_OF_PUZZLES_OFFSET = 14;
const PUZZLE_DIFFICULTY_OFFSET = 15;
function getPuzzleSolverInputs(puzzleBuffer, numPuzzles) {
    const startingPoints = [];
    for (let i = 0; i < numPuzzles; i++) {
        const input = new Uint8Array(CHALLENGE_SIZE_BYTES);
        input.set(puzzleBuffer);
        input[120] = i;
        startingPoints.push(input);
    }
    return startingPoints;
}

function decodeBase64Puzzle(base64Puzzle) {
    const parts = base64Puzzle.split(".");
    const puzzle = parts[1];
    const arr = decode(puzzle);
    return {
        signature: parts[0],
        base64: puzzle,
        buffer: arr,
        n: arr[NUMBER_OF_PUZZLES_OFFSET],
        threshold: difficultyToThreshold(arr[PUZZLE_DIFFICULTY_OFFSET]),
        expiry: arr[PUZZLE_EXPIRY_OFFSET] * 300000,
    };
}
async function getPuzzle(urlsSeparatedByComma, siteKey, lang) {
    const urls = urlsSeparatedByComma.split(",");
    for (let i = 0; i < urls.length; i++) {
        try {
            const response = await fetchAndRetryWithBackoff(urls[i] + "?sitekey=" + siteKey, { headers: [["x-frc-client", "js-0.9.16"]], mode: "cors" }, 2);
            if (response.ok) {
                const json = await response.json();
                return json.data.puzzle;
            }
            else {
                let json;
                try {
                    json = await response.json();
                }
                catch (e) {
                    /* Do nothing, the error is not valid JSON */
                }
                if (json && json.errors && json.errors[0] === "endpoint_not_enabled") {
                    throw Error(`Endpoint not allowed (${response.status})`);
                }
                if (i === urls.length - 1) {
                    throw Error(`Response status ${response.status} ${response.statusText} ${json ? json.errors : ""}`);
                }
            }
        }
        catch (e) {
            console.error("[FRC Fetch]:", e);
            const err = new Error(`${lang.text_fetch_error} <a class="frc-err-url" href="${urls[i]}">${urls[i]}</a>`);
            err.rawError = e;
            throw err;
        }
    }
    // This code should never be reached.
    throw Error(`Internal error`);
}
/**
 * Retries given request with exponential backoff (starting with 1000ms delay, multiplying by 4 every time)
 * @param url Request (can be string url) to fetch
 * @param opts Options for fetch
 * @param n Number of times to attempt before giving up.
 */
async function fetchAndRetryWithBackoff(url, opts, n) {
    let time = 1000;
    return fetch(url, opts).catch(async (error) => {
        if (n === 0)
            throw error;
        await new Promise((r) => setTimeout(r, time));
        time *= 4;
        return fetchAndRetryWithBackoff(url, opts, n - 1);
    });
}

// English
const LANG_EN = {
    text_init: "Initializing...",
    text_ready: "Anti-Robot Verification",
    button_start: "Click to start verification",
    text_fetching: "Fetching Challenge",
    text_solving: "Verifying you are human...",
    text_completed: "I am human",
    text_completed_sr: "Automatic spam check completed",
    text_expired: "Anti-Robot verification expired",
    button_restart: "Restart",
    text_error: "Verification failed",
    button_retry: "Retry",
    text_fetch_error: "Failed to connect to",
};
// French
const LANG_FR = {
    text_init: "Chargement...",
    text_ready: "Vérification Anti-Robot",
    button_start: "Clique ici pour vérifier",
    text_fetching: "Chargement du défi",
    text_solving: "Nous vérifions que vous n'êtes pas un robot...",
    text_completed: "Je ne suis pas un robot",
    text_completed_sr: "Vérification automatique des spams terminée",
    text_expired: "Vérification anti-robot expirée",
    button_restart: "Redémarrer",
    text_error: "Échec de la vérification",
    button_retry: "Recommencer",
    text_fetch_error: "Problème de connexion avec",
};
// German
const LANG_DE = {
    text_init: "Initialisierung...",
    text_ready: "Anti-Roboter-Verifizierung",
    button_start: "Hier klicken",
    text_fetching: "Herausforderung laden...",
    text_solving: "Verifizierung, dass Sie ein Mensch sind...",
    text_completed: "Ich bin ein Mensch",
    text_completed_sr: "Automatische Spamprüfung abgeschlossen",
    text_expired: "Verifizierung abgelaufen",
    button_restart: "Erneut starten",
    text_error: "Verifizierung fehlgeschlagen",
    button_retry: "Erneut versuchen",
    text_fetch_error: "Verbindungsproblem mit",
};
// Dutch
const LANG_NL = {
    text_init: "Initializeren...",
    text_ready: "Anti-robotverificatie",
    button_start: "Klik om te starten",
    text_fetching: "Aan het laden...",
    text_solving: "Anti-robotverificatie bezig...",
    text_completed: "Ik ben een mens",
    text_completed_sr: "Automatische anti-spamcheck voltooid",
    text_expired: "Verificatie verlopen",
    button_restart: "Opnieuw starten",
    text_error: "Verificatie mislukt",
    button_retry: "Opnieuw proberen",
    text_fetch_error: "Verbinding mislukt met",
};
// Italian
const LANG_IT = {
    text_init: "Inizializzazione...",
    text_ready: "Verifica Anti-Robot",
    button_start: "Clicca per iniziare",
    text_fetching: "Caricamento...",
    text_solving: "Verificando che sei umano...",
    text_completed: "Non sono un robot",
    text_completed_sr: "Controllo automatico dello spam completato",
    text_expired: "Verifica Anti-Robot scaduta",
    button_restart: "Ricomincia",
    text_error: "Verifica fallita",
    button_retry: "Riprova",
    text_fetch_error: "Problema di connessione con",
};
// Portuguese
const LANG_PT = {
    text_init: "Inicializando...",
    text_ready: "Verificação Anti-Robô",
    button_start: "Clique para iniciar verificação",
    text_fetching: "Carregando...",
    text_solving: "Verificando se você é humano...",
    text_completed: "Eu sou humano",
    text_completed_sr: "Verificação automática de spam concluída",
    text_expired: "Verificação Anti-Robô expirada",
    button_restart: "Reiniciar",
    text_error: "Verificação falhou",
    button_retry: "Tentar novamente",
    text_fetch_error: "Falha de conexão com",
};
// Spanish
const LANG_ES = {
    text_init: "Inicializando...",
    text_ready: "Verificación Anti-Robot",
    button_start: "Haga clic para iniciar la verificación",
    text_fetching: "Cargando desafío",
    text_solving: "Verificando que eres humano...",
    text_completed: "Soy humano",
    text_completed_sr: "Verificación automática de spam completada",
    text_expired: "Verificación Anti-Robot expirada",
    button_restart: "Reiniciar",
    text_error: "Ha fallado la verificación",
    button_retry: "Intentar de nuevo",
    text_fetch_error: "Error al conectarse a",
};
// Catalan
const LANG_CA = {
    text_init: "Inicialitzant...",
    text_ready: "Verificació Anti-Robot",
    button_start: "Fes clic per començar la verificació",
    text_fetching: "Carregant repte",
    text_solving: "Verificant que ets humà...",
    text_completed: "Soc humà",
    text_completed_sr: "Verificació automàtica de correu brossa completada",
    text_expired: "La verificació Anti-Robot ha expirat",
    button_restart: "Reiniciar",
    text_error: "Ha fallat la verificació",
    button_retry: "Tornar a provar",
    text_fetch_error: "Error connectant a",
};
// Japanese
const LANG_JA = {
    text_init: "開始しています...",
    text_ready: "アンチロボット認証",
    button_start: "クリックして認証を開始",
    text_fetching: "ロードしています",
    text_solving: "認証中...",
    text_completed: "私はロボットではありません",
    text_completed_sr: "自動スパムチェックが完了しました",
    text_expired: "認証の期限が切れています",
    button_restart: "再度認証を行う",
    text_error: "認証にエラーが発生しました",
    button_retry: "再度認証を行う",
    text_fetch_error: "接続ができませんでした",
};
// Danish
const LANG_DA = {
    text_init: "Aktiverer...",
    text_ready: "Jeg er ikke en robot",
    button_start: "Klik for at starte verifikationen",
    text_fetching: "Henter data",
    text_solving: "Kontrollerer at du er et menneske...",
    text_completed: "Jeg er et menneske.",
    text_completed_sr: "Automatisk spamkontrol gennemført",
    text_expired: "Verifikationen kunne ikke fuldføres",
    button_restart: "Genstart",
    text_error: "Bekræftelse mislykkedes",
    button_retry: "Prøv igen",
    text_fetch_error: "Forbindelsen mislykkedes",
};
// Russian
const LANG_RU = {
    text_init: "Инициализация...",
    text_ready: "АнтиРобот проверка",
    button_start: "Нажмите, чтобы начать проверку",
    text_fetching: "Получаю задачу",
    text_solving: "Проверяю, что вы человек...",
    text_completed: "Я человек",
    text_completed_sr: "Aвтоматическая проверка на спам завершена",
    text_expired: "Срок АнтиРоботной проверки истёк",
    button_restart: "Начать заново",
    text_error: "Ошибка проверки",
    button_retry: "Повторить ещё раз",
    text_fetch_error: "Ошибка подключения",
};
// Swedish
const LANG_SV = {
    text_init: "Aktiverar...",
    text_ready: "Jag är inte en robot",
    button_start: "Klicka för att verifiera",
    text_fetching: "Hämtar data",
    text_solving: "Kontrollerar att du är människa...",
    text_completed: "Jag är en människa",
    text_completed_sr: "Automatisk spamkontroll slutförd",
    text_expired: "Anti-robot-verifieringen har löpt ut",
    button_restart: "Börja om",
    text_error: "Verifiering kunde inte slutföras",
    button_retry: "Omstart",
    text_fetch_error: "Verifiering misslyckades",
};
// Turkish
const LANG_TR = {
    text_init: "Başlatılıyor...",
    text_ready: "Anti-Robot Doğrulaması",
    button_start: "Doğrulamayı başlatmak için tıklayın",
    text_fetching: "Yükleniyor",
    text_solving: "Robot olmadığınız doğrulanıyor...",
    text_completed: "Ben bir insanım",
    text_completed_sr: "Otomatik spam kontrolü tamamlandı",
    text_expired: "Anti-Robot doğrulamasının süresi doldu",
    button_restart: "Yeniden başlat",
    text_error: "Doğrulama başarısız oldu",
    button_retry: "Tekrar dene",
    text_fetch_error: "Bağlantı başarısız oldu",
};
// Greek
const LANG_EL = {
    text_init: "Προετοιμασία...",
    text_ready: "Anti-Robot Επαλήθευση",
    button_start: " Κάντε κλικ για να ξεκινήσει η επαλήθευση",
    text_fetching: " Λήψη πρόκλησης",
    text_solving: " Επιβεβαίωση ανθρώπου...",
    text_completed: "Είμαι άνθρωπος",
    text_completed_sr: " Ο αυτόματος έλεγχος ανεπιθύμητου περιεχομένου ολοκληρώθηκε",
    text_expired: " Η επαλήθευση Anti-Robot έληξε",
    button_restart: " Επανεκκίνηση",
    text_error: " Η επαλήθευση απέτυχε",
    button_retry: " Δοκιμάστε ξανά",
    text_fetch_error: " Αποτυχία σύνδεσης με",
};
// Ukrainian
const LANG_UK = {
    text_init: "Ініціалізація...",
    text_ready: "Антиробот верифікація",
    button_start: "Натисніть, щоб розпочати верифікацію",
    text_fetching: "З’єднання",
    text_solving: "Перевірка, що ви не робот...",
    text_completed: "Я не робот",
    text_completed_sr: "Автоматична перевірка спаму завершена",
    text_expired: "Час вичерпано",
    button_restart: "Почати знову",
    text_error: "Верифікація не вдалась",
    button_retry: "Спробувати знову",
    text_fetch_error: "Не вдалось з’єднатись",
};
// Bulgarian
const LANG_BG = {
    text_init: "Инициализиране...",
    text_ready: "Анти-робот проверка",
    button_start: "Щракнете, за да започнете проверката",
    text_fetching: "Предизвикателство",
    text_solving: "Проверяваме дали си човек...",
    text_completed: "Аз съм човек",
    text_completed_sr: "Автоматичната проверка за спам е завършена",
    text_expired: "Анти-Робот проверката изтече",
    button_restart: "Рестартирайте",
    text_error: "Неуспешна проверка",
    button_retry: "Опитайте пак",
    text_fetch_error: "Неуспешно свързване с",
};
// Czech
const LANG_CS = {
    text_init: "Inicializace...",
    text_ready: "Ověření proti robotům",
    button_start: "Klikněte pro ověření",
    text_fetching: "Problém při načítání",
    text_solving: "Ověření, že jste člověk...",
    text_completed: "Jsem člověk",
    text_completed_sr: "Automatická kontrola spamu dokončena",
    text_expired: "Ověření proti robotům vypršelo",
    button_restart: "Restartovat",
    text_error: "Ověření se nezdařilo",
    button_retry: "Zkusit znovu",
    text_fetch_error: "Připojení se nezdařilo",
};
// Slovak
const LANG_SK = {
    text_init: "Inicializácia...",
    text_ready: "Overenie proti robotom",
    button_start: "Kliknite pre overenie",
    text_fetching: "Problém pri načítaní",
    text_solving: "Overenie, že ste človek...",
    text_completed: "Som človek",
    text_completed_sr: "Automatická kontrola spamu dokončená",
    text_expired: "Overenie proti robotom vypršalo",
    button_restart: "Reštartovať",
    text_error: "Overenie sa nepodarilo",
    button_retry: "Skúsiť znova",
    text_fetch_error: "Pripojenie sa nepodarilo",
};
// Norwegian
const LANG_NO = {
    text_init: " Aktiverer...",
    text_ready: "Jeg er ikke en robot",
    button_start: "Klikk for å starte verifiseringen",
    text_fetching: "Henter data",
    text_solving: "Sjekker at du er et menneske...",
    text_completed: "Jeg er et menneske",
    text_completed_sr: "Automatisk spam-sjekk fullført",
    text_expired: "Verifisering kunne ikke fullføres",
    button_restart: "Omstart",
    text_error: "Bekreftelsen mislyktes",
    button_retry: "Prøv på nytt",
    text_fetch_error: "Tilkoblingen mislyktes",
};
// Finnish
const LANG_FI = {
    text_init: "Aktivoidaan...",
    text_ready: "En ole robotti",
    button_start: "Aloita vahvistus klikkaamalla",
    text_fetching: "Haetaan tietoja",
    text_solving: "Tarkistaa, että olet ihminen...",
    text_completed: "Olen ihminen",
    text_completed_sr: "Automaattinen roskapostin tarkistus suoritettu",
    text_expired: "Vahvistusta ei voitu suorittaa loppuun",
    button_restart: "Uudelleenkäynnistys",
    text_error: "Vahvistus epäonnistui",
    button_retry: "Yritä uudelleen",
    text_fetch_error: "Yhteys epäonnistui",
};
// Latvian
const LANG_LV = {
    text_init: "Notiek inicializēšana...",
    text_ready: "Verifikācija, ka neesat robots",
    button_start: "Noklikšķiniet, lai sāktu verifikāciju",
    text_fetching: "Notiek drošības uzdevuma izgūšana",
    text_solving: "Notiek pārbaude, vai esat cilvēks...",
    text_completed: "Es esmu cilvēks",
    text_completed_sr: "Automātiska surogātpasta pārbaude pabeigta",
    text_expired: "Verifikācijas, ka neesat robots, derīgums beidzies",
    button_restart: "Restartēt",
    text_error: "Verifikācija neizdevās",
    button_retry: "Mēģināt vēlreiz",
    text_fetch_error: "Neizdevās izveidot savienojumu ar",
};
// Lithuanian
const LANG_LT = {
    text_init: "Inicijuojama...",
    text_ready: "Patikrinimas, ar nesate robotas",
    button_start: "Spustelėkite patikrinimui pradėti",
    text_fetching: "Gavimo iššūkis",
    text_solving: "Tikrinama, ar esate žmogus...",
    text_completed: "Esu žmogus",
    text_completed_sr: "Automatinė patikra dėl pašto šiukšlių atlikta",
    text_expired: "Patikrinimas, ar nesate robotas, baigė galioti",
    button_restart: "Pradėti iš naujo",
    text_error: "Patikrinimas nepavyko",
    button_retry: "Kartoti",
    text_fetch_error: "Nepavyko prisijungti prie",
};
// Polish
const LANG_PL = {
    text_init: "Inicjowanie...",
    text_ready: "Weryfikacja antybotowa",
    button_start: "Kliknij, aby rozpocząć weryfikację",
    text_fetching: "Pobieranie",
    text_solving: "Weryfikacja, czy nie jesteś robotem...",
    text_completed: "Nie jestem robotem",
    text_completed_sr: "Zakończono automatyczne sprawdzanie spamu",
    text_expired: "Weryfikacja antybotowa wygasła",
    button_restart: "Uruchom ponownie",
    text_error: "Weryfikacja nie powiodła się",
    button_retry: "Spróbuj ponownie",
    text_fetch_error: "Nie udało się połączyć z",
};
// Estonian
const LANG_ET = {
    text_init: "Initsialiseerimine...",
    text_ready: "Robotivastane kinnitus",
    button_start: "Kinnitamisega alustamiseks klõpsake",
    text_fetching: "Väljakutse toomine",
    text_solving: "Kinnitatakse, et sa oled inimene...",
    text_completed: "Ma olen inimene",
    text_completed_sr: "Automaatne rämpsposti kontroll on lõpetatud",
    text_expired: "Robotivastane kinnitus aegus",
    button_restart: "Taaskäivita",
    text_error: "Kinnitamine nurjus",
    button_retry: "Proovi uuesti",
    text_fetch_error: "Ühenduse loomine nurjus",
};
// Croatian
const LANG_HR = {
    text_init: "Početno postavljanje...",
    text_ready: "Provjera protiv robota",
    button_start: "Kliknite za početak provjere",
    text_fetching: "Dohvaćanje izazova",
    text_solving: "Provjeravamo jeste li čovjek...",
    text_completed: "Nisam robot",
    text_completed_sr: "Automatska provjera je završena",
    text_expired: "Vrijeme za provjeru protiv robota je isteklo",
    button_restart: "Osvježi",
    text_error: "Provjera nije uspjlela",
    button_retry: " Ponovo pokreni",
    text_fetch_error: "Nije moguće uspostaviti vezu",
};
// Serbian
const LANG_SR = {
    text_init: "Pokretanje...",
    text_ready: "Anti-Robot Verifikacija",
    button_start: "Kliknite da biste započeli verifikaciju",
    text_fetching: "Učitavanje izazova",
    text_solving: "Verifikacija da ste čovek...",
    text_completed: "Ja sam čovek",
    text_completed_sr: "Automatska provera neželjene pošte je završena",
    text_expired: "Anti-Robot verifikacija je istekla",
    button_restart: "Ponovo pokrenuti",
    text_error: "Verifikacija nije uspela",
    button_retry: "Pokušajte ponovo",
    text_fetch_error: "Neuspelo povezivanje sa...",
};
// Slovenian
const LANG_SL = {
    text_init: "Inicializiranje...",
    text_ready: "Preverjanje robotov",
    button_start: "Kliknite za začetek preverjanja",
    text_fetching: "Prenašanje izziva",
    text_solving: "Preverjamo, ali ste človek",
    text_completed: "Nisem robot",
    text_completed_sr: "Avtomatsko preverjanje je zaključeno",
    text_expired: "Preverjanje robotov je poteklo",
    button_restart: "Osveži",
    text_error: "Preverjanje ni uspelo",
    button_retry: "Poskusi ponovno",
    text_fetch_error: "Povezave ni bilo mogoče vzpostaviti",
};
// Hungarian
const LANG_HU = {
    text_init: "Inicializálás...",
    text_ready: "Robotellenes ellenőrzés",
    button_start: "Kattintson az ellenőrzés megkezdéséhez",
    text_fetching: "Feladvány lekérése",
    text_solving: "Annak igazolása, hogy Ön nem robot...",
    text_completed: "Nem vagyok robot",
    text_completed_sr: "Automatikus spam ellenőrzés befejeződött",
    text_expired: "Robotellenes ellenőrzés lejárt",
    button_restart: "Újraindítás",
    text_error: "Az ellenőrzés nem sikerült",
    button_retry: "Próbálja újra",
    text_fetch_error: "Nem sikerült csatlakozni",
};
// Romanian
const LANG_RO = {
    text_init: "Se inițializează...",
    text_ready: "Verificare anti-robot",
    button_start: "Click pentru a începe verificarea",
    text_fetching: "Downloading",
    text_solving: "Verificare că ești om...",
    text_completed: "Sunt om",
    text_completed_sr: "Verificarea automată a spam-ului a fost finalizată",
    text_expired: "Verificarea anti-robot a expirat",
    button_restart: "Restart",
    text_error: "Verificare eșuată",
    button_retry: "Reîncearcă",
    text_fetch_error: "Nu s-a putut conecta",
};
// Chinese
const LANG_ZH = {
    text_init: "初始化中……",
    text_ready: "人机验证",
    button_start: "点击开始",
    text_fetching: "正在加载",
    text_solving: "人机校验中……",
    text_completed: "我不是机器人",
    text_completed_sr: "人机验证完成",
    text_expired: "验证已过期",
    button_restart: "重新开始",
    text_error: "校验失败",
    button_retry: "重试",
    text_fetch_error: "无法连接到",
};
// Traditional Chinese
const LANG_ZH_TW = {
    text_init: "正在初始化……",
    text_ready: "反機器人驗證",
    button_start: "點擊開始驗證",
    text_fetching: "載入中",
    text_solving: "反機器人驗證中……",
    text_completed: "我不是機器人",
    text_completed_sr: "驗證完成",
    text_expired: "驗證超時",
    button_restart: "重新開始",
    text_error: "驗證失敗",
    button_retry: "重試",
    text_fetch_error: "無法連線到",
};
// Vietnamese
const LANG_VI = {
    text_init: "Đang khởi tạo...",
    text_ready: "Xác minh chống Robot",
    button_start: "Bấm vào đây để xác minh",
    text_fetching: "Tìm nạp và xử lý thử thách",
    text_solving: "Xác minh bạn là người...",
    text_completed: "Bạn là con người",
    text_completed_sr: "Xác minh hoàn tất",
    text_expired: "Xác minh đã hết hạn",
    button_restart: "Khởi động lại",
    text_error: "Xác minh thất bại",
    button_retry: "Thử lại",
    text_fetch_error: "Không kết nối được",
};
// Hebrew
const LANG_HE = {
    text_init: "בביצוע...",
    text_ready: "אימות אנוש",
    button_start: "צריך ללחוץ להתחלת האימות",
    text_fetching: "אתגר המענה בהכנה",
    text_solving: "מתבצע אימות אנוש...",
    text_completed: "אני לא רובוט",
    text_completed_sr: "בדיקת הספאם האוטומטית הסתיימה",
    text_expired: "פג תוקף אימות האנוש",
    button_restart: "להתחיל שוב",
    text_error: "אימות האנוש נכשל",
    button_retry: "לנסות שוב",
    text_fetch_error: "נכשל החיבור אל",
    rtl: true,
};
// Thai
const LANG_TH = {
    text_init: "การเริ่มต้น...",
    text_ready: " การตรวจสอบต่อต้านหุ่นยนต์",
    button_start: "คลิกเพื่อเริ่มการตรวจสอบ",
    text_fetching: "การดึงความท้าทาย",
    text_solving: "ยืนยันว่าคุณเป็นมนุษย์...",
    text_completed: "ฉันเป็นมนุษย์",
    text_completed_sr: "การตรวจสอบสแปมอัตโนมัติเสร็จสมบูรณ์",
    text_expired: "การตรวจสอบ ต่อต้านหุ่นยนต์ หมดอายุ",
    button_restart: "รีสตาร์ท",
    text_error: "การยืนยันล้มเหลว",
    button_retry: "ลองใหม่",
    text_fetch_error: "ไม่สามารถเชื่อมต่อได้"
};
// South Korean
const LANG_KR = {
    text_init: "초기화 중",
    text_ready: "Anti-Robot 검증",
    button_start: "검증을 위해 클릭해 주세요",
    text_fetching: "검증 준비 중",
    text_solving: "검증 중",
    text_completed: "검증이 완료되었습니다",
    text_completed_sr: "자동 스팸 확인 완료",
    text_expired: "Anti-Robot 검증 만료",
    button_restart: "다시 시작합니다",
    text_error: "검증 실패",
    button_retry: "다시 시도해 주세요",
    text_fetch_error: "연결하지 못했습니다",
};
const localizations = {
    en: LANG_EN,
    de: LANG_DE,
    nl: LANG_NL,
    fr: LANG_FR,
    it: LANG_IT,
    pt: LANG_PT,
    es: LANG_ES,
    ca: LANG_CA,
    ja: LANG_JA,
    da: LANG_DA,
    ru: LANG_RU,
    sv: LANG_SV,
    tr: LANG_TR,
    el: LANG_EL,
    uk: LANG_UK,
    bg: LANG_BG,
    cs: LANG_CS,
    sk: LANG_SK,
    no: LANG_NO,
    fi: LANG_FI,
    lv: LANG_LV,
    lt: LANG_LT,
    pl: LANG_PL,
    et: LANG_ET,
    hr: LANG_HR,
    sr: LANG_SR,
    sl: LANG_SL,
    hu: LANG_HU,
    ro: LANG_RO,
    zh: LANG_ZH,
    zh_tw: LANG_ZH_TW,
    vi: LANG_VI,
    he: LANG_HE,
    th: LANG_TH,
    kr: LANG_KR,
    // alternative language codes
    nb: LANG_NO,
};

function createDiagnosticsBuffer(solverID, timeToSolved) {
    const arr = new Uint8Array(3);
    const view = new DataView(arr.buffer);
    view.setUint8(0, solverID);
    view.setUint16(1, timeToSolved);
    return arr;
}

var workerString = "!function(){\"use strict\";const A=\"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\",I=\"=\".charCodeAt(0),g=new Uint8Array(256);for(let I=0;I<A.length;I++)g[A.charCodeAt(I)]=I;function C(A){const I={},g=A.exports,C=g.memory,Q=g.__alloc,t=g.__retain,B=g.__rtti_base||-1;return I.__allocArray=(A,I)=>{const g=function(A){return new Uint32Array(C.buffer)[(B+4>>>2)+2*A]}(A),e=31-Math.clz32(g>>>6&31),o=I.length,i=Q(o<<e,0),r=Q(12,A),n=new Uint32Array(C.buffer);n[r+0>>>2]=t(i),n[r+4>>>2]=i,n[r+8>>>2]=o<<e;const E=C.buffer,s=new Uint8Array(E);if(16384&g)for(let A=0;A<o;++A)s[(i>>>e)+A]=t(I[A]);else s.set(I,i>>>e);return r},I.__getUint8Array=A=>{const I=new Uint32Array(C.buffer),g=I[A+4>>>2];return new Uint8Array(C.buffer,g,I[g-4>>>2]>>>0)},function(A,I={}){const g=A.__argumentsLength?I=>{A.__argumentsLength.value=I}:A.__setArgumentsLength||A.__setargc||(()=>({}));for(const C in A){if(!Object.prototype.hasOwnProperty.call(A,C))continue;const Q=A[C],t=C.split(\".\")[0];\"function\"==typeof Q&&Q!==g?(I[t]=(...A)=>(g(A.length),Q(...A))).original=Q:I[t]=Q}return I}(g,I)}class Q{constructor(A){this.b=new Uint8Array(128),this.h=new Uint32Array(16),this.t=0,this.c=0,this.v=new Uint32Array(32),this.m=new Uint32Array(32),this.outlen=A}}function t(A,I){return A[I]^A[I+1]<<8^A[I+2]<<16^A[I+3]<<24}function B(A,I,g,C,Q,t,B,e){const o=I[B],i=I[B+1],r=I[e],n=I[e+1];let E,s,w,c,a=A[g],D=A[g+1],h=A[C],f=A[C+1],y=A[Q],l=A[Q+1],u=A[t],N=A[t+1];E=a+h,s=(a&h|(a|h)&~E)>>>31,a=E,D=D+f+s,E=a+o,s=(a&o|(a|o)&~E)>>>31,a=E,D=D+i+s,w=u^a,c=N^D,u=c,N=w,E=y+u,s=(y&u|(y|u)&~E)>>>31,y=E,l=l+N+s,w=h^y,c=f^l,h=w>>>24^c<<8,f=c>>>24^w<<8,E=a+h,s=(a&h|(a|h)&~E)>>>31,a=E,D=D+f+s,E=a+r,s=(a&r|(a|r)&~E)>>>31,a=E,D=D+n+s,w=u^a,c=N^D,u=w>>>16^c<<16,N=c>>>16^w<<16,E=y+u,s=(y&u|(y|u)&~E)>>>31,y=E,l=l+N+s,w=h^y,c=f^l,h=c>>>31^w<<1,f=w>>>31^c<<1,A[g]=a,A[g+1]=D,A[C]=h,A[C+1]=f,A[Q]=y,A[Q+1]=l,A[t]=u,A[t+1]=N}const e=[4089235720,1779033703,2227873595,3144134277,4271175723,1013904242,1595750129,2773480762,2917565137,1359893119,725511199,2600822924,4215389547,528734635,327033209,1541459225],o=[0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,28,20,8,16,18,30,26,12,2,24,0,4,22,14,10,6,22,16,24,0,10,4,30,26,20,28,6,12,14,2,18,8,14,18,6,2,26,24,22,28,4,12,10,20,8,0,30,16,18,0,10,14,4,8,20,30,28,2,22,24,12,16,6,26,4,24,12,20,0,22,16,6,8,26,14,10,30,28,2,18,24,10,2,30,28,26,8,20,0,14,12,6,18,4,16,22,26,22,14,28,24,2,6,18,10,0,30,8,16,12,4,20,12,30,28,18,22,6,0,16,24,4,26,14,2,8,20,10,20,4,16,8,14,12,2,10,30,22,18,28,6,24,26,0,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,28,20,8,16,18,30,26,12,2,24,0,4,22,14,10,6];function i(A,I){const g=A.v,C=A.m;for(let I=0;I<16;I++)g[I]=A.h[I],g[I+16]=e[I];g[24]=g[24]^A.t,g[25]=g[25]^A.t/4294967296,I&&(g[28]=~g[28],g[29]=~g[29]);for(let I=0;I<32;I++)C[I]=t(A.b,4*I);for(let A=0;A<12;A++)B(g,C,0,8,16,24,o[16*A+0],o[16*A+1]),B(g,C,2,10,18,26,o[16*A+2],o[16*A+3]),B(g,C,4,12,20,28,o[16*A+4],o[16*A+5]),B(g,C,6,14,22,30,o[16*A+6],o[16*A+7]),B(g,C,0,10,20,30,o[16*A+8],o[16*A+9]),B(g,C,2,12,22,24,o[16*A+10],o[16*A+11]),B(g,C,4,14,16,26,o[16*A+12],o[16*A+13]),B(g,C,6,8,18,28,o[16*A+14],o[16*A+15]);for(let I=0;I<16;I++)A.h[I]=A.h[I]^g[I]^g[I+16]}function r(A,I){for(let I=0;I<16;I++)A.h[I]=e[I];A.b.set(I),A.h[0]^=16842752^A.outlen}async function n(){return(A,I,g=4294967295)=>{const C=function(A,I,g){if(128!=A.length)throw Error(\"Invalid input\");const C=A.buffer,t=new DataView(C),B=new Q(32);B.t=128;const e=t.getUint32(124,!0),o=e+g;for(let g=e;g<o;g++)if(t.setUint32(124,g,!0),r(B,A),i(B,!0),B.h[0]<I)return 0==ASC_TARGET?new Uint8Array(B.h.buffer):Uint8Array.wrap(B.h.buffer);return new Uint8Array(0)}(A,I,g);return[A,C]}}let E,s;Uint8Array.prototype.slice||Object.defineProperty(Uint8Array.prototype,\"slice\",{value:function(A,I){return new Uint8Array(Array.prototype.slice.call(this,A,I))}}),self.ASC_TARGET=0;const w=new Promise((A=>s=A));self.onerror=A=>{self.postMessage({type:\"error\",message:JSON.stringify(A)})},self.onmessage=async A=>{const Q=A.data;try{if(\"solver\"===Q.type){if(Q.forceJS){E=1;const A=await n();s(A)}else try{E=2;const A=WebAssembly.compile(function(A){const C=A.length;let Q=3*C>>>2;A.charCodeAt(C-1)===I&&Q--,A.charCodeAt(C-2)===I&&Q--;const t=new Uint8Array(Q);for(let I=0,Q=0;I<C;I+=4){const C=g[A.charCodeAt(I+0)],B=g[A.charCodeAt(I+1)],e=g[A.charCodeAt(I+2)],o=g[A.charCodeAt(I+3)];t[Q++]=C<<2|B>>4,t[Q++]=(15&B)<<4|e>>2,t[Q++]=(3&e)<<6|63&o}return t}(\"AGFzbQEAAAABKghgAABgAn9/AGADf39/AX9gAX8AYAR/f39/AGAAAX9gAX8Bf2ACf38BfwINAQNlbnYFYWJvcnQABAMMCwcGAwAAAQIFAQIABQMBAAEGFgR/AUEAC38BQQALfwBBAwt/AEHgDAsHbgkGbWVtb3J5AgAHX19hbGxvYwABCF9fcmV0YWluAAIJX19yZWxlYXNlAAMJX19jb2xsZWN0AAQHX19yZXNldAAFC19fcnR0aV9iYXNlAwMNVWludDhBcnJheV9JRAMCDHNvbHZlQmxha2UyYgAKCAELCvQSC5IBAQV/IABB8P///wNLBEAACyMBQRBqIgQgAEEPakFwcSICQRAgAkEQSxsiBmoiAj8AIgVBEHQiA0sEQCAFIAIgA2tB//8DakGAgHxxQRB2IgMgBSADShtAAEEASARAIANAAEEASARAAAsLCyACJAEgBEEQayICIAY2AgAgAkEBNgIEIAIgATYCCCACIAA2AgwgBAsEACAACwMAAQsDAAELBgAjACQBC7sCAQF/AkAgAUUNACAAQQA6AAAgACABakEEayICQQA6AAMgAUECTQ0AIABBADoAASAAQQA6AAIgAkEAOgACIAJBADoAASABQQZNDQAgAEEAOgADIAJBADoAACABQQhNDQAgAEEAIABrQQNxIgJqIgBBADYCACAAIAEgAmtBfHEiAmpBHGsiAUEANgIYIAJBCE0NACAAQQA2AgQgAEEANgIIIAFBADYCECABQQA2AhQgAkEYTQ0AIABBADYCDCAAQQA2AhAgAEEANgIUIABBADYCGCABQQA2AgAgAUEANgIEIAFBADYCCCABQQA2AgwgACAAQQRxQRhqIgFqIQAgAiABayEBA0AgAUEgTwRAIABCADcDACAAQgA3AwggAEIANwMQIABCADcDGCABQSBrIQEgAEEgaiEADAELCwsLcgACfyAARQRAQQxBAhABIQALIAALQQA2AgAgAEEANgIEIABBADYCCCABQfD///8DIAJ2SwRAQcAKQfAKQRJBORAAAAsgASACdCIBQQAQASICIAEQBiAAKAIAGiAAIAI2AgAgACACNgIEIAAgATYCCCAAC88BAQJ/QaABQQAQASIAQQxBAxABQYABQQAQBzYCACAAQQxBBBABQQhBAxAHNgIEIABCADcDCCAAQQA2AhAgAEIANwMYIABCADcDICAAQgA3AyggAEIANwMwIABCADcDOCAAQgA3A0AgAEIANwNIIABCADcDUCAAQgA3A1ggAEIANwNgIABCADcDaCAAQgA3A3AgAEIANwN4IABCADcDgAEgAEIANwOIASAAQgA3A5ABQYABQQUQASIBQYABEAYgACABNgKYASAAQSA2ApwBIAAL2AkCA38SfiAAKAIEIQIgACgCmAEhAwNAIARBgAFIBEAgAyAEaiABIARqKQMANwMAIARBCGohBAwBCwsgAigCBCkDACEMIAIoAgQpAwghDSACKAIEKQMQIQ4gAigCBCkDGCEPIAIoAgQpAyAhBSACKAIEKQMoIQsgAigCBCkDMCEGIAIoAgQpAzghB0KIkvOd/8z5hOoAIQhCu86qptjQ67O7fyEJQqvw0/Sv7ry3PCEQQvHt9Pilp/2npX8hCiAAKQMIQtGFmu/6z5SH0QCFIRFCn9j52cKR2oKbfyESQpSF+aXAyom+YCETQvnC+JuRo7Pw2wAhFEEAIQQDQCAEQcABSARAIAUgCCARIAwgBSADIARBgAhqIgEtAABBA3RqKQMAfHwiBYVCIIoiDHwiCIVCGIoiESAIIAwgBSARIAMgAS0AAUEDdGopAwB8fCIMhUIQiiIIfCIVhUI/iiEFIAsgCSASIA0gCyADIAEtAAJBA3RqKQMAfHwiDYVCIIoiCXwiEYVCGIohCyAGIBAgEyAOIAYgAyABLQAEQQN0aikDAHx8IgaFQiCKIg58IhCFQhiKIhIgECAOIAYgEiADIAEtAAVBA3RqKQMAfHwiDoVCEIoiE3wiEIVCP4ohBiAHIAogFCAPIAcgAyABLQAGQQN0aikDAHx8IgeFQiCKIg98IgqFQhiKIhIgCiAPIAcgEiADIAEtAAdBA3RqKQMAfHwiD4VCEIoiCnwiEoVCP4ohByAQIAogDCARIAkgDSALIAMgAS0AA0EDdGopAwB8fCINhUIQiiIJfCIWIAuFQj+KIgwgAyABLQAIQQN0aikDAHx8IhCFQiCKIgp8IgsgECALIAyFQhiKIhEgAyABLQAJQQN0aikDAHx8IgwgCoVCEIoiFHwiECARhUI/iiELIAYgEiAIIA0gBiADIAEtAApBA3RqKQMAfHwiDYVCIIoiCHwiCoVCGIoiBiANIAYgAyABLQALQQN0aikDAHx8Ig0gCIVCEIoiESAKfCIKhUI/iiEGIAcgFSAJIA4gByADIAEtAAxBA3RqKQMAfHwiDoVCIIoiCHwiCYVCGIoiByAOIAcgAyABLQANQQN0aikDAHx8Ig4gCIVCEIoiEiAJfCIIhUI/iiEHIAUgFiATIA8gBSADIAEtAA5BA3RqKQMAfHwiD4VCIIoiCXwiFYVCGIoiBSAPIAUgAyABLQAPQQN0aikDAHx8Ig8gCYVCEIoiEyAVfCIJhUI/iiEFIARBEGohBAwBCwsgAigCBCACKAIEKQMAIAggDIWFNwMAIAIoAgQgAigCBCkDCCAJIA2FhTcDCCACKAIEIAIoAgQpAxAgDiAQhYU3AxAgAigCBCACKAIEKQMYIAogD4WFNwMYIAIoAgQgAigCBCkDICAFIBGFhTcDICACKAIEIAIoAgQpAyggCyAShYU3AyggAigCBCACKAIEKQMwIAYgE4WFNwMwIAIoAgQgAigCBCkDOCAHIBSFhTcDOCAAIAw3AxggACANNwMgIAAgDjcDKCAAIA83AzAgACAFNwM4IAAgCzcDQCAAIAY3A0ggACAHNwNQIAAgCDcDWCAAIAk3A2AgACAQNwNoIAAgCjcDcCAAIBE3A3ggACASNwOAASAAIBM3A4gBIAAgFDcDkAEL4QIBBH8gACgCCEGAAUcEQEHQCUGACkEeQQUQAAALIAAoAgAhBBAIIgMoAgQhBSADQoABNwMIIAQoAnwiACACaiEGA0AgACAGSQRAIAQgADYCfCADKAIEIgIoAgQgAygCnAGtQoiS95X/zPmE6gCFNwMAIAIoAgRCu86qptjQ67O7fzcDCCACKAIEQqvw0/Sv7ry3PDcDECACKAIEQvHt9Pilp/2npX83AxggAigCBELRhZrv+s+Uh9EANwMgIAIoAgRCn9j52cKR2oKbfzcDKCACKAIEQuv6htq/tfbBHzcDMCACKAIEQvnC+JuRo7Pw2wA3AzggAyAEEAkgBSgCBCkDAKcgAUkEQEEAIAUoAgAiAUEQaygCDCICSwRAQfALQbAMQc0NQQUQAAALQQxBAxABIgAgATYCACAAIAI2AgggACABNgIEIAAPCyAAQQFqIQAMAQsLQQxBAxABQQBBABAHCwwAQaANJABBoA0kAQsL+gQJAEGBCAu/AQECAwQFBgcICQoLDA0ODw4KBAgJDw0GAQwAAgsHBQMLCAwABQIPDQoOAwYHAQkEBwkDAQ0MCw4CBgUKBAAPCAkABQcCBAoPDgELDAYIAw0CDAYKAAsIAwQNBwUPDgEJDAUBDw4NBAoABwYDCQIICw0LBw4MAQMJBQAPBAgGAgoGDw4JCwMACAwCDQcBBAoFCgIIBAcGAQUPCwkOAwwNAAABAgMEBQYHCAkKCwwNDg8OCgQICQ8NBgEMAAILBwUDAEHACQspGgAAAAEAAAABAAAAGgAAAEkAbgB2AGEAbABpAGQAIABpAG4AcAB1AHQAQfAJCzEiAAAAAQAAAAEAAAAiAAAAcwByAGMALwBzAG8AbAB2AGUAcgBXAGEAcwBtAC4AdABzAEGwCgsrHAAAAAEAAAABAAAAHAAAAEkAbgB2AGEAbABpAGQAIABsAGUAbgBnAHQAaABB4AoLNSYAAAABAAAAAQAAACYAAAB+AGwAaQBiAC8AYQByAHIAYQB5AGIAdQBmAGYAZQByAC4AdABzAEGgCws1JgAAAAEAAAABAAAAJgAAAH4AbABpAGIALwBzAHQAYQB0AGkAYwBhAHIAcgBhAHkALgB0AHMAQeALCzMkAAAAAQAAAAEAAAAkAAAASQBuAGQAZQB4ACAAbwB1AHQAIABvAGYAIAByAGEAbgBnAGUAQaAMCzMkAAAAAQAAAAEAAAAkAAAAfgBsAGkAYgAvAHQAeQBwAGUAZABhAHIAcgBhAHkALgB0AHMAQeAMCy4GAAAAIAAAAAAAAAAgAAAAAAAAACAAAAAAAAAAYQAAAAIAAAAhAgAAAgAAACQC\")),Q=await async function(A){const I=await async function(A){const I={env:{abort(){throw Error(\"Wasm aborted\")}}};return{exports:C(await WebAssembly.instantiate(A,I))}}(A),g=I.exports.__retain(I.exports.__allocArray(I.exports.Uint8Array_ID,new Uint8Array(128)));let Q=I.exports.__getUint8Array(g);return(A,C,t=4294967295)=>{Q.set(A);const B=I.exports.solveBlake2b(g,C,t);Q=I.exports.__getUint8Array(g);const e=I.exports.__getUint8Array(B);return I.exports.__release(B),[Q,e]}}(await A);s(Q)}catch(A){console.log(\"FriendlyCaptcha failed to initialize WebAssembly, falling back to Javascript solver: \"+A.toString()),E=1;const I=await n();s(I)}self.postMessage({type:\"ready\",solver:E})}else if(\"start\"===Q.type){const A=await w;self.postMessage({type:\"started\"});let I,g=0;for(let C=0;C<256;C++){Q.puzzleSolverInput[123]=C;const[t,B]=A(Q.puzzleSolverInput,Q.threshold);if(0!==B.length){I=t;break}console.warn(\"FC: Internal error or no solution found\"),g+=Math.pow(2,32)-1}g+=new DataView(I.slice(-4).buffer).getUint32(0,!0),self.postMessage({type:\"done\",solution:I.slice(-8),h:g,puzzleIndex:Q.puzzleIndex,puzzleNumber:Q.puzzleNumber})}}catch(A){setTimeout((()=>{throw A}))}}}();";

// Defensive init to make it easier to integrate with Gatsby and friends.
let URL;
if (typeof window !== "undefined") {
    URL = window.URL || window.webkitURL;
}
class WorkerGroup {
    constructor() {
        this.workers = [];
        this.puzzleNumber = 0;
        this.numPuzzles = 0;
        this.threshold = 0;
        this.startTime = 0;
        this.progress = 0;
        this.totalHashes = 0;
        this.puzzleSolverInputs = [];
        // The index of the next puzzle
        this.puzzleIndex = 0;
        this.solutionBuffer = new Uint8Array(0);
        // initialize some value, so ts is happy
        this.solverType = 1;
        this.readyCount = 0;
        this.startCount = 0;
        this.progressCallback = () => 0;
        this.readyCallback = () => 0;
        this.startedCallback = () => 0;
        this.doneCallback = () => 0;
        this.errorCallback = () => 0;
    }
    init() {
        this.terminateWorkers();
        this.progress = 0;
        this.totalHashes = 0;
        this.readyCount = 0;
        this.startCount = 0;
        // Setup four workers for now - later we could calculate this depending on the device
        this.workers = new Array(4);
        const workerBlob = new Blob([workerString], { type: "text/javascript" });
        for (let i = 0; i < this.workers.length; i++) {
            this.workers[i] = new Worker(URL.createObjectURL(workerBlob));
            this.workers[i].onerror = (e) => this.errorCallback(e);
            this.workers[i].onmessage = (e) => {
                const data = e.data;
                if (!data)
                    return;
                if (data.type === "ready") {
                    this.readyCount++;
                    this.solverType = data.solver;
                    // We are ready, when all workers are ready
                    if (this.readyCount == this.workers.length) {
                        this.readyCallback();
                    }
                }
                else if (data.type === "started") {
                    this.startCount++;
                    // We started, when the first worker starts working
                    if (this.startCount == 1) {
                        this.startTime = Date.now();
                        this.startedCallback();
                    }
                }
                else if (data.type === "done") {
                    if (data.puzzleNumber !== this.puzzleNumber)
                        return; // solution belongs to a previous puzzle
                    if (this.puzzleIndex < this.puzzleSolverInputs.length) {
                        this.workers[i].postMessage({
                            type: "start",
                            puzzleSolverInput: this.puzzleSolverInputs[this.puzzleIndex],
                            threshold: this.threshold,
                            puzzleIndex: this.puzzleIndex,
                            puzzleNumber: this.puzzleNumber,
                        });
                        this.puzzleIndex++;
                    }
                    this.progress++;
                    this.totalHashes += data.h;
                    this.progressCallback({
                        n: this.numPuzzles,
                        h: this.totalHashes,
                        t: (Date.now() - this.startTime) / 1000,
                        i: this.progress,
                    });
                    this.solutionBuffer.set(data.solution, data.puzzleIndex * 8);
                    // We are done, when all puzzles have been solved
                    if (this.progress == this.numPuzzles) {
                        const totalTime = (Date.now() - this.startTime) / 1000;
                        this.doneCallback({
                            solution: this.solutionBuffer,
                            h: this.totalHashes,
                            t: totalTime,
                            diagnostics: createDiagnosticsBuffer(this.solverType, totalTime),
                            solver: this.solverType,
                        });
                    }
                }
                else if (data.type === "error") {
                    this.errorCallback(data);
                }
            };
        }
    }
    setupSolver(forceJS = false) {
        const msg = { type: "solver", forceJS: forceJS };
        for (let i = 0; i < this.workers.length; i++) {
            this.workers[i].postMessage(msg);
        }
    }
    start(puzzle) {
        this.puzzleSolverInputs = getPuzzleSolverInputs(puzzle.buffer, puzzle.n);
        this.solutionBuffer = new Uint8Array(8 * puzzle.n);
        this.numPuzzles = puzzle.n;
        this.threshold = puzzle.threshold;
        this.puzzleIndex = 0;
        this.puzzleNumber++;
        for (let i = 0; i < this.workers.length; i++) {
            if (this.puzzleIndex === this.puzzleSolverInputs.length)
                break;
            this.workers[i].postMessage({
                type: "start",
                puzzleSolverInput: this.puzzleSolverInputs[i],
                threshold: this.threshold,
                puzzleIndex: this.puzzleIndex,
                puzzleNumber: this.puzzleNumber,
            });
            this.puzzleIndex++;
        }
    }
    terminateWorkers() {
        if (this.workers.length == 0)
            return;
        for (let i = 0; i < this.workers.length; i++) {
            this.workers[i].terminate();
        }
        this.workers = [];
    }
}

const PUZZLE_ENDPOINT_URL = "https://api.friendlycaptcha.com/api/v1/puzzle";
class WidgetInstance {
    constructor(element, options = {}) {
        this.workerGroup = new WorkerGroup();
        /**
         * The captcha has been succesfully solved.
         */
        this.valid = false;
        /**
         * Some errors may cause a need for the (worker) to be reinitialized. If this is
         * true `init` will be called again when start is called.
         */
        this.needsReInit = false;
        /**
         * Start() has been called at least once ever.
         */
        this.hasBeenStarted = false;
        this.hasBeenDestroyed = false;
        this.opts = Object.assign({
            forceJSFallback: false,
            skipStyleInjection: false,
            startMode: "focus",
            puzzleEndpoint: element.dataset["puzzleEndpoint"] || PUZZLE_ENDPOINT_URL,
            startedCallback: () => 0,
            readyCallback: () => 0,
            doneCallback: () => 0,
            errorCallback: () => 0,
            sitekey: element.dataset["sitekey"] || "",
            language: element.dataset["lang"] || "en",
            solutionFieldName: element.dataset["solutionFieldName"] || "frc-captcha-solution",
            styleNonce: null,
        }, options);
        this.e = element;
        this.e.friendlyChallengeWidget = this;
        this.loadLanguage();
        // @ts-ignore Ignore is required as TS thinks that `this.lang` is not assigned yet, but it happens in `this.loadLanguage()` above.
        element.innerText = this.lang.text_init;
        if (!this.opts.skipStyleInjection) {
            injectStyle(this.opts.styleNonce);
        }
        this.init(this.opts.startMode === "auto" || this.e.dataset["start"] === "auto");
    }
    init(forceStart) {
        if (this.hasBeenDestroyed) {
            console.error("FriendlyCaptcha widget has been destroyed using destroy(), it can not be used anymore.");
            return;
        }
        this.initWorkerGroup();
        if (forceStart) {
            this.start();
        }
        else if (this.e.dataset["start"] !== "none" &&
            (this.opts.startMode === "focus" || this.e.dataset["start"] === "focus")) {
            const form = findParentFormElement(this.e);
            if (form) {
                executeOnceOnFocusInEvent(form, () => this.start());
            }
            else {
                console.log("FriendlyCaptcha div seems not to be contained in a form, autostart will not work");
            }
        }
    }
    /**
     * Loads the configured language, or a language passed to this function.
     * Note that only the next update will be in the new language, consider calling `reset()` after switching languages.
     */
    loadLanguage(lang) {
        if (lang !== undefined) {
            this.opts.language = lang;
        }
        else if (this.e.dataset["lang"]) {
            this.opts.language = this.e.dataset["lang"];
        }
        if (typeof this.opts.language === "string") {
            let langCode = this.opts.language.toLowerCase();
            let l = localizations[langCode];
            if (l === undefined && langCode[2] === '-') {
                // Language has a locale '-' separator, remove it and try again
                langCode = langCode.substring(0, 2);
                l = localizations[langCode];
            }
            if (l === undefined) {
                console.error('FriendlyCaptcha: language "' + this.opts.language + '" not found.');
                // Fall back to English
                l = localizations.en;
            }
            this.lang = l;
        }
        else {
            // We assign to a copy of the English language localization, so that any missing values will be English
            this.lang = Object.assign(Object.assign({}, localizations.en), this.opts.language);
        }
    }
    /**
     * Add a listener to the button that calls `this.start` on click.
     */
    makeButtonStart() {
        const b = this.e.querySelector("button");
        if (b) {
            b.addEventListener("click", (e) => this.start(), { once: true, passive: true });
            b.addEventListener("touchstart", (e) => this.start(), { once: true, passive: true });
        }
    }
    onWorkerError(e) {
        this.hasBeenStarted = false;
        this.needsReInit = true;
        if (this.expiryTimeout)
            clearTimeout(this.expiryTimeout);
        console.error("[FRC]", e);
        this.e.innerHTML = getErrorHTML(this.opts.solutionFieldName, this.lang, "Background worker error " + e.message);
        this.makeButtonStart();
        // Just out of precaution
        this.opts.forceJSFallback = true;
    }
    initWorkerGroup() {
        this.workerGroup.progressCallback = (progress) => {
            updateProgressBar(this.e, progress);
        };
        this.workerGroup.readyCallback = () => {
            this.e.innerHTML = getReadyHTML(this.opts.solutionFieldName, this.lang);
            this.makeButtonStart();
            this.opts.readyCallback();
        };
        this.workerGroup.startedCallback = () => {
            this.e.innerHTML = getRunningHTML(this.opts.solutionFieldName, this.lang);
            this.opts.startedCallback();
        };
        this.workerGroup.doneCallback = (data) => {
            const solutionPayload = this.handleDone(data);
            this.opts.doneCallback(solutionPayload);
            const callback = this.e.dataset["callback"];
            if (callback) {
                window[callback](solutionPayload);
            }
        };
        this.workerGroup.errorCallback = (e) => {
            this.onWorkerError(e);
        };
        this.workerGroup.init();
        this.workerGroup.setupSolver(this.opts.forceJSFallback);
    }
    expire() {
        this.hasBeenStarted = false;
        // Node.isConnected will be undefined in older browsers
        if (this.e.isConnected !== false) {
            this.e.innerHTML = getExpiredHTML(this.opts.solutionFieldName, this.lang);
            this.makeButtonStart();
        }
    }
    async start() {
        if (this.hasBeenDestroyed) {
            console.error("Can not start FriendlyCaptcha widget which has been destroyed");
            return;
        }
        if (this.hasBeenStarted) {
            console.warn("Can not start FriendlyCaptcha widget which has already been started");
            return;
        }
        const sitekey = this.opts.sitekey || this.e.dataset["sitekey"];
        if (!sitekey) {
            console.error("FriendlyCaptcha: sitekey not set on frc-captcha element");
            this.e.innerHTML = getErrorHTML(this.opts.solutionFieldName, this.lang, "Website problem: sitekey not set", false);
            return;
        }
        if (isHeadless()) {
            this.e.innerHTML = getErrorHTML(this.opts.solutionFieldName, this.lang, "Browser check failed, try a different browser", false, true);
            return;
        }
        if (this.needsReInit) {
            this.needsReInit = false;
            this.init(true);
            return;
        }
        this.hasBeenStarted = true;
        try {
            this.e.innerHTML = getFetchingHTML(this.opts.solutionFieldName, this.lang);
            this.puzzle = decodeBase64Puzzle(await getPuzzle(this.opts.puzzleEndpoint, sitekey, this.lang));
            if (this.expiryTimeout)
                clearTimeout(this.expiryTimeout);
            this.expiryTimeout = setTimeout(() => this.expire(), this.puzzle.expiry - 30000); // 30s grace
        }
        catch (e) {
            console.error("[FRC]", e);
            this.hasBeenStarted = false;
            if (this.expiryTimeout)
                clearTimeout(this.expiryTimeout);
            this.e.innerHTML = getErrorHTML(this.opts.solutionFieldName, this.lang, e.message);
            this.makeButtonStart();
            const code = "error_getting_puzzle";
            this.opts.errorCallback({ code, description: e.toString(), error: e });
            const callback = this.e.dataset["callback-error"];
            if (callback) {
                window[callback](this);
            }
            return;
        }
        this.workerGroup.start(this.puzzle);
    }
    /**
     * This is to be called when the puzzle has been succesfully completed.
     * Here the hidden field gets updated with the solution.
     * @param data message from the webworker
     */
    handleDone(data) {
        this.valid = true;
        const puzzleSolutionMessage = `${this.puzzle.signature}.${this.puzzle.base64}.${encode(data.solution)}.${encode(data.diagnostics)}`;
        this.e.innerHTML = getDoneHTML(this.opts.solutionFieldName, this.lang, puzzleSolutionMessage, data);
        // this.worker = null; // This literally crashes very old browsers..
        this.needsReInit = true;
        return puzzleSolutionMessage;
    }
    /**
     * Cleans up the widget entirely, removing any DOM elements and terminating any background workers.
     * After it is destroyed it can no longer be used for any purpose.
     */
    destroy() {
        this.workerGroup.terminateWorkers();
        this.needsReInit = false;
        this.hasBeenStarted = false;
        if (this.expiryTimeout)
            clearTimeout(this.expiryTimeout);
        if (this.e) {
            this.e.remove();
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore
            delete this.e;
        }
        this.hasBeenDestroyed = true;
    }
    /**
     * Resets the widget to the initial state.
     * This is useful in situations where the page does not refresh when you submit and the form may be re-submitted again
     */
    reset() {
        if (this.hasBeenDestroyed) {
            console.error("FriendlyCaptcha widget has been destroyed, it can not be used anymore");
            return;
        }
        this.workerGroup.terminateWorkers();
        this.needsReInit = false;
        this.hasBeenStarted = false;
        if (this.expiryTimeout)
            clearTimeout(this.expiryTimeout);
        this.init(this.opts.startMode === "auto" || this.e.dataset["start"] === "auto");
    }
}


//# sourceMappingURL=index.js.map


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*******************************************!*\
  !*** ./friendly.captcha/frontend/main.js ***!
  \*******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _observableHandle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observableHandle */ "./friendly.captcha/frontend/observableHandle.js");

const {
  addAction
} = JetPlugins.hooks;
addAction('jet.fb.observe.after', 'jet-form-builder/friendly.captcha', _observableHandle__WEBPACK_IMPORTED_MODULE_0__["default"]);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJpZW5kbHkuY2FwdGNoYS9mcm9udGVuZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ3REQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNodENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDTkE7QUFFQTtBQUFBO0FBQUE7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2pmYi1jYXB0Y2hhLy4vZnJpZW5kbHkuY2FwdGNoYS9mcm9udGVuZC9vYnNlcnZhYmxlSGFuZGxlLmpzIiwid2VicGFjazovL2pmYi1jYXB0Y2hhLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9mcmllbmRseS1jaGFsbGVuZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vamZiLWNhcHRjaGEvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamZiLWNhcHRjaGEvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pmYi1jYXB0Y2hhL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamZiLWNhcHRjaGEvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qZmItY2FwdGNoYS8uL2ZyaWVuZGx5LmNhcHRjaGEvZnJvbnRlbmQvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGFwcGx5RmlsdGVycyB9ID0gSmV0UGx1Z2lucy5ob29rcztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXNcbmltcG9ydCB7IFdpZGdldEluc3RhbmNlIH0gZnJvbSAnZnJpZW5kbHktY2hhbGxlbmdlJztcblxuLyoqXG4gKiBAcGFyYW0gb2JzZXJ2YWJsZSB7T2JzZXJ2YWJsZX1cbiAqL1xuZnVuY3Rpb24gb2JzZXJ2YWJsZUhhbmRsZSggb2JzZXJ2YWJsZSApIHtcblx0aWYgKCBvYnNlcnZhYmxlLnBhcmVudCApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvKipcblx0ICogQHR5cGUge251bGx8SW5wdXREYXRhfVxuXHQgKi9cblx0Y29uc3QgdG9rZW4gICAgID0gb2JzZXJ2YWJsZS5nZXRJbnB1dCggJ19jYXB0Y2hhX3Rva2VuJyApO1xuXHRjb25zdCBmb3JtSUQgICAgPSBvYnNlcnZhYmxlLmdldFN1Ym1pdCgpLmdldEZvcm1JZCgpO1xuXHRjb25zdCBjb250YWluZXIgPSB0b2tlbj8ubm9kZXM/LlsgMCBdPy5uZXh0RWxlbWVudFNpYmxpbmc7XG5cblx0bGV0IG9wdGlvbnMgPSAoXG5cdFx0d2luZG93Py5KZXRGb3JtQnVpbGRlckNhcHRjaGFDb25maWc/LlsgZm9ybUlEIF0gPz8gZmFsc2Vcblx0KTtcblxuXHRpZiAoICFjb250YWluZXIgfHwgIW9wdGlvbnMgKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gZm9yIGNvcnJlY3QgYXBwbHlpbmcgdmFsaWRhdGlvbiBsb2dpY3Ncblx0dG9rZW4uaXNWaXNpYmxlID0gKCkgPT4gdHJ1ZTtcblxuXHRvcHRpb25zID0ge1xuXHRcdC4uLm9wdGlvbnMsXG5cdFx0ZG9uZUNhbGxiYWNrKCByZXNwb25zZUhhc2ggKSB7XG5cdFx0XHR0b2tlbi52YWx1ZS5jdXJyZW50ID0gcmVzcG9uc2VIYXNoO1xuXHRcdFx0dG9rZW4ubG9hZGluZy5lbmQoKTtcblx0XHR9LFxuXHRcdHN0YXJ0ZWRDYWxsYmFjazogKCkgPT4gdG9rZW4ubG9hZGluZy5zdGFydCgpLFxuXHRcdGVycm9yQ2FsbGJhY2s6ICgpID0+IHRva2VuLmxvYWRpbmcuZW5kKCksXG5cdH07XG5cblx0b3B0aW9ucyA9IGFwcGx5RmlsdGVycyhcblx0XHQnamV0LmZiLmZyaWVuZGx5Q2FwdGNoYS5vcHRpb25zJyxcblx0XHRvcHRpb25zLFxuXHRcdG9ic2VydmFibGUsXG5cdCk7XG5cblx0Y29uc3Qgd2lkZ2V0ID0gbmV3IFdpZGdldEluc3RhbmNlKCBjb250YWluZXIsIG9wdGlvbnMgKTtcblxuXHRvYnNlcnZhYmxlLmdldFN1Ym1pdCgpLnN1Ym1pdHRlcj8uc3RhdHVzPy53YXRjaD8uKCAoKSA9PiB7XG5cdFx0d2lkZ2V0LnJlc2V0KCk7XG5cdFx0dG9rZW4ub25DbGVhcigpO1xuXHR9ICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG9ic2VydmFibGVIYW5kbGU7IiwiLy8gQWRhcHRlZCBmcm9tIHRoZSBiYXNlNjQtYXJyYXlidWZmZXIgcGFja2FnZSBpbXBsZW1lbnRhdGlvblxuLy8gKGh0dHBzOi8vZ2l0aHViLmNvbS9uaWtsYXN2aC9iYXNlNjQtYXJyYXlidWZmZXIsIE1JVCBsaWNlbnNlZClcbmNvbnN0IENIQVJTID0gXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvXCI7XG5jb25zdCBFUV9DSEFSID0gXCI9XCIuY2hhckNvZGVBdCgwKTtcbi8vIFVzZSBhIGxvb2t1cCB0YWJsZSB0byBmaW5kIHRoZSBpbmRleC5cbmNvbnN0IGxvb2t1cCA9IG5ldyBVaW50OEFycmF5KDI1Nik7XG5mb3IgKGxldCBpID0gMDsgaSA8IENIQVJTLmxlbmd0aDsgaSsrKSB7XG4gICAgbG9va3VwW0NIQVJTLmNoYXJDb2RlQXQoaSldID0gaTtcbn1cbmZ1bmN0aW9uIGVuY29kZShieXRlcykge1xuICAgIGNvbnN0IGxlbiA9IGJ5dGVzLmxlbmd0aDtcbiAgICBsZXQgYmFzZTY0ID0gXCJcIjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSArPSAzKSB7XG4gICAgICAgIGNvbnN0IGIwID0gYnl0ZXNbaSArIDBdO1xuICAgICAgICBjb25zdCBiMSA9IGJ5dGVzW2kgKyAxXTtcbiAgICAgICAgY29uc3QgYjIgPSBieXRlc1tpICsgMl07XG4gICAgICAgIC8vIFRoaXMgdGVtcG9yYXJ5IHZhcmlhYmxlIHN0b3BzIHRoZSBOZXh0SlMgMTMgY29tcGlsZXIgZnJvbSBicmVha2luZyB0aGlzIGNvZGUgaW4gb3B0aW1pemF0aW9uLlxuICAgICAgICAvLyBTZWUgaXNzdWUgaHR0cHM6Ly9naXRodWIuY29tL0ZyaWVuZGx5Q2FwdGNoYS9mcmllbmRseS1jaGFsbGVuZ2UvaXNzdWVzLzE2NVxuICAgICAgICBsZXQgdCA9IFwiXCI7XG4gICAgICAgIHQgKz0gQ0hBUlMuY2hhckF0KGIwID4+PiAyKTtcbiAgICAgICAgdCArPSBDSEFSUy5jaGFyQXQoKChiMCAmIDMpIDw8IDQpIHwgKGIxID4+PiA0KSk7XG4gICAgICAgIHQgKz0gQ0hBUlMuY2hhckF0KCgoYjEgJiAxNSkgPDwgMikgfCAoYjIgPj4+IDYpKTtcbiAgICAgICAgdCArPSBDSEFSUy5jaGFyQXQoYjIgJiA2Myk7XG4gICAgICAgIGJhc2U2NCArPSB0O1xuICAgIH1cbiAgICBpZiAobGVuICUgMyA9PT0gMikge1xuICAgICAgICBiYXNlNjQgPSBiYXNlNjQuc3Vic3RyaW5nKDAsIGJhc2U2NC5sZW5ndGggLSAxKSArIFwiPVwiO1xuICAgIH1cbiAgICBlbHNlIGlmIChsZW4gJSAzID09PSAxKSB7XG4gICAgICAgIGJhc2U2NCA9IGJhc2U2NC5zdWJzdHJpbmcoMCwgYmFzZTY0Lmxlbmd0aCAtIDIpICsgXCI9PVwiO1xuICAgIH1cbiAgICByZXR1cm4gYmFzZTY0O1xufVxuZnVuY3Rpb24gZGVjb2RlKGJhc2U2NCkge1xuICAgIGNvbnN0IGxlbiA9IGJhc2U2NC5sZW5ndGg7XG4gICAgbGV0IGJ1ZmZlckxlbmd0aCA9IChsZW4gKiAzKSA+Pj4gMjsgLy8gKiAwLjc1XG4gICAgaWYgKGJhc2U2NC5jaGFyQ29kZUF0KGxlbiAtIDEpID09PSBFUV9DSEFSKVxuICAgICAgICBidWZmZXJMZW5ndGgtLTtcbiAgICBpZiAoYmFzZTY0LmNoYXJDb2RlQXQobGVuIC0gMikgPT09IEVRX0NIQVIpXG4gICAgICAgIGJ1ZmZlckxlbmd0aC0tO1xuICAgIGNvbnN0IGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyTGVuZ3RoKTtcbiAgICBmb3IgKGxldCBpID0gMCwgcCA9IDA7IGkgPCBsZW47IGkgKz0gNCkge1xuICAgICAgICBjb25zdCBlbmNvZGVkMSA9IGxvb2t1cFtiYXNlNjQuY2hhckNvZGVBdChpICsgMCldO1xuICAgICAgICBjb25zdCBlbmNvZGVkMiA9IGxvb2t1cFtiYXNlNjQuY2hhckNvZGVBdChpICsgMSldO1xuICAgICAgICBjb25zdCBlbmNvZGVkMyA9IGxvb2t1cFtiYXNlNjQuY2hhckNvZGVBdChpICsgMildO1xuICAgICAgICBjb25zdCBlbmNvZGVkNCA9IGxvb2t1cFtiYXNlNjQuY2hhckNvZGVBdChpICsgMyldO1xuICAgICAgICBieXRlc1twKytdID0gKGVuY29kZWQxIDw8IDIpIHwgKGVuY29kZWQyID4+IDQpO1xuICAgICAgICBieXRlc1twKytdID0gKChlbmNvZGVkMiAmIDE1KSA8PCA0KSB8IChlbmNvZGVkMyA+PiAyKTtcbiAgICAgICAgYnl0ZXNbcCsrXSA9ICgoZW5jb2RlZDMgJiAzKSA8PCA2KSB8IChlbmNvZGVkNCAmIDYzKTtcbiAgICB9XG4gICAgcmV0dXJuIGJ5dGVzO1xufVxuXG52YXIgY3NzID0gJy5mcmMtY2FwdGNoYSAqe21hcmdpbjowO3BhZGRpbmc6MDtib3JkZXI6MDt0ZXh0LWFsaWduOmluaXRpYWw7Ym9yZGVyLXJhZGl1czpweDtmaWx0ZXI6bm9uZSFpbXBvcnRhbnQ7dHJhbnNpdGlvbjpub25lIWltcG9ydGFudDtmb250LXdlaWdodDo0MDA7Zm9udC1zaXplOjE0cHg7bGluZS1oZWlnaHQ6MS4yO3RleHQtZGVjb3JhdGlvbjpub25lO2JhY2tncm91bmQtY29sb3I6aW5pdGlhbDtjb2xvcjojMjIyfS5mcmMtY2FwdGNoYXtwb3NpdGlvbjpyZWxhdGl2ZTttaW4td2lkdGg6MjUwcHg7bWF4LXdpZHRoOjMxMnB4O2JvcmRlcjoxcHggc29saWQgI2Y0ZjRmNDtwYWRkaW5nLWJvdHRvbToxMnB4O2JhY2tncm91bmQtY29sb3I6I2ZmZn0uZnJjLWNhcHRjaGEgYntmb250LXdlaWdodDo3MDB9LmZyYy1jb250YWluZXJ7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjttaW4taGVpZ2h0OjUycHh9LmZyYy1pY29ue2ZpbGw6IzIyMjtzdHJva2U6IzIyMjtmbGV4LXNocmluazowO21hcmdpbjo4cHggOHB4IDB9LmZyYy1pY29uLmZyYy13YXJuaW5ne2ZpbGw6I2MwMH0uZnJjLXN1Y2Nlc3MgLmZyYy1pY29ue2FuaW1hdGlvbjoxcyBlYXNlLWluIGJvdGggZnJjLWZhZGUtaW59LmZyYy1jb250ZW50e3doaXRlLXNwYWNlOm5vd3JhcDtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO21hcmdpbjo0cHggNnB4IDAgMDtvdmVyZmxvdy14OmF1dG87ZmxleC1ncm93OjF9LmZyYy1iYW5uZXJ7cG9zaXRpb246YWJzb2x1dGU7Ym90dG9tOjA7cmlnaHQ6NnB4O2xpbmUtaGVpZ2h0OjF9LmZyYy1iYW5uZXIgKntmb250LXNpemU6MTBweDtvcGFjaXR5Oi44O3RleHQtZGVjb3JhdGlvbjpub25lfS5mcmMtcHJvZ3Jlc3N7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7LW1vei1hcHBlYXJhbmNlOm5vbmU7YXBwZWFyYW5jZTpub25lO21hcmdpbjozcHggMDtoZWlnaHQ6NHB4O2JvcmRlcjpub25lO2JhY2tncm91bmQtY29sb3I6I2VlZTtjb2xvcjojMjIyO3dpZHRoOjEwMCU7dHJhbnNpdGlvbjouNXMgbGluZWFyfS5mcmMtcHJvZ3Jlc3M6Oi13ZWJraXQtcHJvZ3Jlc3MtYmFye2JhY2tncm91bmQ6I2VlZX0uZnJjLXByb2dyZXNzOjotd2Via2l0LXByb2dyZXNzLXZhbHVle2JhY2tncm91bmQ6IzIyMn0uZnJjLXByb2dyZXNzOjotbW96LXByb2dyZXNzLWJhcntiYWNrZ3JvdW5kOiMyMjJ9LmZyYy1idXR0b257Y3Vyc29yOnBvaW50ZXI7cGFkZGluZzoycHggNnB4O2JhY2tncm91bmQtY29sb3I6I2YxZjFmMTtib3JkZXI6MXB4IHNvbGlkIHRyYW5zcGFyZW50O3RleHQtYWxpZ246Y2VudGVyO2ZvbnQtd2VpZ2h0OjYwMDt0ZXh0LXRyYW5zZm9ybTpub25lfS5mcmMtYnV0dG9uOmZvY3Vze2JvcmRlcjoxcHggc29saWQgIzMzM30uZnJjLWJ1dHRvbjpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNkZGR9LmZyYy1jYXB0Y2hhLXNvbHV0aW9ue2Rpc3BsYXk6bm9uZX0uZnJjLWVyci11cmx7dGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZTtmb250LXNpemU6LjllbX0uZnJjLXJ0bHtkaXJlY3Rpb246cnRsfS5mcmMtcnRsIC5mcmMtY29udGVudHttYXJnaW46NHB4IDAgMCA2cHh9LmZyYy1iYW5uZXIuZnJjLXJ0bHtsZWZ0OjZweDtyaWdodDphdXRvfS5kYXJrLmZyYy1jYXB0Y2hhe2NvbG9yOiNmZmY7YmFja2dyb3VuZC1jb2xvcjojMjIyO2JvcmRlci1jb2xvcjojMzMzfS5kYXJrLmZyYy1jYXB0Y2hhICp7Y29sb3I6I2ZmZn0uZGFyay5mcmMtY2FwdGNoYSBidXR0b257YmFja2dyb3VuZC1jb2xvcjojNDQ0fS5kYXJrIC5mcmMtaWNvbntmaWxsOiNmZmY7c3Ryb2tlOiNmZmZ9LmRhcmsgLmZyYy1wcm9ncmVzc3tiYWNrZ3JvdW5kLWNvbG9yOiM0NDR9LmRhcmsgLmZyYy1wcm9ncmVzczo6LXdlYmtpdC1wcm9ncmVzcy1iYXJ7YmFja2dyb3VuZDojNDQ0fS5kYXJrIC5mcmMtcHJvZ3Jlc3M6Oi13ZWJraXQtcHJvZ3Jlc3MtdmFsdWV7YmFja2dyb3VuZDojZGRkfS5kYXJrIC5mcmMtcHJvZ3Jlc3M6Oi1tb3otcHJvZ3Jlc3MtYmFye2JhY2tncm91bmQ6I2RkZH1Aa2V5ZnJhbWVzIGZyYy1mYWRlLWlue2Zyb217b3BhY2l0eTowfXRve29wYWNpdHk6MX19JztcblxuLy8gVGhpcyBpcyBub3QgYW4gZW51bSB0byBzYXZlIHNvbWUgYnl0ZXMgaW4gdGhlIG91dHB1dCBidW5kbGUuXG5jb25zdCBTT0xWRVJfVFlQRV9KUyA9IDE7XG5jb25zdCBDSEFMTEVOR0VfU0laRV9CWVRFUyA9IDEyODtcblxuLy8gQHRzLWlnbm9yZVxyXG5jb25zdCBsb2FkZXJTVkcgPSBgPGNpcmNsZSBjeD1cIjEyXCIgY3k9XCIxMlwiIHI9XCI4XCIgc3Ryb2tlLXdpZHRoPVwiM1wiIHN0cm9rZS1kYXNoYXJyYXk9XCIxNSAxMFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHRyYW5zZm9ybT1cInJvdGF0ZSgwIDEyIDEyKVwiPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9XCJ0cmFuc2Zvcm1cIiB0eXBlPVwicm90YXRlXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCIgZHVyPVwiMC45c1wiIHZhbHVlcz1cIjAgMTIgMTI7MzYwIDEyIDEyXCIvPjwvY2lyY2xlPmA7XHJcbmNvbnN0IGVycm9yU1ZHID0gYDxwYXRoIGQ9XCJNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptMSAxNWgtMnYtMmgydjJ6bTAtNGgtMlY3aDJ2NnpcIi8+YDtcclxuLyoqXHJcbiAqIEJhc2UgdGVtcGxhdGUgdXNlZCBmb3IgYWxsIHdpZGdldCBzdGF0ZXNcclxuICogVGhlIHJlYXNvbiB3ZSB1c2UgcmF3IHN0cmluZyBpbnRlcnBvbGF0aW9uIGhlcmUgaXMgc28gd2UgZG9uJ3QgaGF2ZSB0byBzaGlwIHNvbWV0aGluZyBsaWtlIGxpdC1odG1sLlxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0VGVtcGxhdGUoZmllbGROYW1lLCBydGwsIHN2Z0NvbnRlbnQsIHN2Z0FyaWFIaWRkZW4sIHRleHRDb250ZW50LCBzb2x1dGlvblN0cmluZywgYnV0dG9uVGV4dCwgcHJvZ3Jlc3MgPSBmYWxzZSwgZGVidWdEYXRhLCBhZGRpdGlvbmFsQ29udGFpbmVyQ2xhc3Nlcykge1xyXG4gICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiZnJjLWNvbnRhaW5lciR7YWRkaXRpb25hbENvbnRhaW5lckNsYXNzZXMgPyBcIiBcIiArIGFkZGl0aW9uYWxDb250YWluZXJDbGFzc2VzIDogXCJcIn0ke3J0bCA/IFwiIGZyYy1ydGxcIiA6IFwiXCJ9XCI+XG48c3ZnIGNsYXNzPVwiZnJjLWljb25cIiR7c3ZnQXJpYUhpZGRlbiA/ICcgYXJpYS1oaWRkZW49XCJ0cnVlXCInIDogXCJcIn0gcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBoZWlnaHQ9XCIzMlwiIHdpZHRoPVwiMzJcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+JHtzdmdDb250ZW50fTwvc3ZnPlxuPGRpdiBjbGFzcz1cImZyYy1jb250ZW50XCI+XG4gICAgPHNwYW4gY2xhc3M9XCJmcmMtdGV4dFwiICR7ZGVidWdEYXRhID8gYGRhdGEtZGVidWc9XCIke2RlYnVnRGF0YX1cImAgOiBgYH0+JHt0ZXh0Q29udGVudH08L3NwYW4+XG4gICAgJHtidXR0b25UZXh0ID8gYDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiZnJjLWJ1dHRvblwiPiR7YnV0dG9uVGV4dH08L2J1dHRvbj5gIDogXCJcIn1cbiAgICAke3Byb2dyZXNzID8gYDxwcm9ncmVzcyBjbGFzcz1cImZyYy1wcm9ncmVzc1wiIHZhbHVlPVwiMFwiPjAlPC9wcm9ncmVzcz5gIDogXCJcIn1cbjwvZGl2PlxuPC9kaXY+PHNwYW4gY2xhc3M9XCJmcmMtYmFubmVyJHtydGwgPyBcIiBmcmMtcnRsXCIgOiBcIlwifVwiPjxhIGxhbmc9XCJlblwiIGhyZWY9XCJodHRwczovL2ZyaWVuZGx5Y2FwdGNoYS5jb20vXCIgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIj48Yj5GcmllbmRseTwvYj5DYXB0Y2hhIOKHlzwvYT48L3NwYW4+XG4ke2ZpZWxkTmFtZSA9PT0gXCItXCIgPyBcIlwiIDogYDxpbnB1dCBuYW1lPVwiJHtmaWVsZE5hbWV9XCIgY2xhc3M9XCJmcmMtY2FwdGNoYS1zb2x1dGlvblwiIHR5cGU9XCJoaWRkZW5cIiB2YWx1ZT1cIiR7c29sdXRpb25TdHJpbmd9XCI+YH1gO1xyXG59XHJcbi8qKlxyXG4gKiBVc2VkIHdoZW4gdGhlIHdpZGdldCBpcyByZWFkeSB0byBzdGFydCBzb2x2aW5nLlxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0UmVhZHlIVE1MKGZpZWxkTmFtZSwgbCkge1xyXG4gICAgcmV0dXJuIGdldFRlbXBsYXRlKGZpZWxkTmFtZSwgbC5ydGwsIGA8cGF0aCBkPVwiTTE3LDExYzAuMzQsMCwwLjY3LDAuMDQsMSwwLjA5VjYuMjdMMTAuNSwzTDMsNi4yN3Y0LjkxYzAsNC41NCwzLjIsOC43OSw3LjUsOS44MmMwLjU1LTAuMTMsMS4wOC0wLjMyLDEuNi0wLjU1IEMxMS40MSwxOS40NywxMSwxOC4yOCwxMSwxN0MxMSwxMy42OSwxMy42OSwxMSwxNywxMXpcIi8+PHBhdGggZD1cIk0xNywxM2MtMi4yMSwwLTQsMS43OS00LDRjMCwyLjIxLDEuNzksNCw0LDRzNC0xLjc5LDQtNEMyMSwxNC43OSwxOS4yMSwxMywxNywxM3ogTTE3LDE0LjM4XCIvPmAsIHRydWUsIGwudGV4dF9yZWFkeSwgXCIuVU5TVEFSVEVEXCIsIGwuYnV0dG9uX3N0YXJ0LCBmYWxzZSk7XHJcbn1cclxuLyoqXHJcbiAqIFVzZWQgd2hlbiB0aGUgd2lkZ2V0IGlzIHJldHJpZXZpbmcgYSBwdXp6bGVcclxuICovXHJcbmZ1bmN0aW9uIGdldEZldGNoaW5nSFRNTChmaWVsZE5hbWUsIGwpIHtcclxuICAgIHJldHVybiBnZXRUZW1wbGF0ZShmaWVsZE5hbWUsIGwucnRsLCBsb2FkZXJTVkcsIHRydWUsIGwudGV4dF9mZXRjaGluZywgXCIuRkVUQ0hJTkdcIiwgdW5kZWZpbmVkLCB0cnVlKTtcclxufVxyXG4vKipcclxuICogVXNlZCB3aGVuIHRoZSBzb2x2ZXIgaXMgcnVubmluZywgZGlzcGxheXMgYSBwcm9ncmVzcyBiYXIuXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRSdW5uaW5nSFRNTChmaWVsZE5hbWUsIGwpIHtcclxuICAgIHJldHVybiBnZXRUZW1wbGF0ZShmaWVsZE5hbWUsIGwucnRsLCBsb2FkZXJTVkcsIHRydWUsIGwudGV4dF9zb2x2aW5nLCBcIi5VTkZJTklTSEVEXCIsIHVuZGVmaW5lZCwgdHJ1ZSk7XHJcbn1cclxuZnVuY3Rpb24gZ2V0RG9uZUhUTUwoZmllbGROYW1lLCBsLCBzb2x1dGlvbiwgZGF0YSkge1xyXG4gICAgY29uc3QgdGltZURhdGEgPSBgJHtkYXRhLnQudG9GaXhlZCgwKX1zICgkeygoZGF0YS5oIC8gZGF0YS50KSAqIDAuMDAxKS50b0ZpeGVkKDApfUsvcykke2RhdGEuc29sdmVyID09PSBTT0xWRVJfVFlQRV9KUyA/IFwiIEpTIEZhbGxiYWNrXCIgOiBcIlwifWA7XHJcbiAgICByZXR1cm4gZ2V0VGVtcGxhdGUoZmllbGROYW1lLCBsLnJ0bCwgYDx0aXRsZT4ke2wudGV4dF9jb21wbGV0ZWRfc3J9PC90aXRsZT48cGF0aCBkPVwiTTEyIDFMMyA1djZjMCA1LjU1IDMuODQgMTAuNzQgOSAxMiA1LjE2LTEuMjYgOS02LjQ1IDktMTJWNWwtOS00em0tMiAxNmwtNC00IDEuNDEtMS40MUwxMCAxNC4xN2w2LjU5LTYuNTlMMTggOWwtOCA4elwiPjwvcGF0aD5gLCBmYWxzZSwgbC50ZXh0X2NvbXBsZXRlZCwgc29sdXRpb24sIHVuZGVmaW5lZCwgZmFsc2UsIHRpbWVEYXRhLCBcImZyYy1zdWNjZXNzXCIpO1xyXG59XHJcbmZ1bmN0aW9uIGdldEV4cGlyZWRIVE1MKGZpZWxkTmFtZSwgbCkge1xyXG4gICAgcmV0dXJuIGdldFRlbXBsYXRlKGZpZWxkTmFtZSwgbC5ydGwsIGVycm9yU1ZHLCB0cnVlLCBsLnRleHRfZXhwaXJlZCwgXCIuRVhQSVJFRFwiLCBsLmJ1dHRvbl9yZXN0YXJ0KTtcclxufVxyXG5mdW5jdGlvbiBnZXRFcnJvckhUTUwoZmllbGROYW1lLCBsLCBlcnJvckRlc2NyaXB0aW9uLCByZWNvdmVyYWJsZSA9IHRydWUsIGhlYWRsZXNzID0gZmFsc2UpIHtcclxuICAgIHJldHVybiBnZXRUZW1wbGF0ZShmaWVsZE5hbWUsIGwucnRsLCBlcnJvclNWRywgdHJ1ZSwgYDxiPiR7bC50ZXh0X2Vycm9yfTwvYj48YnI+JHtlcnJvckRlc2NyaXB0aW9ufWAsIGhlYWRsZXNzID8gXCIuSEVBRExFU1NfRVJST1JcIiA6IFwiLkVSUk9SXCIsIHJlY292ZXJhYmxlID8gbC5idXR0b25fcmV0cnkgOiB1bmRlZmluZWQpO1xyXG59XHJcbi8qKlxyXG4gKiBJbmplY3RzIHRoZSBzdHlsZSBpZiBubyAjZnJjLXN0eWxlIGVsZW1lbnQgaXMgYWxyZWFkeSBwcmVzZW50XHJcbiAqICh0byBzdXBwb3J0IGN1c3RvbSBzdHlsZXNoZWV0cylcclxuICovXHJcbmZ1bmN0aW9uIGluamVjdFN0eWxlKHN0eWxlTm9uY2UgPSBudWxsKSB7XHJcbiAgICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZnJjLXN0eWxlXCIpKSB7XHJcbiAgICAgICAgY29uc3Qgc3R5bGVTaGVldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcclxuICAgICAgICBzdHlsZVNoZWV0LmlkID0gXCJmcmMtc3R5bGVcIjtcclxuICAgICAgICBzdHlsZVNoZWV0LmlubmVySFRNTCA9IGNzcztcclxuICAgICAgICBpZiAoc3R5bGVOb25jZSkge1xyXG4gICAgICAgICAgICBzdHlsZVNoZWV0LnNldEF0dHJpYnV0ZSgnbm9uY2UnLCBzdHlsZU5vbmNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZVNoZWV0KTtcclxuICAgIH1cclxufVxyXG4vKipcclxuICogQHBhcmFtIGVsZW1lbnQgcGFyZW50IGVsZW1lbnQgb2YgZnJpZW5kbHljYXB0Y2hhXHJcbiAqIEBwYXJhbSBwcm9ncmVzcyB2YWx1ZSBiZXR3ZWVuIDAgYW5kIDFcclxuICovXHJcbmZ1bmN0aW9uIHVwZGF0ZVByb2dyZXNzQmFyKGVsZW1lbnQsIGRhdGEpIHtcclxuICAgIGNvbnN0IHAgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZnJjLXByb2dyZXNzXCIpO1xyXG4gICAgY29uc3QgcGVyYyA9IChkYXRhLmkgKyAxKSAvIGRhdGEubjtcclxuICAgIGlmIChwKSB7XHJcbiAgICAgICAgcC52YWx1ZSA9IHBlcmM7XHJcbiAgICAgICAgcC5pbm5lclRleHQgPSAocGVyYyAqIDEwMCkudG9GaXhlZCgxKSArIFwiJVwiO1xyXG4gICAgICAgIHAudGl0bGUgPSBkYXRhLmkgKyAxICsgXCIvXCIgKyBkYXRhLm4gKyBcIiAoXCIgKyAoKGRhdGEuaCAvIGRhdGEudCkgKiAwLjAwMSkudG9GaXhlZCgwKSArIFwiSy9zKVwiO1xyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiBUcmF2ZXJzZXMgcGFyZW50IG5vZGVzIHVudGlsIGEgPGZvcm0+IGlzIGZvdW5kLCByZXR1cm5zIG51bGwgaWYgbm90IGZvdW5kLlxyXG4gKi9cclxuZnVuY3Rpb24gZmluZFBhcmVudEZvcm1FbGVtZW50KGVsZW1lbnQpIHtcclxuICAgIHdoaWxlIChlbGVtZW50LnRhZ05hbWUgIT09IFwiRk9STVwiKSB7XHJcbiAgICAgICAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxuLyoqXHJcbiAqIEFkZCBsaXN0ZW5lciB0byBzcGVjaWZpZWQgZWxlbWVudCB0aGF0IHdpbGwgb25seSBmaXJlIG9uY2Ugb24gZm9jdXMuXHJcbiAqL1xyXG5mdW5jdGlvbiBleGVjdXRlT25jZU9uRm9jdXNJbkV2ZW50KGVsZW1lbnQsIGxpc3RlbmVyKSB7XHJcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c2luXCIsIGxpc3RlbmVyLCB7IG9uY2U6IHRydWUsIHBhc3NpdmU6IHRydWUgfSk7XHJcbn1cblxuLy8gRGVmZW5zaXZlIGluaXQgdG8gbWFrZSBpdCBlYXNpZXIgdG8gaW50ZWdyYXRlIHdpdGggR2F0c2J5LCBOZXh0SlMsIGFuZCBmcmllbmRzLlxyXG5sZXQgbmF2O1xyXG5sZXQgdWE7XHJcbmlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiBuYXZpZ2F0b3IudXNlckFnZW50ID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICBuYXYgPSBuYXZpZ2F0b3I7XHJcbiAgICB1YSA9IG5hdi51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcclxufVxyXG4vKipcclxuICogSGVhZGxlc3MgYnJvd3NlciBkZXRlY3Rpb24gb24gdGhlIGNsaWVudHNpZGUgaXMgaW1wZXJmZWN0LiBPbmUgY2FuIG1vZGlmeSBhbnkgY2xpZW50c2lkZSBjb2RlIHRvIGRpc2FibGUgb3IgY2hhbmdlIHRoaXMgY2hlY2ssXHJcbiAqIGFuZCBvbmUgY2FuIHNwb29mIHdoYXRldmVyIGlzIGNoZWNrZWQgaGVyZS4gSG93ZXZlciwgdGhhdCBkb2Vzbid0IG1ha2UgaXQgd29ydGhsZXNzOiBpdCdzIHlldCBhbm90aGVyIGh1cmRsZSBmb3Igc3BhbW1lcnMgYW5kXHJcbiAqIGl0IHN0b3BzIHVuc29waGlzdGljYXRlZCBzY3JpcHRlcnMgZnJvbSBtYWtpbmcgYW55IHJlcXVlc3Qgd2hhdHNvZXZlci5cclxuICovXHJcbmZ1bmN0aW9uIGlzSGVhZGxlc3MoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgLy90ZWxsLXRhbGUgYm90IHNpZ25zXHJcbiAgICB1YS5pbmRleE9mKFwiaGVhZGxlc3NcIikgIT09IC0xIHx8XHJcbiAgICAgICAgbmF2LmFwcFZlcnNpb24uaW5kZXhPZihcIkhlYWRsZXNzXCIpICE9PSAtMSB8fFxyXG4gICAgICAgIHVhLmluZGV4T2YoXCJib3RcIikgIT09IC0xIHx8IC8vIGh0dHA6Ly93d3cudXNlcmFnZW50c3RyaW5nLmNvbS9wYWdlcy91c2VyYWdlbnRzdHJpbmcucGhwP3R5cD1Ccm93c2VyXHJcbiAgICAgICAgdWEuaW5kZXhPZihcImNyYXdsXCIpICE9PSAtMSB8fCAvLyBPbmx5IElFNSBoYXMgdHdvIGRpc3RyaWJ1dGlvbnMgdGhhdCBoYXMgdGhpcyBvbiB3aW5kb3dzIE5ULi4gc28geWVhaC5cclxuICAgICAgICBuYXYud2ViZHJpdmVyID09PSB0cnVlIHx8XHJcbiAgICAgICAgIW5hdi5sYW5ndWFnZSB8fFxyXG4gICAgICAgIChuYXYubGFuZ3VhZ2VzICE9PSB1bmRlZmluZWQgJiYgIW5hdi5sYW5ndWFnZXMubGVuZ3RoKSAvLyBJRSAxMSBkb2VzIG5vdCBzdXBwb3J0IE5hdmlnYXRvckxhbmd1YWdlLmxhbmd1YWdlcyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvTmF2aWdhdG9yTGFuZ3VhZ2UvbGFuZ3VhZ2VzXHJcbiAgICApO1xyXG59XG5cbi8qKlxuICogTWFwcyBhIHZhbHVlIGJldHdlZW4gMCBhbmQgMjU1IHRvIGEgZGlmZmljdWx0eSB0aHJlc2hvbGQgKGFzIHVpbnQzMilcbiAqIERpZmZpY3VsdHkgMCBtYXBzIHRvIDk5Ljk5JSBwcm9iYWJpbGl0eSBvZiBiZWluZyByaWdodCBvbiB0aGUgZmlyc3QgYXR0ZW1wdFxuICogQW55dGhpbmcgYWJvdmUgMjUwIG5lZWRzIDJeMzIgdHJpZXMgb24gYXZlcmFnZSB0byBzb2x2ZS5cbiAqIDE1MCB0byAxODAgc2VlbXMgcmVhc29uYWJsZVxuICovXG5mdW5jdGlvbiBkaWZmaWN1bHR5VG9UaHJlc2hvbGQodmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPiAyNTUpIHtcbiAgICAgICAgdmFsdWUgPSAyNTU7XG4gICAgfVxuICAgIGVsc2UgaWYgKHZhbHVlIDwgMCkge1xuICAgICAgICB2YWx1ZSA9IDA7XG4gICAgfVxuICAgIHJldHVybiBNYXRoLnBvdygyLCAoMjU1Ljk5OSAtIHZhbHVlKSAvIDguMCkgPj4+IDA7XG59XG5cbmNvbnN0IFBVWlpMRV9FWFBJUllfT0ZGU0VUID0gMTM7XG5jb25zdCBOVU1CRVJfT0ZfUFVaWkxFU19PRkZTRVQgPSAxNDtcbmNvbnN0IFBVWlpMRV9ESUZGSUNVTFRZX09GRlNFVCA9IDE1O1xuZnVuY3Rpb24gZ2V0UHV6emxlU29sdmVySW5wdXRzKHB1enpsZUJ1ZmZlciwgbnVtUHV6emxlcykge1xuICAgIGNvbnN0IHN0YXJ0aW5nUG9pbnRzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1QdXp6bGVzOyBpKyspIHtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBuZXcgVWludDhBcnJheShDSEFMTEVOR0VfU0laRV9CWVRFUyk7XG4gICAgICAgIGlucHV0LnNldChwdXp6bGVCdWZmZXIpO1xuICAgICAgICBpbnB1dFsxMjBdID0gaTtcbiAgICAgICAgc3RhcnRpbmdQb2ludHMucHVzaChpbnB1dCk7XG4gICAgfVxuICAgIHJldHVybiBzdGFydGluZ1BvaW50cztcbn1cblxuZnVuY3Rpb24gZGVjb2RlQmFzZTY0UHV6emxlKGJhc2U2NFB1enpsZSkge1xyXG4gICAgY29uc3QgcGFydHMgPSBiYXNlNjRQdXp6bGUuc3BsaXQoXCIuXCIpO1xyXG4gICAgY29uc3QgcHV6emxlID0gcGFydHNbMV07XHJcbiAgICBjb25zdCBhcnIgPSBkZWNvZGUocHV6emxlKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2lnbmF0dXJlOiBwYXJ0c1swXSxcclxuICAgICAgICBiYXNlNjQ6IHB1enpsZSxcclxuICAgICAgICBidWZmZXI6IGFycixcclxuICAgICAgICBuOiBhcnJbTlVNQkVSX09GX1BVWlpMRVNfT0ZGU0VUXSxcclxuICAgICAgICB0aHJlc2hvbGQ6IGRpZmZpY3VsdHlUb1RocmVzaG9sZChhcnJbUFVaWkxFX0RJRkZJQ1VMVFlfT0ZGU0VUXSksXHJcbiAgICAgICAgZXhwaXJ5OiBhcnJbUFVaWkxFX0VYUElSWV9PRkZTRVRdICogMzAwMDAwLFxyXG4gICAgfTtcclxufVxyXG5hc3luYyBmdW5jdGlvbiBnZXRQdXp6bGUodXJsc1NlcGFyYXRlZEJ5Q29tbWEsIHNpdGVLZXksIGxhbmcpIHtcclxuICAgIGNvbnN0IHVybHMgPSB1cmxzU2VwYXJhdGVkQnlDb21tYS5zcGxpdChcIixcIik7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVybHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoQW5kUmV0cnlXaXRoQmFja29mZih1cmxzW2ldICsgXCI/c2l0ZWtleT1cIiArIHNpdGVLZXksIHsgaGVhZGVyczogW1tcIngtZnJjLWNsaWVudFwiLCBcImpzLTAuOS4xNlwiXV0sIG1vZGU6IFwiY29yc1wiIH0sIDIpO1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ganNvbi5kYXRhLnB1enpsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxldCBqc29uO1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAvKiBEbyBub3RoaW5nLCB0aGUgZXJyb3IgaXMgbm90IHZhbGlkIEpTT04gKi9cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChqc29uICYmIGpzb24uZXJyb3JzICYmIGpzb24uZXJyb3JzWzBdID09PSBcImVuZHBvaW50X25vdF9lbmFibGVkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihgRW5kcG9pbnQgbm90IGFsbG93ZWQgKCR7cmVzcG9uc2Uuc3RhdHVzfSlgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChpID09PSB1cmxzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihgUmVzcG9uc2Ugc3RhdHVzICR7cmVzcG9uc2Uuc3RhdHVzfSAke3Jlc3BvbnNlLnN0YXR1c1RleHR9ICR7anNvbiA/IGpzb24uZXJyb3JzIDogXCJcIn1gKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiW0ZSQyBGZXRjaF06XCIsIGUpO1xyXG4gICAgICAgICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoYCR7bGFuZy50ZXh0X2ZldGNoX2Vycm9yfSA8YSBjbGFzcz1cImZyYy1lcnItdXJsXCIgaHJlZj1cIiR7dXJsc1tpXX1cIj4ke3VybHNbaV19PC9hPmApO1xyXG4gICAgICAgICAgICBlcnIucmF3RXJyb3IgPSBlO1xyXG4gICAgICAgICAgICB0aHJvdyBlcnI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gVGhpcyBjb2RlIHNob3VsZCBuZXZlciBiZSByZWFjaGVkLlxyXG4gICAgdGhyb3cgRXJyb3IoYEludGVybmFsIGVycm9yYCk7XHJcbn1cclxuLyoqXHJcbiAqIFJldHJpZXMgZ2l2ZW4gcmVxdWVzdCB3aXRoIGV4cG9uZW50aWFsIGJhY2tvZmYgKHN0YXJ0aW5nIHdpdGggMTAwMG1zIGRlbGF5LCBtdWx0aXBseWluZyBieSA0IGV2ZXJ5IHRpbWUpXHJcbiAqIEBwYXJhbSB1cmwgUmVxdWVzdCAoY2FuIGJlIHN0cmluZyB1cmwpIHRvIGZldGNoXHJcbiAqIEBwYXJhbSBvcHRzIE9wdGlvbnMgZm9yIGZldGNoXHJcbiAqIEBwYXJhbSBuIE51bWJlciBvZiB0aW1lcyB0byBhdHRlbXB0IGJlZm9yZSBnaXZpbmcgdXAuXHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiBmZXRjaEFuZFJldHJ5V2l0aEJhY2tvZmYodXJsLCBvcHRzLCBuKSB7XHJcbiAgICBsZXQgdGltZSA9IDEwMDA7XHJcbiAgICByZXR1cm4gZmV0Y2godXJsLCBvcHRzKS5jYXRjaChhc3luYyAoZXJyb3IpID0+IHtcclxuICAgICAgICBpZiAobiA9PT0gMClcclxuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHIpID0+IHNldFRpbWVvdXQociwgdGltZSkpO1xyXG4gICAgICAgIHRpbWUgKj0gNDtcclxuICAgICAgICByZXR1cm4gZmV0Y2hBbmRSZXRyeVdpdGhCYWNrb2ZmKHVybCwgb3B0cywgbiAtIDEpO1xyXG4gICAgfSk7XHJcbn1cblxuLy8gRW5nbGlzaFxyXG5jb25zdCBMQU5HX0VOID0ge1xyXG4gICAgdGV4dF9pbml0OiBcIkluaXRpYWxpemluZy4uLlwiLFxyXG4gICAgdGV4dF9yZWFkeTogXCJBbnRpLVJvYm90IFZlcmlmaWNhdGlvblwiLFxyXG4gICAgYnV0dG9uX3N0YXJ0OiBcIkNsaWNrIHRvIHN0YXJ0IHZlcmlmaWNhdGlvblwiLFxyXG4gICAgdGV4dF9mZXRjaGluZzogXCJGZXRjaGluZyBDaGFsbGVuZ2VcIixcclxuICAgIHRleHRfc29sdmluZzogXCJWZXJpZnlpbmcgeW91IGFyZSBodW1hbi4uLlwiLFxyXG4gICAgdGV4dF9jb21wbGV0ZWQ6IFwiSSBhbSBodW1hblwiLFxyXG4gICAgdGV4dF9jb21wbGV0ZWRfc3I6IFwiQXV0b21hdGljIHNwYW0gY2hlY2sgY29tcGxldGVkXCIsXHJcbiAgICB0ZXh0X2V4cGlyZWQ6IFwiQW50aS1Sb2JvdCB2ZXJpZmljYXRpb24gZXhwaXJlZFwiLFxyXG4gICAgYnV0dG9uX3Jlc3RhcnQ6IFwiUmVzdGFydFwiLFxyXG4gICAgdGV4dF9lcnJvcjogXCJWZXJpZmljYXRpb24gZmFpbGVkXCIsXHJcbiAgICBidXR0b25fcmV0cnk6IFwiUmV0cnlcIixcclxuICAgIHRleHRfZmV0Y2hfZXJyb3I6IFwiRmFpbGVkIHRvIGNvbm5lY3QgdG9cIixcclxufTtcclxuLy8gRnJlbmNoXHJcbmNvbnN0IExBTkdfRlIgPSB7XHJcbiAgICB0ZXh0X2luaXQ6IFwiQ2hhcmdlbWVudC4uLlwiLFxyXG4gICAgdGV4dF9yZWFkeTogXCJWw6lyaWZpY2F0aW9uIEFudGktUm9ib3RcIixcclxuICAgIGJ1dHRvbl9zdGFydDogXCJDbGlxdWUgaWNpIHBvdXIgdsOpcmlmaWVyXCIsXHJcbiAgICB0ZXh0X2ZldGNoaW5nOiBcIkNoYXJnZW1lbnQgZHUgZMOpZmlcIixcclxuICAgIHRleHRfc29sdmluZzogXCJOb3VzIHbDqXJpZmlvbnMgcXVlIHZvdXMgbifDqnRlcyBwYXMgdW4gcm9ib3QuLi5cIixcclxuICAgIHRleHRfY29tcGxldGVkOiBcIkplIG5lIHN1aXMgcGFzIHVuIHJvYm90XCIsXHJcbiAgICB0ZXh0X2NvbXBsZXRlZF9zcjogXCJWw6lyaWZpY2F0aW9uIGF1dG9tYXRpcXVlIGRlcyBzcGFtcyB0ZXJtaW7DqWVcIixcclxuICAgIHRleHRfZXhwaXJlZDogXCJWw6lyaWZpY2F0aW9uIGFudGktcm9ib3QgZXhwaXLDqWVcIixcclxuICAgIGJ1dHRvbl9yZXN0YXJ0OiBcIlJlZMOpbWFycmVyXCIsXHJcbiAgICB0ZXh0X2Vycm9yOiBcIsOJY2hlYyBkZSBsYSB2w6lyaWZpY2F0aW9uXCIsXHJcbiAgICBidXR0b25fcmV0cnk6IFwiUmVjb21tZW5jZXJcIixcclxuICAgIHRleHRfZmV0Y2hfZXJyb3I6IFwiUHJvYmzDqG1lIGRlIGNvbm5leGlvbiBhdmVjXCIsXHJcbn07XHJcbi8vIEdlcm1hblxyXG5jb25zdCBMQU5HX0RFID0ge1xyXG4gICAgdGV4dF9pbml0OiBcIkluaXRpYWxpc2llcnVuZy4uLlwiLFxyXG4gICAgdGV4dF9yZWFkeTogXCJBbnRpLVJvYm90ZXItVmVyaWZpemllcnVuZ1wiLFxyXG4gICAgYnV0dG9uX3N0YXJ0OiBcIkhpZXIga2xpY2tlblwiLFxyXG4gICAgdGV4dF9mZXRjaGluZzogXCJIZXJhdXNmb3JkZXJ1bmcgbGFkZW4uLi5cIixcclxuICAgIHRleHRfc29sdmluZzogXCJWZXJpZml6aWVydW5nLCBkYXNzIFNpZSBlaW4gTWVuc2NoIHNpbmQuLi5cIixcclxuICAgIHRleHRfY29tcGxldGVkOiBcIkljaCBiaW4gZWluIE1lbnNjaFwiLFxyXG4gICAgdGV4dF9jb21wbGV0ZWRfc3I6IFwiQXV0b21hdGlzY2hlIFNwYW1wcsO8ZnVuZyBhYmdlc2NobG9zc2VuXCIsXHJcbiAgICB0ZXh0X2V4cGlyZWQ6IFwiVmVyaWZpemllcnVuZyBhYmdlbGF1ZmVuXCIsXHJcbiAgICBidXR0b25fcmVzdGFydDogXCJFcm5ldXQgc3RhcnRlblwiLFxyXG4gICAgdGV4dF9lcnJvcjogXCJWZXJpZml6aWVydW5nIGZlaGxnZXNjaGxhZ2VuXCIsXHJcbiAgICBidXR0b25fcmV0cnk6IFwiRXJuZXV0IHZlcnN1Y2hlblwiLFxyXG4gICAgdGV4dF9mZXRjaF9lcnJvcjogXCJWZXJiaW5kdW5nc3Byb2JsZW0gbWl0XCIsXHJcbn07XHJcbi8vIER1dGNoXHJcbmNvbnN0IExBTkdfTkwgPSB7XHJcbiAgICB0ZXh0X2luaXQ6IFwiSW5pdGlhbGl6ZXJlbi4uLlwiLFxyXG4gICAgdGV4dF9yZWFkeTogXCJBbnRpLXJvYm90dmVyaWZpY2F0aWVcIixcclxuICAgIGJ1dHRvbl9zdGFydDogXCJLbGlrIG9tIHRlIHN0YXJ0ZW5cIixcclxuICAgIHRleHRfZmV0Y2hpbmc6IFwiQWFuIGhldCBsYWRlbi4uLlwiLFxyXG4gICAgdGV4dF9zb2x2aW5nOiBcIkFudGktcm9ib3R2ZXJpZmljYXRpZSBiZXppZy4uLlwiLFxyXG4gICAgdGV4dF9jb21wbGV0ZWQ6IFwiSWsgYmVuIGVlbiBtZW5zXCIsXHJcbiAgICB0ZXh0X2NvbXBsZXRlZF9zcjogXCJBdXRvbWF0aXNjaGUgYW50aS1zcGFtY2hlY2sgdm9sdG9vaWRcIixcclxuICAgIHRleHRfZXhwaXJlZDogXCJWZXJpZmljYXRpZSB2ZXJsb3BlblwiLFxyXG4gICAgYnV0dG9uX3Jlc3RhcnQ6IFwiT3BuaWV1dyBzdGFydGVuXCIsXHJcbiAgICB0ZXh0X2Vycm9yOiBcIlZlcmlmaWNhdGllIG1pc2x1a3RcIixcclxuICAgIGJ1dHRvbl9yZXRyeTogXCJPcG5pZXV3IHByb2JlcmVuXCIsXHJcbiAgICB0ZXh0X2ZldGNoX2Vycm9yOiBcIlZlcmJpbmRpbmcgbWlzbHVrdCBtZXRcIixcclxufTtcclxuLy8gSXRhbGlhblxyXG5jb25zdCBMQU5HX0lUID0ge1xyXG4gICAgdGV4dF9pbml0OiBcIkluaXppYWxpenphemlvbmUuLi5cIixcclxuICAgIHRleHRfcmVhZHk6IFwiVmVyaWZpY2EgQW50aS1Sb2JvdFwiLFxyXG4gICAgYnV0dG9uX3N0YXJ0OiBcIkNsaWNjYSBwZXIgaW5pemlhcmVcIixcclxuICAgIHRleHRfZmV0Y2hpbmc6IFwiQ2FyaWNhbWVudG8uLi5cIixcclxuICAgIHRleHRfc29sdmluZzogXCJWZXJpZmljYW5kbyBjaGUgc2VpIHVtYW5vLi4uXCIsXHJcbiAgICB0ZXh0X2NvbXBsZXRlZDogXCJOb24gc29ubyB1biByb2JvdFwiLFxyXG4gICAgdGV4dF9jb21wbGV0ZWRfc3I6IFwiQ29udHJvbGxvIGF1dG9tYXRpY28gZGVsbG8gc3BhbSBjb21wbGV0YXRvXCIsXHJcbiAgICB0ZXh0X2V4cGlyZWQ6IFwiVmVyaWZpY2EgQW50aS1Sb2JvdCBzY2FkdXRhXCIsXHJcbiAgICBidXR0b25fcmVzdGFydDogXCJSaWNvbWluY2lhXCIsXHJcbiAgICB0ZXh0X2Vycm9yOiBcIlZlcmlmaWNhIGZhbGxpdGFcIixcclxuICAgIGJ1dHRvbl9yZXRyeTogXCJSaXByb3ZhXCIsXHJcbiAgICB0ZXh0X2ZldGNoX2Vycm9yOiBcIlByb2JsZW1hIGRpIGNvbm5lc3Npb25lIGNvblwiLFxyXG59O1xyXG4vLyBQb3J0dWd1ZXNlXHJcbmNvbnN0IExBTkdfUFQgPSB7XHJcbiAgICB0ZXh0X2luaXQ6IFwiSW5pY2lhbGl6YW5kby4uLlwiLFxyXG4gICAgdGV4dF9yZWFkeTogXCJWZXJpZmljYcOnw6NvIEFudGktUm9iw7RcIixcclxuICAgIGJ1dHRvbl9zdGFydDogXCJDbGlxdWUgcGFyYSBpbmljaWFyIHZlcmlmaWNhw6fDo29cIixcclxuICAgIHRleHRfZmV0Y2hpbmc6IFwiQ2FycmVnYW5kby4uLlwiLFxyXG4gICAgdGV4dF9zb2x2aW5nOiBcIlZlcmlmaWNhbmRvIHNlIHZvY8OqIMOpIGh1bWFuby4uLlwiLFxyXG4gICAgdGV4dF9jb21wbGV0ZWQ6IFwiRXUgc291IGh1bWFub1wiLFxyXG4gICAgdGV4dF9jb21wbGV0ZWRfc3I6IFwiVmVyaWZpY2HDp8OjbyBhdXRvbcOhdGljYSBkZSBzcGFtIGNvbmNsdcOtZGFcIixcclxuICAgIHRleHRfZXhwaXJlZDogXCJWZXJpZmljYcOnw6NvIEFudGktUm9iw7QgZXhwaXJhZGFcIixcclxuICAgIGJ1dHRvbl9yZXN0YXJ0OiBcIlJlaW5pY2lhclwiLFxyXG4gICAgdGV4dF9lcnJvcjogXCJWZXJpZmljYcOnw6NvIGZhbGhvdVwiLFxyXG4gICAgYnV0dG9uX3JldHJ5OiBcIlRlbnRhciBub3ZhbWVudGVcIixcclxuICAgIHRleHRfZmV0Y2hfZXJyb3I6IFwiRmFsaGEgZGUgY29uZXjDo28gY29tXCIsXHJcbn07XHJcbi8vIFNwYW5pc2hcclxuY29uc3QgTEFOR19FUyA9IHtcclxuICAgIHRleHRfaW5pdDogXCJJbmljaWFsaXphbmRvLi4uXCIsXHJcbiAgICB0ZXh0X3JlYWR5OiBcIlZlcmlmaWNhY2nDs24gQW50aS1Sb2JvdFwiLFxyXG4gICAgYnV0dG9uX3N0YXJ0OiBcIkhhZ2EgY2xpYyBwYXJhIGluaWNpYXIgbGEgdmVyaWZpY2FjacOzblwiLFxyXG4gICAgdGV4dF9mZXRjaGluZzogXCJDYXJnYW5kbyBkZXNhZsOtb1wiLFxyXG4gICAgdGV4dF9zb2x2aW5nOiBcIlZlcmlmaWNhbmRvIHF1ZSBlcmVzIGh1bWFuby4uLlwiLFxyXG4gICAgdGV4dF9jb21wbGV0ZWQ6IFwiU295IGh1bWFub1wiLFxyXG4gICAgdGV4dF9jb21wbGV0ZWRfc3I6IFwiVmVyaWZpY2FjacOzbiBhdXRvbcOhdGljYSBkZSBzcGFtIGNvbXBsZXRhZGFcIixcclxuICAgIHRleHRfZXhwaXJlZDogXCJWZXJpZmljYWNpw7NuIEFudGktUm9ib3QgZXhwaXJhZGFcIixcclxuICAgIGJ1dHRvbl9yZXN0YXJ0OiBcIlJlaW5pY2lhclwiLFxyXG4gICAgdGV4dF9lcnJvcjogXCJIYSBmYWxsYWRvIGxhIHZlcmlmaWNhY2nDs25cIixcclxuICAgIGJ1dHRvbl9yZXRyeTogXCJJbnRlbnRhciBkZSBudWV2b1wiLFxyXG4gICAgdGV4dF9mZXRjaF9lcnJvcjogXCJFcnJvciBhbCBjb25lY3RhcnNlIGFcIixcclxufTtcclxuLy8gQ2F0YWxhblxyXG5jb25zdCBMQU5HX0NBID0ge1xyXG4gICAgdGV4dF9pbml0OiBcIkluaWNpYWxpdHphbnQuLi5cIixcclxuICAgIHRleHRfcmVhZHk6IFwiVmVyaWZpY2FjacOzIEFudGktUm9ib3RcIixcclxuICAgIGJ1dHRvbl9zdGFydDogXCJGZXMgY2xpYyBwZXIgY29tZW7Dp2FyIGxhIHZlcmlmaWNhY2nDs1wiLFxyXG4gICAgdGV4dF9mZXRjaGluZzogXCJDYXJyZWdhbnQgcmVwdGVcIixcclxuICAgIHRleHRfc29sdmluZzogXCJWZXJpZmljYW50IHF1ZSBldHMgaHVtw6AuLi5cIixcclxuICAgIHRleHRfY29tcGxldGVkOiBcIlNvYyBodW3DoFwiLFxyXG4gICAgdGV4dF9jb21wbGV0ZWRfc3I6IFwiVmVyaWZpY2FjacOzIGF1dG9tw6B0aWNhIGRlIGNvcnJldSBicm9zc2EgY29tcGxldGFkYVwiLFxyXG4gICAgdGV4dF9leHBpcmVkOiBcIkxhIHZlcmlmaWNhY2nDsyBBbnRpLVJvYm90IGhhIGV4cGlyYXRcIixcclxuICAgIGJ1dHRvbl9yZXN0YXJ0OiBcIlJlaW5pY2lhclwiLFxyXG4gICAgdGV4dF9lcnJvcjogXCJIYSBmYWxsYXQgbGEgdmVyaWZpY2FjacOzXCIsXHJcbiAgICBidXR0b25fcmV0cnk6IFwiVG9ybmFyIGEgcHJvdmFyXCIsXHJcbiAgICB0ZXh0X2ZldGNoX2Vycm9yOiBcIkVycm9yIGNvbm5lY3RhbnQgYVwiLFxyXG59O1xyXG4vLyBKYXBhbmVzZVxyXG5jb25zdCBMQU5HX0pBID0ge1xyXG4gICAgdGV4dF9pbml0OiBcIumWi+Wni+OBl+OBpuOBhOOBvuOBmS4uLlwiLFxyXG4gICAgdGV4dF9yZWFkeTogXCLjgqLjg7Pjg4Hjg63jg5zjg4Pjg4joqo3oqLxcIixcclxuICAgIGJ1dHRvbl9zdGFydDogXCLjgq/jg6rjg4Pjgq/jgZfjgaboqo3oqLzjgpLplovlp4tcIixcclxuICAgIHRleHRfZmV0Y2hpbmc6IFwi44Ot44O844OJ44GX44Gm44GE44G+44GZXCIsXHJcbiAgICB0ZXh0X3NvbHZpbmc6IFwi6KqN6Ki85LitLi4uXCIsXHJcbiAgICB0ZXh0X2NvbXBsZXRlZDogXCLnp4Hjga/jg63jg5zjg4Pjg4jjgafjga/jgYLjgorjgb7jgZvjgpNcIixcclxuICAgIHRleHRfY29tcGxldGVkX3NyOiBcIuiHquWLleOCueODkeODoOODgeOCp+ODg+OCr+OBjOWujOS6huOBl+OBvuOBl+OBn1wiLFxyXG4gICAgdGV4dF9leHBpcmVkOiBcIuiqjeiovOOBruacn+mZkOOBjOWIh+OCjOOBpuOBhOOBvuOBmVwiLFxyXG4gICAgYnV0dG9uX3Jlc3RhcnQ6IFwi5YaN5bqm6KqN6Ki844KS6KGM44GGXCIsXHJcbiAgICB0ZXh0X2Vycm9yOiBcIuiqjeiovOOBq+OCqOODqeODvOOBjOeZuueUn+OBl+OBvuOBl+OBn1wiLFxyXG4gICAgYnV0dG9uX3JldHJ5OiBcIuWGjeW6puiqjeiovOOCkuihjOOBhlwiLFxyXG4gICAgdGV4dF9mZXRjaF9lcnJvcjogXCLmjqXntprjgYzjgafjgY3jgb7jgZvjgpPjgafjgZfjgZ9cIixcclxufTtcclxuLy8gRGFuaXNoXHJcbmNvbnN0IExBTkdfREEgPSB7XHJcbiAgICB0ZXh0X2luaXQ6IFwiQWt0aXZlcmVyLi4uXCIsXHJcbiAgICB0ZXh0X3JlYWR5OiBcIkplZyBlciBpa2tlIGVuIHJvYm90XCIsXHJcbiAgICBidXR0b25fc3RhcnQ6IFwiS2xpayBmb3IgYXQgc3RhcnRlIHZlcmlmaWthdGlvbmVuXCIsXHJcbiAgICB0ZXh0X2ZldGNoaW5nOiBcIkhlbnRlciBkYXRhXCIsXHJcbiAgICB0ZXh0X3NvbHZpbmc6IFwiS29udHJvbGxlcmVyIGF0IGR1IGVyIGV0IG1lbm5lc2tlLi4uXCIsXHJcbiAgICB0ZXh0X2NvbXBsZXRlZDogXCJKZWcgZXIgZXQgbWVubmVza2UuXCIsXHJcbiAgICB0ZXh0X2NvbXBsZXRlZF9zcjogXCJBdXRvbWF0aXNrIHNwYW1rb250cm9sIGdlbm5lbWbDuHJ0XCIsXHJcbiAgICB0ZXh0X2V4cGlyZWQ6IFwiVmVyaWZpa2F0aW9uZW4ga3VubmUgaWtrZSBmdWxkZsO4cmVzXCIsXHJcbiAgICBidXR0b25fcmVzdGFydDogXCJHZW5zdGFydFwiLFxyXG4gICAgdGV4dF9lcnJvcjogXCJCZWtyw6ZmdGVsc2UgbWlzbHlra2VkZXNcIixcclxuICAgIGJ1dHRvbl9yZXRyeTogXCJQcsO4diBpZ2VuXCIsXHJcbiAgICB0ZXh0X2ZldGNoX2Vycm9yOiBcIkZvcmJpbmRlbHNlbiBtaXNseWtrZWRlc1wiLFxyXG59O1xyXG4vLyBSdXNzaWFuXHJcbmNvbnN0IExBTkdfUlUgPSB7XHJcbiAgICB0ZXh0X2luaXQ6IFwi0JjQvdC40YbQuNCw0LvQuNC30LDRhtC40Y8uLi5cIixcclxuICAgIHRleHRfcmVhZHk6IFwi0JDQvdGC0LjQoNC+0LHQvtGCINC/0YDQvtCy0LXRgNC60LBcIixcclxuICAgIGJ1dHRvbl9zdGFydDogXCLQndCw0LbQvNC40YLQtSwg0YfRgtC+0LHRiyDQvdCw0YfQsNGC0Ywg0L/RgNC+0LLQtdGA0LrRg1wiLFxyXG4gICAgdGV4dF9mZXRjaGluZzogXCLQn9C+0LvRg9GH0LDRjiDQt9Cw0LTQsNGH0YNcIixcclxuICAgIHRleHRfc29sdmluZzogXCLQn9GA0L7QstC10YDRj9GOLCDRh9GC0L4g0LLRiyDRh9C10LvQvtCy0LXQui4uLlwiLFxyXG4gICAgdGV4dF9jb21wbGV0ZWQ6IFwi0K8g0YfQtdC70L7QstC10LpcIixcclxuICAgIHRleHRfY29tcGxldGVkX3NyOiBcIkHQstGC0L7QvNCw0YLQuNGH0LXRgdC60LDRjyDQv9GA0L7QstC10YDQutCwINC90LAg0YHQv9Cw0Lwg0LfQsNCy0LXRgNGI0LXQvdCwXCIsXHJcbiAgICB0ZXh0X2V4cGlyZWQ6IFwi0KHRgNC+0Log0JDQvdGC0LjQoNC+0LHQvtGC0L3QvtC5INC/0YDQvtCy0LXRgNC60Lgg0LjRgdGC0ZHQulwiLFxyXG4gICAgYnV0dG9uX3Jlc3RhcnQ6IFwi0J3QsNGH0LDRgtGMINC30LDQvdC+0LLQvlwiLFxyXG4gICAgdGV4dF9lcnJvcjogXCLQntGI0LjQsdC60LAg0L/RgNC+0LLQtdGA0LrQuFwiLFxyXG4gICAgYnV0dG9uX3JldHJ5OiBcItCf0L7QstGC0L7RgNC40YLRjCDQtdGJ0ZEg0YDQsNC3XCIsXHJcbiAgICB0ZXh0X2ZldGNoX2Vycm9yOiBcItCe0YjQuNCx0LrQsCDQv9C+0LTQutC70Y7Rh9C10L3QuNGPXCIsXHJcbn07XHJcbi8vIFN3ZWRpc2hcclxuY29uc3QgTEFOR19TViA9IHtcclxuICAgIHRleHRfaW5pdDogXCJBa3RpdmVyYXIuLi5cIixcclxuICAgIHRleHRfcmVhZHk6IFwiSmFnIMOkciBpbnRlIGVuIHJvYm90XCIsXHJcbiAgICBidXR0b25fc3RhcnQ6IFwiS2xpY2thIGbDtnIgYXR0IHZlcmlmaWVyYVwiLFxyXG4gICAgdGV4dF9mZXRjaGluZzogXCJIw6RtdGFyIGRhdGFcIixcclxuICAgIHRleHRfc29sdmluZzogXCJLb250cm9sbGVyYXIgYXR0IGR1IMOkciBtw6Rubmlza2EuLi5cIixcclxuICAgIHRleHRfY29tcGxldGVkOiBcIkphZyDDpHIgZW4gbcOkbm5pc2thXCIsXHJcbiAgICB0ZXh0X2NvbXBsZXRlZF9zcjogXCJBdXRvbWF0aXNrIHNwYW1rb250cm9sbCBzbHV0ZsO2cmRcIixcclxuICAgIHRleHRfZXhwaXJlZDogXCJBbnRpLXJvYm90LXZlcmlmaWVyaW5nZW4gaGFyIGzDtnB0IHV0XCIsXHJcbiAgICBidXR0b25fcmVzdGFydDogXCJCw7ZyamEgb21cIixcclxuICAgIHRleHRfZXJyb3I6IFwiVmVyaWZpZXJpbmcga3VuZGUgaW50ZSBzbHV0ZsO2cmFzXCIsXHJcbiAgICBidXR0b25fcmV0cnk6IFwiT21zdGFydFwiLFxyXG4gICAgdGV4dF9mZXRjaF9lcnJvcjogXCJWZXJpZmllcmluZyBtaXNzbHlja2FkZXNcIixcclxufTtcclxuLy8gVHVya2lzaFxyXG5jb25zdCBMQU5HX1RSID0ge1xyXG4gICAgdGV4dF9pbml0OiBcIkJhxZ9sYXTEsWzEsXlvci4uLlwiLFxyXG4gICAgdGV4dF9yZWFkeTogXCJBbnRpLVJvYm90IERvxJ9ydWxhbWFzxLFcIixcclxuICAgIGJ1dHRvbl9zdGFydDogXCJEb8SfcnVsYW1hecSxIGJhxZ9sYXRtYWsgacOnaW4gdMSxa2xhecSxblwiLFxyXG4gICAgdGV4dF9mZXRjaGluZzogXCJZw7xrbGVuaXlvclwiLFxyXG4gICAgdGV4dF9zb2x2aW5nOiBcIlJvYm90IG9sbWFkxLHEn8SxbsSxeiBkb8SfcnVsYW7EsXlvci4uLlwiLFxyXG4gICAgdGV4dF9jb21wbGV0ZWQ6IFwiQmVuIGJpciBpbnNhbsSxbVwiLFxyXG4gICAgdGV4dF9jb21wbGV0ZWRfc3I6IFwiT3RvbWF0aWsgc3BhbSBrb250cm9sw7wgdGFtYW1sYW5kxLFcIixcclxuICAgIHRleHRfZXhwaXJlZDogXCJBbnRpLVJvYm90IGRvxJ9ydWxhbWFzxLFuxLFuIHPDvHJlc2kgZG9sZHVcIixcclxuICAgIGJ1dHRvbl9yZXN0YXJ0OiBcIlllbmlkZW4gYmHFn2xhdFwiLFxyXG4gICAgdGV4dF9lcnJvcjogXCJEb8SfcnVsYW1hIGJhxZ9hcsSxc8SxeiBvbGR1XCIsXHJcbiAgICBidXR0b25fcmV0cnk6IFwiVGVrcmFyIGRlbmVcIixcclxuICAgIHRleHRfZmV0Y2hfZXJyb3I6IFwiQmHEn2xhbnTEsSBiYcWfYXLEsXPEsXogb2xkdVwiLFxyXG59O1xyXG4vLyBHcmVla1xyXG5jb25zdCBMQU5HX0VMID0ge1xyXG4gICAgdGV4dF9pbml0OiBcIs6gz4HOv861z4TOv865zrzOsc+Dzq/OsS4uLlwiLFxyXG4gICAgdGV4dF9yZWFkeTogXCJBbnRpLVJvYm90IM6Vz4DOsc67zq7OuM61z4XPg863XCIsXHJcbiAgICBidXR0b25fc3RhcnQ6IFwiIM6azqzOvc+EzrUgzrrOu865zrogzrPOuc6xIM69zrEgzr7Otc66zrnOvc6uz4POtc65IM63IM61z4DOsc67zq7OuM61z4XPg863XCIsXHJcbiAgICB0ZXh0X2ZldGNoaW5nOiBcIiDOm86uz4jOtyDPgM+Bz4zOus67zrfPg863z4JcIixcclxuICAgIHRleHRfc29sdmluZzogXCIgzpXPgM65zrLOtc6yzrHOr8+Jz4POtyDOsc69zrjPgc+Oz4DOv8+FLi4uXCIsXHJcbiAgICB0ZXh0X2NvbXBsZXRlZDogXCLOlc6vzrzOsc65IM6szr3OuM+Bz4nPgM6/z4JcIixcclxuICAgIHRleHRfY29tcGxldGVkX3NyOiBcIiDOnyDOsc+Fz4TPjM68zrHPhM6/z4Igzq3Ou861zrPPh86/z4IgzrHOvc61z4DOuc64z43OvM63z4TOv8+FIM+AzrXPgc65zrXPh86/zrzOrc69zr/PhSDOv867zr/Ous67zrfPgc+OzrjOt866zrVcIixcclxuICAgIHRleHRfZXhwaXJlZDogXCIgzpcgzrXPgM6xzrvOrs64zrXPhc+DzrcgQW50aS1Sb2JvdCDOrc67zrfOvs61XCIsXHJcbiAgICBidXR0b25fcmVzdGFydDogXCIgzpXPgM6xzr3Otc66zrrOr869zrfPg863XCIsXHJcbiAgICB0ZXh0X2Vycm9yOiBcIiDOlyDOtc+AzrHOu86uzrjOtc+Fz4POtyDOsc+Azq3PhM+Fz4fOtVwiLFxyXG4gICAgYnV0dG9uX3JldHJ5OiBcIiDOlM6/zrrOuc68zqzPg8+EzrUgzr7Osc69zqxcIixcclxuICAgIHRleHRfZmV0Y2hfZXJyb3I6IFwiIM6Rz4DOv8+Ez4XPh86vzrEgz4PPjc69zrTOtc+DzrfPgiDOvM61XCIsXHJcbn07XHJcbi8vIFVrcmFpbmlhblxyXG5jb25zdCBMQU5HX1VLID0ge1xyXG4gICAgdGV4dF9pbml0OiBcItCG0L3RltGG0ZbQsNC70ZbQt9Cw0YbRltGPLi4uXCIsXHJcbiAgICB0ZXh0X3JlYWR5OiBcItCQ0L3RgtC40YDQvtCx0L7RgiDQstC10YDQuNGE0ZbQutCw0YbRltGPXCIsXHJcbiAgICBidXR0b25fc3RhcnQ6IFwi0J3QsNGC0LjRgdC90ZbRgtGMLCDRidC+0LEg0YDQvtC30L/QvtGH0LDRgtC4INCy0LXRgNC40YTRltC60LDRhtGW0Y5cIixcclxuICAgIHRleHRfZmV0Y2hpbmc6IFwi0JfigJnRlNC00L3QsNC90L3Rj1wiLFxyXG4gICAgdGV4dF9zb2x2aW5nOiBcItCf0LXRgNC10LLRltGA0LrQsCwg0YnQviDQstC4INC90LUg0YDQvtCx0L7Rgi4uLlwiLFxyXG4gICAgdGV4dF9jb21wbGV0ZWQ6IFwi0K8g0L3QtSDRgNC+0LHQvtGCXCIsXHJcbiAgICB0ZXh0X2NvbXBsZXRlZF9zcjogXCLQkNCy0YLQvtC80LDRgtC40YfQvdCwINC/0LXRgNC10LLRltGA0LrQsCDRgdC/0LDQvNGDINC30LDQstC10YDRiNC10L3QsFwiLFxyXG4gICAgdGV4dF9leHBpcmVkOiBcItCn0LDRgSDQstC40YfQtdGA0L/QsNC90L5cIixcclxuICAgIGJ1dHRvbl9yZXN0YXJ0OiBcItCf0L7Rh9Cw0YLQuCDQt9C90L7QstGDXCIsXHJcbiAgICB0ZXh0X2Vycm9yOiBcItCS0LXRgNC40YTRltC60LDRhtGW0Y8g0L3QtSDQstC00LDQu9Cw0YHRjFwiLFxyXG4gICAgYnV0dG9uX3JldHJ5OiBcItCh0L/RgNC+0LHRg9Cy0LDRgtC4INC30L3QvtCy0YNcIixcclxuICAgIHRleHRfZmV0Y2hfZXJyb3I6IFwi0J3QtSDQstC00LDQu9C+0YHRjCDQt+KAmdGU0LTQvdCw0YLQuNGB0YxcIixcclxufTtcclxuLy8gQnVsZ2FyaWFuXHJcbmNvbnN0IExBTkdfQkcgPSB7XHJcbiAgICB0ZXh0X2luaXQ6IFwi0JjQvdC40YbQuNCw0LvQuNC30LjRgNCw0L3QtS4uLlwiLFxyXG4gICAgdGV4dF9yZWFkeTogXCLQkNC90YLQuC3RgNC+0LHQvtGCINC/0YDQvtCy0LXRgNC60LBcIixcclxuICAgIGJ1dHRvbl9zdGFydDogXCLQqdGA0LDQutC90LXRgtC1LCDQt9CwINC00LAg0LfQsNC/0L7Rh9C90LXRgtC1INC/0YDQvtCy0LXRgNC60LDRgtCwXCIsXHJcbiAgICB0ZXh0X2ZldGNoaW5nOiBcItCf0YDQtdC00LjQt9Cy0LjQutCw0YLQtdC70YHRgtCy0L5cIixcclxuICAgIHRleHRfc29sdmluZzogXCLQn9GA0L7QstC10YDRj9Cy0LDQvNC1INC00LDQu9C4INGB0Lgg0YfQvtCy0LXQui4uLlwiLFxyXG4gICAgdGV4dF9jb21wbGV0ZWQ6IFwi0JDQtyDRgdGK0Lwg0YfQvtCy0LXQulwiLFxyXG4gICAgdGV4dF9jb21wbGV0ZWRfc3I6IFwi0JDQstGC0L7QvNCw0YLQuNGH0L3QsNGC0LAg0L/RgNC+0LLQtdGA0LrQsCDQt9CwINGB0L/QsNC8INC1INC30LDQstGK0YDRiNC10L3QsFwiLFxyXG4gICAgdGV4dF9leHBpcmVkOiBcItCQ0L3RgtC4LdCg0L7QsdC+0YIg0L/RgNC+0LLQtdGA0LrQsNGC0LAg0LjQt9GC0LXRh9C1XCIsXHJcbiAgICBidXR0b25fcmVzdGFydDogXCLQoNC10YHRgtCw0YDRgtC40YDQsNC50YLQtVwiLFxyXG4gICAgdGV4dF9lcnJvcjogXCLQndC10YPRgdC/0LXRiNC90LAg0L/RgNC+0LLQtdGA0LrQsFwiLFxyXG4gICAgYnV0dG9uX3JldHJ5OiBcItCe0L/QuNGC0LDQudGC0LUg0L/QsNC6XCIsXHJcbiAgICB0ZXh0X2ZldGNoX2Vycm9yOiBcItCd0LXRg9GB0L/QtdGI0L3QviDRgdCy0YrRgNC30LLQsNC90LUg0YFcIixcclxufTtcclxuLy8gQ3plY2hcclxuY29uc3QgTEFOR19DUyA9IHtcclxuICAgIHRleHRfaW5pdDogXCJJbmljaWFsaXphY2UuLi5cIixcclxuICAgIHRleHRfcmVhZHk6IFwiT3bEm8WZZW7DrSBwcm90aSByb2JvdMWvbVwiLFxyXG4gICAgYnV0dG9uX3N0YXJ0OiBcIktsaWtuxJt0ZSBwcm8gb3bEm8WZZW7DrVwiLFxyXG4gICAgdGV4dF9mZXRjaGluZzogXCJQcm9ibMOpbSBwxZlpIG5hxI3DrXTDoW7DrVwiLFxyXG4gICAgdGV4dF9zb2x2aW5nOiBcIk92xJvFmWVuw60sIMW+ZSBqc3RlIMSNbG92xJtrLi4uXCIsXHJcbiAgICB0ZXh0X2NvbXBsZXRlZDogXCJKc2VtIMSNbG92xJtrXCIsXHJcbiAgICB0ZXh0X2NvbXBsZXRlZF9zcjogXCJBdXRvbWF0aWNrw6Ega29udHJvbGEgc3BhbXUgZG9rb27EjWVuYVwiLFxyXG4gICAgdGV4dF9leHBpcmVkOiBcIk92xJvFmWVuw60gcHJvdGkgcm9ib3TFr20gdnlwcsWhZWxvXCIsXHJcbiAgICBidXR0b25fcmVzdGFydDogXCJSZXN0YXJ0b3ZhdFwiLFxyXG4gICAgdGV4dF9lcnJvcjogXCJPdsSbxZllbsOtIHNlIG5lemRhxZlpbG9cIixcclxuICAgIGJ1dHRvbl9yZXRyeTogXCJaa3VzaXQgem5vdnVcIixcclxuICAgIHRleHRfZmV0Y2hfZXJyb3I6IFwiUMWZaXBvamVuw60gc2UgbmV6ZGHFmWlsb1wiLFxyXG59O1xyXG4vLyBTbG92YWtcclxuY29uc3QgTEFOR19TSyA9IHtcclxuICAgIHRleHRfaW5pdDogXCJJbmljaWFsaXrDoWNpYS4uLlwiLFxyXG4gICAgdGV4dF9yZWFkeTogXCJPdmVyZW5pZSBwcm90aSByb2JvdG9tXCIsXHJcbiAgICBidXR0b25fc3RhcnQ6IFwiS2xpa25pdGUgcHJlIG92ZXJlbmllXCIsXHJcbiAgICB0ZXh0X2ZldGNoaW5nOiBcIlByb2Jsw6ltIHByaSBuYcSNw610YW7DrVwiLFxyXG4gICAgdGV4dF9zb2x2aW5nOiBcIk92ZXJlbmllLCDFvmUgc3RlIMSNbG92ZWsuLi5cIixcclxuICAgIHRleHRfY29tcGxldGVkOiBcIlNvbSDEjWxvdmVrXCIsXHJcbiAgICB0ZXh0X2NvbXBsZXRlZF9zcjogXCJBdXRvbWF0aWNrw6Ega29udHJvbGEgc3BhbXUgZG9rb27EjWVuw6FcIixcclxuICAgIHRleHRfZXhwaXJlZDogXCJPdmVyZW5pZSBwcm90aSByb2JvdG9tIHZ5cHLFoWFsb1wiLFxyXG4gICAgYnV0dG9uX3Jlc3RhcnQ6IFwiUmXFoXRhcnRvdmHFpVwiLFxyXG4gICAgdGV4dF9lcnJvcjogXCJPdmVyZW5pZSBzYSBuZXBvZGFyaWxvXCIsXHJcbiAgICBidXR0b25fcmV0cnk6IFwiU2vDunNpxaUgem5vdmFcIixcclxuICAgIHRleHRfZmV0Y2hfZXJyb3I6IFwiUHJpcG9qZW5pZSBzYSBuZXBvZGFyaWxvXCIsXHJcbn07XHJcbi8vIE5vcndlZ2lhblxyXG5jb25zdCBMQU5HX05PID0ge1xyXG4gICAgdGV4dF9pbml0OiBcIiBBa3RpdmVyZXIuLi5cIixcclxuICAgIHRleHRfcmVhZHk6IFwiSmVnIGVyIGlra2UgZW4gcm9ib3RcIixcclxuICAgIGJ1dHRvbl9zdGFydDogXCJLbGlrayBmb3Igw6Ugc3RhcnRlIHZlcmlmaXNlcmluZ2VuXCIsXHJcbiAgICB0ZXh0X2ZldGNoaW5nOiBcIkhlbnRlciBkYXRhXCIsXHJcbiAgICB0ZXh0X3NvbHZpbmc6IFwiU2pla2tlciBhdCBkdSBlciBldCBtZW5uZXNrZS4uLlwiLFxyXG4gICAgdGV4dF9jb21wbGV0ZWQ6IFwiSmVnIGVyIGV0IG1lbm5lc2tlXCIsXHJcbiAgICB0ZXh0X2NvbXBsZXRlZF9zcjogXCJBdXRvbWF0aXNrIHNwYW0tc2pla2sgZnVsbGbDuHJ0XCIsXHJcbiAgICB0ZXh0X2V4cGlyZWQ6IFwiVmVyaWZpc2VyaW5nIGt1bm5lIGlra2UgZnVsbGbDuHJlc1wiLFxyXG4gICAgYnV0dG9uX3Jlc3RhcnQ6IFwiT21zdGFydFwiLFxyXG4gICAgdGV4dF9lcnJvcjogXCJCZWtyZWZ0ZWxzZW4gbWlzbHlrdGVzXCIsXHJcbiAgICBidXR0b25fcmV0cnk6IFwiUHLDuHYgcMOlIG55dHRcIixcclxuICAgIHRleHRfZmV0Y2hfZXJyb3I6IFwiVGlsa29ibGluZ2VuIG1pc2x5a3Rlc1wiLFxyXG59O1xyXG4vLyBGaW5uaXNoXHJcbmNvbnN0IExBTkdfRkkgPSB7XHJcbiAgICB0ZXh0X2luaXQ6IFwiQWt0aXZvaWRhYW4uLi5cIixcclxuICAgIHRleHRfcmVhZHk6IFwiRW4gb2xlIHJvYm90dGlcIixcclxuICAgIGJ1dHRvbl9zdGFydDogXCJBbG9pdGEgdmFodmlzdHVzIGtsaWtrYWFtYWxsYVwiLFxyXG4gICAgdGV4dF9mZXRjaGluZzogXCJIYWV0YWFuIHRpZXRvamFcIixcclxuICAgIHRleHRfc29sdmluZzogXCJUYXJraXN0YWEsIGV0dMOkIG9sZXQgaWhtaW5lbi4uLlwiLFxyXG4gICAgdGV4dF9jb21wbGV0ZWQ6IFwiT2xlbiBpaG1pbmVuXCIsXHJcbiAgICB0ZXh0X2NvbXBsZXRlZF9zcjogXCJBdXRvbWFhdHRpbmVuIHJvc2thcG9zdGluIHRhcmtpc3R1cyBzdW9yaXRldHR1XCIsXHJcbiAgICB0ZXh0X2V4cGlyZWQ6IFwiVmFodmlzdHVzdGEgZWkgdm9pdHUgc3Vvcml0dGFhIGxvcHB1dW5cIixcclxuICAgIGJ1dHRvbl9yZXN0YXJ0OiBcIlV1ZGVsbGVlbmvDpHlubmlzdHlzXCIsXHJcbiAgICB0ZXh0X2Vycm9yOiBcIlZhaHZpc3R1cyBlcMOkb25uaXN0dWlcIixcclxuICAgIGJ1dHRvbl9yZXRyeTogXCJZcml0w6QgdXVkZWxsZWVuXCIsXHJcbiAgICB0ZXh0X2ZldGNoX2Vycm9yOiBcIllodGV5cyBlcMOkb25uaXN0dWlcIixcclxufTtcclxuLy8gTGF0dmlhblxyXG5jb25zdCBMQU5HX0xWID0ge1xyXG4gICAgdGV4dF9pbml0OiBcIk5vdGllayBpbmljaWFsaXrEk8WhYW5hLi4uXCIsXHJcbiAgICB0ZXh0X3JlYWR5OiBcIlZlcmlmaWvEgWNpamEsIGthIG5lZXNhdCByb2JvdHNcIixcclxuICAgIGJ1dHRvbl9zdGFydDogXCJOb2tsaWvFocS3aW5pZXQsIGxhaSBzxIFrdHUgdmVyaWZpa8SBY2lqdVwiLFxyXG4gICAgdGV4dF9mZXRjaGluZzogXCJOb3RpZWsgZHJvxaHEq2JhcyB1emRldnVtYSBpemfFq8WhYW5hXCIsXHJcbiAgICB0ZXh0X3NvbHZpbmc6IFwiTm90aWVrIHDEgXJiYXVkZSwgdmFpIGVzYXQgY2lsdsSTa3MuLi5cIixcclxuICAgIHRleHRfY29tcGxldGVkOiBcIkVzIGVzbXUgY2lsdsSTa3NcIixcclxuICAgIHRleHRfY29tcGxldGVkX3NyOiBcIkF1dG9txIF0aXNrYSBzdXJvZ8SBdHBhc3RhIHDEgXJiYXVkZSBwYWJlaWd0YVwiLFxyXG4gICAgdGV4dF9leHBpcmVkOiBcIlZlcmlmaWvEgWNpamFzLCBrYSBuZWVzYXQgcm9ib3RzLCBkZXLEq2d1bXMgYmVpZHppZXNcIixcclxuICAgIGJ1dHRvbl9yZXN0YXJ0OiBcIlJlc3RhcnTEk3RcIixcclxuICAgIHRleHRfZXJyb3I6IFwiVmVyaWZpa8SBY2lqYSBuZWl6ZGV2xIFzXCIsXHJcbiAgICBidXR0b25fcmV0cnk6IFwiTcSTxKNpbsSBdCB2xJNscmVpelwiLFxyXG4gICAgdGV4dF9mZXRjaF9lcnJvcjogXCJOZWl6ZGV2xIFzIGl6dmVpZG90IHNhdmllbm9qdW11IGFyXCIsXHJcbn07XHJcbi8vIExpdGh1YW5pYW5cclxuY29uc3QgTEFOR19MVCA9IHtcclxuICAgIHRleHRfaW5pdDogXCJJbmljaWp1b2phbWEuLi5cIixcclxuICAgIHRleHRfcmVhZHk6IFwiUGF0aWtyaW5pbWFzLCBhciBuZXNhdGUgcm9ib3Rhc1wiLFxyXG4gICAgYnV0dG9uX3N0YXJ0OiBcIlNwdXN0ZWzEl2tpdGUgcGF0aWtyaW5pbXVpIHByYWTEl3RpXCIsXHJcbiAgICB0ZXh0X2ZldGNoaW5nOiBcIkdhdmltbyBpxaHFocWra2lzXCIsXHJcbiAgICB0ZXh0X3NvbHZpbmc6IFwiVGlrcmluYW1hLCBhciBlc2F0ZSDFvm1vZ3VzLi4uXCIsXHJcbiAgICB0ZXh0X2NvbXBsZXRlZDogXCJFc3Ugxb5tb2d1c1wiLFxyXG4gICAgdGV4dF9jb21wbGV0ZWRfc3I6IFwiQXV0b21hdGluxJcgcGF0aWtyYSBkxJdsIHBhxaF0byDFoWl1a8WhbGnFsyBhdGxpa3RhXCIsXHJcbiAgICB0ZXh0X2V4cGlyZWQ6IFwiUGF0aWtyaW5pbWFzLCBhciBuZXNhdGUgcm9ib3RhcywgYmFpZ8SXIGdhbGlvdGlcIixcclxuICAgIGJ1dHRvbl9yZXN0YXJ0OiBcIlByYWTEl3RpIGnFoSBuYXVqb1wiLFxyXG4gICAgdGV4dF9lcnJvcjogXCJQYXRpa3JpbmltYXMgbmVwYXZ5a29cIixcclxuICAgIGJ1dHRvbl9yZXRyeTogXCJLYXJ0b3RpXCIsXHJcbiAgICB0ZXh0X2ZldGNoX2Vycm9yOiBcIk5lcGF2eWtvIHByaXNpanVuZ3RpIHByaWVcIixcclxufTtcclxuLy8gUG9saXNoXHJcbmNvbnN0IExBTkdfUEwgPSB7XHJcbiAgICB0ZXh0X2luaXQ6IFwiSW5pY2pvd2FuaWUuLi5cIixcclxuICAgIHRleHRfcmVhZHk6IFwiV2VyeWZpa2FjamEgYW50eWJvdG93YVwiLFxyXG4gICAgYnV0dG9uX3N0YXJ0OiBcIktsaWtuaWosIGFieSByb3pwb2N6xIXEhyB3ZXJ5ZmlrYWNqxJlcIixcclxuICAgIHRleHRfZmV0Y2hpbmc6IFwiUG9iaWVyYW5pZVwiLFxyXG4gICAgdGV4dF9zb2x2aW5nOiBcIldlcnlmaWthY2phLCBjenkgbmllIGplc3RlxZsgcm9ib3RlbS4uLlwiLFxyXG4gICAgdGV4dF9jb21wbGV0ZWQ6IFwiTmllIGplc3RlbSByb2JvdGVtXCIsXHJcbiAgICB0ZXh0X2NvbXBsZXRlZF9zcjogXCJaYWtvxYRjem9ubyBhdXRvbWF0eWN6bmUgc3ByYXdkemFuaWUgc3BhbXVcIixcclxuICAgIHRleHRfZXhwaXJlZDogXCJXZXJ5ZmlrYWNqYSBhbnR5Ym90b3dhIHd5Z2FzxYJhXCIsXHJcbiAgICBidXR0b25fcmVzdGFydDogXCJVcnVjaG9tIHBvbm93bmllXCIsXHJcbiAgICB0ZXh0X2Vycm9yOiBcIldlcnlmaWthY2phIG5pZSBwb3dpb2TFgmEgc2nEmVwiLFxyXG4gICAgYnV0dG9uX3JldHJ5OiBcIlNwcsOzYnVqIHBvbm93bmllXCIsXHJcbiAgICB0ZXh0X2ZldGNoX2Vycm9yOiBcIk5pZSB1ZGHFgm8gc2nEmSBwb8WCxIVjennEhyB6XCIsXHJcbn07XHJcbi8vIEVzdG9uaWFuXHJcbmNvbnN0IExBTkdfRVQgPSB7XHJcbiAgICB0ZXh0X2luaXQ6IFwiSW5pdHNpYWxpc2VlcmltaW5lLi4uXCIsXHJcbiAgICB0ZXh0X3JlYWR5OiBcIlJvYm90aXZhc3RhbmUga2lubml0dXNcIixcclxuICAgIGJ1dHRvbl9zdGFydDogXCJLaW5uaXRhbWlzZWdhIGFsdXN0YW1pc2VrcyBrbMO1cHNha2VcIixcclxuICAgIHRleHRfZmV0Y2hpbmc6IFwiVsOkbGpha3V0c2UgdG9vbWluZVwiLFxyXG4gICAgdGV4dF9zb2x2aW5nOiBcIktpbm5pdGF0YWtzZSwgZXQgc2Egb2xlZCBpbmltZW5lLi4uXCIsXHJcbiAgICB0ZXh0X2NvbXBsZXRlZDogXCJNYSBvbGVuIGluaW1lbmVcIixcclxuICAgIHRleHRfY29tcGxldGVkX3NyOiBcIkF1dG9tYWF0bmUgcsOkbXBzcG9zdGkga29udHJvbGwgb24gbMO1cGV0YXR1ZFwiLFxyXG4gICAgdGV4dF9leHBpcmVkOiBcIlJvYm90aXZhc3RhbmUga2lubml0dXMgYWVndXNcIixcclxuICAgIGJ1dHRvbl9yZXN0YXJ0OiBcIlRhYXNrw6Rpdml0YVwiLFxyXG4gICAgdGV4dF9lcnJvcjogXCJLaW5uaXRhbWluZSBudXJqdXNcIixcclxuICAgIGJ1dHRvbl9yZXRyeTogXCJQcm9vdmkgdXVlc3RpXCIsXHJcbiAgICB0ZXh0X2ZldGNoX2Vycm9yOiBcIsOcaGVuZHVzZSBsb29taW5lIG51cmp1c1wiLFxyXG59O1xyXG4vLyBDcm9hdGlhblxyXG5jb25zdCBMQU5HX0hSID0ge1xyXG4gICAgdGV4dF9pbml0OiBcIlBvxI1ldG5vIHBvc3RhdmxqYW5qZS4uLlwiLFxyXG4gICAgdGV4dF9yZWFkeTogXCJQcm92amVyYSBwcm90aXYgcm9ib3RhXCIsXHJcbiAgICBidXR0b25fc3RhcnQ6IFwiS2xpa25pdGUgemEgcG/EjWV0YWsgcHJvdmplcmVcIixcclxuICAgIHRleHRfZmV0Y2hpbmc6IFwiRG9odmHEh2FuamUgaXphem92YVwiLFxyXG4gICAgdGV4dF9zb2x2aW5nOiBcIlByb3ZqZXJhdmFtbyBqZXN0ZSBsaSDEjW92amVrLi4uXCIsXHJcbiAgICB0ZXh0X2NvbXBsZXRlZDogXCJOaXNhbSByb2JvdFwiLFxyXG4gICAgdGV4dF9jb21wbGV0ZWRfc3I6IFwiQXV0b21hdHNrYSBwcm92amVyYSBqZSB6YXZyxaFlbmFcIixcclxuICAgIHRleHRfZXhwaXJlZDogXCJWcmlqZW1lIHphIHByb3ZqZXJ1IHByb3RpdiByb2JvdGEgamUgaXN0ZWtsb1wiLFxyXG4gICAgYnV0dG9uX3Jlc3RhcnQ6IFwiT3N2amXFvmlcIixcclxuICAgIHRleHRfZXJyb3I6IFwiUHJvdmplcmEgbmlqZSB1c3BqbGVsYVwiLFxyXG4gICAgYnV0dG9uX3JldHJ5OiBcIiBQb25vdm8gcG9rcmVuaVwiLFxyXG4gICAgdGV4dF9mZXRjaF9lcnJvcjogXCJOaWplIG1vZ3XEh2UgdXNwb3N0YXZpdGkgdmV6dVwiLFxyXG59O1xyXG4vLyBTZXJiaWFuXHJcbmNvbnN0IExBTkdfU1IgPSB7XHJcbiAgICB0ZXh0X2luaXQ6IFwiUG9rcmV0YW5qZS4uLlwiLFxyXG4gICAgdGV4dF9yZWFkeTogXCJBbnRpLVJvYm90IFZlcmlmaWthY2lqYVwiLFxyXG4gICAgYnV0dG9uX3N0YXJ0OiBcIktsaWtuaXRlIGRhIGJpc3RlIHphcG/EjWVsaSB2ZXJpZmlrYWNpanVcIixcclxuICAgIHRleHRfZmV0Y2hpbmc6IFwiVcSNaXRhdmFuamUgaXphem92YVwiLFxyXG4gICAgdGV4dF9zb2x2aW5nOiBcIlZlcmlmaWthY2lqYSBkYSBzdGUgxI1vdmVrLi4uXCIsXHJcbiAgICB0ZXh0X2NvbXBsZXRlZDogXCJKYSBzYW0gxI1vdmVrXCIsXHJcbiAgICB0ZXh0X2NvbXBsZXRlZF9zcjogXCJBdXRvbWF0c2thIHByb3ZlcmEgbmXFvmVsamVuZSBwb8WhdGUgamUgemF2csWhZW5hXCIsXHJcbiAgICB0ZXh0X2V4cGlyZWQ6IFwiQW50aS1Sb2JvdCB2ZXJpZmlrYWNpamEgamUgaXN0ZWtsYVwiLFxyXG4gICAgYnV0dG9uX3Jlc3RhcnQ6IFwiUG9ub3ZvIHBva3JlbnV0aVwiLFxyXG4gICAgdGV4dF9lcnJvcjogXCJWZXJpZmlrYWNpamEgbmlqZSB1c3BlbGFcIixcclxuICAgIGJ1dHRvbl9yZXRyeTogXCJQb2t1xaFhanRlIHBvbm92b1wiLFxyXG4gICAgdGV4dF9mZXRjaF9lcnJvcjogXCJOZXVzcGVsbyBwb3Zleml2YW5qZSBzYS4uLlwiLFxyXG59O1xyXG4vLyBTbG92ZW5pYW5cclxuY29uc3QgTEFOR19TTCA9IHtcclxuICAgIHRleHRfaW5pdDogXCJJbmljaWFsaXppcmFuamUuLi5cIixcclxuICAgIHRleHRfcmVhZHk6IFwiUHJldmVyamFuamUgcm9ib3RvdlwiLFxyXG4gICAgYnV0dG9uX3N0YXJ0OiBcIktsaWtuaXRlIHphIHphxI1ldGVrIHByZXZlcmphbmphXCIsXHJcbiAgICB0ZXh0X2ZldGNoaW5nOiBcIlByZW5hxaFhbmplIGl6eml2YVwiLFxyXG4gICAgdGV4dF9zb2x2aW5nOiBcIlByZXZlcmphbW8sIGFsaSBzdGUgxI1sb3Zla1wiLFxyXG4gICAgdGV4dF9jb21wbGV0ZWQ6IFwiTmlzZW0gcm9ib3RcIixcclxuICAgIHRleHRfY29tcGxldGVkX3NyOiBcIkF2dG9tYXRza28gcHJldmVyamFuamUgamUgemFrbGp1xI1lbm9cIixcclxuICAgIHRleHRfZXhwaXJlZDogXCJQcmV2ZXJqYW5qZSByb2JvdG92IGplIHBvdGVrbG9cIixcclxuICAgIGJ1dHRvbl9yZXN0YXJ0OiBcIk9zdmXFvmlcIixcclxuICAgIHRleHRfZXJyb3I6IFwiUHJldmVyamFuamUgbmkgdXNwZWxvXCIsXHJcbiAgICBidXR0b25fcmV0cnk6IFwiUG9za3VzaSBwb25vdm5vXCIsXHJcbiAgICB0ZXh0X2ZldGNoX2Vycm9yOiBcIlBvdmV6YXZlIG5pIGJpbG8gbW9nb8SNZSB2enBvc3Rhdml0aVwiLFxyXG59O1xyXG4vLyBIdW5nYXJpYW5cclxuY29uc3QgTEFOR19IVSA9IHtcclxuICAgIHRleHRfaW5pdDogXCJJbmljaWFsaXrDoWzDoXMuLi5cIixcclxuICAgIHRleHRfcmVhZHk6IFwiUm9ib3RlbGxlbmVzIGVsbGVuxZFyesOpc1wiLFxyXG4gICAgYnV0dG9uX3N0YXJ0OiBcIkthdHRpbnRzb24gYXogZWxsZW7FkXJ6w6lzIG1lZ2tlemTDqXPDqWhlelwiLFxyXG4gICAgdGV4dF9mZXRjaGluZzogXCJGZWxhZHbDoW55IGxla8OpcsOpc2VcIixcclxuICAgIHRleHRfc29sdmluZzogXCJBbm5hayBpZ2F6b2zDoXNhLCBob2d5IMOWbiBuZW0gcm9ib3QuLi5cIixcclxuICAgIHRleHRfY29tcGxldGVkOiBcIk5lbSB2YWd5b2sgcm9ib3RcIixcclxuICAgIHRleHRfY29tcGxldGVkX3NyOiBcIkF1dG9tYXRpa3VzIHNwYW0gZWxsZW7FkXJ6w6lzIGJlZmVqZXrFkWTDtnR0XCIsXHJcbiAgICB0ZXh0X2V4cGlyZWQ6IFwiUm9ib3RlbGxlbmVzIGVsbGVuxZFyesOpcyBsZWrDoXJ0XCIsXHJcbiAgICBidXR0b25fcmVzdGFydDogXCLDmmpyYWluZMOtdMOhc1wiLFxyXG4gICAgdGV4dF9lcnJvcjogXCJBeiBlbGxlbsWRcnrDqXMgbmVtIHNpa2Vyw7xsdFwiLFxyXG4gICAgYnV0dG9uX3JldHJ5OiBcIlByw7Niw6FsamEgw7pqcmFcIixcclxuICAgIHRleHRfZmV0Y2hfZXJyb3I6IFwiTmVtIHNpa2Vyw7xsdCBjc2F0bGFrb3puaVwiLFxyXG59O1xyXG4vLyBSb21hbmlhblxyXG5jb25zdCBMQU5HX1JPID0ge1xyXG4gICAgdGV4dF9pbml0OiBcIlNlIGluacibaWFsaXplYXrEgy4uLlwiLFxyXG4gICAgdGV4dF9yZWFkeTogXCJWZXJpZmljYXJlIGFudGktcm9ib3RcIixcclxuICAgIGJ1dHRvbl9zdGFydDogXCJDbGljayBwZW50cnUgYSDDrm5jZXBlIHZlcmlmaWNhcmVhXCIsXHJcbiAgICB0ZXh0X2ZldGNoaW5nOiBcIkRvd25sb2FkaW5nXCIsXHJcbiAgICB0ZXh0X3NvbHZpbmc6IFwiVmVyaWZpY2FyZSBjxIMgZciZdGkgb20uLi5cIixcclxuICAgIHRleHRfY29tcGxldGVkOiBcIlN1bnQgb21cIixcclxuICAgIHRleHRfY29tcGxldGVkX3NyOiBcIlZlcmlmaWNhcmVhIGF1dG9tYXTEgyBhIHNwYW0tdWx1aSBhIGZvc3QgZmluYWxpemF0xINcIixcclxuICAgIHRleHRfZXhwaXJlZDogXCJWZXJpZmljYXJlYSBhbnRpLXJvYm90IGEgZXhwaXJhdFwiLFxyXG4gICAgYnV0dG9uX3Jlc3RhcnQ6IFwiUmVzdGFydFwiLFxyXG4gICAgdGV4dF9lcnJvcjogXCJWZXJpZmljYXJlIGXImXVhdMSDXCIsXHJcbiAgICBidXR0b25fcmV0cnk6IFwiUmXDrm5jZWFyY8SDXCIsXHJcbiAgICB0ZXh0X2ZldGNoX2Vycm9yOiBcIk51IHMtYSBwdXR1dCBjb25lY3RhXCIsXHJcbn07XHJcbi8vIENoaW5lc2VcclxuY29uc3QgTEFOR19aSCA9IHtcclxuICAgIHRleHRfaW5pdDogXCLliJ3lp4vljJbkuK3igKbigKZcIixcclxuICAgIHRleHRfcmVhZHk6IFwi5Lq65py66aqM6K+BXCIsXHJcbiAgICBidXR0b25fc3RhcnQ6IFwi54K55Ye75byA5aeLXCIsXHJcbiAgICB0ZXh0X2ZldGNoaW5nOiBcIuato+WcqOWKoOi9vVwiLFxyXG4gICAgdGV4dF9zb2x2aW5nOiBcIuS6uuacuuagoemqjOS4reKApuKAplwiLFxyXG4gICAgdGV4dF9jb21wbGV0ZWQ6IFwi5oiR5LiN5piv5py65Zmo5Lq6XCIsXHJcbiAgICB0ZXh0X2NvbXBsZXRlZF9zcjogXCLkurrmnLrpqozor4HlrozmiJBcIixcclxuICAgIHRleHRfZXhwaXJlZDogXCLpqozor4Hlt7Lov4fmnJ9cIixcclxuICAgIGJ1dHRvbl9yZXN0YXJ0OiBcIumHjeaWsOW8gOWni1wiLFxyXG4gICAgdGV4dF9lcnJvcjogXCLmoKHpqozlpLHotKVcIixcclxuICAgIGJ1dHRvbl9yZXRyeTogXCLph43or5VcIixcclxuICAgIHRleHRfZmV0Y2hfZXJyb3I6IFwi5peg5rOV6L+e5o6l5YiwXCIsXHJcbn07XHJcbi8vIFRyYWRpdGlvbmFsIENoaW5lc2VcclxuY29uc3QgTEFOR19aSF9UVyA9IHtcclxuICAgIHRleHRfaW5pdDogXCLmraPlnKjliJ3lp4vljJbigKbigKZcIixcclxuICAgIHRleHRfcmVhZHk6IFwi5Y+N5qmf5Zmo5Lq66amX6K2JXCIsXHJcbiAgICBidXR0b25fc3RhcnQ6IFwi6bue5pOK6ZaL5aeL6amX6K2JXCIsXHJcbiAgICB0ZXh0X2ZldGNoaW5nOiBcIui8ieWFpeS4rVwiLFxyXG4gICAgdGV4dF9zb2x2aW5nOiBcIuWPjeapn+WZqOS6uumpl+itieS4reKApuKAplwiLFxyXG4gICAgdGV4dF9jb21wbGV0ZWQ6IFwi5oiR5LiN5piv5qmf5Zmo5Lq6XCIsXHJcbiAgICB0ZXh0X2NvbXBsZXRlZF9zcjogXCLpqZforYnlrozmiJBcIixcclxuICAgIHRleHRfZXhwaXJlZDogXCLpqZforYnotoXmmYJcIixcclxuICAgIGJ1dHRvbl9yZXN0YXJ0OiBcIumHjeaWsOmWi+Wni1wiLFxyXG4gICAgdGV4dF9lcnJvcjogXCLpqZforYnlpLHmlZdcIixcclxuICAgIGJ1dHRvbl9yZXRyeTogXCLph43oqaZcIixcclxuICAgIHRleHRfZmV0Y2hfZXJyb3I6IFwi54Sh5rOV6YCj57ea5YiwXCIsXHJcbn07XHJcbi8vIFZpZXRuYW1lc2VcclxuY29uc3QgTEFOR19WSSA9IHtcclxuICAgIHRleHRfaW5pdDogXCLEkGFuZyBraOG7n2kgdOG6oW8uLi5cIixcclxuICAgIHRleHRfcmVhZHk6IFwiWMOhYyBtaW5oIGNo4buRbmcgUm9ib3RcIixcclxuICAgIGJ1dHRvbl9zdGFydDogXCJC4bqlbSB2w6BvIMSRw6J5IMSR4buDIHjDoWMgbWluaFwiLFxyXG4gICAgdGV4dF9mZXRjaGluZzogXCJUw6xtIG7huqFwIHbDoCB44butIGzDvSB0aOG7rSB0aMOhY2hcIixcclxuICAgIHRleHRfc29sdmluZzogXCJYw6FjIG1pbmggYuG6oW4gbMOgIG5nxrDhu51pLi4uXCIsXHJcbiAgICB0ZXh0X2NvbXBsZXRlZDogXCJC4bqhbiBsw6AgY29uIG5nxrDhu51pXCIsXHJcbiAgICB0ZXh0X2NvbXBsZXRlZF9zcjogXCJYw6FjIG1pbmggaG/DoG4gdOG6pXRcIixcclxuICAgIHRleHRfZXhwaXJlZDogXCJYw6FjIG1pbmggxJHDoyBo4bq/dCBo4bqhblwiLFxyXG4gICAgYnV0dG9uX3Jlc3RhcnQ6IFwiS2jhu59pIMSR4buZbmcgbOG6oWlcIixcclxuICAgIHRleHRfZXJyb3I6IFwiWMOhYyBtaW5oIHRo4bqldCBi4bqhaVwiLFxyXG4gICAgYnV0dG9uX3JldHJ5OiBcIlRo4butIGzhuqFpXCIsXHJcbiAgICB0ZXh0X2ZldGNoX2Vycm9yOiBcIktow7RuZyBr4bq/dCBu4buRaSDEkcaw4bujY1wiLFxyXG59O1xyXG4vLyBIZWJyZXdcclxuY29uc3QgTEFOR19IRSA9IHtcclxuICAgIHRleHRfaW5pdDogXCLXkdeR15nXpteV16IuLi5cIixcclxuICAgIHRleHRfcmVhZHk6IFwi15DXmdee15XXqiDXkNeg15XXqVwiLFxyXG4gICAgYnV0dG9uX3N0YXJ0OiBcItem16jXmdeaINec15zXl9eV16Ug15zXlNeq15fXnNeqINeU15DXmdee15XXqlwiLFxyXG4gICAgdGV4dF9mZXRjaGluZzogXCLXkNeq15LXqCDXlNee16LXoNeUINeR15TXm9eg15RcIixcclxuICAgIHRleHRfc29sdmluZzogXCLXnteq15HXpteiINeQ15nXnteV16og15DXoNeV16kuLi5cIixcclxuICAgIHRleHRfY29tcGxldGVkOiBcIteQ16DXmSDXnNeQINeo15XXkdeV15hcIixcclxuICAgIHRleHRfY29tcGxldGVkX3NyOiBcIteR15PXmden16og15TXodek15DXnSDXlNeQ15XXmNeV157XmNeZ16og15TXodeq15nXmdee15RcIixcclxuICAgIHRleHRfZXhwaXJlZDogXCLXpNeSINeq15XXp9ejINeQ15nXnteV16og15TXkNeg15XXqVwiLFxyXG4gICAgYnV0dG9uX3Jlc3RhcnQ6IFwi15zXlNeq15fXmdecINep15XXkVwiLFxyXG4gICAgdGV4dF9lcnJvcjogXCLXkNeZ157XldeqINeU15DXoNeV16kg16DXm9ep15xcIixcclxuICAgIGJ1dHRvbl9yZXRyeTogXCLXnNeg16HXldeqINep15XXkVwiLFxyXG4gICAgdGV4dF9mZXRjaF9lcnJvcjogXCLXoNeb16nXnCDXlNeX15nXkdeV16gg15DXnFwiLFxyXG4gICAgcnRsOiB0cnVlLFxyXG59O1xyXG4vLyBUaGFpXHJcbmNvbnN0IExBTkdfVEggPSB7XHJcbiAgICB0ZXh0X2luaXQ6IFwi4LiB4Liy4Lij4LmA4Lij4Li04LmI4Lih4LiV4LmJ4LiZLi4uXCIsXHJcbiAgICB0ZXh0X3JlYWR5OiBcIiDguIHguLLguKPguJXguKPguKfguIjguKrguK3guJrguJXguYjguK3guJXguYnguLLguJnguKvguLjguYjguJnguKLguJnguJXguYxcIixcclxuICAgIGJ1dHRvbl9zdGFydDogXCLguITguKXguLTguIHguYDguJ7guLfguYjguK3guYDguKPguLTguYjguKHguIHguLLguKPguJXguKPguKfguIjguKrguK3guJpcIixcclxuICAgIHRleHRfZmV0Y2hpbmc6IFwi4LiB4Liy4Lij4LiU4Li24LiH4LiE4Lin4Liy4Lih4LiX4LmJ4Liy4LiX4Liy4LiiXCIsXHJcbiAgICB0ZXh0X3NvbHZpbmc6IFwi4Lii4Li34LiZ4Lii4Lix4LiZ4Lin4LmI4Liy4LiE4Li44LiT4LmA4Lib4LmH4LiZ4Lih4LiZ4Li44Lip4Lii4LmMLi4uXCIsXHJcbiAgICB0ZXh0X2NvbXBsZXRlZDogXCLguInguLHguJnguYDguJvguYfguJnguKHguJnguLjguKnguKLguYxcIixcclxuICAgIHRleHRfY29tcGxldGVkX3NyOiBcIuC4geC4suC4o+C4leC4o+C4p+C4iOC4quC4reC4muC4quC5geC4m+C4oeC4reC4seC4leC5guC4meC4oeC4seC4leC4tOC5gOC4quC4o+C5h+C4iOC4quC4oeC4muC4ueC4o+C4k+C5jFwiLFxyXG4gICAgdGV4dF9leHBpcmVkOiBcIuC4geC4suC4o+C4leC4o+C4p+C4iOC4quC4reC4miDguJXguYjguK3guJXguYnguLLguJnguKvguLjguYjguJnguKLguJnguJXguYwg4Lir4Lih4LiU4Lit4Liy4Lii4Li4XCIsXHJcbiAgICBidXR0b25fcmVzdGFydDogXCLguKPguLXguKrguJXguLLguKPguYzguJdcIixcclxuICAgIHRleHRfZXJyb3I6IFwi4LiB4Liy4Lij4Lii4Li34LiZ4Lii4Lix4LiZ4Lil4LmJ4Lih4LmA4Lir4Lil4LinXCIsXHJcbiAgICBidXR0b25fcmV0cnk6IFwi4Lil4Lit4LiH4LmD4Lir4Lih4LmIXCIsXHJcbiAgICB0ZXh0X2ZldGNoX2Vycm9yOiBcIuC5hOC4oeC5iOC4quC4suC4oeC4suC4o+C4luC5gOC4iuC4t+C5iOC4reC4oeC4leC5iOC4reC5hOC4lOC5iVwiXHJcbn07XHJcbi8vIFNvdXRoIEtvcmVhblxyXG5jb25zdCBMQU5HX0tSID0ge1xyXG4gICAgdGV4dF9pbml0OiBcIuy0iOq4sO2ZlCDspJFcIixcclxuICAgIHRleHRfcmVhZHk6IFwiQW50aS1Sb2JvdCDqsoDspp1cIixcclxuICAgIGJ1dHRvbl9zdGFydDogXCLqsoDspp3snYQg7JyE7ZW0IO2BtOumre2VtCDso7zshLjsmpRcIixcclxuICAgIHRleHRfZmV0Y2hpbmc6IFwi6rKA7KadIOykgOu5hCDspJFcIixcclxuICAgIHRleHRfc29sdmluZzogXCLqsoDspp0g7KSRXCIsXHJcbiAgICB0ZXh0X2NvbXBsZXRlZDogXCLqsoDspp3snbQg7JmE66OM65CY7JeI7Iq164uI64ukXCIsXHJcbiAgICB0ZXh0X2NvbXBsZXRlZF9zcjogXCLsnpDrj5kg7Iqk7Yy4IO2ZleyduCDsmYTro4xcIixcclxuICAgIHRleHRfZXhwaXJlZDogXCJBbnRpLVJvYm90IOqygOymnSDrp4zro4xcIixcclxuICAgIGJ1dHRvbl9yZXN0YXJ0OiBcIuuLpOyLnCDsi5zsnpHtlanri4jri6RcIixcclxuICAgIHRleHRfZXJyb3I6IFwi6rKA7KadIOyLpO2MqFwiLFxyXG4gICAgYnV0dG9uX3JldHJ5OiBcIuuLpOyLnCDsi5zrj4TtlbQg7KO87IS47JqUXCIsXHJcbiAgICB0ZXh0X2ZldGNoX2Vycm9yOiBcIuyXsOqysO2VmOyngCDrqrvtlojsirXri4jri6RcIixcclxufTtcclxuY29uc3QgbG9jYWxpemF0aW9ucyA9IHtcclxuICAgIGVuOiBMQU5HX0VOLFxyXG4gICAgZGU6IExBTkdfREUsXHJcbiAgICBubDogTEFOR19OTCxcclxuICAgIGZyOiBMQU5HX0ZSLFxyXG4gICAgaXQ6IExBTkdfSVQsXHJcbiAgICBwdDogTEFOR19QVCxcclxuICAgIGVzOiBMQU5HX0VTLFxyXG4gICAgY2E6IExBTkdfQ0EsXHJcbiAgICBqYTogTEFOR19KQSxcclxuICAgIGRhOiBMQU5HX0RBLFxyXG4gICAgcnU6IExBTkdfUlUsXHJcbiAgICBzdjogTEFOR19TVixcclxuICAgIHRyOiBMQU5HX1RSLFxyXG4gICAgZWw6IExBTkdfRUwsXHJcbiAgICB1azogTEFOR19VSyxcclxuICAgIGJnOiBMQU5HX0JHLFxyXG4gICAgY3M6IExBTkdfQ1MsXHJcbiAgICBzazogTEFOR19TSyxcclxuICAgIG5vOiBMQU5HX05PLFxyXG4gICAgZmk6IExBTkdfRkksXHJcbiAgICBsdjogTEFOR19MVixcclxuICAgIGx0OiBMQU5HX0xULFxyXG4gICAgcGw6IExBTkdfUEwsXHJcbiAgICBldDogTEFOR19FVCxcclxuICAgIGhyOiBMQU5HX0hSLFxyXG4gICAgc3I6IExBTkdfU1IsXHJcbiAgICBzbDogTEFOR19TTCxcclxuICAgIGh1OiBMQU5HX0hVLFxyXG4gICAgcm86IExBTkdfUk8sXHJcbiAgICB6aDogTEFOR19aSCxcclxuICAgIHpoX3R3OiBMQU5HX1pIX1RXLFxyXG4gICAgdmk6IExBTkdfVkksXHJcbiAgICBoZTogTEFOR19IRSxcclxuICAgIHRoOiBMQU5HX1RILFxyXG4gICAga3I6IExBTkdfS1IsXHJcbiAgICAvLyBhbHRlcm5hdGl2ZSBsYW5ndWFnZSBjb2Rlc1xyXG4gICAgbmI6IExBTkdfTk8sXHJcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZURpYWdub3N0aWNzQnVmZmVyKHNvbHZlcklELCB0aW1lVG9Tb2x2ZWQpIHtcbiAgICBjb25zdCBhcnIgPSBuZXcgVWludDhBcnJheSgzKTtcbiAgICBjb25zdCB2aWV3ID0gbmV3IERhdGFWaWV3KGFyci5idWZmZXIpO1xuICAgIHZpZXcuc2V0VWludDgoMCwgc29sdmVySUQpO1xuICAgIHZpZXcuc2V0VWludDE2KDEsIHRpbWVUb1NvbHZlZCk7XG4gICAgcmV0dXJuIGFycjtcbn1cblxudmFyIHdvcmtlclN0cmluZyA9IFwiIWZ1bmN0aW9uKCl7XFxcInVzZSBzdHJpY3RcXFwiO2NvbnN0IEE9XFxcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky9cXFwiLEk9XFxcIj1cXFwiLmNoYXJDb2RlQXQoMCksZz1uZXcgVWludDhBcnJheSgyNTYpO2ZvcihsZXQgST0wO0k8QS5sZW5ndGg7SSsrKWdbQS5jaGFyQ29kZUF0KEkpXT1JO2Z1bmN0aW9uIEMoQSl7Y29uc3QgST17fSxnPUEuZXhwb3J0cyxDPWcubWVtb3J5LFE9Zy5fX2FsbG9jLHQ9Zy5fX3JldGFpbixCPWcuX19ydHRpX2Jhc2V8fC0xO3JldHVybiBJLl9fYWxsb2NBcnJheT0oQSxJKT0+e2NvbnN0IGc9ZnVuY3Rpb24oQSl7cmV0dXJuIG5ldyBVaW50MzJBcnJheShDLmJ1ZmZlcilbKEIrND4+PjIpKzIqQV19KEEpLGU9MzEtTWF0aC5jbHozMihnPj4+NiYzMSksbz1JLmxlbmd0aCxpPVEobzw8ZSwwKSxyPVEoMTIsQSksbj1uZXcgVWludDMyQXJyYXkoQy5idWZmZXIpO25bciswPj4+Ml09dChpKSxuW3IrND4+PjJdPWksbltyKzg+Pj4yXT1vPDxlO2NvbnN0IEU9Qy5idWZmZXIscz1uZXcgVWludDhBcnJheShFKTtpZigxNjM4NCZnKWZvcihsZXQgQT0wO0E8bzsrK0Epc1soaT4+PmUpK0FdPXQoSVtBXSk7ZWxzZSBzLnNldChJLGk+Pj5lKTtyZXR1cm4gcn0sSS5fX2dldFVpbnQ4QXJyYXk9QT0+e2NvbnN0IEk9bmV3IFVpbnQzMkFycmF5KEMuYnVmZmVyKSxnPUlbQSs0Pj4+Ml07cmV0dXJuIG5ldyBVaW50OEFycmF5KEMuYnVmZmVyLGcsSVtnLTQ+Pj4yXT4+PjApfSxmdW5jdGlvbihBLEk9e30pe2NvbnN0IGc9QS5fX2FyZ3VtZW50c0xlbmd0aD9JPT57QS5fX2FyZ3VtZW50c0xlbmd0aC52YWx1ZT1JfTpBLl9fc2V0QXJndW1lbnRzTGVuZ3RofHxBLl9fc2V0YXJnY3x8KCgpPT4oe30pKTtmb3IoY29uc3QgQyBpbiBBKXtpZighT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKEEsQykpY29udGludWU7Y29uc3QgUT1BW0NdLHQ9Qy5zcGxpdChcXFwiLlxcXCIpWzBdO1xcXCJmdW5jdGlvblxcXCI9PXR5cGVvZiBRJiZRIT09Zz8oSVt0XT0oLi4uQSk9PihnKEEubGVuZ3RoKSxRKC4uLkEpKSkub3JpZ2luYWw9UTpJW3RdPVF9cmV0dXJuIEl9KGcsSSl9Y2xhc3MgUXtjb25zdHJ1Y3RvcihBKXt0aGlzLmI9bmV3IFVpbnQ4QXJyYXkoMTI4KSx0aGlzLmg9bmV3IFVpbnQzMkFycmF5KDE2KSx0aGlzLnQ9MCx0aGlzLmM9MCx0aGlzLnY9bmV3IFVpbnQzMkFycmF5KDMyKSx0aGlzLm09bmV3IFVpbnQzMkFycmF5KDMyKSx0aGlzLm91dGxlbj1BfX1mdW5jdGlvbiB0KEEsSSl7cmV0dXJuIEFbSV1eQVtJKzFdPDw4XkFbSSsyXTw8MTZeQVtJKzNdPDwyNH1mdW5jdGlvbiBCKEEsSSxnLEMsUSx0LEIsZSl7Y29uc3Qgbz1JW0JdLGk9SVtCKzFdLHI9SVtlXSxuPUlbZSsxXTtsZXQgRSxzLHcsYyxhPUFbZ10sRD1BW2crMV0saD1BW0NdLGY9QVtDKzFdLHk9QVtRXSxsPUFbUSsxXSx1PUFbdF0sTj1BW3QrMV07RT1hK2gscz0oYSZofChhfGgpJn5FKT4+PjMxLGE9RSxEPUQrZitzLEU9YStvLHM9KGEmb3woYXxvKSZ+RSk+Pj4zMSxhPUUsRD1EK2krcyx3PXVeYSxjPU5eRCx1PWMsTj13LEU9eSt1LHM9KHkmdXwoeXx1KSZ+RSk+Pj4zMSx5PUUsbD1sK04rcyx3PWheeSxjPWZebCxoPXc+Pj4yNF5jPDw4LGY9Yz4+PjI0Xnc8PDgsRT1hK2gscz0oYSZofChhfGgpJn5FKT4+PjMxLGE9RSxEPUQrZitzLEU9YStyLHM9KGEmcnwoYXxyKSZ+RSk+Pj4zMSxhPUUsRD1EK24rcyx3PXVeYSxjPU5eRCx1PXc+Pj4xNl5jPDwxNixOPWM+Pj4xNl53PDwxNixFPXkrdSxzPSh5JnV8KHl8dSkmfkUpPj4+MzEseT1FLGw9bCtOK3Msdz1oXnksYz1mXmwsaD1jPj4+MzFedzw8MSxmPXc+Pj4zMV5jPDwxLEFbZ109YSxBW2crMV09RCxBW0NdPWgsQVtDKzFdPWYsQVtRXT15LEFbUSsxXT1sLEFbdF09dSxBW3QrMV09Tn1jb25zdCBlPVs0MDg5MjM1NzIwLDE3NzkwMzM3MDMsMjIyNzg3MzU5NSwzMTQ0MTM0Mjc3LDQyNzExNzU3MjMsMTAxMzkwNDI0MiwxNTk1NzUwMTI5LDI3NzM0ODA3NjIsMjkxNzU2NTEzNywxMzU5ODkzMTE5LDcyNTUxMTE5OSwyNjAwODIyOTI0LDQyMTUzODk1NDcsNTI4NzM0NjM1LDMyNzAzMzIwOSwxNTQxNDU5MjI1XSxvPVswLDIsNCw2LDgsMTAsMTIsMTQsMTYsMTgsMjAsMjIsMjQsMjYsMjgsMzAsMjgsMjAsOCwxNiwxOCwzMCwyNiwxMiwyLDI0LDAsNCwyMiwxNCwxMCw2LDIyLDE2LDI0LDAsMTAsNCwzMCwyNiwyMCwyOCw2LDEyLDE0LDIsMTgsOCwxNCwxOCw2LDIsMjYsMjQsMjIsMjgsNCwxMiwxMCwyMCw4LDAsMzAsMTYsMTgsMCwxMCwxNCw0LDgsMjAsMzAsMjgsMiwyMiwyNCwxMiwxNiw2LDI2LDQsMjQsMTIsMjAsMCwyMiwxNiw2LDgsMjYsMTQsMTAsMzAsMjgsMiwxOCwyNCwxMCwyLDMwLDI4LDI2LDgsMjAsMCwxNCwxMiw2LDE4LDQsMTYsMjIsMjYsMjIsMTQsMjgsMjQsMiw2LDE4LDEwLDAsMzAsOCwxNiwxMiw0LDIwLDEyLDMwLDI4LDE4LDIyLDYsMCwxNiwyNCw0LDI2LDE0LDIsOCwyMCwxMCwyMCw0LDE2LDgsMTQsMTIsMiwxMCwzMCwyMiwxOCwyOCw2LDI0LDI2LDAsMCwyLDQsNiw4LDEwLDEyLDE0LDE2LDE4LDIwLDIyLDI0LDI2LDI4LDMwLDI4LDIwLDgsMTYsMTgsMzAsMjYsMTIsMiwyNCwwLDQsMjIsMTQsMTAsNl07ZnVuY3Rpb24gaShBLEkpe2NvbnN0IGc9QS52LEM9QS5tO2ZvcihsZXQgST0wO0k8MTY7SSsrKWdbSV09QS5oW0ldLGdbSSsxNl09ZVtJXTtnWzI0XT1nWzI0XV5BLnQsZ1syNV09Z1syNV1eQS50LzQyOTQ5NjcyOTYsSSYmKGdbMjhdPX5nWzI4XSxnWzI5XT1+Z1syOV0pO2ZvcihsZXQgST0wO0k8MzI7SSsrKUNbSV09dChBLmIsNCpJKTtmb3IobGV0IEE9MDtBPDEyO0ErKylCKGcsQywwLDgsMTYsMjQsb1sxNipBKzBdLG9bMTYqQSsxXSksQihnLEMsMiwxMCwxOCwyNixvWzE2KkErMl0sb1sxNipBKzNdKSxCKGcsQyw0LDEyLDIwLDI4LG9bMTYqQSs0XSxvWzE2KkErNV0pLEIoZyxDLDYsMTQsMjIsMzAsb1sxNipBKzZdLG9bMTYqQSs3XSksQihnLEMsMCwxMCwyMCwzMCxvWzE2KkErOF0sb1sxNipBKzldKSxCKGcsQywyLDEyLDIyLDI0LG9bMTYqQSsxMF0sb1sxNipBKzExXSksQihnLEMsNCwxNCwxNiwyNixvWzE2KkErMTJdLG9bMTYqQSsxM10pLEIoZyxDLDYsOCwxOCwyOCxvWzE2KkErMTRdLG9bMTYqQSsxNV0pO2ZvcihsZXQgST0wO0k8MTY7SSsrKUEuaFtJXT1BLmhbSV1eZ1tJXV5nW0krMTZdfWZ1bmN0aW9uIHIoQSxJKXtmb3IobGV0IEk9MDtJPDE2O0krKylBLmhbSV09ZVtJXTtBLmIuc2V0KEkpLEEuaFswXV49MTY4NDI3NTJeQS5vdXRsZW59YXN5bmMgZnVuY3Rpb24gbigpe3JldHVybihBLEksZz00Mjk0OTY3Mjk1KT0+e2NvbnN0IEM9ZnVuY3Rpb24oQSxJLGcpe2lmKDEyOCE9QS5sZW5ndGgpdGhyb3cgRXJyb3IoXFxcIkludmFsaWQgaW5wdXRcXFwiKTtjb25zdCBDPUEuYnVmZmVyLHQ9bmV3IERhdGFWaWV3KEMpLEI9bmV3IFEoMzIpO0IudD0xMjg7Y29uc3QgZT10LmdldFVpbnQzMigxMjQsITApLG89ZStnO2ZvcihsZXQgZz1lO2c8bztnKyspaWYodC5zZXRVaW50MzIoMTI0LGcsITApLHIoQixBKSxpKEIsITApLEIuaFswXTxJKXJldHVybiAwPT1BU0NfVEFSR0VUP25ldyBVaW50OEFycmF5KEIuaC5idWZmZXIpOlVpbnQ4QXJyYXkud3JhcChCLmguYnVmZmVyKTtyZXR1cm4gbmV3IFVpbnQ4QXJyYXkoMCl9KEEsSSxnKTtyZXR1cm5bQSxDXX19bGV0IEUscztVaW50OEFycmF5LnByb3RvdHlwZS5zbGljZXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KFVpbnQ4QXJyYXkucHJvdG90eXBlLFxcXCJzbGljZVxcXCIse3ZhbHVlOmZ1bmN0aW9uKEEsSSl7cmV0dXJuIG5ldyBVaW50OEFycmF5KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRoaXMsQSxJKSl9fSksc2VsZi5BU0NfVEFSR0VUPTA7Y29uc3Qgdz1uZXcgUHJvbWlzZSgoQT0+cz1BKSk7c2VsZi5vbmVycm9yPUE9PntzZWxmLnBvc3RNZXNzYWdlKHt0eXBlOlxcXCJlcnJvclxcXCIsbWVzc2FnZTpKU09OLnN0cmluZ2lmeShBKX0pfSxzZWxmLm9ubWVzc2FnZT1hc3luYyBBPT57Y29uc3QgUT1BLmRhdGE7dHJ5e2lmKFxcXCJzb2x2ZXJcXFwiPT09US50eXBlKXtpZihRLmZvcmNlSlMpe0U9MTtjb25zdCBBPWF3YWl0IG4oKTtzKEEpfWVsc2UgdHJ5e0U9Mjtjb25zdCBBPVdlYkFzc2VtYmx5LmNvbXBpbGUoZnVuY3Rpb24oQSl7Y29uc3QgQz1BLmxlbmd0aDtsZXQgUT0zKkM+Pj4yO0EuY2hhckNvZGVBdChDLTEpPT09SSYmUS0tLEEuY2hhckNvZGVBdChDLTIpPT09SSYmUS0tO2NvbnN0IHQ9bmV3IFVpbnQ4QXJyYXkoUSk7Zm9yKGxldCBJPTAsUT0wO0k8QztJKz00KXtjb25zdCBDPWdbQS5jaGFyQ29kZUF0KEkrMCldLEI9Z1tBLmNoYXJDb2RlQXQoSSsxKV0sZT1nW0EuY2hhckNvZGVBdChJKzIpXSxvPWdbQS5jaGFyQ29kZUF0KEkrMyldO3RbUSsrXT1DPDwyfEI+PjQsdFtRKytdPSgxNSZCKTw8NHxlPj4yLHRbUSsrXT0oMyZlKTw8Nnw2MyZvfXJldHVybiB0fShcXFwiQUdGemJRRUFBQUFCS2doZ0FBQmdBbjkvQUdBRGYzOS9BWDlnQVg4QVlBUi9mMzkvQUdBQUFYOWdBWDhCZjJBQ2YzOEJmd0lOQVFObGJuWUZZV0p2Y25RQUJBTU1Dd2NHQXdBQUFRSUZBUUlBQlFNQkFBRUdGZ1IvQVVFQUMzOEJRUUFMZndCQkF3dC9BRUhnREFzSGJna0diV1Z0YjNKNUFnQUhYMTloYkd4dll3QUJDRjlmY21WMFlXbHVBQUlKWDE5eVpXeGxZWE5sQUFNSlgxOWpiMnhzWldOMEFBUUhYMTl5WlhObGRBQUZDMTlmY25SMGFWOWlZWE5sQXdNTlZXbHVkRGhCY25KaGVWOUpSQU1DREhOdmJIWmxRbXhoYTJVeVlnQUtDQUVMQ3ZRU0M1SUJBUVYvSUFCQjhQLy8vd05MQkVBQUN5TUJRUkJxSWdRZ0FFRVBha0Z3Y1NJQ1FSQWdBa0VRU3hzaUJtb2lBajhBSWdWQkVIUWlBMHNFUUNBRklBSWdBMnRCLy84RGFrR0FnSHh4UVJCMklnTWdCU0FEU2h0QUFFRUFTQVJBSUFOQUFFRUFTQVJBQUFzTEN5QUNKQUVnQkVFUWF5SUNJQVkyQWdBZ0FrRUJOZ0lFSUFJZ0FUWUNDQ0FDSUFBMkFnd2dCQXNFQUNBQUN3TUFBUXNEQUFFTEJnQWpBQ1FCQzdzQ0FRRi9Ba0FnQVVVTkFDQUFRUUE2QUFBZ0FDQUJha0VFYXlJQ1FRQTZBQU1nQVVFQ1RRMEFJQUJCQURvQUFTQUFRUUE2QUFJZ0FrRUFPZ0FDSUFKQkFEb0FBU0FCUVFaTkRRQWdBRUVBT2dBRElBSkJBRG9BQUNBQlFRaE5EUUFnQUVFQUlBQnJRUU54SWdKcUlnQkJBRFlDQUNBQUlBRWdBbXRCZkhFaUFtcEJIR3NpQVVFQU5nSVlJQUpCQ0UwTkFDQUFRUUEyQWdRZ0FFRUFOZ0lJSUFGQkFEWUNFQ0FCUVFBMkFoUWdBa0VZVFEwQUlBQkJBRFlDRENBQVFRQTJBaEFnQUVFQU5nSVVJQUJCQURZQ0dDQUJRUUEyQWdBZ0FVRUFOZ0lFSUFGQkFEWUNDQ0FCUVFBMkFnd2dBQ0FBUVFSeFFSaHFJZ0ZxSVFBZ0FpQUJheUVCQTBBZ0FVRWdUd1JBSUFCQ0FEY0RBQ0FBUWdBM0F3Z2dBRUlBTndNUUlBQkNBRGNER0NBQlFTQnJJUUVnQUVFZ2FpRUFEQUVMQ3dzTGNnQUNmeUFBUlFSQVFReEJBaEFCSVFBTElBQUxRUUEyQWdBZ0FFRUFOZ0lFSUFCQkFEWUNDQ0FCUWZELy8vOERJQUoyU3dSQVFjQUtRZkFLUVJKQk9SQUFBQXNnQVNBQ2RDSUJRUUFRQVNJQ0lBRVFCaUFBS0FJQUdpQUFJQUkyQWdBZ0FDQUNOZ0lFSUFBZ0FUWUNDQ0FBQzg4QkFRSi9RYUFCUVFBUUFTSUFRUXhCQXhBQlFZQUJRUUFRQnpZQ0FDQUFRUXhCQkJBQlFRaEJBeEFITmdJRUlBQkNBRGNEQ0NBQVFRQTJBaEFnQUVJQU53TVlJQUJDQURjRElDQUFRZ0EzQXlnZ0FFSUFOd013SUFCQ0FEY0RPQ0FBUWdBM0EwQWdBRUlBTndOSUlBQkNBRGNEVUNBQVFnQTNBMWdnQUVJQU53TmdJQUJDQURjRGFDQUFRZ0EzQTNBZ0FFSUFOd040SUFCQ0FEY0RnQUVnQUVJQU53T0lBU0FBUWdBM0E1QUJRWUFCUVFVUUFTSUJRWUFCRUFZZ0FDQUJOZ0tZQVNBQVFTQTJBcHdCSUFBTDJBa0NBMzhTZmlBQUtBSUVJUUlnQUNnQ21BRWhBd05BSUFSQmdBRklCRUFnQXlBRWFpQUJJQVJxS1FNQU53TUFJQVJCQ0dvaEJBd0JDd3NnQWlnQ0JDa0RBQ0VNSUFJb0FnUXBBd2doRFNBQ0tBSUVLUU1RSVE0Z0FpZ0NCQ2tER0NFUElBSW9BZ1FwQXlBaEJTQUNLQUlFS1FNb0lRc2dBaWdDQkNrRE1DRUdJQUlvQWdRcEF6Z2hCMEtJa3ZPZC84ejVoT29BSVFoQ3U4NnFwdGpRNjdPN2Z5RUpRcXZ3MC9TdjdyeTNQQ0VRUXZIdDlQaWxwLzJucFg4aENpQUFLUU1JUXRHRm11LzZ6NVNIMFFDRklSRkNuOWo1MmNLUjJvS2JmeUVTUXBTRithWEF5b20rWUNFVFF2bkMrSnVSbzdQdzJ3QWhGRUVBSVFRRFFDQUVRY0FCU0FSQUlBVWdDQ0FSSUF3Z0JTQURJQVJCZ0FocUlnRXRBQUJCQTNScUtRTUFmSHdpQllWQ0lJb2lESHdpQ0lWQ0dJb2lFU0FJSUF3Z0JTQVJJQU1nQVMwQUFVRURkR29wQXdCOGZDSU1oVUlRaWlJSWZDSVZoVUkvaWlFRklBc2dDU0FTSUEwZ0N5QURJQUV0QUFKQkEzUnFLUU1BZkh3aURZVkNJSW9pQ1h3aUVZVkNHSW9oQ3lBR0lCQWdFeUFPSUFZZ0F5QUJMUUFFUVFOMGFpa0RBSHg4SWdhRlFpQ0tJZzU4SWhDRlFoaUtJaElnRUNBT0lBWWdFaUFESUFFdEFBVkJBM1JxS1FNQWZId2lEb1ZDRUlvaUUzd2lFSVZDUDRvaEJpQUhJQW9nRkNBUElBY2dBeUFCTFFBR1FRTjBhaWtEQUh4OElnZUZRaUNLSWc5OElncUZRaGlLSWhJZ0NpQVBJQWNnRWlBRElBRXRBQWRCQTNScUtRTUFmSHdpRDRWQ0VJb2lDbndpRW9WQ1A0b2hCeUFRSUFvZ0RDQVJJQWtnRFNBTElBTWdBUzBBQTBFRGRHb3BBd0I4ZkNJTmhVSVFpaUlKZkNJV0lBdUZRaitLSWd3Z0F5QUJMUUFJUVFOMGFpa0RBSHg4SWhDRlFpQ0tJZ3A4SWdzZ0VDQUxJQXlGUWhpS0loRWdBeUFCTFFBSlFRTjBhaWtEQUh4OElnd2dDb1ZDRUlvaUZId2lFQ0FSaFVJL2lpRUxJQVlnRWlBSUlBMGdCaUFESUFFdEFBcEJBM1JxS1FNQWZId2lEWVZDSUlvaUNId2lDb1ZDR0lvaUJpQU5JQVlnQXlBQkxRQUxRUU4wYWlrREFIeDhJZzBnQ0lWQ0VJb2lFU0FLZkNJS2hVSS9paUVHSUFjZ0ZTQUpJQTRnQnlBRElBRXRBQXhCQTNScUtRTUFmSHdpRG9WQ0lJb2lDSHdpQ1lWQ0dJb2lCeUFPSUFjZ0F5QUJMUUFOUVFOMGFpa0RBSHg4SWc0Z0NJVkNFSW9pRWlBSmZDSUloVUkvaWlFSElBVWdGaUFUSUE4Z0JTQURJQUV0QUE1QkEzUnFLUU1BZkh3aUQ0VkNJSW9pQ1h3aUZZVkNHSW9pQlNBUElBVWdBeUFCTFFBUFFRTjBhaWtEQUh4OElnOGdDWVZDRUlvaUV5QVZmQ0lKaFVJL2lpRUZJQVJCRUdvaEJBd0JDd3NnQWlnQ0JDQUNLQUlFS1FNQUlBZ2dESVdGTndNQUlBSW9BZ1FnQWlnQ0JDa0RDQ0FKSUEyRmhUY0RDQ0FDS0FJRUlBSW9BZ1FwQXhBZ0RpQVFoWVUzQXhBZ0FpZ0NCQ0FDS0FJRUtRTVlJQW9nRDRXRk53TVlJQUlvQWdRZ0FpZ0NCQ2tESUNBRklCR0ZoVGNESUNBQ0tBSUVJQUlvQWdRcEF5Z2dDeUFTaFlVM0F5Z2dBaWdDQkNBQ0tBSUVLUU13SUFZZ0U0V0ZOd013SUFJb0FnUWdBaWdDQkNrRE9DQUhJQlNGaFRjRE9DQUFJQXczQXhnZ0FDQU5Od01nSUFBZ0RqY0RLQ0FBSUE4M0F6QWdBQ0FGTndNNElBQWdDemNEUUNBQUlBWTNBMGdnQUNBSE53TlFJQUFnQ0RjRFdDQUFJQWszQTJBZ0FDQVFOd05vSUFBZ0NqY0RjQ0FBSUJFM0EzZ2dBQ0FTTndPQUFTQUFJQk0zQTRnQklBQWdGRGNEa0FFTDRRSUJCSDhnQUNnQ0NFR0FBVWNFUUVIUUNVR0FDa0VlUVFVUUFBQUxJQUFvQWdBaEJCQUlJZ01vQWdRaEJTQURRb0FCTndNSUlBUW9BbndpQUNBQ2FpRUdBMEFnQUNBR1NRUkFJQVFnQURZQ2ZDQURLQUlFSWdJb0FnUWdBeWdDbkFHdFFvaVM5NVgvelBtRTZnQ0ZOd01BSUFJb0FnUkN1ODZxcHRqUTY3TzdmemNEQ0NBQ0tBSUVRcXZ3MC9TdjdyeTNQRGNERUNBQ0tBSUVRdkh0OVBpbHAvMm5wWDgzQXhnZ0FpZ0NCRUxSaFpyditzK1VoOUVBTndNZ0lBSW9BZ1JDbjlqNTJjS1Iyb0tiZnpjREtDQUNLQUlFUXV2Nmh0cS90ZmJCSHpjRE1DQUNLQUlFUXZuQytKdVJvN1B3MndBM0F6Z2dBeUFFRUFrZ0JTZ0NCQ2tEQUtjZ0FVa0VRRUVBSUFVb0FnQWlBVUVRYXlnQ0RDSUNTd1JBUWZBTFFiQU1RYzBOUVFVUUFBQUxRUXhCQXhBQklnQWdBVFlDQUNBQUlBSTJBZ2dnQUNBQk5nSUVJQUFQQ3lBQVFRRnFJUUFNQVFzTFFReEJBeEFCUVFCQkFCQUhDd3dBUWFBTkpBQkJvQTBrQVFzTCtnUUpBRUdCQ0F1L0FRRUNBd1FGQmdjSUNRb0xEQTBPRHc0S0JBZ0pEdzBHQVF3QUFnc0hCUU1MQ0F3QUJRSVBEUW9PQXdZSEFRa0VCd2tEQVEwTUN3NENCZ1VLQkFBUENBa0FCUWNDQkFvUERnRUxEQVlJQXcwQ0RBWUtBQXNJQXdRTkJ3VVBEZ0VKREFVQkR3NE5CQW9BQndZRENRSUlDdzBMQnc0TUFRTUpCUUFQQkFnR0Fnb0dEdzRKQ3dNQUNBd0NEUWNCQkFvRkNnSUlCQWNHQVFVUEN3a09Bd3dOQUFBQkFnTUVCUVlIQ0FrS0N3d05EZzhPQ2dRSUNROE5CZ0VNQUFJTEJ3VURBRUhBQ1FzcEdnQUFBQUVBQUFBQkFBQUFHZ0FBQUVrQWJnQjJBR0VBYkFCcEFHUUFJQUJwQUc0QWNBQjFBSFFBUWZBSkN6RWlBQUFBQVFBQUFBRUFBQUFpQUFBQWN3QnlBR01BTHdCekFHOEFiQUIyQUdVQWNnQlhBR0VBY3dCdEFDNEFkQUJ6QUVHd0Nnc3JIQUFBQUFFQUFBQUJBQUFBSEFBQUFFa0FiZ0IyQUdFQWJBQnBBR1FBSUFCc0FHVUFiZ0JuQUhRQWFBQkI0QW9MTlNZQUFBQUJBQUFBQVFBQUFDWUFBQUIrQUd3QWFRQmlBQzhBWVFCeUFISUFZUUI1QUdJQWRRQm1BR1lBWlFCeUFDNEFkQUJ6QUVHZ0N3czFKZ0FBQUFFQUFBQUJBQUFBSmdBQUFINEFiQUJwQUdJQUx3QnpBSFFBWVFCMEFHa0FZd0JoQUhJQWNnQmhBSGtBTGdCMEFITUFRZUFMQ3pNa0FBQUFBUUFBQUFFQUFBQWtBQUFBU1FCdUFHUUFaUUI0QUNBQWJ3QjFBSFFBSUFCdkFHWUFJQUJ5QUdFQWJnQm5BR1VBUWFBTUN6TWtBQUFBQVFBQUFBRUFBQUFrQUFBQWZnQnNBR2tBWWdBdkFIUUFlUUJ3QUdVQVpBQmhBSElBY2dCaEFIa0FMZ0IwQUhNQVFlQU1DeTRHQUFBQUlBQUFBQUFBQUFBZ0FBQUFBQUFBQUNBQUFBQUFBQUFBWVFBQUFBSUFBQUFoQWdBQUFnQUFBQ1FDXFxcIikpLFE9YXdhaXQgYXN5bmMgZnVuY3Rpb24oQSl7Y29uc3QgST1hd2FpdCBhc3luYyBmdW5jdGlvbihBKXtjb25zdCBJPXtlbnY6e2Fib3J0KCl7dGhyb3cgRXJyb3IoXFxcIldhc20gYWJvcnRlZFxcXCIpfX19O3JldHVybntleHBvcnRzOkMoYXdhaXQgV2ViQXNzZW1ibHkuaW5zdGFudGlhdGUoQSxJKSl9fShBKSxnPUkuZXhwb3J0cy5fX3JldGFpbihJLmV4cG9ydHMuX19hbGxvY0FycmF5KEkuZXhwb3J0cy5VaW50OEFycmF5X0lELG5ldyBVaW50OEFycmF5KDEyOCkpKTtsZXQgUT1JLmV4cG9ydHMuX19nZXRVaW50OEFycmF5KGcpO3JldHVybihBLEMsdD00Mjk0OTY3Mjk1KT0+e1Euc2V0KEEpO2NvbnN0IEI9SS5leHBvcnRzLnNvbHZlQmxha2UyYihnLEMsdCk7UT1JLmV4cG9ydHMuX19nZXRVaW50OEFycmF5KGcpO2NvbnN0IGU9SS5leHBvcnRzLl9fZ2V0VWludDhBcnJheShCKTtyZXR1cm4gSS5leHBvcnRzLl9fcmVsZWFzZShCKSxbUSxlXX19KGF3YWl0IEEpO3MoUSl9Y2F0Y2goQSl7Y29uc29sZS5sb2coXFxcIkZyaWVuZGx5Q2FwdGNoYSBmYWlsZWQgdG8gaW5pdGlhbGl6ZSBXZWJBc3NlbWJseSwgZmFsbGluZyBiYWNrIHRvIEphdmFzY3JpcHQgc29sdmVyOiBcXFwiK0EudG9TdHJpbmcoKSksRT0xO2NvbnN0IEk9YXdhaXQgbigpO3MoSSl9c2VsZi5wb3N0TWVzc2FnZSh7dHlwZTpcXFwicmVhZHlcXFwiLHNvbHZlcjpFfSl9ZWxzZSBpZihcXFwic3RhcnRcXFwiPT09US50eXBlKXtjb25zdCBBPWF3YWl0IHc7c2VsZi5wb3N0TWVzc2FnZSh7dHlwZTpcXFwic3RhcnRlZFxcXCJ9KTtsZXQgSSxnPTA7Zm9yKGxldCBDPTA7QzwyNTY7QysrKXtRLnB1enpsZVNvbHZlcklucHV0WzEyM109Qztjb25zdFt0LEJdPUEoUS5wdXp6bGVTb2x2ZXJJbnB1dCxRLnRocmVzaG9sZCk7aWYoMCE9PUIubGVuZ3RoKXtJPXQ7YnJlYWt9Y29uc29sZS53YXJuKFxcXCJGQzogSW50ZXJuYWwgZXJyb3Igb3Igbm8gc29sdXRpb24gZm91bmRcXFwiKSxnKz1NYXRoLnBvdygyLDMyKS0xfWcrPW5ldyBEYXRhVmlldyhJLnNsaWNlKC00KS5idWZmZXIpLmdldFVpbnQzMigwLCEwKSxzZWxmLnBvc3RNZXNzYWdlKHt0eXBlOlxcXCJkb25lXFxcIixzb2x1dGlvbjpJLnNsaWNlKC04KSxoOmcscHV6emxlSW5kZXg6US5wdXp6bGVJbmRleCxwdXp6bGVOdW1iZXI6US5wdXp6bGVOdW1iZXJ9KX19Y2F0Y2goQSl7c2V0VGltZW91dCgoKCk9Pnt0aHJvdyBBfSkpfX19KCk7XCI7XG5cbi8vIERlZmVuc2l2ZSBpbml0IHRvIG1ha2UgaXQgZWFzaWVyIHRvIGludGVncmF0ZSB3aXRoIEdhdHNieSBhbmQgZnJpZW5kcy5cclxubGV0IFVSTDtcclxuaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIFVSTCA9IHdpbmRvdy5VUkwgfHwgd2luZG93LndlYmtpdFVSTDtcclxufVxyXG5jbGFzcyBXb3JrZXJHcm91cCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLndvcmtlcnMgPSBbXTtcclxuICAgICAgICB0aGlzLnB1enpsZU51bWJlciA9IDA7XHJcbiAgICAgICAgdGhpcy5udW1QdXp6bGVzID0gMDtcclxuICAgICAgICB0aGlzLnRocmVzaG9sZCA9IDA7XHJcbiAgICAgICAgdGhpcy5zdGFydFRpbWUgPSAwO1xyXG4gICAgICAgIHRoaXMucHJvZ3Jlc3MgPSAwO1xyXG4gICAgICAgIHRoaXMudG90YWxIYXNoZXMgPSAwO1xyXG4gICAgICAgIHRoaXMucHV6emxlU29sdmVySW5wdXRzID0gW107XHJcbiAgICAgICAgLy8gVGhlIGluZGV4IG9mIHRoZSBuZXh0IHB1enpsZVxyXG4gICAgICAgIHRoaXMucHV6emxlSW5kZXggPSAwO1xyXG4gICAgICAgIHRoaXMuc29sdXRpb25CdWZmZXIgPSBuZXcgVWludDhBcnJheSgwKTtcclxuICAgICAgICAvLyBpbml0aWFsaXplIHNvbWUgdmFsdWUsIHNvIHRzIGlzIGhhcHB5XHJcbiAgICAgICAgdGhpcy5zb2x2ZXJUeXBlID0gMTtcclxuICAgICAgICB0aGlzLnJlYWR5Q291bnQgPSAwO1xyXG4gICAgICAgIHRoaXMuc3RhcnRDb3VudCA9IDA7XHJcbiAgICAgICAgdGhpcy5wcm9ncmVzc0NhbGxiYWNrID0gKCkgPT4gMDtcclxuICAgICAgICB0aGlzLnJlYWR5Q2FsbGJhY2sgPSAoKSA9PiAwO1xyXG4gICAgICAgIHRoaXMuc3RhcnRlZENhbGxiYWNrID0gKCkgPT4gMDtcclxuICAgICAgICB0aGlzLmRvbmVDYWxsYmFjayA9ICgpID0+IDA7XHJcbiAgICAgICAgdGhpcy5lcnJvckNhbGxiYWNrID0gKCkgPT4gMDtcclxuICAgIH1cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy50ZXJtaW5hdGVXb3JrZXJzKCk7XHJcbiAgICAgICAgdGhpcy5wcm9ncmVzcyA9IDA7XHJcbiAgICAgICAgdGhpcy50b3RhbEhhc2hlcyA9IDA7XHJcbiAgICAgICAgdGhpcy5yZWFkeUNvdW50ID0gMDtcclxuICAgICAgICB0aGlzLnN0YXJ0Q291bnQgPSAwO1xyXG4gICAgICAgIC8vIFNldHVwIGZvdXIgd29ya2VycyBmb3Igbm93IC0gbGF0ZXIgd2UgY291bGQgY2FsY3VsYXRlIHRoaXMgZGVwZW5kaW5nIG9uIHRoZSBkZXZpY2VcclxuICAgICAgICB0aGlzLndvcmtlcnMgPSBuZXcgQXJyYXkoNCk7XHJcbiAgICAgICAgY29uc3Qgd29ya2VyQmxvYiA9IG5ldyBCbG9iKFt3b3JrZXJTdHJpbmddLCB7IHR5cGU6IFwidGV4dC9qYXZhc2NyaXB0XCIgfSk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLndvcmtlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy53b3JrZXJzW2ldID0gbmV3IFdvcmtlcihVUkwuY3JlYXRlT2JqZWN0VVJMKHdvcmtlckJsb2IpKTtcclxuICAgICAgICAgICAgdGhpcy53b3JrZXJzW2ldLm9uZXJyb3IgPSAoZSkgPT4gdGhpcy5lcnJvckNhbGxiYWNrKGUpO1xyXG4gICAgICAgICAgICB0aGlzLndvcmtlcnNbaV0ub25tZXNzYWdlID0gKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBlLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWRhdGEpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEudHlwZSA9PT0gXCJyZWFkeVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWFkeUNvdW50Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zb2x2ZXJUeXBlID0gZGF0YS5zb2x2ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gV2UgYXJlIHJlYWR5LCB3aGVuIGFsbCB3b3JrZXJzIGFyZSByZWFkeVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlYWR5Q291bnQgPT0gdGhpcy53b3JrZXJzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlYWR5Q2FsbGJhY2soKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChkYXRhLnR5cGUgPT09IFwic3RhcnRlZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFydENvdW50Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gV2Ugc3RhcnRlZCwgd2hlbiB0aGUgZmlyc3Qgd29ya2VyIHN0YXJ0cyB3b3JraW5nXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhcnRDb3VudCA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFydGVkQ2FsbGJhY2soKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChkYXRhLnR5cGUgPT09IFwiZG9uZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEucHV6emxlTnVtYmVyICE9PSB0aGlzLnB1enpsZU51bWJlcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuOyAvLyBzb2x1dGlvbiBiZWxvbmdzIHRvIGEgcHJldmlvdXMgcHV6emxlXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucHV6emxlSW5kZXggPCB0aGlzLnB1enpsZVNvbHZlcklucHV0cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53b3JrZXJzW2ldLnBvc3RNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic3RhcnRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB1enpsZVNvbHZlcklucHV0OiB0aGlzLnB1enpsZVNvbHZlcklucHV0c1t0aGlzLnB1enpsZUluZGV4XSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocmVzaG9sZDogdGhpcy50aHJlc2hvbGQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdXp6bGVJbmRleDogdGhpcy5wdXp6bGVJbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB1enpsZU51bWJlcjogdGhpcy5wdXp6bGVOdW1iZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnB1enpsZUluZGV4Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3MrKztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvdGFsSGFzaGVzICs9IGRhdGEuaDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2dyZXNzQ2FsbGJhY2soe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuOiB0aGlzLm51bVB1enpsZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGg6IHRoaXMudG90YWxIYXNoZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHQ6IChEYXRlLm5vdygpIC0gdGhpcy5zdGFydFRpbWUpIC8gMTAwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaTogdGhpcy5wcm9ncmVzcyxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNvbHV0aW9uQnVmZmVyLnNldChkYXRhLnNvbHV0aW9uLCBkYXRhLnB1enpsZUluZGV4ICogOCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gV2UgYXJlIGRvbmUsIHdoZW4gYWxsIHB1enpsZXMgaGF2ZSBiZWVuIHNvbHZlZFxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb2dyZXNzID09IHRoaXMubnVtUHV6emxlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b3RhbFRpbWUgPSAoRGF0ZS5ub3coKSAtIHRoaXMuc3RhcnRUaW1lKSAvIDEwMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG9uZUNhbGxiYWNrKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvbHV0aW9uOiB0aGlzLnNvbHV0aW9uQnVmZmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaDogdGhpcy50b3RhbEhhc2hlcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQ6IHRvdGFsVGltZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpYWdub3N0aWNzOiBjcmVhdGVEaWFnbm9zdGljc0J1ZmZlcih0aGlzLnNvbHZlclR5cGUsIHRvdGFsVGltZSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb2x2ZXI6IHRoaXMuc29sdmVyVHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZGF0YS50eXBlID09PSBcImVycm9yXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yQ2FsbGJhY2soZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2V0dXBTb2x2ZXIoZm9yY2VKUyA9IGZhbHNlKSB7XHJcbiAgICAgICAgY29uc3QgbXNnID0geyB0eXBlOiBcInNvbHZlclwiLCBmb3JjZUpTOiBmb3JjZUpTIH07XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLndvcmtlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy53b3JrZXJzW2ldLnBvc3RNZXNzYWdlKG1zZyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3RhcnQocHV6emxlKSB7XHJcbiAgICAgICAgdGhpcy5wdXp6bGVTb2x2ZXJJbnB1dHMgPSBnZXRQdXp6bGVTb2x2ZXJJbnB1dHMocHV6emxlLmJ1ZmZlciwgcHV6emxlLm4pO1xyXG4gICAgICAgIHRoaXMuc29sdXRpb25CdWZmZXIgPSBuZXcgVWludDhBcnJheSg4ICogcHV6emxlLm4pO1xyXG4gICAgICAgIHRoaXMubnVtUHV6emxlcyA9IHB1enpsZS5uO1xyXG4gICAgICAgIHRoaXMudGhyZXNob2xkID0gcHV6emxlLnRocmVzaG9sZDtcclxuICAgICAgICB0aGlzLnB1enpsZUluZGV4ID0gMDtcclxuICAgICAgICB0aGlzLnB1enpsZU51bWJlcisrO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy53b3JrZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnB1enpsZUluZGV4ID09PSB0aGlzLnB1enpsZVNvbHZlcklucHV0cy5sZW5ndGgpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgdGhpcy53b3JrZXJzW2ldLnBvc3RNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwic3RhcnRcIixcclxuICAgICAgICAgICAgICAgIHB1enpsZVNvbHZlcklucHV0OiB0aGlzLnB1enpsZVNvbHZlcklucHV0c1tpXSxcclxuICAgICAgICAgICAgICAgIHRocmVzaG9sZDogdGhpcy50aHJlc2hvbGQsXHJcbiAgICAgICAgICAgICAgICBwdXp6bGVJbmRleDogdGhpcy5wdXp6bGVJbmRleCxcclxuICAgICAgICAgICAgICAgIHB1enpsZU51bWJlcjogdGhpcy5wdXp6bGVOdW1iZXIsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLnB1enpsZUluZGV4Kys7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGVybWluYXRlV29ya2VycygpIHtcclxuICAgICAgICBpZiAodGhpcy53b3JrZXJzLmxlbmd0aCA9PSAwKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLndvcmtlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy53b3JrZXJzW2ldLnRlcm1pbmF0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLndvcmtlcnMgPSBbXTtcclxuICAgIH1cclxufVxuXG5jb25zdCBQVVpaTEVfRU5EUE9JTlRfVVJMID0gXCJodHRwczovL2FwaS5mcmllbmRseWNhcHRjaGEuY29tL2FwaS92MS9wdXp6bGVcIjtcclxuY2xhc3MgV2lkZ2V0SW5zdGFuY2Uge1xyXG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgb3B0aW9ucyA9IHt9KSB7XHJcbiAgICAgICAgdGhpcy53b3JrZXJHcm91cCA9IG5ldyBXb3JrZXJHcm91cCgpO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBjYXB0Y2hhIGhhcyBiZWVuIHN1Y2Nlc2Z1bGx5IHNvbHZlZC5cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLnZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogU29tZSBlcnJvcnMgbWF5IGNhdXNlIGEgbmVlZCBmb3IgdGhlICh3b3JrZXIpIHRvIGJlIHJlaW5pdGlhbGl6ZWQuIElmIHRoaXMgaXNcclxuICAgICAgICAgKiB0cnVlIGBpbml0YCB3aWxsIGJlIGNhbGxlZCBhZ2FpbiB3aGVuIHN0YXJ0IGlzIGNhbGxlZC5cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLm5lZWRzUmVJbml0ID0gZmFsc2U7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogU3RhcnQoKSBoYXMgYmVlbiBjYWxsZWQgYXQgbGVhc3Qgb25jZSBldmVyLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuaGFzQmVlblN0YXJ0ZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmhhc0JlZW5EZXN0cm95ZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm9wdHMgPSBPYmplY3QuYXNzaWduKHtcclxuICAgICAgICAgICAgZm9yY2VKU0ZhbGxiYWNrOiBmYWxzZSxcclxuICAgICAgICAgICAgc2tpcFN0eWxlSW5qZWN0aW9uOiBmYWxzZSxcclxuICAgICAgICAgICAgc3RhcnRNb2RlOiBcImZvY3VzXCIsXHJcbiAgICAgICAgICAgIHB1enpsZUVuZHBvaW50OiBlbGVtZW50LmRhdGFzZXRbXCJwdXp6bGVFbmRwb2ludFwiXSB8fCBQVVpaTEVfRU5EUE9JTlRfVVJMLFxyXG4gICAgICAgICAgICBzdGFydGVkQ2FsbGJhY2s6ICgpID0+IDAsXHJcbiAgICAgICAgICAgIHJlYWR5Q2FsbGJhY2s6ICgpID0+IDAsXHJcbiAgICAgICAgICAgIGRvbmVDYWxsYmFjazogKCkgPT4gMCxcclxuICAgICAgICAgICAgZXJyb3JDYWxsYmFjazogKCkgPT4gMCxcclxuICAgICAgICAgICAgc2l0ZWtleTogZWxlbWVudC5kYXRhc2V0W1wic2l0ZWtleVwiXSB8fCBcIlwiLFxyXG4gICAgICAgICAgICBsYW5ndWFnZTogZWxlbWVudC5kYXRhc2V0W1wibGFuZ1wiXSB8fCBcImVuXCIsXHJcbiAgICAgICAgICAgIHNvbHV0aW9uRmllbGROYW1lOiBlbGVtZW50LmRhdGFzZXRbXCJzb2x1dGlvbkZpZWxkTmFtZVwiXSB8fCBcImZyYy1jYXB0Y2hhLXNvbHV0aW9uXCIsXHJcbiAgICAgICAgICAgIHN0eWxlTm9uY2U6IG51bGwsXHJcbiAgICAgICAgfSwgb3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5lID0gZWxlbWVudDtcclxuICAgICAgICB0aGlzLmUuZnJpZW5kbHlDaGFsbGVuZ2VXaWRnZXQgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMubG9hZExhbmd1YWdlKCk7XHJcbiAgICAgICAgLy8gQHRzLWlnbm9yZSBJZ25vcmUgaXMgcmVxdWlyZWQgYXMgVFMgdGhpbmtzIHRoYXQgYHRoaXMubGFuZ2AgaXMgbm90IGFzc2lnbmVkIHlldCwgYnV0IGl0IGhhcHBlbnMgaW4gYHRoaXMubG9hZExhbmd1YWdlKClgIGFib3ZlLlxyXG4gICAgICAgIGVsZW1lbnQuaW5uZXJUZXh0ID0gdGhpcy5sYW5nLnRleHRfaW5pdDtcclxuICAgICAgICBpZiAoIXRoaXMub3B0cy5za2lwU3R5bGVJbmplY3Rpb24pIHtcclxuICAgICAgICAgICAgaW5qZWN0U3R5bGUodGhpcy5vcHRzLnN0eWxlTm9uY2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmluaXQodGhpcy5vcHRzLnN0YXJ0TW9kZSA9PT0gXCJhdXRvXCIgfHwgdGhpcy5lLmRhdGFzZXRbXCJzdGFydFwiXSA9PT0gXCJhdXRvXCIpO1xyXG4gICAgfVxyXG4gICAgaW5pdChmb3JjZVN0YXJ0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaGFzQmVlbkRlc3Ryb3llZCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRnJpZW5kbHlDYXB0Y2hhIHdpZGdldCBoYXMgYmVlbiBkZXN0cm95ZWQgdXNpbmcgZGVzdHJveSgpLCBpdCBjYW4gbm90IGJlIHVzZWQgYW55bW9yZS5cIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pbml0V29ya2VyR3JvdXAoKTtcclxuICAgICAgICBpZiAoZm9yY2VTdGFydCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuZS5kYXRhc2V0W1wic3RhcnRcIl0gIT09IFwibm9uZVwiICYmXHJcbiAgICAgICAgICAgICh0aGlzLm9wdHMuc3RhcnRNb2RlID09PSBcImZvY3VzXCIgfHwgdGhpcy5lLmRhdGFzZXRbXCJzdGFydFwiXSA9PT0gXCJmb2N1c1wiKSkge1xyXG4gICAgICAgICAgICBjb25zdCBmb3JtID0gZmluZFBhcmVudEZvcm1FbGVtZW50KHRoaXMuZSk7XHJcbiAgICAgICAgICAgIGlmIChmb3JtKSB7XHJcbiAgICAgICAgICAgICAgICBleGVjdXRlT25jZU9uRm9jdXNJbkV2ZW50KGZvcm0sICgpID0+IHRoaXMuc3RhcnQoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZyaWVuZGx5Q2FwdGNoYSBkaXYgc2VlbXMgbm90IHRvIGJlIGNvbnRhaW5lZCBpbiBhIGZvcm0sIGF1dG9zdGFydCB3aWxsIG5vdCB3b3JrXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBMb2FkcyB0aGUgY29uZmlndXJlZCBsYW5ndWFnZSwgb3IgYSBsYW5ndWFnZSBwYXNzZWQgdG8gdGhpcyBmdW5jdGlvbi5cclxuICAgICAqIE5vdGUgdGhhdCBvbmx5IHRoZSBuZXh0IHVwZGF0ZSB3aWxsIGJlIGluIHRoZSBuZXcgbGFuZ3VhZ2UsIGNvbnNpZGVyIGNhbGxpbmcgYHJlc2V0KClgIGFmdGVyIHN3aXRjaGluZyBsYW5ndWFnZXMuXHJcbiAgICAgKi9cclxuICAgIGxvYWRMYW5ndWFnZShsYW5nKSB7XHJcbiAgICAgICAgaWYgKGxhbmcgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLm9wdHMubGFuZ3VhZ2UgPSBsYW5nO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmUuZGF0YXNldFtcImxhbmdcIl0pIHtcclxuICAgICAgICAgICAgdGhpcy5vcHRzLmxhbmd1YWdlID0gdGhpcy5lLmRhdGFzZXRbXCJsYW5nXCJdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIHRoaXMub3B0cy5sYW5ndWFnZSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICBsZXQgbGFuZ0NvZGUgPSB0aGlzLm9wdHMubGFuZ3VhZ2UudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgbGV0IGwgPSBsb2NhbGl6YXRpb25zW2xhbmdDb2RlXTtcclxuICAgICAgICAgICAgaWYgKGwgPT09IHVuZGVmaW5lZCAmJiBsYW5nQ29kZVsyXSA9PT0gJy0nKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBMYW5ndWFnZSBoYXMgYSBsb2NhbGUgJy0nIHNlcGFyYXRvciwgcmVtb3ZlIGl0IGFuZCB0cnkgYWdhaW5cclxuICAgICAgICAgICAgICAgIGxhbmdDb2RlID0gbGFuZ0NvZGUuc3Vic3RyaW5nKDAsIDIpO1xyXG4gICAgICAgICAgICAgICAgbCA9IGxvY2FsaXphdGlvbnNbbGFuZ0NvZGVdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChsID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZyaWVuZGx5Q2FwdGNoYTogbGFuZ3VhZ2UgXCInICsgdGhpcy5vcHRzLmxhbmd1YWdlICsgJ1wiIG5vdCBmb3VuZC4nKTtcclxuICAgICAgICAgICAgICAgIC8vIEZhbGwgYmFjayB0byBFbmdsaXNoXHJcbiAgICAgICAgICAgICAgICBsID0gbG9jYWxpemF0aW9ucy5lbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmxhbmcgPSBsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy8gV2UgYXNzaWduIHRvIGEgY29weSBvZiB0aGUgRW5nbGlzaCBsYW5ndWFnZSBsb2NhbGl6YXRpb24sIHNvIHRoYXQgYW55IG1pc3NpbmcgdmFsdWVzIHdpbGwgYmUgRW5nbGlzaFxyXG4gICAgICAgICAgICB0aGlzLmxhbmcgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGxvY2FsaXphdGlvbnMuZW4pLCB0aGlzLm9wdHMubGFuZ3VhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQWRkIGEgbGlzdGVuZXIgdG8gdGhlIGJ1dHRvbiB0aGF0IGNhbGxzIGB0aGlzLnN0YXJ0YCBvbiBjbGljay5cclxuICAgICAqL1xyXG4gICAgbWFrZUJ1dHRvblN0YXJ0KCkge1xyXG4gICAgICAgIGNvbnN0IGIgPSB0aGlzLmUucXVlcnlTZWxlY3RvcihcImJ1dHRvblwiKTtcclxuICAgICAgICBpZiAoYikge1xyXG4gICAgICAgICAgICBiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4gdGhpcy5zdGFydCgpLCB7IG9uY2U6IHRydWUsIHBhc3NpdmU6IHRydWUgfSk7XHJcbiAgICAgICAgICAgIGIuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgKGUpID0+IHRoaXMuc3RhcnQoKSwgeyBvbmNlOiB0cnVlLCBwYXNzaXZlOiB0cnVlIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG9uV29ya2VyRXJyb3IoZSkge1xyXG4gICAgICAgIHRoaXMuaGFzQmVlblN0YXJ0ZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm5lZWRzUmVJbml0ID0gdHJ1ZTtcclxuICAgICAgICBpZiAodGhpcy5leHBpcnlUaW1lb3V0KVxyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5leHBpcnlUaW1lb3V0KTtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiW0ZSQ11cIiwgZSk7XHJcbiAgICAgICAgdGhpcy5lLmlubmVySFRNTCA9IGdldEVycm9ySFRNTCh0aGlzLm9wdHMuc29sdXRpb25GaWVsZE5hbWUsIHRoaXMubGFuZywgXCJCYWNrZ3JvdW5kIHdvcmtlciBlcnJvciBcIiArIGUubWVzc2FnZSk7XHJcbiAgICAgICAgdGhpcy5tYWtlQnV0dG9uU3RhcnQoKTtcclxuICAgICAgICAvLyBKdXN0IG91dCBvZiBwcmVjYXV0aW9uXHJcbiAgICAgICAgdGhpcy5vcHRzLmZvcmNlSlNGYWxsYmFjayA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBpbml0V29ya2VyR3JvdXAoKSB7XHJcbiAgICAgICAgdGhpcy53b3JrZXJHcm91cC5wcm9ncmVzc0NhbGxiYWNrID0gKHByb2dyZXNzKSA9PiB7XHJcbiAgICAgICAgICAgIHVwZGF0ZVByb2dyZXNzQmFyKHRoaXMuZSwgcHJvZ3Jlc3MpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy53b3JrZXJHcm91cC5yZWFkeUNhbGxiYWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmUuaW5uZXJIVE1MID0gZ2V0UmVhZHlIVE1MKHRoaXMub3B0cy5zb2x1dGlvbkZpZWxkTmFtZSwgdGhpcy5sYW5nKTtcclxuICAgICAgICAgICAgdGhpcy5tYWtlQnV0dG9uU3RhcnQoKTtcclxuICAgICAgICAgICAgdGhpcy5vcHRzLnJlYWR5Q2FsbGJhY2soKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMud29ya2VyR3JvdXAuc3RhcnRlZENhbGxiYWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmUuaW5uZXJIVE1MID0gZ2V0UnVubmluZ0hUTUwodGhpcy5vcHRzLnNvbHV0aW9uRmllbGROYW1lLCB0aGlzLmxhbmcpO1xyXG4gICAgICAgICAgICB0aGlzLm9wdHMuc3RhcnRlZENhbGxiYWNrKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLndvcmtlckdyb3VwLmRvbmVDYWxsYmFjayA9IChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNvbHV0aW9uUGF5bG9hZCA9IHRoaXMuaGFuZGxlRG9uZShkYXRhKTtcclxuICAgICAgICAgICAgdGhpcy5vcHRzLmRvbmVDYWxsYmFjayhzb2x1dGlvblBheWxvYWQpO1xyXG4gICAgICAgICAgICBjb25zdCBjYWxsYmFjayA9IHRoaXMuZS5kYXRhc2V0W1wiY2FsbGJhY2tcIl07XHJcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgd2luZG93W2NhbGxiYWNrXShzb2x1dGlvblBheWxvYWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLndvcmtlckdyb3VwLmVycm9yQ2FsbGJhY2sgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9uV29ya2VyRXJyb3IoZSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLndvcmtlckdyb3VwLmluaXQoKTtcclxuICAgICAgICB0aGlzLndvcmtlckdyb3VwLnNldHVwU29sdmVyKHRoaXMub3B0cy5mb3JjZUpTRmFsbGJhY2spO1xyXG4gICAgfVxyXG4gICAgZXhwaXJlKCkge1xyXG4gICAgICAgIHRoaXMuaGFzQmVlblN0YXJ0ZWQgPSBmYWxzZTtcclxuICAgICAgICAvLyBOb2RlLmlzQ29ubmVjdGVkIHdpbGwgYmUgdW5kZWZpbmVkIGluIG9sZGVyIGJyb3dzZXJzXHJcbiAgICAgICAgaWYgKHRoaXMuZS5pc0Nvbm5lY3RlZCAhPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdGhpcy5lLmlubmVySFRNTCA9IGdldEV4cGlyZWRIVE1MKHRoaXMub3B0cy5zb2x1dGlvbkZpZWxkTmFtZSwgdGhpcy5sYW5nKTtcclxuICAgICAgICAgICAgdGhpcy5tYWtlQnV0dG9uU3RhcnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhc3luYyBzdGFydCgpIHtcclxuICAgICAgICBpZiAodGhpcy5oYXNCZWVuRGVzdHJveWVkKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDYW4gbm90IHN0YXJ0IEZyaWVuZGx5Q2FwdGNoYSB3aWRnZXQgd2hpY2ggaGFzIGJlZW4gZGVzdHJveWVkXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmhhc0JlZW5TdGFydGVkKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIkNhbiBub3Qgc3RhcnQgRnJpZW5kbHlDYXB0Y2hhIHdpZGdldCB3aGljaCBoYXMgYWxyZWFkeSBiZWVuIHN0YXJ0ZWRcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc2l0ZWtleSA9IHRoaXMub3B0cy5zaXRla2V5IHx8IHRoaXMuZS5kYXRhc2V0W1wic2l0ZWtleVwiXTtcclxuICAgICAgICBpZiAoIXNpdGVrZXkpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZyaWVuZGx5Q2FwdGNoYTogc2l0ZWtleSBub3Qgc2V0IG9uIGZyYy1jYXB0Y2hhIGVsZW1lbnRcIik7XHJcbiAgICAgICAgICAgIHRoaXMuZS5pbm5lckhUTUwgPSBnZXRFcnJvckhUTUwodGhpcy5vcHRzLnNvbHV0aW9uRmllbGROYW1lLCB0aGlzLmxhbmcsIFwiV2Vic2l0ZSBwcm9ibGVtOiBzaXRla2V5IG5vdCBzZXRcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc0hlYWRsZXNzKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5lLmlubmVySFRNTCA9IGdldEVycm9ySFRNTCh0aGlzLm9wdHMuc29sdXRpb25GaWVsZE5hbWUsIHRoaXMubGFuZywgXCJCcm93c2VyIGNoZWNrIGZhaWxlZCwgdHJ5IGEgZGlmZmVyZW50IGJyb3dzZXJcIiwgZmFsc2UsIHRydWUpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm5lZWRzUmVJbml0KSB7XHJcbiAgICAgICAgICAgIHRoaXMubmVlZHNSZUluaXQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5pbml0KHRydWUpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaGFzQmVlblN0YXJ0ZWQgPSB0cnVlO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHRoaXMuZS5pbm5lckhUTUwgPSBnZXRGZXRjaGluZ0hUTUwodGhpcy5vcHRzLnNvbHV0aW9uRmllbGROYW1lLCB0aGlzLmxhbmcpO1xyXG4gICAgICAgICAgICB0aGlzLnB1enpsZSA9IGRlY29kZUJhc2U2NFB1enpsZShhd2FpdCBnZXRQdXp6bGUodGhpcy5vcHRzLnB1enpsZUVuZHBvaW50LCBzaXRla2V5LCB0aGlzLmxhbmcpKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZXhwaXJ5VGltZW91dClcclxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmV4cGlyeVRpbWVvdXQpO1xyXG4gICAgICAgICAgICB0aGlzLmV4cGlyeVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZXhwaXJlKCksIHRoaXMucHV6emxlLmV4cGlyeSAtIDMwMDAwKTsgLy8gMzBzIGdyYWNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJbRlJDXVwiLCBlKTtcclxuICAgICAgICAgICAgdGhpcy5oYXNCZWVuU3RhcnRlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5leHBpcnlUaW1lb3V0KVxyXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZXhwaXJ5VGltZW91dCk7XHJcbiAgICAgICAgICAgIHRoaXMuZS5pbm5lckhUTUwgPSBnZXRFcnJvckhUTUwodGhpcy5vcHRzLnNvbHV0aW9uRmllbGROYW1lLCB0aGlzLmxhbmcsIGUubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIHRoaXMubWFrZUJ1dHRvblN0YXJ0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvZGUgPSBcImVycm9yX2dldHRpbmdfcHV6emxlXCI7XHJcbiAgICAgICAgICAgIHRoaXMub3B0cy5lcnJvckNhbGxiYWNrKHsgY29kZSwgZGVzY3JpcHRpb246IGUudG9TdHJpbmcoKSwgZXJyb3I6IGUgfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrID0gdGhpcy5lLmRhdGFzZXRbXCJjYWxsYmFjay1lcnJvclwiXTtcclxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3dbY2FsbGJhY2tdKHRoaXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy53b3JrZXJHcm91cC5zdGFydCh0aGlzLnB1enpsZSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgaXMgdG8gYmUgY2FsbGVkIHdoZW4gdGhlIHB1enpsZSBoYXMgYmVlbiBzdWNjZXNmdWxseSBjb21wbGV0ZWQuXHJcbiAgICAgKiBIZXJlIHRoZSBoaWRkZW4gZmllbGQgZ2V0cyB1cGRhdGVkIHdpdGggdGhlIHNvbHV0aW9uLlxyXG4gICAgICogQHBhcmFtIGRhdGEgbWVzc2FnZSBmcm9tIHRoZSB3ZWJ3b3JrZXJcclxuICAgICAqL1xyXG4gICAgaGFuZGxlRG9uZShkYXRhKSB7XHJcbiAgICAgICAgdGhpcy52YWxpZCA9IHRydWU7XHJcbiAgICAgICAgY29uc3QgcHV6emxlU29sdXRpb25NZXNzYWdlID0gYCR7dGhpcy5wdXp6bGUuc2lnbmF0dXJlfS4ke3RoaXMucHV6emxlLmJhc2U2NH0uJHtlbmNvZGUoZGF0YS5zb2x1dGlvbil9LiR7ZW5jb2RlKGRhdGEuZGlhZ25vc3RpY3MpfWA7XHJcbiAgICAgICAgdGhpcy5lLmlubmVySFRNTCA9IGdldERvbmVIVE1MKHRoaXMub3B0cy5zb2x1dGlvbkZpZWxkTmFtZSwgdGhpcy5sYW5nLCBwdXp6bGVTb2x1dGlvbk1lc3NhZ2UsIGRhdGEpO1xyXG4gICAgICAgIC8vIHRoaXMud29ya2VyID0gbnVsbDsgLy8gVGhpcyBsaXRlcmFsbHkgY3Jhc2hlcyB2ZXJ5IG9sZCBicm93c2Vycy4uXHJcbiAgICAgICAgdGhpcy5uZWVkc1JlSW5pdCA9IHRydWU7XHJcbiAgICAgICAgcmV0dXJuIHB1enpsZVNvbHV0aW9uTWVzc2FnZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ2xlYW5zIHVwIHRoZSB3aWRnZXQgZW50aXJlbHksIHJlbW92aW5nIGFueSBET00gZWxlbWVudHMgYW5kIHRlcm1pbmF0aW5nIGFueSBiYWNrZ3JvdW5kIHdvcmtlcnMuXHJcbiAgICAgKiBBZnRlciBpdCBpcyBkZXN0cm95ZWQgaXQgY2FuIG5vIGxvbmdlciBiZSB1c2VkIGZvciBhbnkgcHVycG9zZS5cclxuICAgICAqL1xyXG4gICAgZGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLndvcmtlckdyb3VwLnRlcm1pbmF0ZVdvcmtlcnMoKTtcclxuICAgICAgICB0aGlzLm5lZWRzUmVJbml0ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5oYXNCZWVuU3RhcnRlZCA9IGZhbHNlO1xyXG4gICAgICAgIGlmICh0aGlzLmV4cGlyeVRpbWVvdXQpXHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmV4cGlyeVRpbWVvdXQpO1xyXG4gICAgICAgIGlmICh0aGlzLmUpIHtcclxuICAgICAgICAgICAgdGhpcy5lLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1pZ25vcmVcclxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5lO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmhhc0JlZW5EZXN0cm95ZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXNldHMgdGhlIHdpZGdldCB0byB0aGUgaW5pdGlhbCBzdGF0ZS5cclxuICAgICAqIFRoaXMgaXMgdXNlZnVsIGluIHNpdHVhdGlvbnMgd2hlcmUgdGhlIHBhZ2UgZG9lcyBub3QgcmVmcmVzaCB3aGVuIHlvdSBzdWJtaXQgYW5kIHRoZSBmb3JtIG1heSBiZSByZS1zdWJtaXR0ZWQgYWdhaW5cclxuICAgICAqL1xyXG4gICAgcmVzZXQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaGFzQmVlbkRlc3Ryb3llZCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRnJpZW5kbHlDYXB0Y2hhIHdpZGdldCBoYXMgYmVlbiBkZXN0cm95ZWQsIGl0IGNhbiBub3QgYmUgdXNlZCBhbnltb3JlXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMud29ya2VyR3JvdXAudGVybWluYXRlV29ya2VycygpO1xyXG4gICAgICAgIHRoaXMubmVlZHNSZUluaXQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmhhc0JlZW5TdGFydGVkID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHRoaXMuZXhwaXJ5VGltZW91dClcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZXhwaXJ5VGltZW91dCk7XHJcbiAgICAgICAgdGhpcy5pbml0KHRoaXMub3B0cy5zdGFydE1vZGUgPT09IFwiYXV0b1wiIHx8IHRoaXMuZS5kYXRhc2V0W1wic3RhcnRcIl0gPT09IFwiYXV0b1wiKTtcclxuICAgIH1cclxufVxuXG5leHBvcnQgeyBXaWRnZXRJbnN0YW5jZSwgbG9jYWxpemF0aW9ucyB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBvYnNlcnZhYmxlSGFuZGxlIGZyb20gJy4vb2JzZXJ2YWJsZUhhbmRsZSc7XG5cbmNvbnN0IHsgYWRkQWN0aW9uIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xuXG5hZGRBY3Rpb24oXG5cdCdqZXQuZmIub2JzZXJ2ZS5hZnRlcicsXG5cdCdqZXQtZm9ybS1idWlsZGVyL2ZyaWVuZGx5LmNhcHRjaGEnLFxuXHRvYnNlcnZhYmxlSGFuZGxlLFxuKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=