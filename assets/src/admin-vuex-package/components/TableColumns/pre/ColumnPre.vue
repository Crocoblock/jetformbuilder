<template>
	<span>
		<pre v-if="isShowOverflow">{{ parsedValue }}</pre>
		<span v-else>{{ value }}</span>
	</span>
</template>

<script>
import ScopeStoreMixin from '../../../mixins/ScopeStoreMixin';

export default {
	name: 'pre--item',
	props: [ 'value', 'full-entry', 'entry-id', 'scope' ],
	mixins: [ ScopeStoreMixin ],
	computed: {
		isShowOverflow() {
			return this.getter( 'options/isShowOverflow' );
		},
		parsedValue() {
			let json;
			try {
				json = JSON.parse( this.value );
			} catch ( error ) {
				return this.value;
			}
			return JSON.stringify( json, undefined, 4 );
		},
	},
	methods: {},
};
</script>

<style lang="scss">
.jet-form-builder-page {
	pre {
		margin: unset;
		overflow: auto;
	}
}
</style>