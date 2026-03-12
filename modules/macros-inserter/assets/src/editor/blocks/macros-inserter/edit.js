import { Fragment, useEffect, useRef } from '@wordpress/element';
import { useBlockProps, BlockControls } from '@wordpress/block-editor';

function toHtmlMacro( name, field ) {
	const macro = String( name ).replace( /^%|%$/g, '' ).trim();

	let repeaterNote = '';

	if ( field?.is_repeater_child ) { 
		repeaterNote =
			'this field can be used only inside repeater - ' + field.repeater_name;
	}

	return `<span data-jfb-macro="${ macro }">${ repeaterNote }</span>`;
}

function insertAtCursor( cm, text ) {
	if ( ! cm ) {
		return;
	}
	cm.focus();
	cm.replaceSelection( text, 'end' );
}

export default function Edit( { attributes, setAttributes } ) {
	const blockProps = useBlockProps();

	const MacrosFields = window?.JetFBComponents?.MacrosFields;

	const textareaRef = useRef( null );
	const cmRef = useRef( null );

	// Init CodeMirror once: CodeMirror is the source of truth
	useEffect( () => {
		if ( ! textareaRef.current ) {
			return;
		}
		if ( ! window?.wp?.codeEditor?.initialize ) {
			return;
		}

		const instance = wp.codeEditor.initialize( textareaRef.current, {
			codemirror: {
				mode: 'htmlmixed',
				lineNumbers: true,
				lineWrapping: true,
				indentUnit: 2,
				tabSize: 2,
			},
		} );

		const cm = instance?.codemirror;
		if ( ! cm ) {
			return;
		}

		cmRef.current = cm;

		// Set initial value once
		cm.setValue( attributes?.content ?? '' );

		const onChange = () => {
			setAttributes( { content: cm.getValue() } );
		};

		cm.on( 'change', onChange );

		return () => {
			try {
				cm.off( 'change', onChange );
			} catch ( e ) {}

			cmRef.current = null;
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [] );

	return (
		<Fragment>
			{ MacrosFields ? (
				<BlockControls group="other">
					<MacrosFields
						withCurrent
						onClick={ ( macroName, field ) => {
							insertAtCursor(
								cmRef.current,
								toHtmlMacro( macroName, field )
							);
						} }
					/>
				</BlockControls>
			) : null }

			<div { ...blockProps }>
				<textarea
					ref={ textareaRef }
					defaultValue={ attributes?.content ?? '' }
					rows={ 5 }
					placeholder="Use the toolbar to insert macros. You can also write custom HTML here…"
					style={ {
						width: '100%',
						fontFamily: 'monospace',
						boxSizing: 'border-box',
					} }
				/>
			</div>
		</Fragment>
	);
}