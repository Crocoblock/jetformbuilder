<template>
	<div :class="{
		'wrap': true,
		'jet-form-builder-page': true,
		'jet-form-builder-page--records': true,
	}">
		<h1 class="cs-vui-title">{{ __( 'JetFormBuilder Form Records', 'jet-form-builder' ) }}</h1>
		<TablePagination/>
		<ChooseAction/>
		<EntriesStoreTable/>
		<ChooseAction/>
		<TablePagination/>
	</div>
</template>

<script>
const {
	TablePagination,
	EntriesStoreTable,
	ChooseAction,
} = JetFBComponents;
const {
	TableViewMixin,
	i18n,
} = JetFBMixins;

const { mapMutations, mapState } = Vuex;

export default {
	name: 'jfb-records',
	components: {
		TablePagination,
		EntriesStoreTable,
		ChooseAction,
	},
	data() {
		return {
			messages: {},
		};
	},
	mixins: [ TableViewMixin, i18n ],
	created() {
		const { actions_list, messages } = this.getIncoming();

		this.messages = JSON.parse( JSON.stringify( messages ) );

		this.setActionsList( actions_list );

		this.addActionPromise( {
			action: 'delete',
			promise: this.deleteChecked.bind( this ),
		} );
	},
	computed: {
		...mapState( [
			'checked',
		] ),
	},
	methods: {
		...mapMutations( [
			'setActionsList',
			'addActionPromise',
		] ),
		deleteChecked( resolve, reject ) {
			if ( ! this.checked.length ) {
				reject();
				this.$CXNotice.add( {
					message: this.messages?.empty_checked,
					type: 'error',
					duration: 4000,
				} );
			}
		},
	},
};
</script>

<style lang="scss">

.jet-form-builder-page--records {
	.cx-vue-list-table {

		.cell--id {
			width: 120px;
		}

		.cell--status {
			width: 120px;
		}

		.cell--form {
			width: 180px;
		}

		.cell--referrer {
			width: 180px;
		}

		.cell--user {
			width: 180px;
		}
	}
}

</style>