import { getGroupedMessages } from './functions';

const { useState } = wp.element;

function useGroupedValidationMessages() {
	const [ messages ] = useState( getGroupedMessages );

	return messages;
}

export { useGroupedValidationMessages };