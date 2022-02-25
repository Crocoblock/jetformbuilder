<template>
	<div class="wrap">
		<h1 class="wp-heading-inline">{{ values.title }}</h1>
		<PostBoxGrid
			:containers="values.containers"
		/>
	</div>
</template>

<script>
const {
	PostBoxGrid,
} = JetFBComponents;

const { GetIncoming } = JetFBMixins;

export default {
	name: 'jfb-records-single',
	components: {
		PostBoxGrid,
	},
	data() {
		return {
			values: this.getIncoming(),
		};
	},
	mixins: [ GetIncoming ],
	created() {
	},
};
</script>

<style scoped>

</style>