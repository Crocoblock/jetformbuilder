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
			'cx-vui-radiogroup': true,
			'cx-vui-radiogroup--single-item': this.optionsList.length === 1
		}"
		:id="currentId"
		tabindex="0"
	>
		<div
			class="cx-vui-radio-wrap"
			v-for="( option, index ) in optionsList"
		>
			<div
				:key="name + option.value + index"
				:class="{
					'cx-vui-radio': true,
					'cx-vui-radio--disabled': disabled,
					'cx-vui-radio--checked': option.value === currentValue,
					'cx-vui-radio--focused': isOptionInFocus( option.value ),
				}"
				@click="handleInput( $event, option.value )"
				@focus="handleFocus( $event, option.value )"
				@blur="handleBlur( $event, option.value )"
				tabindex="0"
			>
				<input
					:class="{
						'cx-vui-radio__input': true,
					}"
					:name="name + '[' + option.value + ']'"
					:value="option.value"
					:checked="option.value === currentValue"
					:disabled="disabled"
					type="radio"
				>
				<div
					:class="{
						'cx-vui-radio__mark': true,
						'cx-vui-radio__mark--disabled': disabled,
						'cx-vui-radio__mark--checked': option.value === currentValue,
						'cx-vui-radio__mark--focused': isOptionInFocus( option.value ),
					}"
				>
				</div>
				<div
					:class="{
						'cx-vui-radio__label': true,
					}"
					v-html="option.label"
				></div>
			</div>
		</div>
	</div>
</cx-vui-component-wrapper>