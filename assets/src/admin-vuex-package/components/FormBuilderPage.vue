<template>
	<div :class="{
		'wrap': true,
		'jet-form-builder-page': true,
	}">
		<div class="jfb-heading">
			<slot name="heading-before"></slot>
			<h1>{{ title }}</h1>
			<template v-if="$slots['heading-after']">
				<slot name="heading-after"></slot>
			</template>
			<template v-else-if="hasGlobalActions">
				<PageActions />
			</template>
		</div>
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
	},
	computed: {
		hasGlobalActions() {
			return this.$store.hasModule( 'actions' );
		}
	},
	components: {
		PageActions,
	}
};
</script>

<style lang="scss">
.jet-form-builder-page {
	.wp-heading {
		display: flex;
		align-items: flex-end;
		gap: 2em;
		padding: 9px 0 4px;

		h1 {
			padding: unset;
		}
	}
}

</style>