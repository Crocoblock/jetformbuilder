const { applyFilters } = JetPlugins.hooks;

function bindRepeaterNotifyOnce( node ) {
	if ( node.__jfbMacrosRepeaterBound ) {
		return;
	}

	node.__jfbMacrosRepeaterBound = true;

	const form   = node.closest( 'form.jet-form-builder' );
	const formId = form?.dataset?.formId;
	const store  = window.JetFormBuilder?.[ formId ];

	const repeaterInput = store?.getInput?.( node.dataset.fieldName );

	const notify = () => {
		repeaterInput?.value?.notify?.();
	};

	node.addEventListener( 'input', notify, true );
	node.addEventListener( 'change', notify, true );

	node.addEventListener(
		'click',
		( e ) => {
			const removeBtn = e.target.closest?.( '.jet-form-builder-repeater__row-remove' );
			if ( !removeBtn || !node.contains( removeBtn ) ) {
				return;
			}
			requestAnimationFrame( notify );
		},
		true
	);
}

function getFieldValue( el ) {
	if ( el.tagName === 'SELECT' && el.multiple ) {
		const values = Array.from( el.selectedOptions || [] )
			.map( ( opt ) => String( opt.value ?? '' ).trim() )
			.filter( Boolean );

		return values.join( ', ' );
	}

	return String( el.value ?? '' ).trim();
}

function getRepeaterFieldValue( el, rowEl, rowRepeaterField ) {
	const current = getFieldValue( el );

	return applyFilters(
		'jet.fb.macro.inside.repeater.field.value',
		current,
		el,
		rowEl,
		rowRepeaterField
	);
}

function collectRowValues( rowEl ) {
	const valuesByName = Object.create( null );

	const rowRepeaterField = rowEl.closest( '.field-type-repeater-field' );
	const fields = rowEl.querySelectorAll( 'input, select, textarea' );

	fields.forEach( ( el ) => {
		// ignore nested repeater-in-repeater
		if ( el.closest( '.field-type-repeater-field' ) !== rowRepeaterField ) {
			return;
		}

		if ( el.disabled ) {
			return;
		}

		// ignore hidden (usually stores internal/service values)
		if ( el.tagName === 'INPUT' && el.type === 'hidden' ) {
			return;
		}

		if ( ( el.type === 'checkbox' || el.type === 'radio' ) && !el.checked ) {
			return;
		}

		const name = el.dataset?.fieldName || el.name || '';
		if ( !name ) {
			return;
		}

		const value = getRepeaterFieldValue( el, rowEl, rowRepeaterField );
		if ( value === '' ) {
			return;
		}

		if ( valuesByName[ name ] ) {
			valuesByName[ name ] += `, ${ value }`;
		} else {
			valuesByName[ name ] = value;
		}
	} );

	return valuesByName;
}

function collectRepeaterLinesFromTemplate( fieldNode, templateHtml ) {
	const items = fieldNode.querySelector( '.jet-form-builder-repeater__items' );
	if ( !items ) {
		return '';
	}

	const tpl = document.createElement( 'template' );
	tpl.innerHTML = String( templateHtml ?? '' );

	const rows  = items.querySelectorAll( '[data-repeater-row]' );
	const lines = [];

	rows.forEach( ( rowEl ) => {
		const fragment = tpl.content.cloneNode( true );
		const macroNodes = fragment.querySelectorAll( '[data-jfb-macro]' );

		const valuesByName = collectRowValues( rowEl );

		macroNodes.forEach( ( node ) => {
			const macroName = node.getAttribute( 'data-jfb-macro' ) || '';
			if ( !macroName ) {
				return;
			}

			node.innerHTML = String( valuesByName[ macroName ] ?? '' );
		} );

		const tmp = document.createElement( 'div' );
		tmp.appendChild( fragment );
		lines.push( tmp.innerHTML );
	} );

	return lines.join( '' );
}

function collectRepeaterLinesPlain( fieldNode, macros ) {
	const items = fieldNode.querySelector( '.jet-form-builder-repeater__items' );
	if ( !items ) {
		return '';
	}

	const macrosSet = Array.isArray( macros ) && macros.length
		? new Set( macros )
		: null;

	const rows  = items.querySelectorAll( '[data-repeater-row]' );
	const lines = [];

	rows.forEach( ( rowEl ) => {
		const rowRepeaterField = rowEl.closest( '.field-type-repeater-field' );
		const fields = rowEl.querySelectorAll( 'input, select, textarea' );

		fields.forEach( ( el ) => {
			if ( el.closest( '.field-type-repeater-field' ) !== rowRepeaterField ) {
				return;
			}
			if ( el.disabled ) {
				return;
			}
			if ( el.tagName === 'INPUT' && el.type === 'hidden' ) {
				return;
			}
			if ( ( el.type === 'checkbox' || el.type === 'radio' ) && !el.checked ) {
				return;
			}

			const name = el.dataset?.fieldName || el.name || '';
			if ( !name ) {
				return;
			}

			if ( macrosSet && !macrosSet.has( name ) ) {
				return;
			}

			const value = getRepeaterFieldValue( el, rowEl, rowRepeaterField );
			lines.push( `${ name }: ${ value }` );
		} );
	} );

	return lines.join( '<br/>' );
}

export function resolveRepeaterMacrosValue( current, $fieldNode, $macroHost = false ) {
	const fieldNode = $fieldNode?.[ 0 ];
	if ( !fieldNode || fieldNode.dataset?.repeater !== '1' ) {
		return current;
	}

	bindRepeaterNotifyOnce( fieldNode );

	const host = $macroHost?.[ 0 ];
	const source = host?.__jfbMacroTemplate;

	if ( !host || !source ) {
		return collectRepeaterLinesPlain( fieldNode, null );
	}

	return collectRepeaterLinesFromTemplate( fieldNode, source );
}