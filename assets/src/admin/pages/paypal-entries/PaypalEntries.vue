<template>
	<div class="jet-fb-paypal-entries-page wrap">
		<h1 class="cs-vui-title">{{ __( 'JetFormBuilder Paypal Entries', 'jet-form-builder' ) }}</h1>
		<div class="cx-vui-panel">
			<cx-vui-list-table>
				<cx-vui-list-table-heading
					:slots="columnsIDs"
					slot="heading"
				>
				</cx-vui-list-table-heading>
			</cx-vui-list-table>
		</div>
	</div>
</template>

<script>
import GetIncoming from '@admin/mixins/GetIncoming';

const { __ } = wp.i18n;

export default {
	name: 'paypal-entries',
	data() {
		return {};
	},
	mixins: [ GetIncoming ],
	methods: {
		__( string, context ) {
			return __( string, context );
		},
	},
}

</script>