<template>
	<cx-vui-button
		button-style="link-accent"
		size="mini"
		@click="copyObject()"
	>
		<template #label>
			<slot name="label">{{ 'Copy' }}</slot>
		</template>
	</cx-vui-button>
</template>

<script>
import VueClipboard from 'vue-clipboard2';

Vue.use( VueClipboard );

export default {
	name: 'CopyButton',
	props: [ 'value' ],
	methods: {
		copyObject() {
			const json = JSON.stringify( this.value );

			this.$copyText( json ).then( function ( e ) {
				console.log( e );
			}, function ( e ) {
				console.log( e );
			} );
		},
	},
};
</script>