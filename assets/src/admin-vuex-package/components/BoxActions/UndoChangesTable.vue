<template>
	<cx-vui-button
		v-if="isEditableTable"
		:disabled="! hasChanges"
		button-style="link-accent"
		size="mini"
		@click="hasChanges = true"
	>
		<template #label>
			<span class="dashicons dashicons-undo"></span>
			{{ __( 'Undo', 'jet-form-builder' ) }}
		</template>
	</cx-vui-button>
</template>

<script>
import ScopeStoreMixin from '../../mixins/ScopeStoreMixin';

const { i18n } = JetFBMixins;

export default {
	name: 'UndoChangesTable',
	mixins: [ ScopeStoreMixin, i18n ],
	computed: {
		hasChanges: {
			get() {
				return this.getter( 'hasChanges' );
			},
			set( value ) {
				this.commit( 'revertChanges' );
			},
		},
		isEditableTable() {
			return this.getter( 'isEditableTable' );
		},
	},
};
</script>

<style>

</style>