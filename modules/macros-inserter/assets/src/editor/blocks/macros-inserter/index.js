import metadata from './block.json';
import edit from './edit';
import save from './save';

export const name = metadata.name;

export const settings = {
	edit,
	save,
};

export { metadata };

export default {
	metadata,
	name,
	settings,
};