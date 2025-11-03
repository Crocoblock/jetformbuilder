/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
            const response = await fetchAndRetryWithBackoff(urls[i] + "?sitekey=" + siteKey, { headers: [["x-frc-client", "js-0.9.18"]], mode: "cors" }, 2);
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


/***/ }),

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJpZW5kbHkuY2FwdGNoYS9mcm9udGVuZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNydUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FDdERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNOQTtBQUVBO0FBQUE7QUFBQTtBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamZiLWNhcHRjaGEvLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZyaWVuZGx5LWNoYWxsZW5nZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9qZmItY2FwdGNoYS8uL2ZyaWVuZGx5LmNhcHRjaGEvZnJvbnRlbmQvb2JzZXJ2YWJsZUhhbmRsZS5qcyIsIndlYnBhY2s6Ly9qZmItY2FwdGNoYS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qZmItY2FwdGNoYS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamZiLWNhcHRjaGEvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qZmItY2FwdGNoYS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pmYi1jYXB0Y2hhLy4vZnJpZW5kbHkuY2FwdGNoYS9mcm9udGVuZC9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEFkYXB0ZWQgZnJvbSB0aGUgYmFzZTY0LWFycmF5YnVmZmVyIHBhY2thZ2UgaW1wbGVtZW50YXRpb25cbi8vIChodHRwczovL2dpdGh1Yi5jb20vbmlrbGFzdmgvYmFzZTY0LWFycmF5YnVmZmVyLCBNSVQgbGljZW5zZWQpXG5jb25zdCBDSEFSUyA9IFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrL1wiO1xuY29uc3QgRVFfQ0hBUiA9IFwiPVwiLmNoYXJDb2RlQXQoMCk7XG4vLyBVc2UgYSBsb29rdXAgdGFibGUgdG8gZmluZCB0aGUgaW5kZXguXG5jb25zdCBsb29rdXAgPSBuZXcgVWludDhBcnJheSgyNTYpO1xuZm9yIChsZXQgaSA9IDA7IGkgPCBDSEFSUy5sZW5ndGg7IGkrKykge1xuICAgIGxvb2t1cFtDSEFSUy5jaGFyQ29kZUF0KGkpXSA9IGk7XG59XG5mdW5jdGlvbiBlbmNvZGUoYnl0ZXMpIHtcbiAgICBjb25zdCBsZW4gPSBieXRlcy5sZW5ndGg7XG4gICAgbGV0IGJhc2U2NCA9IFwiXCI7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkgKz0gMykge1xuICAgICAgICBjb25zdCBiMCA9IGJ5dGVzW2kgKyAwXTtcbiAgICAgICAgY29uc3QgYjEgPSBieXRlc1tpICsgMV07XG4gICAgICAgIGNvbnN0IGIyID0gYnl0ZXNbaSArIDJdO1xuICAgICAgICAvLyBUaGlzIHRlbXBvcmFyeSB2YXJpYWJsZSBzdG9wcyB0aGUgTmV4dEpTIDEzIGNvbXBpbGVyIGZyb20gYnJlYWtpbmcgdGhpcyBjb2RlIGluIG9wdGltaXphdGlvbi5cbiAgICAgICAgLy8gU2VlIGlzc3VlIGh0dHBzOi8vZ2l0aHViLmNvbS9GcmllbmRseUNhcHRjaGEvZnJpZW5kbHktY2hhbGxlbmdlL2lzc3Vlcy8xNjVcbiAgICAgICAgbGV0IHQgPSBcIlwiO1xuICAgICAgICB0ICs9IENIQVJTLmNoYXJBdChiMCA+Pj4gMik7XG4gICAgICAgIHQgKz0gQ0hBUlMuY2hhckF0KCgoYjAgJiAzKSA8PCA0KSB8IChiMSA+Pj4gNCkpO1xuICAgICAgICB0ICs9IENIQVJTLmNoYXJBdCgoKGIxICYgMTUpIDw8IDIpIHwgKGIyID4+PiA2KSk7XG4gICAgICAgIHQgKz0gQ0hBUlMuY2hhckF0KGIyICYgNjMpO1xuICAgICAgICBiYXNlNjQgKz0gdDtcbiAgICB9XG4gICAgaWYgKGxlbiAlIDMgPT09IDIpIHtcbiAgICAgICAgYmFzZTY0ID0gYmFzZTY0LnN1YnN0cmluZygwLCBiYXNlNjQubGVuZ3RoIC0gMSkgKyBcIj1cIjtcbiAgICB9XG4gICAgZWxzZSBpZiAobGVuICUgMyA9PT0gMSkge1xuICAgICAgICBiYXNlNjQgPSBiYXNlNjQuc3Vic3RyaW5nKDAsIGJhc2U2NC5sZW5ndGggLSAyKSArIFwiPT1cIjtcbiAgICB9XG4gICAgcmV0dXJuIGJhc2U2NDtcbn1cbmZ1bmN0aW9uIGRlY29kZShiYXNlNjQpIHtcbiAgICBjb25zdCBsZW4gPSBiYXNlNjQubGVuZ3RoO1xuICAgIGxldCBidWZmZXJMZW5ndGggPSAobGVuICogMykgPj4+IDI7IC8vICogMC43NVxuICAgIGlmIChiYXNlNjQuY2hhckNvZGVBdChsZW4gLSAxKSA9PT0gRVFfQ0hBUilcbiAgICAgICAgYnVmZmVyTGVuZ3RoLS07XG4gICAgaWYgKGJhc2U2NC5jaGFyQ29kZUF0KGxlbiAtIDIpID09PSBFUV9DSEFSKVxuICAgICAgICBidWZmZXJMZW5ndGgtLTtcbiAgICBjb25zdCBieXRlcyA9IG5ldyBVaW50OEFycmF5KGJ1ZmZlckxlbmd0aCk7XG4gICAgZm9yIChsZXQgaSA9IDAsIHAgPSAwOyBpIDwgbGVuOyBpICs9IDQpIHtcbiAgICAgICAgY29uc3QgZW5jb2RlZDEgPSBsb29rdXBbYmFzZTY0LmNoYXJDb2RlQXQoaSArIDApXTtcbiAgICAgICAgY29uc3QgZW5jb2RlZDIgPSBsb29rdXBbYmFzZTY0LmNoYXJDb2RlQXQoaSArIDEpXTtcbiAgICAgICAgY29uc3QgZW5jb2RlZDMgPSBsb29rdXBbYmFzZTY0LmNoYXJDb2RlQXQoaSArIDIpXTtcbiAgICAgICAgY29uc3QgZW5jb2RlZDQgPSBsb29rdXBbYmFzZTY0LmNoYXJDb2RlQXQoaSArIDMpXTtcbiAgICAgICAgYnl0ZXNbcCsrXSA9IChlbmNvZGVkMSA8PCAyKSB8IChlbmNvZGVkMiA+PiA0KTtcbiAgICAgICAgYnl0ZXNbcCsrXSA9ICgoZW5jb2RlZDIgJiAxNSkgPDwgNCkgfCAoZW5jb2RlZDMgPj4gMik7XG4gICAgICAgIGJ5dGVzW3ArK10gPSAoKGVuY29kZWQzICYgMykgPDwgNikgfCAoZW5jb2RlZDQgJiA2Myk7XG4gICAgfVxuICAgIHJldHVybiBieXRlcztcbn1cblxudmFyIGNzcyA9ICcuZnJjLWNhcHRjaGEgKnttYXJnaW46MDtwYWRkaW5nOjA7Ym9yZGVyOjA7dGV4dC1hbGlnbjppbml0aWFsO2JvcmRlci1yYWRpdXM6MDtmaWx0ZXI6bm9uZSFpbXBvcnRhbnQ7dHJhbnNpdGlvbjpub25lIWltcG9ydGFudDtmb250LXdlaWdodDo0MDA7Zm9udC1zaXplOjE0cHg7bGluZS1oZWlnaHQ6MS4yO3RleHQtZGVjb3JhdGlvbjpub25lO2JhY2tncm91bmQtY29sb3I6aW5pdGlhbDtjb2xvcjojMjIyfS5mcmMtY2FwdGNoYXtwb3NpdGlvbjpyZWxhdGl2ZTttaW4td2lkdGg6MjUwcHg7bWF4LXdpZHRoOjMxMnB4O2JvcmRlcjoxcHggc29saWQgI2Y0ZjRmNDtwYWRkaW5nLWJvdHRvbToxMnB4O2JhY2tncm91bmQtY29sb3I6I2ZmZn0uZnJjLWNhcHRjaGEgYntmb250LXdlaWdodDo3MDB9LmZyYy1jb250YWluZXJ7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjttaW4taGVpZ2h0OjUycHh9LmZyYy1pY29ue2ZpbGw6IzIyMjtzdHJva2U6IzIyMjtmbGV4LXNocmluazowO21hcmdpbjo4cHggOHB4IDB9LmZyYy1pY29uLmZyYy13YXJuaW5ne2ZpbGw6I2MwMH0uZnJjLXN1Y2Nlc3MgLmZyYy1pY29ue2FuaW1hdGlvbjoxcyBlYXNlLWluIGJvdGggZnJjLWZhZGUtaW59LmZyYy1jb250ZW50e3doaXRlLXNwYWNlOm5vd3JhcDtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO21hcmdpbjo0cHggNnB4IDAgMDtvdmVyZmxvdy14OmF1dG87ZmxleC1ncm93OjF9LmZyYy1iYW5uZXJ7cG9zaXRpb246YWJzb2x1dGU7Ym90dG9tOjA7cmlnaHQ6NnB4O2xpbmUtaGVpZ2h0OjF9LmZyYy1iYW5uZXIgKntmb250LXNpemU6MTBweDtvcGFjaXR5Oi44O3RleHQtZGVjb3JhdGlvbjpub25lfS5mcmMtcHJvZ3Jlc3N7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7LW1vei1hcHBlYXJhbmNlOm5vbmU7YXBwZWFyYW5jZTpub25lO21hcmdpbjozcHggMDtoZWlnaHQ6NHB4O2JvcmRlcjpub25lO2JhY2tncm91bmQtY29sb3I6I2VlZTtjb2xvcjojMjIyO3dpZHRoOjEwMCU7dHJhbnNpdGlvbjouNXMgbGluZWFyfS5mcmMtcHJvZ3Jlc3M6Oi13ZWJraXQtcHJvZ3Jlc3MtYmFye2JhY2tncm91bmQ6I2VlZX0uZnJjLXByb2dyZXNzOjotd2Via2l0LXByb2dyZXNzLXZhbHVle2JhY2tncm91bmQ6IzIyMn0uZnJjLXByb2dyZXNzOjotbW96LXByb2dyZXNzLWJhcntiYWNrZ3JvdW5kOiMyMjJ9LmZyYy1idXR0b257Y3Vyc29yOnBvaW50ZXI7cGFkZGluZzoycHggNnB4O2JhY2tncm91bmQtY29sb3I6I2YxZjFmMTtib3JkZXI6MXB4IHNvbGlkIHRyYW5zcGFyZW50O3RleHQtYWxpZ246Y2VudGVyO2ZvbnQtd2VpZ2h0OjYwMDt0ZXh0LXRyYW5zZm9ybTpub25lfS5mcmMtYnV0dG9uOmZvY3Vze2JvcmRlcjoxcHggc29saWQgIzMzM30uZnJjLWJ1dHRvbjpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNkZGR9LmZyYy1jYXB0Y2hhLXNvbHV0aW9ue2Rpc3BsYXk6bm9uZX0uZnJjLWVyci11cmx7dGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZTtmb250LXNpemU6LjllbX0uZnJjLXJ0bHtkaXJlY3Rpb246cnRsfS5mcmMtcnRsIC5mcmMtY29udGVudHttYXJnaW46NHB4IDAgMCA2cHh9LmZyYy1iYW5uZXIuZnJjLXJ0bHtsZWZ0OjZweDtyaWdodDphdXRvfS5kYXJrLmZyYy1jYXB0Y2hhe2NvbG9yOiNmZmY7YmFja2dyb3VuZC1jb2xvcjojMjIyO2JvcmRlci1jb2xvcjojMzMzfS5kYXJrLmZyYy1jYXB0Y2hhICp7Y29sb3I6I2ZmZn0uZGFyay5mcmMtY2FwdGNoYSBidXR0b257YmFja2dyb3VuZC1jb2xvcjojNDQ0fS5kYXJrIC5mcmMtaWNvbntmaWxsOiNmZmY7c3Ryb2tlOiNmZmZ9LmRhcmsgLmZyYy1wcm9ncmVzc3tiYWNrZ3JvdW5kLWNvbG9yOiM0NDR9LmRhcmsgLmZyYy1wcm9ncmVzczo6LXdlYmtpdC1wcm9ncmVzcy1iYXJ7YmFja2dyb3VuZDojNDQ0fS5kYXJrIC5mcmMtcHJvZ3Jlc3M6Oi13ZWJraXQtcHJvZ3Jlc3MtdmFsdWV7YmFja2dyb3VuZDojZGRkfS5kYXJrIC5mcmMtcHJvZ3Jlc3M6Oi1tb3otcHJvZ3Jlc3MtYmFye2JhY2tncm91bmQ6I2RkZH1Aa2V5ZnJhbWVzIGZyYy1mYWRlLWlue2Zyb217b3BhY2l0eTowfXRve29wYWNpdHk6MX19JztcblxuLy8gVGhpcyBpcyBub3QgYW4gZW51bSB0byBzYXZlIHNvbWUgYnl0ZXMgaW4gdGhlIG91dHB1dCBidW5kbGUuXG5jb25zdCBTT0xWRVJfVFlQRV9KUyA9IDE7XG5jb25zdCBDSEFMTEVOR0VfU0laRV9CWVRFUyA9IDEyODtcblxuLy8gQHRzLWlnbm9yZVxyXG5jb25zdCBsb2FkZXJTVkcgPSBgPGNpcmNsZSBjeD1cIjEyXCIgY3k9XCIxMlwiIHI9XCI4XCIgc3Ryb2tlLXdpZHRoPVwiM1wiIHN0cm9rZS1kYXNoYXJyYXk9XCIxNSAxMFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHRyYW5zZm9ybT1cInJvdGF0ZSgwIDEyIDEyKVwiPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9XCJ0cmFuc2Zvcm1cIiB0eXBlPVwicm90YXRlXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCIgZHVyPVwiMC45c1wiIHZhbHVlcz1cIjAgMTIgMTI7MzYwIDEyIDEyXCIvPjwvY2lyY2xlPmA7XHJcbmNvbnN0IGVycm9yU1ZHID0gYDxwYXRoIGQ9XCJNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptMSAxNWgtMnYtMmgydjJ6bTAtNGgtMlY3aDJ2NnpcIi8+YDtcclxuLyoqXHJcbiAqIEJhc2UgdGVtcGxhdGUgdXNlZCBmb3IgYWxsIHdpZGdldCBzdGF0ZXNcclxuICogVGhlIHJlYXNvbiB3ZSB1c2UgcmF3IHN0cmluZyBpbnRlcnBvbGF0aW9uIGhlcmUgaXMgc28gd2UgZG9uJ3QgaGF2ZSB0byBzaGlwIHNvbWV0aGluZyBsaWtlIGxpdC1odG1sLlxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0VGVtcGxhdGUoZmllbGROYW1lLCBydGwsIHN2Z0NvbnRlbnQsIHN2Z0FyaWFIaWRkZW4sIHRleHRDb250ZW50LCBzb2x1dGlvblN0cmluZywgYnV0dG9uVGV4dCwgcHJvZ3Jlc3MgPSBmYWxzZSwgZGVidWdEYXRhLCBhZGRpdGlvbmFsQ29udGFpbmVyQ2xhc3Nlcykge1xyXG4gICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiZnJjLWNvbnRhaW5lciR7YWRkaXRpb25hbENvbnRhaW5lckNsYXNzZXMgPyBcIiBcIiArIGFkZGl0aW9uYWxDb250YWluZXJDbGFzc2VzIDogXCJcIn0ke3J0bCA/IFwiIGZyYy1ydGxcIiA6IFwiXCJ9XCI+XG48c3ZnIGNsYXNzPVwiZnJjLWljb25cIiR7c3ZnQXJpYUhpZGRlbiA/ICcgYXJpYS1oaWRkZW49XCJ0cnVlXCInIDogXCJcIn0gcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBoZWlnaHQ9XCIzMlwiIHdpZHRoPVwiMzJcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+JHtzdmdDb250ZW50fTwvc3ZnPlxuPGRpdiBjbGFzcz1cImZyYy1jb250ZW50XCI+XG4gICAgPHNwYW4gY2xhc3M9XCJmcmMtdGV4dFwiICR7ZGVidWdEYXRhID8gYGRhdGEtZGVidWc9XCIke2RlYnVnRGF0YX1cImAgOiBgYH0+JHt0ZXh0Q29udGVudH08L3NwYW4+XG4gICAgJHtidXR0b25UZXh0ID8gYDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiZnJjLWJ1dHRvblwiPiR7YnV0dG9uVGV4dH08L2J1dHRvbj5gIDogXCJcIn1cbiAgICAke3Byb2dyZXNzID8gYDxwcm9ncmVzcyBjbGFzcz1cImZyYy1wcm9ncmVzc1wiIHZhbHVlPVwiMFwiPjAlPC9wcm9ncmVzcz5gIDogXCJcIn1cbjwvZGl2PlxuPC9kaXY+PHNwYW4gY2xhc3M9XCJmcmMtYmFubmVyJHtydGwgPyBcIiBmcmMtcnRsXCIgOiBcIlwifVwiPjxhIGxhbmc9XCJlblwiIGhyZWY9XCJodHRwczovL2ZyaWVuZGx5Y2FwdGNoYS5jb20vXCIgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIj48Yj5GcmllbmRseTwvYj5DYXB0Y2hhIOKHlzwvYT48L3NwYW4+XG4ke2ZpZWxkTmFtZSA9PT0gXCItXCIgPyBcIlwiIDogYDxpbnB1dCBuYW1lPVwiJHtmaWVsZE5hbWV9XCIgY2xhc3M9XCJmcmMtY2FwdGNoYS1zb2x1dGlvblwiIHR5cGU9XCJoaWRkZW5cIiB2YWx1ZT1cIiR7c29sdXRpb25TdHJpbmd9XCI+YH1gO1xyXG59XHJcbi8qKlxyXG4gKiBVc2VkIHdoZW4gdGhlIHdpZGdldCBpcyByZWFkeSB0byBzdGFydCBzb2x2aW5nLlxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0UmVhZHlIVE1MKGZpZWxkTmFtZSwgbCkge1xyXG4gICAgcmV0dXJuIGdldFRlbXBsYXRlKGZpZWxkTmFtZSwgbC5ydGwsIGA8cGF0aCBkPVwiTTE3LDExYzAuMzQsMCwwLjY3LDAuMDQsMSwwLjA5VjYuMjdMMTAuNSwzTDMsNi4yN3Y0LjkxYzAsNC41NCwzLjIsOC43OSw3LjUsOS44MmMwLjU1LTAuMTMsMS4wOC0wLjMyLDEuNi0wLjU1IEMxMS40MSwxOS40NywxMSwxOC4yOCwxMSwxN0MxMSwxMy42OSwxMy42OSwxMSwxNywxMXpcIi8+PHBhdGggZD1cIk0xNywxM2MtMi4yMSwwLTQsMS43OS00LDRjMCwyLjIxLDEuNzksNCw0LDRzNC0xLjc5LDQtNEMyMSwxNC43OSwxOS4yMSwxMywxNywxM3ogTTE3LDE0LjM4XCIvPmAsIHRydWUsIGwudGV4dF9yZWFkeSwgXCIuVU5TVEFSVEVEXCIsIGwuYnV0dG9uX3N0YXJ0LCBmYWxzZSk7XHJcbn1cclxuLyoqXHJcbiAqIFVzZWQgd2hlbiB0aGUgd2lkZ2V0IGlzIHJldHJpZXZpbmcgYSBwdXp6bGVcclxuICovXHJcbmZ1bmN0aW9uIGdldEZldGNoaW5nSFRNTChmaWVsZE5hbWUsIGwpIHtcclxuICAgIHJldHVybiBnZXRUZW1wbGF0ZShmaWVsZE5hbWUsIGwucnRsLCBsb2FkZXJTVkcsIHRydWUsIGwudGV4dF9mZXRjaGluZywgXCIuRkVUQ0hJTkdcIiwgdW5kZWZpbmVkLCB0cnVlKTtcclxufVxyXG4vKipcclxuICogVXNlZCB3aGVuIHRoZSBzb2x2ZXIgaXMgcnVubmluZywgZGlzcGxheXMgYSBwcm9ncmVzcyBiYXIuXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRSdW5uaW5nSFRNTChmaWVsZE5hbWUsIGwpIHtcclxuICAgIHJldHVybiBnZXRUZW1wbGF0ZShmaWVsZE5hbWUsIGwucnRsLCBsb2FkZXJTVkcsIHRydWUsIGwudGV4dF9zb2x2aW5nLCBcIi5VTkZJTklTSEVEXCIsIHVuZGVmaW5lZCwgdHJ1ZSk7XHJcbn1cclxuZnVuY3Rpb24gZ2V0RG9uZUhUTUwoZmllbGROYW1lLCBsLCBzb2x1dGlvbiwgZGF0YSkge1xyXG4gICAgY29uc3QgdGltZURhdGEgPSBgJHtkYXRhLnQudG9GaXhlZCgwKX1zICgkeygoZGF0YS5oIC8gZGF0YS50KSAqIDAuMDAxKS50b0ZpeGVkKDApfUsvcykke2RhdGEuc29sdmVyID09PSBTT0xWRVJfVFlQRV9KUyA/IFwiIEpTIEZhbGxiYWNrXCIgOiBcIlwifWA7XHJcbiAgICByZXR1cm4gZ2V0VGVtcGxhdGUoZmllbGROYW1lLCBsLnJ0bCwgYDx0aXRsZT4ke2wudGV4dF9jb21wbGV0ZWRfc3J9PC90aXRsZT48cGF0aCBkPVwiTTEyIDFMMyA1djZjMCA1LjU1IDMuODQgMTAuNzQgOSAxMiA1LjE2LTEuMjYgOS02LjQ1IDktMTJWNWwtOS00em0tMiAxNmwtNC00IDEuNDEtMS40MUwxMCAxNC4xN2w2LjU5LTYuNTlMMTggOWwtOCA4elwiPjwvcGF0aD5gLCBmYWxzZSwgbC50ZXh0X2NvbXBsZXRlZCwgc29sdXRpb24sIHVuZGVmaW5lZCwgZmFsc2UsIHRpbWVEYXRhLCBcImZyYy1zdWNjZXNzXCIpO1xyXG59XHJcbmZ1bmN0aW9uIGdldEV4cGlyZWRIVE1MKGZpZWxkTmFtZSwgbCkge1xyXG4gICAgcmV0dXJuIGdldFRlbXBsYXRlKGZpZWxkTmFtZSwgbC5ydGwsIGVycm9yU1ZHLCB0cnVlLCBsLnRleHRfZXhwaXJlZCwgXCIuRVhQSVJFRFwiLCBsLmJ1dHRvbl9yZXN0YXJ0KTtcclxufVxyXG5mdW5jdGlvbiBnZXRFcnJvckhUTUwoZmllbGROYW1lLCBsLCBlcnJvckRlc2NyaXB0aW9uLCByZWNvdmVyYWJsZSA9IHRydWUsIGhlYWRsZXNzID0gZmFsc2UpIHtcclxuICAgIHJldHVybiBnZXRUZW1wbGF0ZShmaWVsZE5hbWUsIGwucnRsLCBlcnJvclNWRywgdHJ1ZSwgYDxiPiR7bC50ZXh0X2Vycm9yfTwvYj48YnI+JHtlcnJvckRlc2NyaXB0aW9ufWAsIGhlYWRsZXNzID8gXCIuSEVBRExFU1NfRVJST1JcIiA6IFwiLkVSUk9SXCIsIHJlY292ZXJhYmxlID8gbC5idXR0b25fcmV0cnkgOiB1bmRlZmluZWQpO1xyXG59XHJcbi8qKlxyXG4gKiBJbmplY3RzIHRoZSBzdHlsZSBpZiBubyAjZnJjLXN0eWxlIGVsZW1lbnQgaXMgYWxyZWFkeSBwcmVzZW50XHJcbiAqICh0byBzdXBwb3J0IGN1c3RvbSBzdHlsZXNoZWV0cylcclxuICovXHJcbmZ1bmN0aW9uIGluamVjdFN0eWxlKHN0eWxlTm9uY2UgPSBudWxsKSB7XHJcbiAgICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZnJjLXN0eWxlXCIpKSB7XHJcbiAgICAgICAgY29uc3Qgc3R5bGVTaGVldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcclxuICAgICAgICBzdHlsZVNoZWV0LmlkID0gXCJmcmMtc3R5bGVcIjtcclxuICAgICAgICBzdHlsZVNoZWV0LmlubmVySFRNTCA9IGNzcztcclxuICAgICAgICBpZiAoc3R5bGVOb25jZSkge1xyXG4gICAgICAgICAgICBzdHlsZVNoZWV0LnNldEF0dHJpYnV0ZSgnbm9uY2UnLCBzdHlsZU5vbmNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZVNoZWV0KTtcclxuICAgIH1cclxufVxyXG4vKipcclxuICogQHBhcmFtIGVsZW1lbnQgcGFyZW50IGVsZW1lbnQgb2YgZnJpZW5kbHljYXB0Y2hhXHJcbiAqIEBwYXJhbSBwcm9ncmVzcyB2YWx1ZSBiZXR3ZWVuIDAgYW5kIDFcclxuICovXHJcbmZ1bmN0aW9uIHVwZGF0ZVByb2dyZXNzQmFyKGVsZW1lbnQsIGRhdGEpIHtcclxuICAgIGNvbnN0IHAgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZnJjLXByb2dyZXNzXCIpO1xyXG4gICAgY29uc3QgcGVyYyA9IChkYXRhLmkgKyAxKSAvIGRhdGEubjtcclxuICAgIGlmIChwKSB7XHJcbiAgICAgICAgcC52YWx1ZSA9IHBlcmM7XHJcbiAgICAgICAgcC5pbm5lclRleHQgPSAocGVyYyAqIDEwMCkudG9GaXhlZCgxKSArIFwiJVwiO1xyXG4gICAgICAgIHAudGl0bGUgPSBkYXRhLmkgKyAxICsgXCIvXCIgKyBkYXRhLm4gKyBcIiAoXCIgKyAoKGRhdGEuaCAvIGRhdGEudCkgKiAwLjAwMSkudG9GaXhlZCgwKSArIFwiSy9zKVwiO1xyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiBUcmF2ZXJzZXMgcGFyZW50IG5vZGVzIHVudGlsIGEgPGZvcm0+IGlzIGZvdW5kLCByZXR1cm5zIG51bGwgaWYgbm90IGZvdW5kLlxyXG4gKi9cclxuZnVuY3Rpb24gZmluZFBhcmVudEZvcm1FbGVtZW50KGVsZW1lbnQpIHtcclxuICAgIHdoaWxlIChlbGVtZW50LnRhZ05hbWUgIT09IFwiRk9STVwiKSB7XHJcbiAgICAgICAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxuLyoqXHJcbiAqIEFkZCBsaXN0ZW5lciB0byBzcGVjaWZpZWQgZWxlbWVudCB0aGF0IHdpbGwgb25seSBmaXJlIG9uY2Ugb24gZm9jdXMuXHJcbiAqL1xyXG5mdW5jdGlvbiBleGVjdXRlT25jZU9uRm9jdXNJbkV2ZW50KGVsZW1lbnQsIGxpc3RlbmVyKSB7XHJcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c2luXCIsIGxpc3RlbmVyLCB7IG9uY2U6IHRydWUsIHBhc3NpdmU6IHRydWUgfSk7XHJcbn1cblxuLy8gRGVmZW5zaXZlIGluaXQgdG8gbWFrZSBpdCBlYXNpZXIgdG8gaW50ZWdyYXRlIHdpdGggR2F0c2J5LCBOZXh0SlMsIGFuZCBmcmllbmRzLlxyXG5sZXQgbmF2O1xyXG5sZXQgdWE7XHJcbmlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiBuYXZpZ2F0b3IudXNlckFnZW50ID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICBuYXYgPSBuYXZpZ2F0b3I7XHJcbiAgICB1YSA9IG5hdi51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcclxufVxyXG4vKipcclxuICogSGVhZGxlc3MgYnJvd3NlciBkZXRlY3Rpb24gb24gdGhlIGNsaWVudHNpZGUgaXMgaW1wZXJmZWN0LiBPbmUgY2FuIG1vZGlmeSBhbnkgY2xpZW50c2lkZSBjb2RlIHRvIGRpc2FibGUgb3IgY2hhbmdlIHRoaXMgY2hlY2ssXHJcbiAqIGFuZCBvbmUgY2FuIHNwb29mIHdoYXRldmVyIGlzIGNoZWNrZWQgaGVyZS4gSG93ZXZlciwgdGhhdCBkb2Vzbid0IG1ha2UgaXQgd29ydGhsZXNzOiBpdCdzIHlldCBhbm90aGVyIGh1cmRsZSBmb3Igc3BhbW1lcnMgYW5kXHJcbiAqIGl0IHN0b3BzIHVuc29waGlzdGljYXRlZCBzY3JpcHRlcnMgZnJvbSBtYWtpbmcgYW55IHJlcXVlc3Qgd2hhdHNvZXZlci5cclxuICovXHJcbmZ1bmN0aW9uIGlzSGVhZGxlc3MoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgLy90ZWxsLXRhbGUgYm90IHNpZ25zXHJcbiAgICB1YS5pbmRleE9mKFwiaGVhZGxlc3NcIikgIT09IC0xIHx8XHJcbiAgICAgICAgbmF2LmFwcFZlcnNpb24uaW5kZXhPZihcIkhlYWRsZXNzXCIpICE9PSAtMSB8fFxyXG4gICAgICAgIHVhLmluZGV4T2YoXCJib3RcIikgIT09IC0xIHx8IC8vIGh0dHA6Ly93d3cudXNlcmFnZW50c3RyaW5nLmNvbS9wYWdlcy91c2VyYWdlbnRzdHJpbmcucGhwP3R5cD1Ccm93c2VyXHJcbiAgICAgICAgdWEuaW5kZXhPZihcImNyYXdsXCIpICE9PSAtMSB8fCAvLyBPbmx5IElFNSBoYXMgdHdvIGRpc3RyaWJ1dGlvbnMgdGhhdCBoYXMgdGhpcyBvbiB3aW5kb3dzIE5ULi4gc28geWVhaC5cclxuICAgICAgICBuYXYud2ViZHJpdmVyID09PSB0cnVlIHx8XHJcbiAgICAgICAgIW5hdi5sYW5ndWFnZSB8fFxyXG4gICAgICAgIChuYXYubGFuZ3VhZ2VzICE9PSB1bmRlZmluZWQgJiYgIW5hdi5sYW5ndWFnZXMubGVuZ3RoKSAvLyBJRSAxMSBkb2VzIG5vdCBzdXBwb3J0IE5hdmlnYXRvckxhbmd1YWdlLmxhbmd1YWdlcyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvTmF2aWdhdG9yTGFuZ3VhZ2UvbGFuZ3VhZ2VzXHJcbiAgICApO1xyXG59XG5cbi8qKlxuICogTWFwcyBhIHZhbHVlIGJldHdlZW4gMCBhbmQgMjU1IHRvIGEgZGlmZmljdWx0eSB0aHJlc2hvbGQgKGFzIHVpbnQzMilcbiAqIERpZmZpY3VsdHkgMCBtYXBzIHRvIDk5Ljk5JSBwcm9iYWJpbGl0eSBvZiBiZWluZyByaWdodCBvbiB0aGUgZmlyc3QgYXR0ZW1wdFxuICogQW55dGhpbmcgYWJvdmUgMjUwIG5lZWRzIDJeMzIgdHJpZXMgb24gYXZlcmFnZSB0byBzb2x2ZS5cbiAqIDE1MCB0byAxODAgc2VlbXMgcmVhc29uYWJsZVxuICovXG5mdW5jdGlvbiBkaWZmaWN1bHR5VG9UaHJlc2hvbGQodmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPiAyNTUpIHtcbiAgICAgICAgdmFsdWUgPSAyNTU7XG4gICAgfVxuICAgIGVsc2UgaWYgKHZhbHVlIDwgMCkge1xuICAgICAgICB2YWx1ZSA9IDA7XG4gICAgfVxuICAgIHJldHVybiBNYXRoLnBvdygyLCAoMjU1Ljk5OSAtIHZhbHVlKSAvIDguMCkgPj4+IDA7XG59XG5cbmNvbnN0IFBVWlpMRV9FWFBJUllfT0ZGU0VUID0gMTM7XG5jb25zdCBOVU1CRVJfT0ZfUFVaWkxFU19PRkZTRVQgPSAxNDtcbmNvbnN0IFBVWlpMRV9ESUZGSUNVTFRZX09GRlNFVCA9IDE1O1xuZnVuY3Rpb24gZ2V0UHV6emxlU29sdmVySW5wdXRzKHB1enpsZUJ1ZmZlciwgbnVtUHV6emxlcykge1xuICAgIGNvbnN0IHN0YXJ0aW5nUG9pbnRzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1QdXp6bGVzOyBpKyspIHtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBuZXcgVWludDhBcnJheShDSEFMTEVOR0VfU0laRV9CWVRFUyk7XG4gICAgICAgIGlucHV0LnNldChwdXp6bGVCdWZmZXIpO1xuICAgICAgICBpbnB1dFsxMjBdID0gaTtcbiAgICAgICAgc3RhcnRpbmdQb2ludHMucHVzaChpbnB1dCk7XG4gICAgfVxuICAgIHJldHVybiBzdGFydGluZ1BvaW50cztcbn1cblxuZnVuY3Rpb24gZGVjb2RlQmFzZTY0UHV6emxlKGJhc2U2NFB1enpsZSkge1xyXG4gICAgY29uc3QgcGFydHMgPSBiYXNlNjRQdXp6bGUuc3BsaXQoXCIuXCIpO1xyXG4gICAgY29uc3QgcHV6emxlID0gcGFydHNbMV07XHJcbiAgICBjb25zdCBhcnIgPSBkZWNvZGUocHV6emxlKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2lnbmF0dXJlOiBwYXJ0c1swXSxcclxuICAgICAgICBiYXNlNjQ6IHB1enpsZSxcclxuICAgICAgICBidWZmZXI6IGFycixcclxuICAgICAgICBuOiBhcnJbTlVNQkVSX09GX1BVWlpMRVNfT0ZGU0VUXSxcclxuICAgICAgICB0aHJlc2hvbGQ6IGRpZmZpY3VsdHlUb1RocmVzaG9sZChhcnJbUFVaWkxFX0RJRkZJQ1VMVFlfT0ZGU0VUXSksXHJcbiAgICAgICAgZXhwaXJ5OiBhcnJbUFVaWkxFX0VYUElSWV9PRkZTRVRdICogMzAwMDAwLFxyXG4gICAgfTtcclxufVxyXG5hc3luYyBmdW5jdGlvbiBnZXRQdXp6bGUodXJsc1NlcGFyYXRlZEJ5Q29tbWEsIHNpdGVLZXksIGxhbmcpIHtcclxuICAgIGNvbnN0IHVybHMgPSB1cmxzU2VwYXJhdGVkQnlDb21tYS5zcGxpdChcIixcIik7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVybHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoQW5kUmV0cnlXaXRoQmFja29mZih1cmxzW2ldICsgXCI/c2l0ZWtleT1cIiArIHNpdGVLZXksIHsgaGVhZGVyczogW1tcIngtZnJjLWNsaWVudFwiLCBcImpzLTAuOS4xOFwiXV0sIG1vZGU6IFwiY29yc1wiIH0sIDIpO1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ganNvbi5kYXRhLnB1enpsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxldCBqc29uO1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAvKiBEbyBub3RoaW5nLCB0aGUgZXJyb3IgaXMgbm90IHZhbGlkIEpTT04gKi9cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChqc29uICYmIGpzb24uZXJyb3JzICYmIGpzb24uZXJyb3JzWzBdID09PSBcImVuZHBvaW50X25vdF9lbmFibGVkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihgRW5kcG9pbnQgbm90IGFsbG93ZWQgKCR7cmVzcG9uc2Uuc3RhdHVzfSlgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChpID09PSB1cmxzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihgUmVzcG9uc2Ugc3RhdHVzICR7cmVzcG9uc2Uuc3RhdHVzfSAke3Jlc3BvbnNlLnN0YXR1c1RleHR9ICR7anNvbiA/IGpzb24uZXJyb3JzIDogXCJcIn1gKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiW0ZSQyBGZXRjaF06XCIsIGUpO1xyXG4gICAgICAgICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoYCR7bGFuZy50ZXh0X2ZldGNoX2Vycm9yfSA8YSBjbGFzcz1cImZyYy1lcnItdXJsXCIgaHJlZj1cIiR7dXJsc1tpXX1cIj4ke3VybHNbaV19PC9hPmApO1xyXG4gICAgICAgICAgICBlcnIucmF3RXJyb3IgPSBlO1xyXG4gICAgICAgICAgICB0aHJvdyBlcnI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gVGhpcyBjb2RlIHNob3VsZCBuZXZlciBiZSByZWFjaGVkLlxyXG4gICAgdGhyb3cgRXJyb3IoYEludGVybmFsIGVycm9yYCk7XHJcbn1cclxuLyoqXHJcbiAqIFJldHJpZXMgZ2l2ZW4gcmVxdWVzdCB3aXRoIGV4cG9uZW50aWFsIGJhY2tvZmYgKHN0YXJ0aW5nIHdpdGggMTAwMG1zIGRlbGF5LCBtdWx0aXBseWluZyBieSA0IGV2ZXJ5IHRpbWUpXHJcbiAqIEBwYXJhbSB1cmwgUmVxdWVzdCAoY2FuIGJlIHN0cmluZyB1cmwpIHRvIGZldGNoXHJcbiAqIEBwYXJhbSBvcHRzIE9wdGlvbnMgZm9yIGZldGNoXHJcbiAqIEBwYXJhbSBuIE51bWJlciBvZiB0aW1lcyB0byBhdHRlbXB0IGJlZm9yZSBnaXZpbmcgdXAuXHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiBmZXRjaEFuZFJldHJ5V2l0aEJhY2tvZmYodXJsLCBvcHRzLCBuKSB7XHJcbiAgICBsZXQgdGltZSA9IDEwMDA7XHJcbiAgICByZXR1cm4gZmV0Y2godXJsLCBvcHRzKS5jYXRjaChhc3luYyAoZXJyb3IpID0+IHtcclxuICAgICAgICBpZiAobiA9PT0gMClcclxuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHIpID0+IHNldFRpbWVvdXQociwgdGltZSkpO1xyXG4gICAgICAgIHRpbWUgKj0gNDtcclxuICAgICAgICByZXR1cm4gZmV0Y2hBbmRSZXRyeVdpdGhCYWNrb2ZmKHVybCwgb3B0cywgbiAtIDEpO1xyXG4gICAgfSk7XHJcbn1cblxuLy8gRW5nbGlzaFxyXG5jb25zdCBMQU5HX0VOID0ge1xyXG4gICAgdGV4dF9pbml0OiBcIkluaXRpYWxpemluZy4uLlwiLFxyXG4gICAgdGV4dF9yZWFkeTogXCJBbnRpLVJvYm90IFZlcmlmaWNhdGlvblwiLFxyXG4gICAgYnV0dG9uX3N0YXJ0OiBcIkNsaWNrIHRvIHN0YXJ0IHZlcmlmaWNhdGlvblwiLFxyXG4gICAgdGV4dF9mZXRjaGluZzogXCJGZXRjaGluZyBDaGFsbGVuZ2VcIixcclxuICAgIHRleHRfc29sdmluZzogXCJWZXJpZnlpbmcgeW91IGFyZSBodW1hbi4uLlwiLFxyXG4gICAgdGV4dF9jb21wbGV0ZWQ6IFwiSSBhbSBodW1hblwiLFxyXG4gICAgdGV4dF9jb21wbGV0ZWRfc3I6IFwiQXV0b21hdGljIHNwYW0gY2hlY2sgY29tcGxldGVkXCIsXHJcbiAgICB0ZXh0X2V4cGlyZWQ6IFwiQW50aS1Sb2JvdCB2ZXJpZmljYXRpb24gZXhwaXJlZFwiLFxyXG4gICAgYnV0dG9uX3Jlc3RhcnQ6IFwiUmVzdGFydFwiLFxyXG4gICAgdGV4dF9lcnJvcjogXCJWZXJpZmljYXRpb24gZmFpbGVkXCIsXHJcbiAgICBidXR0b25fcmV0cnk6IFwiUmV0cnlcIixcclxuICAgIHRleHRfZmV0Y2hfZXJyb3I6IFwiRmFpbGVkIHRvIGNvbm5lY3QgdG9cIixcclxufTtcclxuLy8gRnJlbmNoXHJcbmNvbnN0IExBTkdfRlIgPSB7XHJcbiAgICB0ZXh0X2luaXQ6IFwiQ2hhcmdlbWVudC4uLlwiLFxyXG4gICAgdGV4dF9yZWFkeTogXCJWw6lyaWZpY2F0aW9uIEFudGktUm9ib3RcIixcclxuICAgIGJ1dHRvbl9zdGFydDogXCJDbGlxdWUgaWNpIHBvdXIgdsOpcmlmaWVyXCIsXHJcbiAgICB0ZXh0X2ZldGNoaW5nOiBcIkNoYXJnZW1lbnQgZHUgZMOpZmlcIixcclxuICAgIHRleHRfc29sdmluZzogXCJOb3VzIHbDqXJpZmlvbnMgcXVlIHZvdXMgbifDqnRlcyBwYXMgdW4gcm9ib3QuLi5cIixcclxuICAgIHRleHRfY29tcGxldGVkOiBcIkplIG5lIHN1aXMgcGFzIHVuIHJvYm90XCIsXHJcbiAgICB0ZXh0X2NvbXBsZXRlZF9zcjogXCJWw6lyaWZpY2F0aW9uIGF1dG9tYXRpcXVlIGRlcyBzcGFtcyB0ZXJtaW7DqWVcIixcclxuICAgIHRleHRfZXhwaXJlZDogXCJWw6lyaWZpY2F0aW9uIGFudGktcm9ib3QgZXhwaXLDqWVcIixcclxuICAgIGJ1dHRvbl9yZXN0YXJ0OiBcIlJlZMOpbWFycmVyXCIsXHJcbiAgICB0ZXh0X2Vycm9yOiBcIsOJY2hlYyBkZSBsYSB2w6lyaWZpY2F0aW9uXCIsXHJcbiAgICBidXR0b25fcmV0cnk6IFwiUmVjb21tZW5jZXJcIixcclxuICAgIHRleHRfZmV0Y2hfZXJyb3I6IFwiUHJvYmzDqG1lIGRlIGNvbm5leGlvbiBhdmVjXCIsXHJcbn07XHJcbi8vIEdlcm1hblxyXG5jb25zdCBMQU5HX0RFID0ge1xyXG4gICAgdGV4dF9pbml0OiBcIkluaXRpYWxpc2llcnVuZy4uLlwiLFxyXG4gICAgdGV4dF9yZWFkeTogXCJBbnRpLVJvYm90ZXItVmVyaWZpemllcnVuZ1wiLFxyXG4gICAgYnV0dG9uX3N0YXJ0OiBcIkhpZXIga2xpY2tlblwiLFxyXG4gICAgdGV4dF9mZXRjaGluZzogXCJIZXJhdXNmb3JkZXJ1bmcgbGFkZW4uLi5cIixcclxuICAgIHRleHRfc29sdmluZzogXCJWZXJpZml6aWVydW5nLCBkYXNzIFNpZSBlaW4gTWVuc2NoIHNpbmQuLi5cIixcclxuICAgIHRleHRfY29tcGxldGVkOiBcIkljaCBiaW4gZWluIE1lbnNjaFwiLFxyXG4gICAgdGV4dF9jb21wbGV0ZWRfc3I6IFwiQXV0b21hdGlzY2hlIFNwYW1wcsO8ZnVuZyBhYmdlc2NobG9zc2VuXCIsXHJcbiAgICB0ZXh0X2V4cGlyZWQ6IFwiVmVyaWZpemllcnVuZyBhYmdlbGF1ZmVuXCIsXHJcbiAgICBidXR0b25fcmVzdGFydDogXCJFcm5ldXQgc3RhcnRlblwiLFxyXG4gICAgdGV4dF9lcnJvcjogXCJWZXJpZml6aWVydW5nIGZlaGxnZXNjaGxhZ2VuXCIsXHJcbiAgICBidXR0b25fcmV0cnk6IFwiRXJuZXV0IHZlcnN1Y2hlblwiLFxyXG4gICAgdGV4dF9mZXRjaF9lcnJvcjogXCJWZXJiaW5kdW5nc3Byb2JsZW0gbWl0XCIsXHJcbn07XHJcbi8vIER1dGNoXHJcbmNvbnN0IExBTkdfTkwgPSB7XHJcbiAgICB0ZXh0X2luaXQ6IFwiSW5pdGlhbGl6ZXJlbi4uLlwiLFxyXG4gICAgdGV4dF9yZWFkeTogXCJBbnRpLXJvYm90dmVyaWZpY2F0aWVcIixcclxuICAgIGJ1dHRvbl9zdGFydDogXCJLbGlrIG9tIHRlIHN0YXJ0ZW5cIixcclxuICAgIHRleHRfZmV0Y2hpbmc6IFwiQWFuIGhldCBsYWRlbi4uLlwiLFxyXG4gICAgdGV4dF9zb2x2aW5nOiBcIkFudGktcm9ib3R2ZXJpZmljYXRpZSBiZXppZy4uLlwiLFxyXG4gICAgdGV4dF9jb21wbGV0ZWQ6IFwiSWsgYmVuIGVlbiBtZW5zXCIsXHJcbiAgICB0ZXh0X2NvbXBsZXRlZF9zcjogXCJBdXRvbWF0aXNjaGUgYW50aS1zcGFtY2hlY2sgdm9sdG9vaWRcIixcclxuICAgIHRleHRfZXhwaXJlZDogXCJWZXJpZmljYXRpZSB2ZXJsb3BlblwiLFxyXG4gICAgYnV0dG9uX3Jlc3RhcnQ6IFwiT3BuaWV1dyBzdGFydGVuXCIsXHJcbiAgICB0ZXh0X2Vycm9yOiBcIlZlcmlmaWNhdGllIG1pc2x1a3RcIixcclxuICAgIGJ1dHRvbl9yZXRyeTogXCJPcG5pZXV3IHByb2JlcmVuXCIsXHJcbiAgICB0ZXh0X2ZldGNoX2Vycm9yOiBcIlZlcmJpbmRpbmcgbWlzbHVrdCBtZXRcIixcclxufTtcclxuLy8gSXRhbGlhblxyXG5jb25zdCBMQU5HX0lUID0ge1xyXG4gICAgdGV4dF9pbml0OiBcIkluaXppYWxpenphemlvbmUuLi5cIixcclxuICAgIHRleHRfcmVhZHk6IFwiVmVyaWZpY2EgQW50aS1Sb2JvdFwiLFxyXG4gICAgYnV0dG9uX3N0YXJ0OiBcIkNsaWNjYSBwZXIgaW5pemlhcmVcIixcclxuICAgIHRleHRfZmV0Y2hpbmc6IFwiQ2FyaWNhbWVudG8uLi5cIixcclxuICAgIHRleHRfc29sdmluZzogXCJWZXJpZmljYW5kbyBjaGUgc2VpIHVtYW5vLi4uXCIsXHJcbiAgICB0ZXh0X2NvbXBsZXRlZDogXCJOb24gc29ubyB1biByb2JvdFwiLFxyXG4gICAgdGV4dF9jb21wbGV0ZWRfc3I6IFwiQ29udHJvbGxvIGF1dG9tYXRpY28gZGVsbG8gc3BhbSBjb21wbGV0YXRvXCIsXHJcbiAgICB0ZXh0X2V4cGlyZWQ6IFwiVmVyaWZpY2EgQW50aS1Sb2JvdCBzY2FkdXRhXCIsXHJcbiAgICBidXR0b25fcmVzdGFydDogXCJSaWNvbWluY2lhXCIsXHJcbiAgICB0ZXh0X2Vycm9yOiBcIlZlcmlmaWNhIGZhbGxpdGFcIixcclxuICAgIGJ1dHRvbl9yZXRyeTogXCJSaXByb3ZhXCIsXHJcbiAgICB0ZXh0X2ZldGNoX2Vycm9yOiBcIlByb2JsZW1hIGRpIGNvbm5lc3Npb25lIGNvblwiLFxyXG59O1xyXG4vLyBQb3J0dWd1ZXNlXHJcbmNvbnN0IExBTkdfUFQgPSB7XHJcbiAgICB0ZXh0X2luaXQ6IFwiSW5pY2lhbGl6YW5kby4uLlwiLFxyXG4gICAgdGV4dF9yZWFkeTogXCJWZXJpZmljYcOnw6NvIEFudGktUm9iw7RcIixcclxuICAgIGJ1dHRvbl9zdGFydDogXCJDbGlxdWUgcGFyYSBpbmljaWFyIHZlcmlmaWNhw6fDo29cIixcclxuICAgIHRleHRfZmV0Y2hpbmc6IFwiQ2FycmVnYW5kby4uLlwiLFxyXG4gICAgdGV4dF9zb2x2aW5nOiBcIlZlcmlmaWNhbmRvIHNlIHZvY8OqIMOpIGh1bWFuby4uLlwiLFxyXG4gICAgdGV4dF9jb21wbGV0ZWQ6IFwiRXUgc291IGh1bWFub1wiLFxyXG4gICAgdGV4dF9jb21wbGV0ZWRfc3I6IFwiVmVyaWZpY2HDp8OjbyBhdXRvbcOhdGljYSBkZSBzcGFtIGNvbmNsdcOtZGFcIixcclxuICAgIHRleHRfZXhwaXJlZDogXCJWZXJpZmljYcOnw6NvIEFudGktUm9iw7QgZXhwaXJhZGFcIixcclxuICAgIGJ1dHRvbl9yZXN0YXJ0OiBcIlJlaW5pY2lhclwiLFxyXG4gICAgdGV4dF9lcnJvcjogXCJWZXJpZmljYcOnw6NvIGZhbGhvdVwiLFxyXG4gICAgYnV0dG9uX3JldHJ5OiBcIlRlbnRhciBub3ZhbWVudGVcIixcclxuICAgIHRleHRfZmV0Y2hfZXJyb3I6IFwiRmFsaGEgZGUgY29uZXjDo28gY29tXCIsXHJcbn07XHJcbi8vIFNwYW5pc2hcclxuY29uc3QgTEFOR19FUyA9IHtcclxuICAgIHRleHRfaW5pdDogXCJJbmljaWFsaXphbmRvLi4uXCIsXHJcbiAgICB0ZXh0X3JlYWR5OiBcIlZlcmlmaWNhY2nDs24gQW50aS1Sb2JvdFwiLFxyXG4gICAgYnV0dG9uX3N0YXJ0OiBcIkhhZ2EgY2xpYyBwYXJhIGluaWNpYXIgbGEgdmVyaWZpY2FjacOzblwiLFxyXG4gICAgdGV4dF9mZXRjaGluZzogXCJDYXJnYW5kbyBkZXNhZsOtb1wiLFxyXG4gICAgdGV4dF9zb2x2aW5nOiBcIlZlcmlmaWNhbmRvIHF1ZSBlcmVzIGh1bWFuby4uLlwiLFxyXG4gICAgdGV4dF9jb21wbGV0ZWQ6IFwiU295IGh1bWFub1wiLFxyXG4gICAgdGV4dF9jb21wbGV0ZWRfc3I6IFwiVmVyaWZpY2FjacOzbiBhdXRvbcOhdGljYSBkZSBzcGFtIGNvbXBsZXRhZGFcIixcclxuICAgIHRleHRfZXhwaXJlZDogXCJWZXJpZmljYWNpw7NuIEFudGktUm9ib3QgZXhwaXJhZGFcIixcclxuICAgIGJ1dHRvbl9yZXN0YXJ0OiBcIlJlaW5pY2lhclwiLFxyXG4gICAgdGV4dF9lcnJvcjogXCJIYSBmYWxsYWRvIGxhIHZlcmlmaWNhY2nDs25cIixcclxuICAgIGJ1dHRvbl9yZXRyeTogXCJJbnRlbnRhciBkZSBudWV2b1wiLFxyXG4gICAgdGV4dF9mZXRjaF9lcnJvcjogXCJFcnJvciBhbCBjb25lY3RhcnNlIGFcIixcclxufTtcclxuLy8gQ2F0YWxhblxyXG5jb25zdCBMQU5HX0NBID0ge1xyXG4gICAgdGV4dF9pbml0OiBcIkluaWNpYWxpdHphbnQuLi5cIixcclxuICAgIHRleHRfcmVhZHk6IFwiVmVyaWZpY2FjacOzIEFudGktUm9ib3RcIixcclxuICAgIGJ1dHRvbl9zdGFydDogXCJGZXMgY2xpYyBwZXIgY29tZW7Dp2FyIGxhIHZlcmlmaWNhY2nDs1wiLFxyXG4gICAgdGV4dF9mZXRjaGluZzogXCJDYXJyZWdhbnQgcmVwdGVcIixcclxuICAgIHRleHRfc29sdmluZzogXCJWZXJpZmljYW50IHF1ZSBldHMgaHVtw6AuLi5cIixcclxuICAgIHRleHRfY29tcGxldGVkOiBcIlNvYyBodW3DoFwiLFxyXG4gICAgdGV4dF9jb21wbGV0ZWRfc3I6IFwiVmVyaWZpY2FjacOzIGF1dG9tw6B0aWNhIGRlIGNvcnJldSBicm9zc2EgY29tcGxldGFkYVwiLFxyXG4gICAgdGV4dF9leHBpcmVkOiBcIkxhIHZlcmlmaWNhY2nDsyBBbnRpLVJvYm90IGhhIGV4cGlyYXRcIixcclxuICAgIGJ1dHRvbl9yZXN0YXJ0OiBcIlJlaW5pY2lhclwiLFxyXG4gICAgdGV4dF9lcnJvcjogXCJIYSBmYWxsYXQgbGEgdmVyaWZpY2FjacOzXCIsXHJcbiAgICBidXR0b25fcmV0cnk6IFwiVG9ybmFyIGEgcHJvdmFyXCIsXHJcbiAgICB0ZXh0X2ZldGNoX2Vycm9yOiBcIkVycm9yIGNvbm5lY3RhbnQgYVwiLFxyXG59O1xyXG4vLyBKYXBhbmVzZVxyXG5jb25zdCBMQU5HX0pBID0ge1xyXG4gICAgdGV4dF9pbml0OiBcIumWi+Wni+OBl+OBpuOBhOOBvuOBmS4uLlwiLFxyXG4gICAgdGV4dF9yZWFkeTogXCLjgqLjg7Pjg4Hjg63jg5zjg4Pjg4joqo3oqLxcIixcclxuICAgIGJ1dHRvbl9zdGFydDogXCLjgq/jg6rjg4Pjgq/jgZfjgaboqo3oqLzjgpLplovlp4tcIixcclxuICAgIHRleHRfZmV0Y2hpbmc6IFwi44Ot44O844OJ44GX44Gm44GE44G+44GZXCIsXHJcbiAgICB0ZXh0X3NvbHZpbmc6IFwi6KqN6Ki85LitLi4uXCIsXHJcbiAgICB0ZXh0X2NvbXBsZXRlZDogXCLnp4Hjga/jg63jg5zjg4Pjg4jjgafjga/jgYLjgorjgb7jgZvjgpNcIixcclxuICAgIHRleHRfY29tcGxldGVkX3NyOiBcIuiHquWLleOCueODkeODoOODgeOCp+ODg+OCr+OBjOWujOS6huOBl+OBvuOBl+OBn1wiLFxyXG4gICAgdGV4dF9leHBpcmVkOiBcIuiqjeiovOOBruacn+mZkOOBjOWIh+OCjOOBpuOBhOOBvuOBmVwiLFxyXG4gICAgYnV0dG9uX3Jlc3RhcnQ6IFwi5YaN5bqm6KqN6Ki844KS6KGM44GGXCIsXHJcbiAgICB0ZXh0X2Vycm9yOiBcIuiqjeiovOOBq+OCqOODqeODvOOBjOeZuueUn+OBl+OBvuOBl+OBn1wiLFxyXG4gICAgYnV0dG9uX3JldHJ5OiBcIuWGjeW6puiqjeiovOOCkuihjOOBhlwiLFxyXG4gICAgdGV4dF9mZXRjaF9lcnJvcjogXCLmjqXntprjgYzjgafjgY3jgb7jgZvjgpPjgafjgZfjgZ9cIixcclxufTtcclxuLy8gRGFuaXNoXHJcbmNvbnN0IExBTkdfREEgPSB7XHJcbiAgICB0ZXh0X2luaXQ6IFwiQWt0aXZlcmVyLi4uXCIsXHJcbiAgICB0ZXh0X3JlYWR5OiBcIkplZyBlciBpa2tlIGVuIHJvYm90XCIsXHJcbiAgICBidXR0b25fc3RhcnQ6IFwiS2xpayBmb3IgYXQgc3RhcnRlIHZlcmlmaWthdGlvbmVuXCIsXHJcbiAgICB0ZXh0X2ZldGNoaW5nOiBcIkhlbnRlciBkYXRhXCIsXHJcbiAgICB0ZXh0X3NvbHZpbmc6IFwiS29udHJvbGxlcmVyIGF0IGR1IGVyIGV0IG1lbm5lc2tlLi4uXCIsXHJcbiAgICB0ZXh0X2NvbXBsZXRlZDogXCJKZWcgZXIgZXQgbWVubmVza2UuXCIsXHJcbiAgICB0ZXh0X2NvbXBsZXRlZF9zcjogXCJBdXRvbWF0aXNrIHNwYW1rb250cm9sIGdlbm5lbWbDuHJ0XCIsXHJcbiAgICB0ZXh0X2V4cGlyZWQ6IFwiVmVyaWZpa2F0aW9uZW4ga3VubmUgaWtrZSBmdWxkZsO4cmVzXCIsXHJcbiAgICBidXR0b25fcmVzdGFydDogXCJHZW5zdGFydFwiLFxyXG4gICAgdGV4dF9lcnJvcjogXCJCZWtyw6ZmdGVsc2UgbWlzbHlra2VkZXNcIixcclxuICAgIGJ1dHRvbl9yZXRyeTogXCJQcsO4diBpZ2VuXCIsXHJcbiAgICB0ZXh0X2ZldGNoX2Vycm9yOiBcIkZvcmJpbmRlbHNlbiBtaXNseWtrZWRlc1wiLFxyXG59O1xyXG4vLyBSdXNzaWFuXHJcbmNvbnN0IExBTkdfUlUgPSB7XHJcbiAgICB0ZXh0X2luaXQ6IFwi0JjQvdC40YbQuNCw0LvQuNC30LDRhtC40Y8uLi5cIixcclxuICAgIHRleHRfcmVhZHk6IFwi0JDQvdGC0LjQoNC+0LHQvtGCINC/0YDQvtCy0LXRgNC60LBcIixcclxuICAgIGJ1dHRvbl9zdGFydDogXCLQndCw0LbQvNC40YLQtSwg0YfRgtC+0LHRiyDQvdCw0YfQsNGC0Ywg0L/RgNC+0LLQtdGA0LrRg1wiLFxyXG4gICAgdGV4dF9mZXRjaGluZzogXCLQn9C+0LvRg9GH0LDRjiDQt9Cw0LTQsNGH0YNcIixcclxuICAgIHRleHRfc29sdmluZzogXCLQn9GA0L7QstC10YDRj9GOLCDRh9GC0L4g0LLRiyDRh9C10LvQvtCy0LXQui4uLlwiLFxyXG4gICAgdGV4dF9jb21wbGV0ZWQ6IFwi0K8g0YfQtdC70L7QstC10LpcIixcclxuICAgIHRleHRfY29tcGxldGVkX3NyOiBcIkHQstGC0L7QvNCw0YLQuNGH0LXRgdC60LDRjyDQv9GA0L7QstC10YDQutCwINC90LAg0YHQv9Cw0Lwg0LfQsNCy0LXRgNGI0LXQvdCwXCIsXHJcbiAgICB0ZXh0X2V4cGlyZWQ6IFwi0KHRgNC+0Log0JDQvdGC0LjQoNC+0LHQvtGC0L3QvtC5INC/0YDQvtCy0LXRgNC60Lgg0LjRgdGC0ZHQulwiLFxyXG4gICAgYnV0dG9uX3Jlc3RhcnQ6IFwi0J3QsNGH0LDRgtGMINC30LDQvdC+0LLQvlwiLFxyXG4gICAgdGV4dF9lcnJvcjogXCLQntGI0LjQsdC60LAg0L/RgNC+0LLQtdGA0LrQuFwiLFxyXG4gICAgYnV0dG9uX3JldHJ5OiBcItCf0L7QstGC0L7RgNC40YLRjCDQtdGJ0ZEg0YDQsNC3XCIsXHJcbiAgICB0ZXh0X2ZldGNoX2Vycm9yOiBcItCe0YjQuNCx0LrQsCDQv9C+0LTQutC70Y7Rh9C10L3QuNGPXCIsXHJcbn07XHJcbi8vIFN3ZWRpc2hcclxuY29uc3QgTEFOR19TViA9IHtcclxuICAgIHRleHRfaW5pdDogXCJBa3RpdmVyYXIuLi5cIixcclxuICAgIHRleHRfcmVhZHk6IFwiSmFnIMOkciBpbnRlIGVuIHJvYm90XCIsXHJcbiAgICBidXR0b25fc3RhcnQ6IFwiS2xpY2thIGbDtnIgYXR0IHZlcmlmaWVyYVwiLFxyXG4gICAgdGV4dF9mZXRjaGluZzogXCJIw6RtdGFyIGRhdGFcIixcclxuICAgIHRleHRfc29sdmluZzogXCJLb250cm9sbGVyYXIgYXR0IGR1IMOkciBtw6Rubmlza2EuLi5cIixcclxuICAgIHRleHRfY29tcGxldGVkOiBcIkphZyDDpHIgZW4gbcOkbm5pc2thXCIsXHJcbiAgICB0ZXh0X2NvbXBsZXRlZF9zcjogXCJBdXRvbWF0aXNrIHNwYW1rb250cm9sbCBzbHV0ZsO2cmRcIixcclxuICAgIHRleHRfZXhwaXJlZDogXCJBbnRpLXJvYm90LXZlcmlmaWVyaW5nZW4gaGFyIGzDtnB0IHV0XCIsXHJcbiAgICBidXR0b25fcmVzdGFydDogXCJCw7ZyamEgb21cIixcclxuICAgIHRleHRfZXJyb3I6IFwiVmVyaWZpZXJpbmcga3VuZGUgaW50ZSBzbHV0ZsO2cmFzXCIsXHJcbiAgICBidXR0b25fcmV0cnk6IFwiT21zdGFydFwiLFxyXG4gICAgdGV4dF9mZXRjaF9lcnJvcjogXCJWZXJpZmllcmluZyBtaXNzbHlja2FkZXNcIixcclxufTtcclxuLy8gVHVya2lzaFxyXG5jb25zdCBMQU5HX1RSID0ge1xyXG4gICAgdGV4dF9pbml0OiBcIkJhxZ9sYXTEsWzEsXlvci4uLlwiLFxyXG4gICAgdGV4dF9yZWFkeTogXCJBbnRpLVJvYm90IERvxJ9ydWxhbWFzxLFcIixcclxuICAgIGJ1dHRvbl9zdGFydDogXCJEb8SfcnVsYW1hecSxIGJhxZ9sYXRtYWsgacOnaW4gdMSxa2xhecSxblwiLFxyXG4gICAgdGV4dF9mZXRjaGluZzogXCJZw7xrbGVuaXlvclwiLFxyXG4gICAgdGV4dF9zb2x2aW5nOiBcIlJvYm90IG9sbWFkxLHEn8SxbsSxeiBkb8SfcnVsYW7EsXlvci4uLlwiLFxyXG4gICAgdGV4dF9jb21wbGV0ZWQ6IFwiQmVuIGJpciBpbnNhbsSxbVwiLFxyXG4gICAgdGV4dF9jb21wbGV0ZWRfc3I6IFwiT3RvbWF0aWsgc3BhbSBrb250cm9sw7wgdGFtYW1sYW5kxLFcIixcclxuICAgIHRleHRfZXhwaXJlZDogXCJBbnRpLVJvYm90IGRvxJ9ydWxhbWFzxLFuxLFuIHPDvHJlc2kgZG9sZHVcIixcclxuICAgIGJ1dHRvbl9yZXN0YXJ0OiBcIlllbmlkZW4gYmHFn2xhdFwiLFxyXG4gICAgdGV4dF9lcnJvcjogXCJEb8SfcnVsYW1hIGJhxZ9hcsSxc8SxeiBvbGR1XCIsXHJcbiAgICBidXR0b25fcmV0cnk6IFwiVGVrcmFyIGRlbmVcIixcclxuICAgIHRleHRfZmV0Y2hfZXJyb3I6IFwiQmHEn2xhbnTEsSBiYcWfYXLEsXPEsXogb2xkdVwiLFxyXG59O1xyXG4vLyBHcmVla1xyXG5jb25zdCBMQU5HX0VMID0ge1xyXG4gICAgdGV4dF9pbml0OiBcIs6gz4HOv861z4TOv865zrzOsc+Dzq/OsS4uLlwiLFxyXG4gICAgdGV4dF9yZWFkeTogXCJBbnRpLVJvYm90IM6Vz4DOsc67zq7OuM61z4XPg863XCIsXHJcbiAgICBidXR0b25fc3RhcnQ6IFwiIM6azqzOvc+EzrUgzrrOu865zrogzrPOuc6xIM69zrEgzr7Otc66zrnOvc6uz4POtc65IM63IM61z4DOsc67zq7OuM61z4XPg863XCIsXHJcbiAgICB0ZXh0X2ZldGNoaW5nOiBcIiDOm86uz4jOtyDPgM+Bz4zOus67zrfPg863z4JcIixcclxuICAgIHRleHRfc29sdmluZzogXCIgzpXPgM65zrLOtc6yzrHOr8+Jz4POtyDOsc69zrjPgc+Oz4DOv8+FLi4uXCIsXHJcbiAgICB0ZXh0X2NvbXBsZXRlZDogXCLOlc6vzrzOsc65IM6szr3OuM+Bz4nPgM6/z4JcIixcclxuICAgIHRleHRfY29tcGxldGVkX3NyOiBcIiDOnyDOsc+Fz4TPjM68zrHPhM6/z4Igzq3Ou861zrPPh86/z4IgzrHOvc61z4DOuc64z43OvM63z4TOv8+FIM+AzrXPgc65zrXPh86/zrzOrc69zr/PhSDOv867zr/Ous67zrfPgc+OzrjOt866zrVcIixcclxuICAgIHRleHRfZXhwaXJlZDogXCIgzpcgzrXPgM6xzrvOrs64zrXPhc+DzrcgQW50aS1Sb2JvdCDOrc67zrfOvs61XCIsXHJcbiAgICBidXR0b25fcmVzdGFydDogXCIgzpXPgM6xzr3Otc66zrrOr869zrfPg863XCIsXHJcbiAgICB0ZXh0X2Vycm9yOiBcIiDOlyDOtc+AzrHOu86uzrjOtc+Fz4POtyDOsc+Azq3PhM+Fz4fOtVwiLFxyXG4gICAgYnV0dG9uX3JldHJ5OiBcIiDOlM6/zrrOuc68zqzPg8+EzrUgzr7Osc69zqxcIixcclxuICAgIHRleHRfZmV0Y2hfZXJyb3I6IFwiIM6Rz4DOv8+Ez4XPh86vzrEgz4PPjc69zrTOtc+DzrfPgiDOvM61XCIsXHJcbn07XHJcbi8vIFVrcmFpbmlhblxyXG5jb25zdCBMQU5HX1VLID0ge1xyXG4gICAgdGV4dF9pbml0OiBcItCG0L3RltGG0ZbQsNC70ZbQt9Cw0YbRltGPLi4uXCIsXHJcbiAgICB0ZXh0X3JlYWR5OiBcItCQ0L3RgtC40YDQvtCx0L7RgiDQstC10YDQuNGE0ZbQutCw0YbRltGPXCIsXHJcbiAgICBidXR0b25fc3RhcnQ6IFwi0J3QsNGC0LjRgdC90ZbRgtGMLCDRidC+0LEg0YDQvtC30L/QvtGH0LDRgtC4INCy0LXRgNC40YTRltC60LDRhtGW0Y5cIixcclxuICAgIHRleHRfZmV0Y2hpbmc6IFwi0JfigJnRlNC00L3QsNC90L3Rj1wiLFxyXG4gICAgdGV4dF9zb2x2aW5nOiBcItCf0LXRgNC10LLRltGA0LrQsCwg0YnQviDQstC4INC90LUg0YDQvtCx0L7Rgi4uLlwiLFxyXG4gICAgdGV4dF9jb21wbGV0ZWQ6IFwi0K8g0L3QtSDRgNC+0LHQvtGCXCIsXHJcbiAgICB0ZXh0X2NvbXBsZXRlZF9zcjogXCLQkNCy0YLQvtC80LDRgtC40YfQvdCwINC/0LXRgNC10LLRltGA0LrQsCDRgdC/0LDQvNGDINC30LDQstC10YDRiNC10L3QsFwiLFxyXG4gICAgdGV4dF9leHBpcmVkOiBcItCn0LDRgSDQstC40YfQtdGA0L/QsNC90L5cIixcclxuICAgIGJ1dHRvbl9yZXN0YXJ0OiBcItCf0L7Rh9Cw0YLQuCDQt9C90L7QstGDXCIsXHJcbiAgICB0ZXh0X2Vycm9yOiBcItCS0LXRgNC40YTRltC60LDRhtGW0Y8g0L3QtSDQstC00LDQu9Cw0YHRjFwiLFxyXG4gICAgYnV0dG9uX3JldHJ5OiBcItCh0L/RgNC+0LHRg9Cy0LDRgtC4INC30L3QvtCy0YNcIixcclxuICAgIHRleHRfZmV0Y2hfZXJyb3I6IFwi0J3QtSDQstC00LDQu9C+0YHRjCDQt+KAmdGU0LTQvdCw0YLQuNGB0YxcIixcclxufTtcclxuLy8gQnVsZ2FyaWFuXHJcbmNvbnN0IExBTkdfQkcgPSB7XHJcbiAgICB0ZXh0X2luaXQ6IFwi0JjQvdC40YbQuNCw0LvQuNC30LjRgNCw0L3QtS4uLlwiLFxyXG4gICAgdGV4dF9yZWFkeTogXCLQkNC90YLQuC3RgNC+0LHQvtGCINC/0YDQvtCy0LXRgNC60LBcIixcclxuICAgIGJ1dHRvbl9zdGFydDogXCLQqdGA0LDQutC90LXRgtC1LCDQt9CwINC00LAg0LfQsNC/0L7Rh9C90LXRgtC1INC/0YDQvtCy0LXRgNC60LDRgtCwXCIsXHJcbiAgICB0ZXh0X2ZldGNoaW5nOiBcItCf0YDQtdC00LjQt9Cy0LjQutCw0YLQtdC70YHRgtCy0L5cIixcclxuICAgIHRleHRfc29sdmluZzogXCLQn9GA0L7QstC10YDRj9Cy0LDQvNC1INC00LDQu9C4INGB0Lgg0YfQvtCy0LXQui4uLlwiLFxyXG4gICAgdGV4dF9jb21wbGV0ZWQ6IFwi0JDQtyDRgdGK0Lwg0YfQvtCy0LXQulwiLFxyXG4gICAgdGV4dF9jb21wbGV0ZWRfc3I6IFwi0JDQstGC0L7QvNCw0YLQuNGH0L3QsNGC0LAg0L/RgNC+0LLQtdGA0LrQsCDQt9CwINGB0L/QsNC8INC1INC30LDQstGK0YDRiNC10L3QsFwiLFxyXG4gICAgdGV4dF9leHBpcmVkOiBcItCQ0L3RgtC4LdCg0L7QsdC+0YIg0L/RgNC+0LLQtdGA0LrQsNGC0LAg0LjQt9GC0LXRh9C1XCIsXHJcbiAgICBidXR0b25fcmVzdGFydDogXCLQoNC10YHRgtCw0YDRgtC40YDQsNC50YLQtVwiLFxyXG4gICAgdGV4dF9lcnJvcjogXCLQndC10YPRgdC/0LXRiNC90LAg0L/RgNC+0LLQtdGA0LrQsFwiLFxyXG4gICAgYnV0dG9uX3JldHJ5OiBcItCe0L/QuNGC0LDQudGC0LUg0L/QsNC6XCIsXHJcbiAgICB0ZXh0X2ZldGNoX2Vycm9yOiBcItCd0LXRg9GB0L/QtdGI0L3QviDRgdCy0YrRgNC30LLQsNC90LUg0YFcIixcclxufTtcclxuLy8gQ3plY2hcclxuY29uc3QgTEFOR19DUyA9IHtcclxuICAgIHRleHRfaW5pdDogXCJJbmljaWFsaXphY2UuLi5cIixcclxuICAgIHRleHRfcmVhZHk6IFwiT3bEm8WZZW7DrSBwcm90aSByb2JvdMWvbVwiLFxyXG4gICAgYnV0dG9uX3N0YXJ0OiBcIktsaWtuxJt0ZSBwcm8gb3bEm8WZZW7DrVwiLFxyXG4gICAgdGV4dF9mZXRjaGluZzogXCJQcm9ibMOpbSBwxZlpIG5hxI3DrXTDoW7DrVwiLFxyXG4gICAgdGV4dF9zb2x2aW5nOiBcIk92xJvFmWVuw60sIMW+ZSBqc3RlIMSNbG92xJtrLi4uXCIsXHJcbiAgICB0ZXh0X2NvbXBsZXRlZDogXCJKc2VtIMSNbG92xJtrXCIsXHJcbiAgICB0ZXh0X2NvbXBsZXRlZF9zcjogXCJBdXRvbWF0aWNrw6Ega29udHJvbGEgc3BhbXUgZG9rb27EjWVuYVwiLFxyXG4gICAgdGV4dF9leHBpcmVkOiBcIk92xJvFmWVuw60gcHJvdGkgcm9ib3TFr20gdnlwcsWhZWxvXCIsXHJcbiAgICBidXR0b25fcmVzdGFydDogXCJSZXN0YXJ0b3ZhdFwiLFxyXG4gICAgdGV4dF9lcnJvcjogXCJPdsSbxZllbsOtIHNlIG5lemRhxZlpbG9cIixcclxuICAgIGJ1dHRvbl9yZXRyeTogXCJaa3VzaXQgem5vdnVcIixcclxuICAgIHRleHRfZmV0Y2hfZXJyb3I6IFwiUMWZaXBvamVuw60gc2UgbmV6ZGHFmWlsb1wiLFxyXG59O1xyXG4vLyBTbG92YWtcclxuY29uc3QgTEFOR19TSyA9IHtcclxuICAgIHRleHRfaW5pdDogXCJJbmljaWFsaXrDoWNpYS4uLlwiLFxyXG4gICAgdGV4dF9yZWFkeTogXCJPdmVyZW5pZSBwcm90aSByb2JvdG9tXCIsXHJcbiAgICBidXR0b25fc3RhcnQ6IFwiS2xpa25pdGUgcHJlIG92ZXJlbmllXCIsXHJcbiAgICB0ZXh0X2ZldGNoaW5nOiBcIlByb2Jsw6ltIHByaSBuYcSNw610YW7DrVwiLFxyXG4gICAgdGV4dF9zb2x2aW5nOiBcIk92ZXJlbmllLCDFvmUgc3RlIMSNbG92ZWsuLi5cIixcclxuICAgIHRleHRfY29tcGxldGVkOiBcIlNvbSDEjWxvdmVrXCIsXHJcbiAgICB0ZXh0X2NvbXBsZXRlZF9zcjogXCJBdXRvbWF0aWNrw6Ega29udHJvbGEgc3BhbXUgZG9rb27EjWVuw6FcIixcclxuICAgIHRleHRfZXhwaXJlZDogXCJPdmVyZW5pZSBwcm90aSByb2JvdG9tIHZ5cHLFoWFsb1wiLFxyXG4gICAgYnV0dG9uX3Jlc3RhcnQ6IFwiUmXFoXRhcnRvdmHFpVwiLFxyXG4gICAgdGV4dF9lcnJvcjogXCJPdmVyZW5pZSBzYSBuZXBvZGFyaWxvXCIsXHJcbiAgICBidXR0b25fcmV0cnk6IFwiU2vDunNpxaUgem5vdmFcIixcclxuICAgIHRleHRfZmV0Y2hfZXJyb3I6IFwiUHJpcG9qZW5pZSBzYSBuZXBvZGFyaWxvXCIsXHJcbn07XHJcbi8vIE5vcndlZ2lhblxyXG5jb25zdCBMQU5HX05PID0ge1xyXG4gICAgdGV4dF9pbml0OiBcIiBBa3RpdmVyZXIuLi5cIixcclxuICAgIHRleHRfcmVhZHk6IFwiSmVnIGVyIGlra2UgZW4gcm9ib3RcIixcclxuICAgIGJ1dHRvbl9zdGFydDogXCJLbGlrayBmb3Igw6Ugc3RhcnRlIHZlcmlmaXNlcmluZ2VuXCIsXHJcbiAgICB0ZXh0X2ZldGNoaW5nOiBcIkhlbnRlciBkYXRhXCIsXHJcbiAgICB0ZXh0X3NvbHZpbmc6IFwiU2pla2tlciBhdCBkdSBlciBldCBtZW5uZXNrZS4uLlwiLFxyXG4gICAgdGV4dF9jb21wbGV0ZWQ6IFwiSmVnIGVyIGV0IG1lbm5lc2tlXCIsXHJcbiAgICB0ZXh0X2NvbXBsZXRlZF9zcjogXCJBdXRvbWF0aXNrIHNwYW0tc2pla2sgZnVsbGbDuHJ0XCIsXHJcbiAgICB0ZXh0X2V4cGlyZWQ6IFwiVmVyaWZpc2VyaW5nIGt1bm5lIGlra2UgZnVsbGbDuHJlc1wiLFxyXG4gICAgYnV0dG9uX3Jlc3RhcnQ6IFwiT21zdGFydFwiLFxyXG4gICAgdGV4dF9lcnJvcjogXCJCZWtyZWZ0ZWxzZW4gbWlzbHlrdGVzXCIsXHJcbiAgICBidXR0b25fcmV0cnk6IFwiUHLDuHYgcMOlIG55dHRcIixcclxuICAgIHRleHRfZmV0Y2hfZXJyb3I6IFwiVGlsa29ibGluZ2VuIG1pc2x5a3Rlc1wiLFxyXG59O1xyXG4vLyBGaW5uaXNoXHJcbmNvbnN0IExBTkdfRkkgPSB7XHJcbiAgICB0ZXh0X2luaXQ6IFwiQWt0aXZvaWRhYW4uLi5cIixcclxuICAgIHRleHRfcmVhZHk6IFwiRW4gb2xlIHJvYm90dGlcIixcclxuICAgIGJ1dHRvbl9zdGFydDogXCJBbG9pdGEgdmFodmlzdHVzIGtsaWtrYWFtYWxsYVwiLFxyXG4gICAgdGV4dF9mZXRjaGluZzogXCJIYWV0YWFuIHRpZXRvamFcIixcclxuICAgIHRleHRfc29sdmluZzogXCJUYXJraXN0YWEsIGV0dMOkIG9sZXQgaWhtaW5lbi4uLlwiLFxyXG4gICAgdGV4dF9jb21wbGV0ZWQ6IFwiT2xlbiBpaG1pbmVuXCIsXHJcbiAgICB0ZXh0X2NvbXBsZXRlZF9zcjogXCJBdXRvbWFhdHRpbmVuIHJvc2thcG9zdGluIHRhcmtpc3R1cyBzdW9yaXRldHR1XCIsXHJcbiAgICB0ZXh0X2V4cGlyZWQ6IFwiVmFodmlzdHVzdGEgZWkgdm9pdHUgc3Vvcml0dGFhIGxvcHB1dW5cIixcclxuICAgIGJ1dHRvbl9yZXN0YXJ0OiBcIlV1ZGVsbGVlbmvDpHlubmlzdHlzXCIsXHJcbiAgICB0ZXh0X2Vycm9yOiBcIlZhaHZpc3R1cyBlcMOkb25uaXN0dWlcIixcclxuICAgIGJ1dHRvbl9yZXRyeTogXCJZcml0w6QgdXVkZWxsZWVuXCIsXHJcbiAgICB0ZXh0X2ZldGNoX2Vycm9yOiBcIllodGV5cyBlcMOkb25uaXN0dWlcIixcclxufTtcclxuLy8gTGF0dmlhblxyXG5jb25zdCBMQU5HX0xWID0ge1xyXG4gICAgdGV4dF9pbml0OiBcIk5vdGllayBpbmljaWFsaXrEk8WhYW5hLi4uXCIsXHJcbiAgICB0ZXh0X3JlYWR5OiBcIlZlcmlmaWvEgWNpamEsIGthIG5lZXNhdCByb2JvdHNcIixcclxuICAgIGJ1dHRvbl9zdGFydDogXCJOb2tsaWvFocS3aW5pZXQsIGxhaSBzxIFrdHUgdmVyaWZpa8SBY2lqdVwiLFxyXG4gICAgdGV4dF9mZXRjaGluZzogXCJOb3RpZWsgZHJvxaHEq2JhcyB1emRldnVtYSBpemfFq8WhYW5hXCIsXHJcbiAgICB0ZXh0X3NvbHZpbmc6IFwiTm90aWVrIHDEgXJiYXVkZSwgdmFpIGVzYXQgY2lsdsSTa3MuLi5cIixcclxuICAgIHRleHRfY29tcGxldGVkOiBcIkVzIGVzbXUgY2lsdsSTa3NcIixcclxuICAgIHRleHRfY29tcGxldGVkX3NyOiBcIkF1dG9txIF0aXNrYSBzdXJvZ8SBdHBhc3RhIHDEgXJiYXVkZSBwYWJlaWd0YVwiLFxyXG4gICAgdGV4dF9leHBpcmVkOiBcIlZlcmlmaWvEgWNpamFzLCBrYSBuZWVzYXQgcm9ib3RzLCBkZXLEq2d1bXMgYmVpZHppZXNcIixcclxuICAgIGJ1dHRvbl9yZXN0YXJ0OiBcIlJlc3RhcnTEk3RcIixcclxuICAgIHRleHRfZXJyb3I6IFwiVmVyaWZpa8SBY2lqYSBuZWl6ZGV2xIFzXCIsXHJcbiAgICBidXR0b25fcmV0cnk6IFwiTcSTxKNpbsSBdCB2xJNscmVpelwiLFxyXG4gICAgdGV4dF9mZXRjaF9lcnJvcjogXCJOZWl6ZGV2xIFzIGl6dmVpZG90IHNhdmllbm9qdW11IGFyXCIsXHJcbn07XHJcbi8vIExpdGh1YW5pYW5cclxuY29uc3QgTEFOR19MVCA9IHtcclxuICAgIHRleHRfaW5pdDogXCJJbmljaWp1b2phbWEuLi5cIixcclxuICAgIHRleHRfcmVhZHk6IFwiUGF0aWtyaW5pbWFzLCBhciBuZXNhdGUgcm9ib3Rhc1wiLFxyXG4gICAgYnV0dG9uX3N0YXJ0OiBcIlNwdXN0ZWzEl2tpdGUgcGF0aWtyaW5pbXVpIHByYWTEl3RpXCIsXHJcbiAgICB0ZXh0X2ZldGNoaW5nOiBcIkdhdmltbyBpxaHFocWra2lzXCIsXHJcbiAgICB0ZXh0X3NvbHZpbmc6IFwiVGlrcmluYW1hLCBhciBlc2F0ZSDFvm1vZ3VzLi4uXCIsXHJcbiAgICB0ZXh0X2NvbXBsZXRlZDogXCJFc3Ugxb5tb2d1c1wiLFxyXG4gICAgdGV4dF9jb21wbGV0ZWRfc3I6IFwiQXV0b21hdGluxJcgcGF0aWtyYSBkxJdsIHBhxaF0byDFoWl1a8WhbGnFsyBhdGxpa3RhXCIsXHJcbiAgICB0ZXh0X2V4cGlyZWQ6IFwiUGF0aWtyaW5pbWFzLCBhciBuZXNhdGUgcm9ib3RhcywgYmFpZ8SXIGdhbGlvdGlcIixcclxuICAgIGJ1dHRvbl9yZXN0YXJ0OiBcIlByYWTEl3RpIGnFoSBuYXVqb1wiLFxyXG4gICAgdGV4dF9lcnJvcjogXCJQYXRpa3JpbmltYXMgbmVwYXZ5a29cIixcclxuICAgIGJ1dHRvbl9yZXRyeTogXCJLYXJ0b3RpXCIsXHJcbiAgICB0ZXh0X2ZldGNoX2Vycm9yOiBcIk5lcGF2eWtvIHByaXNpanVuZ3RpIHByaWVcIixcclxufTtcclxuLy8gUG9saXNoXHJcbmNvbnN0IExBTkdfUEwgPSB7XHJcbiAgICB0ZXh0X2luaXQ6IFwiSW5pY2pvd2FuaWUuLi5cIixcclxuICAgIHRleHRfcmVhZHk6IFwiV2VyeWZpa2FjamEgYW50eWJvdG93YVwiLFxyXG4gICAgYnV0dG9uX3N0YXJ0OiBcIktsaWtuaWosIGFieSByb3pwb2N6xIXEhyB3ZXJ5ZmlrYWNqxJlcIixcclxuICAgIHRleHRfZmV0Y2hpbmc6IFwiUG9iaWVyYW5pZVwiLFxyXG4gICAgdGV4dF9zb2x2aW5nOiBcIldlcnlmaWthY2phLCBjenkgbmllIGplc3RlxZsgcm9ib3RlbS4uLlwiLFxyXG4gICAgdGV4dF9jb21wbGV0ZWQ6IFwiTmllIGplc3RlbSByb2JvdGVtXCIsXHJcbiAgICB0ZXh0X2NvbXBsZXRlZF9zcjogXCJaYWtvxYRjem9ubyBhdXRvbWF0eWN6bmUgc3ByYXdkemFuaWUgc3BhbXVcIixcclxuICAgIHRleHRfZXhwaXJlZDogXCJXZXJ5ZmlrYWNqYSBhbnR5Ym90b3dhIHd5Z2FzxYJhXCIsXHJcbiAgICBidXR0b25fcmVzdGFydDogXCJVcnVjaG9tIHBvbm93bmllXCIsXHJcbiAgICB0ZXh0X2Vycm9yOiBcIldlcnlmaWthY2phIG5pZSBwb3dpb2TFgmEgc2nEmVwiLFxyXG4gICAgYnV0dG9uX3JldHJ5OiBcIlNwcsOzYnVqIHBvbm93bmllXCIsXHJcbiAgICB0ZXh0X2ZldGNoX2Vycm9yOiBcIk5pZSB1ZGHFgm8gc2nEmSBwb8WCxIVjennEhyB6XCIsXHJcbn07XHJcbi8vIEVzdG9uaWFuXHJcbmNvbnN0IExBTkdfRVQgPSB7XHJcbiAgICB0ZXh0X2luaXQ6IFwiSW5pdHNpYWxpc2VlcmltaW5lLi4uXCIsXHJcbiAgICB0ZXh0X3JlYWR5OiBcIlJvYm90aXZhc3RhbmUga2lubml0dXNcIixcclxuICAgIGJ1dHRvbl9zdGFydDogXCJLaW5uaXRhbWlzZWdhIGFsdXN0YW1pc2VrcyBrbMO1cHNha2VcIixcclxuICAgIHRleHRfZmV0Y2hpbmc6IFwiVsOkbGpha3V0c2UgdG9vbWluZVwiLFxyXG4gICAgdGV4dF9zb2x2aW5nOiBcIktpbm5pdGF0YWtzZSwgZXQgc2Egb2xlZCBpbmltZW5lLi4uXCIsXHJcbiAgICB0ZXh0X2NvbXBsZXRlZDogXCJNYSBvbGVuIGluaW1lbmVcIixcclxuICAgIHRleHRfY29tcGxldGVkX3NyOiBcIkF1dG9tYWF0bmUgcsOkbXBzcG9zdGkga29udHJvbGwgb24gbMO1cGV0YXR1ZFwiLFxyXG4gICAgdGV4dF9leHBpcmVkOiBcIlJvYm90aXZhc3RhbmUga2lubml0dXMgYWVndXNcIixcclxuICAgIGJ1dHRvbl9yZXN0YXJ0OiBcIlRhYXNrw6Rpdml0YVwiLFxyXG4gICAgdGV4dF9lcnJvcjogXCJLaW5uaXRhbWluZSBudXJqdXNcIixcclxuICAgIGJ1dHRvbl9yZXRyeTogXCJQcm9vdmkgdXVlc3RpXCIsXHJcbiAgICB0ZXh0X2ZldGNoX2Vycm9yOiBcIsOcaGVuZHVzZSBsb29taW5lIG51cmp1c1wiLFxyXG59O1xyXG4vLyBDcm9hdGlhblxyXG5jb25zdCBMQU5HX0hSID0ge1xyXG4gICAgdGV4dF9pbml0OiBcIlBvxI1ldG5vIHBvc3RhdmxqYW5qZS4uLlwiLFxyXG4gICAgdGV4dF9yZWFkeTogXCJQcm92amVyYSBwcm90aXYgcm9ib3RhXCIsXHJcbiAgICBidXR0b25fc3RhcnQ6IFwiS2xpa25pdGUgemEgcG/EjWV0YWsgcHJvdmplcmVcIixcclxuICAgIHRleHRfZmV0Y2hpbmc6IFwiRG9odmHEh2FuamUgaXphem92YVwiLFxyXG4gICAgdGV4dF9zb2x2aW5nOiBcIlByb3ZqZXJhdmFtbyBqZXN0ZSBsaSDEjW92amVrLi4uXCIsXHJcbiAgICB0ZXh0X2NvbXBsZXRlZDogXCJOaXNhbSByb2JvdFwiLFxyXG4gICAgdGV4dF9jb21wbGV0ZWRfc3I6IFwiQXV0b21hdHNrYSBwcm92amVyYSBqZSB6YXZyxaFlbmFcIixcclxuICAgIHRleHRfZXhwaXJlZDogXCJWcmlqZW1lIHphIHByb3ZqZXJ1IHByb3RpdiByb2JvdGEgamUgaXN0ZWtsb1wiLFxyXG4gICAgYnV0dG9uX3Jlc3RhcnQ6IFwiT3N2amXFvmlcIixcclxuICAgIHRleHRfZXJyb3I6IFwiUHJvdmplcmEgbmlqZSB1c3BqbGVsYVwiLFxyXG4gICAgYnV0dG9uX3JldHJ5OiBcIiBQb25vdm8gcG9rcmVuaVwiLFxyXG4gICAgdGV4dF9mZXRjaF9lcnJvcjogXCJOaWplIG1vZ3XEh2UgdXNwb3N0YXZpdGkgdmV6dVwiLFxyXG59O1xyXG4vLyBTZXJiaWFuXHJcbmNvbnN0IExBTkdfU1IgPSB7XHJcbiAgICB0ZXh0X2luaXQ6IFwiUG9rcmV0YW5qZS4uLlwiLFxyXG4gICAgdGV4dF9yZWFkeTogXCJBbnRpLVJvYm90IFZlcmlmaWthY2lqYVwiLFxyXG4gICAgYnV0dG9uX3N0YXJ0OiBcIktsaWtuaXRlIGRhIGJpc3RlIHphcG/EjWVsaSB2ZXJpZmlrYWNpanVcIixcclxuICAgIHRleHRfZmV0Y2hpbmc6IFwiVcSNaXRhdmFuamUgaXphem92YVwiLFxyXG4gICAgdGV4dF9zb2x2aW5nOiBcIlZlcmlmaWthY2lqYSBkYSBzdGUgxI1vdmVrLi4uXCIsXHJcbiAgICB0ZXh0X2NvbXBsZXRlZDogXCJKYSBzYW0gxI1vdmVrXCIsXHJcbiAgICB0ZXh0X2NvbXBsZXRlZF9zcjogXCJBdXRvbWF0c2thIHByb3ZlcmEgbmXFvmVsamVuZSBwb8WhdGUgamUgemF2csWhZW5hXCIsXHJcbiAgICB0ZXh0X2V4cGlyZWQ6IFwiQW50aS1Sb2JvdCB2ZXJpZmlrYWNpamEgamUgaXN0ZWtsYVwiLFxyXG4gICAgYnV0dG9uX3Jlc3RhcnQ6IFwiUG9ub3ZvIHBva3JlbnV0aVwiLFxyXG4gICAgdGV4dF9lcnJvcjogXCJWZXJpZmlrYWNpamEgbmlqZSB1c3BlbGFcIixcclxuICAgIGJ1dHRvbl9yZXRyeTogXCJQb2t1xaFhanRlIHBvbm92b1wiLFxyXG4gICAgdGV4dF9mZXRjaF9lcnJvcjogXCJOZXVzcGVsbyBwb3Zleml2YW5qZSBzYS4uLlwiLFxyXG59O1xyXG4vLyBTbG92ZW5pYW5cclxuY29uc3QgTEFOR19TTCA9IHtcclxuICAgIHRleHRfaW5pdDogXCJJbmljaWFsaXppcmFuamUuLi5cIixcclxuICAgIHRleHRfcmVhZHk6IFwiUHJldmVyamFuamUgcm9ib3RvdlwiLFxyXG4gICAgYnV0dG9uX3N0YXJ0OiBcIktsaWtuaXRlIHphIHphxI1ldGVrIHByZXZlcmphbmphXCIsXHJcbiAgICB0ZXh0X2ZldGNoaW5nOiBcIlByZW5hxaFhbmplIGl6eml2YVwiLFxyXG4gICAgdGV4dF9zb2x2aW5nOiBcIlByZXZlcmphbW8sIGFsaSBzdGUgxI1sb3Zla1wiLFxyXG4gICAgdGV4dF9jb21wbGV0ZWQ6IFwiTmlzZW0gcm9ib3RcIixcclxuICAgIHRleHRfY29tcGxldGVkX3NyOiBcIkF2dG9tYXRza28gcHJldmVyamFuamUgamUgemFrbGp1xI1lbm9cIixcclxuICAgIHRleHRfZXhwaXJlZDogXCJQcmV2ZXJqYW5qZSByb2JvdG92IGplIHBvdGVrbG9cIixcclxuICAgIGJ1dHRvbl9yZXN0YXJ0OiBcIk9zdmXFvmlcIixcclxuICAgIHRleHRfZXJyb3I6IFwiUHJldmVyamFuamUgbmkgdXNwZWxvXCIsXHJcbiAgICBidXR0b25fcmV0cnk6IFwiUG9za3VzaSBwb25vdm5vXCIsXHJcbiAgICB0ZXh0X2ZldGNoX2Vycm9yOiBcIlBvdmV6YXZlIG5pIGJpbG8gbW9nb8SNZSB2enBvc3Rhdml0aVwiLFxyXG59O1xyXG4vLyBIdW5nYXJpYW5cclxuY29uc3QgTEFOR19IVSA9IHtcclxuICAgIHRleHRfaW5pdDogXCJJbmljaWFsaXrDoWzDoXMuLi5cIixcclxuICAgIHRleHRfcmVhZHk6IFwiUm9ib3RlbGxlbmVzIGVsbGVuxZFyesOpc1wiLFxyXG4gICAgYnV0dG9uX3N0YXJ0OiBcIkthdHRpbnRzb24gYXogZWxsZW7FkXJ6w6lzIG1lZ2tlemTDqXPDqWhlelwiLFxyXG4gICAgdGV4dF9mZXRjaGluZzogXCJGZWxhZHbDoW55IGxla8OpcsOpc2VcIixcclxuICAgIHRleHRfc29sdmluZzogXCJBbm5hayBpZ2F6b2zDoXNhLCBob2d5IMOWbiBuZW0gcm9ib3QuLi5cIixcclxuICAgIHRleHRfY29tcGxldGVkOiBcIk5lbSB2YWd5b2sgcm9ib3RcIixcclxuICAgIHRleHRfY29tcGxldGVkX3NyOiBcIkF1dG9tYXRpa3VzIHNwYW0gZWxsZW7FkXJ6w6lzIGJlZmVqZXrFkWTDtnR0XCIsXHJcbiAgICB0ZXh0X2V4cGlyZWQ6IFwiUm9ib3RlbGxlbmVzIGVsbGVuxZFyesOpcyBsZWrDoXJ0XCIsXHJcbiAgICBidXR0b25fcmVzdGFydDogXCLDmmpyYWluZMOtdMOhc1wiLFxyXG4gICAgdGV4dF9lcnJvcjogXCJBeiBlbGxlbsWRcnrDqXMgbmVtIHNpa2Vyw7xsdFwiLFxyXG4gICAgYnV0dG9uX3JldHJ5OiBcIlByw7Niw6FsamEgw7pqcmFcIixcclxuICAgIHRleHRfZmV0Y2hfZXJyb3I6IFwiTmVtIHNpa2Vyw7xsdCBjc2F0bGFrb3puaVwiLFxyXG59O1xyXG4vLyBSb21hbmlhblxyXG5jb25zdCBMQU5HX1JPID0ge1xyXG4gICAgdGV4dF9pbml0OiBcIlNlIGluacibaWFsaXplYXrEgy4uLlwiLFxyXG4gICAgdGV4dF9yZWFkeTogXCJWZXJpZmljYXJlIGFudGktcm9ib3RcIixcclxuICAgIGJ1dHRvbl9zdGFydDogXCJDbGljayBwZW50cnUgYSDDrm5jZXBlIHZlcmlmaWNhcmVhXCIsXHJcbiAgICB0ZXh0X2ZldGNoaW5nOiBcIkRvd25sb2FkaW5nXCIsXHJcbiAgICB0ZXh0X3NvbHZpbmc6IFwiVmVyaWZpY2FyZSBjxIMgZciZdGkgb20uLi5cIixcclxuICAgIHRleHRfY29tcGxldGVkOiBcIlN1bnQgb21cIixcclxuICAgIHRleHRfY29tcGxldGVkX3NyOiBcIlZlcmlmaWNhcmVhIGF1dG9tYXTEgyBhIHNwYW0tdWx1aSBhIGZvc3QgZmluYWxpemF0xINcIixcclxuICAgIHRleHRfZXhwaXJlZDogXCJWZXJpZmljYXJlYSBhbnRpLXJvYm90IGEgZXhwaXJhdFwiLFxyXG4gICAgYnV0dG9uX3Jlc3RhcnQ6IFwiUmVzdGFydFwiLFxyXG4gICAgdGV4dF9lcnJvcjogXCJWZXJpZmljYXJlIGXImXVhdMSDXCIsXHJcbiAgICBidXR0b25fcmV0cnk6IFwiUmXDrm5jZWFyY8SDXCIsXHJcbiAgICB0ZXh0X2ZldGNoX2Vycm9yOiBcIk51IHMtYSBwdXR1dCBjb25lY3RhXCIsXHJcbn07XHJcbi8vIENoaW5lc2VcclxuY29uc3QgTEFOR19aSCA9IHtcclxuICAgIHRleHRfaW5pdDogXCLliJ3lp4vljJbkuK3igKbigKZcIixcclxuICAgIHRleHRfcmVhZHk6IFwi5Lq65py66aqM6K+BXCIsXHJcbiAgICBidXR0b25fc3RhcnQ6IFwi54K55Ye75byA5aeLXCIsXHJcbiAgICB0ZXh0X2ZldGNoaW5nOiBcIuato+WcqOWKoOi9vVwiLFxyXG4gICAgdGV4dF9zb2x2aW5nOiBcIuS6uuacuuagoemqjOS4reKApuKAplwiLFxyXG4gICAgdGV4dF9jb21wbGV0ZWQ6IFwi5oiR5LiN5piv5py65Zmo5Lq6XCIsXHJcbiAgICB0ZXh0X2NvbXBsZXRlZF9zcjogXCLkurrmnLrpqozor4HlrozmiJBcIixcclxuICAgIHRleHRfZXhwaXJlZDogXCLpqozor4Hlt7Lov4fmnJ9cIixcclxuICAgIGJ1dHRvbl9yZXN0YXJ0OiBcIumHjeaWsOW8gOWni1wiLFxyXG4gICAgdGV4dF9lcnJvcjogXCLmoKHpqozlpLHotKVcIixcclxuICAgIGJ1dHRvbl9yZXRyeTogXCLph43or5VcIixcclxuICAgIHRleHRfZmV0Y2hfZXJyb3I6IFwi5peg5rOV6L+e5o6l5YiwXCIsXHJcbn07XHJcbi8vIFRyYWRpdGlvbmFsIENoaW5lc2VcclxuY29uc3QgTEFOR19aSF9UVyA9IHtcclxuICAgIHRleHRfaW5pdDogXCLmraPlnKjliJ3lp4vljJbigKbigKZcIixcclxuICAgIHRleHRfcmVhZHk6IFwi5Y+N5qmf5Zmo5Lq66amX6K2JXCIsXHJcbiAgICBidXR0b25fc3RhcnQ6IFwi6bue5pOK6ZaL5aeL6amX6K2JXCIsXHJcbiAgICB0ZXh0X2ZldGNoaW5nOiBcIui8ieWFpeS4rVwiLFxyXG4gICAgdGV4dF9zb2x2aW5nOiBcIuWPjeapn+WZqOS6uumpl+itieS4reKApuKAplwiLFxyXG4gICAgdGV4dF9jb21wbGV0ZWQ6IFwi5oiR5LiN5piv5qmf5Zmo5Lq6XCIsXHJcbiAgICB0ZXh0X2NvbXBsZXRlZF9zcjogXCLpqZforYnlrozmiJBcIixcclxuICAgIHRleHRfZXhwaXJlZDogXCLpqZforYnotoXmmYJcIixcclxuICAgIGJ1dHRvbl9yZXN0YXJ0OiBcIumHjeaWsOmWi+Wni1wiLFxyXG4gICAgdGV4dF9lcnJvcjogXCLpqZforYnlpLHmlZdcIixcclxuICAgIGJ1dHRvbl9yZXRyeTogXCLph43oqaZcIixcclxuICAgIHRleHRfZmV0Y2hfZXJyb3I6IFwi54Sh5rOV6YCj57ea5YiwXCIsXHJcbn07XHJcbi8vIFZpZXRuYW1lc2VcclxuY29uc3QgTEFOR19WSSA9IHtcclxuICAgIHRleHRfaW5pdDogXCLEkGFuZyBraOG7n2kgdOG6oW8uLi5cIixcclxuICAgIHRleHRfcmVhZHk6IFwiWMOhYyBtaW5oIGNo4buRbmcgUm9ib3RcIixcclxuICAgIGJ1dHRvbl9zdGFydDogXCJC4bqlbSB2w6BvIMSRw6J5IMSR4buDIHjDoWMgbWluaFwiLFxyXG4gICAgdGV4dF9mZXRjaGluZzogXCJUw6xtIG7huqFwIHbDoCB44butIGzDvSB0aOG7rSB0aMOhY2hcIixcclxuICAgIHRleHRfc29sdmluZzogXCJYw6FjIG1pbmggYuG6oW4gbMOgIG5nxrDhu51pLi4uXCIsXHJcbiAgICB0ZXh0X2NvbXBsZXRlZDogXCJC4bqhbiBsw6AgY29uIG5nxrDhu51pXCIsXHJcbiAgICB0ZXh0X2NvbXBsZXRlZF9zcjogXCJYw6FjIG1pbmggaG/DoG4gdOG6pXRcIixcclxuICAgIHRleHRfZXhwaXJlZDogXCJYw6FjIG1pbmggxJHDoyBo4bq/dCBo4bqhblwiLFxyXG4gICAgYnV0dG9uX3Jlc3RhcnQ6IFwiS2jhu59pIMSR4buZbmcgbOG6oWlcIixcclxuICAgIHRleHRfZXJyb3I6IFwiWMOhYyBtaW5oIHRo4bqldCBi4bqhaVwiLFxyXG4gICAgYnV0dG9uX3JldHJ5OiBcIlRo4butIGzhuqFpXCIsXHJcbiAgICB0ZXh0X2ZldGNoX2Vycm9yOiBcIktow7RuZyBr4bq/dCBu4buRaSDEkcaw4bujY1wiLFxyXG59O1xyXG4vLyBIZWJyZXdcclxuY29uc3QgTEFOR19IRSA9IHtcclxuICAgIHRleHRfaW5pdDogXCLXkdeR15nXpteV16IuLi5cIixcclxuICAgIHRleHRfcmVhZHk6IFwi15DXmdee15XXqiDXkNeg15XXqVwiLFxyXG4gICAgYnV0dG9uX3N0YXJ0OiBcItem16jXmdeaINec15zXl9eV16Ug15zXlNeq15fXnNeqINeU15DXmdee15XXqlwiLFxyXG4gICAgdGV4dF9mZXRjaGluZzogXCLXkNeq15LXqCDXlNee16LXoNeUINeR15TXm9eg15RcIixcclxuICAgIHRleHRfc29sdmluZzogXCLXnteq15HXpteiINeQ15nXnteV16og15DXoNeV16kuLi5cIixcclxuICAgIHRleHRfY29tcGxldGVkOiBcIteQ16DXmSDXnNeQINeo15XXkdeV15hcIixcclxuICAgIHRleHRfY29tcGxldGVkX3NyOiBcIteR15PXmden16og15TXodek15DXnSDXlNeQ15XXmNeV157XmNeZ16og15TXodeq15nXmdee15RcIixcclxuICAgIHRleHRfZXhwaXJlZDogXCLXpNeSINeq15XXp9ejINeQ15nXnteV16og15TXkNeg15XXqVwiLFxyXG4gICAgYnV0dG9uX3Jlc3RhcnQ6IFwi15zXlNeq15fXmdecINep15XXkVwiLFxyXG4gICAgdGV4dF9lcnJvcjogXCLXkNeZ157XldeqINeU15DXoNeV16kg16DXm9ep15xcIixcclxuICAgIGJ1dHRvbl9yZXRyeTogXCLXnNeg16HXldeqINep15XXkVwiLFxyXG4gICAgdGV4dF9mZXRjaF9lcnJvcjogXCLXoNeb16nXnCDXlNeX15nXkdeV16gg15DXnFwiLFxyXG4gICAgcnRsOiB0cnVlLFxyXG59O1xyXG4vLyBUaGFpXHJcbmNvbnN0IExBTkdfVEggPSB7XHJcbiAgICB0ZXh0X2luaXQ6IFwi4LiB4Liy4Lij4LmA4Lij4Li04LmI4Lih4LiV4LmJ4LiZLi4uXCIsXHJcbiAgICB0ZXh0X3JlYWR5OiBcIiDguIHguLLguKPguJXguKPguKfguIjguKrguK3guJrguJXguYjguK3guJXguYnguLLguJnguKvguLjguYjguJnguKLguJnguJXguYxcIixcclxuICAgIGJ1dHRvbl9zdGFydDogXCLguITguKXguLTguIHguYDguJ7guLfguYjguK3guYDguKPguLTguYjguKHguIHguLLguKPguJXguKPguKfguIjguKrguK3guJpcIixcclxuICAgIHRleHRfZmV0Y2hpbmc6IFwi4LiB4Liy4Lij4LiU4Li24LiH4LiE4Lin4Liy4Lih4LiX4LmJ4Liy4LiX4Liy4LiiXCIsXHJcbiAgICB0ZXh0X3NvbHZpbmc6IFwi4Lii4Li34LiZ4Lii4Lix4LiZ4Lin4LmI4Liy4LiE4Li44LiT4LmA4Lib4LmH4LiZ4Lih4LiZ4Li44Lip4Lii4LmMLi4uXCIsXHJcbiAgICB0ZXh0X2NvbXBsZXRlZDogXCLguInguLHguJnguYDguJvguYfguJnguKHguJnguLjguKnguKLguYxcIixcclxuICAgIHRleHRfY29tcGxldGVkX3NyOiBcIuC4geC4suC4o+C4leC4o+C4p+C4iOC4quC4reC4muC4quC5geC4m+C4oeC4reC4seC4leC5guC4meC4oeC4seC4leC4tOC5gOC4quC4o+C5h+C4iOC4quC4oeC4muC4ueC4o+C4k+C5jFwiLFxyXG4gICAgdGV4dF9leHBpcmVkOiBcIuC4geC4suC4o+C4leC4o+C4p+C4iOC4quC4reC4miDguJXguYjguK3guJXguYnguLLguJnguKvguLjguYjguJnguKLguJnguJXguYwg4Lir4Lih4LiU4Lit4Liy4Lii4Li4XCIsXHJcbiAgICBidXR0b25fcmVzdGFydDogXCLguKPguLXguKrguJXguLLguKPguYzguJdcIixcclxuICAgIHRleHRfZXJyb3I6IFwi4LiB4Liy4Lij4Lii4Li34LiZ4Lii4Lix4LiZ4Lil4LmJ4Lih4LmA4Lir4Lil4LinXCIsXHJcbiAgICBidXR0b25fcmV0cnk6IFwi4Lil4Lit4LiH4LmD4Lir4Lih4LmIXCIsXHJcbiAgICB0ZXh0X2ZldGNoX2Vycm9yOiBcIuC5hOC4oeC5iOC4quC4suC4oeC4suC4o+C4luC5gOC4iuC4t+C5iOC4reC4oeC4leC5iOC4reC5hOC4lOC5iVwiXHJcbn07XHJcbi8vIFNvdXRoIEtvcmVhblxyXG5jb25zdCBMQU5HX0tSID0ge1xyXG4gICAgdGV4dF9pbml0OiBcIuy0iOq4sO2ZlCDspJFcIixcclxuICAgIHRleHRfcmVhZHk6IFwiQW50aS1Sb2JvdCDqsoDspp1cIixcclxuICAgIGJ1dHRvbl9zdGFydDogXCLqsoDspp3snYQg7JyE7ZW0IO2BtOumre2VtCDso7zshLjsmpRcIixcclxuICAgIHRleHRfZmV0Y2hpbmc6IFwi6rKA7KadIOykgOu5hCDspJFcIixcclxuICAgIHRleHRfc29sdmluZzogXCLqsoDspp0g7KSRXCIsXHJcbiAgICB0ZXh0X2NvbXBsZXRlZDogXCLqsoDspp3snbQg7JmE66OM65CY7JeI7Iq164uI64ukXCIsXHJcbiAgICB0ZXh0X2NvbXBsZXRlZF9zcjogXCLsnpDrj5kg7Iqk7Yy4IO2ZleyduCDsmYTro4xcIixcclxuICAgIHRleHRfZXhwaXJlZDogXCJBbnRpLVJvYm90IOqygOymnSDrp4zro4xcIixcclxuICAgIGJ1dHRvbl9yZXN0YXJ0OiBcIuuLpOyLnCDsi5zsnpHtlanri4jri6RcIixcclxuICAgIHRleHRfZXJyb3I6IFwi6rKA7KadIOyLpO2MqFwiLFxyXG4gICAgYnV0dG9uX3JldHJ5OiBcIuuLpOyLnCDsi5zrj4TtlbQg7KO87IS47JqUXCIsXHJcbiAgICB0ZXh0X2ZldGNoX2Vycm9yOiBcIuyXsOqysO2VmOyngCDrqrvtlojsirXri4jri6RcIixcclxufTtcclxuLy8gQXJhYmljXHJcbmNvbnN0IExBTkdfQVIgPSB7XHJcbiAgICB0ZXh0X2luaXQ6IFwiLi4u2KfZhNiq2YfZitim2KlcIixcclxuICAgIHRleHRfcmVhZHk6IFwi2YrYqtmFINin2YTYqtit2YLZitmCXCIsXHJcbiAgICBidXR0b25fc3RhcnQ6IFwi2KXYtti62Lcg2YfZhtinINmE2YTYqtit2YLZitmCXCIsXHJcbiAgICB0ZXh0X2ZldGNoaW5nOiBcItiq2YfZitim2Kkg2KfZhNiq2K3Yr9mKXCIsXHJcbiAgICB0ZXh0X3NvbHZpbmc6IFwi2YbYqtit2YLZgiDZhdmGINij2YbZgyDZhNiz2Kog2LHZiNio2YjYqtmL2KcuLi5cIixcclxuICAgIHRleHRfY29tcGxldGVkOiBcItij2YbYpyDZhNiz2Kog2LHZiNio2YjYqtmL2KdcIixcclxuICAgIHRleHRfY29tcGxldGVkX3NyOiBcItiq2YUg2KfZhNin2YbYqtmH2KfYoSDZhdmGINin2YTYqtit2YLZgiDYp9mE2KrZhNmC2KfYptmKINmF2YYg2KfZhNio2LHZitivINin2YTYudi02YjYp9im2YpcIixcclxuICAgIHRleHRfZXhwaXJlZDogXCLYp9mG2KrZh9iqINi12YTYp9it2YrYqSDYp9mE2KrYrdmC2YJcIixcclxuICAgIGJ1dHRvbl9yZXN0YXJ0OiBcItil2LnYp9iv2Kkg2KrYtNi62YrZhFwiLFxyXG4gICAgdGV4dF9lcnJvcjogXCLZgdi02YQg2KfZhNiq2K3ZgtmCXCIsXHJcbiAgICBidXR0b25fcmV0cnk6IFwi2KfYqNiv2KMg2YXYsdipINij2K7YsdmJXCIsXHJcbiAgICB0ZXh0X2ZldGNoX2Vycm9yOiBcItmF2LTZg9mE2Kkg2YHZiiDYp9mE2KfYqti12KfZhCDZhdi5XCIsXHJcbn07XHJcbmNvbnN0IGxvY2FsaXphdGlvbnMgPSB7XHJcbiAgICBlbjogTEFOR19FTixcclxuICAgIGRlOiBMQU5HX0RFLFxyXG4gICAgbmw6IExBTkdfTkwsXHJcbiAgICBmcjogTEFOR19GUixcclxuICAgIGl0OiBMQU5HX0lULFxyXG4gICAgcHQ6IExBTkdfUFQsXHJcbiAgICBlczogTEFOR19FUyxcclxuICAgIGNhOiBMQU5HX0NBLFxyXG4gICAgamE6IExBTkdfSkEsXHJcbiAgICBkYTogTEFOR19EQSxcclxuICAgIHJ1OiBMQU5HX1JVLFxyXG4gICAgc3Y6IExBTkdfU1YsXHJcbiAgICB0cjogTEFOR19UUixcclxuICAgIGVsOiBMQU5HX0VMLFxyXG4gICAgdWs6IExBTkdfVUssXHJcbiAgICBiZzogTEFOR19CRyxcclxuICAgIGNzOiBMQU5HX0NTLFxyXG4gICAgc2s6IExBTkdfU0ssXHJcbiAgICBubzogTEFOR19OTyxcclxuICAgIGZpOiBMQU5HX0ZJLFxyXG4gICAgbHY6IExBTkdfTFYsXHJcbiAgICBsdDogTEFOR19MVCxcclxuICAgIHBsOiBMQU5HX1BMLFxyXG4gICAgZXQ6IExBTkdfRVQsXHJcbiAgICBocjogTEFOR19IUixcclxuICAgIHNyOiBMQU5HX1NSLFxyXG4gICAgc2w6IExBTkdfU0wsXHJcbiAgICBodTogTEFOR19IVSxcclxuICAgIHJvOiBMQU5HX1JPLFxyXG4gICAgemg6IExBTkdfWkgsXHJcbiAgICB6aF90dzogTEFOR19aSF9UVyxcclxuICAgIHZpOiBMQU5HX1ZJLFxyXG4gICAgaGU6IExBTkdfSEUsXHJcbiAgICB0aDogTEFOR19USCxcclxuICAgIGtyOiBMQU5HX0tSLFxyXG4gICAgYXI6IExBTkdfQVIsXHJcbiAgICAvLyBhbHRlcm5hdGl2ZSBsYW5ndWFnZSBjb2Rlc1xyXG4gICAgbmI6IExBTkdfTk8sXHJcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZURpYWdub3N0aWNzQnVmZmVyKHNvbHZlcklELCB0aW1lVG9Tb2x2ZWQpIHtcbiAgICBjb25zdCBhcnIgPSBuZXcgVWludDhBcnJheSgzKTtcbiAgICBjb25zdCB2aWV3ID0gbmV3IERhdGFWaWV3KGFyci5idWZmZXIpO1xuICAgIHZpZXcuc2V0VWludDgoMCwgc29sdmVySUQpO1xuICAgIHZpZXcuc2V0VWludDE2KDEsIHRpbWVUb1NvbHZlZCk7XG4gICAgcmV0dXJuIGFycjtcbn1cblxudmFyIHdvcmtlclN0cmluZyA9IFwiIWZ1bmN0aW9uKCl7XFxcInVzZSBzdHJpY3RcXFwiO2NvbnN0IEE9XFxcIj1cXFwiLmNoYXJDb2RlQXQoMCksST1uZXcgVWludDhBcnJheSgyNTYpO2ZvcihsZXQgQT0wO0E8NjQ7QSsrKUlbXFxcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky9cXFwiLmNoYXJDb2RlQXQoQSldPUE7ZnVuY3Rpb24gZyhBKXtjb25zdCBJPXt9LGc9QS5leHBvcnRzLEM9Zy5tZW1vcnksUT1nLl9fYWxsb2MsdD1nLl9fcmV0YWluLEI9Zy5fX3J0dGlfYmFzZXx8LTE7cmV0dXJuIEkuX19hbGxvY0FycmF5PShBLEkpPT57Y29uc3QgZz1mdW5jdGlvbihBKXtyZXR1cm4gbmV3IFVpbnQzMkFycmF5KEMuYnVmZmVyKVsoQis0Pj4+MikrMipBXX0oQSksZT0zMS1NYXRoLmNsejMyKGc+Pj42JjMxKSxvPUkubGVuZ3RoLGk9UShvPDxlLDApLHI9USgxMixBKSxuPW5ldyBVaW50MzJBcnJheShDLmJ1ZmZlcik7bltyKzA+Pj4yXT10KGkpLG5bcis0Pj4+Ml09aSxuW3IrOD4+PjJdPW88PGU7Y29uc3QgRT1DLmJ1ZmZlcixzPW5ldyBVaW50OEFycmF5KEUpO2lmKDE2Mzg0JmcpZm9yKGxldCBBPTA7QTxvOysrQSlzWyhpPj4+ZSkrQV09dChJW0FdKTtlbHNlIHMuc2V0KEksaT4+PmUpO3JldHVybiByfSxJLl9fZ2V0VWludDhBcnJheT1BPT57Y29uc3QgST1uZXcgVWludDMyQXJyYXkoQy5idWZmZXIpLGc9SVtBKzQ+Pj4yXTtyZXR1cm4gbmV3IFVpbnQ4QXJyYXkoQy5idWZmZXIsZyxJW2ctND4+PjJdPj4+MCl9LGZ1bmN0aW9uKEEsST17fSl7Y29uc3QgZz1BLl9fYXJndW1lbnRzTGVuZ3RoP0k9PntBLl9fYXJndW1lbnRzTGVuZ3RoLnZhbHVlPUl9OkEuX19zZXRBcmd1bWVudHNMZW5ndGh8fEEuX19zZXRhcmdjfHwoKCk9Pih7fSkpO2Zvcihjb25zdCBDIGluIEEpe2lmKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoQSxDKSljb250aW51ZTtjb25zdCBRPUFbQ10sdD1DLnNwbGl0KFxcXCIuXFxcIilbMF07XFxcImZ1bmN0aW9uXFxcIj09dHlwZW9mIFEmJlEhPT1nPyhJW3RdPSguLi5BKT0+KGcoQS5sZW5ndGgpLFEoLi4uQSkpKS5vcmlnaW5hbD1ROklbdF09UX1yZXR1cm4gSX0oZyxJKX1jbGFzcyBDe2NvbnN0cnVjdG9yKEEpe3RoaXMuYj1uZXcgVWludDhBcnJheSgxMjgpLHRoaXMuaD1uZXcgVWludDMyQXJyYXkoMTYpLHRoaXMudD0wLHRoaXMuYz0wLHRoaXMudj1uZXcgVWludDMyQXJyYXkoMzIpLHRoaXMubT1uZXcgVWludDMyQXJyYXkoMzIpLHRoaXMub3V0bGVuPUF9fWZ1bmN0aW9uIFEoQSxJKXtyZXR1cm4gQVtJXV5BW0krMV08PDheQVtJKzJdPDwxNl5BW0krM108PDI0fWZ1bmN0aW9uIHQoQSxJLGcsQyxRLHQsQixlKXtjb25zdCBvPUlbQl0saT1JW0IrMV0scj1JW2VdLG49SVtlKzFdO2xldCBFLHMsdyxhLGM9QVtnXSxEPUFbZysxXSxmPUFbQ10saD1BW0MrMV0seT1BW1FdLGw9QVtRKzFdLHU9QVt0XSxOPUFbdCsxXTtFPWMrZixzPShjJmZ8KGN8ZikmfkUpPj4+MzEsYz1FLEQ9RCtoK3MsRT1jK28scz0oYyZvfChjfG8pJn5FKT4+PjMxLGM9RSxEPUQraStzLHc9dV5jLGE9Tl5ELHU9YSxOPXcsRT15K3Uscz0oeSZ1fCh5fHUpJn5FKT4+PjMxLHk9RSxsPWwrTitzLHc9Zl55LGE9aF5sLGY9dz4+PjI0XmE8PDgsaD1hPj4+MjRedzw8OCxFPWMrZixzPShjJmZ8KGN8ZikmfkUpPj4+MzEsYz1FLEQ9RCtoK3MsRT1jK3Iscz0oYyZyfChjfHIpJn5FKT4+PjMxLGM9RSxEPUQrbitzLHc9dV5jLGE9Tl5ELHU9dz4+PjE2XmE8PDE2LE49YT4+PjE2Xnc8PDE2LEU9eSt1LHM9KHkmdXwoeXx1KSZ+RSk+Pj4zMSx5PUUsbD1sK04rcyx3PWZeeSxhPWhebCxmPWE+Pj4zMV53PDwxLGg9dz4+PjMxXmE8PDEsQVtnXT1jLEFbZysxXT1ELEFbQ109ZixBW0MrMV09aCxBW1FdPXksQVtRKzFdPWwsQVt0XT11LEFbdCsxXT1OfWNvbnN0IEI9WzQwODkyMzU3MjAsMTc3OTAzMzcwMywyMjI3ODczNTk1LDMxNDQxMzQyNzcsNDI3MTE3NTcyMywxMDEzOTA0MjQyLDE1OTU3NTAxMjksMjc3MzQ4MDc2MiwyOTE3NTY1MTM3LDEzNTk4OTMxMTksNzI1NTExMTk5LDI2MDA4MjI5MjQsNDIxNTM4OTU0Nyw1Mjg3MzQ2MzUsMzI3MDMzMjA5LDE1NDE0NTkyMjVdLGU9WzAsMiw0LDYsOCwxMCwxMiwxNCwxNiwxOCwyMCwyMiwyNCwyNiwyOCwzMCwyOCwyMCw4LDE2LDE4LDMwLDI2LDEyLDIsMjQsMCw0LDIyLDE0LDEwLDYsMjIsMTYsMjQsMCwxMCw0LDMwLDI2LDIwLDI4LDYsMTIsMTQsMiwxOCw4LDE0LDE4LDYsMiwyNiwyNCwyMiwyOCw0LDEyLDEwLDIwLDgsMCwzMCwxNiwxOCwwLDEwLDE0LDQsOCwyMCwzMCwyOCwyLDIyLDI0LDEyLDE2LDYsMjYsNCwyNCwxMiwyMCwwLDIyLDE2LDYsOCwyNiwxNCwxMCwzMCwyOCwyLDE4LDI0LDEwLDIsMzAsMjgsMjYsOCwyMCwwLDE0LDEyLDYsMTgsNCwxNiwyMiwyNiwyMiwxNCwyOCwyNCwyLDYsMTgsMTAsMCwzMCw4LDE2LDEyLDQsMjAsMTIsMzAsMjgsMTgsMjIsNiwwLDE2LDI0LDQsMjYsMTQsMiw4LDIwLDEwLDIwLDQsMTYsOCwxNCwxMiwyLDEwLDMwLDIyLDE4LDI4LDYsMjQsMjYsMCwwLDIsNCw2LDgsMTAsMTIsMTQsMTYsMTgsMjAsMjIsMjQsMjYsMjgsMzAsMjgsMjAsOCwxNiwxOCwzMCwyNiwxMiwyLDI0LDAsNCwyMiwxNCwxMCw2XTtmdW5jdGlvbiBvKEEsSSl7Y29uc3QgZz1BLnYsQz1BLm07Zm9yKGxldCBJPTA7STwxNjtJKyspZ1tJXT1BLmhbSV0sZ1tJKzE2XT1CW0ldO2dbMjRdPWdbMjRdXkEudCxnWzI1XT1nWzI1XV5BLnQvNDI5NDk2NzI5NixJJiYoZ1syOF09fmdbMjhdLGdbMjldPX5nWzI5XSk7Zm9yKGxldCBJPTA7STwzMjtJKyspQ1tJXT1RKEEuYiw0KkkpO2ZvcihsZXQgQT0wO0E8MTI7QSsrKXQoZyxDLDAsOCwxNiwyNCxlWzE2KkErMF0sZVsxNipBKzFdKSx0KGcsQywyLDEwLDE4LDI2LGVbMTYqQSsyXSxlWzE2KkErM10pLHQoZyxDLDQsMTIsMjAsMjgsZVsxNipBKzRdLGVbMTYqQSs1XSksdChnLEMsNiwxNCwyMiwzMCxlWzE2KkErNl0sZVsxNipBKzddKSx0KGcsQywwLDEwLDIwLDMwLGVbMTYqQSs4XSxlWzE2KkErOV0pLHQoZyxDLDIsMTIsMjIsMjQsZVsxNipBKzEwXSxlWzE2KkErMTFdKSx0KGcsQyw0LDE0LDE2LDI2LGVbMTYqQSsxMl0sZVsxNipBKzEzXSksdChnLEMsNiw4LDE4LDI4LGVbMTYqQSsxNF0sZVsxNipBKzE1XSk7Zm9yKGxldCBJPTA7STwxNjtJKyspQS5oW0ldPUEuaFtJXV5nW0ldXmdbSSsxNl19ZnVuY3Rpb24gaShBLEkpe2ZvcihsZXQgST0wO0k8MTY7SSsrKUEuaFtJXT1CW0ldO0EuYi5zZXQoSSksQS5oWzBdXj0xNjg0Mjc1Ml5BLm91dGxlbn1hc3luYyBmdW5jdGlvbiByKCl7cmV0dXJuKEEsSSxnPTQyOTQ5NjcyOTUpPT57Y29uc3QgUT1mdW5jdGlvbihBLEksZyl7aWYoMTI4IT1BLmxlbmd0aCl0aHJvdyBFcnJvcihcXFwiSW52YWxpZCBpbnB1dFxcXCIpO2NvbnN0IFE9QS5idWZmZXIsdD1uZXcgRGF0YVZpZXcoUSksQj1uZXcgQygzMik7Qi50PTEyODtjb25zdCBlPXQuZ2V0VWludDMyKDEyNCwhMCkscj1lK2c7Zm9yKGxldCBnPWU7ZzxyO2crKylpZih0LnNldFVpbnQzMigxMjQsZywhMCksaShCLEEpLG8oQiwhMCksQi5oWzBdPEkpcmV0dXJuIDA9PUFTQ19UQVJHRVQ/bmV3IFVpbnQ4QXJyYXkoQi5oLmJ1ZmZlcik6VWludDhBcnJheS53cmFwKEIuaC5idWZmZXIpO3JldHVybiBuZXcgVWludDhBcnJheSgwKX0oQSxJLGcpO3JldHVybltBLFFdfX1sZXQgbixFO1VpbnQ4QXJyYXkucHJvdG90eXBlLnNsaWNlfHxPYmplY3QuZGVmaW5lUHJvcGVydHkoVWludDhBcnJheS5wcm90b3R5cGUsXFxcInNsaWNlXFxcIix7dmFsdWU6ZnVuY3Rpb24oQSxJKXtyZXR1cm4gbmV3IFVpbnQ4QXJyYXkoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGhpcyxBLEkpKX19KSxzZWxmLkFTQ19UQVJHRVQ9MDtjb25zdCBzPW5ldyBQcm9taXNlKChBPT5FPUEpKTtzZWxmLm9uZXJyb3I9QT0+e3NlbGYucG9zdE1lc3NhZ2Uoe3R5cGU6XFxcImVycm9yXFxcIixtZXNzYWdlOkpTT04uc3RyaW5naWZ5KEEpfSl9LHNlbGYub25tZXNzYWdlPWFzeW5jIEM9Pntjb25zdCBRPUMuZGF0YTt0cnl7aWYoXFxcInNvbHZlclxcXCI9PT1RLnR5cGUpe2lmKFEuZm9yY2VKUyl7bj0xO2NvbnN0IEE9YXdhaXQgcigpO0UoQSl9ZWxzZSB0cnl7bj0yO2NvbnN0IEM9V2ViQXNzZW1ibHkuY29tcGlsZShmdW5jdGlvbihnKXtsZXQgQz0zMjg1O2cuY2hhckNvZGVBdCg0Mzc5KT09PUEmJkMtLSxnLmNoYXJDb2RlQXQoNDM3OCk9PT1BJiZDLS07Y29uc3QgUT1uZXcgVWludDhBcnJheShDKTtmb3IobGV0IEE9MCxDPTA7QTw0MzgwO0ErPTQpe2NvbnN0IHQ9SVtnLmNoYXJDb2RlQXQoQSswKV0sQj1JW2cuY2hhckNvZGVBdChBKzEpXSxlPUlbZy5jaGFyQ29kZUF0KEErMildLG89SVtnLmNoYXJDb2RlQXQoQSszKV07UVtDKytdPXQ8PDJ8Qj4+NCxRW0MrK109KDE1JkIpPDw0fGU+PjIsUVtDKytdPSgzJmUpPDw2fDYzJm99cmV0dXJuIFF9KFxcXCJBR0Z6YlFFQUFBQUJLZ2hnQUFCZ0FuOS9BR0FEZjM5L0FYOWdBWDhBWUFSL2YzOS9BR0FBQVg5Z0FYOEJmMkFDZjM4QmZ3SU5BUU5sYm5ZRllXSnZjblFBQkFNTUN3Y0dBd0FBQVFJRkFRSUFCUU1CQUFFR0ZnUi9BVUVBQzM4QlFRQUxmd0JCQXd0L0FFSGdEQXNIYmdrR2JXVnRiM0o1QWdBSFgxOWhiR3h2WXdBQkNGOWZjbVYwWVdsdUFBSUpYMTl5Wld4bFlYTmxBQU1KWDE5amIyeHNaV04wQUFRSFgxOXlaWE5sZEFBRkMxOWZjblIwYVY5aVlYTmxBd01OVldsdWREaEJjbkpoZVY5SlJBTUNESE52YkhabFFteGhhMlV5WWdBS0NBRUxDdlFTQzVJQkFRVi9JQUJCOFAvLy93TkxCRUFBQ3lNQlFSQnFJZ1FnQUVFUGFrRndjU0lDUVJBZ0FrRVFTeHNpQm1vaUFqOEFJZ1ZCRUhRaUEwc0VRQ0FGSUFJZ0EydEIvLzhEYWtHQWdIeHhRUkIySWdNZ0JTQURTaHRBQUVFQVNBUkFJQU5BQUVFQVNBUkFBQXNMQ3lBQ0pBRWdCRUVRYXlJQ0lBWTJBZ0FnQWtFQk5nSUVJQUlnQVRZQ0NDQUNJQUEyQWd3Z0JBc0VBQ0FBQ3dNQUFRc0RBQUVMQmdBakFDUUJDN3NDQVFGL0FrQWdBVVVOQUNBQVFRQTZBQUFnQUNBQmFrRUVheUlDUVFBNkFBTWdBVUVDVFEwQUlBQkJBRG9BQVNBQVFRQTZBQUlnQWtFQU9nQUNJQUpCQURvQUFTQUJRUVpORFFBZ0FFRUFPZ0FESUFKQkFEb0FBQ0FCUVFoTkRRQWdBRUVBSUFCclFRTnhJZ0pxSWdCQkFEWUNBQ0FBSUFFZ0FtdEJmSEVpQW1wQkhHc2lBVUVBTmdJWUlBSkJDRTBOQUNBQVFRQTJBZ1FnQUVFQU5nSUlJQUZCQURZQ0VDQUJRUUEyQWhRZ0FrRVlUUTBBSUFCQkFEWUNEQ0FBUVFBMkFoQWdBRUVBTmdJVUlBQkJBRFlDR0NBQlFRQTJBZ0FnQVVFQU5nSUVJQUZCQURZQ0NDQUJRUUEyQWd3Z0FDQUFRUVJ4UVJocUlnRnFJUUFnQWlBQmF5RUJBMEFnQVVFZ1R3UkFJQUJDQURjREFDQUFRZ0EzQXdnZ0FFSUFOd01RSUFCQ0FEY0RHQ0FCUVNCcklRRWdBRUVnYWlFQURBRUxDd3NMY2dBQ2Z5QUFSUVJBUVF4QkFoQUJJUUFMSUFBTFFRQTJBZ0FnQUVFQU5nSUVJQUJCQURZQ0NDQUJRZkQvLy84RElBSjJTd1JBUWNBS1FmQUtRUkpCT1JBQUFBc2dBU0FDZENJQlFRQVFBU0lDSUFFUUJpQUFLQUlBR2lBQUlBSTJBZ0FnQUNBQ05nSUVJQUFnQVRZQ0NDQUFDODhCQVFKL1FhQUJRUUFRQVNJQVFReEJBeEFCUVlBQlFRQVFCellDQUNBQVFReEJCQkFCUVFoQkF4QUhOZ0lFSUFCQ0FEY0RDQ0FBUVFBMkFoQWdBRUlBTndNWUlBQkNBRGNESUNBQVFnQTNBeWdnQUVJQU53TXdJQUJDQURjRE9DQUFRZ0EzQTBBZ0FFSUFOd05JSUFCQ0FEY0RVQ0FBUWdBM0ExZ2dBRUlBTndOZ0lBQkNBRGNEYUNBQVFnQTNBM0FnQUVJQU53TjRJQUJDQURjRGdBRWdBRUlBTndPSUFTQUFRZ0EzQTVBQlFZQUJRUVVRQVNJQlFZQUJFQVlnQUNBQk5nS1lBU0FBUVNBMkFwd0JJQUFMMkFrQ0EzOFNmaUFBS0FJRUlRSWdBQ2dDbUFFaEF3TkFJQVJCZ0FGSUJFQWdBeUFFYWlBQklBUnFLUU1BTndNQUlBUkJDR29oQkF3QkN3c2dBaWdDQkNrREFDRU1JQUlvQWdRcEF3Z2hEU0FDS0FJRUtRTVFJUTRnQWlnQ0JDa0RHQ0VQSUFJb0FnUXBBeUFoQlNBQ0tBSUVLUU1vSVFzZ0FpZ0NCQ2tETUNFR0lBSW9BZ1FwQXpnaEIwS0lrdk9kLzh6NWhPb0FJUWhDdTg2cXB0alE2N083ZnlFSlFxdncwL1N2N3J5M1BDRVFRdkh0OVBpbHAvMm5wWDhoQ2lBQUtRTUlRdEdGbXUvNno1U0gwUUNGSVJGQ245ajUyY0tSMm9LYmZ5RVNRcFNGK2FYQXlvbStZQ0VUUXZuQytKdVJvN1B3MndBaEZFRUFJUVFEUUNBRVFjQUJTQVJBSUFVZ0NDQVJJQXdnQlNBRElBUkJnQWhxSWdFdEFBQkJBM1JxS1FNQWZId2lCWVZDSUlvaURId2lDSVZDR0lvaUVTQUlJQXdnQlNBUklBTWdBUzBBQVVFRGRHb3BBd0I4ZkNJTWhVSVFpaUlJZkNJVmhVSS9paUVGSUFzZ0NTQVNJQTBnQ3lBRElBRXRBQUpCQTNScUtRTUFmSHdpRFlWQ0lJb2lDWHdpRVlWQ0dJb2hDeUFHSUJBZ0V5QU9JQVlnQXlBQkxRQUVRUU4wYWlrREFIeDhJZ2FGUWlDS0lnNThJaENGUWhpS0loSWdFQ0FPSUFZZ0VpQURJQUV0QUFWQkEzUnFLUU1BZkh3aURvVkNFSW9pRTN3aUVJVkNQNG9oQmlBSElBb2dGQ0FQSUFjZ0F5QUJMUUFHUVFOMGFpa0RBSHg4SWdlRlFpQ0tJZzk4SWdxRlFoaUtJaElnQ2lBUElBY2dFaUFESUFFdEFBZEJBM1JxS1FNQWZId2lENFZDRUlvaUNud2lFb1ZDUDRvaEJ5QVFJQW9nRENBUklBa2dEU0FMSUFNZ0FTMEFBMEVEZEdvcEF3QjhmQ0lOaFVJUWlpSUpmQ0lXSUF1RlFqK0tJZ3dnQXlBQkxRQUlRUU4wYWlrREFIeDhJaENGUWlDS0lncDhJZ3NnRUNBTElBeUZRaGlLSWhFZ0F5QUJMUUFKUVFOMGFpa0RBSHg4SWd3Z0NvVkNFSW9pRkh3aUVDQVJoVUkvaWlFTElBWWdFaUFJSUEwZ0JpQURJQUV0QUFwQkEzUnFLUU1BZkh3aURZVkNJSW9pQ0h3aUNvVkNHSW9pQmlBTklBWWdBeUFCTFFBTFFRTjBhaWtEQUh4OElnMGdDSVZDRUlvaUVTQUtmQ0lLaFVJL2lpRUdJQWNnRlNBSklBNGdCeUFESUFFdEFBeEJBM1JxS1FNQWZId2lEb1ZDSUlvaUNId2lDWVZDR0lvaUJ5QU9JQWNnQXlBQkxRQU5RUU4wYWlrREFIeDhJZzRnQ0lWQ0VJb2lFaUFKZkNJSWhVSS9paUVISUFVZ0ZpQVRJQThnQlNBRElBRXRBQTVCQTNScUtRTUFmSHdpRDRWQ0lJb2lDWHdpRllWQ0dJb2lCU0FQSUFVZ0F5QUJMUUFQUVFOMGFpa0RBSHg4SWc4Z0NZVkNFSW9pRXlBVmZDSUpoVUkvaWlFRklBUkJFR29oQkF3QkN3c2dBaWdDQkNBQ0tBSUVLUU1BSUFnZ0RJV0ZOd01BSUFJb0FnUWdBaWdDQkNrRENDQUpJQTJGaFRjRENDQUNLQUlFSUFJb0FnUXBBeEFnRGlBUWhZVTNBeEFnQWlnQ0JDQUNLQUlFS1FNWUlBb2dENFdGTndNWUlBSW9BZ1FnQWlnQ0JDa0RJQ0FGSUJHRmhUY0RJQ0FDS0FJRUlBSW9BZ1FwQXlnZ0N5QVNoWVUzQXlnZ0FpZ0NCQ0FDS0FJRUtRTXdJQVlnRTRXRk53TXdJQUlvQWdRZ0FpZ0NCQ2tET0NBSElCU0ZoVGNET0NBQUlBdzNBeGdnQUNBTk53TWdJQUFnRGpjREtDQUFJQTgzQXpBZ0FDQUZOd000SUFBZ0N6Y0RRQ0FBSUFZM0EwZ2dBQ0FITndOUUlBQWdDRGNEV0NBQUlBazNBMkFnQUNBUU53Tm9JQUFnQ2pjRGNDQUFJQkUzQTNnZ0FDQVNOd09BQVNBQUlCTTNBNGdCSUFBZ0ZEY0RrQUVMNFFJQkJIOGdBQ2dDQ0VHQUFVY0VRRUhRQ1VHQUNrRWVRUVVRQUFBTElBQW9BZ0FoQkJBSUlnTW9BZ1FoQlNBRFFvQUJOd01JSUFRb0Fud2lBQ0FDYWlFR0EwQWdBQ0FHU1FSQUlBUWdBRFlDZkNBREtBSUVJZ0lvQWdRZ0F5Z0NuQUd0UW9pUzk1WC96UG1FNmdDRk53TUFJQUlvQWdSQ3U4NnFwdGpRNjdPN2Z6Y0RDQ0FDS0FJRVFxdncwL1N2N3J5M1BEY0RFQ0FDS0FJRVF2SHQ5UGlscC8ybnBYODNBeGdnQWlnQ0JFTFJoWnJ2K3MrVWg5RUFOd01nSUFJb0FnUkNuOWo1MmNLUjJvS2JmemNES0NBQ0tBSUVRdXY2aHRxL3RmYkJIemNETUNBQ0tBSUVRdm5DK0p1Um83UHcyd0EzQXpnZ0F5QUVFQWtnQlNnQ0JDa0RBS2NnQVVrRVFFRUFJQVVvQWdBaUFVRVFheWdDRENJQ1N3UkFRZkFMUWJBTVFjME5RUVVRQUFBTFFReEJBeEFCSWdBZ0FUWUNBQ0FBSUFJMkFnZ2dBQ0FCTmdJRUlBQVBDeUFBUVFGcUlRQU1BUXNMUVF4QkF4QUJRUUJCQUJBSEN3d0FRYUFOSkFCQm9BMGtBUXNMK2dRSkFFR0JDQXUvQVFFQ0F3UUZCZ2NJQ1FvTERBME9EdzRLQkFnSkR3MEdBUXdBQWdzSEJRTUxDQXdBQlFJUERRb09Bd1lIQVFrRUJ3a0RBUTBNQ3c0Q0JnVUtCQUFQQ0FrQUJRY0NCQW9QRGdFTERBWUlBdzBDREFZS0FBc0lBd1FOQndVUERnRUpEQVVCRHc0TkJBb0FCd1lEQ1FJSUN3MExCdzRNQVFNSkJRQVBCQWdHQWdvR0R3NEpDd01BQ0F3Q0RRY0JCQW9GQ2dJSUJBY0dBUVVQQ3drT0F3d05BQUFCQWdNRUJRWUhDQWtLQ3d3TkRnOE9DZ1FJQ1E4TkJnRU1BQUlMQndVREFFSEFDUXNwR2dBQUFBRUFBQUFCQUFBQUdnQUFBRWtBYmdCMkFHRUFiQUJwQUdRQUlBQnBBRzRBY0FCMUFIUUFRZkFKQ3pFaUFBQUFBUUFBQUFFQUFBQWlBQUFBY3dCeUFHTUFMd0J6QUc4QWJBQjJBR1VBY2dCWEFHRUFjd0J0QUM0QWRBQnpBRUd3Q2dzckhBQUFBQUVBQUFBQkFBQUFIQUFBQUVrQWJnQjJBR0VBYkFCcEFHUUFJQUJzQUdVQWJnQm5BSFFBYUFCQjRBb0xOU1lBQUFBQkFBQUFBUUFBQUNZQUFBQitBR3dBYVFCaUFDOEFZUUJ5QUhJQVlRQjVBR0lBZFFCbUFHWUFaUUJ5QUM0QWRBQnpBRUdnQ3dzMUpnQUFBQUVBQUFBQkFBQUFKZ0FBQUg0QWJBQnBBR0lBTHdCekFIUUFZUUIwQUdrQVl3QmhBSElBY2dCaEFIa0FMZ0IwQUhNQVFlQUxDek1rQUFBQUFRQUFBQUVBQUFBa0FBQUFTUUJ1QUdRQVpRQjRBQ0FBYndCMUFIUUFJQUJ2QUdZQUlBQnlBR0VBYmdCbkFHVUFRYUFNQ3pNa0FBQUFBUUFBQUFFQUFBQWtBQUFBZmdCc0FHa0FZZ0F2QUhRQWVRQndBR1VBWkFCaEFISUFjZ0JoQUhrQUxnQjBBSE1BUWVBTUN5NEdBQUFBSUFBQUFBQUFBQUFnQUFBQUFBQUFBQ0FBQUFBQUFBQUFZUUFBQUFJQUFBQWhBZ0FBQWdBQUFDUUNcXFwiKSksUT1hd2FpdCBhc3luYyBmdW5jdGlvbihBKXtjb25zdCBJPWF3YWl0IGFzeW5jIGZ1bmN0aW9uKEEpe2NvbnN0IEk9e2Vudjp7YWJvcnQoKXt0aHJvdyBFcnJvcihcXFwiV2FzbSBhYm9ydGVkXFxcIil9fX07cmV0dXJue2V4cG9ydHM6Zyhhd2FpdCBXZWJBc3NlbWJseS5pbnN0YW50aWF0ZShBLEkpKX19KEEpLEM9SS5leHBvcnRzLl9fcmV0YWluKEkuZXhwb3J0cy5fX2FsbG9jQXJyYXkoSS5leHBvcnRzLlVpbnQ4QXJyYXlfSUQsbmV3IFVpbnQ4QXJyYXkoMTI4KSkpO2xldCBRPUkuZXhwb3J0cy5fX2dldFVpbnQ4QXJyYXkoQyk7cmV0dXJuKEEsZyx0PTQyOTQ5NjcyOTUpPT57US5zZXQoQSk7Y29uc3QgQj1JLmV4cG9ydHMuc29sdmVCbGFrZTJiKEMsZyx0KTtRPUkuZXhwb3J0cy5fX2dldFVpbnQ4QXJyYXkoQyk7Y29uc3QgZT1JLmV4cG9ydHMuX19nZXRVaW50OEFycmF5KEIpO3JldHVybiBJLmV4cG9ydHMuX19yZWxlYXNlKEIpLFtRLGVdfX0oYXdhaXQgQyk7RShRKX1jYXRjaChBKXtjb25zb2xlLmxvZyhcXFwiRnJpZW5kbHlDYXB0Y2hhIGZhaWxlZCB0byBpbml0aWFsaXplIFdlYkFzc2VtYmx5LCBmYWxsaW5nIGJhY2sgdG8gSmF2YXNjcmlwdCBzb2x2ZXI6IFxcXCIrQS50b1N0cmluZygpKSxuPTE7Y29uc3QgST1hd2FpdCByKCk7RShJKX1zZWxmLnBvc3RNZXNzYWdlKHt0eXBlOlxcXCJyZWFkeVxcXCIsc29sdmVyOm59KX1lbHNlIGlmKFxcXCJzdGFydFxcXCI9PT1RLnR5cGUpe2NvbnN0IEE9YXdhaXQgcztzZWxmLnBvc3RNZXNzYWdlKHt0eXBlOlxcXCJzdGFydGVkXFxcIn0pO2xldCBJLGc9MDtmb3IobGV0IEM9MDtDPDI1NjtDKyspe1EucHV6emxlU29sdmVySW5wdXRbMTIzXT1DO2NvbnN0W3QsQl09QShRLnB1enpsZVNvbHZlcklucHV0LFEudGhyZXNob2xkKTtpZigwIT09Qi5sZW5ndGgpe0k9dDticmVha31jb25zb2xlLndhcm4oXFxcIkZDOiBJbnRlcm5hbCBlcnJvciBvciBubyBzb2x1dGlvbiBmb3VuZFxcXCIpLGcrPU1hdGgucG93KDIsMzIpLTF9Zys9bmV3IERhdGFWaWV3KEkuc2xpY2UoLTQpLmJ1ZmZlcikuZ2V0VWludDMyKDAsITApLHNlbGYucG9zdE1lc3NhZ2Uoe3R5cGU6XFxcImRvbmVcXFwiLHNvbHV0aW9uOkkuc2xpY2UoLTgpLGg6ZyxwdXp6bGVJbmRleDpRLnB1enpsZUluZGV4LHB1enpsZU51bWJlcjpRLnB1enpsZU51bWJlcn0pfX1jYXRjaChBKXtzZXRUaW1lb3V0KCgoKT0+e3Rocm93IEF9KSl9fX0oKTtcIjtcblxuLy8gRGVmZW5zaXZlIGluaXQgdG8gbWFrZSBpdCBlYXNpZXIgdG8gaW50ZWdyYXRlIHdpdGggR2F0c2J5IGFuZCBmcmllbmRzLlxyXG5sZXQgVVJMO1xyXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgVVJMID0gd2luZG93LlVSTCB8fCB3aW5kb3cud2Via2l0VVJMO1xyXG59XHJcbmNsYXNzIFdvcmtlckdyb3VwIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMud29ya2VycyA9IFtdO1xyXG4gICAgICAgIHRoaXMucHV6emxlTnVtYmVyID0gMDtcclxuICAgICAgICB0aGlzLm51bVB1enpsZXMgPSAwO1xyXG4gICAgICAgIHRoaXMudGhyZXNob2xkID0gMDtcclxuICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IDA7XHJcbiAgICAgICAgdGhpcy5wcm9ncmVzcyA9IDA7XHJcbiAgICAgICAgdGhpcy50b3RhbEhhc2hlcyA9IDA7XHJcbiAgICAgICAgdGhpcy5wdXp6bGVTb2x2ZXJJbnB1dHMgPSBbXTtcclxuICAgICAgICAvLyBUaGUgaW5kZXggb2YgdGhlIG5leHQgcHV6emxlXHJcbiAgICAgICAgdGhpcy5wdXp6bGVJbmRleCA9IDA7XHJcbiAgICAgICAgdGhpcy5zb2x1dGlvbkJ1ZmZlciA9IG5ldyBVaW50OEFycmF5KDApO1xyXG4gICAgICAgIC8vIGluaXRpYWxpemUgc29tZSB2YWx1ZSwgc28gdHMgaXMgaGFwcHlcclxuICAgICAgICB0aGlzLnNvbHZlclR5cGUgPSAxO1xyXG4gICAgICAgIHRoaXMucmVhZHlQcm9taXNlID0gbmV3IFByb21pc2UoKCkgPT4geyB9KTtcclxuICAgICAgICB0aGlzLnJlYWR5Q291bnQgPSAwO1xyXG4gICAgICAgIHRoaXMuc3RhcnRDb3VudCA9IDA7XHJcbiAgICAgICAgdGhpcy5wcm9ncmVzc0NhbGxiYWNrID0gKCkgPT4gMDtcclxuICAgICAgICB0aGlzLnJlYWR5Q2FsbGJhY2sgPSAoKSA9PiAwO1xyXG4gICAgICAgIHRoaXMuc3RhcnRlZENhbGxiYWNrID0gKCkgPT4gMDtcclxuICAgICAgICB0aGlzLmRvbmVDYWxsYmFjayA9ICgpID0+IDA7XHJcbiAgICAgICAgdGhpcy5lcnJvckNhbGxiYWNrID0gKCkgPT4gMDtcclxuICAgIH1cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy50ZXJtaW5hdGVXb3JrZXJzKCk7XHJcbiAgICAgICAgdGhpcy5wcm9ncmVzcyA9IDA7XHJcbiAgICAgICAgdGhpcy50b3RhbEhhc2hlcyA9IDA7XHJcbiAgICAgICAgbGV0IHNldFJlYWR5O1xyXG4gICAgICAgIHRoaXMucmVhZHlQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IChzZXRSZWFkeSA9IHJlc29sdmUpKTtcclxuICAgICAgICB0aGlzLnJlYWR5Q291bnQgPSAwO1xyXG4gICAgICAgIHRoaXMuc3RhcnRDb3VudCA9IDA7XHJcbiAgICAgICAgLy8gU2V0dXAgZm91ciB3b3JrZXJzIGZvciBub3cgLSBsYXRlciB3ZSBjb3VsZCBjYWxjdWxhdGUgdGhpcyBkZXBlbmRpbmcgb24gdGhlIGRldmljZVxyXG4gICAgICAgIHRoaXMud29ya2VycyA9IG5ldyBBcnJheSg0KTtcclxuICAgICAgICBjb25zdCB3b3JrZXJCbG9iID0gbmV3IEJsb2IoW3dvcmtlclN0cmluZ10sIHsgdHlwZTogXCJ0ZXh0L2phdmFzY3JpcHRcIiB9KTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMud29ya2Vycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLndvcmtlcnNbaV0gPSBuZXcgV29ya2VyKFVSTC5jcmVhdGVPYmplY3RVUkwod29ya2VyQmxvYikpO1xyXG4gICAgICAgICAgICB0aGlzLndvcmtlcnNbaV0ub25lcnJvciA9IChlKSA9PiB0aGlzLmVycm9yQ2FsbGJhY2soZSk7XHJcbiAgICAgICAgICAgIHRoaXMud29ya2Vyc1tpXS5vbm1lc3NhZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGUuZGF0YTtcclxuICAgICAgICAgICAgICAgIGlmICghZGF0YSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS50eXBlID09PSBcInJlYWR5XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlYWR5Q291bnQrKztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNvbHZlclR5cGUgPSBkYXRhLnNvbHZlcjtcclxuICAgICAgICAgICAgICAgICAgICAvLyBXZSBhcmUgcmVhZHksIHdoZW4gYWxsIHdvcmtlcnMgYXJlIHJlYWR5XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucmVhZHlDb3VudCA9PSB0aGlzLndvcmtlcnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFJlYWR5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVhZHlDYWxsYmFjaygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGRhdGEudHlwZSA9PT0gXCJzdGFydGVkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0Q291bnQrKztcclxuICAgICAgICAgICAgICAgICAgICAvLyBXZSBzdGFydGVkLCB3aGVuIHRoZSBmaXJzdCB3b3JrZXIgc3RhcnRzIHdvcmtpbmdcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGFydENvdW50ID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFydFRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0ZWRDYWxsYmFjaygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGRhdGEudHlwZSA9PT0gXCJkb25lXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5wdXp6bGVOdW1iZXIgIT09IHRoaXMucHV6emxlTnVtYmVyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47IC8vIHNvbHV0aW9uIGJlbG9uZ3MgdG8gYSBwcmV2aW91cyBwdXp6bGVcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wdXp6bGVJbmRleCA8IHRoaXMucHV6emxlU29sdmVySW5wdXRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndvcmtlcnNbaV0ucG9zdE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzdGFydFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHV6emxlU29sdmVySW5wdXQ6IHRoaXMucHV6emxlU29sdmVySW5wdXRzW3RoaXMucHV6emxlSW5kZXhdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyZXNob2xkOiB0aGlzLnRocmVzaG9sZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB1enpsZUluZGV4OiB0aGlzLnB1enpsZUluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHV6emxlTnVtYmVyOiB0aGlzLnB1enpsZU51bWJlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHV6emxlSW5kZXgrKztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9ncmVzcysrO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG90YWxIYXNoZXMgKz0gZGF0YS5oO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NDYWxsYmFjayh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG46IHRoaXMubnVtUHV6emxlcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaDogdGhpcy50b3RhbEhhc2hlcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdDogKERhdGUubm93KCkgLSB0aGlzLnN0YXJ0VGltZSkgLyAxMDAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpOiB0aGlzLnByb2dyZXNzLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc29sdXRpb25CdWZmZXIuc2V0KGRhdGEuc29sdXRpb24sIGRhdGEucHV6emxlSW5kZXggKiA4KTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBXZSBhcmUgZG9uZSwgd2hlbiBhbGwgcHV6emxlcyBoYXZlIGJlZW4gc29sdmVkXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvZ3Jlc3MgPT0gdGhpcy5udW1QdXp6bGVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvdGFsVGltZSA9IChEYXRlLm5vdygpIC0gdGhpcy5zdGFydFRpbWUpIC8gMTAwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb25lQ2FsbGJhY2soe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc29sdXRpb246IHRoaXMuc29sdXRpb25CdWZmZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoOiB0aGlzLnRvdGFsSGFzaGVzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdDogdG90YWxUaW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlhZ25vc3RpY3M6IGNyZWF0ZURpYWdub3N0aWNzQnVmZmVyKHRoaXMuc29sdmVyVHlwZSwgdG90YWxUaW1lKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvbHZlcjogdGhpcy5zb2x2ZXJUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChkYXRhLnR5cGUgPT09IFwiZXJyb3JcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JDYWxsYmFjayhkYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzZXR1cFNvbHZlcihmb3JjZUpTID0gZmFsc2UpIHtcclxuICAgICAgICBjb25zdCBtc2cgPSB7IHR5cGU6IFwic29sdmVyXCIsIGZvcmNlSlM6IGZvcmNlSlMgfTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMud29ya2Vycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLndvcmtlcnNbaV0ucG9zdE1lc3NhZ2UobXNnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhc3luYyBzdGFydChwdXp6bGUpIHtcclxuICAgICAgICBhd2FpdCB0aGlzLnJlYWR5UHJvbWlzZTtcclxuICAgICAgICB0aGlzLnB1enpsZVNvbHZlcklucHV0cyA9IGdldFB1enpsZVNvbHZlcklucHV0cyhwdXp6bGUuYnVmZmVyLCBwdXp6bGUubik7XHJcbiAgICAgICAgdGhpcy5zb2x1dGlvbkJ1ZmZlciA9IG5ldyBVaW50OEFycmF5KDggKiBwdXp6bGUubik7XHJcbiAgICAgICAgdGhpcy5udW1QdXp6bGVzID0gcHV6emxlLm47XHJcbiAgICAgICAgdGhpcy50aHJlc2hvbGQgPSBwdXp6bGUudGhyZXNob2xkO1xyXG4gICAgICAgIHRoaXMucHV6emxlSW5kZXggPSAwO1xyXG4gICAgICAgIHRoaXMucHV6emxlTnVtYmVyKys7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLndvcmtlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucHV6emxlSW5kZXggPT09IHRoaXMucHV6emxlU29sdmVySW5wdXRzLmxlbmd0aClcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB0aGlzLndvcmtlcnNbaV0ucG9zdE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJzdGFydFwiLFxyXG4gICAgICAgICAgICAgICAgcHV6emxlU29sdmVySW5wdXQ6IHRoaXMucHV6emxlU29sdmVySW5wdXRzW2ldLFxyXG4gICAgICAgICAgICAgICAgdGhyZXNob2xkOiB0aGlzLnRocmVzaG9sZCxcclxuICAgICAgICAgICAgICAgIHB1enpsZUluZGV4OiB0aGlzLnB1enpsZUluZGV4LFxyXG4gICAgICAgICAgICAgICAgcHV6emxlTnVtYmVyOiB0aGlzLnB1enpsZU51bWJlcixcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMucHV6emxlSW5kZXgrKztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB0ZXJtaW5hdGVXb3JrZXJzKCkge1xyXG4gICAgICAgIGlmICh0aGlzLndvcmtlcnMubGVuZ3RoID09IDApXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMud29ya2Vycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLndvcmtlcnNbaV0udGVybWluYXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMud29ya2VycyA9IFtdO1xyXG4gICAgfVxyXG59XG5cbmNvbnN0IFBVWlpMRV9FTkRQT0lOVF9VUkwgPSBcImh0dHBzOi8vYXBpLmZyaWVuZGx5Y2FwdGNoYS5jb20vYXBpL3YxL3B1enpsZVwiO1xyXG5jbGFzcyBXaWRnZXRJbnN0YW5jZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBvcHRpb25zID0ge30pIHtcclxuICAgICAgICB0aGlzLndvcmtlckdyb3VwID0gbmV3IFdvcmtlckdyb3VwKCk7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIGNhcHRjaGEgaGFzIGJlZW4gc3VjY2VzZnVsbHkgc29sdmVkLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMudmFsaWQgPSBmYWxzZTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTb21lIGVycm9ycyBtYXkgY2F1c2UgYSBuZWVkIGZvciB0aGUgKHdvcmtlcikgdG8gYmUgcmVpbml0aWFsaXplZC4gSWYgdGhpcyBpc1xyXG4gICAgICAgICAqIHRydWUgYGluaXRgIHdpbGwgYmUgY2FsbGVkIGFnYWluIHdoZW4gc3RhcnQgaXMgY2FsbGVkLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMubmVlZHNSZUluaXQgPSBmYWxzZTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTdGFydCgpIGhhcyBiZWVuIGNhbGxlZCBhdCBsZWFzdCBvbmNlIGV2ZXIuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5oYXNCZWVuU3RhcnRlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaGFzQmVlbkRlc3Ryb3llZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMub3B0cyA9IE9iamVjdC5hc3NpZ24oe1xyXG4gICAgICAgICAgICBmb3JjZUpTRmFsbGJhY2s6IGZhbHNlLFxyXG4gICAgICAgICAgICBza2lwU3R5bGVJbmplY3Rpb246IGZhbHNlLFxyXG4gICAgICAgICAgICBzdGFydE1vZGU6IFwiZm9jdXNcIixcclxuICAgICAgICAgICAgcHV6emxlRW5kcG9pbnQ6IGVsZW1lbnQuZGF0YXNldFtcInB1enpsZUVuZHBvaW50XCJdIHx8IFBVWlpMRV9FTkRQT0lOVF9VUkwsXHJcbiAgICAgICAgICAgIHN0YXJ0ZWRDYWxsYmFjazogKCkgPT4gMCxcclxuICAgICAgICAgICAgcmVhZHlDYWxsYmFjazogKCkgPT4gMCxcclxuICAgICAgICAgICAgZG9uZUNhbGxiYWNrOiAoKSA9PiAwLFxyXG4gICAgICAgICAgICBlcnJvckNhbGxiYWNrOiAoKSA9PiAwLFxyXG4gICAgICAgICAgICBzaXRla2V5OiBlbGVtZW50LmRhdGFzZXRbXCJzaXRla2V5XCJdIHx8IFwiXCIsXHJcbiAgICAgICAgICAgIGxhbmd1YWdlOiBlbGVtZW50LmRhdGFzZXRbXCJsYW5nXCJdIHx8IFwiZW5cIixcclxuICAgICAgICAgICAgc29sdXRpb25GaWVsZE5hbWU6IGVsZW1lbnQuZGF0YXNldFtcInNvbHV0aW9uRmllbGROYW1lXCJdIHx8IFwiZnJjLWNhcHRjaGEtc29sdXRpb25cIixcclxuICAgICAgICAgICAgc3R5bGVOb25jZTogbnVsbCxcclxuICAgICAgICB9LCBvcHRpb25zKTtcclxuICAgICAgICB0aGlzLmUgPSBlbGVtZW50O1xyXG4gICAgICAgIHRoaXMuZS5mcmllbmRseUNoYWxsZW5nZVdpZGdldCA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5sb2FkTGFuZ3VhZ2UoKTtcclxuICAgICAgICAvLyBAdHMtaWdub3JlIElnbm9yZSBpcyByZXF1aXJlZCBhcyBUUyB0aGlua3MgdGhhdCBgdGhpcy5sYW5nYCBpcyBub3QgYXNzaWduZWQgeWV0LCBidXQgaXQgaGFwcGVucyBpbiBgdGhpcy5sb2FkTGFuZ3VhZ2UoKWAgYWJvdmUuXHJcbiAgICAgICAgZWxlbWVudC5pbm5lclRleHQgPSB0aGlzLmxhbmcudGV4dF9pbml0O1xyXG4gICAgICAgIGlmICghdGhpcy5vcHRzLnNraXBTdHlsZUluamVjdGlvbikge1xyXG4gICAgICAgICAgICBpbmplY3RTdHlsZSh0aGlzLm9wdHMuc3R5bGVOb25jZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaW5pdCh0aGlzLm9wdHMuc3RhcnRNb2RlID09PSBcImF1dG9cIiB8fCB0aGlzLmUuZGF0YXNldFtcInN0YXJ0XCJdID09PSBcImF1dG9cIik7XHJcbiAgICB9XHJcbiAgICBpbml0KGZvcmNlU3RhcnQpIHtcclxuICAgICAgICBpZiAodGhpcy5oYXNCZWVuRGVzdHJveWVkKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGcmllbmRseUNhcHRjaGEgd2lkZ2V0IGhhcyBiZWVuIGRlc3Ryb3llZCB1c2luZyBkZXN0cm95KCksIGl0IGNhbiBub3QgYmUgdXNlZCBhbnltb3JlLlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmluaXRXb3JrZXJHcm91cCgpO1xyXG4gICAgICAgIGlmIChmb3JjZVN0YXJ0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5lLmRhdGFzZXRbXCJzdGFydFwiXSAhPT0gXCJub25lXCIgJiZcclxuICAgICAgICAgICAgKHRoaXMub3B0cy5zdGFydE1vZGUgPT09IFwiZm9jdXNcIiB8fCB0aGlzLmUuZGF0YXNldFtcInN0YXJ0XCJdID09PSBcImZvY3VzXCIpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm0gPSBmaW5kUGFyZW50Rm9ybUVsZW1lbnQodGhpcy5lKTtcclxuICAgICAgICAgICAgaWYgKGZvcm0pIHtcclxuICAgICAgICAgICAgICAgIGV4ZWN1dGVPbmNlT25Gb2N1c0luRXZlbnQoZm9ybSwgKCkgPT4gdGhpcy5zdGFydCgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRnJpZW5kbHlDYXB0Y2hhIGRpdiBzZWVtcyBub3QgdG8gYmUgY29udGFpbmVkIGluIGEgZm9ybSwgYXV0b3N0YXJ0IHdpbGwgbm90IHdvcmtcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIExvYWRzIHRoZSBjb25maWd1cmVkIGxhbmd1YWdlLCBvciBhIGxhbmd1YWdlIHBhc3NlZCB0byB0aGlzIGZ1bmN0aW9uLlxyXG4gICAgICogTm90ZSB0aGF0IG9ubHkgdGhlIG5leHQgdXBkYXRlIHdpbGwgYmUgaW4gdGhlIG5ldyBsYW5ndWFnZSwgY29uc2lkZXIgY2FsbGluZyBgcmVzZXQoKWAgYWZ0ZXIgc3dpdGNoaW5nIGxhbmd1YWdlcy5cclxuICAgICAqL1xyXG4gICAgbG9hZExhbmd1YWdlKGxhbmcpIHtcclxuICAgICAgICBpZiAobGFuZyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3B0cy5sYW5ndWFnZSA9IGxhbmc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuZS5kYXRhc2V0W1wibGFuZ1wiXSkge1xyXG4gICAgICAgICAgICB0aGlzLm9wdHMubGFuZ3VhZ2UgPSB0aGlzLmUuZGF0YXNldFtcImxhbmdcIl07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRzLmxhbmd1YWdlID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIGxldCBsYW5nQ29kZSA9IHRoaXMub3B0cy5sYW5ndWFnZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICBsZXQgbCA9IGxvY2FsaXphdGlvbnNbbGFuZ0NvZGVdO1xyXG4gICAgICAgICAgICBpZiAobCA9PT0gdW5kZWZpbmVkICYmIGxhbmdDb2RlWzJdID09PSBcIi1cIikge1xyXG4gICAgICAgICAgICAgICAgLy8gTGFuZ3VhZ2UgaGFzIGEgbG9jYWxlICctJyBzZXBhcmF0b3IsIHJlbW92ZSBpdCBhbmQgdHJ5IGFnYWluXHJcbiAgICAgICAgICAgICAgICBsYW5nQ29kZSA9IGxhbmdDb2RlLnN1YnN0cmluZygwLCAyKTtcclxuICAgICAgICAgICAgICAgIGwgPSBsb2NhbGl6YXRpb25zW2xhbmdDb2RlXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdGcmllbmRseUNhcHRjaGE6IGxhbmd1YWdlIFwiJyArIHRoaXMub3B0cy5sYW5ndWFnZSArICdcIiBub3QgZm91bmQuJyk7XHJcbiAgICAgICAgICAgICAgICAvLyBGYWxsIGJhY2sgdG8gRW5nbGlzaFxyXG4gICAgICAgICAgICAgICAgbCA9IGxvY2FsaXphdGlvbnMuZW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5sYW5nID0gbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIFdlIGFzc2lnbiB0byBhIGNvcHkgb2YgdGhlIEVuZ2xpc2ggbGFuZ3VhZ2UgbG9jYWxpemF0aW9uLCBzbyB0aGF0IGFueSBtaXNzaW5nIHZhbHVlcyB3aWxsIGJlIEVuZ2xpc2hcclxuICAgICAgICAgICAgdGhpcy5sYW5nID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBsb2NhbGl6YXRpb25zLmVuKSwgdGhpcy5vcHRzLmxhbmd1YWdlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEFkZCBhIGxpc3RlbmVyIHRvIHRoZSBidXR0b24gdGhhdCBjYWxscyBgdGhpcy5zdGFydGAgb24gY2xpY2suXHJcbiAgICAgKi9cclxuICAgIG1ha2VCdXR0b25TdGFydCgpIHtcclxuICAgICAgICBjb25zdCBiID0gdGhpcy5lLnF1ZXJ5U2VsZWN0b3IoXCJidXR0b25cIik7XHJcbiAgICAgICAgaWYgKGIpIHtcclxuICAgICAgICAgICAgYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHRoaXMuc3RhcnQoKSwgeyBvbmNlOiB0cnVlLCBwYXNzaXZlOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICBiLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIChlKSA9PiB0aGlzLnN0YXJ0KCksIHsgb25jZTogdHJ1ZSwgcGFzc2l2ZTogdHJ1ZSB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBvbldvcmtlckVycm9yKGUpIHtcclxuICAgICAgICB0aGlzLmhhc0JlZW5TdGFydGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5uZWVkc1JlSW5pdCA9IHRydWU7XHJcbiAgICAgICAgaWYgKHRoaXMuZXhwaXJ5VGltZW91dClcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZXhwaXJ5VGltZW91dCk7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIltGUkNdXCIsIGUpO1xyXG4gICAgICAgIHRoaXMuZS5pbm5lckhUTUwgPSBnZXRFcnJvckhUTUwodGhpcy5vcHRzLnNvbHV0aW9uRmllbGROYW1lLCB0aGlzLmxhbmcsIFwiQmFja2dyb3VuZCB3b3JrZXIgZXJyb3IgXCIgKyBlLm1lc3NhZ2UpO1xyXG4gICAgICAgIHRoaXMubWFrZUJ1dHRvblN0YXJ0KCk7XHJcbiAgICAgICAgLy8gSnVzdCBvdXQgb2YgcHJlY2F1dGlvblxyXG4gICAgICAgIHRoaXMub3B0cy5mb3JjZUpTRmFsbGJhY2sgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgaW5pdFdvcmtlckdyb3VwKCkge1xyXG4gICAgICAgIHRoaXMud29ya2VyR3JvdXAucHJvZ3Jlc3NDYWxsYmFjayA9IChwcm9ncmVzcykgPT4ge1xyXG4gICAgICAgICAgICB1cGRhdGVQcm9ncmVzc0Jhcih0aGlzLmUsIHByb2dyZXNzKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMud29ya2VyR3JvdXAucmVhZHlDYWxsYmFjayA9ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5lLmlubmVySFRNTCA9IGdldFJlYWR5SFRNTCh0aGlzLm9wdHMuc29sdXRpb25GaWVsZE5hbWUsIHRoaXMubGFuZyk7XHJcbiAgICAgICAgICAgIHRoaXMubWFrZUJ1dHRvblN0YXJ0KCk7XHJcbiAgICAgICAgICAgIHRoaXMub3B0cy5yZWFkeUNhbGxiYWNrKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLndvcmtlckdyb3VwLnN0YXJ0ZWRDYWxsYmFjayA9ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5lLmlubmVySFRNTCA9IGdldFJ1bm5pbmdIVE1MKHRoaXMub3B0cy5zb2x1dGlvbkZpZWxkTmFtZSwgdGhpcy5sYW5nKTtcclxuICAgICAgICAgICAgdGhpcy5vcHRzLnN0YXJ0ZWRDYWxsYmFjaygpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy53b3JrZXJHcm91cC5kb25lQ2FsbGJhY2sgPSAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzb2x1dGlvblBheWxvYWQgPSB0aGlzLmhhbmRsZURvbmUoZGF0YSk7XHJcbiAgICAgICAgICAgIHRoaXMub3B0cy5kb25lQ2FsbGJhY2soc29sdXRpb25QYXlsb2FkKTtcclxuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSB0aGlzLmUuZGF0YXNldFtcImNhbGxiYWNrXCJdO1xyXG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvd1tjYWxsYmFja10oc29sdXRpb25QYXlsb2FkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy53b3JrZXJHcm91cC5lcnJvckNhbGxiYWNrID0gKGUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vbldvcmtlckVycm9yKGUpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy53b3JrZXJHcm91cC5pbml0KCk7XHJcbiAgICAgICAgdGhpcy53b3JrZXJHcm91cC5zZXR1cFNvbHZlcih0aGlzLm9wdHMuZm9yY2VKU0ZhbGxiYWNrKTtcclxuICAgIH1cclxuICAgIGV4cGlyZSgpIHtcclxuICAgICAgICB0aGlzLmhhc0JlZW5TdGFydGVkID0gZmFsc2U7XHJcbiAgICAgICAgLy8gTm9kZS5pc0Nvbm5lY3RlZCB3aWxsIGJlIHVuZGVmaW5lZCBpbiBvbGRlciBicm93c2Vyc1xyXG4gICAgICAgIGlmICh0aGlzLmUuaXNDb25uZWN0ZWQgIT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZS5pbm5lckhUTUwgPSBnZXRFeHBpcmVkSFRNTCh0aGlzLm9wdHMuc29sdXRpb25GaWVsZE5hbWUsIHRoaXMubGFuZyk7XHJcbiAgICAgICAgICAgIHRoaXMubWFrZUJ1dHRvblN0YXJ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXN5bmMgc3RhcnQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaGFzQmVlbkRlc3Ryb3llZCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQ2FuIG5vdCBzdGFydCBGcmllbmRseUNhcHRjaGEgd2lkZ2V0IHdoaWNoIGhhcyBiZWVuIGRlc3Ryb3llZFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5oYXNCZWVuU3RhcnRlZCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJDYW4gbm90IHN0YXJ0IEZyaWVuZGx5Q2FwdGNoYSB3aWRnZXQgd2hpY2ggaGFzIGFscmVhZHkgYmVlbiBzdGFydGVkXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHNpdGVrZXkgPSB0aGlzLm9wdHMuc2l0ZWtleSB8fCB0aGlzLmUuZGF0YXNldFtcInNpdGVrZXlcIl07XHJcbiAgICAgICAgaWYgKCFzaXRla2V5KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGcmllbmRseUNhcHRjaGE6IHNpdGVrZXkgbm90IHNldCBvbiBmcmMtY2FwdGNoYSBlbGVtZW50XCIpO1xyXG4gICAgICAgICAgICB0aGlzLmUuaW5uZXJIVE1MID0gZ2V0RXJyb3JIVE1MKHRoaXMub3B0cy5zb2x1dGlvbkZpZWxkTmFtZSwgdGhpcy5sYW5nLCBcIldlYnNpdGUgcHJvYmxlbTogc2l0ZWtleSBub3Qgc2V0XCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNIZWFkbGVzcygpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZS5pbm5lckhUTUwgPSBnZXRFcnJvckhUTUwodGhpcy5vcHRzLnNvbHV0aW9uRmllbGROYW1lLCB0aGlzLmxhbmcsIFwiQnJvd3NlciBjaGVjayBmYWlsZWQsIHRyeSBhIGRpZmZlcmVudCBicm93c2VyXCIsIGZhbHNlLCB0cnVlKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5uZWVkc1JlSW5pdCkge1xyXG4gICAgICAgICAgICB0aGlzLm5lZWRzUmVJbml0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdCh0cnVlKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmhhc0JlZW5TdGFydGVkID0gdHJ1ZTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB0aGlzLmUuaW5uZXJIVE1MID0gZ2V0RmV0Y2hpbmdIVE1MKHRoaXMub3B0cy5zb2x1dGlvbkZpZWxkTmFtZSwgdGhpcy5sYW5nKTtcclxuICAgICAgICAgICAgdGhpcy5wdXp6bGUgPSBkZWNvZGVCYXNlNjRQdXp6bGUoYXdhaXQgZ2V0UHV6emxlKHRoaXMub3B0cy5wdXp6bGVFbmRwb2ludCwgc2l0ZWtleSwgdGhpcy5sYW5nKSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmV4cGlyeVRpbWVvdXQpXHJcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5leHBpcnlUaW1lb3V0KTtcclxuICAgICAgICAgICAgdGhpcy5leHBpcnlUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLmV4cGlyZSgpLCB0aGlzLnB1enpsZS5leHBpcnkgLSAzMDAwMCk7IC8vIDMwcyBncmFjZVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiW0ZSQ11cIiwgZSk7XHJcbiAgICAgICAgICAgIHRoaXMuaGFzQmVlblN0YXJ0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZXhwaXJ5VGltZW91dClcclxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmV4cGlyeVRpbWVvdXQpO1xyXG4gICAgICAgICAgICB0aGlzLmUuaW5uZXJIVE1MID0gZ2V0RXJyb3JIVE1MKHRoaXMub3B0cy5zb2x1dGlvbkZpZWxkTmFtZSwgdGhpcy5sYW5nLCBlLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB0aGlzLm1ha2VCdXR0b25TdGFydCgpO1xyXG4gICAgICAgICAgICBjb25zdCBjb2RlID0gXCJlcnJvcl9nZXR0aW5nX3B1enpsZVwiO1xyXG4gICAgICAgICAgICB0aGlzLm9wdHMuZXJyb3JDYWxsYmFjayh7IGNvZGUsIGRlc2NyaXB0aW9uOiBlLnRvU3RyaW5nKCksIGVycm9yOiBlIH0pO1xyXG4gICAgICAgICAgICBjb25zdCBjYWxsYmFjayA9IHRoaXMuZS5kYXRhc2V0W1wiY2FsbGJhY2stZXJyb3JcIl07XHJcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgd2luZG93W2NhbGxiYWNrXSh0aGlzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF3YWl0IHRoaXMud29ya2VyR3JvdXAuc3RhcnQodGhpcy5wdXp6bGUpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIGlzIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSBwdXp6bGUgaGFzIGJlZW4gc3VjY2VzZnVsbHkgY29tcGxldGVkLlxyXG4gICAgICogSGVyZSB0aGUgaGlkZGVuIGZpZWxkIGdldHMgdXBkYXRlZCB3aXRoIHRoZSBzb2x1dGlvbi5cclxuICAgICAqIEBwYXJhbSBkYXRhIG1lc3NhZ2UgZnJvbSB0aGUgd2Vid29ya2VyXHJcbiAgICAgKi9cclxuICAgIGhhbmRsZURvbmUoZGF0YSkge1xyXG4gICAgICAgIHRoaXMudmFsaWQgPSB0cnVlO1xyXG4gICAgICAgIGNvbnN0IHB1enpsZVNvbHV0aW9uTWVzc2FnZSA9IGAke3RoaXMucHV6emxlLnNpZ25hdHVyZX0uJHt0aGlzLnB1enpsZS5iYXNlNjR9LiR7ZW5jb2RlKGRhdGEuc29sdXRpb24pfS4ke2VuY29kZShkYXRhLmRpYWdub3N0aWNzKX1gO1xyXG4gICAgICAgIHRoaXMuZS5pbm5lckhUTUwgPSBnZXREb25lSFRNTCh0aGlzLm9wdHMuc29sdXRpb25GaWVsZE5hbWUsIHRoaXMubGFuZywgcHV6emxlU29sdXRpb25NZXNzYWdlLCBkYXRhKTtcclxuICAgICAgICAvLyB0aGlzLndvcmtlciA9IG51bGw7IC8vIFRoaXMgbGl0ZXJhbGx5IGNyYXNoZXMgdmVyeSBvbGQgYnJvd3NlcnMuLlxyXG4gICAgICAgIHRoaXMubmVlZHNSZUluaXQgPSB0cnVlO1xyXG4gICAgICAgIHJldHVybiBwdXp6bGVTb2x1dGlvbk1lc3NhZ2U7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENsZWFucyB1cCB0aGUgd2lkZ2V0IGVudGlyZWx5LCByZW1vdmluZyBhbnkgRE9NIGVsZW1lbnRzIGFuZCB0ZXJtaW5hdGluZyBhbnkgYmFja2dyb3VuZCB3b3JrZXJzLlxyXG4gICAgICogQWZ0ZXIgaXQgaXMgZGVzdHJveWVkIGl0IGNhbiBubyBsb25nZXIgYmUgdXNlZCBmb3IgYW55IHB1cnBvc2UuXHJcbiAgICAgKi9cclxuICAgIGRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy53b3JrZXJHcm91cC50ZXJtaW5hdGVXb3JrZXJzKCk7XHJcbiAgICAgICAgdGhpcy5uZWVkc1JlSW5pdCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaGFzQmVlblN0YXJ0ZWQgPSBmYWxzZTtcclxuICAgICAgICBpZiAodGhpcy5leHBpcnlUaW1lb3V0KVxyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5leHBpcnlUaW1lb3V0KTtcclxuICAgICAgICBpZiAodGhpcy5lKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtaWdub3JlXHJcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5oYXNCZWVuRGVzdHJveWVkID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogUmVzZXRzIHRoZSB3aWRnZXQgdG8gdGhlIGluaXRpYWwgc3RhdGUuXHJcbiAgICAgKiBUaGlzIGlzIHVzZWZ1bCBpbiBzaXR1YXRpb25zIHdoZXJlIHRoZSBwYWdlIGRvZXMgbm90IHJlZnJlc2ggd2hlbiB5b3Ugc3VibWl0IGFuZCB0aGUgZm9ybSBtYXkgYmUgcmUtc3VibWl0dGVkIGFnYWluXHJcbiAgICAgKi9cclxuICAgIHJlc2V0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmhhc0JlZW5EZXN0cm95ZWQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZyaWVuZGx5Q2FwdGNoYSB3aWRnZXQgaGFzIGJlZW4gZGVzdHJveWVkLCBpdCBjYW4gbm90IGJlIHVzZWQgYW55bW9yZVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLndvcmtlckdyb3VwLnRlcm1pbmF0ZVdvcmtlcnMoKTtcclxuICAgICAgICB0aGlzLm5lZWRzUmVJbml0ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5oYXNCZWVuU3RhcnRlZCA9IGZhbHNlO1xyXG4gICAgICAgIGlmICh0aGlzLmV4cGlyeVRpbWVvdXQpXHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmV4cGlyeVRpbWVvdXQpO1xyXG4gICAgICAgIHRoaXMuaW5pdCh0aGlzLm9wdHMuc3RhcnRNb2RlID09PSBcImF1dG9cIiB8fCB0aGlzLmUuZGF0YXNldFtcInN0YXJ0XCJdID09PSBcImF1dG9cIik7XHJcbiAgICB9XHJcbn1cblxuZXhwb3J0IHsgV2lkZ2V0SW5zdGFuY2UsIGxvY2FsaXphdGlvbnMgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuIiwiY29uc3QgeyBhcHBseUZpbHRlcnMgfSA9IEpldFBsdWdpbnMuaG9va3M7XHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXNcclxuaW1wb3J0IHsgV2lkZ2V0SW5zdGFuY2UgfSBmcm9tICdmcmllbmRseS1jaGFsbGVuZ2UnO1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSBvYnNlcnZhYmxlIHtPYnNlcnZhYmxlfVxyXG4gKi9cclxuZnVuY3Rpb24gb2JzZXJ2YWJsZUhhbmRsZSggb2JzZXJ2YWJsZSApIHtcclxuXHRpZiAoIG9ic2VydmFibGUucGFyZW50ICkge1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQHR5cGUge251bGx8SW5wdXREYXRhfVxyXG5cdCAqL1xyXG5cdGNvbnN0IHRva2VuICAgICA9IG9ic2VydmFibGUuZ2V0SW5wdXQoICdfY2FwdGNoYV90b2tlbicgKTtcclxuXHRjb25zdCBmb3JtSUQgICAgPSBvYnNlcnZhYmxlLmdldFN1Ym1pdCgpLmdldEZvcm1JZCgpO1xyXG5cdGNvbnN0IGNvbnRhaW5lciA9IHRva2VuPy5ub2Rlcz8uWyAwIF0/Lm5leHRFbGVtZW50U2libGluZztcclxuXHJcblx0bGV0IG9wdGlvbnMgPSAoXHJcblx0XHR3aW5kb3c/LkpldEZvcm1CdWlsZGVyQ2FwdGNoYUNvbmZpZz8uWyBmb3JtSUQgXSA/PyBmYWxzZVxyXG5cdCk7XHJcblxyXG5cdGlmICggIWNvbnRhaW5lciB8fCAhb3B0aW9ucyApIHtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdC8vIGZvciBjb3JyZWN0IGFwcGx5aW5nIHZhbGlkYXRpb24gbG9naWNzXHJcblx0dG9rZW4uaXNWaXNpYmxlID0gKCkgPT4gdHJ1ZTtcclxuXHJcblx0b3B0aW9ucyA9IHtcclxuXHRcdC4uLm9wdGlvbnMsXHJcblx0XHRkb25lQ2FsbGJhY2soIHJlc3BvbnNlSGFzaCApIHtcclxuXHRcdFx0dG9rZW4udmFsdWUuY3VycmVudCA9IHJlc3BvbnNlSGFzaDtcclxuXHRcdFx0dG9rZW4ubG9hZGluZy5lbmQoKTtcclxuXHRcdH0sXHJcblx0XHRzdGFydGVkQ2FsbGJhY2s6ICgpID0+IHRva2VuLmxvYWRpbmcuc3RhcnQoKSxcclxuXHRcdGVycm9yQ2FsbGJhY2s6ICgpID0+IHRva2VuLmxvYWRpbmcuZW5kKCksXHJcblx0fTtcclxuXHJcblx0b3B0aW9ucyA9IGFwcGx5RmlsdGVycyhcclxuXHRcdCdqZXQuZmIuZnJpZW5kbHlDYXB0Y2hhLm9wdGlvbnMnLFxyXG5cdFx0b3B0aW9ucyxcclxuXHRcdG9ic2VydmFibGUsXHJcblx0KTtcclxuXHJcblx0Y29uc3Qgd2lkZ2V0ID0gbmV3IFdpZGdldEluc3RhbmNlKCBjb250YWluZXIsIG9wdGlvbnMgKTtcclxuXHJcblx0b2JzZXJ2YWJsZS5nZXRTdWJtaXQoKS5zdWJtaXR0ZXI/LnN0YXR1cz8ud2F0Y2g/LiggKCkgPT4ge1xyXG5cdFx0d2lkZ2V0LnJlc2V0KCk7XHJcblx0XHR0b2tlbi5vbkNsZWFyKCk7XHJcblx0fSApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBvYnNlcnZhYmxlSGFuZGxlOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IG9ic2VydmFibGVIYW5kbGUgZnJvbSAnLi9vYnNlcnZhYmxlSGFuZGxlJztcclxuXHJcbmNvbnN0IHsgYWRkQWN0aW9uIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xyXG5cclxuYWRkQWN0aW9uKFxyXG5cdCdqZXQuZmIub2JzZXJ2ZS5hZnRlcicsXHJcblx0J2pldC1mb3JtLWJ1aWxkZXIvZnJpZW5kbHkuY2FwdGNoYScsXHJcblx0b2JzZXJ2YWJsZUhhbmRsZSxcclxuKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=