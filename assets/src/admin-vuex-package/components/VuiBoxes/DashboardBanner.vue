<template>
	<div :class="wrapperClasses">
		<div class="banner-frame">
			<div class="banner-inner">
				<div class="banner-label">{{ config.label }}</div>
				<div class="banner-title">
					<span>{{ config.title }}</span>
				</div>
				<div class="banner-content">{{ config.content }}</div>
				<div class="banner-buttons" v-if="hasButtons">
					<cx-vui-button
						v-for="(button, index) in config.buttons"
						:key="`button-banner-${index}`"
						:class="`cx-vui-button--style-${button.type}`"
						:button-style="button.style"
						size="mini"
						:url="button.url"
						tag-name="a"
						target="_blank"
					>
						<template #label>{{ button.label }}</template>
					</cx-vui-button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'DashboardBanner',
	props: {
		config: Object,
	},
	computed: {
		wrapperClasses() {
			return [ 'jet-form-builder-page__banner', this.config.slug, ...this.config.classes ];
		},
		hasButtons() {
			return 0 !== this.config?.buttons?.length;
		},
	},
};
</script>

<style>

</style>