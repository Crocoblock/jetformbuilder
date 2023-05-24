<template>
	<div :class="{
		'wrap': true,
		'jet-form-builder-page': true,
	}">
		<slot name="heading-before"></slot>
		<h1 class="wp-heading-inline">
			{{ title }}
		</h1>
		<template v-if="$slots['heading-after']">
			<slot name="heading-after"></slot>
		</template>
		<template v-else-if="hasGlobalActions">
			<PageActions/>
		</template>
		<hr class="wp-header-end">
		<slot></slot>
	</div>
</template>

<script>
import PageActions from './PageActions';

export default {
	name: 'FormBuilderPage',
	props: {
		title: {
			type: String,
			default: window?.JetFBPageConfig?.title ?? '',
		},
		inlineHeader: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		hasGlobalActions() {
			return this.$store.hasModule( 'actions' );
		},
	},
	components: {
		PageActions,
	},
};
</script>

<style lang="scss">
.jet-form-builder-page {
	& > h1.inline {
		display: inline-block;
	}
}

</style>