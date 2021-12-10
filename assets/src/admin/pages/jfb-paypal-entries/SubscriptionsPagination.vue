<template>
	<div class="jfb-subscriptions-pagination cx-vui-panel">
		<span class="jfb-subscriptions-pagination--results">
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
		<span class="jfb-subscriptions-pagination--sort">
			<cx-vui-input
				:label="__( 'Results per page', 'jet-form-builder' )"
				@on-input-change="changeLimit"
				:value="queryState.limit"
				type="number"
				min="1"
				:max="queryState.total"
				:disabled="loadingPage"
			></cx-vui-input>
		</span>
	</div>
</template>

<script>

const {
		  i18n,
		  GetIncoming,
	  } = window.JetFBMixins;

const {
		  mapState,
		  mapGetters,
	  } = Vuex;

export default {
	name: "SubscriptionsPagination",
	mixins: [ i18n, GetIncoming ],
	computed: {
		...mapState( [
			'queryState',
			'loadingPage',
		] ),
		endpoint() {
			const { receive_url } = this.getIncoming();

			return receive_url;
		},
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

			this.$store.dispatch( 'fetchPage', this.endpoint );
		},
		changePage( pageNum ) {
			if ( this.loadingPage ) {
				return;
			}
			this.$store.commit( 'setQueryState', {
				currentPage: pageNum,
			} );

			this.$store.dispatch( 'fetchPage', this.endpoint );
		},
	},
}
</script>

<style lang="scss">

.jfb-subscriptions-pagination {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 0 0 1.5em;
	&--sort {
		.cx-vui-component {
			column-gap: 1em;
			justify-content: center;
			align-items: center;
		}
	}
}

</style>