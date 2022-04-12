<template>
	<FormBuilderPage>
		<PostBoxGrid>
			<template #after-form-fields>
				<TablePagination
					scope="form-fields"
				/>
			</template>
		</PostBoxGrid>
	</FormBuilderPage>
</template>

<script>
const {
	PostBoxGrid,
	TablePagination,
	FormBuilderPage,
} = JetFBComponents;

export default {
	name: 'jfb-records-single',
	components: {
		PostBoxGrid,
		TablePagination,
		FormBuilderPage
	},
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