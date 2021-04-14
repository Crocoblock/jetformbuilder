<div
	:class="{ 'cx-vui-collapse': true, 'cx-vui-collapse--collapsed': 'collapsed' === this.state }"
	v-if="isVisible()"
>
	<div
		class="cx-vui-collapse__heading"
		@click="switchState"
	>
		<span :class="[ 'cx-vui-collapse__heading-icon', 'dashicons', this.iconArrow ]"></span>
		<slot name="title"></slot>
	</div>
	<div class="cx-vui-collapse__content">
		<slot name="content"></slot>
	</div>
</div>