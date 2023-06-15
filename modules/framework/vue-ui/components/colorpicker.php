<cx-vui-component-wrapper
	:elementId="currentId"
	:label="label"
	:description="description"
	:wrapper-css="wrapperCss"
	:preventWrap="preventWrap"
	v-if="isVisible()"
>
	<div
		:class="controlClasses"
		v-click-outside.capture="onClickOutside"
		v-click-outside:mousedown.capture="onClickOutside"
		v-click-outside:touchstart.capture="onClickOutside"
	>
		<div
			class="cx-vui-colorpicker__preview"
			@click="panelActive=!panelActive"
		>
			<span
				class="cx-vui-colorpicker__color"
			>
				<span v-if="isCloseVisible" :style="{ backgroundColor: currentValue }"></span>
			</span>
			<span
				class="cx-vui-colorpicker__clear"
				@click="clearColor"
				v-if="isCloseVisible"
			>
				<svg width="10" height="10" viewBox="0 0 10 10" fill="#7B7E81" xmlns="http://www.w3.org/2000/svg">
					<path d="M10 1.00671L6.00671 5L10 8.99331L8.99331 10L5 6.00671L1.00671 10L0 8.99331L3.99329 5L0 1.00671L1.00671 0L5 3.99329L8.99331 0L10 1.00671Z"/>
				</svg>
			</span>
			<input
				type="hidden"
				:id="currentId"
				:name="name"
				:value="currentValue"
				ref="colorpicker"
			>
		</div>
		<div class="cx-vui-colorpicker__dropdown" v-if="panelActive">
			<chrome-picker
				@input="setCurrentValue"
				v-model="currentValue"
			></chrome-picker>
		</div>
	</div>
</cx-vui-component-wrapper>
