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

	const blockProps       = useBlockProps();
	const innerBlocksProps = useInnerBlocksProps( blockProps );

	return <>
		<div { ...innerBlocksProps }/>
	</>;
}