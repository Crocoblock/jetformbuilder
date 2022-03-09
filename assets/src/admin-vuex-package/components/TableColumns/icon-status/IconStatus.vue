<template>
	<div class="jfb-icon-status">
		<span v-if="'success' === value.type">
			<span class="dashicons dashicons-yes-alt"></span>
		</span>
		<span v-else-if="'skipped' === value.type">
			<span class="dashicons dashicons-warning"></span>
		</span>
		<span v-else>
			<span class="dashicons dashicons-dismiss"></span>
		</span>
	</div>
</template>

<script>
export default {
	name: 'icon_status--item',
	props: [ 'value', 'full-entry', 'entry-id' ],
};
</script>

<style lang="scss" scoped>
.jfb-icon-status > span {
	font-size: 1.5em;
}

.dashicons {
	font-size: 1em;

	&-dismiss {
		color: #ff4500;
	}

	&-warning {
		color: #ffa500;
	}

	&-yes-alt {
		color: #32cd32;
	}
}
</style>