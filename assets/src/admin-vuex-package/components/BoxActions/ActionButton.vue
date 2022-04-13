<template>
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
		:disabled="isDisabled"
		:loading="isLoading"
		target="_blank"
		@click="globalEmit"
	>
		<template #label>{{ action.button.label }}</template>
	</cx-vui-button>
</template>

<script>
import ScopeStoreMixin from '../../mixins/ScopeStoreMixin';

const {
	mapState,
	mapGetters,
	mapMutations,
	mapActions,
} = Vuex;

export default {
	name: 'ActionButton',
	mixins: [ ScopeStoreMixin ],
	props: {
		action: Object,
	},
	computed: {
		...mapGetters( [
			'isDoing',
		] ),
		slug() {
			return this.action.slug;
		},
		isDisabled() {
			return this.getter( 'actions/isDisabled', this.slug ) || this.isGlobalDoing;
		},
		isLoading() {
			return this.getter( 'actions/isLoading', this.slug );
		},
		isGlobalDoing() {
			jfbEventBus.reactiveCounter;

			return this.isDoing;
		},
	},
	methods: {
		globalEmit() {
			this.commit( 'actions/setCurrentAction', this.slug );
			jfbEventBus.$emit( this.scope + '-' + this.slug );
		},
	}
};
</script>

<style scoped>

</style>