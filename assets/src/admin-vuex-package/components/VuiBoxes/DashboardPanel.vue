<template>
	<div :class="wrapperClasses">
		<div class="jet-form-builder-page__panel-header">
			<div class="panel-header-icon">
				<slot name="icon"></slot>
			</div>
			<div class="panel-header-content"><span
				class="panel-header-desc">{{ config.description }}</span>
				<div class="panel-header-title">{{ config.title }}</div>
			</div>
		</div>
		<div class="jet-form-builder-page__panel-content" v-if="$slots.default">
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: 'DashboardPanel',
	props: {
		config: Object,
	},
	computed: {
		wrapperClasses() {
			return [ 'jet-form-builder-page__panel', this.config.slug, ...this.config.classes ];
		},
	}
};
</script>

<style >

</style>