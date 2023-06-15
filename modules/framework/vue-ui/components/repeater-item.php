<div
	:class="[
		{
			'cx-vui-repeater-item': true,
			'cx-vui-panel': true,
			'cx-vui-repeater-item--is-collpased': this.isCollapsed,
		},
		this.customCssClass
	]"
>
	<div
		:class="{
			'cx-vui-repeater-item__heading': true,
			'cx-vui-repeater-item__heading--is-collpased': this.isCollapsed
		}"
	>
		<div
			class="cx-vui-repeater-item__heading-start"
			@click.stop="isCollapsed = ! isCollapsed"
		>
			<div
				v-handle
				class="cx-vui-repeater-item__handle"
			>
				<svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="2" y1="3" x2="14" y2="3" stroke-width="2"/><line x1="2" y1="11" x2="14" y2="11" stroke-width="2"/><line x1="2" y1="7" x2="14" y2="7" stroke-width="2"/></svg>
			</div>
			<svg
				:class="{
					'cx-vui-repeater-item__collapse':true,
					'cx-vui-repeater-item__collapse--is-collpased': this.isCollapsed
				}"
				width="14"
				height="14"
				viewBox="0 0 14 14"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			><rect width="14" height="14" transform="matrix(1 0 0 -1 0 14)" fill="white"/><path d="M13 5.32911L7 11L1 5.32911L2.40625 4L7 8.34177L11.5938 4L13 5.32911Z"/></svg>
			<div class="cx-vui-repeater-item__title" v-html="title"></div>
			<div class="cx-vui-repeater-item__subtitle" v-html="subtitle"></div>
		</div>
		<div class="cx-vui-repeater-item__heading-end">
			<div
				class="cx-vui-repeater-item__copy"
				@click="handleCopy"
			>
				<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="16" height="16" transform="matrix(1 0 0 -1 0 16)" fill="white"/><path d="M13.401 14.5362V4.35745H5.47721V14.5362H13.401ZM13.401 2.92766C13.7848 2.92766 14.1234 3.07518 14.4169 3.37021C14.7104 3.64255 14.8571 3.97163 14.8571 4.35745V14.5362C14.8571 14.922 14.7104 15.2624 14.4169 15.5574C14.1234 15.8525 13.7848 16 13.401 16H5.47721C5.09344 16 4.75482 15.8525 4.46134 15.5574C4.16787 15.2624 4.02113 14.922 4.02113 14.5362V4.35745C4.02113 3.97163 4.16787 3.64255 4.46134 3.37021C4.75482 3.07518 5.09344 2.92766 5.47721 2.92766H13.401ZM11.2338 0V1.46383H2.56504V11.6426H1.14282V1.46383C1.14282 1.07801 1.27827 0.737589 1.54917 0.442553C1.84265 0.147518 2.18127 0 2.56504 0H11.2338Z"/></svg>
			</div>
			<div
				class="cx-vui-repeater-item__clean"
				@click="handleDelete"
			>
				<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="16" height="16" transform="matrix(1 0 0 -1 0 16)" fill="white"/><path d="M2.28564 14.192V3.42847H13.7142V14.192C13.7142 14.6685 13.5208 15.0889 13.1339 15.4533C12.747 15.8177 12.3005 15.9999 11.7946 15.9999H4.20529C3.69934 15.9999 3.25291 15.8177 2.866 15.4533C2.4791 15.0889 2.28564 14.6685 2.28564 14.192Z"/><path d="M14.8571 1.14286V2.28571H1.14282V1.14286H4.57139L5.56085 0H10.4391L11.4285 1.14286H14.8571Z"/></svg>
				<div
					class="cx-vui-tooltip"
					v-if="showConfirmTip"
				>
					Are you sure?
					<br>
					<span
						class="cx-vui-repeater-item__confrim-del"
						@click.stop="confrimDeletion"
					>Yes</span>
					/
					<span
						class="cx-vui-repeater-item__cancel-del"
						@click.stop="cancelDeletion"
					>No</span>
				</div>
			</div>
		</div>
	</div>
	<div
		:class="{
			'cx-vui-repeater-item__content': true,
			'cx-vui-repeater-item__content--is-collpased': this.isCollapsed
		}"
	>
		<slot></slot>
	</div>
</div>
