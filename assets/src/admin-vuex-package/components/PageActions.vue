<template>
	<div class="page-actions">
		<div
			v-for="action in pageActions"
			:key="action.slug"
			:class="[
				'page-actions-item',
				'action-' + action.slug,
			]"
		>
			<cx-vui-button
				v-if="action.button"
				:key="`button-action-${action.slug}`"
				:class="[
					`cx-vui-button--style-${action.button.type}`,
					...action.button.classes,
				]"
				:button-style="action.button.style"
				:size="action.button.size"
				:url="action.button.url"
				:tag-name="action.button.url ? 'a' : 'button'"
				:disabled="isDisabled( action.slug ) || isGlobalDoing"
				:loading="isLoading( action.slug )"
				target="_blank"
				@click="globalEmit( action )"
			>
				<template #label>{{ action.button.label }}</template>
			</cx-vui-button>
		</div>

	</div>
</template>

<script>
import ScopeStoreMixin from '../mixins/ScopeStoreMixin';

const {
	mapState,
	mapGetters,
	mapMutations,
	mapActions,
} = Vuex;

export default {
	name: 'PageActions',
	mixins: [ ScopeStoreMixin ],
	computed: {
		...mapGetters( 'actions', [
			'pageActions',
			'isLoading',
			'isDisabled',
		] ),
		...mapGetters( [
			'isDoing'
		] ),
		isGlobalDoing() {
			jfbEventBus.reactiveCounter;

			return this.isDoing;
		}
	},
	methods: {
		...mapMutations( 'actions', [
			'setCurrentAction',
		] ),
		globalEmit( { slug } ) {
			this.setCurrentAction( slug );
			jfbEventBus.$emit( 'page-' + slug );
		},
	},
};
</script>

<style scoped>

.page-actions {
	display: flex;
	gap: 1em;
}

</style>