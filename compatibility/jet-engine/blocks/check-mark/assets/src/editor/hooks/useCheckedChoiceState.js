import { useState } from '@wordpress/element';

function useCheckedChoiceState() {
	return useState( false );
}

export default useCheckedChoiceState;