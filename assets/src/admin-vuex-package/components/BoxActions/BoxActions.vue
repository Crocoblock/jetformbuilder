<template>
	<div class="major-publishing-actions" v-if="primary.length">
		<div class="jfb-primary-actions">
			<ActionButton
				v-for="action in primary"
				:scope="scope"
				:key="action.slug"
				:action="action"
				:class="[
					'box-actions-item',
					'action-' + action.slug,
				]"
			/>
		</div>
		<div class="clear"></div>
	</div>
</template>

<script>
import ScopeStoreMixin from '../../mixins/ScopeStoreMixin';
import ActionButton from './ActionButton';

const {
	mapState,
	mapGetters,
	mapMutations,
	mapActions,
} = Vuex;

export default {
	name: 'BoxActions',
	components: { ActionButton },
	mixins: [ ScopeStoreMixin ],
	computed: {
		primary() {
			const actions = this.getter( 'actions/actions' );

			return actions
				? actions.filter( action => 'primary' === action.position )
				: [];
		},
	},
};
</script>

<style>
.jfb-primary-actions {
	display: flex;
	justify-content: space-between;
}

.cx-vui-button.cx-vui-button--size-link {
	font-size: inherit;
}

.major-publishing-actions {
	padding: 10px;
	clear: both;
	border-top: 1px solid #dcdcde;
	background: #f6f7f7;
}
</style>