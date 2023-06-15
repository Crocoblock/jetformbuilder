<cx-vui-component-wrapper
	:elementId="currentId"
	:label="label"
	:description="description"
	:wrapper-css="wrapperCss"
	:preventWrap="preventWrap"
	v-if="isVisible()"
>
	<select
		:id="currentId"
		:placeholder="placeholder"
		:disabled="disabled"
		:readonly="readonly"
		:name="name"
		:multiple="multiple"
		v-model="currentValue"
		:class="controlClasses()"
		@focus="handleFocus"
		@blur="handleBlur"
		@change="handleInput"
	>
		<option
			v-if="placeholder"
			value=""
			disabled
		>{{ placeholder }}</option>
		<option
			v-for="option in options"
			:value="option.value"
			:selected="isOptionSelected( option )"
		>{{ option.label }}</option>
	</select>
</cx-vui-component-wrapper>