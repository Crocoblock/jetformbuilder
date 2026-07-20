import { useEffect } from '@wordpress/element';

const MODAL_SELECTOR = '.components-modal__frame';

const isUndoShortcut = event => {
	const isMacUndo = event.metaKey && !event.ctrlKey;
	const isWinUndo = event.ctrlKey && !event.metaKey;

	return (
		(isMacUndo || isWinUndo) &&
		'z' === event.key.toLowerCase() &&
		!event.altKey
	);
};

const isInsideModal = event => {
	const path = event.composedPath?.();

	if (path?.length) {
		return path.some(element => (
			element instanceof Element &&
			element.matches?.(MODAL_SELECTOR)
		));
	}

	return event.target?.closest?.(MODAL_SELECTOR);
};

const usePreventEditorUndoInModal = () => {
	useEffect(() => {
		const handleKeyDown = event => {
			if (!isUndoShortcut(event)) {
				return;
			}

			if (!isInsideModal(event)) {
				return;
			}

			/**
			 * Important:
			 * Do NOT call preventDefault().
			 *
			 * Browser native undo should still work for inputs/textareas,
			 * including the browser's own form-control undo history.
			 *
			 * We only stop Gutenberg/editor keyboard handlers from receiving
			 * Cmd/Ctrl+Z while the event comes from inside a modal.
			 */
			event.stopPropagation();
		};

		window.addEventListener('keydown', handleKeyDown, true);

		return () => {
			window.removeEventListener('keydown', handleKeyDown, true);
		};
	}, []);
};

export default usePreventEditorUndoInModal;