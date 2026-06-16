const {
	InputData,
} = JetFormBuilderAbstract;

const {
	getParsedName,
} = JetFormBuilderFunctions;

// ADDED:
// WYSIWYG inside initial repeater rows can miss editor-related styles
// that are present in repeater template and loaded correctly after Add New.
// We copy only missing stylesheet links from the repeater template to <head>.
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
		editor()?.remove?.();

		// ADDED:
		// Before initializing WYSIWYG, ensure editor styles from repeater template
		// are available for initially rendered repeater rows.
		appendMissingRepeaterTemplateStyles(node);

		window.wp.editor.initialize(this.textArea.id, editorConfig);
		this.editor = editor();
		this.getEditor = editor;

		document.addEventListener('jet-form-builder/conditional-block/block-toggle-hidden-dom', (event) => {
			if (event.detail.block.contains(node)) {
				const block = event.detail.block;
				if (block.contains(node)) {
					if (!block.__initialized) {
						editor()?.remove?.();

						// ADDED:
						// Same styles check before conditional block re-initialization.
						appendMissingRepeaterTemplateStyles(node);

						window.wp.editor.initialize(this.textArea.id, editorConfig);
						this.editor = editor();
						this.getEditor = editor;
						block.__initialized = true;
					} else if (event.detail.result) {
						editor()?.remove?.();

						// ADDED:
						// Same styles check before conditional block re-initialization.
						appendMissingRepeaterTemplateStyles(node);

						window.wp.editor.initialize(this.textArea.id, editorConfig);
						this.editor = editor();
						this.getEditor = editor;
					}
				}
			}
		});

	};

	this.addListeners = function () {
		// disable aria attributes
		this.reporting.makeInvalid = () => { };
		this.reporting.makeValid = () => { };

		const update = () => {
			this.value.current = this.editor.getContent();
		};

		this.getEditor()?.on?.('input', update)?.on?.('change', update);
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

		const cssDeclarations = node.style.cssText.split(';').
			filter(Boolean);

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