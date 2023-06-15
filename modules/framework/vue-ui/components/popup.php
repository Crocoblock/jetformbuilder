<div class="cx-vui-popup" v-if="value">
	<div
		class="cx-vui-popup__overlay"
		v-if="overlay"
		@click="handleCancel"
	></div>
	<div
		class="cx-vui-popup__body"
		:style="'width:' + bodyWidth"
	>
		<div
			class="cx-vui-popup__close"
			v-if="close"
			@click="handleCancel"
		>
			<svg width="20" height="20" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3.00671L8.00671 7L12 10.9933L10.9933 12L7 8.00671L3.00671 12L2 10.9933L5.99329 7L2 3.00671L3.00671 2L7 5.99329L10.9933 2L12 3.00671Z"/></svg>
		</div>
		<div class="cx-vui-popup__header" v-if="header">
			<slot name="title"></slot>
		</div>
		<div class="cx-vui-popup__content">
			<slot name="content"></slot>
		</div>
		<div class="cx-vui-popup__footer" v-if="footer">
			<cx-vui-button
				:button-style="'accent'"
				:size="'mini'"
				@click="handleOk"
				v-if="showOk"
			><span slot="label">{{ okLabel }}</span></cx-vui-button>
			<cx-vui-button
				:size="'mini'"
				@click="handleCancel"
				v-if="showCancel"
			><span slot="label">{{ cancelLabel }}</span></cx-vui-button>
		</div>
	</div>
</div>