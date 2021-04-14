<div
	:class="wrapperClasses()" v-if="isVisible() && ! preventWrap"
>
	<div
		class="cx-vui-component__meta"
		v-if="this.label || this.description"
	>
		<label
			class="cx-vui-component__label"
			v-if="this.label"
			:for="elementId"
			v-html="this.label"
		></label>
		<div
			class="cx-vui-component__desc"
			v-if="this.description"
			v-html="this.description"
		></div>
	</div>
	<div class="cx-vui-component__control">
		<slot></slot>
	</div>
</div>
<div
	:class="wrapperClassesRaw"
	v-else-if="isVisible()"
>
	<slot></slot>
</div>