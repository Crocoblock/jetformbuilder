<template>
	<cx-vui-switcher
		class="jfb-cx-vui-component"
		v-if="isEditableTable"
		:label="__( 'Edit table', 'jet-form-builder' )"
		:value="isEnableEdit"
		@input="toggleEditTable"
	></cx-vui-switcher>
</template>

<script>
import ScopeStoreMixin from '../mixins/ScopeStoreMixin';

const { i18n } = JetFBMixins;

export default {
	name: 'EditTableSwitcher',
	mixins: [ ScopeStoreMixin, i18n ],
	computed: {
		isEnableEdit() {
			return this.getter( 'isEnableEdit' );
		},
		isEditableTable() {
			return this.getter( 'isEditableTable' );
		},
	},
	methods: {
		toggleEditTable() {
			this.commit( 'toggleEditTable' );
		},
	},
};
</script>

<style lang="scss">

.jfb-cx-vui-component {

	&.cx-vui-component {
		column-gap: 1em;
		flex-direction: row-reverse;
		padding: 1.2em;
	}
	.cx-vui-component__label {
		font-size: inherit;
	}
}

</style>