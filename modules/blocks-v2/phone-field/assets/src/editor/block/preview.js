import { __ } from '@wordpress/i18n';

export default function PhoneFieldVisualPreview({
	separateDialCode = true,
	separateDialCodeClass = 'separate-dial-code',
	dialCode = '+1',
	placeholder = '201-231-2312',
	value = '',
	globeIcon,
}) {
	return (
		<div className='jet-form-builder'>
			<div className={`jet-form-builder__field-wrap phone-field-wrap phone-field-preview ${separateDialCode ? separateDialCodeClass: ''}`}>
				<div className='iti iti--allow-dropdown iti--show-flags iti--inline-dropdown'>
					<div className='iti__country-container' aria-hidden="true">
						<div className='iti__selected-country'>
							<div className="iti__selected-country-primary">
								<div
									className="iti__flag iti__globe"
									style={{
										backgroundImage: globeIcon ? `url(${globeIcon})` : 'none',
									}}
								></div>
								<div className="iti__arrow"></div>
							</div>
							{ separateDialCode &&
								<div className="iti__selected-dial-code">{dialCode}</div>
							}
						</div>
					</div>

					<input
						type="tel"
						className='jet-form-builder__field phone-field-intl iti__tel-input'
						disabled
						readOnly
						value={value}
						placeholder={placeholder.length > 0 ? placeholder : '201-231-2312'}
						onChange={() => {}}
						aria-label={__( 'Phone number', 'jet-form-builder' )}
					/>
				</div>
			</div>
		</div>
	);
}