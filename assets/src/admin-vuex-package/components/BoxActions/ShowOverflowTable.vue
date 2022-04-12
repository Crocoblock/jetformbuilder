<template>
	<cx-vui-switcher
		class="jfb-cx-vui-component"
		v-if="showOverflowControl"
		:label="__( 'Show overflow', 'jet-form-builder' )"
		v-model="showOverflow"
	></cx-vui-switcher>
</template>

<script>
import ScopeStoreMixin from '../../mixins/ScopeStoreMixin';

const { i18n } = JetFBMixins;

export default {
	name: 'ShowOverflowTable',
	mixins: [ ScopeStoreMixin, i18n ],
	computed: {
		showOverflowControl() {
			return this.getter( 'options/showOverflowControl' );
		},
		showOverflow: {
			get() {
				return this.getter( 'options/isShowOverflow' );
			},
			set() {
				this.commit( 'options/toggleShowOverflow' );
			}
		}
	},
};
</script>

<style>

</style>