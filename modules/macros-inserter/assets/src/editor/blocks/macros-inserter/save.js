import { RawHTML } from '@wordpress/element';

export default function Save( { attributes } ) {
	return (
		<div>
			<RawHTML>{ attributes?.content ?? '' }</RawHTML>
		</div>
	);
}