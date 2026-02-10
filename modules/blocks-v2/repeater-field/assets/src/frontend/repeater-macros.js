function bindRepeaterNotifyOnce(node) {
	if (node.__jfbMacrosRepeaterBound) {
		return;
	}

	node.__jfbMacrosRepeaterBound = true;

	const form = node.closest('form.jet-form-builder');
	const formId = form?.dataset?.formId;
	const store = window.JetFormBuilder?.[formId];

	const repeaterInput = store?.getInput?.(node.dataset.fieldName);

	const notify = () => {
		repeaterInput?.value?.notify?.();
	};

	node.addEventListener('input', notify, true);
	node.addEventListener('change', notify, true);

	node.addEventListener(
		'click',
		(e) => {
			const removeBtn = e.target.closest?.('.jet-form-builder-repeater__row-remove');
			if (!removeBtn || !node.contains(removeBtn)) {
				return;
			}

			requestAnimationFrame(notify);
		},
		true
	);
}

function collectRepeaterLines(fieldNode, macros, template) {
	const items = fieldNode.querySelector('.jet-form-builder-repeater__items');
	if (!items) {
		return '';
	}

	const macrosSet = Array.isArray(macros) && macros.length
		? new Set(macros)
		: null;

	const rows = items.querySelectorAll('[data-repeater-row]');
	const lines = [];

	rows.forEach((rowEl) => {
		const rowRepeaterField = rowEl.closest('.field-type-repeater-field');
		const fields = rowEl.querySelectorAll('input, select, textarea');
		let rowNode = template.cloneNode(true);

		fields.forEach((el) => {
			if (el.closest('.field-type-repeater-field') !== rowRepeaterField) {
				return;
			}
			if (el.disabled) {
				return;
			}
			if ((el.type === 'checkbox' || el.type === 'radio') && !el.checked) {
				return;
			}

			const name = el.dataset?.fieldName || el.name || '';
			const value = String(el.value ?? '');

			if (macrosSet && !macrosSet.has(name)) {
				return;
			}

			rowNode.querySelector(`[data-jfb-macro="${name}"]`).textContent = value;
		});

		lines.push(rowNode.body.innerHTML);
	});

	return lines.join('<br/>');
}

export function resolveRepeaterMacrosValue(current, $fieldNode, $macroHost = false) {
	const fieldNode = $fieldNode?.[0];

	if (!fieldNode || fieldNode.dataset?.repeater !== '1') {
		return current;
	}

	bindRepeaterNotifyOnce(fieldNode);

	const host = $macroHost?.[0];
	if (!host) {
		return collectRepeaterLines(fieldNode, null, null);
	}

	const source = host.__jfbMacroTemplate;
	if (!source) {
		return collectRepeaterLines(fieldNode, null, null);
	}

	const doc = new DOMParser().parseFromString(String(source), 'text/html');

	const macros = Array.from(doc.querySelectorAll('[data-jfb-macro]'))
		.map((el) => el.getAttribute('data-jfb-macro'))
		.filter(Boolean);

	return collectRepeaterLines(fieldNode, macros, doc);
}


