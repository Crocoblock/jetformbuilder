import DynamicItem from './DynamicItem';
import Tools from '../../tools';
import BaseHelp from '../../components/BaseHelp';
import useBlockAttributes from '../../blocks/hooks/useBlockAttributes';
import useUniqKey from '../../blocks/hooks/useUniqKey';
import useIsHasAttribute from '../../hooks/useIsHasAttribute';
import ContainersList from '../../components/ContainersList';

const {
	      __,
      } = wp.i18n;
const {
	      useState,
      } = wp.element;
const {

	      Button,
      } = wp.components;

// eslint-disable-next-line max-lines-per-function
function DynamicValues() {
	const [ attributes, setAttributes ] = useBlockAttributes();

	const uniqKey = useUniqKey();
	const value   = attributes.value ?? {};
	const groups  = value.groups ?? [];

	const [ openModal, setOpenModal ] = useState( false );

	if ( !useIsHasAttribute( 'value' ) ) {
		return null;
	}

	const orGroups = groups.filter(
		// Exclude first item
		( c, index ) => 0 !== index,
	);

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
				`Or use a condition-dependent value`,
				'jet-form-builder',
			) + ' ' }
			<Button
				isLink
				onClick={ () => {} }
				label={ __(
					`Former Set Value functionality, moved from the Conditional Block`,
					'jet-form-builder',
				) }
				showTooltip
			>(?)</Button>
		</BaseHelp>
		{ Boolean( groups.length ) ? <ContainersList>
			<DynamicItem
				key={ uniqKey( groups[ 0 ].id ) }
				current={ groups[ 0 ] }
				update={ updateValue }
				isOpenModal={ openModal }
				setOpenModal={ setOpenModal }
			/>
			{ Boolean( orGroups.length ) && orGroups.map( current => <>
				<b>{ __( 'OR', 'jet-form-builder' ) }</b>
				<DynamicItem
					key={ uniqKey( current.id ) }
					current={ current }
					update={ updateValue }
					isOpenModal={ openModal }
					setOpenModal={ setOpenModal }
				/>
			</> ) }
		</ContainersList> : null }
		<Button
			icon={ 'plus-alt2' }
			isSecondary
			onClick={ () => {
				const id = Tools.getRandomID();

				updateValue( {
					groups: [
						...groups,
						{ id, conditions: [ { __visible: true } ] },
					],
				} );

				setOpenModal( id );
			} }
		>
			{ __( 'Add Dynamic Value', 'jet-form-builder' ) }
		</Button>
	</>;
}

export default DynamicValues;