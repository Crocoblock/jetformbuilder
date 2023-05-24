<template>
	<span
		class="dashicons dashicons-update"
	/>
</template>

<script>
export default {
	name: 'LoadingIcon',
};
</script>

<style scoped>
.dashicons {
	animation: jfb-loading-icon 2s infinite linear;
}

@keyframes jfb-loading-icon {
	0% {
		transform: rotate(0deg)
	}

	to {
		transform: rotate(359deg)
	}
}
</style>