import Edit from './edit';
import metadata from '../../../../block.json';
import './style.scss';

const { name, icon = '' } = metadata;

export { name };
export { metadata };

export const settings = {
	icon: <span dangerouslySetInnerHTML={ { __html: icon } }></span>,
	description: 'Add an international phone number input field with country flags, dial codes, and validation.',
	edit: Edit,
	jfbResolveBlock() {
		const base = {
			clientId: this.clientId,
			name: this.name,
		};

		if ( ! this.attributes.name ) {
			return base;
		}

		return {
			...base,
			fields: [
				{
					value: this.attributes.name,
					name: this.attributes.name,
					label: this.attributes.label || this.attributes.name,
				},
			],
		};
	},
	useEditProps: [ 'uniqKey', 'attrHelp' ],
	example: {
		attributes: {
			isPreview: true,
		},
	},
};
