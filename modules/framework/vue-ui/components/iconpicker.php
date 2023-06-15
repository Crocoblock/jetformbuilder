<cx-vui-component-wrapper
	:elementId="currentId"
	:label="label"
	:description="description"
	:wrapper-css="wrapperCss"
	:preventWrap="preventWrap"
	v-if="isVisible()"
>
	<div
		class="cx-vui-iconpicker"
		v-click-outside.capture="onClickOutside"
		v-click-outside:mousedown.capture="onClickOutside"
		v-click-outside:touchstart.capture="onClickOutside"
	>
		<div class="cx-vui-iconpicker__fieldgroup">
			<div
				class="cx-vui-iconpicker__preview"
				@click="panelActive = true"
			>
				<i :class="[ iconBase, currentValue ]"></i>
			</div>
			<input
				:id="currentId"
				:class="[ 'cx-vui-iconpicker__input', 'cx-vui-input' ]"
				:placeholder="placeholder"
				:disabled="disabled"
				:autocomplete="autocomplete"
				:readonly="readonly"
				:name="name"
				:value="currentValue"
				:autofocus="autofocus"
				@keyup.enter="handleEnter"
				@keyup.esc="handleEsc"
				@focus="handleFocus"
				@blur="handleBlur"
				@input="handleInput"
				@change="handleChange"
				ref="iconpicker"
			>
		</div>
		<div class="cx-vui-iconpicker__canvas" v-if="panelActive">
			<div class="cx-vui-iconpicker__canvas-content">
				<div class="cx-vui-iconpicker__canvas-header">
					<input
						type="text"
						class="cx-vui-iconpicker__canvas-search cx-vui-input size-fullwidth"
						v-model="filterQuery"
					>
				</div>
				<div class="cx-vui-iconpicker__canvas-list">
					<div
						tabindex="0"
						v-for="icon in filteredIcons"
						:class="{
							'cx-vui-iconpicker__canvas-icon': true,
							'cx-vui-iconpicker__canvas-icon--selected': icon === currentValue,
						}"
						@click="seclectIcon( icon )"
						@keyup.enter="seclectIcon( icon )"
						@keyup.esc="closePanel()"
					>
						<i :class="[ iconBase, icon ]"></i>
					</div>
				</div>
			</div>
		</div>
	</div>
</cx-vui-component-wrapper>