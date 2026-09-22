/**
 * @param formula
 * @param root    {Observable}
 * @class
 */
import applyFilters from './applyFilters';
import getFilters from './getFilters';
import attachConstNamespace from './attachConstNamespace';
import InputData from '../inputs/InputData';
import { __, sprintf } from '@wordpress/i18n';

const {
	      applyFilters: wpFilters,
	      addFilter,
      } = JetPlugins.hooks;

addFilter(
	'jet.fb.custom.formula.macro',
	'jet-form-builder',
	attachConstNamespace,
);

// Matches a string that is *entirely* consumed by a single numeric literal
// (optionally signed, optionally decimal, optionally scientific notation) -
// no leftover characters allowed. Used by calculateEvalString() to decide
// whether a substituted value may be emitted as a bare numeric literal
// instead of a JSON-quoted string.
const NUMERIC_LITERAL_RE = /^[+-]?(\d+\.?\d*|\.\d+)([eE][+-]?\d+)?$/;

const REGEX_PRECEDING_KEYWORDS = [
	'await',
	'break',
	'case',
	'continue',
	'debugger',
	'delete',
	'do',
	'else',
	'in',
	'instanceof',
	'new',
	'of',
	'return',
	'throw',
	'typeof',
	'void',
	'yield',
];

// Control-statement headers whose parenthesized condition/expression is
// immediately followed by a statement - e.g. `if (...)/re/.test(x)`. A `)`
// that closes one of these is a statement boundary, not the end of a call
// or grouping expression, so `/` right after it still starts a regex
// literal rather than being parsed as division.
const REGEX_PRECEDING_PAREN_KEYWORDS = [
	'if',
	'while',
	'for',
	'switch',
	'catch',
	'with',
];

// Marks an identifier that was immediately preceded by `.` (a member
// name, e.g. the `return` in `foo.return`) so canStartRegexLiteral() can
// tell it apart from the `return` *keyword*. This uses a control character
// (never produced by consuming ordinary formula punctuation/identifiers) as
// the prefix, rather than `.` itself: a bare `.` is itself a valid,
// complete previousSignificant value (e.g. the last `.` of the spread
// operator `...`, or a dangling `.` before whitespace), and prefixing with
// `.` would make that bare token indistinguishable from "member access in
// progress", wrongly routing `/` after `...` through the member-access
// (division) branch instead of recognizing it as a regex opener.
const MEMBER_NAME_PREFIX = '\u0000';

function canStartRegexLiteral( previousSignificant, precedingParenKeyword ) {
	if ( previousSignificant.startsWith( MEMBER_NAME_PREFIX ) ) {
		// A member name (`foo.return`, `foo.new`, ...) reads like a regex-
		// preceding keyword by spelling alone, but it's a property access
		// result, so `/` after it divides - same as after any other value.
		return false;
	}

	if ( ')' === previousSignificant ) {
		return REGEX_PRECEDING_PAREN_KEYWORDS.includes( precedingParenKeyword );
	}

	// `++`/`--` are postfix operators: `x++ /2` divides, it doesn't open a
	// regex, even though the trailing `+`/`-` alone would normally signal
	// the start of an expression.
	if ( '++' === previousSignificant || '--' === previousSignificant ) {
		return false;
	}

	// `...` (spread/rest) always expects an expression next, so `/`
	// immediately after it unambiguously opens a regex literal - unlike a
	// bare, incomplete `.`, which is handled by the fallthrough below.
	if ( '...' === previousSignificant ) {
		return true;
	}

	// `}` is ambiguous in general JS grammar (it can close a block
	// statement, where `/` starts a regex, or an object literal /
	// destructuring pattern, where `/` divides), and a real parser would
	// be needed to fully disambiguate it. Since this heuristic only exists
	// to decide how untrusted macro values get escaped before reaching
	// `new Function()`, the safe default on that ambiguity is to treat `/`
	// as opening a regex: over-escaping a value as regex content when the
	// author actually meant division fails a formula loudly (caught by
	// calculate()'s try/catch), whereas under-escaping it as a string
	// leaves a code-injection path open.
	return !previousSignificant
		|| REGEX_PRECEDING_KEYWORDS.includes( previousSignificant )
		|| /[([{:;,=!?&|+\-*%~^<>}]/.test( previousSignificant );
}

function updatePreviousSignificant( previousSignificant, current, sawWhitespaceSinceSignificant = false ) {
	if ( /[\w$]/.test( current ) ) {
		if ( !sawWhitespaceSinceSignificant
			&& /^[A-Za-z_$][\w$]*$/.test( previousSignificant )
		) {
			return previousSignificant + current;
		}

		if ( '.' === previousSignificant ) {
			return MEMBER_NAME_PREFIX + current;
		}

		if ( previousSignificant.startsWith( MEMBER_NAME_PREFIX )
			&& /^[\w$]*$/.test( previousSignificant.slice( 1 ) )
		) {
			return previousSignificant + current;
		}
	}

	// Track `++`/`--` as a pair so canStartRegexLiteral() can tell the
	// postfix-increment/decrement operator apart from a single unary
	// `+`/`-`, which affects whether a following `/` divides or opens a
	// regex literal.
	if ( ( '+' === current || '-' === current ) && current === previousSignificant ) {
		return current + current;
	}

	// Track the spread/rest operator `...` as a single accumulated token,
	// same as `++`/`--` above: a bare `.` alone is ambiguous (it could be
	// the start of a not-yet-typed member access), but `...` is a complete,
	// unambiguous Ellipsis punctuator - the `/` immediately after it always
	// opens a regex literal (a spread always expects an expression next),
	// never division.
	if ( '.' === current
		&& ( '.' === previousSignificant || '..' === previousSignificant )
	) {
		return previousSignificant + current;
	}

	return current;
}

/**
 * Tracks the lexical context of the trusted formula text surrounding a macro.
 * Macro values need a different representation inside a string literal than
 * they do in JavaScript code: inserting a complete JSON literal into
 * `'%field%'` would insert its quotes into the already-open literal.
 *
 * This intentionally only follows literal boundaries. Formula syntax itself
 * remains author-provided code; this is solely used to encode untrusted macro
 * values before they reach `new Function()`.
 *
 * @return {{ consume: (function(string): string), getState: (function(): string), isEscaped: (function(): boolean) }}
 */
/* eslint-disable max-depth, max-lines-per-function */
function createFormulaLexicalContext() {
	let state = 'code';
	let escaped = false;
	let literalReturnState = 'code';
	let commentReturnState = 'code';
	const templateExpressionDepths = [];
	const templateReturnStates = [];
	let regexCharacterClass = false;
	let regexReturnState = 'code';
	let previousSignificant = '';
	// The significant token *before* previousSignificant - only needed to
	// recognize the two-word `for await (` header (async iteration), where
	// the word immediately before `(` is `await`, not `for`.
	let wordBeforePrevious = '';
	// Tracks whether whitespace was seen since previousSignificant was last
	// set, so a new identifier starting right after whitespace can be told
	// apart from one continuing straight off punctuation (e.g. `.foo`).
	let sawWhitespaceSinceSignificant = false;
	// Stack of `(` groupings in code/template-expression contexts, tracking
	// which keyword (if any) preceded each one - so that when the matching
	// `)` is reached, canStartRegexLiteral() can tell a control-statement
	// header apart from a call or grouping expression.
	const parenKeywordStack = [];
	let precedingParenKeyword = '';

	return {
		consume( value ) {
			value = String( value );
			let normalized = '';

			for ( let index = 0; index < value.length; index++ ) {
				const current = value[ index ];
				const next    = value[ index + 1 ];

				if ( !escaped
					&& [ 'single', 'double', 'template' ].includes( state )
					&& ( '\r' === current || '\n' === current )
				) {
					normalized += '\\n';

					if ( '\r' === current && '\n' === next ) {
						index++;
					}
					continue;
				}

				normalized += current;

				if ( escaped ) {
					escaped = false;
					continue;
				}

				if ( 'line-comment' === state ) {
					if ( '\r' === current || '\n' === current ) {
						state = commentReturnState;
					}
					continue;
				}

				if ( 'block-comment' === state ) {
					if ( '*' === current && '/' === next ) {
						state = commentReturnState;
						normalized += next;
						index++;
					}
					continue;
				}

				if ( [ 'single', 'double', 'template' ].includes( state )
					&& '\\' === current
				) {
					escaped = true;
					continue;
				}

				if ( 'single' === state ) {
					if ( '\'' === current ) {
						state = literalReturnState;
						previousSignificant = 'value';
					}
					continue;
				}

				if ( 'double' === state ) {
					if ( '"' === current ) {
						state = literalReturnState;
						previousSignificant = 'value';
					}
					continue;
				}

				if ( 'template' === state ) {
					if ( '`' === current ) {
						state = templateReturnStates.pop() ?? 'code';
						previousSignificant = 'value';
					}
					else if ( '$' === current && '{' === next ) {
						state = 'template-expression';
						templateExpressionDepths.push( 1 );
						previousSignificant = '';
						normalized += next;
						index++;
					}
					continue;
				}

				if ( 'regex' === state ) {
					if ( '\\' === current ) {
						escaped = true;
					}
					else if ( '[' === current ) {
						regexCharacterClass = true;
					}
					else if ( ']' === current ) {
						regexCharacterClass = false;
					}
					else if ( '/' === current && !regexCharacterClass ) {
						state = regexReturnState;
						previousSignificant = 'value';
					}
					continue;
				}

				if ( [ 'code', 'template-expression' ].includes( state )
					&& '/' === current
					&& [ '/', '*' ].includes( next )
				) {
					commentReturnState = state;
					state = '/' === next ? 'line-comment' : 'block-comment';
					normalized += next;
					index++;
					continue;
				}

				if ( [ 'code', 'template-expression' ].includes( state )
					&& '/' === current
					&& canStartRegexLiteral( previousSignificant, precedingParenKeyword )
				) {
					regexReturnState = state;
					regexCharacterClass = false;
					state = 'regex';
					continue;
				}

				if ( [ 'code', 'template-expression' ].includes( state )
					&& '(' === current
				) {
					// `for await (` (async iteration) has `await` - not
					// `for` - as the word immediately before `(`; look one
					// word further back so its `)` is still recognized as
					// a control-statement boundary, same as plain `for (`.
					const isForAwait = 'await' === previousSignificant
						&& 'for' === wordBeforePrevious;

					parenKeywordStack.push(
						isForAwait
							? 'for'
							: ( REGEX_PRECEDING_PAREN_KEYWORDS.includes( previousSignificant )
								? previousSignificant
								: '' )
					);
				}
				else if ( [ 'code', 'template-expression' ].includes( state )
					&& ')' === current
				) {
					precedingParenKeyword = parenKeywordStack.pop() ?? '';
				}

				if ( 'template-expression' === state ) {
					if ( '\'' === current || '"' === current ) {
						literalReturnState = state;
						state = '\'' === current ? 'single' : 'double';
					}
					else if ( '`' === current ) {
						templateReturnStates.push( state );
						state = 'template';
					}
					else if ( '{' === current ) {
						templateExpressionDepths[
							templateExpressionDepths.length - 1
						]++;
					}
					else if ( '}' === current ) {
						const depthIndex = templateExpressionDepths.length - 1;

						if ( 0 === --templateExpressionDepths[ depthIndex ] ) {
							templateExpressionDepths.pop();
							state = 'template';
						}
					}
					else if ( !/\s/.test( current ) ) {
						if ( sawWhitespaceSinceSignificant
							&& /[A-Za-z_$]/.test( current )
						) {
							wordBeforePrevious = previousSignificant;
						}

						previousSignificant = updatePreviousSignificant(
							previousSignificant,
							current,
							sawWhitespaceSinceSignificant,
						);
						sawWhitespaceSinceSignificant = false;
					}
					else {
						sawWhitespaceSinceSignificant = true;
					}
					continue;
				}

				if ( '\'' === current ) {
					literalReturnState = state;
					state = 'single';
				}
				else if ( '"' === current ) {
					literalReturnState = state;
					state = 'double';
				}
				else if ( '`' === current ) {
					templateReturnStates.push( state );
					state = 'template';
				}
				else if ( !/\s/.test( current ) ) {
						if ( sawWhitespaceSinceSignificant
							&& /[A-Za-z_$]/.test( current )
						) {
							wordBeforePrevious = previousSignificant;
						}

						previousSignificant = updatePreviousSignificant(
							previousSignificant,
							current,
							sawWhitespaceSinceSignificant,
						);
						sawWhitespaceSinceSignificant = false;
					}
					else {
						sawWhitespaceSinceSignificant = true;
					}
				}

				return normalized;
			},
			getState() {
				return state;
			},
			isEscaped() {
				return escaped;
			},
			isInRegexCharacterClass() {
				return regexCharacterClass;
			},
		};
}
/* eslint-enable max-depth, max-lines-per-function */

function escapeMacroForStringLiteral( result, state, hasPendingEscape = false ) {
	const stringResult = String( result );

	if ( hasPendingEscape ) {
		if ( !stringResult.length ) {
			return '\n';
		}

		return 'u' + stringResult.charCodeAt( 0 ).toString( 16 ).padStart( 4, '0' )
			+ escapeMacroForStringLiteral( stringResult.slice( 1 ), state );
	}

	let escaped = JSON.stringify( stringResult ).slice( 1, -1 );

	if ( 'single' === state ) {
		escaped = escaped.replace( /'/g, "\\'" );
	}

	if ( 'template' === state ) {
		// Escape every `$`, not just `${` pairs found inside this one macro
		// value: a value ending in `$` would otherwise recombine with a
		// `{` from the immediately following *static* formula text into a
		// live template-expression opener.
		escaped = escaped
			.replace( /`/g, '\\`' )
			.replace( /\$/g, '\\$' );
	}

	return escaped;
}

const HTML_ESCAPE_MAP = {
	'&': '&amp;',
	'<': '&lt;',
	'>': '&gt;',
	'"': '&quot;',
	'\'': '&#039;',
};

function escapeMacroForHtml( result ) {
	return String( result ).replace( /[&<>"']/g, char => HTML_ESCAPE_MAP[ char ] );
}

function escapeMacroForRegexLiteral( result, hasPendingEscape = false, inCharacterClass = false ) {
	const stringResult = String( result );

	if ( hasPendingEscape ) {
		if ( !stringResult.length ) {
			return 'u0000';
		}

		return 'u' + stringResult.charCodeAt( 0 ).toString( 16 ).padStart( 4, '0' )
			+ escapeMacroForRegexLiteral( stringResult.slice( 1 ), false, inCharacterClass );
	}

	// Inside a character class (`[...]`), `-` denotes a range (e.g. `a-z`)
	// rather than a literal character, and `]`/`^` carry class-specific
	// meaning that the outside-class escape set below doesn't cover.
	const escaped = inCharacterClass
		? stringResult.replace( /[\\^\]-]/g, '\\$&' )
		: stringResult.replace( /[\\^$.*+?()[\]{}|/]/g, '\\$&' );

	return escaped
		.replace( /\r/g, '\\r' )
		.replace( /\n/g, '\\n' )
		.replace( /\u2028/g, '\\u2028' )
		.replace( /\u2029/g, '\\u2029' );
}


function getOptionLabelFromNode(node) {
	if (!node) {
		return '';
	}
	if (node.tagName === 'SELECT') {
		return Array.from(node.selectedOptions || [])
			.map(option => String(
				option.label || option.textContent || option.value || ''
			).trim())
			.filter(Boolean)
			.join(', ');
	}
	if (
		(node.type === 'checkbox' || node.type === 'radio') &&
		!node.checked
	) {
		return '';
	}
	if (node.type === 'checkbox' || node.type === 'radio') {
		const label = node.closest('label');
		if (!label) {
			return '';
		}
		const textNode = label.querySelector('span');
		return String(
			textNode?.textContent || label.textContent || node.value || ''
		).trim();
	}
	return '';
}

function getRelatedInputOptionLabel(relatedInput) {
	const labels = Array.from(relatedInput.nodes || [])
		.map(getOptionLabelFromNode)
		.filter(Boolean);
	return labels.length
		? labels.join(', ')
		: relatedInput.value.current;
}

/**
 * @param root    {InputData|Observable}
 * @param options {{forceFunction: boolean}}
 */
function CalculatedFormula(
	root,
	options = {},
) {
	this.parts        = [];
	this.related      = [];
	this.relatedAttrs = [];
	this.regexp       = /%([\w\-].*?\S?)%/g;
	this.watchers     = [];

	const { forceFunction = false } = options;

	this.forceFunction = forceFunction;

	if ( root instanceof InputData ) {
		this.input = root;
	}

	this.root = this.input?.root ?? root;
}

CalculatedFormula.prototype = {
	// raw value
	formula: null,
	parts: [],
	related: [],
	relatedAttrs: [],
	/**
	 * @type {InputData}
	 */
	input: null,
	/**
	 * @type {Observable|ObservableRow}
	 */
	root: null,
	/**
	 * @type {RegExp}
	 */
	regexp: null,
	forceFunction: false,
	/**
	 * @type {Function}
	 */
	setResult: () => {
		throw new Error( 'CalculatedFormula.setResult is not set!' );
	},
	/**
	 *
	 * @param  relatedInput {InputData}
	 * @return {*}
	 */
	relatedCallback( relatedInput ) {
		return relatedInput.value.current;
	},
	relatedLabelCallback(relatedInput) {
		return getRelatedInputOptionLabel(relatedInput);
	},
	/**
	 *
	 * @param value
	 */
	observe( value ) {

		this.formula = value;

		if ( !Array.isArray( value ) ) {
			this.observeItem( value );

			return;
		}

		value.forEach( item => {
			this.observeItem( item );
		} );
	},
	/**
	 * @private
	 * @param value {String}
	 */
	observeItem( value ) {

		let match;
		let prevIndex = 0;

		value += '';

		while ( (
			match = this.regexp.exec( value )
		) !== null ) {
			const part = this.observeMacro( match[ 1 ] );

			if ( 0 !== match.index ) {
				this.parts.push( value.slice( prevIndex, match.index ) );
			}

			prevIndex = match.index + match[ 0 ].length;

			if ( false === part ) {
				this.onMissingPart( match[ 0 ] );
			}
			else {
				this.parts.push( part );
			}
		}

		// save last part
		if ( prevIndex === value.length ) {
			return;
		}

		this.parts.push( value.slice( prevIndex ) );

		if ( 1 === this.parts.length ) {
			this.parts = [];
		}
	},
	/**
	 * @param inputMatch {String}
	 */
	onMissingPart( inputMatch ) {
		this.parts.push( inputMatch );
	},
	/**
	 * @param fieldName {String}
	 */
	isFieldNodeExists( fieldName ) {

		const isFieldNode = this.root.dataInputs[ fieldName ];

		if ( undefined === isFieldNode ) {
			return false;
		}

		/**
		 * Check if the specified node exists in the rootNode.
		 * If the node does not exist, analyze the formula to determine an adjusted value
		 * based on the operators surrounding the placeholder.
		 * @since 3.4.5
		 *
		 * @see https://github.com/Crocoblock/issues-tracker/issues/11786
		 */
		let existNode =
			this.root.rootNode[ fieldName ]
			|| this.root.rootNode[ fieldName + '[]' ]
			|| this.root.rootNode.querySelectorAll( '[data-field-name="' + fieldName + '"]' );

		/**
		 * When we call querySelectorAll it returns empty NodeList array if the element not found, so we need to reset it
		 */
		if ( existNode && 0 === existNode.length ) {
			existNode = undefined;
		}

		/**
		 * @see https://github.com/Crocoblock/issues-tracker/issues/14544
		 */
		if ( undefined === existNode ) {
			const esc = s => s.replace(/([\\^$*+?.()|{}\[\]])/g, '\\$1');
			const f = esc( fieldName );

			const selector =
				`[name$="[${f}]"],` +
				`[name$="[${f}][]"],` +
				`[name*="[${f}]["]`;

			const found = this.root.rootNode.querySelectorAll( selector );
			if ( found && found.length ) {
				existNode = found;
			}
		}

		/**
		 * @see   https://github.com/Crocoblock/issues-tracker/issues/13730
		 * @since 3.4.5.1
		 */
		existNode = wpFilters(
			'jet.fb.formula.node.exists',
			existNode,
			fieldName, 
			this
		);

		return existNode;
	},


	/**
	 * @param  current {String}
	 * @return {(function(): *)|*}
	 */
	// eslint-disable-next-line max-lines-per-function
	observeMacro( current ) {
		if ( null === this.formula ) {
			this.formula = current;
		}

		// eslint-disable-next-line @wordpress/no-unused-vars-before-return
		const [ name, ...filters ] = current.split( '|' );
		const parsedName           = name.match( /[\w\-:]+/g );



		if ( !parsedName ) {
			return false;
		}

		let [ fieldName, ...params ] = parsedName;

		if (name.includes('::')) {
			const [possibleFieldName, ...possibleParams] = name.split('::');
			if (this.root.getInput(possibleFieldName)) {
				fieldName = possibleFieldName;
				params = possibleParams;
			}
		}

		/**
		 * @see   https://github.com/Crocoblock/issues-tracker/issues/13730
		 * @since 3.4.5.1 (moved to a method and added additional checks)
		 */
		const existNode = this.isFieldNodeExists( fieldName );


		if ( existNode === undefined) {
			const regex = new RegExp( `%${fieldName}%`, 'g' );

			let adjustedValue   = 0;
			let adjustedFormula = this.formula;
			let match;

			while ( null !== ( match = regex.exec( this.formula ) ) ) {

				const before = this.formula[ match.index - 1 ];
				const after  = this.formula[ match.index + match[0].length ];

				if ( '*' === before || '/' === before || '*' === after || '/' === after ) {
					if ( '/' === before || ( '*' === before && '*' === after ) ) {
						adjustedValue = 1;
					} else {
						adjustedValue = 0;
					}

					break;
				} else {
					adjustedValue = 0;

					break;
				}
			}

			adjustedFormula = adjustedFormula.replace( match[0], adjustedValue );

			this.formula = adjustedFormula;

			return adjustedValue;
		}

		const relatedInput = fieldName !== 'this'
		                     ? this.root.getInput( fieldName )
		                     : this.input;

		if ( !relatedInput && !fieldName.includes( '::' ) ) {
			return false;
		}

		// eslint-disable-next-line @wordpress/no-unused-vars-before-return
		const filtersList = getFilters( filters );

		if ( fieldName.includes( '::' ) ) {
			const customValue = wpFilters(
				'jet.fb.custom.formula.macro',
				false,
				fieldName,
				params,
				this,
			);

			if ( false === customValue ) {
				return false;
			}

			if ( 'function' === typeof customValue ) {
				return () => applyFilters( customValue(), filtersList );
			}

			return applyFilters( customValue, filtersList );
		}

		if ( !this.related.includes( relatedInput.name ) ) {
			this.related.push( relatedInput.name );

			this.watchers.push(
				relatedInput.watch( () => this.setResult() ),
			);
		}

		if ( !params?.length ) {
			return () => applyFilters(
				this.relatedCallback( relatedInput ),
				filtersList,
			);
		}

		const [ attrName ] = params;

		if ('label' === attrName) {
			return () => applyFilters(
				this.relatedLabelCallback(relatedInput),
				filtersList,
			);
		}

		if ( !relatedInput.attrs.hasOwnProperty( attrName ) ) {
			return false;
		}
		/**
		 * @type {BaseHtmlAttr}
		 */
		const htmlAttr = relatedInput.attrs[ attrName ];

		if ( !this.relatedAttrs.includes( relatedInput.name + attrName ) ) {
			this.relatedAttrs.push( relatedInput.name + attrName );

			this.watchers.push(
				htmlAttr.value.watch( () => this.setResult() ),
			);
		}

		return () => applyFilters( htmlAttr.value.current, filtersList );
	},
	/**
	 * Maps `this.parts` into the joined string representation of the
	 * formula. Shared by callers that only need the substituted text
	 * (e.g. HTML macros, restriction messages) and by calculate(), which
	 * additionally has to make the result safe to run through
	 * `new Function()` - see calculateEvalString() for that concern.
	 *
	 * `mapResult` maps a single substituted (function-derived) part's
	 * result before it is joined into the string. `mapStatic` receives the
	 * trusted formula text between macros.
	 *
	 * @param  mapResult {Function}
	 * @param  mapStatic {Function}
	 * @return {string}
	 */
	mapParts( mapResult, mapStatic = current => current ) {
		if ( !this.parts.length ) {
			return this.formula;
		}

		const {
			      applyFilters: deprecatedApplyFilters = false,
		      } = window?.JetFormBuilderMain?.filters ?? {};

		return this.parts.map( current => {
			if ( 'function' !== typeof current ) {

				if ( !this.input?.nodes
					|| false === deprecatedApplyFilters
					|| 'string' !== typeof current
				) {
					return mapStatic( current );
				}

				current = wpFilters(
					'jet.fb.onCalculate.part',
					current,
					this,
				);

				return mapStatic( deprecatedApplyFilters(
					'forms/calculated-formula-before-value',
					current,
					jQuery( this.input.nodes[ 0 ] ),
				) );
			}
			const result = current();

			const normalizedResult = (
				       null === result ||
				       '' === result ||
				       Number.isNaN( result )
			       ) ? this.emptyValue() : result;

			return mapResult( normalizedResult );
		} ).join( '' );
	},
	/**
	 * Used for restriction/validation messages that are rendered via
	 * `innerHTML` (see AdvancedRestriction.js). Substituted macro values
	 * are HTML-escaped so a malicious field value referenced in a
	 * validation message can't inject live markup; the trusted static
	 * message text (author-authored, may contain intentional markup) is
	 * left untouched.
	 *
	 * @see https://github.com/Crocoblock/issues-tracker (Reflected XSS via Calculated Field)
	 * @return {string}
	 */
	calculateString() {
		return this.mapParts( result => escapeMacroForHtml( result ) );
	},
	/**
	 * Builds the string that is handed to `new Function()` in calculate().
	 * Every substituted field value (the `function`-branch results in
	 * mapParts()) must never be able to inject raw JS syntax into that
	 * string.
	 *
	 * A value that represents a finite number (either already a number,
	 * or a numeric string such as a related text field's raw value) is
	 * emitted as a bare numeric literal, so existing numeric formulas
	 * (`%a% + %b%`, `%a% * %b%`, …) keep doing real arithmetic exactly as
	 * before. Anything else (e.g. option labels in "as String" mode, or
	 * arbitrary text coming from an unsanitized preset) is emitted as a
	 * JSON-quoted string literal, so it can only ever be evaluated as
	 * inert string data - never as executable JS - regardless of its
	 * contents.
	 *
	 * Static formula text is preserved except for physical line breaks inside
	 * quoted literals, which are normalized to escaped line breaks before the
	 * formula is evaluated.
	 *
	 * @see https://github.com/Crocoblock/issues-tracker (Reflected XSS via Calculated Field)
	 * @return {string}
	 */
	calculateEvalString() {
		const lexicalContext = createFormulaLexicalContext();

		if ( !this.parts.length ) {
			return lexicalContext.consume( this.formula );
		}

		return this.mapParts( result => {
			const state = lexicalContext.getState();
			const hasPendingEscape = lexicalContext.isEscaped();
			let replacement;

			if ( [ 'single', 'double', 'template' ].includes( state ) ) {
				replacement = escapeMacroForStringLiteral(
					result,
					state,
					hasPendingEscape,
				);
			}
			else if ( 'regex' === state ) {
				replacement = escapeMacroForRegexLiteral(
					result,
					hasPendingEscape,
					lexicalContext.isInRegexCharacterClass(),
				);
			}
			else if ( [ 'line-comment', 'block-comment' ].includes( state ) ) {
				replacement = '';
			}
			else if ( 'boolean' === typeof result ) {
				// true/false are fixed JS keywords with no attacker-controlled
				// content, so emitting them bare is always safe - and
				// necessary: JSON-quoting a boolean result (e.g. from a
				// custom formula macro) as "false" would make it a
				// non-empty, truthy *string* in the generated code, flipping
				// the result of `%macro% ? a : b`.
				replacement = String( result );
			}
			else if ( 'number' === typeof result ) {
				replacement = Number.isFinite( result )
					// Object.is distinguishes -0 from 0; String(-0) is "0",
					// so negative zero needs an explicit literal to avoid
					// silently flipping the sign of the formula's result.
					? ( Object.is( result, -0 ) ? '-0' : String( result ) )
					// Infinity/-Infinity/NaN are real JS global identifiers,
					// not string literals - emitting them JSON-quoted would
					// turn arithmetic (`1 + Infinity`) into string
					// concatenation (`1 + "Infinity"`).
					: String( result );
			}
			else {
				const trimmedResult = String( result ).trim();

				// Reject a leading-zero decimal string (e.g. "0123"): as a
				// bare token it would be parsed by new Function() as a
				// legacy octal literal (0123 === 83), silently corrupting
				// the value instead of preserving it.
				const hasLeadingZero = /^[+-]?0\d/.test( trimmedResult );

				// Emit the already-validated literal as-is rather than
				// canonicalizing it through Number()/parseFloat(): that
				// would collapse a signed zero (e.g. "-0") to "0" and
				// change the formula's arithmetic result.
				replacement = !hasLeadingZero
					&& NUMERIC_LITERAL_RE.test( trimmedResult )
					&& Number.isFinite( parseFloat( trimmedResult ) )
					? trimmedResult
					: JSON.stringify( String( result ) );
			}

			lexicalContext.consume( replacement );

			return replacement;
		}, current => lexicalContext.consume( current ) );
	},
	emptyValue() {
		return '';
	},
	calculate() {
		if ( !this.parts.length && !this.forceFunction ) {
			return this.formula;
		}

		const formula = this.calculateEvalString();

		try {
			return (
				new Function( 'return ' + formula )
			)();
		}
		catch ( error ) {
			//console.error( error );
			this.showError( formula );
		}

	},
	clearWatchers() {
		this.watchers.forEach(
			current => 'function' === typeof current && current(),
		);
		this.watchers     = [];
		this.relatedAttrs = [];
		this.related      = [];
	},
	/* eslint-disable no-console */
	showError( formula ) {
		console.group(
			__(
				'JetFormBuilder: You have invalid calculated formula',
				'jet-form-builder',
			),
		);

		this.showErrorDetails( formula );

		console.groupEnd();
	},
	showErrorDetails( formula ) {
		console.error(
			sprintf(
				// translators: %s - initial formula
				__( 'Initial: %s', 'jet-form-builder' ),
				this.formula,
			),
		);
		console.error(
			sprintf(
				// translators: %s - computed formula
				__( 'Computed: %s', 'jet-form-builder' ),
				formula,
			),
		);

		if ( !this.input && !this.root?.parent ) {
			return;
		}

		if ( this.input ) {
			console.error(
				sprintf(
					// translators: %s - filed name
					__( 'Field: %s', 'jet-form-builder' ),
					this.input.path.join( '.' ),
				),
			);

			return;
		}

		const index = this.root.parent.findIndex( this.root );

		console.error(
			sprintf(
				// translators: %s - path to current field
				__( 'Scope: %s', 'jet-form-builder' ),
				[
					...this.root.parent.path,
					-1 === index ? '' : index,
				].filter( Boolean ).join( '.' ),
			),
		);
	},
	/* eslint-enable no-console */
};

export default CalculatedFormula;
