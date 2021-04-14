<cx-vui-component-wrapper
	:elementId="currentId"
	:label="label"
	:description="description"
	:wrapper-css="wrapperCss"
	:preventWrap="preventWrap"
	v-if="isVisible()"
>
	<div
		:class="{
			'cx-vui-checkgroup': true,
			'cx-vui-checkgroup--single-item': this.optionsList.length === 1
		}"
		:id="currentId"
		tabindex="0"
		@focus="handleParentFocus( $event )"
	>
		<div
			class="cx-vui-checkbox-wrap"
			v-for="( option, index ) in optionsList"
		>
			<div
				:key="name + option.value + index"
				:class="{
					'cx-vui-checkbox': true,
					'cx-vui-checkbox--disabled': disabled,
					'cx-vui-checkbox--checked': isChecked( option.value ),
					'cx-vui-checkbox--focused': isOptionInFocus( option.value ),
				}"
				@click="handleInput( $event, option.value )"
				@focus="handleFocus( $event, option.value )"
				@blur="handleBlur( $event, option.value )"
				@keyup.enter="handleInput( $event, option.value )"
				tabindex="0"
			>
				<input
					:class="{
						'cx-vui-checkbox__input': true,
					}"
					:type="inputType"
					:name="name + '[' + option.value + ']'"
					:value="inputValue( option.value )"
					:checked="isChecked( option.value )"
					:disabled="disabled"
				>
				<div
					:class="{
						'cx-vui-checkbox__check': true,
						'cx-vui-checkbox__check--disabled': disabled,
						'cx-vui-checkbox__check--checked': isChecked( option.value ),
						'cx-vui-checkbox__check--focused': isOptionInFocus( option.value ),
					}"
				>
					<svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.19531 5.05469L1.19531 3.25L0 4.44531L4.19531 9.25L12 1.44531L10.8047 0.25L4.19531 5.05469Z"/></svg>
				</div>
				<div
					:class="{
						'cx-vui-checkbox__label': true,
					}"
					v-html="option.label"
				></div>
			</div>
		</div>
	</div>
</cx-vui-component-wrapper>