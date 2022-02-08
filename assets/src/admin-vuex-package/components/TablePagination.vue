<template>
	<div class="jfb-pagination">
		<span class="jfb-pagination--results">
			{{
				__s(
					`Showing %d - %d of %d results.`,
					'jet-form-builder',
					queryState.itemsFrom,
					queryState.itemsTo,
					queryState.total,
				)
			}}
		</span>
		<cx-vui-pagination
			v-if="queryState.limit < queryState.total"
			:total="queryState.total"
			:page-size="queryState.limit"
			:current="queryState.currentPage"
			:disabled="loadingPage"
			@on-change="changePage"
		></cx-vui-pagination>
		<div class="jfb-pagination--sort">
			<cx-vui-input
				:label="__( 'Results per page', 'jet-form-builder' )"
				@on-input-change="changeLimit"
				:value="queryState.limit"
				type="number"
				:min="1"
				:max="queryState.total"
				:disabled="loadingPage"
			></cx-vui-input>
		</div>
	</div>
</template>

<script>
const { i18n, GetIncoming } = JetFBMixins;

const { mapState, mapGetters } = Vuex;

export default {
	name: "TablePagination",
	mixins: [ i18n, GetIncoming ],
	computed: {
		...mapState( [
			'queryState',
			'loadingPage',
		] ),
	},
	methods: {
		changeLimit( { target: { value } } ) {
			if ( this.loadingPage ) {
				return;
			}
			if ( this.queryState.total < value ) {
				value = this.queryState.total;
			}
			this.$store.commit( 'setQueryState', {
				limit: +value,
			} );

			this.$store.dispatch( 'fetchPage' );
		},
		changePage( pageNum ) {
			if ( this.loadingPage ) {
				return;
			}
			this.$store.commit( 'setQueryState', {
				currentPage: pageNum,
			} );

			this.$store.dispatch( 'fetchPage' );
		},
	},
}
</script>

<style lang="scss">

.jfb-pagination {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1.5em;
	margin-bottom: unset;
	&--sort {
		.cx-vui-component {
			column-gap: 1em;
			justify-content: center;
			align-items: center;
			padding: unset;
		}
	}
	.cx-vui-input {
		background-color: white;
	}
}

</style>