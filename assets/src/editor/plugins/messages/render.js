import { useEffect, useRef } from '@wordpress/element';

const {
	BaseControl,
} = wp.components;

const { useMetaState } = JetFBHooks;

const CONTROL_CLASS = 'jet-fb-message-control';

function insertStyles() {
	const styleId = 'jet-fb-message-control-styles';

	if (document.getElementById(styleId)) {
		return;
	}

	const style = document.createElement('style');

	style.id = styleId;
	style.innerHTML = `
		.${CONTROL_CLASS} {
			position: relative;
			width: 100%;
		}

		.${CONTROL_CLASS}__input {
			width: 100%;
			padding-right: 34px !important;
		}

		.${CONTROL_CLASS}__macro {
			position: absolute;
			right: 4px;
			top: 50%;
			transform: translateY(-50%);
			min-width: 28px;
			width: 28px;
			height: 28px;
			padding: 0;
			display: flex;
			align-items: center;
			justify-content: center;
			z-index: 2;
		}

		.${CONTROL_CLASS} .jet-fb-macros-inline-popover {
			position: absolute;
			left: 0;
			right: 0;
			top: calc(100% + 4px);
			width: 100%;
			z-index: 99999;
			background: #fff;
			border: 1px solid #ddd;
			box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
			box-sizing: border-box;
		}

		.${CONTROL_CLASS} .jet-fb-macros-inline-popover .components-panel__body {
			border: 0;
		}
	`;

	document.head.appendChild(style);
}

function insertAtCursor(input, value, insertValue) {
	if (!input) {
		return value + insertValue;
	}

	const start = input.selectionStart ?? value.length;
	const end = input.selectionEnd ?? value.length;

	return value.slice(0, start) + insertValue + value.slice(end);
}

function MessageControl({ label, value, onChange }) {
	const inputRef = useRef(null);
	const MacrosFields = window?.JetFBComponents?.MacrosFields;

	useEffect(() => {
		insertStyles();
	}, []);

	return (
		<BaseControl label={label}>
			<div className={CONTROL_CLASS}>
				<input
					ref={inputRef}
					type="text"
					className={`components-text-control__input ${CONTROL_CLASS}__input`}
					value={value}
					onChange={event => onChange(event.target.value)}
				/>

				{MacrosFields ? (
					<MacrosFields
						withCurrent
						inlinePopover
						className={`${CONTROL_CLASS}__macro`}
						onClick={macroName => {
							const nextValue = insertAtCursor(
								inputRef.current,
								value,
								macroName
							);

							onChange(nextValue);

							setTimeout(() => {
								inputRef.current?.focus();
							});
						}}
					/>
				) : null}
			</div>
		</BaseControl>
	);
}

function PluginMessages() {
	const [messages, setMessages] = useMetaState('_jf_messages');

	return <>
		{Object.entries(JetFormEditorData.messagesDefault).map(
			([type, { label, value }], id) => (
				<MessageControl
					key={type + id}
					label={label}
					value={messages[type] ?? value}
					onChange={newValue => setMessages(prev => (
						{ ...prev, [type]: newValue }
					))}
				/>
			),
		)}
	</>;
}

export default PluginMessages;