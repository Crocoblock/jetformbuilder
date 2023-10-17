<cx-vui-component-wrapper
	:elementId="currentId"
	:label="label"
	:description="description"
	:wrapper-css="wrapperCss"
	:preventWrap="preventWrap"
	v-if="isVisible()"
>
	<div class="cx-vui-f-select">
		<div :class="{
			'cx-vui-f-select__selected': true,
			'cx-vui-f-select__selected-not-empty': this.currentValues.length > 0
		}">
			<div
				v-for="option in selectedOptions"
				class="cx-vui-f-select__selected-option"
				@click="handleResultClick( option.value )"
			>
				<span class="cx-vui-f-select__selected-option-icon">
					<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 1.00671L6.00671 5L10 8.99329L8.99329 10L5 6.00671L1.00671 10L0 8.99329L3.99329 5L0 1.00671L1.00671 0L5 3.99329L8.99329 0L10 1.00671Z"/></svg>
				</span>
				{{ option.label }}
			</div>
		</div>
		<div
			v-click-outside.capture="onClickOutside"
			v-click-outside:mousedown.capture="onClickOutside"
			v-click-outside:touchstart.capture="onClickOutside"

			@keydown.up.prevent="handleOptionsNav"
			@keydown.down.prevent="handleOptionsNav"
			@keydown.tab="handleOptionsNav"
			@keydown.enter="handleEnter"

			class="cx-vui-f-select__control"
		>
			<input
				:id="currentId"
				:placeholder="placeholder"
				:autocomplete="autocomplete"
				type="text"
				:value="query"
				@input="handleInput"
				@focus="handleFocus"
				:class="{
					'cx-vui-f-select__input': true,
					'cx-vui-input--in-focus': this.inFocus,
					'cx-vui-input': true,
					'size-fullwidth': true,
					'has-error': error,
				}"
			>
			<div class="cx-vui-f-select__results" v-if="inFocus">
				<div v-if="remote && loading" class="cx-vui-f-select__results-loading" v-html="loadingMessage"></div>
				<div
					v-else-if="remote && charsDiff > 0"
					v-html="parsedRemoteTriggerMessage"
					class="cx-vui-f-select__results-message"
				></div>
				<div
					v-else-if="! filteredOptions.length"
					v-html="notFoundMeassge"
					class="cx-vui-f-select__results-message"
				></div>
				<div v-else>

					<div
						v-for="( option, optionIndex ) in filteredOptions"
						:class="{
							'cx-vui-f-select__result': true,
							'in-focus': optionIndex === optionInFocus,
							'is-selected': isOptionSelected( option )
						}"
						@click="handleResultClick( option.value )"
					>{{ option.label }}</div>
				</div>
			</div>
		</div>
		<select
			:placeholder="placeholder"
			:disabled="disabled"
			:readonly="readonly"
			:name="name"
			:multiple="multiple"
			:value="currentValues"
			class="cx-vui-f-select__select-tag"
		>
			<option
				v-for="option in currentValues"
				:value="option"
				selected
			></option>
		</select>
	</div>
	<slot></slot>
</cx-vui-component-wrapper>
