<div class="cx-vue-list-table">
	<div class="cx-vue-list-table__heading">
		<slot name="heading"></slot>
	</div>
	<div
		class="cx-vue-list-table__items"
		v-if="! isEmpty"
	>
		<slot name="items"></slot>
	</div>
	<div
		class="cx-vue-list-table__items is-empty"
		v-else
		v-html="emptyMessage"
	></div>
	<div class="cx-vue-list-table__footer">
		<slot name="footer"></slot>
	</div>
</div>