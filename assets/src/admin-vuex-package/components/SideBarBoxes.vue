<template>
	<div class="jfb-content-sidebar" v-if="boxes.length">
		<template v-for="(box, index) in boxes">
			<DashboardPanel
				:config="box"
				:key="index"
				v-if="'panel' === box.type"
			>
				<template v-if="$slots[ 'icon-' + box.slug ]" #icon>
					<slot :name="'icon-' + box.slug"></slot>
				</template>
				<template v-if="$scopedSlots['content-' + box.slug]" #default>
					<slot :name="'content-' + box.slug" v-bind="box"></slot>
				</template>
			</DashboardPanel>
			<DashboardBanner
				:config="box"
				:key="'banner-' + index"
				v-else-if="'banner' === box.type"
			>
			</DashboardBanner>
		</template>
	</div>
</template>

<script>
import DashboardPanel from './VuiBoxes/DashboardPanel';
import DashboardBanner from './VuiBoxes/DashboardBanner';
import "./VuiBoxes/banners.scss";

const { i18n, GetIncoming } = JetFBMixins;

export default {
	name: 'SideBarBoxes',
	components: { DashboardPanel, DashboardBanner },
	mixins: [ i18n, GetIncoming ],
	data: () => ({
		boxes: []
	}),
	created() {
		this.boxes = this.getIncoming( 'boxes' );
	}

};
</script>

<style lang="scss">
.jfb-content-sidebar {
	width: 300px;
	display: flex;
	flex-direction: column;
	gap: 2em;
}
</style>