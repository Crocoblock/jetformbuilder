import { InspectorControls } from '@wordpress/block-editor';
import { getBlockControls } from '../helpers/utils';
import ControlSection from './control-section';

const ControlStack = ( props ) => {

	const blockControls = getBlockControls( props.name );

	return (
		<InspectorControls group="styles">
			{ blockControls.map( ( control ) => {
				return (
					<ControlSection
						key={ control.id }
						section={ control }
						props={ props }
					/>
				);
			} ) }
		</InspectorControls>
	);
};

export default ControlStack;