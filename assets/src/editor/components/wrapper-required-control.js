import { saveGlobalComponent } from "./manager";

export default function WrapperRequiredControl( {
													field,
													children,
													labelKey = 'label',
													requiredKey = 'required'
												} ) {
	const [ name, data ] = field;

	return (
		<div
			className="jet-user-meta__row fields-map-control"
			key={ 'user_meta_' + name }
		>
			<div className="jet-field-map__row-label">
				<span className={ 'fields-map__label' }>
					{ ( data.hasOwnProperty( labelKey ) && data[ labelKey ] ) && data[ labelKey ] }
					{ ( ! data.hasOwnProperty( labelKey ) ) && data }
				</span>
				{ ( data.hasOwnProperty( requiredKey ) && data[ requiredKey ] ) &&
				<span className={ 'fields-map__required' }> *</span> }
			</div>
			{ children }
		</div>
	);
}
saveGlobalComponent( 'JetFBComponents', { WrapperRequiredControl } );