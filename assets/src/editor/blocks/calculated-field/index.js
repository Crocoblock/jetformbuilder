import EditCalculated from "./edit";
import metadata from "./block.json";
import Tools from "../../helpers/tools";
import { uniqIdWithBlockName } from "../../helpers/components-helper";


const { __ } = wp.i18n;

const { name, icon } = metadata;

const settings = {
	title: __( 'Calculated Field' ),
	description: __( 'Calculate and display your number values' ),
	icon: <span dangerouslySetInnerHTML={ { __html: icon } }></span>,
	edit: EditCalculated,
	_additional: {
		help: {
			calc_hidden: __( 'Check this to hide calculated field' )
		},
		formFields: Tools.getAvailableFields( [ name ] ),
		uniqKey: uniqIdWithBlockName( name ),
	}
};

export { metadata, name, settings };
