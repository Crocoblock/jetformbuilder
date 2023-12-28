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

const {
	      PromiseWrapper,
      } = JetFBMixins;

const { apiFetch } = wp;

export default {
	name: 'jfb-records-single',
	components: {
		AlertsList,
		PostBoxGrid,
		TablePagination,
		FormBuilderPage,
	},
	mixins: [
		PromiseWrapper,
	],
	created() {
		jfbEventBus.$on( 'alert-click-update', ( { button } ) => {
			this.installMigrations( button );
		} );
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
		},
	},
};
</script>

<style lang="scss">

#form-fields-wrapper {
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
	.cell--created_at {
		flex: 0.5;
	}
}

@media print {
	div#wpadminbar,
	div#adminmenumain,
	.wrap > *:not(h1.wp-heading-inline, .jet-form-builder-page #poststuff),
	.jfb-post-box,
	.jfb-pagination {
		display: none;
	}
	div#wpcontent {
		margin-left: unset;
		margin-right: unset;
	}
	html.wp-toolbar {
		padding-top: unset;
	}

	#form-fields-wrapper, #general-values-wrapper {
		display: block;
	}
}

</style>