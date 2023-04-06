import { name } from './index';

const { __ } = wp.i18n;

const {
	      InspectorControls,
	      useBlockProps,
	      useInnerBlocksProps,
      } = wp.blockEditor;

const {
	      useSelect,
      } = wp.data;

const {
	      useEffect,
	      useState,
      } = wp.element;

export default function EditAdvancedChoice( props ) {
	const { attributes, setAttributes } = props;

	const blockProps       = useBlockProps( {
		className: 'jet-form-builder-choice--item',
	} );
	const innerBlocksProps = useInnerBlocksProps( blockProps );

	return <>
		<li { ...innerBlocksProps }/>
	</>;
}