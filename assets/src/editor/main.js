import Editor from './editor';
import ArgsMeta from './meta/arguments';
import ActionsMeta from './meta/actions';
import PresetMeta from './meta/preset';
import MessagesMeta from './meta/messages';
import Captcha from "./meta/captcha";
import Gateways from "./meta/gateways";

import './blocks/form-fields';
import './form-actions/send-email';
import './form-actions/insert-post';
import './form-actions/register-user';
import './form-actions/update-user';
import './form-actions/update-options';
import './form-actions/call-hook';
import './form-actions/call-webhook';
import './form-actions/redirect-to-page';
import './form-actions/mailchimp';
import './form-actions/getresponse';
import './form-actions/activecampaign';

const {
	registerBlockType
} = wp.blocks;

const {
	G,
	Path,
	Circle,
	Rect,
	SVG
} = wp.components;

window.jetFormBuilderControls = {
	toolbar: {},
	general: {},
	advanced: {},
};

var initializeCallbacksEvent = new Event( 'jet-form-builder-initialize' );

document.dispatchEvent( initializeCallbacksEvent );


if ( window.jetFormBuilderBlocks && window.jetFormBuilderBlocks.length ) {

	window.jetFormBuilderBlocks.forEach( function ( blockData ) {

		if ( window.jetFormBuilderBlockCallbacks[ blockData.blockName ] ) {

			if ( blockData.controls.toolbar ) {
				window.jetFormBuilderControls.toolbar[ blockData.blockName ] = blockData.controls.toolbar;
			}

			if ( blockData.controls.general ) {
				window.jetFormBuilderControls.general[ blockData.blockName ] = blockData.controls.general;
			}

			if ( blockData.controls.advanced ) {
				window.jetFormBuilderControls.advanced[ blockData.blockName ] = blockData.controls.advanced;
			}

			registerBlockType( blockData.blockName, {
				title: blockData.title,
				icon: <span dangerouslySetInnerHTML={ { __html: blockData.icon } }></span>,
				category: 'jet-form-builder-fields',
				attributes: blockData.attributes,
				className: blockData.className,
				supports: {
					customClassName: false,
					html: false,
					...blockData.supports
				},
				edit: window.jetFormBuilderBlockCallbacks[ blockData.blockName ].edit,
				save: window.jetFormBuilderBlockCallbacks[ blockData.blockName ].save,
			} );

		}

	} );

}

window.jetFormActionTypes.forEach( function ( action, index ) {
	if ( window.jetFormDefaultActions && window.jetFormDefaultActions[ action.id ] ) {
		window.jetFormActionTypes[ index ].callback = window.jetFormDefaultActions[ action.id ];
	}
} );

ArgsMeta();
Captcha();
Gateways();
ActionsMeta();
PresetMeta();
MessagesMeta();

var initializedEvent = new Event( 'jet-form-builder-initialized' );

document.dispatchEvent( initializedEvent );

/**
 * Takes a target input element via ID and turns it into a block editor
 *
 * @param  {string} id        The html ID of the input to be transformed
 * @param  {string} inputName The input name to use for when the form gets submitted
 * @param  {string} content   Starting content to fill the editor with, leave blank to use the value of the target element
 * @param formName
 * @return {void}             This function returns no values
 */
window.JetFormEditor = function ( id, inputName, content, formName ) {

	// find our element and swap it out for a div container
	const original = document.getElementById( id );

	// make the content and inputName parameters optional
	if ( typeof content === 'undefined' ) {
		content = original.value;
	}
	if ( typeof inputName === 'undefined' ) {
		inputName = original.name;
	}

	// Now we can create and swap out the element, this is to give React a nice div node to work with
	const element = document.createElement( 'div' );

	element.setAttribute(
		'class',
		'jet-form-builder block-editor gutenberg__editor block-editor__container wp-embed-responsive'
	);

	element.setAttribute( 'id', id );
	original.replaceWith( element );

	// tada!
	ReactDOM.render(
		<Editor startingContent={ content } inputName={ inputName } formName={ formName }/>,
		element
	);

}

