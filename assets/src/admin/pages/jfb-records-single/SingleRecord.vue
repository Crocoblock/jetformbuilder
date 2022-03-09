<template>
	<div class="wrap">
		<h1 class="wp-heading-inline">{{ values.title }}</h1>
		<PostBoxGrid
			:containers="values.containers"
		>
		</PostBoxGrid>
	</div>
</template>

<script>
const {
	PostBoxGrid,
	EditTableSwitcher,
} = JetFBComponents;

const { GetIncoming } = JetFBMixins;

const {
	mapGetters,
	mapMutations
} = Vuex;

export default {
	name: 'jfb-records-single',
	components: {
		PostBoxGrid,
		EditTableSwitcher,
	},
	data() {
		return {
			values: this.getIncoming(),
		};
	},
	mixins: [ GetIncoming ],
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