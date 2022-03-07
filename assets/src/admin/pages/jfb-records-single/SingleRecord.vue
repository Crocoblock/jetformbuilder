<template>
	<div class="wrap">
		<h1 class="wp-heading-inline">{{ values.title }}</h1>
		<PostBoxGrid
			:containers="values.containers"
		>
			<template #after-actions-log>
				<h3>Hello World!</h3>
			</template>
		</PostBoxGrid>
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

<style>

.cell--field_type.cell--field_type.cell--field_type {
	flex: 0.2;
}

.cell--name.cell--name.cell--name {
	flex: 0.5;
}

</style>