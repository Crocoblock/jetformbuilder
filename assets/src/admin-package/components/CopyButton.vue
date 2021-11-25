<template>
	<cx-vui-button
		button-style="link-accent"
		size="mini"
		@click="copyObject()"
	>
		<template #label>
			{{ 'Copy' }}
		</template>
	</cx-vui-button>
</template>

<script>
import VueClipboard from 'vue-clipboard2';

Vue.use( VueClipboard );

export default {
	name: 'CopyButton',
	props: {
		column: {
			type: Object,
		},
	},
	computed: {
		preparedValue() {
			switch ( this.column.type ) {
				case 'rawArray':
					return JSON.stringify( this.column.value );
				default:
					return this.column.value;
			}
		},
	},
	methods: {
		copyObject() {
			this.$copyText( this.preparedValue ).then(
				e => this.$emit( 'success-copy', e ),
				e => this.$emit( 'failed-copy', e ),
			);
		},
	},
};
</script>