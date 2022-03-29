<template>
	<div class="wrap">
		<h1 class="wp-heading-inline">{{ title }}</h1>
		<PostBoxGrid
			:containers="containers"
		>
			<template #after-form-fields>
				<TablePagination
					scope="form-fields"
				/>
			</template>
		</PostBoxGrid>
	</div>
</template>

<script>
const {
	PostBoxGrid,
	TablePagination
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
		TablePagination,
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

<style lang="scss">

#form-fields-wrapper {
	margin-bottom: 20px;
	#form-fields {
		margin-bottom: unset;
	}
	.jfb-pagination {
		padding: 0.8em 0;
	}

	.cell--field_type {
		flex: 0.3;
	}
	.cell--name {
		flex: 0.5;
	}
}

#actions-log {
	.cell--status{
		flex: 0.2;
	}
}

</style>