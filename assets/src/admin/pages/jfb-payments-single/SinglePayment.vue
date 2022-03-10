<template>
	<div class="wrap">
		<h1 class="wp-heading-inline">{{ title }}</h1>
		<PostBoxGrid
			:containers="containers"
		>
		</PostBoxGrid>
	</div>
</template>

<script>
const {
	PostBoxGrid,
} = JetFBComponents;

const { GetIncoming } = JetFBMixins;

const {
	mapGetters,
	mapMutations
} = Vuex;

export default {
	name: 'jfb-payments-single',
	components: {
		PostBoxGrid,
	},
	data() {
		return {
			title: this.getIncoming( 'title' ),
			containers: this.getIncoming( 'containers' ),
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