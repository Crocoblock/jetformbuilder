import SwitchPageOnChangeButton from './SwitchPageOnChangeButton';

const {
	      BlockControls,
      } = wp.blockEditor;


const SwitchPageOnChangeControls = function () {
	return <BlockControls group="other">
		<SwitchPageOnChangeButton />
	</BlockControls>;
};

export default SwitchPageOnChangeControls;