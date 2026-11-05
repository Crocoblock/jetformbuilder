import { clearSelectionError, countSelected, getLimits, showSelectionError } from './functions';

const namespace = 'jet-form-builder/selection-limits';

JetPlugins.hooks.addAction( 'jet.fb.observe.before', namespace, () => {
	const hooks = window.wp?.hooks;
	if ( !hooks || hooks.hasFilter( 'jet.fb.select_autocomplete.options', namespace ) ) {
		return;
	}
	hooks.addFilter( 'jet.fb.select_autocomplete.options', namespace, ( options, field ) => {
		const node = field[ 0 ];
		const maximum = Number( node?.dataset.jfbMaxSelections );
		return node?.multiple && maximum > 0 ? { ...options, maximumSelectionLength: maximum } : options;
	} );
} );

export default function observeSelectAutocomplete( controller ) {
	const { input, wrapper } = controller;
	if ( !wrapper.matches( 'select.jet-select-autocomplete' ) ) {
		return null;
	}
	const field = jQuery( wrapper );
	if ( !field.data( 'select2' ) ) {
		return null;
	}
	const previous = {
		showError: input.showError,
		clearError: input.clearError,
		focusRaw: input.focusRaw,
	};
	input.showError = showSelectionError;
	input.clearError = clearSelectionError;
	input.focusRaw = () => {
		const widget = field.data( 'select2' );
		const target = widget?.selection.$search?.[ 0 ] ?? widget?.$selection[ 0 ];
		target?.focus( { preventScroll: true } );
	};
	const onSelecting = event => {
		const maximum = getLimits( input ).max;
		if ( maximum > 0 && countSelected( input ) >= maximum ) {
			event.preventDefault();
		}
	};
	field.on( 'select2:selecting.jfbSelectionLimit', onSelecting );
	// Select2 includes a selected placeholder in its own maximum selection count.
	const sanitize = input.sanitize( value => Array.isArray( value ) ? value.filter( item => item !== '' ) : value );
	input.value.current = Array.isArray( input.value.current ) ? input.value.current.filter( item => item !== '' ) : input.value.current;

	return {
		wrapper: wrapper.parentElement,
		getErrorNodes: () => {
			const widget = field.data( 'select2' );
			return [ wrapper, widget?.$selection[ 0 ], widget?.selection.$search?.[ 0 ] ].filter( Boolean );
		},
		update: () => {
			const adapter = field.data( 'select2' )?.dataAdapter;
			if ( adapter && 'maximumSelectionLength' in adapter ) {
				adapter.maximumSelectionLength = getLimits( input ).max;
			}
		},
		destroy: () => {
			field.off( 'select2:selecting.jfbSelectionLimit', onSelecting );
			sanitize();
			Object.assign( input, previous );
		},
	};
}
