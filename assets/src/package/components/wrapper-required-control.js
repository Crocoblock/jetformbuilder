const { RawHTML } = wp.element;

export default function WrapperRequiredControl( {
													field,
													children,
													labelKey = 'label',
													requiredKey = 'required',
													helpKey = 'help',
												} ) {
	const [ name, data ] = field;

	return (
		<div
			className="jet-user-meta__row"
			key={ 'user_meta_' + name }
		>
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