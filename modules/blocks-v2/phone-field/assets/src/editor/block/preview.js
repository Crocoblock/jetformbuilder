import { __ } from '@wordpress/i18n';

export default function PhoneFieldVisualPreview({
	// same as your config option
	separateDialCode = true,

	// preview data
	dialCode = '+1',
	placeholder = '201-231-2312',
	value = '',
	globeIcon, // URL for globe icon

	// optional: tweak sizes if needed
	height = 36,
}) {
	const borderColor = '#dcdcde';
	const textColor = '#1e1e1e';
	const muted = '#6b7280';
	const bg = '#fff';

	const leftPadding = separateDialCode ? 10 : 10;
	const rightPadding = 12;

	// width of left “selector” block (icon + optional dial code + arrow)
	// dial code makes it wider
	const leftBlockMinWidth = separateDialCode ? 64 : 34;

	return (
		<div style={{ width: '100%', fontFamily: 'inherit' }}>
			{/* Outer field (single border like in iti) */}
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					width: '100%',
					height,
					background: bg,
					border: `1px solid ${borderColor}`,
					borderRadius: 4,
					boxSizing: 'border-box',
					overflow: 'hidden',
				}}
			>
				{/* Left selector area */}
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						gap: 6,
						paddingLeft: leftPadding,
						paddingRight: 8,
						minWidth: leftBlockMinWidth,
						height: '100%',
						boxSizing: 'border-box',
						// looks like a “button”, but preview-only
						cursor: 'default',
						userSelect: 'none',
					}}
					aria-hidden="true"
				>
					{/* Globe icon */}
					<div
						style={{
							width: 16,
							height: 16,
							backgroundImage: globeIcon ? `url(${globeIcon})` : 'none',
							backgroundSize: 'contain',
							backgroundRepeat: 'no-repeat',
							backgroundPosition: 'center',
							opacity: 0.9,
							flex: '0 0 auto',
						}}
					/>

					{/* Dial code only when separateDialCode */}
					{separateDialCode && (
						<span
							style={{
								fontSize: 13,
								color: textColor,
								whiteSpace: 'nowrap',
								lineHeight: 1,
							}}
						>
							{dialCode}
						</span>
					)}

					{/* Arrow */}
					<span
						style={{
							marginLeft: 2,
							width: 0,
							height: 0,
							borderLeft: '4px solid transparent',
							borderRight: '4px solid transparent',
							borderTop: `5px solid ${muted}`,
							opacity: 0.9,
						}}
					/>
				</div>

				{/* Divider (only for separateDialCode mode, like your 1st screenshot) */}
				{separateDialCode && (
					<div
						style={{
							width: 1,
							alignSelf: 'stretch',
							background: borderColor,
						}}
						aria-hidden="true"
					/>
				)}

				{/* Input area (same outer border) */}
				<input
					type="tel"
					disabled
					readOnly
					value={value}
					placeholder={placeholder.length > 0 ? placeholder : '201-231-2312'}
					onChange={() => {}}
					aria-label={__( 'Phone number', 'your-textdomain' )}
					style={{
						flex: 1,
						height: '100%',
						border: 'none',
						outline: 'none',
						paddingLeft: 10,
						paddingRight: rightPadding,
						fontSize: 13,
						color: textColor,
						background: bg,
						boxSizing: 'border-box',
						// Gutenberg sometimes adds weird input styles; normalize:
						minWidth: 0,
					}}
				/>
			</div>
		</div>
	);
}