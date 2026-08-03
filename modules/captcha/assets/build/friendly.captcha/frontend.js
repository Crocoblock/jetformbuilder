/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./friendly.captcha/frontend/observableHandle.js"
/*!*******************************************************!*\
  !*** ./friendly.captcha/frontend/observableHandle.js ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ },

/***/ "../../../../node_modules/friendly-challenge/index.js"
/*!************************************************************!*\
  !*** ../../../../node_modules/friendly-challenge/index.js ***!
  \************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

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

var css = '.frc-captcha *{margin:0;padding:0;border:0;text-align:initial;border-radius:0;filter:none!important;transition:none!important;font-weight:400;font-size:14px;line-height:1.2;text-decoration:none;background-color:initial;color:#222}.frc-captcha{position:relative;min-width:250px;max-width:312px;border:1px solid #f4f4f4;padding-bottom:12px;background-color:#fff}.frc-captcha b{font-weight:700}.frc-container{display:flex;align-items:center;min-height:52px}.frc-icon{fill:#222;stroke:#222;flex-shrink:0;margin:8px 8px 0}.frc-icon.frc-warning{fill:#c00}.frc-success .frc-icon{animation:1s ease-in both frc-fade-in}.frc-content{white-space:nowrap;display:flex;flex-direction:column;margin:4px 6px 0 0;overflow-x:auto;flex-grow:1}.frc-banner{position:absolute;bottom:0;right:6px;line-height:1}.frc-banner *{font-size:10px;opacity:.8;text-decoration:none}.frc-progress{-webkit-appearance:none;-moz-appearance:none;appearance:none;margin:3px 0;height:4px;border:none;background-color:#eee;color:#222;width:100%;transition:.5s linear}.frc-progress::-webkit-progress-bar{background:#eee}.frc-progress::-webkit-progress-value{background:#222}.frc-progress::-moz-progress-bar{background:#222}.frc-button{cursor:pointer;padding:2px 6px;background-color:#f1f1f1;border:1px solid transparent;text-align:center;font-weight:600;text-transform:none}.frc-button:focus{border:1px solid #333}.frc-button:hover{background-color:#ddd}.frc-captcha-solution{display:none}.frc-err-url{text-decoration:underline;font-size:.9em}.frc-rtl{direction:rtl}.frc-rtl .frc-content{margin:4px 0 0 6px}.frc-banner.frc-rtl{left:6px;right:auto}.dark.frc-captcha{color:#fff;background-color:#222;border-color:#333}.dark.frc-captcha *{color:#fff}.dark.frc-captcha button{background-color:#444}.dark .frc-icon{fill:#fff;stroke:#fff}.dark .frc-progress{background-color:#444}.dark .frc-progress::-webkit-progress-bar{background:#444}.dark .frc-progress::-webkit-progress-value{background:#ddd}.dark .frc-progress::-moz-progress-bar{background:#ddd}@keyframes frc-fade-in{from{opacity:0}to{opacity:1}}';

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
            const response = await fetchAndRetryWithBackoff(urls[i] + "?sitekey=" + siteKey, { headers: [["x-frc-client", "js-0.9.19"]], mode: "cors" }, 2);
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
// Arabic
const LANG_AR = {
    text_init: "...التهيئة",
    text_ready: "يتم التحقيق",
    button_start: "إضغط هنا للتحقيق",
    text_fetching: "تهيئة التحدي",
    text_solving: "نتحقق من أنك لست روبوتًا...",
    text_completed: "أنا لست روبوتًا",
    text_completed_sr: "تم الانتهاء من التحقق التلقائي من البريد العشوائي",
    text_expired: "انتهت صلاحية التحقق",
    button_restart: "إعادة تشغيل",
    text_error: "فشل التحقق",
    button_retry: "ابدأ مرة أخرى",
    text_fetch_error: "مشكلة في الاتصال مع",
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
    ar: LANG_AR,
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

var workerString = "!function(){\"use strict\";const A=\"=\".charCodeAt(0),I=new Uint8Array(256);for(let A=0;A<64;A++)I[\"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\".charCodeAt(A)]=A;function g(A){const I={},g=A.exports,C=g.memory,Q=g.__alloc,t=g.__retain,B=g.__rtti_base||-1;return I.__allocArray=(A,I)=>{const g=function(A){return new Uint32Array(C.buffer)[(B+4>>>2)+2*A]}(A),e=31-Math.clz32(g>>>6&31),o=I.length,i=Q(o<<e,0),r=Q(12,A),n=new Uint32Array(C.buffer);n[r+0>>>2]=t(i),n[r+4>>>2]=i,n[r+8>>>2]=o<<e;const E=C.buffer,s=new Uint8Array(E);if(16384&g)for(let A=0;A<o;++A)s[(i>>>e)+A]=t(I[A]);else s.set(I,i>>>e);return r},I.__getUint8Array=A=>{const I=new Uint32Array(C.buffer),g=I[A+4>>>2];return new Uint8Array(C.buffer,g,I[g-4>>>2]>>>0)},function(A,I={}){const g=A.__argumentsLength?I=>{A.__argumentsLength.value=I}:A.__setArgumentsLength||A.__setargc||(()=>({}));for(const C in A){if(!Object.prototype.hasOwnProperty.call(A,C))continue;const Q=A[C],t=C.split(\".\")[0];\"function\"==typeof Q&&Q!==g?(I[t]=(...A)=>(g(A.length),Q(...A))).original=Q:I[t]=Q}return I}(g,I)}class C{constructor(A){this.b=new Uint8Array(128),this.h=new Uint32Array(16),this.t=0,this.c=0,this.v=new Uint32Array(32),this.m=new Uint32Array(32),this.outlen=A}}function Q(A,I){return A[I]^A[I+1]<<8^A[I+2]<<16^A[I+3]<<24}function t(A,I,g,C,Q,t,B,e){const o=I[B],i=I[B+1],r=I[e],n=I[e+1];let E,s,w,a,c=A[g],D=A[g+1],f=A[C],h=A[C+1],y=A[Q],l=A[Q+1],u=A[t],N=A[t+1];E=c+f,s=(c&f|(c|f)&~E)>>>31,c=E,D=D+h+s,E=c+o,s=(c&o|(c|o)&~E)>>>31,c=E,D=D+i+s,w=u^c,a=N^D,u=a,N=w,E=y+u,s=(y&u|(y|u)&~E)>>>31,y=E,l=l+N+s,w=f^y,a=h^l,f=w>>>24^a<<8,h=a>>>24^w<<8,E=c+f,s=(c&f|(c|f)&~E)>>>31,c=E,D=D+h+s,E=c+r,s=(c&r|(c|r)&~E)>>>31,c=E,D=D+n+s,w=u^c,a=N^D,u=w>>>16^a<<16,N=a>>>16^w<<16,E=y+u,s=(y&u|(y|u)&~E)>>>31,y=E,l=l+N+s,w=f^y,a=h^l,f=a>>>31^w<<1,h=w>>>31^a<<1,A[g]=c,A[g+1]=D,A[C]=f,A[C+1]=h,A[Q]=y,A[Q+1]=l,A[t]=u,A[t+1]=N}const B=[4089235720,1779033703,2227873595,3144134277,4271175723,1013904242,1595750129,2773480762,2917565137,1359893119,725511199,2600822924,4215389547,528734635,327033209,1541459225],e=[0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,28,20,8,16,18,30,26,12,2,24,0,4,22,14,10,6,22,16,24,0,10,4,30,26,20,28,6,12,14,2,18,8,14,18,6,2,26,24,22,28,4,12,10,20,8,0,30,16,18,0,10,14,4,8,20,30,28,2,22,24,12,16,6,26,4,24,12,20,0,22,16,6,8,26,14,10,30,28,2,18,24,10,2,30,28,26,8,20,0,14,12,6,18,4,16,22,26,22,14,28,24,2,6,18,10,0,30,8,16,12,4,20,12,30,28,18,22,6,0,16,24,4,26,14,2,8,20,10,20,4,16,8,14,12,2,10,30,22,18,28,6,24,26,0,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,28,20,8,16,18,30,26,12,2,24,0,4,22,14,10,6];function o(A,I){const g=A.v,C=A.m;for(let I=0;I<16;I++)g[I]=A.h[I],g[I+16]=B[I];g[24]=g[24]^A.t,g[25]=g[25]^A.t/4294967296,I&&(g[28]=~g[28],g[29]=~g[29]);for(let I=0;I<32;I++)C[I]=Q(A.b,4*I);for(let A=0;A<12;A++)t(g,C,0,8,16,24,e[16*A+0],e[16*A+1]),t(g,C,2,10,18,26,e[16*A+2],e[16*A+3]),t(g,C,4,12,20,28,e[16*A+4],e[16*A+5]),t(g,C,6,14,22,30,e[16*A+6],e[16*A+7]),t(g,C,0,10,20,30,e[16*A+8],e[16*A+9]),t(g,C,2,12,22,24,e[16*A+10],e[16*A+11]),t(g,C,4,14,16,26,e[16*A+12],e[16*A+13]),t(g,C,6,8,18,28,e[16*A+14],e[16*A+15]);for(let I=0;I<16;I++)A.h[I]=A.h[I]^g[I]^g[I+16]}function i(A,I){for(let I=0;I<16;I++)A.h[I]=B[I];A.b.set(I),A.h[0]^=16842752^A.outlen}async function r(){return(A,I,g=4294967295)=>{const Q=function(A,I,g){if(128!=A.length)throw Error(\"Invalid input\");const Q=A.buffer,t=new DataView(Q),B=new C(32);B.t=128;const e=t.getUint32(124,!0),r=e+g;for(let g=e;g<r;g++)if(t.setUint32(124,g,!0),i(B,A),o(B,!0),B.h[0]<I)return 0==ASC_TARGET?new Uint8Array(B.h.buffer):Uint8Array.wrap(B.h.buffer);return new Uint8Array(0)}(A,I,g);return[A,Q]}}let n,E;Uint8Array.prototype.slice||Object.defineProperty(Uint8Array.prototype,\"slice\",{value:function(A,I){return new Uint8Array(Array.prototype.slice.call(this,A,I))}}),self.ASC_TARGET=0;const s=new Promise((A=>E=A));self.onerror=A=>{self.postMessage({type:\"error\",message:JSON.stringify(A)})},self.onmessage=async C=>{const Q=C.data;try{if(\"solver\"===Q.type){if(Q.forceJS){n=1;const A=await r();E(A)}else try{n=2;const C=WebAssembly.compile(function(g){let C=3285;g.charCodeAt(4379)===A&&C--,g.charCodeAt(4378)===A&&C--;const Q=new Uint8Array(C);for(let A=0,C=0;A<4380;A+=4){const t=I[g.charCodeAt(A+0)],B=I[g.charCodeAt(A+1)],e=I[g.charCodeAt(A+2)],o=I[g.charCodeAt(A+3)];Q[C++]=t<<2|B>>4,Q[C++]=(15&B)<<4|e>>2,Q[C++]=(3&e)<<6|63&o}return Q}(\"AGFzbQEAAAABKghgAABgAn9/AGADf39/AX9gAX8AYAR/f39/AGAAAX9gAX8Bf2ACf38BfwINAQNlbnYFYWJvcnQABAMMCwcGAwAAAQIFAQIABQMBAAEGFgR/AUEAC38BQQALfwBBAwt/AEHgDAsHbgkGbWVtb3J5AgAHX19hbGxvYwABCF9fcmV0YWluAAIJX19yZWxlYXNlAAMJX19jb2xsZWN0AAQHX19yZXNldAAFC19fcnR0aV9iYXNlAwMNVWludDhBcnJheV9JRAMCDHNvbHZlQmxha2UyYgAKCAELCvQSC5IBAQV/IABB8P///wNLBEAACyMBQRBqIgQgAEEPakFwcSICQRAgAkEQSxsiBmoiAj8AIgVBEHQiA0sEQCAFIAIgA2tB//8DakGAgHxxQRB2IgMgBSADShtAAEEASARAIANAAEEASARAAAsLCyACJAEgBEEQayICIAY2AgAgAkEBNgIEIAIgATYCCCACIAA2AgwgBAsEACAACwMAAQsDAAELBgAjACQBC7sCAQF/AkAgAUUNACAAQQA6AAAgACABakEEayICQQA6AAMgAUECTQ0AIABBADoAASAAQQA6AAIgAkEAOgACIAJBADoAASABQQZNDQAgAEEAOgADIAJBADoAACABQQhNDQAgAEEAIABrQQNxIgJqIgBBADYCACAAIAEgAmtBfHEiAmpBHGsiAUEANgIYIAJBCE0NACAAQQA2AgQgAEEANgIIIAFBADYCECABQQA2AhQgAkEYTQ0AIABBADYCDCAAQQA2AhAgAEEANgIUIABBADYCGCABQQA2AgAgAUEANgIEIAFBADYCCCABQQA2AgwgACAAQQRxQRhqIgFqIQAgAiABayEBA0AgAUEgTwRAIABCADcDACAAQgA3AwggAEIANwMQIABCADcDGCABQSBrIQEgAEEgaiEADAELCwsLcgACfyAARQRAQQxBAhABIQALIAALQQA2AgAgAEEANgIEIABBADYCCCABQfD///8DIAJ2SwRAQcAKQfAKQRJBORAAAAsgASACdCIBQQAQASICIAEQBiAAKAIAGiAAIAI2AgAgACACNgIEIAAgATYCCCAAC88BAQJ/QaABQQAQASIAQQxBAxABQYABQQAQBzYCACAAQQxBBBABQQhBAxAHNgIEIABCADcDCCAAQQA2AhAgAEIANwMYIABCADcDICAAQgA3AyggAEIANwMwIABCADcDOCAAQgA3A0AgAEIANwNIIABCADcDUCAAQgA3A1ggAEIANwNgIABCADcDaCAAQgA3A3AgAEIANwN4IABCADcDgAEgAEIANwOIASAAQgA3A5ABQYABQQUQASIBQYABEAYgACABNgKYASAAQSA2ApwBIAAL2AkCA38SfiAAKAIEIQIgACgCmAEhAwNAIARBgAFIBEAgAyAEaiABIARqKQMANwMAIARBCGohBAwBCwsgAigCBCkDACEMIAIoAgQpAwghDSACKAIEKQMQIQ4gAigCBCkDGCEPIAIoAgQpAyAhBSACKAIEKQMoIQsgAigCBCkDMCEGIAIoAgQpAzghB0KIkvOd/8z5hOoAIQhCu86qptjQ67O7fyEJQqvw0/Sv7ry3PCEQQvHt9Pilp/2npX8hCiAAKQMIQtGFmu/6z5SH0QCFIRFCn9j52cKR2oKbfyESQpSF+aXAyom+YCETQvnC+JuRo7Pw2wAhFEEAIQQDQCAEQcABSARAIAUgCCARIAwgBSADIARBgAhqIgEtAABBA3RqKQMAfHwiBYVCIIoiDHwiCIVCGIoiESAIIAwgBSARIAMgAS0AAUEDdGopAwB8fCIMhUIQiiIIfCIVhUI/iiEFIAsgCSASIA0gCyADIAEtAAJBA3RqKQMAfHwiDYVCIIoiCXwiEYVCGIohCyAGIBAgEyAOIAYgAyABLQAEQQN0aikDAHx8IgaFQiCKIg58IhCFQhiKIhIgECAOIAYgEiADIAEtAAVBA3RqKQMAfHwiDoVCEIoiE3wiEIVCP4ohBiAHIAogFCAPIAcgAyABLQAGQQN0aikDAHx8IgeFQiCKIg98IgqFQhiKIhIgCiAPIAcgEiADIAEtAAdBA3RqKQMAfHwiD4VCEIoiCnwiEoVCP4ohByAQIAogDCARIAkgDSALIAMgAS0AA0EDdGopAwB8fCINhUIQiiIJfCIWIAuFQj+KIgwgAyABLQAIQQN0aikDAHx8IhCFQiCKIgp8IgsgECALIAyFQhiKIhEgAyABLQAJQQN0aikDAHx8IgwgCoVCEIoiFHwiECARhUI/iiELIAYgEiAIIA0gBiADIAEtAApBA3RqKQMAfHwiDYVCIIoiCHwiCoVCGIoiBiANIAYgAyABLQALQQN0aikDAHx8Ig0gCIVCEIoiESAKfCIKhUI/iiEGIAcgFSAJIA4gByADIAEtAAxBA3RqKQMAfHwiDoVCIIoiCHwiCYVCGIoiByAOIAcgAyABLQANQQN0aikDAHx8Ig4gCIVCEIoiEiAJfCIIhUI/iiEHIAUgFiATIA8gBSADIAEtAA5BA3RqKQMAfHwiD4VCIIoiCXwiFYVCGIoiBSAPIAUgAyABLQAPQQN0aikDAHx8Ig8gCYVCEIoiEyAVfCIJhUI/iiEFIARBEGohBAwBCwsgAigCBCACKAIEKQMAIAggDIWFNwMAIAIoAgQgAigCBCkDCCAJIA2FhTcDCCACKAIEIAIoAgQpAxAgDiAQhYU3AxAgAigCBCACKAIEKQMYIAogD4WFNwMYIAIoAgQgAigCBCkDICAFIBGFhTcDICACKAIEIAIoAgQpAyggCyAShYU3AyggAigCBCACKAIEKQMwIAYgE4WFNwMwIAIoAgQgAigCBCkDOCAHIBSFhTcDOCAAIAw3AxggACANNwMgIAAgDjcDKCAAIA83AzAgACAFNwM4IAAgCzcDQCAAIAY3A0ggACAHNwNQIAAgCDcDWCAAIAk3A2AgACAQNwNoIAAgCjcDcCAAIBE3A3ggACASNwOAASAAIBM3A4gBIAAgFDcDkAEL4QIBBH8gACgCCEGAAUcEQEHQCUGACkEeQQUQAAALIAAoAgAhBBAIIgMoAgQhBSADQoABNwMIIAQoAnwiACACaiEGA0AgACAGSQRAIAQgADYCfCADKAIEIgIoAgQgAygCnAGtQoiS95X/zPmE6gCFNwMAIAIoAgRCu86qptjQ67O7fzcDCCACKAIEQqvw0/Sv7ry3PDcDECACKAIEQvHt9Pilp/2npX83AxggAigCBELRhZrv+s+Uh9EANwMgIAIoAgRCn9j52cKR2oKbfzcDKCACKAIEQuv6htq/tfbBHzcDMCACKAIEQvnC+JuRo7Pw2wA3AzggAyAEEAkgBSgCBCkDAKcgAUkEQEEAIAUoAgAiAUEQaygCDCICSwRAQfALQbAMQc0NQQUQAAALQQxBAxABIgAgATYCACAAIAI2AgggACABNgIEIAAPCyAAQQFqIQAMAQsLQQxBAxABQQBBABAHCwwAQaANJABBoA0kAQsL+gQJAEGBCAu/AQECAwQFBgcICQoLDA0ODw4KBAgJDw0GAQwAAgsHBQMLCAwABQIPDQoOAwYHAQkEBwkDAQ0MCw4CBgUKBAAPCAkABQcCBAoPDgELDAYIAw0CDAYKAAsIAwQNBwUPDgEJDAUBDw4NBAoABwYDCQIICw0LBw4MAQMJBQAPBAgGAgoGDw4JCwMACAwCDQcBBAoFCgIIBAcGAQUPCwkOAwwNAAABAgMEBQYHCAkKCwwNDg8OCgQICQ8NBgEMAAILBwUDAEHACQspGgAAAAEAAAABAAAAGgAAAEkAbgB2AGEAbABpAGQAIABpAG4AcAB1AHQAQfAJCzEiAAAAAQAAAAEAAAAiAAAAcwByAGMALwBzAG8AbAB2AGUAcgBXAGEAcwBtAC4AdABzAEGwCgsrHAAAAAEAAAABAAAAHAAAAEkAbgB2AGEAbABpAGQAIABsAGUAbgBnAHQAaABB4AoLNSYAAAABAAAAAQAAACYAAAB+AGwAaQBiAC8AYQByAHIAYQB5AGIAdQBmAGYAZQByAC4AdABzAEGgCws1JgAAAAEAAAABAAAAJgAAAH4AbABpAGIALwBzAHQAYQB0AGkAYwBhAHIAcgBhAHkALgB0AHMAQeALCzMkAAAAAQAAAAEAAAAkAAAASQBuAGQAZQB4ACAAbwB1AHQAIABvAGYAIAByAGEAbgBnAGUAQaAMCzMkAAAAAQAAAAEAAAAkAAAAfgBsAGkAYgAvAHQAeQBwAGUAZABhAHIAcgBhAHkALgB0AHMAQeAMCy4GAAAAIAAAAAAAAAAgAAAAAAAAACAAAAAAAAAAYQAAAAIAAAAhAgAAAgAAACQC\")),Q=await async function(A){const I=await async function(A){const I={env:{abort(){throw Error(\"Wasm aborted\")}}};return{exports:g(await WebAssembly.instantiate(A,I))}}(A),C=I.exports.__retain(I.exports.__allocArray(I.exports.Uint8Array_ID,new Uint8Array(128)));let Q=I.exports.__getUint8Array(C);return(A,g,t=4294967295)=>{Q.set(A);const B=I.exports.solveBlake2b(C,g,t);Q=I.exports.__getUint8Array(C);const e=I.exports.__getUint8Array(B);return I.exports.__release(B),[Q,e]}}(await C);E(Q)}catch(A){console.log(\"FriendlyCaptcha failed to initialize WebAssembly, falling back to Javascript solver: \"+A.toString()),n=1;const I=await r();E(I)}self.postMessage({type:\"ready\",solver:n})}else if(\"start\"===Q.type){const A=await s;self.postMessage({type:\"started\"});let I,g=0;for(let C=0;C<256;C++){Q.puzzleSolverInput[123]=C;const[t,B]=A(Q.puzzleSolverInput,Q.threshold);if(0!==B.length){I=t;break}console.warn(\"FC: Internal error or no solution found\"),g+=Math.pow(2,32)-1}g+=new DataView(I.slice(-4).buffer).getUint32(0,!0),self.postMessage({type:\"done\",solution:I.slice(-8),h:g,puzzleIndex:Q.puzzleIndex,puzzleNumber:Q.puzzleNumber})}}catch(A){setTimeout((()=>{throw A}))}}}();";

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
        this.readyPromise = new Promise(() => { });
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
        let setReady;
        this.readyPromise = new Promise((resolve) => (setReady = resolve));
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
                        setReady();
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
    async start(puzzle) {
        await this.readyPromise;
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
            if (l === undefined && langCode[2] === "-") {
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
        await this.workerGroup.start(this.puzzle);
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


/***/ }

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
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*******************************************!*\
  !*** ./friendly.captcha/frontend/main.js ***!
  \*******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _observableHandle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observableHandle */ "./friendly.captcha/frontend/observableHandle.js");

const {
  addAction
} = JetPlugins.hooks;
addAction('jet.fb.observe.after', 'jet-form-builder/friendly.captcha', _observableHandle__WEBPACK_IMPORTED_MODULE_0__["default"]);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJpZW5kbHkuY2FwdGNoYS9mcm9udGVuZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ3REQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNydUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNOQTtBQUVBO0FBQUE7QUFBQTtBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamZiLWNhcHRjaGEvLi9mcmllbmRseS5jYXB0Y2hhL2Zyb250ZW5kL29ic2VydmFibGVIYW5kbGUuanMiLCJ3ZWJwYWNrOi8vamZiLWNhcHRjaGEvLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZyaWVuZGx5LWNoYWxsZW5nZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9qZmItY2FwdGNoYS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qZmItY2FwdGNoYS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamZiLWNhcHRjaGEvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qZmItY2FwdGNoYS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pmYi1jYXB0Y2hhLy4vZnJpZW5kbHkuY2FwdGNoYS9mcm9udGVuZC9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgYXBwbHlGaWx0ZXJzIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llc1xuaW1wb3J0IHsgV2lkZ2V0SW5zdGFuY2UgfSBmcm9tICdmcmllbmRseS1jaGFsbGVuZ2UnO1xuXG4vKipcbiAqIEBwYXJhbSBvYnNlcnZhYmxlIHtPYnNlcnZhYmxlfVxuICovXG5mdW5jdGlvbiBvYnNlcnZhYmxlSGFuZGxlKCBvYnNlcnZhYmxlICkge1xuXHRpZiAoIG9ic2VydmFibGUucGFyZW50ICkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8qKlxuXHQgKiBAdHlwZSB7bnVsbHxJbnB1dERhdGF9XG5cdCAqL1xuXHRjb25zdCB0b2tlbiAgICAgPSBvYnNlcnZhYmxlLmdldElucHV0KCAnX2NhcHRjaGFfdG9rZW4nICk7XG5cdGNvbnN0IGZvcm1JRCAgICA9IG9ic2VydmFibGUuZ2V0U3VibWl0KCkuZ2V0Rm9ybUlkKCk7XG5cdGNvbnN0IGNvbnRhaW5lciA9IHRva2VuPy5ub2Rlcz8uWyAwIF0/Lm5leHRFbGVtZW50U2libGluZztcblxuXHRsZXQgb3B0aW9ucyA9IChcblx0XHR3aW5kb3c/LkpldEZvcm1CdWlsZGVyQ2FwdGNoYUNvbmZpZz8uWyBmb3JtSUQgXSA/PyBmYWxzZVxuXHQpO1xuXG5cdGlmICggIWNvbnRhaW5lciB8fCAhb3B0aW9ucyApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBmb3IgY29ycmVjdCBhcHBseWluZyB2YWxpZGF0aW9uIGxvZ2ljc1xuXHR0b2tlbi5pc1Zpc2libGUgPSAoKSA9PiB0cnVlO1xuXG5cdG9wdGlvbnMgPSB7XG5cdFx0Li4ub3B0aW9ucyxcblx0XHRkb25lQ2FsbGJhY2soIHJlc3BvbnNlSGFzaCApIHtcblx0XHRcdHRva2VuLnZhbHVlLmN1cnJlbnQgPSByZXNwb25zZUhhc2g7XG5cdFx0XHR0b2tlbi5sb2FkaW5nLmVuZCgpO1xuXHRcdH0sXG5cdFx0c3RhcnRlZENhbGxiYWNrOiAoKSA9PiB0b2tlbi5sb2FkaW5nLnN0YXJ0KCksXG5cdFx0ZXJyb3JDYWxsYmFjazogKCkgPT4gdG9rZW4ubG9hZGluZy5lbmQoKSxcblx0fTtcblxuXHRvcHRpb25zID0gYXBwbHlGaWx0ZXJzKFxuXHRcdCdqZXQuZmIuZnJpZW5kbHlDYXB0Y2hhLm9wdGlvbnMnLFxuXHRcdG9wdGlvbnMsXG5cdFx0b2JzZXJ2YWJsZSxcblx0KTtcblxuXHRjb25zdCB3aWRnZXQgPSBuZXcgV2lkZ2V0SW5zdGFuY2UoIGNvbnRhaW5lciwgb3B0aW9ucyApO1xuXG5cdG9ic2VydmFibGUuZ2V0U3VibWl0KCkuc3VibWl0dGVyPy5zdGF0dXM/LndhdGNoPy4oICgpID0+IHtcblx0XHR3aWRnZXQucmVzZXQoKTtcblx0XHR0b2tlbi5vbkNsZWFyKCk7XG5cdH0gKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgb2JzZXJ2YWJsZUhhbmRsZTsiLCIvLyBBZGFwdGVkIGZyb20gdGhlIGJhc2U2NC1hcnJheWJ1ZmZlciBwYWNrYWdlIGltcGxlbWVudGF0aW9uXG4vLyAoaHR0cHM6Ly9naXRodWIuY29tL25pa2xhc3ZoL2Jhc2U2NC1hcnJheWJ1ZmZlciwgTUlUIGxpY2Vuc2VkKVxuY29uc3QgQ0hBUlMgPSBcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky9cIjtcbmNvbnN0IEVRX0NIQVIgPSBcIj1cIi5jaGFyQ29kZUF0KDApO1xuLy8gVXNlIGEgbG9va3VwIHRhYmxlIHRvIGZpbmQgdGhlIGluZGV4LlxuY29uc3QgbG9va3VwID0gbmV3IFVpbnQ4QXJyYXkoMjU2KTtcbmZvciAobGV0IGkgPSAwOyBpIDwgQ0hBUlMubGVuZ3RoOyBpKyspIHtcbiAgICBsb29rdXBbQ0hBUlMuY2hhckNvZGVBdChpKV0gPSBpO1xufVxuZnVuY3Rpb24gZW5jb2RlKGJ5dGVzKSB7XG4gICAgY29uc3QgbGVuID0gYnl0ZXMubGVuZ3RoO1xuICAgIGxldCBiYXNlNjQgPSBcIlwiO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpICs9IDMpIHtcbiAgICAgICAgY29uc3QgYjAgPSBieXRlc1tpICsgMF07XG4gICAgICAgIGNvbnN0IGIxID0gYnl0ZXNbaSArIDFdO1xuICAgICAgICBjb25zdCBiMiA9IGJ5dGVzW2kgKyAyXTtcbiAgICAgICAgLy8gVGhpcyB0ZW1wb3JhcnkgdmFyaWFibGUgc3RvcHMgdGhlIE5leHRKUyAxMyBjb21waWxlciBmcm9tIGJyZWFraW5nIHRoaXMgY29kZSBpbiBvcHRpbWl6YXRpb24uXG4gICAgICAgIC8vIFNlZSBpc3N1ZSBodHRwczovL2dpdGh1Yi5jb20vRnJpZW5kbHlDYXB0Y2hhL2ZyaWVuZGx5LWNoYWxsZW5nZS9pc3N1ZXMvMTY1XG4gICAgICAgIGxldCB0ID0gXCJcIjtcbiAgICAgICAgdCArPSBDSEFSUy5jaGFyQXQoYjAgPj4+IDIpO1xuICAgICAgICB0ICs9IENIQVJTLmNoYXJBdCgoKGIwICYgMykgPDwgNCkgfCAoYjEgPj4+IDQpKTtcbiAgICAgICAgdCArPSBDSEFSUy5jaGFyQXQoKChiMSAmIDE1KSA8PCAyKSB8IChiMiA+Pj4gNikpO1xuICAgICAgICB0ICs9IENIQVJTLmNoYXJBdChiMiAmIDYzKTtcbiAgICAgICAgYmFzZTY0ICs9IHQ7XG4gICAgfVxuICAgIGlmIChsZW4gJSAzID09PSAyKSB7XG4gICAgICAgIGJhc2U2NCA9IGJhc2U2NC5zdWJzdHJpbmcoMCwgYmFzZTY0Lmxlbmd0aCAtIDEpICsgXCI9XCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKGxlbiAlIDMgPT09IDEpIHtcbiAgICAgICAgYmFzZTY0ID0gYmFzZTY0LnN1YnN0cmluZygwLCBiYXNlNjQubGVuZ3RoIC0gMikgKyBcIj09XCI7XG4gICAgfVxuICAgIHJldHVybiBiYXNlNjQ7XG59XG5mdW5jdGlvbiBkZWNvZGUoYmFzZTY0KSB7XG4gICAgY29uc3QgbGVuID0gYmFzZTY0Lmxlbmd0aDtcbiAgICBsZXQgYnVmZmVyTGVuZ3RoID0gKGxlbiAqIDMpID4+PiAyOyAvLyAqIDAuNzVcbiAgICBpZiAoYmFzZTY0LmNoYXJDb2RlQXQobGVuIC0gMSkgPT09IEVRX0NIQVIpXG4gICAgICAgIGJ1ZmZlckxlbmd0aC0tO1xuICAgIGlmIChiYXNlNjQuY2hhckNvZGVBdChsZW4gLSAyKSA9PT0gRVFfQ0hBUilcbiAgICAgICAgYnVmZmVyTGVuZ3RoLS07XG4gICAgY29uc3QgYnl0ZXMgPSBuZXcgVWludDhBcnJheShidWZmZXJMZW5ndGgpO1xuICAgIGZvciAobGV0IGkgPSAwLCBwID0gMDsgaSA8IGxlbjsgaSArPSA0KSB7XG4gICAgICAgIGNvbnN0IGVuY29kZWQxID0gbG9va3VwW2Jhc2U2NC5jaGFyQ29kZUF0KGkgKyAwKV07XG4gICAgICAgIGNvbnN0IGVuY29kZWQyID0gbG9va3VwW2Jhc2U2NC5jaGFyQ29kZUF0KGkgKyAxKV07XG4gICAgICAgIGNvbnN0IGVuY29kZWQzID0gbG9va3VwW2Jhc2U2NC5jaGFyQ29kZUF0KGkgKyAyKV07XG4gICAgICAgIGNvbnN0IGVuY29kZWQ0ID0gbG9va3VwW2Jhc2U2NC5jaGFyQ29kZUF0KGkgKyAzKV07XG4gICAgICAgIGJ5dGVzW3ArK10gPSAoZW5jb2RlZDEgPDwgMikgfCAoZW5jb2RlZDIgPj4gNCk7XG4gICAgICAgIGJ5dGVzW3ArK10gPSAoKGVuY29kZWQyICYgMTUpIDw8IDQpIHwgKGVuY29kZWQzID4+IDIpO1xuICAgICAgICBieXRlc1twKytdID0gKChlbmNvZGVkMyAmIDMpIDw8IDYpIHwgKGVuY29kZWQ0ICYgNjMpO1xuICAgIH1cbiAgICByZXR1cm4gYnl0ZXM7XG59XG5cbnZhciBjc3MgPSAnLmZyYy1jYXB0Y2hhICp7bWFyZ2luOjA7cGFkZGluZzowO2JvcmRlcjowO3RleHQtYWxpZ246aW5pdGlhbDtib3JkZXItcmFkaXVzOjA7ZmlsdGVyOm5vbmUhaW1wb3J0YW50O3RyYW5zaXRpb246bm9uZSFpbXBvcnRhbnQ7Zm9udC13ZWlnaHQ6NDAwO2ZvbnQtc2l6ZToxNHB4O2xpbmUtaGVpZ2h0OjEuMjt0ZXh0LWRlY29yYXRpb246bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOmluaXRpYWw7Y29sb3I6IzIyMn0uZnJjLWNhcHRjaGF7cG9zaXRpb246cmVsYXRpdmU7bWluLXdpZHRoOjI1MHB4O21heC13aWR0aDozMTJweDtib3JkZXI6MXB4IHNvbGlkICNmNGY0ZjQ7cGFkZGluZy1ib3R0b206MTJweDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9LmZyYy1jYXB0Y2hhIGJ7Zm9udC13ZWlnaHQ6NzAwfS5mcmMtY29udGFpbmVye2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7bWluLWhlaWdodDo1MnB4fS5mcmMtaWNvbntmaWxsOiMyMjI7c3Ryb2tlOiMyMjI7ZmxleC1zaHJpbms6MDttYXJnaW46OHB4IDhweCAwfS5mcmMtaWNvbi5mcmMtd2FybmluZ3tmaWxsOiNjMDB9LmZyYy1zdWNjZXNzIC5mcmMtaWNvbnthbmltYXRpb246MXMgZWFzZS1pbiBib3RoIGZyYy1mYWRlLWlufS5mcmMtY29udGVudHt3aGl0ZS1zcGFjZTpub3dyYXA7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjttYXJnaW46NHB4IDZweCAwIDA7b3ZlcmZsb3cteDphdXRvO2ZsZXgtZ3JvdzoxfS5mcmMtYmFubmVye3Bvc2l0aW9uOmFic29sdXRlO2JvdHRvbTowO3JpZ2h0OjZweDtsaW5lLWhlaWdodDoxfS5mcmMtYmFubmVyICp7Zm9udC1zaXplOjEwcHg7b3BhY2l0eTouODt0ZXh0LWRlY29yYXRpb246bm9uZX0uZnJjLXByb2dyZXNzey13ZWJraXQtYXBwZWFyYW5jZTpub25lOy1tb3otYXBwZWFyYW5jZTpub25lO2FwcGVhcmFuY2U6bm9uZTttYXJnaW46M3B4IDA7aGVpZ2h0OjRweDtib3JkZXI6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOiNlZWU7Y29sb3I6IzIyMjt3aWR0aDoxMDAlO3RyYW5zaXRpb246LjVzIGxpbmVhcn0uZnJjLXByb2dyZXNzOjotd2Via2l0LXByb2dyZXNzLWJhcntiYWNrZ3JvdW5kOiNlZWV9LmZyYy1wcm9ncmVzczo6LXdlYmtpdC1wcm9ncmVzcy12YWx1ZXtiYWNrZ3JvdW5kOiMyMjJ9LmZyYy1wcm9ncmVzczo6LW1vei1wcm9ncmVzcy1iYXJ7YmFja2dyb3VuZDojMjIyfS5mcmMtYnV0dG9ue2N1cnNvcjpwb2ludGVyO3BhZGRpbmc6MnB4IDZweDtiYWNrZ3JvdW5kLWNvbG9yOiNmMWYxZjE7Ym9yZGVyOjFweCBzb2xpZCB0cmFuc3BhcmVudDt0ZXh0LWFsaWduOmNlbnRlcjtmb250LXdlaWdodDo2MDA7dGV4dC10cmFuc2Zvcm06bm9uZX0uZnJjLWJ1dHRvbjpmb2N1c3tib3JkZXI6MXB4IHNvbGlkICMzMzN9LmZyYy1idXR0b246aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZGRkfS5mcmMtY2FwdGNoYS1zb2x1dGlvbntkaXNwbGF5Om5vbmV9LmZyYy1lcnItdXJse3RleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmU7Zm9udC1zaXplOi45ZW19LmZyYy1ydGx7ZGlyZWN0aW9uOnJ0bH0uZnJjLXJ0bCAuZnJjLWNvbnRlbnR7bWFyZ2luOjRweCAwIDAgNnB4fS5mcmMtYmFubmVyLmZyYy1ydGx7bGVmdDo2cHg7cmlnaHQ6YXV0b30uZGFyay5mcmMtY2FwdGNoYXtjb2xvcjojZmZmO2JhY2tncm91bmQtY29sb3I6IzIyMjtib3JkZXItY29sb3I6IzMzM30uZGFyay5mcmMtY2FwdGNoYSAqe2NvbG9yOiNmZmZ9LmRhcmsuZnJjLWNhcHRjaGEgYnV0dG9ue2JhY2tncm91bmQtY29sb3I6IzQ0NH0uZGFyayAuZnJjLWljb257ZmlsbDojZmZmO3N0cm9rZTojZmZmfS5kYXJrIC5mcmMtcHJvZ3Jlc3N7YmFja2dyb3VuZC1jb2xvcjojNDQ0fS5kYXJrIC5mcmMtcHJvZ3Jlc3M6Oi13ZWJraXQtcHJvZ3Jlc3MtYmFye2JhY2tncm91bmQ6IzQ0NH0uZGFyayAuZnJjLXByb2dyZXNzOjotd2Via2l0LXByb2dyZXNzLXZhbHVle2JhY2tncm91bmQ6I2RkZH0uZGFyayAuZnJjLXByb2dyZXNzOjotbW96LXByb2dyZXNzLWJhcntiYWNrZ3JvdW5kOiNkZGR9QGtleWZyYW1lcyBmcmMtZmFkZS1pbntmcm9te29wYWNpdHk6MH10b3tvcGFjaXR5OjF9fSc7XG5cbi8vIFRoaXMgaXMgbm90IGFuIGVudW0gdG8gc2F2ZSBzb21lIGJ5dGVzIGluIHRoZSBvdXRwdXQgYnVuZGxlLlxuY29uc3QgU09MVkVSX1RZUEVfSlMgPSAxO1xuY29uc3QgQ0hBTExFTkdFX1NJWkVfQllURVMgPSAxMjg7XG5cbi8vIEB0cy1pZ25vcmVcclxuY29uc3QgbG9hZGVyU1ZHID0gYDxjaXJjbGUgY3g9XCIxMlwiIGN5PVwiMTJcIiByPVwiOFwiIHN0cm9rZS13aWR0aD1cIjNcIiBzdHJva2UtZGFzaGFycmF5PVwiMTUgMTBcIiBmaWxsPVwibm9uZVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiB0cmFuc2Zvcm09XCJyb3RhdGUoMCAxMiAxMilcIj48YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPVwidHJhbnNmb3JtXCIgdHlwZT1cInJvdGF0ZVwiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiIGR1cj1cIjAuOXNcIiB2YWx1ZXM9XCIwIDEyIDEyOzM2MCAxMiAxMlwiLz48L2NpcmNsZT5gO1xyXG5jb25zdCBlcnJvclNWRyA9IGA8cGF0aCBkPVwiTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTEgMTVoLTJ2LTJoMnYyem0wLTRoLTJWN2gydjZ6XCIvPmA7XHJcbi8qKlxyXG4gKiBCYXNlIHRlbXBsYXRlIHVzZWQgZm9yIGFsbCB3aWRnZXQgc3RhdGVzXHJcbiAqIFRoZSByZWFzb24gd2UgdXNlIHJhdyBzdHJpbmcgaW50ZXJwb2xhdGlvbiBoZXJlIGlzIHNvIHdlIGRvbid0IGhhdmUgdG8gc2hpcCBzb21ldGhpbmcgbGlrZSBsaXQtaHRtbC5cclxuICovXHJcbmZ1bmN0aW9uIGdldFRlbXBsYXRlKGZpZWxkTmFtZSwgcnRsLCBzdmdDb250ZW50LCBzdmdBcmlhSGlkZGVuLCB0ZXh0Q29udGVudCwgc29sdXRpb25TdHJpbmcsIGJ1dHRvblRleHQsIHByb2dyZXNzID0gZmFsc2UsIGRlYnVnRGF0YSwgYWRkaXRpb25hbENvbnRhaW5lckNsYXNzZXMpIHtcclxuICAgIHJldHVybiBgPGRpdiBjbGFzcz1cImZyYy1jb250YWluZXIke2FkZGl0aW9uYWxDb250YWluZXJDbGFzc2VzID8gXCIgXCIgKyBhZGRpdGlvbmFsQ29udGFpbmVyQ2xhc3NlcyA6IFwiXCJ9JHtydGwgPyBcIiBmcmMtcnRsXCIgOiBcIlwifVwiPlxuPHN2ZyBjbGFzcz1cImZyYy1pY29uXCIke3N2Z0FyaWFIaWRkZW4gPyAnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiJyA6IFwiXCJ9IHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgaGVpZ2h0PVwiMzJcIiB3aWR0aD1cIjMyXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPiR7c3ZnQ29udGVudH08L3N2Zz5cbjxkaXYgY2xhc3M9XCJmcmMtY29udGVudFwiPlxuICAgIDxzcGFuIGNsYXNzPVwiZnJjLXRleHRcIiAke2RlYnVnRGF0YSA/IGBkYXRhLWRlYnVnPVwiJHtkZWJ1Z0RhdGF9XCJgIDogYGB9PiR7dGV4dENvbnRlbnR9PC9zcGFuPlxuICAgICR7YnV0dG9uVGV4dCA/IGA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImZyYy1idXR0b25cIj4ke2J1dHRvblRleHR9PC9idXR0b24+YCA6IFwiXCJ9XG4gICAgJHtwcm9ncmVzcyA/IGA8cHJvZ3Jlc3MgY2xhc3M9XCJmcmMtcHJvZ3Jlc3NcIiB2YWx1ZT1cIjBcIj4wJTwvcHJvZ3Jlc3M+YCA6IFwiXCJ9XG48L2Rpdj5cbjwvZGl2PjxzcGFuIGNsYXNzPVwiZnJjLWJhbm5lciR7cnRsID8gXCIgZnJjLXJ0bFwiIDogXCJcIn1cIj48YSBsYW5nPVwiZW5cIiBocmVmPVwiaHR0cHM6Ly9mcmllbmRseWNhcHRjaGEuY29tL1wiIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCI+PGI+RnJpZW5kbHk8L2I+Q2FwdGNoYSDih5c8L2E+PC9zcGFuPlxuJHtmaWVsZE5hbWUgPT09IFwiLVwiID8gXCJcIiA6IGA8aW5wdXQgbmFtZT1cIiR7ZmllbGROYW1lfVwiIGNsYXNzPVwiZnJjLWNhcHRjaGEtc29sdXRpb25cIiB0eXBlPVwiaGlkZGVuXCIgdmFsdWU9XCIke3NvbHV0aW9uU3RyaW5nfVwiPmB9YDtcclxufVxyXG4vKipcclxuICogVXNlZCB3aGVuIHRoZSB3aWRnZXQgaXMgcmVhZHkgdG8gc3RhcnQgc29sdmluZy5cclxuICovXHJcbmZ1bmN0aW9uIGdldFJlYWR5SFRNTChmaWVsZE5hbWUsIGwpIHtcclxuICAgIHJldHVybiBnZXRUZW1wbGF0ZShmaWVsZE5hbWUsIGwucnRsLCBgPHBhdGggZD1cIk0xNywxMWMwLjM0LDAsMC42NywwLjA0LDEsMC4wOVY2LjI3TDEwLjUsM0wzLDYuMjd2NC45MWMwLDQuNTQsMy4yLDguNzksNy41LDkuODJjMC41NS0wLjEzLDEuMDgtMC4zMiwxLjYtMC41NSBDMTEuNDEsMTkuNDcsMTEsMTguMjgsMTEsMTdDMTEsMTMuNjksMTMuNjksMTEsMTcsMTF6XCIvPjxwYXRoIGQ9XCJNMTcsMTNjLTIuMjEsMC00LDEuNzktNCw0YzAsMi4yMSwxLjc5LDQsNCw0czQtMS43OSw0LTRDMjEsMTQuNzksMTkuMjEsMTMsMTcsMTN6IE0xNywxNC4zOFwiLz5gLCB0cnVlLCBsLnRleHRfcmVhZHksIFwiLlVOU1RBUlRFRFwiLCBsLmJ1dHRvbl9zdGFydCwgZmFsc2UpO1xyXG59XHJcbi8qKlxyXG4gKiBVc2VkIHdoZW4gdGhlIHdpZGdldCBpcyByZXRyaWV2aW5nIGEgcHV6emxlXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRGZXRjaGluZ0hUTUwoZmllbGROYW1lLCBsKSB7XHJcbiAgICByZXR1cm4gZ2V0VGVtcGxhdGUoZmllbGROYW1lLCBsLnJ0bCwgbG9hZGVyU1ZHLCB0cnVlLCBsLnRleHRfZmV0Y2hpbmcsIFwiLkZFVENISU5HXCIsIHVuZGVmaW5lZCwgdHJ1ZSk7XHJcbn1cclxuLyoqXHJcbiAqIFVzZWQgd2hlbiB0aGUgc29sdmVyIGlzIHJ1bm5pbmcsIGRpc3BsYXlzIGEgcHJvZ3Jlc3MgYmFyLlxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0UnVubmluZ0hUTUwoZmllbGROYW1lLCBsKSB7XHJcbiAgICByZXR1cm4gZ2V0VGVtcGxhdGUoZmllbGROYW1lLCBsLnJ0bCwgbG9hZGVyU1ZHLCB0cnVlLCBsLnRleHRfc29sdmluZywgXCIuVU5GSU5JU0hFRFwiLCB1bmRlZmluZWQsIHRydWUpO1xyXG59XHJcbmZ1bmN0aW9uIGdldERvbmVIVE1MKGZpZWxkTmFtZSwgbCwgc29sdXRpb24sIGRhdGEpIHtcclxuICAgIGNvbnN0IHRpbWVEYXRhID0gYCR7ZGF0YS50LnRvRml4ZWQoMCl9cyAoJHsoKGRhdGEuaCAvIGRhdGEudCkgKiAwLjAwMSkudG9GaXhlZCgwKX1LL3MpJHtkYXRhLnNvbHZlciA9PT0gU09MVkVSX1RZUEVfSlMgPyBcIiBKUyBGYWxsYmFja1wiIDogXCJcIn1gO1xyXG4gICAgcmV0dXJuIGdldFRlbXBsYXRlKGZpZWxkTmFtZSwgbC5ydGwsIGA8dGl0bGU+JHtsLnRleHRfY29tcGxldGVkX3NyfTwvdGl0bGU+PHBhdGggZD1cIk0xMiAxTDMgNXY2YzAgNS41NSAzLjg0IDEwLjc0IDkgMTIgNS4xNi0xLjI2IDktNi40NSA5LTEyVjVsLTktNHptLTIgMTZsLTQtNCAxLjQxLTEuNDFMMTAgMTQuMTdsNi41OS02LjU5TDE4IDlsLTggOHpcIj48L3BhdGg+YCwgZmFsc2UsIGwudGV4dF9jb21wbGV0ZWQsIHNvbHV0aW9uLCB1bmRlZmluZWQsIGZhbHNlLCB0aW1lRGF0YSwgXCJmcmMtc3VjY2Vzc1wiKTtcclxufVxyXG5mdW5jdGlvbiBnZXRFeHBpcmVkSFRNTChmaWVsZE5hbWUsIGwpIHtcclxuICAgIHJldHVybiBnZXRUZW1wbGF0ZShmaWVsZE5hbWUsIGwucnRsLCBlcnJvclNWRywgdHJ1ZSwgbC50ZXh0X2V4cGlyZWQsIFwiLkVYUElSRURcIiwgbC5idXR0b25fcmVzdGFydCk7XHJcbn1cclxuZnVuY3Rpb24gZ2V0RXJyb3JIVE1MKGZpZWxkTmFtZSwgbCwgZXJyb3JEZXNjcmlwdGlvbiwgcmVjb3ZlcmFibGUgPSB0cnVlLCBoZWFkbGVzcyA9IGZhbHNlKSB7XHJcbiAgICByZXR1cm4gZ2V0VGVtcGxhdGUoZmllbGROYW1lLCBsLnJ0bCwgZXJyb3JTVkcsIHRydWUsIGA8Yj4ke2wudGV4dF9lcnJvcn08L2I+PGJyPiR7ZXJyb3JEZXNjcmlwdGlvbn1gLCBoZWFkbGVzcyA/IFwiLkhFQURMRVNTX0VSUk9SXCIgOiBcIi5FUlJPUlwiLCByZWNvdmVyYWJsZSA/IGwuYnV0dG9uX3JldHJ5IDogdW5kZWZpbmVkKTtcclxufVxyXG4vKipcclxuICogSW5qZWN0cyB0aGUgc3R5bGUgaWYgbm8gI2ZyYy1zdHlsZSBlbGVtZW50IGlzIGFscmVhZHkgcHJlc2VudFxyXG4gKiAodG8gc3VwcG9ydCBjdXN0b20gc3R5bGVzaGVldHMpXHJcbiAqL1xyXG5mdW5jdGlvbiBpbmplY3RTdHlsZShzdHlsZU5vbmNlID0gbnVsbCkge1xyXG4gICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ZyYy1zdHlsZVwiKSkge1xyXG4gICAgICAgIGNvbnN0IHN0eWxlU2hlZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XHJcbiAgICAgICAgc3R5bGVTaGVldC5pZCA9IFwiZnJjLXN0eWxlXCI7XHJcbiAgICAgICAgc3R5bGVTaGVldC5pbm5lckhUTUwgPSBjc3M7XHJcbiAgICAgICAgaWYgKHN0eWxlTm9uY2UpIHtcclxuICAgICAgICAgICAgc3R5bGVTaGVldC5zZXRBdHRyaWJ1dGUoJ25vbmNlJywgc3R5bGVOb25jZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVTaGVldCk7XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqIEBwYXJhbSBlbGVtZW50IHBhcmVudCBlbGVtZW50IG9mIGZyaWVuZGx5Y2FwdGNoYVxyXG4gKiBAcGFyYW0gcHJvZ3Jlc3MgdmFsdWUgYmV0d2VlbiAwIGFuZCAxXHJcbiAqL1xyXG5mdW5jdGlvbiB1cGRhdGVQcm9ncmVzc0JhcihlbGVtZW50LCBkYXRhKSB7XHJcbiAgICBjb25zdCBwID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmZyYy1wcm9ncmVzc1wiKTtcclxuICAgIGNvbnN0IHBlcmMgPSAoZGF0YS5pICsgMSkgLyBkYXRhLm47XHJcbiAgICBpZiAocCkge1xyXG4gICAgICAgIHAudmFsdWUgPSBwZXJjO1xyXG4gICAgICAgIHAuaW5uZXJUZXh0ID0gKHBlcmMgKiAxMDApLnRvRml4ZWQoMSkgKyBcIiVcIjtcclxuICAgICAgICBwLnRpdGxlID0gZGF0YS5pICsgMSArIFwiL1wiICsgZGF0YS5uICsgXCIgKFwiICsgKChkYXRhLmggLyBkYXRhLnQpICogMC4wMDEpLnRvRml4ZWQoMCkgKyBcIksvcylcIjtcclxuICAgIH1cclxufVxyXG4vKipcclxuICogVHJhdmVyc2VzIHBhcmVudCBub2RlcyB1bnRpbCBhIDxmb3JtPiBpcyBmb3VuZCwgcmV0dXJucyBudWxsIGlmIG5vdCBmb3VuZC5cclxuICovXHJcbmZ1bmN0aW9uIGZpbmRQYXJlbnRGb3JtRWxlbWVudChlbGVtZW50KSB7XHJcbiAgICB3aGlsZSAoZWxlbWVudC50YWdOYW1lICE9PSBcIkZPUk1cIikge1xyXG4gICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBlbGVtZW50O1xyXG59XHJcbi8qKlxyXG4gKiBBZGQgbGlzdGVuZXIgdG8gc3BlY2lmaWVkIGVsZW1lbnQgdGhhdCB3aWxsIG9ubHkgZmlyZSBvbmNlIG9uIGZvY3VzLlxyXG4gKi9cclxuZnVuY3Rpb24gZXhlY3V0ZU9uY2VPbkZvY3VzSW5FdmVudChlbGVtZW50LCBsaXN0ZW5lcikge1xyXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNpblwiLCBsaXN0ZW5lciwgeyBvbmNlOiB0cnVlLCBwYXNzaXZlOiB0cnVlIH0pO1xyXG59XG5cbi8vIERlZmVuc2l2ZSBpbml0IHRvIG1ha2UgaXQgZWFzaWVyIHRvIGludGVncmF0ZSB3aXRoIEdhdHNieSwgTmV4dEpTLCBhbmQgZnJpZW5kcy5cclxubGV0IG5hdjtcclxubGV0IHVhO1xyXG5pZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2YgbmF2aWdhdG9yLnVzZXJBZ2VudCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgbmF2ID0gbmF2aWdhdG9yO1xyXG4gICAgdWEgPSBuYXYudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XHJcbn1cclxuLyoqXHJcbiAqIEhlYWRsZXNzIGJyb3dzZXIgZGV0ZWN0aW9uIG9uIHRoZSBjbGllbnRzaWRlIGlzIGltcGVyZmVjdC4gT25lIGNhbiBtb2RpZnkgYW55IGNsaWVudHNpZGUgY29kZSB0byBkaXNhYmxlIG9yIGNoYW5nZSB0aGlzIGNoZWNrLFxyXG4gKiBhbmQgb25lIGNhbiBzcG9vZiB3aGF0ZXZlciBpcyBjaGVja2VkIGhlcmUuIEhvd2V2ZXIsIHRoYXQgZG9lc24ndCBtYWtlIGl0IHdvcnRobGVzczogaXQncyB5ZXQgYW5vdGhlciBodXJkbGUgZm9yIHNwYW1tZXJzIGFuZFxyXG4gKiBpdCBzdG9wcyB1bnNvcGhpc3RpY2F0ZWQgc2NyaXB0ZXJzIGZyb20gbWFraW5nIGFueSByZXF1ZXN0IHdoYXRzb2V2ZXIuXHJcbiAqL1xyXG5mdW5jdGlvbiBpc0hlYWRsZXNzKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgIC8vdGVsbC10YWxlIGJvdCBzaWduc1xyXG4gICAgdWEuaW5kZXhPZihcImhlYWRsZXNzXCIpICE9PSAtMSB8fFxyXG4gICAgICAgIG5hdi5hcHBWZXJzaW9uLmluZGV4T2YoXCJIZWFkbGVzc1wiKSAhPT0gLTEgfHxcclxuICAgICAgICB1YS5pbmRleE9mKFwiYm90XCIpICE9PSAtMSB8fCAvLyBodHRwOi8vd3d3LnVzZXJhZ2VudHN0cmluZy5jb20vcGFnZXMvdXNlcmFnZW50c3RyaW5nLnBocD90eXA9QnJvd3NlclxyXG4gICAgICAgIHVhLmluZGV4T2YoXCJjcmF3bFwiKSAhPT0gLTEgfHwgLy8gT25seSBJRTUgaGFzIHR3byBkaXN0cmlidXRpb25zIHRoYXQgaGFzIHRoaXMgb24gd2luZG93cyBOVC4uIHNvIHllYWguXHJcbiAgICAgICAgbmF2LndlYmRyaXZlciA9PT0gdHJ1ZSB8fFxyXG4gICAgICAgICFuYXYubGFuZ3VhZ2UgfHxcclxuICAgICAgICAobmF2Lmxhbmd1YWdlcyAhPT0gdW5kZWZpbmVkICYmICFuYXYubGFuZ3VhZ2VzLmxlbmd0aCkgLy8gSUUgMTEgZG9lcyBub3Qgc3VwcG9ydCBOYXZpZ2F0b3JMYW5ndWFnZS5sYW5ndWFnZXMgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL05hdmlnYXRvckxhbmd1YWdlL2xhbmd1YWdlc1xyXG4gICAgKTtcclxufVxuXG4vKipcbiAqIE1hcHMgYSB2YWx1ZSBiZXR3ZWVuIDAgYW5kIDI1NSB0byBhIGRpZmZpY3VsdHkgdGhyZXNob2xkIChhcyB1aW50MzIpXG4gKiBEaWZmaWN1bHR5IDAgbWFwcyB0byA5OS45OSUgcHJvYmFiaWxpdHkgb2YgYmVpbmcgcmlnaHQgb24gdGhlIGZpcnN0IGF0dGVtcHRcbiAqIEFueXRoaW5nIGFib3ZlIDI1MCBuZWVkcyAyXjMyIHRyaWVzIG9uIGF2ZXJhZ2UgdG8gc29sdmUuXG4gKiAxNTAgdG8gMTgwIHNlZW1zIHJlYXNvbmFibGVcbiAqL1xuZnVuY3Rpb24gZGlmZmljdWx0eVRvVGhyZXNob2xkKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlID4gMjU1KSB7XG4gICAgICAgIHZhbHVlID0gMjU1O1xuICAgIH1cbiAgICBlbHNlIGlmICh2YWx1ZSA8IDApIHtcbiAgICAgICAgdmFsdWUgPSAwO1xuICAgIH1cbiAgICByZXR1cm4gTWF0aC5wb3coMiwgKDI1NS45OTkgLSB2YWx1ZSkgLyA4LjApID4+PiAwO1xufVxuXG5jb25zdCBQVVpaTEVfRVhQSVJZX09GRlNFVCA9IDEzO1xuY29uc3QgTlVNQkVSX09GX1BVWlpMRVNfT0ZGU0VUID0gMTQ7XG5jb25zdCBQVVpaTEVfRElGRklDVUxUWV9PRkZTRVQgPSAxNTtcbmZ1bmN0aW9uIGdldFB1enpsZVNvbHZlcklucHV0cyhwdXp6bGVCdWZmZXIsIG51bVB1enpsZXMpIHtcbiAgICBjb25zdCBzdGFydGluZ1BvaW50cyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtUHV6emxlczsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gbmV3IFVpbnQ4QXJyYXkoQ0hBTExFTkdFX1NJWkVfQllURVMpO1xuICAgICAgICBpbnB1dC5zZXQocHV6emxlQnVmZmVyKTtcbiAgICAgICAgaW5wdXRbMTIwXSA9IGk7XG4gICAgICAgIHN0YXJ0aW5nUG9pbnRzLnB1c2goaW5wdXQpO1xuICAgIH1cbiAgICByZXR1cm4gc3RhcnRpbmdQb2ludHM7XG59XG5cbmZ1bmN0aW9uIGRlY29kZUJhc2U2NFB1enpsZShiYXNlNjRQdXp6bGUpIHtcclxuICAgIGNvbnN0IHBhcnRzID0gYmFzZTY0UHV6emxlLnNwbGl0KFwiLlwiKTtcclxuICAgIGNvbnN0IHB1enpsZSA9IHBhcnRzWzFdO1xyXG4gICAgY29uc3QgYXJyID0gZGVjb2RlKHB1enpsZSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNpZ25hdHVyZTogcGFydHNbMF0sXHJcbiAgICAgICAgYmFzZTY0OiBwdXp6bGUsXHJcbiAgICAgICAgYnVmZmVyOiBhcnIsXHJcbiAgICAgICAgbjogYXJyW05VTUJFUl9PRl9QVVpaTEVTX09GRlNFVF0sXHJcbiAgICAgICAgdGhyZXNob2xkOiBkaWZmaWN1bHR5VG9UaHJlc2hvbGQoYXJyW1BVWlpMRV9ESUZGSUNVTFRZX09GRlNFVF0pLFxyXG4gICAgICAgIGV4cGlyeTogYXJyW1BVWlpMRV9FWFBJUllfT0ZGU0VUXSAqIDMwMDAwMCxcclxuICAgIH07XHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gZ2V0UHV6emxlKHVybHNTZXBhcmF0ZWRCeUNvbW1hLCBzaXRlS2V5LCBsYW5nKSB7XHJcbiAgICBjb25zdCB1cmxzID0gdXJsc1NlcGFyYXRlZEJ5Q29tbWEuc3BsaXQoXCIsXCIpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1cmxzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaEFuZFJldHJ5V2l0aEJhY2tvZmYodXJsc1tpXSArIFwiP3NpdGVrZXk9XCIgKyBzaXRlS2V5LCB7IGhlYWRlcnM6IFtbXCJ4LWZyYy1jbGllbnRcIiwgXCJqcy0wLjkuMTlcIl1dLCBtb2RlOiBcImNvcnNcIiB9LCAyKTtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGpzb24uZGF0YS5wdXp6bGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQganNvbjtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLyogRG8gbm90aGluZywgdGhlIGVycm9yIGlzIG5vdCB2YWxpZCBKU09OICovXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoanNvbiAmJiBqc29uLmVycm9ycyAmJiBqc29uLmVycm9yc1swXSA9PT0gXCJlbmRwb2ludF9ub3RfZW5hYmxlZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoYEVuZHBvaW50IG5vdCBhbGxvd2VkICgke3Jlc3BvbnNlLnN0YXR1c30pYCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoaSA9PT0gdXJscy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoYFJlc3BvbnNlIHN0YXR1cyAke3Jlc3BvbnNlLnN0YXR1c30gJHtyZXNwb25zZS5zdGF0dXNUZXh0fSAke2pzb24gPyBqc29uLmVycm9ycyA6IFwiXCJ9YCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIltGUkMgRmV0Y2hdOlwiLCBlKTtcclxuICAgICAgICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKGAke2xhbmcudGV4dF9mZXRjaF9lcnJvcn0gPGEgY2xhc3M9XCJmcmMtZXJyLXVybFwiIGhyZWY9XCIke3VybHNbaV19XCI+JHt1cmxzW2ldfTwvYT5gKTtcclxuICAgICAgICAgICAgZXJyLnJhd0Vycm9yID0gZTtcclxuICAgICAgICAgICAgdGhyb3cgZXJyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIFRoaXMgY29kZSBzaG91bGQgbmV2ZXIgYmUgcmVhY2hlZC5cclxuICAgIHRocm93IEVycm9yKGBJbnRlcm5hbCBlcnJvcmApO1xyXG59XHJcbi8qKlxyXG4gKiBSZXRyaWVzIGdpdmVuIHJlcXVlc3Qgd2l0aCBleHBvbmVudGlhbCBiYWNrb2ZmIChzdGFydGluZyB3aXRoIDEwMDBtcyBkZWxheSwgbXVsdGlwbHlpbmcgYnkgNCBldmVyeSB0aW1lKVxyXG4gKiBAcGFyYW0gdXJsIFJlcXVlc3QgKGNhbiBiZSBzdHJpbmcgdXJsKSB0byBmZXRjaFxyXG4gKiBAcGFyYW0gb3B0cyBPcHRpb25zIGZvciBmZXRjaFxyXG4gKiBAcGFyYW0gbiBOdW1iZXIgb2YgdGltZXMgdG8gYXR0ZW1wdCBiZWZvcmUgZ2l2aW5nIHVwLlxyXG4gKi9cclxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hBbmRSZXRyeVdpdGhCYWNrb2ZmKHVybCwgb3B0cywgbikge1xyXG4gICAgbGV0IHRpbWUgPSAxMDAwO1xyXG4gICAgcmV0dXJuIGZldGNoKHVybCwgb3B0cykuY2F0Y2goYXN5bmMgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgaWYgKG4gPT09IDApXHJcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xyXG4gICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKChyKSA9PiBzZXRUaW1lb3V0KHIsIHRpbWUpKTtcclxuICAgICAgICB0aW1lICo9IDQ7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoQW5kUmV0cnlXaXRoQmFja29mZih1cmwsIG9wdHMsIG4gLSAxKTtcclxuICAgIH0pO1xyXG59XG5cbi8vIEVuZ2xpc2hcclxuY29uc3QgTEFOR19FTiA9IHtcclxuICAgIHRleHRfaW5pdDogXCJJbml0aWFsaXppbmcuLi5cIixcclxuICAgIHRleHRfcmVhZHk6IFwiQW50aS1Sb2JvdCBWZXJpZmljYXRpb25cIixcclxuICAgIGJ1dHRvbl9zdGFydDogXCJDbGljayB0byBzdGFydCB2ZXJpZmljYXRpb25cIixcclxuICAgIHRleHRfZmV0Y2hpbmc6IFwiRmV0Y2hpbmcgQ2hhbGxlbmdlXCIsXHJcbiAgICB0ZXh0X3NvbHZpbmc6IFwiVmVyaWZ5aW5nIHlvdSBhcmUgaHVtYW4uLi5cIixcclxuICAgIHRleHRfY29tcGxldGVkOiBcIkkgYW0gaHVtYW5cIixcclxuICAgIHRleHRfY29tcGxldGVkX3NyOiBcIkF1dG9tYXRpYyBzcGFtIGNoZWNrIGNvbXBsZXRlZFwiLFxyXG4gICAgdGV4dF9leHBpcmVkOiBcIkFudGktUm9ib3QgdmVyaWZpY2F0aW9uIGV4cGlyZWRcIixcclxuICAgIGJ1dHRvbl9yZXN0YXJ0OiBcIlJlc3RhcnRcIixcclxuICAgIHRleHRfZXJyb3I6IFwiVmVyaWZpY2F0aW9uIGZhaWxlZFwiLFxyXG4gICAgYnV0dG9uX3JldHJ5OiBcIlJldHJ5XCIsXHJcbiAgICB0ZXh0X2ZldGNoX2Vycm9yOiBcIkZhaWxlZCB0byBjb25uZWN0IHRvXCIsXHJcbn07XHJcbi8vIEZyZW5jaFxyXG5jb25zdCBMQU5HX0ZSID0ge1xyXG4gICAgdGV4dF9pbml0OiBcIkNoYXJnZW1lbnQuLi5cIixcclxuICAgIHRleHRfcmVhZHk6IFwiVsOpcmlmaWNhdGlvbiBBbnRpLVJvYm90XCIsXHJcbiAgICBidXR0b25fc3RhcnQ6IFwiQ2xpcXVlIGljaSBwb3VyIHbDqXJpZmllclwiLFxyXG4gICAgdGV4dF9mZXRjaGluZzogXCJDaGFyZ2VtZW50IGR1IGTDqWZpXCIsXHJcbiAgICB0ZXh0X3NvbHZpbmc6IFwiTm91cyB2w6lyaWZpb25zIHF1ZSB2b3VzIG4nw6p0ZXMgcGFzIHVuIHJvYm90Li4uXCIsXHJcbiAgICB0ZXh0X2NvbXBsZXRlZDogXCJKZSBuZSBzdWlzIHBhcyB1biByb2JvdFwiLFxyXG4gICAgdGV4dF9jb21wbGV0ZWRfc3I6IFwiVsOpcmlmaWNhdGlvbiBhdXRvbWF0aXF1ZSBkZXMgc3BhbXMgdGVybWluw6llXCIsXHJcbiAgICB0ZXh0X2V4cGlyZWQ6IFwiVsOpcmlmaWNhdGlvbiBhbnRpLXJvYm90IGV4cGlyw6llXCIsXHJcbiAgICBidXR0b25fcmVzdGFydDogXCJSZWTDqW1hcnJlclwiLFxyXG4gICAgdGV4dF9lcnJvcjogXCLDiWNoZWMgZGUgbGEgdsOpcmlmaWNhdGlvblwiLFxyXG4gICAgYnV0dG9uX3JldHJ5OiBcIlJlY29tbWVuY2VyXCIsXHJcbiAgICB0ZXh0X2ZldGNoX2Vycm9yOiBcIlByb2Jsw6htZSBkZSBjb25uZXhpb24gYXZlY1wiLFxyXG59O1xyXG4vLyBHZXJtYW5cclxuY29uc3QgTEFOR19ERSA9IHtcclxuICAgIHRleHRfaW5pdDogXCJJbml0aWFsaXNpZXJ1bmcuLi5cIixcclxuICAgIHRleHRfcmVhZHk6IFwiQW50aS1Sb2JvdGVyLVZlcmlmaXppZXJ1bmdcIixcclxuICAgIGJ1dHRvbl9zdGFydDogXCJIaWVyIGtsaWNrZW5cIixcclxuICAgIHRleHRfZmV0Y2hpbmc6IFwiSGVyYXVzZm9yZGVydW5nIGxhZGVuLi4uXCIsXHJcbiAgICB0ZXh0X3NvbHZpbmc6IFwiVmVyaWZpemllcnVuZywgZGFzcyBTaWUgZWluIE1lbnNjaCBzaW5kLi4uXCIsXHJcbiAgICB0ZXh0X2NvbXBsZXRlZDogXCJJY2ggYmluIGVpbiBNZW5zY2hcIixcclxuICAgIHRleHRfY29tcGxldGVkX3NyOiBcIkF1dG9tYXRpc2NoZSBTcGFtcHLDvGZ1bmcgYWJnZXNjaGxvc3NlblwiLFxyXG4gICAgdGV4dF9leHBpcmVkOiBcIlZlcmlmaXppZXJ1bmcgYWJnZWxhdWZlblwiLFxyXG4gICAgYnV0dG9uX3Jlc3RhcnQ6IFwiRXJuZXV0IHN0YXJ0ZW5cIixcclxuICAgIHRleHRfZXJyb3I6IFwiVmVyaWZpemllcnVuZyBmZWhsZ2VzY2hsYWdlblwiLFxyXG4gICAgYnV0dG9uX3JldHJ5OiBcIkVybmV1dCB2ZXJzdWNoZW5cIixcclxuICAgIHRleHRfZmV0Y2hfZXJyb3I6IFwiVmVyYmluZHVuZ3Nwcm9ibGVtIG1pdFwiLFxyXG59O1xyXG4vLyBEdXRjaFxyXG5jb25zdCBMQU5HX05MID0ge1xyXG4gICAgdGV4dF9pbml0OiBcIkluaXRpYWxpemVyZW4uLi5cIixcclxuICAgIHRleHRfcmVhZHk6IFwiQW50aS1yb2JvdHZlcmlmaWNhdGllXCIsXHJcbiAgICBidXR0b25fc3RhcnQ6IFwiS2xpayBvbSB0ZSBzdGFydGVuXCIsXHJcbiAgICB0ZXh0X2ZldGNoaW5nOiBcIkFhbiBoZXQgbGFkZW4uLi5cIixcclxuICAgIHRleHRfc29sdmluZzogXCJBbnRpLXJvYm90dmVyaWZpY2F0aWUgYmV6aWcuLi5cIixcclxuICAgIHRleHRfY29tcGxldGVkOiBcIklrIGJlbiBlZW4gbWVuc1wiLFxyXG4gICAgdGV4dF9jb21wbGV0ZWRfc3I6IFwiQXV0b21hdGlzY2hlIGFudGktc3BhbWNoZWNrIHZvbHRvb2lkXCIsXHJcbiAgICB0ZXh0X2V4cGlyZWQ6IFwiVmVyaWZpY2F0aWUgdmVybG9wZW5cIixcclxuICAgIGJ1dHRvbl9yZXN0YXJ0OiBcIk9wbmlldXcgc3RhcnRlblwiLFxyXG4gICAgdGV4dF9lcnJvcjogXCJWZXJpZmljYXRpZSBtaXNsdWt0XCIsXHJcbiAgICBidXR0b25fcmV0cnk6IFwiT3BuaWV1dyBwcm9iZXJlblwiLFxyXG4gICAgdGV4dF9mZXRjaF9lcnJvcjogXCJWZXJiaW5kaW5nIG1pc2x1a3QgbWV0XCIsXHJcbn07XHJcbi8vIEl0YWxpYW5cclxuY29uc3QgTEFOR19JVCA9IHtcclxuICAgIHRleHRfaW5pdDogXCJJbml6aWFsaXp6YXppb25lLi4uXCIsXHJcbiAgICB0ZXh0X3JlYWR5OiBcIlZlcmlmaWNhIEFudGktUm9ib3RcIixcclxuICAgIGJ1dHRvbl9zdGFydDogXCJDbGljY2EgcGVyIGluaXppYXJlXCIsXHJcbiAgICB0ZXh0X2ZldGNoaW5nOiBcIkNhcmljYW1lbnRvLi4uXCIsXHJcbiAgICB0ZXh0X3NvbHZpbmc6IFwiVmVyaWZpY2FuZG8gY2hlIHNlaSB1bWFuby4uLlwiLFxyXG4gICAgdGV4dF9jb21wbGV0ZWQ6IFwiTm9uIHNvbm8gdW4gcm9ib3RcIixcclxuICAgIHRleHRfY29tcGxldGVkX3NyOiBcIkNvbnRyb2xsbyBhdXRvbWF0aWNvIGRlbGxvIHNwYW0gY29tcGxldGF0b1wiLFxyXG4gICAgdGV4dF9leHBpcmVkOiBcIlZlcmlmaWNhIEFudGktUm9ib3Qgc2NhZHV0YVwiLFxyXG4gICAgYnV0dG9uX3Jlc3RhcnQ6IFwiUmljb21pbmNpYVwiLFxyXG4gICAgdGV4dF9lcnJvcjogXCJWZXJpZmljYSBmYWxsaXRhXCIsXHJcbiAgICBidXR0b25fcmV0cnk6IFwiUmlwcm92YVwiLFxyXG4gICAgdGV4dF9mZXRjaF9lcnJvcjogXCJQcm9ibGVtYSBkaSBjb25uZXNzaW9uZSBjb25cIixcclxufTtcclxuLy8gUG9ydHVndWVzZVxyXG5jb25zdCBMQU5HX1BUID0ge1xyXG4gICAgdGV4dF9pbml0OiBcIkluaWNpYWxpemFuZG8uLi5cIixcclxuICAgIHRleHRfcmVhZHk6IFwiVmVyaWZpY2HDp8OjbyBBbnRpLVJvYsO0XCIsXHJcbiAgICBidXR0b25fc3RhcnQ6IFwiQ2xpcXVlIHBhcmEgaW5pY2lhciB2ZXJpZmljYcOnw6NvXCIsXHJcbiAgICB0ZXh0X2ZldGNoaW5nOiBcIkNhcnJlZ2FuZG8uLi5cIixcclxuICAgIHRleHRfc29sdmluZzogXCJWZXJpZmljYW5kbyBzZSB2b2PDqiDDqSBodW1hbm8uLi5cIixcclxuICAgIHRleHRfY29tcGxldGVkOiBcIkV1IHNvdSBodW1hbm9cIixcclxuICAgIHRleHRfY29tcGxldGVkX3NyOiBcIlZlcmlmaWNhw6fDo28gYXV0b23DoXRpY2EgZGUgc3BhbSBjb25jbHXDrWRhXCIsXHJcbiAgICB0ZXh0X2V4cGlyZWQ6IFwiVmVyaWZpY2HDp8OjbyBBbnRpLVJvYsO0IGV4cGlyYWRhXCIsXHJcbiAgICBidXR0b25fcmVzdGFydDogXCJSZWluaWNpYXJcIixcclxuICAgIHRleHRfZXJyb3I6IFwiVmVyaWZpY2HDp8OjbyBmYWxob3VcIixcclxuICAgIGJ1dHRvbl9yZXRyeTogXCJUZW50YXIgbm92YW1lbnRlXCIsXHJcbiAgICB0ZXh0X2ZldGNoX2Vycm9yOiBcIkZhbGhhIGRlIGNvbmV4w6NvIGNvbVwiLFxyXG59O1xyXG4vLyBTcGFuaXNoXHJcbmNvbnN0IExBTkdfRVMgPSB7XHJcbiAgICB0ZXh0X2luaXQ6IFwiSW5pY2lhbGl6YW5kby4uLlwiLFxyXG4gICAgdGV4dF9yZWFkeTogXCJWZXJpZmljYWNpw7NuIEFudGktUm9ib3RcIixcclxuICAgIGJ1dHRvbl9zdGFydDogXCJIYWdhIGNsaWMgcGFyYSBpbmljaWFyIGxhIHZlcmlmaWNhY2nDs25cIixcclxuICAgIHRleHRfZmV0Y2hpbmc6IFwiQ2FyZ2FuZG8gZGVzYWbDrW9cIixcclxuICAgIHRleHRfc29sdmluZzogXCJWZXJpZmljYW5kbyBxdWUgZXJlcyBodW1hbm8uLi5cIixcclxuICAgIHRleHRfY29tcGxldGVkOiBcIlNveSBodW1hbm9cIixcclxuICAgIHRleHRfY29tcGxldGVkX3NyOiBcIlZlcmlmaWNhY2nDs24gYXV0b23DoXRpY2EgZGUgc3BhbSBjb21wbGV0YWRhXCIsXHJcbiAgICB0ZXh0X2V4cGlyZWQ6IFwiVmVyaWZpY2FjacOzbiBBbnRpLVJvYm90IGV4cGlyYWRhXCIsXHJcbiAgICBidXR0b25fcmVzdGFydDogXCJSZWluaWNpYXJcIixcclxuICAgIHRleHRfZXJyb3I6IFwiSGEgZmFsbGFkbyBsYSB2ZXJpZmljYWNpw7NuXCIsXHJcbiAgICBidXR0b25fcmV0cnk6IFwiSW50ZW50YXIgZGUgbnVldm9cIixcclxuICAgIHRleHRfZmV0Y2hfZXJyb3I6IFwiRXJyb3IgYWwgY29uZWN0YXJzZSBhXCIsXHJcbn07XHJcbi8vIENhdGFsYW5cclxuY29uc3QgTEFOR19DQSA9IHtcclxuICAgIHRleHRfaW5pdDogXCJJbmljaWFsaXR6YW50Li4uXCIsXHJcbiAgICB0ZXh0X3JlYWR5OiBcIlZlcmlmaWNhY2nDsyBBbnRpLVJvYm90XCIsXHJcbiAgICBidXR0b25fc3RhcnQ6IFwiRmVzIGNsaWMgcGVyIGNvbWVuw6dhciBsYSB2ZXJpZmljYWNpw7NcIixcclxuICAgIHRleHRfZmV0Y2hpbmc6IFwiQ2FycmVnYW50IHJlcHRlXCIsXHJcbiAgICB0ZXh0X3NvbHZpbmc6IFwiVmVyaWZpY2FudCBxdWUgZXRzIGh1bcOgLi4uXCIsXHJcbiAgICB0ZXh0X2NvbXBsZXRlZDogXCJTb2MgaHVtw6BcIixcclxuICAgIHRleHRfY29tcGxldGVkX3NyOiBcIlZlcmlmaWNhY2nDsyBhdXRvbcOgdGljYSBkZSBjb3JyZXUgYnJvc3NhIGNvbXBsZXRhZGFcIixcclxuICAgIHRleHRfZXhwaXJlZDogXCJMYSB2ZXJpZmljYWNpw7MgQW50aS1Sb2JvdCBoYSBleHBpcmF0XCIsXHJcbiAgICBidXR0b25fcmVzdGFydDogXCJSZWluaWNpYXJcIixcclxuICAgIHRleHRfZXJyb3I6IFwiSGEgZmFsbGF0IGxhIHZlcmlmaWNhY2nDs1wiLFxyXG4gICAgYnV0dG9uX3JldHJ5OiBcIlRvcm5hciBhIHByb3ZhclwiLFxyXG4gICAgdGV4dF9mZXRjaF9lcnJvcjogXCJFcnJvciBjb25uZWN0YW50IGFcIixcclxufTtcclxuLy8gSmFwYW5lc2VcclxuY29uc3QgTEFOR19KQSA9IHtcclxuICAgIHRleHRfaW5pdDogXCLplovlp4vjgZfjgabjgYTjgb7jgZkuLi5cIixcclxuICAgIHRleHRfcmVhZHk6IFwi44Ki44Oz44OB44Ot44Oc44OD44OI6KqN6Ki8XCIsXHJcbiAgICBidXR0b25fc3RhcnQ6IFwi44Kv44Oq44OD44Kv44GX44Gm6KqN6Ki844KS6ZaL5aeLXCIsXHJcbiAgICB0ZXh0X2ZldGNoaW5nOiBcIuODreODvOODieOBl+OBpuOBhOOBvuOBmVwiLFxyXG4gICAgdGV4dF9zb2x2aW5nOiBcIuiqjeiovOS4rS4uLlwiLFxyXG4gICAgdGV4dF9jb21wbGV0ZWQ6IFwi56eB44Gv44Ot44Oc44OD44OI44Gn44Gv44GC44KK44G+44Gb44KTXCIsXHJcbiAgICB0ZXh0X2NvbXBsZXRlZF9zcjogXCLoh6rli5Xjgrnjg5Hjg6Djg4Hjgqfjg4Pjgq/jgYzlrozkuobjgZfjgb7jgZfjgZ9cIixcclxuICAgIHRleHRfZXhwaXJlZDogXCLoqo3oqLzjga7mnJ/pmZDjgYzliIfjgozjgabjgYTjgb7jgZlcIixcclxuICAgIGJ1dHRvbl9yZXN0YXJ0OiBcIuWGjeW6puiqjeiovOOCkuihjOOBhlwiLFxyXG4gICAgdGV4dF9lcnJvcjogXCLoqo3oqLzjgavjgqjjg6njg7zjgYznmbrnlJ/jgZfjgb7jgZfjgZ9cIixcclxuICAgIGJ1dHRvbl9yZXRyeTogXCLlho3luqboqo3oqLzjgpLooYzjgYZcIixcclxuICAgIHRleHRfZmV0Y2hfZXJyb3I6IFwi5o6l57aa44GM44Gn44GN44G+44Gb44KT44Gn44GX44GfXCIsXHJcbn07XHJcbi8vIERhbmlzaFxyXG5jb25zdCBMQU5HX0RBID0ge1xyXG4gICAgdGV4dF9pbml0OiBcIkFrdGl2ZXJlci4uLlwiLFxyXG4gICAgdGV4dF9yZWFkeTogXCJKZWcgZXIgaWtrZSBlbiByb2JvdFwiLFxyXG4gICAgYnV0dG9uX3N0YXJ0OiBcIktsaWsgZm9yIGF0IHN0YXJ0ZSB2ZXJpZmlrYXRpb25lblwiLFxyXG4gICAgdGV4dF9mZXRjaGluZzogXCJIZW50ZXIgZGF0YVwiLFxyXG4gICAgdGV4dF9zb2x2aW5nOiBcIktvbnRyb2xsZXJlciBhdCBkdSBlciBldCBtZW5uZXNrZS4uLlwiLFxyXG4gICAgdGV4dF9jb21wbGV0ZWQ6IFwiSmVnIGVyIGV0IG1lbm5lc2tlLlwiLFxyXG4gICAgdGV4dF9jb21wbGV0ZWRfc3I6IFwiQXV0b21hdGlzayBzcGFta29udHJvbCBnZW5uZW1mw7hydFwiLFxyXG4gICAgdGV4dF9leHBpcmVkOiBcIlZlcmlmaWthdGlvbmVuIGt1bm5lIGlra2UgZnVsZGbDuHJlc1wiLFxyXG4gICAgYnV0dG9uX3Jlc3RhcnQ6IFwiR2Vuc3RhcnRcIixcclxuICAgIHRleHRfZXJyb3I6IFwiQmVrcsOmZnRlbHNlIG1pc2x5a2tlZGVzXCIsXHJcbiAgICBidXR0b25fcmV0cnk6IFwiUHLDuHYgaWdlblwiLFxyXG4gICAgdGV4dF9mZXRjaF9lcnJvcjogXCJGb3JiaW5kZWxzZW4gbWlzbHlra2VkZXNcIixcclxufTtcclxuLy8gUnVzc2lhblxyXG5jb25zdCBMQU5HX1JVID0ge1xyXG4gICAgdGV4dF9pbml0OiBcItCY0L3QuNGG0LjQsNC70LjQt9Cw0YbQuNGPLi4uXCIsXHJcbiAgICB0ZXh0X3JlYWR5OiBcItCQ0L3RgtC40KDQvtCx0L7RgiDQv9GA0L7QstC10YDQutCwXCIsXHJcbiAgICBidXR0b25fc3RhcnQ6IFwi0J3QsNC20LzQuNGC0LUsINGH0YLQvtCx0Ysg0L3QsNGH0LDRgtGMINC/0YDQvtCy0LXRgNC60YNcIixcclxuICAgIHRleHRfZmV0Y2hpbmc6IFwi0J/QvtC70YPRh9Cw0Y4g0LfQsNC00LDRh9GDXCIsXHJcbiAgICB0ZXh0X3NvbHZpbmc6IFwi0J/RgNC+0LLQtdGA0Y/Rjiwg0YfRgtC+INCy0Ysg0YfQtdC70L7QstC10LouLi5cIixcclxuICAgIHRleHRfY29tcGxldGVkOiBcItCvINGH0LXQu9C+0LLQtdC6XCIsXHJcbiAgICB0ZXh0X2NvbXBsZXRlZF9zcjogXCJB0LLRgtC+0LzQsNGC0LjRh9C10YHQutCw0Y8g0L/RgNC+0LLQtdGA0LrQsCDQvdCwINGB0L/QsNC8INC30LDQstC10YDRiNC10L3QsFwiLFxyXG4gICAgdGV4dF9leHBpcmVkOiBcItCh0YDQvtC6INCQ0L3RgtC40KDQvtCx0L7RgtC90L7QuSDQv9GA0L7QstC10YDQutC4INC40YHRgtGR0LpcIixcclxuICAgIGJ1dHRvbl9yZXN0YXJ0OiBcItCd0LDRh9Cw0YLRjCDQt9Cw0L3QvtCy0L5cIixcclxuICAgIHRleHRfZXJyb3I6IFwi0J7RiNC40LHQutCwINC/0YDQvtCy0LXRgNC60LhcIixcclxuICAgIGJ1dHRvbl9yZXRyeTogXCLQn9C+0LLRgtC+0YDQuNGC0Ywg0LXRidGRINGA0LDQt1wiLFxyXG4gICAgdGV4dF9mZXRjaF9lcnJvcjogXCLQntGI0LjQsdC60LAg0L/QvtC00LrQu9GO0YfQtdC90LjRj1wiLFxyXG59O1xyXG4vLyBTd2VkaXNoXHJcbmNvbnN0IExBTkdfU1YgPSB7XHJcbiAgICB0ZXh0X2luaXQ6IFwiQWt0aXZlcmFyLi4uXCIsXHJcbiAgICB0ZXh0X3JlYWR5OiBcIkphZyDDpHIgaW50ZSBlbiByb2JvdFwiLFxyXG4gICAgYnV0dG9uX3N0YXJ0OiBcIktsaWNrYSBmw7ZyIGF0dCB2ZXJpZmllcmFcIixcclxuICAgIHRleHRfZmV0Y2hpbmc6IFwiSMOkbXRhciBkYXRhXCIsXHJcbiAgICB0ZXh0X3NvbHZpbmc6IFwiS29udHJvbGxlcmFyIGF0dCBkdSDDpHIgbcOkbm5pc2thLi4uXCIsXHJcbiAgICB0ZXh0X2NvbXBsZXRlZDogXCJKYWcgw6RyIGVuIG3DpG5uaXNrYVwiLFxyXG4gICAgdGV4dF9jb21wbGV0ZWRfc3I6IFwiQXV0b21hdGlzayBzcGFta29udHJvbGwgc2x1dGbDtnJkXCIsXHJcbiAgICB0ZXh0X2V4cGlyZWQ6IFwiQW50aS1yb2JvdC12ZXJpZmllcmluZ2VuIGhhciBsw7ZwdCB1dFwiLFxyXG4gICAgYnV0dG9uX3Jlc3RhcnQ6IFwiQsO2cmphIG9tXCIsXHJcbiAgICB0ZXh0X2Vycm9yOiBcIlZlcmlmaWVyaW5nIGt1bmRlIGludGUgc2x1dGbDtnJhc1wiLFxyXG4gICAgYnV0dG9uX3JldHJ5OiBcIk9tc3RhcnRcIixcclxuICAgIHRleHRfZmV0Y2hfZXJyb3I6IFwiVmVyaWZpZXJpbmcgbWlzc2x5Y2thZGVzXCIsXHJcbn07XHJcbi8vIFR1cmtpc2hcclxuY29uc3QgTEFOR19UUiA9IHtcclxuICAgIHRleHRfaW5pdDogXCJCYcWfbGF0xLFsxLF5b3IuLi5cIixcclxuICAgIHRleHRfcmVhZHk6IFwiQW50aS1Sb2JvdCBEb8SfcnVsYW1hc8SxXCIsXHJcbiAgICBidXR0b25fc3RhcnQ6IFwiRG/En3J1bGFtYXnEsSBiYcWfbGF0bWFrIGnDp2luIHTEsWtsYXnEsW5cIixcclxuICAgIHRleHRfZmV0Y2hpbmc6IFwiWcO8a2xlbml5b3JcIixcclxuICAgIHRleHRfc29sdmluZzogXCJSb2JvdCBvbG1hZMSxxJ/EsW7EsXogZG/En3J1bGFuxLF5b3IuLi5cIixcclxuICAgIHRleHRfY29tcGxldGVkOiBcIkJlbiBiaXIgaW5zYW7EsW1cIixcclxuICAgIHRleHRfY29tcGxldGVkX3NyOiBcIk90b21hdGlrIHNwYW0ga29udHJvbMO8IHRhbWFtbGFuZMSxXCIsXHJcbiAgICB0ZXh0X2V4cGlyZWQ6IFwiQW50aS1Sb2JvdCBkb8SfcnVsYW1hc8SxbsSxbiBzw7xyZXNpIGRvbGR1XCIsXHJcbiAgICBidXR0b25fcmVzdGFydDogXCJZZW5pZGVuIGJhxZ9sYXRcIixcclxuICAgIHRleHRfZXJyb3I6IFwiRG/En3J1bGFtYSBiYcWfYXLEsXPEsXogb2xkdVwiLFxyXG4gICAgYnV0dG9uX3JldHJ5OiBcIlRla3JhciBkZW5lXCIsXHJcbiAgICB0ZXh0X2ZldGNoX2Vycm9yOiBcIkJhxJ9sYW50xLEgYmHFn2FyxLFzxLF6IG9sZHVcIixcclxufTtcclxuLy8gR3JlZWtcclxuY29uc3QgTEFOR19FTCA9IHtcclxuICAgIHRleHRfaW5pdDogXCLOoM+Bzr/Otc+Ezr/Ouc68zrHPg86vzrEuLi5cIixcclxuICAgIHRleHRfcmVhZHk6IFwiQW50aS1Sb2JvdCDOlc+AzrHOu86uzrjOtc+Fz4POt1wiLFxyXG4gICAgYnV0dG9uX3N0YXJ0OiBcIiDOms6szr3PhM61IM66zrvOuc66IM6zzrnOsSDOvc6xIM6+zrXOus65zr3Ors+DzrXOuSDOtyDOtc+AzrHOu86uzrjOtc+Fz4POt1wiLFxyXG4gICAgdGV4dF9mZXRjaGluZzogXCIgzpvOrs+Izrcgz4DPgc+MzrrOu863z4POt8+CXCIsXHJcbiAgICB0ZXh0X3NvbHZpbmc6IFwiIM6Vz4DOuc6yzrXOss6xzq/Pic+DzrcgzrHOvc64z4HPjs+Azr/PhS4uLlwiLFxyXG4gICAgdGV4dF9jb21wbGV0ZWQ6IFwizpXOr868zrHOuSDOrM69zrjPgc+Jz4DOv8+CXCIsXHJcbiAgICB0ZXh0X2NvbXBsZXRlZF9zcjogXCIgzp8gzrHPhc+Ez4zOvM6xz4TOv8+CIM6tzrvOtc6zz4fOv8+CIM6xzr3Otc+AzrnOuM+NzrzOt8+Ezr/PhSDPgM61z4HOuc61z4fOv868zq3Ovc6/z4Ugzr/Ou86/zrrOu863z4HPjs64zrfOus61XCIsXHJcbiAgICB0ZXh0X2V4cGlyZWQ6IFwiIM6XIM61z4DOsc67zq7OuM61z4XPg863IEFudGktUm9ib3Qgzq3Ou863zr7OtVwiLFxyXG4gICAgYnV0dG9uX3Jlc3RhcnQ6IFwiIM6Vz4DOsc69zrXOus66zq/Ovc63z4POt1wiLFxyXG4gICAgdGV4dF9lcnJvcjogXCIgzpcgzrXPgM6xzrvOrs64zrXPhc+DzrcgzrHPgM6tz4TPhc+HzrVcIixcclxuICAgIGJ1dHRvbl9yZXRyeTogXCIgzpTOv866zrnOvM6sz4PPhM61IM6+zrHOvc6sXCIsXHJcbiAgICB0ZXh0X2ZldGNoX2Vycm9yOiBcIiDOkc+Azr/PhM+Fz4fOr86xIM+Dz43Ovc60zrXPg863z4IgzrzOtVwiLFxyXG59O1xyXG4vLyBVa3JhaW5pYW5cclxuY29uc3QgTEFOR19VSyA9IHtcclxuICAgIHRleHRfaW5pdDogXCLQhtC90ZbRhtGW0LDQu9GW0LfQsNGG0ZbRjy4uLlwiLFxyXG4gICAgdGV4dF9yZWFkeTogXCLQkNC90YLQuNGA0L7QsdC+0YIg0LLQtdGA0LjRhNGW0LrQsNGG0ZbRj1wiLFxyXG4gICAgYnV0dG9uX3N0YXJ0OiBcItCd0LDRgtC40YHQvdGW0YLRjCwg0YnQvtCxINGA0L7Qt9C/0L7Rh9Cw0YLQuCDQstC10YDQuNGE0ZbQutCw0YbRltGOXCIsXHJcbiAgICB0ZXh0X2ZldGNoaW5nOiBcItCX4oCZ0ZTQtNC90LDQvdC90Y9cIixcclxuICAgIHRleHRfc29sdmluZzogXCLQn9C10YDQtdCy0ZbRgNC60LAsINGJ0L4g0LLQuCDQvdC1INGA0L7QsdC+0YIuLi5cIixcclxuICAgIHRleHRfY29tcGxldGVkOiBcItCvINC90LUg0YDQvtCx0L7RglwiLFxyXG4gICAgdGV4dF9jb21wbGV0ZWRfc3I6IFwi0JDQstGC0L7QvNCw0YLQuNGH0L3QsCDQv9C10YDQtdCy0ZbRgNC60LAg0YHQv9Cw0LzRgyDQt9Cw0LLQtdGA0YjQtdC90LBcIixcclxuICAgIHRleHRfZXhwaXJlZDogXCLQp9Cw0YEg0LLQuNGH0LXRgNC/0LDQvdC+XCIsXHJcbiAgICBidXR0b25fcmVzdGFydDogXCLQn9C+0YfQsNGC0Lgg0LfQvdC+0LLRg1wiLFxyXG4gICAgdGV4dF9lcnJvcjogXCLQktC10YDQuNGE0ZbQutCw0YbRltGPINC90LUg0LLQtNCw0LvQsNGB0YxcIixcclxuICAgIGJ1dHRvbl9yZXRyeTogXCLQodC/0YDQvtCx0YPQstCw0YLQuCDQt9C90L7QstGDXCIsXHJcbiAgICB0ZXh0X2ZldGNoX2Vycm9yOiBcItCd0LUg0LLQtNCw0LvQvtGB0Ywg0LfigJnRlNC00L3QsNGC0LjRgdGMXCIsXHJcbn07XHJcbi8vIEJ1bGdhcmlhblxyXG5jb25zdCBMQU5HX0JHID0ge1xyXG4gICAgdGV4dF9pbml0OiBcItCY0L3QuNGG0LjQsNC70LjQt9C40YDQsNC90LUuLi5cIixcclxuICAgIHRleHRfcmVhZHk6IFwi0JDQvdGC0Lgt0YDQvtCx0L7RgiDQv9GA0L7QstC10YDQutCwXCIsXHJcbiAgICBidXR0b25fc3RhcnQ6IFwi0KnRgNCw0LrQvdC10YLQtSwg0LfQsCDQtNCwINC30LDQv9C+0YfQvdC10YLQtSDQv9GA0L7QstC10YDQutCw0YLQsFwiLFxyXG4gICAgdGV4dF9mZXRjaGluZzogXCLQn9GA0LXQtNC40LfQstC40LrQsNGC0LXQu9GB0YLQstC+XCIsXHJcbiAgICB0ZXh0X3NvbHZpbmc6IFwi0J/RgNC+0LLQtdGA0Y/QstCw0LzQtSDQtNCw0LvQuCDRgdC4INGH0L7QstC10LouLi5cIixcclxuICAgIHRleHRfY29tcGxldGVkOiBcItCQ0Lcg0YHRitC8INGH0L7QstC10LpcIixcclxuICAgIHRleHRfY29tcGxldGVkX3NyOiBcItCQ0LLRgtC+0LzQsNGC0LjRh9C90LDRgtCwINC/0YDQvtCy0LXRgNC60LAg0LfQsCDRgdC/0LDQvCDQtSDQt9Cw0LLRitGA0YjQtdC90LBcIixcclxuICAgIHRleHRfZXhwaXJlZDogXCLQkNC90YLQuC3QoNC+0LHQvtGCINC/0YDQvtCy0LXRgNC60LDRgtCwINC40LfRgtC10YfQtVwiLFxyXG4gICAgYnV0dG9uX3Jlc3RhcnQ6IFwi0KDQtdGB0YLQsNGA0YLQuNGA0LDQudGC0LVcIixcclxuICAgIHRleHRfZXJyb3I6IFwi0J3QtdGD0YHQv9C10YjQvdCwINC/0YDQvtCy0LXRgNC60LBcIixcclxuICAgIGJ1dHRvbl9yZXRyeTogXCLQntC/0LjRgtCw0LnRgtC1INC/0LDQulwiLFxyXG4gICAgdGV4dF9mZXRjaF9lcnJvcjogXCLQndC10YPRgdC/0LXRiNC90L4g0YHQstGK0YDQt9Cy0LDQvdC1INGBXCIsXHJcbn07XHJcbi8vIEN6ZWNoXHJcbmNvbnN0IExBTkdfQ1MgPSB7XHJcbiAgICB0ZXh0X2luaXQ6IFwiSW5pY2lhbGl6YWNlLi4uXCIsXHJcbiAgICB0ZXh0X3JlYWR5OiBcIk92xJvFmWVuw60gcHJvdGkgcm9ib3TFr21cIixcclxuICAgIGJ1dHRvbl9zdGFydDogXCJLbGlrbsSbdGUgcHJvIG92xJvFmWVuw61cIixcclxuICAgIHRleHRfZmV0Y2hpbmc6IFwiUHJvYmzDqW0gcMWZaSBuYcSNw610w6Fuw61cIixcclxuICAgIHRleHRfc29sdmluZzogXCJPdsSbxZllbsOtLCDFvmUganN0ZSDEjWxvdsSbay4uLlwiLFxyXG4gICAgdGV4dF9jb21wbGV0ZWQ6IFwiSnNlbSDEjWxvdsSba1wiLFxyXG4gICAgdGV4dF9jb21wbGV0ZWRfc3I6IFwiQXV0b21hdGlja8OhIGtvbnRyb2xhIHNwYW11IGRva29uxI1lbmFcIixcclxuICAgIHRleHRfZXhwaXJlZDogXCJPdsSbxZllbsOtIHByb3RpIHJvYm90xa9tIHZ5cHLFoWVsb1wiLFxyXG4gICAgYnV0dG9uX3Jlc3RhcnQ6IFwiUmVzdGFydG92YXRcIixcclxuICAgIHRleHRfZXJyb3I6IFwiT3bEm8WZZW7DrSBzZSBuZXpkYcWZaWxvXCIsXHJcbiAgICBidXR0b25fcmV0cnk6IFwiWmt1c2l0IHpub3Z1XCIsXHJcbiAgICB0ZXh0X2ZldGNoX2Vycm9yOiBcIlDFmWlwb2plbsOtIHNlIG5lemRhxZlpbG9cIixcclxufTtcclxuLy8gU2xvdmFrXHJcbmNvbnN0IExBTkdfU0sgPSB7XHJcbiAgICB0ZXh0X2luaXQ6IFwiSW5pY2lhbGl6w6FjaWEuLi5cIixcclxuICAgIHRleHRfcmVhZHk6IFwiT3ZlcmVuaWUgcHJvdGkgcm9ib3RvbVwiLFxyXG4gICAgYnV0dG9uX3N0YXJ0OiBcIktsaWtuaXRlIHByZSBvdmVyZW5pZVwiLFxyXG4gICAgdGV4dF9mZXRjaGluZzogXCJQcm9ibMOpbSBwcmkgbmHEjcOtdGFuw61cIixcclxuICAgIHRleHRfc29sdmluZzogXCJPdmVyZW5pZSwgxb5lIHN0ZSDEjWxvdmVrLi4uXCIsXHJcbiAgICB0ZXh0X2NvbXBsZXRlZDogXCJTb20gxI1sb3Zla1wiLFxyXG4gICAgdGV4dF9jb21wbGV0ZWRfc3I6IFwiQXV0b21hdGlja8OhIGtvbnRyb2xhIHNwYW11IGRva29uxI1lbsOhXCIsXHJcbiAgICB0ZXh0X2V4cGlyZWQ6IFwiT3ZlcmVuaWUgcHJvdGkgcm9ib3RvbSB2eXByxaFhbG9cIixcclxuICAgIGJ1dHRvbl9yZXN0YXJ0OiBcIlJlxaF0YXJ0b3ZhxaVcIixcclxuICAgIHRleHRfZXJyb3I6IFwiT3ZlcmVuaWUgc2EgbmVwb2Rhcmlsb1wiLFxyXG4gICAgYnV0dG9uX3JldHJ5OiBcIlNrw7pzacWlIHpub3ZhXCIsXHJcbiAgICB0ZXh0X2ZldGNoX2Vycm9yOiBcIlByaXBvamVuaWUgc2EgbmVwb2Rhcmlsb1wiLFxyXG59O1xyXG4vLyBOb3J3ZWdpYW5cclxuY29uc3QgTEFOR19OTyA9IHtcclxuICAgIHRleHRfaW5pdDogXCIgQWt0aXZlcmVyLi4uXCIsXHJcbiAgICB0ZXh0X3JlYWR5OiBcIkplZyBlciBpa2tlIGVuIHJvYm90XCIsXHJcbiAgICBidXR0b25fc3RhcnQ6IFwiS2xpa2sgZm9yIMOlIHN0YXJ0ZSB2ZXJpZmlzZXJpbmdlblwiLFxyXG4gICAgdGV4dF9mZXRjaGluZzogXCJIZW50ZXIgZGF0YVwiLFxyXG4gICAgdGV4dF9zb2x2aW5nOiBcIlNqZWtrZXIgYXQgZHUgZXIgZXQgbWVubmVza2UuLi5cIixcclxuICAgIHRleHRfY29tcGxldGVkOiBcIkplZyBlciBldCBtZW5uZXNrZVwiLFxyXG4gICAgdGV4dF9jb21wbGV0ZWRfc3I6IFwiQXV0b21hdGlzayBzcGFtLXNqZWtrIGZ1bGxmw7hydFwiLFxyXG4gICAgdGV4dF9leHBpcmVkOiBcIlZlcmlmaXNlcmluZyBrdW5uZSBpa2tlIGZ1bGxmw7hyZXNcIixcclxuICAgIGJ1dHRvbl9yZXN0YXJ0OiBcIk9tc3RhcnRcIixcclxuICAgIHRleHRfZXJyb3I6IFwiQmVrcmVmdGVsc2VuIG1pc2x5a3Rlc1wiLFxyXG4gICAgYnV0dG9uX3JldHJ5OiBcIlByw7h2IHDDpSBueXR0XCIsXHJcbiAgICB0ZXh0X2ZldGNoX2Vycm9yOiBcIlRpbGtvYmxpbmdlbiBtaXNseWt0ZXNcIixcclxufTtcclxuLy8gRmlubmlzaFxyXG5jb25zdCBMQU5HX0ZJID0ge1xyXG4gICAgdGV4dF9pbml0OiBcIkFrdGl2b2lkYWFuLi4uXCIsXHJcbiAgICB0ZXh0X3JlYWR5OiBcIkVuIG9sZSByb2JvdHRpXCIsXHJcbiAgICBidXR0b25fc3RhcnQ6IFwiQWxvaXRhIHZhaHZpc3R1cyBrbGlra2FhbWFsbGFcIixcclxuICAgIHRleHRfZmV0Y2hpbmc6IFwiSGFldGFhbiB0aWV0b2phXCIsXHJcbiAgICB0ZXh0X3NvbHZpbmc6IFwiVGFya2lzdGFhLCBldHTDpCBvbGV0IGlobWluZW4uLi5cIixcclxuICAgIHRleHRfY29tcGxldGVkOiBcIk9sZW4gaWhtaW5lblwiLFxyXG4gICAgdGV4dF9jb21wbGV0ZWRfc3I6IFwiQXV0b21hYXR0aW5lbiByb3NrYXBvc3RpbiB0YXJraXN0dXMgc3Vvcml0ZXR0dVwiLFxyXG4gICAgdGV4dF9leHBpcmVkOiBcIlZhaHZpc3R1c3RhIGVpIHZvaXR1IHN1b3JpdHRhYSBsb3BwdXVuXCIsXHJcbiAgICBidXR0b25fcmVzdGFydDogXCJVdWRlbGxlZW5rw6R5bm5pc3R5c1wiLFxyXG4gICAgdGV4dF9lcnJvcjogXCJWYWh2aXN0dXMgZXDDpG9ubmlzdHVpXCIsXHJcbiAgICBidXR0b25fcmV0cnk6IFwiWXJpdMOkIHV1ZGVsbGVlblwiLFxyXG4gICAgdGV4dF9mZXRjaF9lcnJvcjogXCJZaHRleXMgZXDDpG9ubmlzdHVpXCIsXHJcbn07XHJcbi8vIExhdHZpYW5cclxuY29uc3QgTEFOR19MViA9IHtcclxuICAgIHRleHRfaW5pdDogXCJOb3RpZWsgaW5pY2lhbGl6xJPFoWFuYS4uLlwiLFxyXG4gICAgdGV4dF9yZWFkeTogXCJWZXJpZmlrxIFjaWphLCBrYSBuZWVzYXQgcm9ib3RzXCIsXHJcbiAgICBidXR0b25fc3RhcnQ6IFwiTm9rbGlrxaHEt2luaWV0LCBsYWkgc8SBa3R1IHZlcmlmaWvEgWNpanVcIixcclxuICAgIHRleHRfZmV0Y2hpbmc6IFwiTm90aWVrIGRyb8WhxKtiYXMgdXpkZXZ1bWEgaXpnxavFoWFuYVwiLFxyXG4gICAgdGV4dF9zb2x2aW5nOiBcIk5vdGllayBwxIFyYmF1ZGUsIHZhaSBlc2F0IGNpbHbEk2tzLi4uXCIsXHJcbiAgICB0ZXh0X2NvbXBsZXRlZDogXCJFcyBlc211IGNpbHbEk2tzXCIsXHJcbiAgICB0ZXh0X2NvbXBsZXRlZF9zcjogXCJBdXRvbcSBdGlza2Egc3Vyb2fEgXRwYXN0YSBwxIFyYmF1ZGUgcGFiZWlndGFcIixcclxuICAgIHRleHRfZXhwaXJlZDogXCJWZXJpZmlrxIFjaWphcywga2EgbmVlc2F0IHJvYm90cywgZGVyxKtndW1zIGJlaWR6aWVzXCIsXHJcbiAgICBidXR0b25fcmVzdGFydDogXCJSZXN0YXJ0xJN0XCIsXHJcbiAgICB0ZXh0X2Vycm9yOiBcIlZlcmlmaWvEgWNpamEgbmVpemRldsSBc1wiLFxyXG4gICAgYnV0dG9uX3JldHJ5OiBcIk3Ek8SjaW7EgXQgdsSTbHJlaXpcIixcclxuICAgIHRleHRfZmV0Y2hfZXJyb3I6IFwiTmVpemRldsSBcyBpenZlaWRvdCBzYXZpZW5vanVtdSBhclwiLFxyXG59O1xyXG4vLyBMaXRodWFuaWFuXHJcbmNvbnN0IExBTkdfTFQgPSB7XHJcbiAgICB0ZXh0X2luaXQ6IFwiSW5pY2lqdW9qYW1hLi4uXCIsXHJcbiAgICB0ZXh0X3JlYWR5OiBcIlBhdGlrcmluaW1hcywgYXIgbmVzYXRlIHJvYm90YXNcIixcclxuICAgIGJ1dHRvbl9zdGFydDogXCJTcHVzdGVsxJdraXRlIHBhdGlrcmluaW11aSBwcmFkxJd0aVwiLFxyXG4gICAgdGV4dF9mZXRjaGluZzogXCJHYXZpbW8gacWhxaHFq2tpc1wiLFxyXG4gICAgdGV4dF9zb2x2aW5nOiBcIlRpa3JpbmFtYSwgYXIgZXNhdGUgxb5tb2d1cy4uLlwiLFxyXG4gICAgdGV4dF9jb21wbGV0ZWQ6IFwiRXN1IMW+bW9ndXNcIixcclxuICAgIHRleHRfY29tcGxldGVkX3NyOiBcIkF1dG9tYXRpbsSXIHBhdGlrcmEgZMSXbCBwYcWhdG8gxaFpdWvFoWxpxbMgYXRsaWt0YVwiLFxyXG4gICAgdGV4dF9leHBpcmVkOiBcIlBhdGlrcmluaW1hcywgYXIgbmVzYXRlIHJvYm90YXMsIGJhaWfElyBnYWxpb3RpXCIsXHJcbiAgICBidXR0b25fcmVzdGFydDogXCJQcmFkxJd0aSBpxaEgbmF1am9cIixcclxuICAgIHRleHRfZXJyb3I6IFwiUGF0aWtyaW5pbWFzIG5lcGF2eWtvXCIsXHJcbiAgICBidXR0b25fcmV0cnk6IFwiS2FydG90aVwiLFxyXG4gICAgdGV4dF9mZXRjaF9lcnJvcjogXCJOZXBhdnlrbyBwcmlzaWp1bmd0aSBwcmllXCIsXHJcbn07XHJcbi8vIFBvbGlzaFxyXG5jb25zdCBMQU5HX1BMID0ge1xyXG4gICAgdGV4dF9pbml0OiBcIkluaWNqb3dhbmllLi4uXCIsXHJcbiAgICB0ZXh0X3JlYWR5OiBcIldlcnlmaWthY2phIGFudHlib3Rvd2FcIixcclxuICAgIGJ1dHRvbl9zdGFydDogXCJLbGlrbmlqLCBhYnkgcm96cG9jesSFxIcgd2VyeWZpa2FjasSZXCIsXHJcbiAgICB0ZXh0X2ZldGNoaW5nOiBcIlBvYmllcmFuaWVcIixcclxuICAgIHRleHRfc29sdmluZzogXCJXZXJ5ZmlrYWNqYSwgY3p5IG5pZSBqZXN0ZcWbIHJvYm90ZW0uLi5cIixcclxuICAgIHRleHRfY29tcGxldGVkOiBcIk5pZSBqZXN0ZW0gcm9ib3RlbVwiLFxyXG4gICAgdGV4dF9jb21wbGV0ZWRfc3I6IFwiWmFrb8WEY3pvbm8gYXV0b21hdHljem5lIHNwcmF3ZHphbmllIHNwYW11XCIsXHJcbiAgICB0ZXh0X2V4cGlyZWQ6IFwiV2VyeWZpa2FjamEgYW50eWJvdG93YSB3eWdhc8WCYVwiLFxyXG4gICAgYnV0dG9uX3Jlc3RhcnQ6IFwiVXJ1Y2hvbSBwb25vd25pZVwiLFxyXG4gICAgdGV4dF9lcnJvcjogXCJXZXJ5ZmlrYWNqYSBuaWUgcG93aW9kxYJhIHNpxJlcIixcclxuICAgIGJ1dHRvbl9yZXRyeTogXCJTcHLDs2J1aiBwb25vd25pZVwiLFxyXG4gICAgdGV4dF9mZXRjaF9lcnJvcjogXCJOaWUgdWRhxYJvIHNpxJkgcG/FgsSFY3p5xIcgelwiLFxyXG59O1xyXG4vLyBFc3RvbmlhblxyXG5jb25zdCBMQU5HX0VUID0ge1xyXG4gICAgdGV4dF9pbml0OiBcIkluaXRzaWFsaXNlZXJpbWluZS4uLlwiLFxyXG4gICAgdGV4dF9yZWFkeTogXCJSb2JvdGl2YXN0YW5lIGtpbm5pdHVzXCIsXHJcbiAgICBidXR0b25fc3RhcnQ6IFwiS2lubml0YW1pc2VnYSBhbHVzdGFtaXNla3Mga2zDtXBzYWtlXCIsXHJcbiAgICB0ZXh0X2ZldGNoaW5nOiBcIlbDpGxqYWt1dHNlIHRvb21pbmVcIixcclxuICAgIHRleHRfc29sdmluZzogXCJLaW5uaXRhdGFrc2UsIGV0IHNhIG9sZWQgaW5pbWVuZS4uLlwiLFxyXG4gICAgdGV4dF9jb21wbGV0ZWQ6IFwiTWEgb2xlbiBpbmltZW5lXCIsXHJcbiAgICB0ZXh0X2NvbXBsZXRlZF9zcjogXCJBdXRvbWFhdG5lIHLDpG1wc3Bvc3RpIGtvbnRyb2xsIG9uIGzDtXBldGF0dWRcIixcclxuICAgIHRleHRfZXhwaXJlZDogXCJSb2JvdGl2YXN0YW5lIGtpbm5pdHVzIGFlZ3VzXCIsXHJcbiAgICBidXR0b25fcmVzdGFydDogXCJUYWFza8OkaXZpdGFcIixcclxuICAgIHRleHRfZXJyb3I6IFwiS2lubml0YW1pbmUgbnVyanVzXCIsXHJcbiAgICBidXR0b25fcmV0cnk6IFwiUHJvb3ZpIHV1ZXN0aVwiLFxyXG4gICAgdGV4dF9mZXRjaF9lcnJvcjogXCLDnGhlbmR1c2UgbG9vbWluZSBudXJqdXNcIixcclxufTtcclxuLy8gQ3JvYXRpYW5cclxuY29uc3QgTEFOR19IUiA9IHtcclxuICAgIHRleHRfaW5pdDogXCJQb8SNZXRubyBwb3N0YXZsamFuamUuLi5cIixcclxuICAgIHRleHRfcmVhZHk6IFwiUHJvdmplcmEgcHJvdGl2IHJvYm90YVwiLFxyXG4gICAgYnV0dG9uX3N0YXJ0OiBcIktsaWtuaXRlIHphIHBvxI1ldGFrIHByb3ZqZXJlXCIsXHJcbiAgICB0ZXh0X2ZldGNoaW5nOiBcIkRvaHZhxIdhbmplIGl6YXpvdmFcIixcclxuICAgIHRleHRfc29sdmluZzogXCJQcm92amVyYXZhbW8gamVzdGUgbGkgxI1vdmplay4uLlwiLFxyXG4gICAgdGV4dF9jb21wbGV0ZWQ6IFwiTmlzYW0gcm9ib3RcIixcclxuICAgIHRleHRfY29tcGxldGVkX3NyOiBcIkF1dG9tYXRza2EgcHJvdmplcmEgamUgemF2csWhZW5hXCIsXHJcbiAgICB0ZXh0X2V4cGlyZWQ6IFwiVnJpamVtZSB6YSBwcm92amVydSBwcm90aXYgcm9ib3RhIGplIGlzdGVrbG9cIixcclxuICAgIGJ1dHRvbl9yZXN0YXJ0OiBcIk9zdmplxb5pXCIsXHJcbiAgICB0ZXh0X2Vycm9yOiBcIlByb3ZqZXJhIG5pamUgdXNwamxlbGFcIixcclxuICAgIGJ1dHRvbl9yZXRyeTogXCIgUG9ub3ZvIHBva3JlbmlcIixcclxuICAgIHRleHRfZmV0Y2hfZXJyb3I6IFwiTmlqZSBtb2d1xIdlIHVzcG9zdGF2aXRpIHZlenVcIixcclxufTtcclxuLy8gU2VyYmlhblxyXG5jb25zdCBMQU5HX1NSID0ge1xyXG4gICAgdGV4dF9pbml0OiBcIlBva3JldGFuamUuLi5cIixcclxuICAgIHRleHRfcmVhZHk6IFwiQW50aS1Sb2JvdCBWZXJpZmlrYWNpamFcIixcclxuICAgIGJ1dHRvbl9zdGFydDogXCJLbGlrbml0ZSBkYSBiaXN0ZSB6YXBvxI1lbGkgdmVyaWZpa2FjaWp1XCIsXHJcbiAgICB0ZXh0X2ZldGNoaW5nOiBcIlXEjWl0YXZhbmplIGl6YXpvdmFcIixcclxuICAgIHRleHRfc29sdmluZzogXCJWZXJpZmlrYWNpamEgZGEgc3RlIMSNb3Zlay4uLlwiLFxyXG4gICAgdGV4dF9jb21wbGV0ZWQ6IFwiSmEgc2FtIMSNb3Zla1wiLFxyXG4gICAgdGV4dF9jb21wbGV0ZWRfc3I6IFwiQXV0b21hdHNrYSBwcm92ZXJhIG5lxb5lbGplbmUgcG/FoXRlIGplIHphdnLFoWVuYVwiLFxyXG4gICAgdGV4dF9leHBpcmVkOiBcIkFudGktUm9ib3QgdmVyaWZpa2FjaWphIGplIGlzdGVrbGFcIixcclxuICAgIGJ1dHRvbl9yZXN0YXJ0OiBcIlBvbm92byBwb2tyZW51dGlcIixcclxuICAgIHRleHRfZXJyb3I6IFwiVmVyaWZpa2FjaWphIG5pamUgdXNwZWxhXCIsXHJcbiAgICBidXR0b25fcmV0cnk6IFwiUG9rdcWhYWp0ZSBwb25vdm9cIixcclxuICAgIHRleHRfZmV0Y2hfZXJyb3I6IFwiTmV1c3BlbG8gcG92ZXppdmFuamUgc2EuLi5cIixcclxufTtcclxuLy8gU2xvdmVuaWFuXHJcbmNvbnN0IExBTkdfU0wgPSB7XHJcbiAgICB0ZXh0X2luaXQ6IFwiSW5pY2lhbGl6aXJhbmplLi4uXCIsXHJcbiAgICB0ZXh0X3JlYWR5OiBcIlByZXZlcmphbmplIHJvYm90b3ZcIixcclxuICAgIGJ1dHRvbl9zdGFydDogXCJLbGlrbml0ZSB6YSB6YcSNZXRlayBwcmV2ZXJqYW5qYVwiLFxyXG4gICAgdGV4dF9mZXRjaGluZzogXCJQcmVuYcWhYW5qZSBpenppdmFcIixcclxuICAgIHRleHRfc29sdmluZzogXCJQcmV2ZXJqYW1vLCBhbGkgc3RlIMSNbG92ZWtcIixcclxuICAgIHRleHRfY29tcGxldGVkOiBcIk5pc2VtIHJvYm90XCIsXHJcbiAgICB0ZXh0X2NvbXBsZXRlZF9zcjogXCJBdnRvbWF0c2tvIHByZXZlcmphbmplIGplIHpha2xqdcSNZW5vXCIsXHJcbiAgICB0ZXh0X2V4cGlyZWQ6IFwiUHJldmVyamFuamUgcm9ib3RvdiBqZSBwb3Rla2xvXCIsXHJcbiAgICBidXR0b25fcmVzdGFydDogXCJPc3Zlxb5pXCIsXHJcbiAgICB0ZXh0X2Vycm9yOiBcIlByZXZlcmphbmplIG5pIHVzcGVsb1wiLFxyXG4gICAgYnV0dG9uX3JldHJ5OiBcIlBvc2t1c2kgcG9ub3Zub1wiLFxyXG4gICAgdGV4dF9mZXRjaF9lcnJvcjogXCJQb3ZlemF2ZSBuaSBiaWxvIG1vZ2/EjWUgdnpwb3N0YXZpdGlcIixcclxufTtcclxuLy8gSHVuZ2FyaWFuXHJcbmNvbnN0IExBTkdfSFUgPSB7XHJcbiAgICB0ZXh0X2luaXQ6IFwiSW5pY2lhbGl6w6Fsw6FzLi4uXCIsXHJcbiAgICB0ZXh0X3JlYWR5OiBcIlJvYm90ZWxsZW5lcyBlbGxlbsWRcnrDqXNcIixcclxuICAgIGJ1dHRvbl9zdGFydDogXCJLYXR0aW50c29uIGF6IGVsbGVuxZFyesOpcyBtZWdrZXpkw6lzw6loZXpcIixcclxuICAgIHRleHRfZmV0Y2hpbmc6IFwiRmVsYWR2w6FueSBsZWvDqXLDqXNlXCIsXHJcbiAgICB0ZXh0X3NvbHZpbmc6IFwiQW5uYWsgaWdhem9sw6FzYSwgaG9neSDDlm4gbmVtIHJvYm90Li4uXCIsXHJcbiAgICB0ZXh0X2NvbXBsZXRlZDogXCJOZW0gdmFneW9rIHJvYm90XCIsXHJcbiAgICB0ZXh0X2NvbXBsZXRlZF9zcjogXCJBdXRvbWF0aWt1cyBzcGFtIGVsbGVuxZFyesOpcyBiZWZlamV6xZFkw7Z0dFwiLFxyXG4gICAgdGV4dF9leHBpcmVkOiBcIlJvYm90ZWxsZW5lcyBlbGxlbsWRcnrDqXMgbGVqw6FydFwiLFxyXG4gICAgYnV0dG9uX3Jlc3RhcnQ6IFwiw5pqcmFpbmTDrXTDoXNcIixcclxuICAgIHRleHRfZXJyb3I6IFwiQXogZWxsZW7FkXJ6w6lzIG5lbSBzaWtlcsO8bHRcIixcclxuICAgIGJ1dHRvbl9yZXRyeTogXCJQcsOzYsOhbGphIMO6anJhXCIsXHJcbiAgICB0ZXh0X2ZldGNoX2Vycm9yOiBcIk5lbSBzaWtlcsO8bHQgY3NhdGxha296bmlcIixcclxufTtcclxuLy8gUm9tYW5pYW5cclxuY29uc3QgTEFOR19STyA9IHtcclxuICAgIHRleHRfaW5pdDogXCJTZSBpbmnIm2lhbGl6ZWF6xIMuLi5cIixcclxuICAgIHRleHRfcmVhZHk6IFwiVmVyaWZpY2FyZSBhbnRpLXJvYm90XCIsXHJcbiAgICBidXR0b25fc3RhcnQ6IFwiQ2xpY2sgcGVudHJ1IGEgw65uY2VwZSB2ZXJpZmljYXJlYVwiLFxyXG4gICAgdGV4dF9mZXRjaGluZzogXCJEb3dubG9hZGluZ1wiLFxyXG4gICAgdGV4dF9zb2x2aW5nOiBcIlZlcmlmaWNhcmUgY8SDIGXImXRpIG9tLi4uXCIsXHJcbiAgICB0ZXh0X2NvbXBsZXRlZDogXCJTdW50IG9tXCIsXHJcbiAgICB0ZXh0X2NvbXBsZXRlZF9zcjogXCJWZXJpZmljYXJlYSBhdXRvbWF0xIMgYSBzcGFtLXVsdWkgYSBmb3N0IGZpbmFsaXphdMSDXCIsXHJcbiAgICB0ZXh0X2V4cGlyZWQ6IFwiVmVyaWZpY2FyZWEgYW50aS1yb2JvdCBhIGV4cGlyYXRcIixcclxuICAgIGJ1dHRvbl9yZXN0YXJ0OiBcIlJlc3RhcnRcIixcclxuICAgIHRleHRfZXJyb3I6IFwiVmVyaWZpY2FyZSBlyJl1YXTEg1wiLFxyXG4gICAgYnV0dG9uX3JldHJ5OiBcIlJlw65uY2VhcmPEg1wiLFxyXG4gICAgdGV4dF9mZXRjaF9lcnJvcjogXCJOdSBzLWEgcHV0dXQgY29uZWN0YVwiLFxyXG59O1xyXG4vLyBDaGluZXNlXHJcbmNvbnN0IExBTkdfWkggPSB7XHJcbiAgICB0ZXh0X2luaXQ6IFwi5Yid5aeL5YyW5Lit4oCm4oCmXCIsXHJcbiAgICB0ZXh0X3JlYWR5OiBcIuS6uuacuumqjOivgVwiLFxyXG4gICAgYnV0dG9uX3N0YXJ0OiBcIueCueWHu+W8gOWni1wiLFxyXG4gICAgdGV4dF9mZXRjaGluZzogXCLmraPlnKjliqDovb1cIixcclxuICAgIHRleHRfc29sdmluZzogXCLkurrmnLrmoKHpqozkuK3igKbigKZcIixcclxuICAgIHRleHRfY29tcGxldGVkOiBcIuaIkeS4jeaYr+acuuWZqOS6ulwiLFxyXG4gICAgdGV4dF9jb21wbGV0ZWRfc3I6IFwi5Lq65py66aqM6K+B5a6M5oiQXCIsXHJcbiAgICB0ZXh0X2V4cGlyZWQ6IFwi6aqM6K+B5bey6L+H5pyfXCIsXHJcbiAgICBidXR0b25fcmVzdGFydDogXCLph43mlrDlvIDlp4tcIixcclxuICAgIHRleHRfZXJyb3I6IFwi5qCh6aqM5aSx6LSlXCIsXHJcbiAgICBidXR0b25fcmV0cnk6IFwi6YeN6K+VXCIsXHJcbiAgICB0ZXh0X2ZldGNoX2Vycm9yOiBcIuaXoOazlei/nuaOpeWIsFwiLFxyXG59O1xyXG4vLyBUcmFkaXRpb25hbCBDaGluZXNlXHJcbmNvbnN0IExBTkdfWkhfVFcgPSB7XHJcbiAgICB0ZXh0X2luaXQ6IFwi5q2j5Zyo5Yid5aeL5YyW4oCm4oCmXCIsXHJcbiAgICB0ZXh0X3JlYWR5OiBcIuWPjeapn+WZqOS6uumpl+itiVwiLFxyXG4gICAgYnV0dG9uX3N0YXJ0OiBcIum7nuaTiumWi+Wni+mpl+itiVwiLFxyXG4gICAgdGV4dF9mZXRjaGluZzogXCLovInlhaXkuK1cIixcclxuICAgIHRleHRfc29sdmluZzogXCLlj43mqZ/lmajkurrpqZforYnkuK3igKbigKZcIixcclxuICAgIHRleHRfY29tcGxldGVkOiBcIuaIkeS4jeaYr+apn+WZqOS6ulwiLFxyXG4gICAgdGV4dF9jb21wbGV0ZWRfc3I6IFwi6amX6K2J5a6M5oiQXCIsXHJcbiAgICB0ZXh0X2V4cGlyZWQ6IFwi6amX6K2J6LaF5pmCXCIsXHJcbiAgICBidXR0b25fcmVzdGFydDogXCLph43mlrDplovlp4tcIixcclxuICAgIHRleHRfZXJyb3I6IFwi6amX6K2J5aSx5pWXXCIsXHJcbiAgICBidXR0b25fcmV0cnk6IFwi6YeN6KmmXCIsXHJcbiAgICB0ZXh0X2ZldGNoX2Vycm9yOiBcIueEoeazlemAo+e3muWIsFwiLFxyXG59O1xyXG4vLyBWaWV0bmFtZXNlXHJcbmNvbnN0IExBTkdfVkkgPSB7XHJcbiAgICB0ZXh0X2luaXQ6IFwixJBhbmcga2jhu59pIHThuqFvLi4uXCIsXHJcbiAgICB0ZXh0X3JlYWR5OiBcIljDoWMgbWluaCBjaOG7kW5nIFJvYm90XCIsXHJcbiAgICBidXR0b25fc3RhcnQ6IFwiQuG6pW0gdsOgbyDEkcOieSDEkeG7gyB4w6FjIG1pbmhcIixcclxuICAgIHRleHRfZmV0Y2hpbmc6IFwiVMOsbSBu4bqhcCB2w6AgeOG7rSBsw70gdGjhu60gdGjDoWNoXCIsXHJcbiAgICB0ZXh0X3NvbHZpbmc6IFwiWMOhYyBtaW5oIGLhuqFuIGzDoCBuZ8aw4budaS4uLlwiLFxyXG4gICAgdGV4dF9jb21wbGV0ZWQ6IFwiQuG6oW4gbMOgIGNvbiBuZ8aw4budaVwiLFxyXG4gICAgdGV4dF9jb21wbGV0ZWRfc3I6IFwiWMOhYyBtaW5oIGhvw6BuIHThuqV0XCIsXHJcbiAgICB0ZXh0X2V4cGlyZWQ6IFwiWMOhYyBtaW5oIMSRw6MgaOG6v3QgaOG6oW5cIixcclxuICAgIGJ1dHRvbl9yZXN0YXJ0OiBcIkto4bufaSDEkeG7mW5nIGzhuqFpXCIsXHJcbiAgICB0ZXh0X2Vycm9yOiBcIljDoWMgbWluaCB0aOG6pXQgYuG6oWlcIixcclxuICAgIGJ1dHRvbl9yZXRyeTogXCJUaOG7rSBs4bqhaVwiLFxyXG4gICAgdGV4dF9mZXRjaF9lcnJvcjogXCJLaMO0bmcga+G6v3QgbuG7kWkgxJHGsOG7o2NcIixcclxufTtcclxuLy8gSGVicmV3XHJcbmNvbnN0IExBTkdfSEUgPSB7XHJcbiAgICB0ZXh0X2luaXQ6IFwi15HXkdeZ16bXldeiLi4uXCIsXHJcbiAgICB0ZXh0X3JlYWR5OiBcIteQ15nXnteV16og15DXoNeV16lcIixcclxuICAgIGJ1dHRvbl9zdGFydDogXCLXpteo15nXmiDXnNec15fXldelINec15TXqteX15zXqiDXlNeQ15nXnteV16pcIixcclxuICAgIHRleHRfZmV0Y2hpbmc6IFwi15DXqteS16gg15TXntei16DXlCDXkdeU15vXoNeUXCIsXHJcbiAgICB0ZXh0X3NvbHZpbmc6IFwi157XqteR16bXoiDXkNeZ157XldeqINeQ16DXldepLi4uXCIsXHJcbiAgICB0ZXh0X2NvbXBsZXRlZDogXCLXkNeg15kg15zXkCDXqNeV15HXldeYXCIsXHJcbiAgICB0ZXh0X2NvbXBsZXRlZF9zcjogXCLXkdeT15nXp9eqINeU16HXpNeQ150g15TXkNeV15jXldee15jXmdeqINeU16HXqteZ15nXnteUXCIsXHJcbiAgICB0ZXh0X2V4cGlyZWQ6IFwi16TXkiDXqteV16fXoyDXkNeZ157XldeqINeU15DXoNeV16lcIixcclxuICAgIGJ1dHRvbl9yZXN0YXJ0OiBcItec15TXqteX15nXnCDXqdeV15FcIixcclxuICAgIHRleHRfZXJyb3I6IFwi15DXmdee15XXqiDXlNeQ16DXldepINeg15vXqdecXCIsXHJcbiAgICBidXR0b25fcmV0cnk6IFwi15zXoNeh15XXqiDXqdeV15FcIixcclxuICAgIHRleHRfZmV0Y2hfZXJyb3I6IFwi16DXm9ep15wg15TXl9eZ15HXldeoINeQ15xcIixcclxuICAgIHJ0bDogdHJ1ZSxcclxufTtcclxuLy8gVGhhaVxyXG5jb25zdCBMQU5HX1RIID0ge1xyXG4gICAgdGV4dF9pbml0OiBcIuC4geC4suC4o+C5gOC4o+C4tOC5iOC4oeC4leC5ieC4mS4uLlwiLFxyXG4gICAgdGV4dF9yZWFkeTogXCIg4LiB4Liy4Lij4LiV4Lij4Lin4LiI4Liq4Lit4Lia4LiV4LmI4Lit4LiV4LmJ4Liy4LiZ4Lir4Li44LmI4LiZ4Lii4LiZ4LiV4LmMXCIsXHJcbiAgICBidXR0b25fc3RhcnQ6IFwi4LiE4Lil4Li04LiB4LmA4Lie4Li34LmI4Lit4LmA4Lij4Li04LmI4Lih4LiB4Liy4Lij4LiV4Lij4Lin4LiI4Liq4Lit4LiaXCIsXHJcbiAgICB0ZXh0X2ZldGNoaW5nOiBcIuC4geC4suC4o+C4lOC4tuC4h+C4hOC4p+C4suC4oeC4l+C5ieC4suC4l+C4suC4olwiLFxyXG4gICAgdGV4dF9zb2x2aW5nOiBcIuC4ouC4t+C4meC4ouC4seC4meC4p+C5iOC4suC4hOC4uOC4k+C5gOC4m+C5h+C4meC4oeC4meC4uOC4qeC4ouC5jC4uLlwiLFxyXG4gICAgdGV4dF9jb21wbGV0ZWQ6IFwi4LiJ4Lix4LiZ4LmA4Lib4LmH4LiZ4Lih4LiZ4Li44Lip4Lii4LmMXCIsXHJcbiAgICB0ZXh0X2NvbXBsZXRlZF9zcjogXCLguIHguLLguKPguJXguKPguKfguIjguKrguK3guJrguKrguYHguJvguKHguK3guLHguJXguYLguJnguKHguLHguJXguLTguYDguKrguKPguYfguIjguKrguKHguJrguLnguKPguJPguYxcIixcclxuICAgIHRleHRfZXhwaXJlZDogXCLguIHguLLguKPguJXguKPguKfguIjguKrguK3guJog4LiV4LmI4Lit4LiV4LmJ4Liy4LiZ4Lir4Li44LmI4LiZ4Lii4LiZ4LiV4LmMIOC4q+C4oeC4lOC4reC4suC4ouC4uFwiLFxyXG4gICAgYnV0dG9uX3Jlc3RhcnQ6IFwi4Lij4Li14Liq4LiV4Liy4Lij4LmM4LiXXCIsXHJcbiAgICB0ZXh0X2Vycm9yOiBcIuC4geC4suC4o+C4ouC4t+C4meC4ouC4seC4meC4peC5ieC4oeC5gOC4q+C4peC4p1wiLFxyXG4gICAgYnV0dG9uX3JldHJ5OiBcIuC4peC4reC4h+C5g+C4q+C4oeC5iFwiLFxyXG4gICAgdGV4dF9mZXRjaF9lcnJvcjogXCLguYTguKHguYjguKrguLLguKHguLLguKPguJbguYDguIrguLfguYjguK3guKHguJXguYjguK3guYTguJTguYlcIlxyXG59O1xyXG4vLyBTb3V0aCBLb3JlYW5cclxuY29uc3QgTEFOR19LUiA9IHtcclxuICAgIHRleHRfaW5pdDogXCLstIjquLDtmZQg7KSRXCIsXHJcbiAgICB0ZXh0X3JlYWR5OiBcIkFudGktUm9ib3Qg6rKA7KadXCIsXHJcbiAgICBidXR0b25fc3RhcnQ6IFwi6rKA7Kad7J2EIOychO2VtCDtgbTrpq3tlbQg7KO87IS47JqUXCIsXHJcbiAgICB0ZXh0X2ZldGNoaW5nOiBcIuqygOymnSDspIDruYQg7KSRXCIsXHJcbiAgICB0ZXh0X3NvbHZpbmc6IFwi6rKA7KadIOykkVwiLFxyXG4gICAgdGV4dF9jb21wbGV0ZWQ6IFwi6rKA7Kad7J20IOyZhOujjOuQmOyXiOyKteuLiOuLpFwiLFxyXG4gICAgdGV4dF9jb21wbGV0ZWRfc3I6IFwi7J6Q64+ZIOyKpO2MuCDtmZXsnbgg7JmE66OMXCIsXHJcbiAgICB0ZXh0X2V4cGlyZWQ6IFwiQW50aS1Sb2JvdCDqsoDspp0g66eM66OMXCIsXHJcbiAgICBidXR0b25fcmVzdGFydDogXCLri6Tsi5wg7Iuc7J6R7ZWp64uI64ukXCIsXHJcbiAgICB0ZXh0X2Vycm9yOiBcIuqygOymnSDsi6TtjKhcIixcclxuICAgIGJ1dHRvbl9yZXRyeTogXCLri6Tsi5wg7Iuc64+E7ZW0IOyjvOyEuOyalFwiLFxyXG4gICAgdGV4dF9mZXRjaF9lcnJvcjogXCLsl7DqsrDtlZjsp4Ag66q77ZaI7Iq164uI64ukXCIsXHJcbn07XHJcbi8vIEFyYWJpY1xyXG5jb25zdCBMQU5HX0FSID0ge1xyXG4gICAgdGV4dF9pbml0OiBcIi4uLtin2YTYqtmH2YrYptipXCIsXHJcbiAgICB0ZXh0X3JlYWR5OiBcItmK2KrZhSDYp9mE2KrYrdmC2YrZglwiLFxyXG4gICAgYnV0dG9uX3N0YXJ0OiBcItil2LbYuti3INmH2YbYpyDZhNmE2KrYrdmC2YrZglwiLFxyXG4gICAgdGV4dF9mZXRjaGluZzogXCLYqtmH2YrYptipINin2YTYqtit2K/ZilwiLFxyXG4gICAgdGV4dF9zb2x2aW5nOiBcItmG2KrYrdmC2YIg2YXZhiDYo9mG2YMg2YTYs9iqINix2YjYqNmI2KrZi9inLi4uXCIsXHJcbiAgICB0ZXh0X2NvbXBsZXRlZDogXCLYo9mG2Kcg2YTYs9iqINix2YjYqNmI2KrZi9inXCIsXHJcbiAgICB0ZXh0X2NvbXBsZXRlZF9zcjogXCLYqtmFINin2YTYp9mG2KrZh9in2KEg2YXZhiDYp9mE2KrYrdmC2YIg2KfZhNiq2YTZgtin2KbZiiDZhdmGINin2YTYqNix2YrYryDYp9mE2LnYtNmI2KfYptmKXCIsXHJcbiAgICB0ZXh0X2V4cGlyZWQ6IFwi2KfZhtiq2YfYqiDYtdmE2KfYrdmK2Kkg2KfZhNiq2K3ZgtmCXCIsXHJcbiAgICBidXR0b25fcmVzdGFydDogXCLYpdi52KfYr9ipINiq2LTYutmK2YRcIixcclxuICAgIHRleHRfZXJyb3I6IFwi2YHYtNmEINin2YTYqtit2YLZglwiLFxyXG4gICAgYnV0dG9uX3JldHJ5OiBcItin2KjYr9ijINmF2LHYqSDYo9iu2LHZiVwiLFxyXG4gICAgdGV4dF9mZXRjaF9lcnJvcjogXCLZhdi02YPZhNipINmB2Yog2KfZhNin2KrYtdin2YQg2YXYuVwiLFxyXG59O1xyXG5jb25zdCBsb2NhbGl6YXRpb25zID0ge1xyXG4gICAgZW46IExBTkdfRU4sXHJcbiAgICBkZTogTEFOR19ERSxcclxuICAgIG5sOiBMQU5HX05MLFxyXG4gICAgZnI6IExBTkdfRlIsXHJcbiAgICBpdDogTEFOR19JVCxcclxuICAgIHB0OiBMQU5HX1BULFxyXG4gICAgZXM6IExBTkdfRVMsXHJcbiAgICBjYTogTEFOR19DQSxcclxuICAgIGphOiBMQU5HX0pBLFxyXG4gICAgZGE6IExBTkdfREEsXHJcbiAgICBydTogTEFOR19SVSxcclxuICAgIHN2OiBMQU5HX1NWLFxyXG4gICAgdHI6IExBTkdfVFIsXHJcbiAgICBlbDogTEFOR19FTCxcclxuICAgIHVrOiBMQU5HX1VLLFxyXG4gICAgYmc6IExBTkdfQkcsXHJcbiAgICBjczogTEFOR19DUyxcclxuICAgIHNrOiBMQU5HX1NLLFxyXG4gICAgbm86IExBTkdfTk8sXHJcbiAgICBmaTogTEFOR19GSSxcclxuICAgIGx2OiBMQU5HX0xWLFxyXG4gICAgbHQ6IExBTkdfTFQsXHJcbiAgICBwbDogTEFOR19QTCxcclxuICAgIGV0OiBMQU5HX0VULFxyXG4gICAgaHI6IExBTkdfSFIsXHJcbiAgICBzcjogTEFOR19TUixcclxuICAgIHNsOiBMQU5HX1NMLFxyXG4gICAgaHU6IExBTkdfSFUsXHJcbiAgICBybzogTEFOR19STyxcclxuICAgIHpoOiBMQU5HX1pILFxyXG4gICAgemhfdHc6IExBTkdfWkhfVFcsXHJcbiAgICB2aTogTEFOR19WSSxcclxuICAgIGhlOiBMQU5HX0hFLFxyXG4gICAgdGg6IExBTkdfVEgsXHJcbiAgICBrcjogTEFOR19LUixcclxuICAgIGFyOiBMQU5HX0FSLFxyXG4gICAgLy8gYWx0ZXJuYXRpdmUgbGFuZ3VhZ2UgY29kZXNcclxuICAgIG5iOiBMQU5HX05PLFxyXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVEaWFnbm9zdGljc0J1ZmZlcihzb2x2ZXJJRCwgdGltZVRvU29sdmVkKSB7XG4gICAgY29uc3QgYXJyID0gbmV3IFVpbnQ4QXJyYXkoMyk7XG4gICAgY29uc3QgdmlldyA9IG5ldyBEYXRhVmlldyhhcnIuYnVmZmVyKTtcbiAgICB2aWV3LnNldFVpbnQ4KDAsIHNvbHZlcklEKTtcbiAgICB2aWV3LnNldFVpbnQxNigxLCB0aW1lVG9Tb2x2ZWQpO1xuICAgIHJldHVybiBhcnI7XG59XG5cbnZhciB3b3JrZXJTdHJpbmcgPSBcIiFmdW5jdGlvbigpe1xcXCJ1c2Ugc3RyaWN0XFxcIjtjb25zdCBBPVxcXCI9XFxcIi5jaGFyQ29kZUF0KDApLEk9bmV3IFVpbnQ4QXJyYXkoMjU2KTtmb3IobGV0IEE9MDtBPDY0O0ErKylJW1xcXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvXFxcIi5jaGFyQ29kZUF0KEEpXT1BO2Z1bmN0aW9uIGcoQSl7Y29uc3QgST17fSxnPUEuZXhwb3J0cyxDPWcubWVtb3J5LFE9Zy5fX2FsbG9jLHQ9Zy5fX3JldGFpbixCPWcuX19ydHRpX2Jhc2V8fC0xO3JldHVybiBJLl9fYWxsb2NBcnJheT0oQSxJKT0+e2NvbnN0IGc9ZnVuY3Rpb24oQSl7cmV0dXJuIG5ldyBVaW50MzJBcnJheShDLmJ1ZmZlcilbKEIrND4+PjIpKzIqQV19KEEpLGU9MzEtTWF0aC5jbHozMihnPj4+NiYzMSksbz1JLmxlbmd0aCxpPVEobzw8ZSwwKSxyPVEoMTIsQSksbj1uZXcgVWludDMyQXJyYXkoQy5idWZmZXIpO25bciswPj4+Ml09dChpKSxuW3IrND4+PjJdPWksbltyKzg+Pj4yXT1vPDxlO2NvbnN0IEU9Qy5idWZmZXIscz1uZXcgVWludDhBcnJheShFKTtpZigxNjM4NCZnKWZvcihsZXQgQT0wO0E8bzsrK0Epc1soaT4+PmUpK0FdPXQoSVtBXSk7ZWxzZSBzLnNldChJLGk+Pj5lKTtyZXR1cm4gcn0sSS5fX2dldFVpbnQ4QXJyYXk9QT0+e2NvbnN0IEk9bmV3IFVpbnQzMkFycmF5KEMuYnVmZmVyKSxnPUlbQSs0Pj4+Ml07cmV0dXJuIG5ldyBVaW50OEFycmF5KEMuYnVmZmVyLGcsSVtnLTQ+Pj4yXT4+PjApfSxmdW5jdGlvbihBLEk9e30pe2NvbnN0IGc9QS5fX2FyZ3VtZW50c0xlbmd0aD9JPT57QS5fX2FyZ3VtZW50c0xlbmd0aC52YWx1ZT1JfTpBLl9fc2V0QXJndW1lbnRzTGVuZ3RofHxBLl9fc2V0YXJnY3x8KCgpPT4oe30pKTtmb3IoY29uc3QgQyBpbiBBKXtpZighT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKEEsQykpY29udGludWU7Y29uc3QgUT1BW0NdLHQ9Qy5zcGxpdChcXFwiLlxcXCIpWzBdO1xcXCJmdW5jdGlvblxcXCI9PXR5cGVvZiBRJiZRIT09Zz8oSVt0XT0oLi4uQSk9PihnKEEubGVuZ3RoKSxRKC4uLkEpKSkub3JpZ2luYWw9UTpJW3RdPVF9cmV0dXJuIEl9KGcsSSl9Y2xhc3MgQ3tjb25zdHJ1Y3RvcihBKXt0aGlzLmI9bmV3IFVpbnQ4QXJyYXkoMTI4KSx0aGlzLmg9bmV3IFVpbnQzMkFycmF5KDE2KSx0aGlzLnQ9MCx0aGlzLmM9MCx0aGlzLnY9bmV3IFVpbnQzMkFycmF5KDMyKSx0aGlzLm09bmV3IFVpbnQzMkFycmF5KDMyKSx0aGlzLm91dGxlbj1BfX1mdW5jdGlvbiBRKEEsSSl7cmV0dXJuIEFbSV1eQVtJKzFdPDw4XkFbSSsyXTw8MTZeQVtJKzNdPDwyNH1mdW5jdGlvbiB0KEEsSSxnLEMsUSx0LEIsZSl7Y29uc3Qgbz1JW0JdLGk9SVtCKzFdLHI9SVtlXSxuPUlbZSsxXTtsZXQgRSxzLHcsYSxjPUFbZ10sRD1BW2crMV0sZj1BW0NdLGg9QVtDKzFdLHk9QVtRXSxsPUFbUSsxXSx1PUFbdF0sTj1BW3QrMV07RT1jK2Yscz0oYyZmfChjfGYpJn5FKT4+PjMxLGM9RSxEPUQraCtzLEU9YytvLHM9KGMmb3woY3xvKSZ+RSk+Pj4zMSxjPUUsRD1EK2krcyx3PXVeYyxhPU5eRCx1PWEsTj13LEU9eSt1LHM9KHkmdXwoeXx1KSZ+RSk+Pj4zMSx5PUUsbD1sK04rcyx3PWZeeSxhPWhebCxmPXc+Pj4yNF5hPDw4LGg9YT4+PjI0Xnc8PDgsRT1jK2Yscz0oYyZmfChjfGYpJn5FKT4+PjMxLGM9RSxEPUQraCtzLEU9YytyLHM9KGMmcnwoY3xyKSZ+RSk+Pj4zMSxjPUUsRD1EK24rcyx3PXVeYyxhPU5eRCx1PXc+Pj4xNl5hPDwxNixOPWE+Pj4xNl53PDwxNixFPXkrdSxzPSh5JnV8KHl8dSkmfkUpPj4+MzEseT1FLGw9bCtOK3Msdz1mXnksYT1oXmwsZj1hPj4+MzFedzw8MSxoPXc+Pj4zMV5hPDwxLEFbZ109YyxBW2crMV09RCxBW0NdPWYsQVtDKzFdPWgsQVtRXT15LEFbUSsxXT1sLEFbdF09dSxBW3QrMV09Tn1jb25zdCBCPVs0MDg5MjM1NzIwLDE3NzkwMzM3MDMsMjIyNzg3MzU5NSwzMTQ0MTM0Mjc3LDQyNzExNzU3MjMsMTAxMzkwNDI0MiwxNTk1NzUwMTI5LDI3NzM0ODA3NjIsMjkxNzU2NTEzNywxMzU5ODkzMTE5LDcyNTUxMTE5OSwyNjAwODIyOTI0LDQyMTUzODk1NDcsNTI4NzM0NjM1LDMyNzAzMzIwOSwxNTQxNDU5MjI1XSxlPVswLDIsNCw2LDgsMTAsMTIsMTQsMTYsMTgsMjAsMjIsMjQsMjYsMjgsMzAsMjgsMjAsOCwxNiwxOCwzMCwyNiwxMiwyLDI0LDAsNCwyMiwxNCwxMCw2LDIyLDE2LDI0LDAsMTAsNCwzMCwyNiwyMCwyOCw2LDEyLDE0LDIsMTgsOCwxNCwxOCw2LDIsMjYsMjQsMjIsMjgsNCwxMiwxMCwyMCw4LDAsMzAsMTYsMTgsMCwxMCwxNCw0LDgsMjAsMzAsMjgsMiwyMiwyNCwxMiwxNiw2LDI2LDQsMjQsMTIsMjAsMCwyMiwxNiw2LDgsMjYsMTQsMTAsMzAsMjgsMiwxOCwyNCwxMCwyLDMwLDI4LDI2LDgsMjAsMCwxNCwxMiw2LDE4LDQsMTYsMjIsMjYsMjIsMTQsMjgsMjQsMiw2LDE4LDEwLDAsMzAsOCwxNiwxMiw0LDIwLDEyLDMwLDI4LDE4LDIyLDYsMCwxNiwyNCw0LDI2LDE0LDIsOCwyMCwxMCwyMCw0LDE2LDgsMTQsMTIsMiwxMCwzMCwyMiwxOCwyOCw2LDI0LDI2LDAsMCwyLDQsNiw4LDEwLDEyLDE0LDE2LDE4LDIwLDIyLDI0LDI2LDI4LDMwLDI4LDIwLDgsMTYsMTgsMzAsMjYsMTIsMiwyNCwwLDQsMjIsMTQsMTAsNl07ZnVuY3Rpb24gbyhBLEkpe2NvbnN0IGc9QS52LEM9QS5tO2ZvcihsZXQgST0wO0k8MTY7SSsrKWdbSV09QS5oW0ldLGdbSSsxNl09QltJXTtnWzI0XT1nWzI0XV5BLnQsZ1syNV09Z1syNV1eQS50LzQyOTQ5NjcyOTYsSSYmKGdbMjhdPX5nWzI4XSxnWzI5XT1+Z1syOV0pO2ZvcihsZXQgST0wO0k8MzI7SSsrKUNbSV09UShBLmIsNCpJKTtmb3IobGV0IEE9MDtBPDEyO0ErKyl0KGcsQywwLDgsMTYsMjQsZVsxNipBKzBdLGVbMTYqQSsxXSksdChnLEMsMiwxMCwxOCwyNixlWzE2KkErMl0sZVsxNipBKzNdKSx0KGcsQyw0LDEyLDIwLDI4LGVbMTYqQSs0XSxlWzE2KkErNV0pLHQoZyxDLDYsMTQsMjIsMzAsZVsxNipBKzZdLGVbMTYqQSs3XSksdChnLEMsMCwxMCwyMCwzMCxlWzE2KkErOF0sZVsxNipBKzldKSx0KGcsQywyLDEyLDIyLDI0LGVbMTYqQSsxMF0sZVsxNipBKzExXSksdChnLEMsNCwxNCwxNiwyNixlWzE2KkErMTJdLGVbMTYqQSsxM10pLHQoZyxDLDYsOCwxOCwyOCxlWzE2KkErMTRdLGVbMTYqQSsxNV0pO2ZvcihsZXQgST0wO0k8MTY7SSsrKUEuaFtJXT1BLmhbSV1eZ1tJXV5nW0krMTZdfWZ1bmN0aW9uIGkoQSxJKXtmb3IobGV0IEk9MDtJPDE2O0krKylBLmhbSV09QltJXTtBLmIuc2V0KEkpLEEuaFswXV49MTY4NDI3NTJeQS5vdXRsZW59YXN5bmMgZnVuY3Rpb24gcigpe3JldHVybihBLEksZz00Mjk0OTY3Mjk1KT0+e2NvbnN0IFE9ZnVuY3Rpb24oQSxJLGcpe2lmKDEyOCE9QS5sZW5ndGgpdGhyb3cgRXJyb3IoXFxcIkludmFsaWQgaW5wdXRcXFwiKTtjb25zdCBRPUEuYnVmZmVyLHQ9bmV3IERhdGFWaWV3KFEpLEI9bmV3IEMoMzIpO0IudD0xMjg7Y29uc3QgZT10LmdldFVpbnQzMigxMjQsITApLHI9ZStnO2ZvcihsZXQgZz1lO2c8cjtnKyspaWYodC5zZXRVaW50MzIoMTI0LGcsITApLGkoQixBKSxvKEIsITApLEIuaFswXTxJKXJldHVybiAwPT1BU0NfVEFSR0VUP25ldyBVaW50OEFycmF5KEIuaC5idWZmZXIpOlVpbnQ4QXJyYXkud3JhcChCLmguYnVmZmVyKTtyZXR1cm4gbmV3IFVpbnQ4QXJyYXkoMCl9KEEsSSxnKTtyZXR1cm5bQSxRXX19bGV0IG4sRTtVaW50OEFycmF5LnByb3RvdHlwZS5zbGljZXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KFVpbnQ4QXJyYXkucHJvdG90eXBlLFxcXCJzbGljZVxcXCIse3ZhbHVlOmZ1bmN0aW9uKEEsSSl7cmV0dXJuIG5ldyBVaW50OEFycmF5KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRoaXMsQSxJKSl9fSksc2VsZi5BU0NfVEFSR0VUPTA7Y29uc3Qgcz1uZXcgUHJvbWlzZSgoQT0+RT1BKSk7c2VsZi5vbmVycm9yPUE9PntzZWxmLnBvc3RNZXNzYWdlKHt0eXBlOlxcXCJlcnJvclxcXCIsbWVzc2FnZTpKU09OLnN0cmluZ2lmeShBKX0pfSxzZWxmLm9ubWVzc2FnZT1hc3luYyBDPT57Y29uc3QgUT1DLmRhdGE7dHJ5e2lmKFxcXCJzb2x2ZXJcXFwiPT09US50eXBlKXtpZihRLmZvcmNlSlMpe249MTtjb25zdCBBPWF3YWl0IHIoKTtFKEEpfWVsc2UgdHJ5e249Mjtjb25zdCBDPVdlYkFzc2VtYmx5LmNvbXBpbGUoZnVuY3Rpb24oZyl7bGV0IEM9MzI4NTtnLmNoYXJDb2RlQXQoNDM3OSk9PT1BJiZDLS0sZy5jaGFyQ29kZUF0KDQzNzgpPT09QSYmQy0tO2NvbnN0IFE9bmV3IFVpbnQ4QXJyYXkoQyk7Zm9yKGxldCBBPTAsQz0wO0E8NDM4MDtBKz00KXtjb25zdCB0PUlbZy5jaGFyQ29kZUF0KEErMCldLEI9SVtnLmNoYXJDb2RlQXQoQSsxKV0sZT1JW2cuY2hhckNvZGVBdChBKzIpXSxvPUlbZy5jaGFyQ29kZUF0KEErMyldO1FbQysrXT10PDwyfEI+PjQsUVtDKytdPSgxNSZCKTw8NHxlPj4yLFFbQysrXT0oMyZlKTw8Nnw2MyZvfXJldHVybiBRfShcXFwiQUdGemJRRUFBQUFCS2doZ0FBQmdBbjkvQUdBRGYzOS9BWDlnQVg4QVlBUi9mMzkvQUdBQUFYOWdBWDhCZjJBQ2YzOEJmd0lOQVFObGJuWUZZV0p2Y25RQUJBTU1Dd2NHQXdBQUFRSUZBUUlBQlFNQkFBRUdGZ1IvQVVFQUMzOEJRUUFMZndCQkF3dC9BRUhnREFzSGJna0diV1Z0YjNKNUFnQUhYMTloYkd4dll3QUJDRjlmY21WMFlXbHVBQUlKWDE5eVpXeGxZWE5sQUFNSlgxOWpiMnhzWldOMEFBUUhYMTl5WlhObGRBQUZDMTlmY25SMGFWOWlZWE5sQXdNTlZXbHVkRGhCY25KaGVWOUpSQU1DREhOdmJIWmxRbXhoYTJVeVlnQUtDQUVMQ3ZRU0M1SUJBUVYvSUFCQjhQLy8vd05MQkVBQUN5TUJRUkJxSWdRZ0FFRVBha0Z3Y1NJQ1FSQWdBa0VRU3hzaUJtb2lBajhBSWdWQkVIUWlBMHNFUUNBRklBSWdBMnRCLy84RGFrR0FnSHh4UVJCMklnTWdCU0FEU2h0QUFFRUFTQVJBSUFOQUFFRUFTQVJBQUFzTEN5QUNKQUVnQkVFUWF5SUNJQVkyQWdBZ0FrRUJOZ0lFSUFJZ0FUWUNDQ0FDSUFBMkFnd2dCQXNFQUNBQUN3TUFBUXNEQUFFTEJnQWpBQ1FCQzdzQ0FRRi9Ba0FnQVVVTkFDQUFRUUE2QUFBZ0FDQUJha0VFYXlJQ1FRQTZBQU1nQVVFQ1RRMEFJQUJCQURvQUFTQUFRUUE2QUFJZ0FrRUFPZ0FDSUFKQkFEb0FBU0FCUVFaTkRRQWdBRUVBT2dBRElBSkJBRG9BQUNBQlFRaE5EUUFnQUVFQUlBQnJRUU54SWdKcUlnQkJBRFlDQUNBQUlBRWdBbXRCZkhFaUFtcEJIR3NpQVVFQU5nSVlJQUpCQ0UwTkFDQUFRUUEyQWdRZ0FFRUFOZ0lJSUFGQkFEWUNFQ0FCUVFBMkFoUWdBa0VZVFEwQUlBQkJBRFlDRENBQVFRQTJBaEFnQUVFQU5nSVVJQUJCQURZQ0dDQUJRUUEyQWdBZ0FVRUFOZ0lFSUFGQkFEWUNDQ0FCUVFBMkFnd2dBQ0FBUVFSeFFSaHFJZ0ZxSVFBZ0FpQUJheUVCQTBBZ0FVRWdUd1JBSUFCQ0FEY0RBQ0FBUWdBM0F3Z2dBRUlBTndNUUlBQkNBRGNER0NBQlFTQnJJUUVnQUVFZ2FpRUFEQUVMQ3dzTGNnQUNmeUFBUlFSQVFReEJBaEFCSVFBTElBQUxRUUEyQWdBZ0FFRUFOZ0lFSUFCQkFEWUNDQ0FCUWZELy8vOERJQUoyU3dSQVFjQUtRZkFLUVJKQk9SQUFBQXNnQVNBQ2RDSUJRUUFRQVNJQ0lBRVFCaUFBS0FJQUdpQUFJQUkyQWdBZ0FDQUNOZ0lFSUFBZ0FUWUNDQ0FBQzg4QkFRSi9RYUFCUVFBUUFTSUFRUXhCQXhBQlFZQUJRUUFRQnpZQ0FDQUFRUXhCQkJBQlFRaEJBeEFITmdJRUlBQkNBRGNEQ0NBQVFRQTJBaEFnQUVJQU53TVlJQUJDQURjRElDQUFRZ0EzQXlnZ0FFSUFOd013SUFCQ0FEY0RPQ0FBUWdBM0EwQWdBRUlBTndOSUlBQkNBRGNEVUNBQVFnQTNBMWdnQUVJQU53TmdJQUJDQURjRGFDQUFRZ0EzQTNBZ0FFSUFOd040SUFCQ0FEY0RnQUVnQUVJQU53T0lBU0FBUWdBM0E1QUJRWUFCUVFVUUFTSUJRWUFCRUFZZ0FDQUJOZ0tZQVNBQVFTQTJBcHdCSUFBTDJBa0NBMzhTZmlBQUtBSUVJUUlnQUNnQ21BRWhBd05BSUFSQmdBRklCRUFnQXlBRWFpQUJJQVJxS1FNQU53TUFJQVJCQ0dvaEJBd0JDd3NnQWlnQ0JDa0RBQ0VNSUFJb0FnUXBBd2doRFNBQ0tBSUVLUU1RSVE0Z0FpZ0NCQ2tER0NFUElBSW9BZ1FwQXlBaEJTQUNLQUlFS1FNb0lRc2dBaWdDQkNrRE1DRUdJQUlvQWdRcEF6Z2hCMEtJa3ZPZC84ejVoT29BSVFoQ3U4NnFwdGpRNjdPN2Z5RUpRcXZ3MC9TdjdyeTNQQ0VRUXZIdDlQaWxwLzJucFg4aENpQUFLUU1JUXRHRm11LzZ6NVNIMFFDRklSRkNuOWo1MmNLUjJvS2JmeUVTUXBTRithWEF5b20rWUNFVFF2bkMrSnVSbzdQdzJ3QWhGRUVBSVFRRFFDQUVRY0FCU0FSQUlBVWdDQ0FSSUF3Z0JTQURJQVJCZ0FocUlnRXRBQUJCQTNScUtRTUFmSHdpQllWQ0lJb2lESHdpQ0lWQ0dJb2lFU0FJSUF3Z0JTQVJJQU1nQVMwQUFVRURkR29wQXdCOGZDSU1oVUlRaWlJSWZDSVZoVUkvaWlFRklBc2dDU0FTSUEwZ0N5QURJQUV0QUFKQkEzUnFLUU1BZkh3aURZVkNJSW9pQ1h3aUVZVkNHSW9oQ3lBR0lCQWdFeUFPSUFZZ0F5QUJMUUFFUVFOMGFpa0RBSHg4SWdhRlFpQ0tJZzU4SWhDRlFoaUtJaElnRUNBT0lBWWdFaUFESUFFdEFBVkJBM1JxS1FNQWZId2lEb1ZDRUlvaUUzd2lFSVZDUDRvaEJpQUhJQW9nRkNBUElBY2dBeUFCTFFBR1FRTjBhaWtEQUh4OElnZUZRaUNLSWc5OElncUZRaGlLSWhJZ0NpQVBJQWNnRWlBRElBRXRBQWRCQTNScUtRTUFmSHdpRDRWQ0VJb2lDbndpRW9WQ1A0b2hCeUFRSUFvZ0RDQVJJQWtnRFNBTElBTWdBUzBBQTBFRGRHb3BBd0I4ZkNJTmhVSVFpaUlKZkNJV0lBdUZRaitLSWd3Z0F5QUJMUUFJUVFOMGFpa0RBSHg4SWhDRlFpQ0tJZ3A4SWdzZ0VDQUxJQXlGUWhpS0loRWdBeUFCTFFBSlFRTjBhaWtEQUh4OElnd2dDb1ZDRUlvaUZId2lFQ0FSaFVJL2lpRUxJQVlnRWlBSUlBMGdCaUFESUFFdEFBcEJBM1JxS1FNQWZId2lEWVZDSUlvaUNId2lDb1ZDR0lvaUJpQU5JQVlnQXlBQkxRQUxRUU4wYWlrREFIeDhJZzBnQ0lWQ0VJb2lFU0FLZkNJS2hVSS9paUVHSUFjZ0ZTQUpJQTRnQnlBRElBRXRBQXhCQTNScUtRTUFmSHdpRG9WQ0lJb2lDSHdpQ1lWQ0dJb2lCeUFPSUFjZ0F5QUJMUUFOUVFOMGFpa0RBSHg4SWc0Z0NJVkNFSW9pRWlBSmZDSUloVUkvaWlFSElBVWdGaUFUSUE4Z0JTQURJQUV0QUE1QkEzUnFLUU1BZkh3aUQ0VkNJSW9pQ1h3aUZZVkNHSW9pQlNBUElBVWdBeUFCTFFBUFFRTjBhaWtEQUh4OElnOGdDWVZDRUlvaUV5QVZmQ0lKaFVJL2lpRUZJQVJCRUdvaEJBd0JDd3NnQWlnQ0JDQUNLQUlFS1FNQUlBZ2dESVdGTndNQUlBSW9BZ1FnQWlnQ0JDa0RDQ0FKSUEyRmhUY0RDQ0FDS0FJRUlBSW9BZ1FwQXhBZ0RpQVFoWVUzQXhBZ0FpZ0NCQ0FDS0FJRUtRTVlJQW9nRDRXRk53TVlJQUlvQWdRZ0FpZ0NCQ2tESUNBRklCR0ZoVGNESUNBQ0tBSUVJQUlvQWdRcEF5Z2dDeUFTaFlVM0F5Z2dBaWdDQkNBQ0tBSUVLUU13SUFZZ0U0V0ZOd013SUFJb0FnUWdBaWdDQkNrRE9DQUhJQlNGaFRjRE9DQUFJQXczQXhnZ0FDQU5Od01nSUFBZ0RqY0RLQ0FBSUE4M0F6QWdBQ0FGTndNNElBQWdDemNEUUNBQUlBWTNBMGdnQUNBSE53TlFJQUFnQ0RjRFdDQUFJQWszQTJBZ0FDQVFOd05vSUFBZ0NqY0RjQ0FBSUJFM0EzZ2dBQ0FTTndPQUFTQUFJQk0zQTRnQklBQWdGRGNEa0FFTDRRSUJCSDhnQUNnQ0NFR0FBVWNFUUVIUUNVR0FDa0VlUVFVUUFBQUxJQUFvQWdBaEJCQUlJZ01vQWdRaEJTQURRb0FCTndNSUlBUW9BbndpQUNBQ2FpRUdBMEFnQUNBR1NRUkFJQVFnQURZQ2ZDQURLQUlFSWdJb0FnUWdBeWdDbkFHdFFvaVM5NVgvelBtRTZnQ0ZOd01BSUFJb0FnUkN1ODZxcHRqUTY3TzdmemNEQ0NBQ0tBSUVRcXZ3MC9TdjdyeTNQRGNERUNBQ0tBSUVRdkh0OVBpbHAvMm5wWDgzQXhnZ0FpZ0NCRUxSaFpyditzK1VoOUVBTndNZ0lBSW9BZ1JDbjlqNTJjS1Iyb0tiZnpjREtDQUNLQUlFUXV2Nmh0cS90ZmJCSHpjRE1DQUNLQUlFUXZuQytKdVJvN1B3MndBM0F6Z2dBeUFFRUFrZ0JTZ0NCQ2tEQUtjZ0FVa0VRRUVBSUFVb0FnQWlBVUVRYXlnQ0RDSUNTd1JBUWZBTFFiQU1RYzBOUVFVUUFBQUxRUXhCQXhBQklnQWdBVFlDQUNBQUlBSTJBZ2dnQUNBQk5nSUVJQUFQQ3lBQVFRRnFJUUFNQVFzTFFReEJBeEFCUVFCQkFCQUhDd3dBUWFBTkpBQkJvQTBrQVFzTCtnUUpBRUdCQ0F1L0FRRUNBd1FGQmdjSUNRb0xEQTBPRHc0S0JBZ0pEdzBHQVF3QUFnc0hCUU1MQ0F3QUJRSVBEUW9PQXdZSEFRa0VCd2tEQVEwTUN3NENCZ1VLQkFBUENBa0FCUWNDQkFvUERnRUxEQVlJQXcwQ0RBWUtBQXNJQXdRTkJ3VVBEZ0VKREFVQkR3NE5CQW9BQndZRENRSUlDdzBMQnc0TUFRTUpCUUFQQkFnR0Fnb0dEdzRKQ3dNQUNBd0NEUWNCQkFvRkNnSUlCQWNHQVFVUEN3a09Bd3dOQUFBQkFnTUVCUVlIQ0FrS0N3d05EZzhPQ2dRSUNROE5CZ0VNQUFJTEJ3VURBRUhBQ1FzcEdnQUFBQUVBQUFBQkFBQUFHZ0FBQUVrQWJnQjJBR0VBYkFCcEFHUUFJQUJwQUc0QWNBQjFBSFFBUWZBSkN6RWlBQUFBQVFBQUFBRUFBQUFpQUFBQWN3QnlBR01BTHdCekFHOEFiQUIyQUdVQWNnQlhBR0VBY3dCdEFDNEFkQUJ6QUVHd0Nnc3JIQUFBQUFFQUFBQUJBQUFBSEFBQUFFa0FiZ0IyQUdFQWJBQnBBR1FBSUFCc0FHVUFiZ0JuQUhRQWFBQkI0QW9MTlNZQUFBQUJBQUFBQVFBQUFDWUFBQUIrQUd3QWFRQmlBQzhBWVFCeUFISUFZUUI1QUdJQWRRQm1BR1lBWlFCeUFDNEFkQUJ6QUVHZ0N3czFKZ0FBQUFFQUFBQUJBQUFBSmdBQUFINEFiQUJwQUdJQUx3QnpBSFFBWVFCMEFHa0FZd0JoQUhJQWNnQmhBSGtBTGdCMEFITUFRZUFMQ3pNa0FBQUFBUUFBQUFFQUFBQWtBQUFBU1FCdUFHUUFaUUI0QUNBQWJ3QjFBSFFBSUFCdkFHWUFJQUJ5QUdFQWJnQm5BR1VBUWFBTUN6TWtBQUFBQVFBQUFBRUFBQUFrQUFBQWZnQnNBR2tBWWdBdkFIUUFlUUJ3QUdVQVpBQmhBSElBY2dCaEFIa0FMZ0IwQUhNQVFlQU1DeTRHQUFBQUlBQUFBQUFBQUFBZ0FBQUFBQUFBQUNBQUFBQUFBQUFBWVFBQUFBSUFBQUFoQWdBQUFnQUFBQ1FDXFxcIikpLFE9YXdhaXQgYXN5bmMgZnVuY3Rpb24oQSl7Y29uc3QgST1hd2FpdCBhc3luYyBmdW5jdGlvbihBKXtjb25zdCBJPXtlbnY6e2Fib3J0KCl7dGhyb3cgRXJyb3IoXFxcIldhc20gYWJvcnRlZFxcXCIpfX19O3JldHVybntleHBvcnRzOmcoYXdhaXQgV2ViQXNzZW1ibHkuaW5zdGFudGlhdGUoQSxJKSl9fShBKSxDPUkuZXhwb3J0cy5fX3JldGFpbihJLmV4cG9ydHMuX19hbGxvY0FycmF5KEkuZXhwb3J0cy5VaW50OEFycmF5X0lELG5ldyBVaW50OEFycmF5KDEyOCkpKTtsZXQgUT1JLmV4cG9ydHMuX19nZXRVaW50OEFycmF5KEMpO3JldHVybihBLGcsdD00Mjk0OTY3Mjk1KT0+e1Euc2V0KEEpO2NvbnN0IEI9SS5leHBvcnRzLnNvbHZlQmxha2UyYihDLGcsdCk7UT1JLmV4cG9ydHMuX19nZXRVaW50OEFycmF5KEMpO2NvbnN0IGU9SS5leHBvcnRzLl9fZ2V0VWludDhBcnJheShCKTtyZXR1cm4gSS5leHBvcnRzLl9fcmVsZWFzZShCKSxbUSxlXX19KGF3YWl0IEMpO0UoUSl9Y2F0Y2goQSl7Y29uc29sZS5sb2coXFxcIkZyaWVuZGx5Q2FwdGNoYSBmYWlsZWQgdG8gaW5pdGlhbGl6ZSBXZWJBc3NlbWJseSwgZmFsbGluZyBiYWNrIHRvIEphdmFzY3JpcHQgc29sdmVyOiBcXFwiK0EudG9TdHJpbmcoKSksbj0xO2NvbnN0IEk9YXdhaXQgcigpO0UoSSl9c2VsZi5wb3N0TWVzc2FnZSh7dHlwZTpcXFwicmVhZHlcXFwiLHNvbHZlcjpufSl9ZWxzZSBpZihcXFwic3RhcnRcXFwiPT09US50eXBlKXtjb25zdCBBPWF3YWl0IHM7c2VsZi5wb3N0TWVzc2FnZSh7dHlwZTpcXFwic3RhcnRlZFxcXCJ9KTtsZXQgSSxnPTA7Zm9yKGxldCBDPTA7QzwyNTY7QysrKXtRLnB1enpsZVNvbHZlcklucHV0WzEyM109Qztjb25zdFt0LEJdPUEoUS5wdXp6bGVTb2x2ZXJJbnB1dCxRLnRocmVzaG9sZCk7aWYoMCE9PUIubGVuZ3RoKXtJPXQ7YnJlYWt9Y29uc29sZS53YXJuKFxcXCJGQzogSW50ZXJuYWwgZXJyb3Igb3Igbm8gc29sdXRpb24gZm91bmRcXFwiKSxnKz1NYXRoLnBvdygyLDMyKS0xfWcrPW5ldyBEYXRhVmlldyhJLnNsaWNlKC00KS5idWZmZXIpLmdldFVpbnQzMigwLCEwKSxzZWxmLnBvc3RNZXNzYWdlKHt0eXBlOlxcXCJkb25lXFxcIixzb2x1dGlvbjpJLnNsaWNlKC04KSxoOmcscHV6emxlSW5kZXg6US5wdXp6bGVJbmRleCxwdXp6bGVOdW1iZXI6US5wdXp6bGVOdW1iZXJ9KX19Y2F0Y2goQSl7c2V0VGltZW91dCgoKCk9Pnt0aHJvdyBBfSkpfX19KCk7XCI7XG5cbi8vIERlZmVuc2l2ZSBpbml0IHRvIG1ha2UgaXQgZWFzaWVyIHRvIGludGVncmF0ZSB3aXRoIEdhdHNieSBhbmQgZnJpZW5kcy5cclxubGV0IFVSTDtcclxuaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIFVSTCA9IHdpbmRvdy5VUkwgfHwgd2luZG93LndlYmtpdFVSTDtcclxufVxyXG5jbGFzcyBXb3JrZXJHcm91cCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLndvcmtlcnMgPSBbXTtcclxuICAgICAgICB0aGlzLnB1enpsZU51bWJlciA9IDA7XHJcbiAgICAgICAgdGhpcy5udW1QdXp6bGVzID0gMDtcclxuICAgICAgICB0aGlzLnRocmVzaG9sZCA9IDA7XHJcbiAgICAgICAgdGhpcy5zdGFydFRpbWUgPSAwO1xyXG4gICAgICAgIHRoaXMucHJvZ3Jlc3MgPSAwO1xyXG4gICAgICAgIHRoaXMudG90YWxIYXNoZXMgPSAwO1xyXG4gICAgICAgIHRoaXMucHV6emxlU29sdmVySW5wdXRzID0gW107XHJcbiAgICAgICAgLy8gVGhlIGluZGV4IG9mIHRoZSBuZXh0IHB1enpsZVxyXG4gICAgICAgIHRoaXMucHV6emxlSW5kZXggPSAwO1xyXG4gICAgICAgIHRoaXMuc29sdXRpb25CdWZmZXIgPSBuZXcgVWludDhBcnJheSgwKTtcclxuICAgICAgICAvLyBpbml0aWFsaXplIHNvbWUgdmFsdWUsIHNvIHRzIGlzIGhhcHB5XHJcbiAgICAgICAgdGhpcy5zb2x2ZXJUeXBlID0gMTtcclxuICAgICAgICB0aGlzLnJlYWR5UHJvbWlzZSA9IG5ldyBQcm9taXNlKCgpID0+IHsgfSk7XHJcbiAgICAgICAgdGhpcy5yZWFkeUNvdW50ID0gMDtcclxuICAgICAgICB0aGlzLnN0YXJ0Q291bnQgPSAwO1xyXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NDYWxsYmFjayA9ICgpID0+IDA7XHJcbiAgICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrID0gKCkgPT4gMDtcclxuICAgICAgICB0aGlzLnN0YXJ0ZWRDYWxsYmFjayA9ICgpID0+IDA7XHJcbiAgICAgICAgdGhpcy5kb25lQ2FsbGJhY2sgPSAoKSA9PiAwO1xyXG4gICAgICAgIHRoaXMuZXJyb3JDYWxsYmFjayA9ICgpID0+IDA7XHJcbiAgICB9XHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIHRoaXMudGVybWluYXRlV29ya2VycygpO1xyXG4gICAgICAgIHRoaXMucHJvZ3Jlc3MgPSAwO1xyXG4gICAgICAgIHRoaXMudG90YWxIYXNoZXMgPSAwO1xyXG4gICAgICAgIGxldCBzZXRSZWFkeTtcclxuICAgICAgICB0aGlzLnJlYWR5UHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiAoc2V0UmVhZHkgPSByZXNvbHZlKSk7XHJcbiAgICAgICAgdGhpcy5yZWFkeUNvdW50ID0gMDtcclxuICAgICAgICB0aGlzLnN0YXJ0Q291bnQgPSAwO1xyXG4gICAgICAgIC8vIFNldHVwIGZvdXIgd29ya2VycyBmb3Igbm93IC0gbGF0ZXIgd2UgY291bGQgY2FsY3VsYXRlIHRoaXMgZGVwZW5kaW5nIG9uIHRoZSBkZXZpY2VcclxuICAgICAgICB0aGlzLndvcmtlcnMgPSBuZXcgQXJyYXkoNCk7XHJcbiAgICAgICAgY29uc3Qgd29ya2VyQmxvYiA9IG5ldyBCbG9iKFt3b3JrZXJTdHJpbmddLCB7IHR5cGU6IFwidGV4dC9qYXZhc2NyaXB0XCIgfSk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLndvcmtlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy53b3JrZXJzW2ldID0gbmV3IFdvcmtlcihVUkwuY3JlYXRlT2JqZWN0VVJMKHdvcmtlckJsb2IpKTtcclxuICAgICAgICAgICAgdGhpcy53b3JrZXJzW2ldLm9uZXJyb3IgPSAoZSkgPT4gdGhpcy5lcnJvckNhbGxiYWNrKGUpO1xyXG4gICAgICAgICAgICB0aGlzLndvcmtlcnNbaV0ub25tZXNzYWdlID0gKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBlLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWRhdGEpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEudHlwZSA9PT0gXCJyZWFkeVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWFkeUNvdW50Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zb2x2ZXJUeXBlID0gZGF0YS5zb2x2ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gV2UgYXJlIHJlYWR5LCB3aGVuIGFsbCB3b3JrZXJzIGFyZSByZWFkeVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlYWR5Q291bnQgPT0gdGhpcy53b3JrZXJzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRSZWFkeSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlYWR5Q2FsbGJhY2soKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChkYXRhLnR5cGUgPT09IFwic3RhcnRlZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFydENvdW50Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gV2Ugc3RhcnRlZCwgd2hlbiB0aGUgZmlyc3Qgd29ya2VyIHN0YXJ0cyB3b3JraW5nXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhcnRDb3VudCA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFydGVkQ2FsbGJhY2soKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChkYXRhLnR5cGUgPT09IFwiZG9uZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEucHV6emxlTnVtYmVyICE9PSB0aGlzLnB1enpsZU51bWJlcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuOyAvLyBzb2x1dGlvbiBiZWxvbmdzIHRvIGEgcHJldmlvdXMgcHV6emxlXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucHV6emxlSW5kZXggPCB0aGlzLnB1enpsZVNvbHZlcklucHV0cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53b3JrZXJzW2ldLnBvc3RNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic3RhcnRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB1enpsZVNvbHZlcklucHV0OiB0aGlzLnB1enpsZVNvbHZlcklucHV0c1t0aGlzLnB1enpsZUluZGV4XSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocmVzaG9sZDogdGhpcy50aHJlc2hvbGQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdXp6bGVJbmRleDogdGhpcy5wdXp6bGVJbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB1enpsZU51bWJlcjogdGhpcy5wdXp6bGVOdW1iZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnB1enpsZUluZGV4Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3MrKztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvdGFsSGFzaGVzICs9IGRhdGEuaDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2dyZXNzQ2FsbGJhY2soe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuOiB0aGlzLm51bVB1enpsZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGg6IHRoaXMudG90YWxIYXNoZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHQ6IChEYXRlLm5vdygpIC0gdGhpcy5zdGFydFRpbWUpIC8gMTAwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaTogdGhpcy5wcm9ncmVzcyxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNvbHV0aW9uQnVmZmVyLnNldChkYXRhLnNvbHV0aW9uLCBkYXRhLnB1enpsZUluZGV4ICogOCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gV2UgYXJlIGRvbmUsIHdoZW4gYWxsIHB1enpsZXMgaGF2ZSBiZWVuIHNvbHZlZFxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb2dyZXNzID09IHRoaXMubnVtUHV6emxlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b3RhbFRpbWUgPSAoRGF0ZS5ub3coKSAtIHRoaXMuc3RhcnRUaW1lKSAvIDEwMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG9uZUNhbGxiYWNrKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvbHV0aW9uOiB0aGlzLnNvbHV0aW9uQnVmZmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaDogdGhpcy50b3RhbEhhc2hlcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQ6IHRvdGFsVGltZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpYWdub3N0aWNzOiBjcmVhdGVEaWFnbm9zdGljc0J1ZmZlcih0aGlzLnNvbHZlclR5cGUsIHRvdGFsVGltZSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb2x2ZXI6IHRoaXMuc29sdmVyVHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZGF0YS50eXBlID09PSBcImVycm9yXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yQ2FsbGJhY2soZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2V0dXBTb2x2ZXIoZm9yY2VKUyA9IGZhbHNlKSB7XHJcbiAgICAgICAgY29uc3QgbXNnID0geyB0eXBlOiBcInNvbHZlclwiLCBmb3JjZUpTOiBmb3JjZUpTIH07XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLndvcmtlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy53b3JrZXJzW2ldLnBvc3RNZXNzYWdlKG1zZyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXN5bmMgc3RhcnQocHV6emxlKSB7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5yZWFkeVByb21pc2U7XHJcbiAgICAgICAgdGhpcy5wdXp6bGVTb2x2ZXJJbnB1dHMgPSBnZXRQdXp6bGVTb2x2ZXJJbnB1dHMocHV6emxlLmJ1ZmZlciwgcHV6emxlLm4pO1xyXG4gICAgICAgIHRoaXMuc29sdXRpb25CdWZmZXIgPSBuZXcgVWludDhBcnJheSg4ICogcHV6emxlLm4pO1xyXG4gICAgICAgIHRoaXMubnVtUHV6emxlcyA9IHB1enpsZS5uO1xyXG4gICAgICAgIHRoaXMudGhyZXNob2xkID0gcHV6emxlLnRocmVzaG9sZDtcclxuICAgICAgICB0aGlzLnB1enpsZUluZGV4ID0gMDtcclxuICAgICAgICB0aGlzLnB1enpsZU51bWJlcisrO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy53b3JrZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnB1enpsZUluZGV4ID09PSB0aGlzLnB1enpsZVNvbHZlcklucHV0cy5sZW5ndGgpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgdGhpcy53b3JrZXJzW2ldLnBvc3RNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwic3RhcnRcIixcclxuICAgICAgICAgICAgICAgIHB1enpsZVNvbHZlcklucHV0OiB0aGlzLnB1enpsZVNvbHZlcklucHV0c1tpXSxcclxuICAgICAgICAgICAgICAgIHRocmVzaG9sZDogdGhpcy50aHJlc2hvbGQsXHJcbiAgICAgICAgICAgICAgICBwdXp6bGVJbmRleDogdGhpcy5wdXp6bGVJbmRleCxcclxuICAgICAgICAgICAgICAgIHB1enpsZU51bWJlcjogdGhpcy5wdXp6bGVOdW1iZXIsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLnB1enpsZUluZGV4Kys7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGVybWluYXRlV29ya2VycygpIHtcclxuICAgICAgICBpZiAodGhpcy53b3JrZXJzLmxlbmd0aCA9PSAwKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLndvcmtlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy53b3JrZXJzW2ldLnRlcm1pbmF0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLndvcmtlcnMgPSBbXTtcclxuICAgIH1cclxufVxuXG5jb25zdCBQVVpaTEVfRU5EUE9JTlRfVVJMID0gXCJodHRwczovL2FwaS5mcmllbmRseWNhcHRjaGEuY29tL2FwaS92MS9wdXp6bGVcIjtcclxuY2xhc3MgV2lkZ2V0SW5zdGFuY2Uge1xyXG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgb3B0aW9ucyA9IHt9KSB7XHJcbiAgICAgICAgdGhpcy53b3JrZXJHcm91cCA9IG5ldyBXb3JrZXJHcm91cCgpO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBjYXB0Y2hhIGhhcyBiZWVuIHN1Y2Nlc2Z1bGx5IHNvbHZlZC5cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLnZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogU29tZSBlcnJvcnMgbWF5IGNhdXNlIGEgbmVlZCBmb3IgdGhlICh3b3JrZXIpIHRvIGJlIHJlaW5pdGlhbGl6ZWQuIElmIHRoaXMgaXNcclxuICAgICAgICAgKiB0cnVlIGBpbml0YCB3aWxsIGJlIGNhbGxlZCBhZ2FpbiB3aGVuIHN0YXJ0IGlzIGNhbGxlZC5cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLm5lZWRzUmVJbml0ID0gZmFsc2U7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogU3RhcnQoKSBoYXMgYmVlbiBjYWxsZWQgYXQgbGVhc3Qgb25jZSBldmVyLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuaGFzQmVlblN0YXJ0ZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmhhc0JlZW5EZXN0cm95ZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm9wdHMgPSBPYmplY3QuYXNzaWduKHtcclxuICAgICAgICAgICAgZm9yY2VKU0ZhbGxiYWNrOiBmYWxzZSxcclxuICAgICAgICAgICAgc2tpcFN0eWxlSW5qZWN0aW9uOiBmYWxzZSxcclxuICAgICAgICAgICAgc3RhcnRNb2RlOiBcImZvY3VzXCIsXHJcbiAgICAgICAgICAgIHB1enpsZUVuZHBvaW50OiBlbGVtZW50LmRhdGFzZXRbXCJwdXp6bGVFbmRwb2ludFwiXSB8fCBQVVpaTEVfRU5EUE9JTlRfVVJMLFxyXG4gICAgICAgICAgICBzdGFydGVkQ2FsbGJhY2s6ICgpID0+IDAsXHJcbiAgICAgICAgICAgIHJlYWR5Q2FsbGJhY2s6ICgpID0+IDAsXHJcbiAgICAgICAgICAgIGRvbmVDYWxsYmFjazogKCkgPT4gMCxcclxuICAgICAgICAgICAgZXJyb3JDYWxsYmFjazogKCkgPT4gMCxcclxuICAgICAgICAgICAgc2l0ZWtleTogZWxlbWVudC5kYXRhc2V0W1wic2l0ZWtleVwiXSB8fCBcIlwiLFxyXG4gICAgICAgICAgICBsYW5ndWFnZTogZWxlbWVudC5kYXRhc2V0W1wibGFuZ1wiXSB8fCBcImVuXCIsXHJcbiAgICAgICAgICAgIHNvbHV0aW9uRmllbGROYW1lOiBlbGVtZW50LmRhdGFzZXRbXCJzb2x1dGlvbkZpZWxkTmFtZVwiXSB8fCBcImZyYy1jYXB0Y2hhLXNvbHV0aW9uXCIsXHJcbiAgICAgICAgICAgIHN0eWxlTm9uY2U6IG51bGwsXHJcbiAgICAgICAgfSwgb3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5lID0gZWxlbWVudDtcclxuICAgICAgICB0aGlzLmUuZnJpZW5kbHlDaGFsbGVuZ2VXaWRnZXQgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMubG9hZExhbmd1YWdlKCk7XHJcbiAgICAgICAgLy8gQHRzLWlnbm9yZSBJZ25vcmUgaXMgcmVxdWlyZWQgYXMgVFMgdGhpbmtzIHRoYXQgYHRoaXMubGFuZ2AgaXMgbm90IGFzc2lnbmVkIHlldCwgYnV0IGl0IGhhcHBlbnMgaW4gYHRoaXMubG9hZExhbmd1YWdlKClgIGFib3ZlLlxyXG4gICAgICAgIGVsZW1lbnQuaW5uZXJUZXh0ID0gdGhpcy5sYW5nLnRleHRfaW5pdDtcclxuICAgICAgICBpZiAoIXRoaXMub3B0cy5za2lwU3R5bGVJbmplY3Rpb24pIHtcclxuICAgICAgICAgICAgaW5qZWN0U3R5bGUodGhpcy5vcHRzLnN0eWxlTm9uY2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmluaXQodGhpcy5vcHRzLnN0YXJ0TW9kZSA9PT0gXCJhdXRvXCIgfHwgdGhpcy5lLmRhdGFzZXRbXCJzdGFydFwiXSA9PT0gXCJhdXRvXCIpO1xyXG4gICAgfVxyXG4gICAgaW5pdChmb3JjZVN0YXJ0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaGFzQmVlbkRlc3Ryb3llZCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRnJpZW5kbHlDYXB0Y2hhIHdpZGdldCBoYXMgYmVlbiBkZXN0cm95ZWQgdXNpbmcgZGVzdHJveSgpLCBpdCBjYW4gbm90IGJlIHVzZWQgYW55bW9yZS5cIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pbml0V29ya2VyR3JvdXAoKTtcclxuICAgICAgICBpZiAoZm9yY2VTdGFydCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuZS5kYXRhc2V0W1wic3RhcnRcIl0gIT09IFwibm9uZVwiICYmXHJcbiAgICAgICAgICAgICh0aGlzLm9wdHMuc3RhcnRNb2RlID09PSBcImZvY3VzXCIgfHwgdGhpcy5lLmRhdGFzZXRbXCJzdGFydFwiXSA9PT0gXCJmb2N1c1wiKSkge1xyXG4gICAgICAgICAgICBjb25zdCBmb3JtID0gZmluZFBhcmVudEZvcm1FbGVtZW50KHRoaXMuZSk7XHJcbiAgICAgICAgICAgIGlmIChmb3JtKSB7XHJcbiAgICAgICAgICAgICAgICBleGVjdXRlT25jZU9uRm9jdXNJbkV2ZW50KGZvcm0sICgpID0+IHRoaXMuc3RhcnQoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZyaWVuZGx5Q2FwdGNoYSBkaXYgc2VlbXMgbm90IHRvIGJlIGNvbnRhaW5lZCBpbiBhIGZvcm0sIGF1dG9zdGFydCB3aWxsIG5vdCB3b3JrXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBMb2FkcyB0aGUgY29uZmlndXJlZCBsYW5ndWFnZSwgb3IgYSBsYW5ndWFnZSBwYXNzZWQgdG8gdGhpcyBmdW5jdGlvbi5cclxuICAgICAqIE5vdGUgdGhhdCBvbmx5IHRoZSBuZXh0IHVwZGF0ZSB3aWxsIGJlIGluIHRoZSBuZXcgbGFuZ3VhZ2UsIGNvbnNpZGVyIGNhbGxpbmcgYHJlc2V0KClgIGFmdGVyIHN3aXRjaGluZyBsYW5ndWFnZXMuXHJcbiAgICAgKi9cclxuICAgIGxvYWRMYW5ndWFnZShsYW5nKSB7XHJcbiAgICAgICAgaWYgKGxhbmcgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLm9wdHMubGFuZ3VhZ2UgPSBsYW5nO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmUuZGF0YXNldFtcImxhbmdcIl0pIHtcclxuICAgICAgICAgICAgdGhpcy5vcHRzLmxhbmd1YWdlID0gdGhpcy5lLmRhdGFzZXRbXCJsYW5nXCJdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIHRoaXMub3B0cy5sYW5ndWFnZSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICBsZXQgbGFuZ0NvZGUgPSB0aGlzLm9wdHMubGFuZ3VhZ2UudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgbGV0IGwgPSBsb2NhbGl6YXRpb25zW2xhbmdDb2RlXTtcclxuICAgICAgICAgICAgaWYgKGwgPT09IHVuZGVmaW5lZCAmJiBsYW5nQ29kZVsyXSA9PT0gXCItXCIpIHtcclxuICAgICAgICAgICAgICAgIC8vIExhbmd1YWdlIGhhcyBhIGxvY2FsZSAnLScgc2VwYXJhdG9yLCByZW1vdmUgaXQgYW5kIHRyeSBhZ2FpblxyXG4gICAgICAgICAgICAgICAgbGFuZ0NvZGUgPSBsYW5nQ29kZS5zdWJzdHJpbmcoMCwgMik7XHJcbiAgICAgICAgICAgICAgICBsID0gbG9jYWxpemF0aW9uc1tsYW5nQ29kZV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGwgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRnJpZW5kbHlDYXB0Y2hhOiBsYW5ndWFnZSBcIicgKyB0aGlzLm9wdHMubGFuZ3VhZ2UgKyAnXCIgbm90IGZvdW5kLicpO1xyXG4gICAgICAgICAgICAgICAgLy8gRmFsbCBiYWNrIHRvIEVuZ2xpc2hcclxuICAgICAgICAgICAgICAgIGwgPSBsb2NhbGl6YXRpb25zLmVuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubGFuZyA9IGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBXZSBhc3NpZ24gdG8gYSBjb3B5IG9mIHRoZSBFbmdsaXNoIGxhbmd1YWdlIGxvY2FsaXphdGlvbiwgc28gdGhhdCBhbnkgbWlzc2luZyB2YWx1ZXMgd2lsbCBiZSBFbmdsaXNoXHJcbiAgICAgICAgICAgIHRoaXMubGFuZyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgbG9jYWxpemF0aW9ucy5lbiksIHRoaXMub3B0cy5sYW5ndWFnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgYSBsaXN0ZW5lciB0byB0aGUgYnV0dG9uIHRoYXQgY2FsbHMgYHRoaXMuc3RhcnRgIG9uIGNsaWNrLlxyXG4gICAgICovXHJcbiAgICBtYWtlQnV0dG9uU3RhcnQoKSB7XHJcbiAgICAgICAgY29uc3QgYiA9IHRoaXMuZS5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGlmIChiKSB7XHJcbiAgICAgICAgICAgIGIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB0aGlzLnN0YXJ0KCksIHsgb25jZTogdHJ1ZSwgcGFzc2l2ZTogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgYi5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCAoZSkgPT4gdGhpcy5zdGFydCgpLCB7IG9uY2U6IHRydWUsIHBhc3NpdmU6IHRydWUgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgb25Xb3JrZXJFcnJvcihlKSB7XHJcbiAgICAgICAgdGhpcy5oYXNCZWVuU3RhcnRlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubmVlZHNSZUluaXQgPSB0cnVlO1xyXG4gICAgICAgIGlmICh0aGlzLmV4cGlyeVRpbWVvdXQpXHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmV4cGlyeVRpbWVvdXQpO1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJbRlJDXVwiLCBlKTtcclxuICAgICAgICB0aGlzLmUuaW5uZXJIVE1MID0gZ2V0RXJyb3JIVE1MKHRoaXMub3B0cy5zb2x1dGlvbkZpZWxkTmFtZSwgdGhpcy5sYW5nLCBcIkJhY2tncm91bmQgd29ya2VyIGVycm9yIFwiICsgZS5tZXNzYWdlKTtcclxuICAgICAgICB0aGlzLm1ha2VCdXR0b25TdGFydCgpO1xyXG4gICAgICAgIC8vIEp1c3Qgb3V0IG9mIHByZWNhdXRpb25cclxuICAgICAgICB0aGlzLm9wdHMuZm9yY2VKU0ZhbGxiYWNrID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGluaXRXb3JrZXJHcm91cCgpIHtcclxuICAgICAgICB0aGlzLndvcmtlckdyb3VwLnByb2dyZXNzQ2FsbGJhY2sgPSAocHJvZ3Jlc3MpID0+IHtcclxuICAgICAgICAgICAgdXBkYXRlUHJvZ3Jlc3NCYXIodGhpcy5lLCBwcm9ncmVzcyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLndvcmtlckdyb3VwLnJlYWR5Q2FsbGJhY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZS5pbm5lckhUTUwgPSBnZXRSZWFkeUhUTUwodGhpcy5vcHRzLnNvbHV0aW9uRmllbGROYW1lLCB0aGlzLmxhbmcpO1xyXG4gICAgICAgICAgICB0aGlzLm1ha2VCdXR0b25TdGFydCgpO1xyXG4gICAgICAgICAgICB0aGlzLm9wdHMucmVhZHlDYWxsYmFjaygpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy53b3JrZXJHcm91cC5zdGFydGVkQ2FsbGJhY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZS5pbm5lckhUTUwgPSBnZXRSdW5uaW5nSFRNTCh0aGlzLm9wdHMuc29sdXRpb25GaWVsZE5hbWUsIHRoaXMubGFuZyk7XHJcbiAgICAgICAgICAgIHRoaXMub3B0cy5zdGFydGVkQ2FsbGJhY2soKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMud29ya2VyR3JvdXAuZG9uZUNhbGxiYWNrID0gKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc29sdXRpb25QYXlsb2FkID0gdGhpcy5oYW5kbGVEb25lKGRhdGEpO1xyXG4gICAgICAgICAgICB0aGlzLm9wdHMuZG9uZUNhbGxiYWNrKHNvbHV0aW9uUGF5bG9hZCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrID0gdGhpcy5lLmRhdGFzZXRbXCJjYWxsYmFja1wiXTtcclxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3dbY2FsbGJhY2tdKHNvbHV0aW9uUGF5bG9hZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMud29ya2VyR3JvdXAuZXJyb3JDYWxsYmFjayA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub25Xb3JrZXJFcnJvcihlKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMud29ya2VyR3JvdXAuaW5pdCgpO1xyXG4gICAgICAgIHRoaXMud29ya2VyR3JvdXAuc2V0dXBTb2x2ZXIodGhpcy5vcHRzLmZvcmNlSlNGYWxsYmFjayk7XHJcbiAgICB9XHJcbiAgICBleHBpcmUoKSB7XHJcbiAgICAgICAgdGhpcy5oYXNCZWVuU3RhcnRlZCA9IGZhbHNlO1xyXG4gICAgICAgIC8vIE5vZGUuaXNDb25uZWN0ZWQgd2lsbCBiZSB1bmRlZmluZWQgaW4gb2xkZXIgYnJvd3NlcnNcclxuICAgICAgICBpZiAodGhpcy5lLmlzQ29ubmVjdGVkICE9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICB0aGlzLmUuaW5uZXJIVE1MID0gZ2V0RXhwaXJlZEhUTUwodGhpcy5vcHRzLnNvbHV0aW9uRmllbGROYW1lLCB0aGlzLmxhbmcpO1xyXG4gICAgICAgICAgICB0aGlzLm1ha2VCdXR0b25TdGFydCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFzeW5jIHN0YXJ0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmhhc0JlZW5EZXN0cm95ZWQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkNhbiBub3Qgc3RhcnQgRnJpZW5kbHlDYXB0Y2hhIHdpZGdldCB3aGljaCBoYXMgYmVlbiBkZXN0cm95ZWRcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaGFzQmVlblN0YXJ0ZWQpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiQ2FuIG5vdCBzdGFydCBGcmllbmRseUNhcHRjaGEgd2lkZ2V0IHdoaWNoIGhhcyBhbHJlYWR5IGJlZW4gc3RhcnRlZFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzaXRla2V5ID0gdGhpcy5vcHRzLnNpdGVrZXkgfHwgdGhpcy5lLmRhdGFzZXRbXCJzaXRla2V5XCJdO1xyXG4gICAgICAgIGlmICghc2l0ZWtleSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRnJpZW5kbHlDYXB0Y2hhOiBzaXRla2V5IG5vdCBzZXQgb24gZnJjLWNhcHRjaGEgZWxlbWVudFwiKTtcclxuICAgICAgICAgICAgdGhpcy5lLmlubmVySFRNTCA9IGdldEVycm9ySFRNTCh0aGlzLm9wdHMuc29sdXRpb25GaWVsZE5hbWUsIHRoaXMubGFuZywgXCJXZWJzaXRlIHByb2JsZW06IHNpdGVrZXkgbm90IHNldFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzSGVhZGxlc3MoKSkge1xyXG4gICAgICAgICAgICB0aGlzLmUuaW5uZXJIVE1MID0gZ2V0RXJyb3JIVE1MKHRoaXMub3B0cy5zb2x1dGlvbkZpZWxkTmFtZSwgdGhpcy5sYW5nLCBcIkJyb3dzZXIgY2hlY2sgZmFpbGVkLCB0cnkgYSBkaWZmZXJlbnQgYnJvd3NlclwiLCBmYWxzZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubmVlZHNSZUluaXQpIHtcclxuICAgICAgICAgICAgdGhpcy5uZWVkc1JlSW5pdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmluaXQodHJ1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5oYXNCZWVuU3RhcnRlZCA9IHRydWU7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdGhpcy5lLmlubmVySFRNTCA9IGdldEZldGNoaW5nSFRNTCh0aGlzLm9wdHMuc29sdXRpb25GaWVsZE5hbWUsIHRoaXMubGFuZyk7XHJcbiAgICAgICAgICAgIHRoaXMucHV6emxlID0gZGVjb2RlQmFzZTY0UHV6emxlKGF3YWl0IGdldFB1enpsZSh0aGlzLm9wdHMucHV6emxlRW5kcG9pbnQsIHNpdGVrZXksIHRoaXMubGFuZykpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5leHBpcnlUaW1lb3V0KVxyXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZXhwaXJ5VGltZW91dCk7XHJcbiAgICAgICAgICAgIHRoaXMuZXhwaXJ5VGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5leHBpcmUoKSwgdGhpcy5wdXp6bGUuZXhwaXJ5IC0gMzAwMDApOyAvLyAzMHMgZ3JhY2VcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIltGUkNdXCIsIGUpO1xyXG4gICAgICAgICAgICB0aGlzLmhhc0JlZW5TdGFydGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmV4cGlyeVRpbWVvdXQpXHJcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5leHBpcnlUaW1lb3V0KTtcclxuICAgICAgICAgICAgdGhpcy5lLmlubmVySFRNTCA9IGdldEVycm9ySFRNTCh0aGlzLm9wdHMuc29sdXRpb25GaWVsZE5hbWUsIHRoaXMubGFuZywgZS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgdGhpcy5tYWtlQnV0dG9uU3RhcnQoKTtcclxuICAgICAgICAgICAgY29uc3QgY29kZSA9IFwiZXJyb3JfZ2V0dGluZ19wdXp6bGVcIjtcclxuICAgICAgICAgICAgdGhpcy5vcHRzLmVycm9yQ2FsbGJhY2soeyBjb2RlLCBkZXNjcmlwdGlvbjogZS50b1N0cmluZygpLCBlcnJvcjogZSB9KTtcclxuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSB0aGlzLmUuZGF0YXNldFtcImNhbGxiYWNrLWVycm9yXCJdO1xyXG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvd1tjYWxsYmFja10odGhpcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhd2FpdCB0aGlzLndvcmtlckdyb3VwLnN0YXJ0KHRoaXMucHV6emxlKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBpcyB0byBiZSBjYWxsZWQgd2hlbiB0aGUgcHV6emxlIGhhcyBiZWVuIHN1Y2Nlc2Z1bGx5IGNvbXBsZXRlZC5cclxuICAgICAqIEhlcmUgdGhlIGhpZGRlbiBmaWVsZCBnZXRzIHVwZGF0ZWQgd2l0aCB0aGUgc29sdXRpb24uXHJcbiAgICAgKiBAcGFyYW0gZGF0YSBtZXNzYWdlIGZyb20gdGhlIHdlYndvcmtlclxyXG4gICAgICovXHJcbiAgICBoYW5kbGVEb25lKGRhdGEpIHtcclxuICAgICAgICB0aGlzLnZhbGlkID0gdHJ1ZTtcclxuICAgICAgICBjb25zdCBwdXp6bGVTb2x1dGlvbk1lc3NhZ2UgPSBgJHt0aGlzLnB1enpsZS5zaWduYXR1cmV9LiR7dGhpcy5wdXp6bGUuYmFzZTY0fS4ke2VuY29kZShkYXRhLnNvbHV0aW9uKX0uJHtlbmNvZGUoZGF0YS5kaWFnbm9zdGljcyl9YDtcclxuICAgICAgICB0aGlzLmUuaW5uZXJIVE1MID0gZ2V0RG9uZUhUTUwodGhpcy5vcHRzLnNvbHV0aW9uRmllbGROYW1lLCB0aGlzLmxhbmcsIHB1enpsZVNvbHV0aW9uTWVzc2FnZSwgZGF0YSk7XHJcbiAgICAgICAgLy8gdGhpcy53b3JrZXIgPSBudWxsOyAvLyBUaGlzIGxpdGVyYWxseSBjcmFzaGVzIHZlcnkgb2xkIGJyb3dzZXJzLi5cclxuICAgICAgICB0aGlzLm5lZWRzUmVJbml0ID0gdHJ1ZTtcclxuICAgICAgICByZXR1cm4gcHV6emxlU29sdXRpb25NZXNzYWdlO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDbGVhbnMgdXAgdGhlIHdpZGdldCBlbnRpcmVseSwgcmVtb3ZpbmcgYW55IERPTSBlbGVtZW50cyBhbmQgdGVybWluYXRpbmcgYW55IGJhY2tncm91bmQgd29ya2Vycy5cclxuICAgICAqIEFmdGVyIGl0IGlzIGRlc3Ryb3llZCBpdCBjYW4gbm8gbG9uZ2VyIGJlIHVzZWQgZm9yIGFueSBwdXJwb3NlLlxyXG4gICAgICovXHJcbiAgICBkZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMud29ya2VyR3JvdXAudGVybWluYXRlV29ya2VycygpO1xyXG4gICAgICAgIHRoaXMubmVlZHNSZUluaXQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmhhc0JlZW5TdGFydGVkID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHRoaXMuZXhwaXJ5VGltZW91dClcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZXhwaXJ5VGltZW91dCk7XHJcbiAgICAgICAgaWYgKHRoaXMuZSkge1xyXG4gICAgICAgICAgICB0aGlzLmUucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWlnbm9yZVxyXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaGFzQmVlbkRlc3Ryb3llZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFJlc2V0cyB0aGUgd2lkZ2V0IHRvIHRoZSBpbml0aWFsIHN0YXRlLlxyXG4gICAgICogVGhpcyBpcyB1c2VmdWwgaW4gc2l0dWF0aW9ucyB3aGVyZSB0aGUgcGFnZSBkb2VzIG5vdCByZWZyZXNoIHdoZW4geW91IHN1Ym1pdCBhbmQgdGhlIGZvcm0gbWF5IGJlIHJlLXN1Ym1pdHRlZCBhZ2FpblxyXG4gICAgICovXHJcbiAgICByZXNldCgpIHtcclxuICAgICAgICBpZiAodGhpcy5oYXNCZWVuRGVzdHJveWVkKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGcmllbmRseUNhcHRjaGEgd2lkZ2V0IGhhcyBiZWVuIGRlc3Ryb3llZCwgaXQgY2FuIG5vdCBiZSB1c2VkIGFueW1vcmVcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy53b3JrZXJHcm91cC50ZXJtaW5hdGVXb3JrZXJzKCk7XHJcbiAgICAgICAgdGhpcy5uZWVkc1JlSW5pdCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaGFzQmVlblN0YXJ0ZWQgPSBmYWxzZTtcclxuICAgICAgICBpZiAodGhpcy5leHBpcnlUaW1lb3V0KVxyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5leHBpcnlUaW1lb3V0KTtcclxuICAgICAgICB0aGlzLmluaXQodGhpcy5vcHRzLnN0YXJ0TW9kZSA9PT0gXCJhdXRvXCIgfHwgdGhpcy5lLmRhdGFzZXRbXCJzdGFydFwiXSA9PT0gXCJhdXRvXCIpO1xyXG4gICAgfVxyXG59XG5cbmV4cG9ydCB7IFdpZGdldEluc3RhbmNlLCBsb2NhbGl6YXRpb25zIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0aWYgKCEobW9kdWxlSWQgaW4gX193ZWJwYWNrX21vZHVsZXNfXykpIHtcblx0XHRkZWxldGUgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyBtb2R1bGVJZCArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgb2JzZXJ2YWJsZUhhbmRsZSBmcm9tICcuL29ic2VydmFibGVIYW5kbGUnO1xuXG5jb25zdCB7IGFkZEFjdGlvbiB9ID0gSmV0UGx1Z2lucy5ob29rcztcblxuYWRkQWN0aW9uKFxuXHQnamV0LmZiLm9ic2VydmUuYWZ0ZXInLFxuXHQnamV0LWZvcm0tYnVpbGRlci9mcmllbmRseS5jYXB0Y2hhJyxcblx0b2JzZXJ2YWJsZUhhbmRsZSxcbik7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
