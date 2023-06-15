<cx-vui-component-wrapper
	:elementId="currentId"
	:label="label"
	:description="description"
	:wrapper-css="wrapperCss"
	:preventWrap="preventWrap"
	v-if="isVisible()"
>
	<div
		tabIndex="0"
		:id="currentId"
		:class="{
			'cx-vui-switcher': true,
			'cx-vui-switcher--disabled': this.disabled,
			'cx-vui-switcher--on': this.isOn,
			'cx-vui-switcher--off': ! this.isOn,
			'cx-vui-switcher--in-focus': this.inFocus
		}"
		@keyup.enter="handleEnter"
		@focus="handleFocus"
		@blur="handleBlur"
		@click="switchState"
	>
		<input
			type="hidden"
			checked="checked"
			class="cx-vui-switcher__input"
			:name="name"
			:value="currentValue"
		>
		<div class="cx-vui-switcher__panel"></div>
		<div class="cx-vui-switcher__trigger"></div>
	</div>
</cx-vui-component-wrapper>