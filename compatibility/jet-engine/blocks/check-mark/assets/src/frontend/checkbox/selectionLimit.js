import resolveCheckMark from '../resolveCheckMark';

const { addAction } = JetPlugins.hooks;

addAction(
	'jet.fb.option.selectionLimit.disabled',
	'jet-form-builder/check-mark-selection-limit',
	( node, input, controller ) => {
		if ( !node.classList.contains( 'checkboxes-field' ) || node.dataset.custom ) {
			return;
		}
		const control = resolveCheckMark( node );
		if ( control ) {
			controller.setBlocked( control, node.disabled );
		}
	},
);
