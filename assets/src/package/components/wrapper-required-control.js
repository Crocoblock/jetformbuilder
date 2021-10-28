const { RawHTML } = wp.element;

export default function WrapperRequiredControl( {
													field,
													children,
													labelKey = 'label',
													requiredKey = 'required',
													helpKey = 'help',
												} ) {
	const [ name, data ] = field;

	/*const IconComponent = data.icon ? props => {
		return <div
			key={ 'inner_icon_field_' + name }
			{ ...props }
		>{ data.icon }</div>
	} : null;*/

	return (
		<div
			className="jet-user-meta__row"
			key={ 'user_meta_' + name }
		>
			{/*<IconComponent
				className={ 'jet-field-map__row-icon' }
				key={ 'icon_field_' + name }
				style={ { height: '48px', width: '48px' } }
			/>*/}
			<div className="jet-field-map__row-label">

				<span className={ 'fields-map__label' }>
					{ ( data.hasOwnProperty( labelKey ) && data[ labelKey ] ) && data[ labelKey ] }
					{ ( ! data.hasOwnProperty( labelKey ) ) && data }
				</span>
				{ ( data.hasOwnProperty( requiredKey ) && data[ requiredKey ] ) &&
				<span className={ 'fields-map__required' }> *</span> }
				{ data[ helpKey ] && <p
					className={ 'components-base-control__help' }
					style={ {
						color: 'rgb(117, 117, 117)',
						margin: '1em 0 0 0',
					} }>
					<RawHTML>{ data[ helpKey ] }</RawHTML>
				</p> }
			</div>
			{ children }
		</div>
	);
}