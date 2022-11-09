import DynamicItem from './DynamicItem';
import Tools from '../../tools';
import BaseHelp from '../../components/BaseHelp';
import useBlockAttributes from '../../blocks/hooks/useBlockAttributes';
import useUniqKey from '../../blocks/hooks/useUniqKey';
import useIsHasAttribute from '../../hooks/useIsHasAttribute';

const {
	      __,
      } = wp.i18n;
const {

	      Button,
	      Flex,
      } = wp.components;

function DynamicValues() {
	const [ attributes, setAttributes ] = useBlockAttributes();

	const uniqKey = useUniqKey();
	const value   = attributes.value ?? {};
	const groups  = value.groups ?? [];

	if ( !useIsHasAttribute( 'value' ) ) {
		return null;
	}

	const updateValue = settings => {
		setAttributes( {
			...attributes,
			value: {
				...value,
				...(
					'function' === typeof settings
					? settings( value )
					: settings
				),
			},
		} );
	};

	return <>
		<BaseHelp>
			{ __(
				`Or set value with conditions`,
				'jet-form-builder',
			) + ' ' }
			<Button
				isLink
				onClick={ () => {} }
				label={ __(
					`This is a moved functionality from 
					the conditional block with the Set Value function`,
					'jet-form-builder',
				) }
				showTooltip
			>(?)</Button>
		</BaseHelp>
		{ Boolean( groups.length ) ? <Flex
			direction={ 'column' }
			align={ 'center' }
			style={ {
				marginBottom: '1em',
			} }
		>
			{ groups.map( current => (
				<DynamicItem
					key={ uniqKey( current.id ) }
					current={ current }
					update={ updateValue }
				/>
			) ) }
		</Flex> : null }
		<Button
			icon={ 'plus-alt2' }
			isSecondary
			onClick={ () => {
				updateValue( {
					groups: [ ...groups, { id: Tools.getRandomID() } ],
				} );
			} }
		>
			{ __( 'Add Dynamic Value', 'jet-form-builder' ) }
		</Button>
	</>;
}

export default DynamicValues;