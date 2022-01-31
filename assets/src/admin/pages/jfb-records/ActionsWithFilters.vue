<template>
	<div :class="wrapperClass">
		<div class="cx-vui-panel">
			<ChooseAction/>
		</div>
		<div class="cx-vui-panel">
			<div></div>
			<cx-vui-f-select
				:options-list="[ { value: 1, label: 'Test' }, { value: 2, label: 'Test 22' }, { value: 3, label: 'Test 334' } ]"
				:multiple="true"
				:wrapper-css="[ 'equalwidth' ]"
				v-model="selected"
			></cx-vui-f-select>
		</div>
	</div>
</template>

<script>
const {
		  ChooseAction,
	  } = JetFBComponents;

const {
		  mapMutations,
	  } = Vuex;

export default {
	name: "ActionsWithFilters",
	components: {
		ChooseAction,
	},
	data() {
		return {
			loading: false,
			selected: []
		};
	},
	computed: {
		wrapperClass() {
			return {
				'jfb-row-wrapper': true,
				'jfb-row-wrapper--loading': this.loading,
			};
		},
	},
	created() {
		this.toggleProcess();
		this.toggleProcess();
	},
	methods: {
		...mapMutations( [
			'toggleDoingAction',
		] ),
		toggleProcess() {
			this.toggleDoingAction();
			this.loading = ! this.loading;
		}
	},
}
</script>

<style lang="scss" scoped>

.jfb-row-wrapper {
	display: flex;
	gap: 2em;
	align-items: end;

	.cx-vui-panel:nth-child(1) {
		flex: 1;
	}
	.cx-vui-panel:nth-child(2) {
		padding: 1em;
		flex: 3;
	}
	&--loading {
		opacity: 0.5;
	}

	.cx-vui-component {
		padding: unset;
	}
}

</style>