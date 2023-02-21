const selectors = {
	getBlocks( state ) {
		return state.blocks;
	},
	getBlockMap( state ) {
		return state.blockMap;
	},
	getPropsToSave( state ) {
		return state.propsToSave;
	},
	isExecuted( state ) {
		return state.executed;
	},
	isRecentlyAdded( state, clientId ) {
		return -1 !== state.recentlyAdded.indexOf( clientId );
	},
	getUniqueNames( state, clientId ) {
		const currentBlock = state.blockMap[ clientId ] ?? false;

		if ( !currentBlock ) {
			return {
				hasChanged: false,
			};
		}

		let hasChanged = false;

		let names   = currentBlock.fields.map( ( { value } ) => value );
		const scope = currentBlock.hasOwnProperty( 'parentBlock' )
		              ? currentBlock.parentBlock.innerBlocks
		              : state.blocks;

		const walkerFields = ( fields ) => {
			for ( const field of fields ) {
				const nameIndex = names.indexOf( field.value );

				if ( -1 === nameIndex ) {
					continue;
				}
				names[ nameIndex ] = `${ names[ nameIndex ] }_copy`;
				hasChanged         = true;
				walkerFields( fields );
			}
		};

		for ( const block of scope ) {
			if ( clientId === block.clientId ) {
				continue;
			}
			walkerFields( block.fields );
		}

		return {
			hasChanged: hasChanged,
			names: names.join( '|' ),
		};
	},
};

export default {
	...selectors,
};