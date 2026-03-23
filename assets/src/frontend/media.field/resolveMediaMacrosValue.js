function escapeHtml( value ) {
	return String( value ?? '' )
		.replaceAll( '&', '&amp;' )
		.replaceAll( '<', '&lt;' )
		.replaceAll( '>', '&gt;' )
		.replaceAll( '"', '&quot;' )
		.replaceAll( "'", '&#039;' );
}

function isMediaField( fieldNode ) {
	if ( ! fieldNode ) {
		return false;
	}

	return !! fieldNode.closest( '.field-type-media-field' );
}

function renderImageItem( url, name = '' ) {
	const label = name || 'Image';

	return `
		<li style="list-style:none; margin:0 0 12px 0;">
			<div style="display:inline-block; max-width:150px;">
				<img
					src="${ escapeHtml( url ) }"
					alt="${ escapeHtml( label ) }"
					style="
						display:block;
						width:150px;
						height:150px;
						object-fit:cover;
						border:1px solid #dcdcdc;
						border-radius:8px;
						background:#fff;
					"
				/>
				<div style="
					margin-top:6px;
					font-size:13px;
					line-height:1.4;
					color:#444;
					word-break:break-word;
				">
					${ escapeHtml( label ) }
				</div>
			</div>
		</li>
	`;
}

function renderFileItem( url, name = '' ) {
	const label = name || url || 'File';

	if ( url ) {
		return `
			<li style="list-style:none; margin:0 0 10px 0;">
				<a
					href="${ escapeHtml( url ) }"
					target="_blank"
					rel="noopener noreferrer"
					style="
						color:#d63384;
						text-decoration:underline;
						word-break:break-word;
						font-size:14px;
						line-height:1.4;
					"
				>
					📄 ${ escapeHtml( label ) }
				</a>
			</li>
		`;
	}

	return `
		<li style="
			list-style:none;
			margin:0 0 10px 0;
			font-size:14px;
			line-height:1.4;
			word-break:break-word;
			color:#444;
		">
			📄 ${ escapeHtml( label ) }
		</li>
	`;
}

function wrapItems( items ) {
	if ( ! items.length ) {
		return '';
	}

	return `
		<div style="
			display:block;
			padding:0;
			margin:0;
		">
			<ul style="
				margin:0;
				padding:0;
				list-style:none;
			">
				${ items.join( '' ) }
			</ul>
		</div>
	`;
}

function collectMediaFromDom( fieldNode ) {
	const wrapper = fieldNode.closest( '.field-type-media-field' );

	if ( ! wrapper ) {
		return '';
	}

	const fileNodes = wrapper.querySelectorAll(
		'.jet-form-builder-file-upload__file'
	);

	if ( ! fileNodes.length ) {
		return '';
	}

	const items = [];

	fileNodes.forEach( ( fileNode ) => {
		const url = String( fileNode.dataset?.file ?? '' ).trim();

		const removeBtn = fileNode.querySelector(
			'.jet-form-builder-file-upload__file-remove'
		);

		const fileName = String(
			removeBtn?.dataset?.fileName ?? ''
		).trim();

		const img = fileNode.querySelector( 'img' );

		if ( img && url ) {
			items.push( renderImageItem( url, fileName ) );
			return;
		}

		if ( fileName || url ) {
			items.push( renderFileItem( url, fileName ) );
		}
	} );

	return wrapItems( items );
}

function getObservedContainer( fieldNode ) {
	const wrapper = fieldNode.closest( '.field-type-media-field' );

	if ( ! wrapper ) {
		return null;
	}

	return (
		wrapper.querySelector( '.jet-form-builder-file-upload__files' ) ||
		wrapper.querySelector( '.jet-form-builder-file-upload' ) ||
		wrapper
	);
}

function triggerMediaRefresh( fieldNode ) {
	fieldNode.dispatchEvent(
		new Event( 'input', { bubbles: true } )
	);

	fieldNode.dispatchEvent(
		new Event( 'change', { bubbles: true } )
	);
}

function bindRemoveHandler( fieldNode ) {
	if ( ! fieldNode || fieldNode.__jfbMediaRemoveBound ) {
		return;
	}

	const wrapper = fieldNode.closest( '.field-type-media-field' );

	if ( ! wrapper ) {
		return;
	}

	fieldNode.__jfbMediaRemoveBound = true;

	wrapper.addEventListener( 'click', ( event ) => {
		const removeBtn = event.target.closest(
			'.jet-form-builder-file-upload__file-remove'
		);

		if ( ! removeBtn ) {
			return;
		}

		setTimeout( () => {
			triggerMediaRefresh( fieldNode );
		}, 0 );
	} );
}

function scheduleRefresh( fieldNode ) {
	if ( ! fieldNode ) {
		return;
	}

	const observedNode = getObservedContainer( fieldNode );

	if ( ! observedNode ) {
		return;
	}

	if ( fieldNode.__jfbMediaMacrosObserver ) {
		fieldNode.__jfbMediaMacrosObserver.disconnect();
		fieldNode.__jfbMediaMacrosObserver = null;
	}

	const initialMarkup = collectMediaFromDom( fieldNode );

	const observer = new MutationObserver( () => {
		const nextMarkup = collectMediaFromDom( fieldNode );

		if ( nextMarkup === initialMarkup ) {
			return;
		}

		observer.disconnect();
		fieldNode.__jfbMediaMacrosObserver = null;

		triggerMediaRefresh( fieldNode );
	} );

	fieldNode.__jfbMediaMacrosObserver = observer;

	observer.observe( observedNode, {
		childList: true,
		subtree: true,
		attributes: true,
		attributeFilter: [ 'data-file', 'src' ],
	} );

	setTimeout( () => {
		if ( fieldNode.__jfbMediaMacrosObserver !== observer ) {
			return;
		}

		observer.disconnect();
		fieldNode.__jfbMediaMacrosObserver = null;

		const fallbackMarkup = collectMediaFromDom( fieldNode );

		if ( fallbackMarkup !== initialMarkup ) {
			triggerMediaRefresh( fieldNode );
		}
	}, 300 );
}

export function resolveMediaMacrosValue( current, $fieldNode ) {
	const fieldNode = $fieldNode?.[ 0 ] || $fieldNode;

	if ( ! isMediaField( fieldNode ) ) {
		return current;
	}

	bindRemoveHandler( fieldNode );
	scheduleRefresh( fieldNode );

	return collectMediaFromDom( fieldNode );
}