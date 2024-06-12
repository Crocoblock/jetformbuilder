import { Flex } from '@wordpress/components';
import FirstPart from './FirstPart';
import SecondPart from './SecondPart/SecondPart';

function UseFormRoot() {
	return <Flex direction="column" gap={ 8 }>
		<div>
			<FirstPart/>
		</div>
		<div>
			<SecondPart/>
		</div>
	</Flex>;
}

export default UseFormRoot;