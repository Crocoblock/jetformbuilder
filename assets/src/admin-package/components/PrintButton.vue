<template>
	<cx-vui-button
		@click="print"
		button-style="accent"
		size="mini"
	>
		<template #label>
			<template v-if="$slots.default">
				<slot></slot>
			</template>
			<template v-else>
				{{ __( 'Print', 'jet-form-builder' ) }}
			</template>
		</template>
	</cx-vui-button>
</template>

<script>
import i18n from '../mixins/i18n';

export default {
	name: 'PrintButton',
	methods: {
		print() {
			window.print();
		},
	},
	mixins: [ i18n ],
};
</script>

<style scoped>
@media print {
	.cx-vui-button {
		display: none;
	}
}
</style>