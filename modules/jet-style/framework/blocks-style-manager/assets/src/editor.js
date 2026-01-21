import './editor.scss';
import { addFilter } from '@wordpress/hooks';
import { withStylesControls } from './hoc-wrappers/with-styles-controls';
import { withBlockUniqueClass } from './hoc-wrappers/with-block-class';

class CrocoBlockStyleEditor {

	init() {

		this.blocks = window?.crocoStyleEditorData?.blocks_supports || {};
		this.supportName = window?.crocoStyleEditorData?.support_name;
		this.defaults = window?.crocoStyleEditorData?.defaults || {};
		this.usedClasses = {};

		addFilter(
			'blocks.registerBlockType',
			'crocoblock-style-manager/enable-block-support',
			this.registerBlock.bind( this )
		);

		addFilter(
			'editor.BlockEdit',
			'crocoblock-style-manager/enable-block-support',
			withStylesControls
		);

		addFilter(
			'editor.BlockListBlock',
			'crocoblock-style-manager/with-crocoblock-editor-class',
			withBlockUniqueClass,
			0
		);
	}

	classIsUsed( className, clientId ) {

		if ( ! className || ! clientId ) {
			return false;
		}

		if ( this.usedClasses[ className ] ) {
			if ( this.usedClasses[ className ] === clientId ) {
				// It's the same clientId, so we can use this class
				return false;
			} else {
				// The class is already used by another block
				return true;
			}
		} else {
			// The class is not used yet, so we can use it
			this.usedClasses[ className ] = clientId;
			return false;
		}
	}

	getBlockControls( blockName ) {
		return this.blocks[ blockName ] || false;
	}

	registerBlock( settings, name ) {

		if ( ! this.getBlockControls( name ) ) {
			return settings;
		}

		const supports = settings.supports || {};
		supports[ this.supportName ] = true;

		const attributes = settings.attributes || {};

		if ( ! attributes[ this.supportName ] ) {

			let defaults = {
				_uniqueClassName: '',
			};

			if ( this.defaults[ name ] ) {
				defaults = {
					...defaults,
					...this.defaults[ name ],
				};
			}

			attributes[ this.supportName ] = {
				type: 'object',
				default: defaults,
				style: true,
			};
		}

		return {
			...settings,
			supports: supports,
			attributes: attributes,
		};
	}
}

window.crocoBlockStyleEditor = new CrocoBlockStyleEditor();
window.crocoBlockStyleEditor.init();