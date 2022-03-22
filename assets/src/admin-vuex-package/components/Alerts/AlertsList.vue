<template>
	<div
		class="jet-form-builder-page__alerts"
		v-if="visible"
	>
		<AlertItem
			v-for="notice in getNotices"
			:key="notice.id"
			:id="notice.id"
		>
			<template v-if="$slots[ 'alert-buttons-' + notice.id ]" #alert-buttons>
				<slot :name="[ 'alert-buttons-' + notice.id ]"></slot>
			</template>
		</AlertItem>
	</div>
</template>

<script>
import AlertItem from './AlertItem';

const { mapGetters } = Vuex;

export default {
	name: 'AlertsList',
	components: { AlertItem },
	computed: {
		...mapGetters( [
			'getNotices',
		] ),
		visible: function () {
			return 0 !== this.getNotices.length;
		},
	},
};
</script>

<style lang="scss">
@import "style";

</style>