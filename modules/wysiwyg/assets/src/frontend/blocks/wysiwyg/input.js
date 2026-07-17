const {
	InputData,
} = JetFormBuilderAbstract;

const {
	getParsedName,
} = JetFormBuilderFunctions;

function appendMissingRepeaterTemplateStyles(node) {
	const repeater = node.closest('.jet-form-builder-repeater');

	if (!repeater) {
		return;
	}

	const template = repeater.querySelector(
		'.jet-form-builder-repeater__initial',
	);

	if (!template) {
		return;
	}

	const source = template.content ?? template;

	for (const link of source.querySelectorAll('link[rel="stylesheet"]')) {
		if (link.id && document.getElementById(link.id)) {
			continue;
		}

		const href = link.getAttribute('href');

		if (
			href &&
			[...document.querySelectorAll('link[rel="stylesheet"]')].some(
				current => current.getAttribute('href') === href,
			)
		) {
			continue;
		}

		document.head.appendChild(link.cloneNode(true));
	}
}

// During repeater reindexing, the old row may still contain a textarea
// with the same ID as the newly created row.
//
// TinyMCE and wp.editor work globally by element ID, so the old textarea
// must release that ID before the new editor is initialized.
function releaseStaleEditorId(textArea) {
	const editorId = textArea.id;
	const existingEditor = window.tinymce.get(editorId);
	const existingEditorElement = existingEditor?.getElement?.();

	if (
		existingEditor &&
		existingEditorElement !== textArea
	) {
		existingEditor.remove();
	}

	const duplicateElement = document.getElementById(editorId);

	if (
		duplicateElement &&
		duplicateElement !== textArea
	) {
		duplicateElement.id = [
			editorId,
			'stale',
			Date.now(),
			Math.random().toString(36).slice(2),
		].join('_');
	}
}

function WysiwygData() {
	InputData.call(this);

	this.isSupported = function (node) {
		return node.classList.contains('wysiwyg-field');
	};

	this.setNode = function (node) {
		InputData.prototype.setNode.call(this, node);

		this.inputType = 'wysiwyg';

		this.getSubmit().submitter.promise(resolve => {
			window.tinyMCE.triggerSave();
			resolve();
		});

		this.textArea = node.querySelector('.wp-editor-area');
		const editorConfig = JSON.parse(node.dataset.editor);

		this.rawName = editorConfig.textarea_name;
		this.name = getParsedName(this.rawName);

		const editor = () => window.tinymce.get(this.textArea.id);

		// Remove a stale TinyMCE instance and release the duplicated textarea ID
		// before initializing the editor on the current textarea.
		releaseStaleEditorId(this.textArea);

		appendMissingRepeaterTemplateStyles(node);

		window.wp.editor.initialize(
			this.textArea.id,
			editorConfig,
		);

		this.editor = editor();
		this.getEditor = editor;

		document.addEventListener(
			'jet-form-builder/conditional-block/block-toggle-hidden-dom',
			event => {
				if (!event.detail.block.contains(node)) {
					return;
				}

				const block = event.detail.block;

				if (!block.contains(node)) {
					return;
				}

				if (!block.__initialized) {
					// Use the same stale-editor protection before
					// conditional block initialization.
					releaseStaleEditorId(this.textArea);

					appendMissingRepeaterTemplateStyles(node);

					window.wp.editor.initialize(
						this.textArea.id,
						editorConfig,
					);

					this.editor = editor();
					this.getEditor = editor;
					block.__initialized = true;

					return;
				}

				if (event.detail.result) {
					// Use the same stale-editor protection before
					// conditional block reinitialization.
					releaseStaleEditorId(this.textArea);

					appendMissingRepeaterTemplateStyles(node);

					window.wp.editor.initialize(
						this.textArea.id,
						editorConfig,
					);

					this.editor = editor();
					this.getEditor = editor;
				}
			},
		);
	};

	this.addListeners = function () {
		// disable aria attributes
		this.reporting.makeInvalid = () => { };
		this.reporting.makeValid = () => { };

		const update = () => {
			this.value.current = this.editor.getContent();
		};

		this.getEditor()
			?.on?.('input', update)
			?.on?.('change', update);
	};

	this.setValue = function () {
		this.getEditor()?.on?.('init', () => {
			this.transferStylesToIframe();
			this.callable.lock.current = false;
			this.silenceSet(this.editor.getContent());
		});
	};

	this.initNotifyValue = () => { };

	this.focusRaw = function () {
		this.getEditor()?.getBody()?.focus(
			{ preventScroll: true },
		);
	};

	this.hasAutoScroll = function () {
		return false;
	};

	this.transferStylesToIframe = function () {
		const node = this.getWrapperNode();
		const iframeBody = this.editor.iframeElement.contentDocument.body;

		const cssDeclarations = node.style.cssText
			.split(';')
			.filter(Boolean);

		for (const cssDeclaration of cssDeclarations) {
			const [varName, value] = cssDeclaration.split(':');

			switch (varName.trim()) {
				case '--jfb-wysiwyg-container-bg':
					iframeBody.style.backgroundColor = value;
					break;

				case '--jfb-wysiwyg-container-text':
					iframeBody.style.color = value;
					break;
			}
		}
	};
}

WysiwygData.prototype = Object.create(InputData.prototype);

export default WysiwygData;