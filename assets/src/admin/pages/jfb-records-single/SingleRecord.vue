<template>
	<FormBuilderPage>
		<AlertsList/>
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
	AlertsList,
} = JetFBComponents;

const { apiFetch } = wp;

export default {
	name: 'jfb-records-single',
	components: {
		AlertsList,
		PostBoxGrid,
		TablePagination,
		FormBuilderPage,
	},
	created() {
		jfbEventBus.$on( 'alert-click-update', ( { button } ) => {
			this.installMigrations( button );
		} )
	},
	methods: {
		installMigrations( button ) {
			const { rest } = button;

			apiFetch( rest ).then( response => {
				jfbEventBus.$CXNotice.add( {
					message: response.message,
					type: 'success',
					duration: 4000,
				} );

				window.location.reload();

			} ).catch( error => {
				jfbEventBus.$CXNotice.add( {
					message: error.message,
					type: 'error',
					duration: 4000,
				} );
			} );
		}
	}
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

</style>