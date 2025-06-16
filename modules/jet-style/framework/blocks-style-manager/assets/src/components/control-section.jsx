import { PanelBody } from '@wordpress/components';
import { hasChildren } from '../helpers/utils';
import ControlComponent from './control-component';

const ControlSection = ( { section, props } ) => {

	return (
		<PanelBody
			title={ section.title }
			initialOpen={ section.initialOpen }
			className="crocoblock-style-manager__control-section"
		>
			{ hasChildren( section ) && section.children.map( ( control ) => {
				return (
					<ControlComponent
						key={ control.id }
						control={ control }
						props={ props }
					/>
				);
			} ) }
		</PanelBody>
	);
};

export default ControlSection;