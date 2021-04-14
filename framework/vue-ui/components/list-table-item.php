<div :class="[
	'list-table-item',
	className
]">
	<div
		:class="[
			'list-table-item__cell',
			'cell--' + slot
		]"
		v-for="slot in slots"
	>
		<slot :name="slot"></slot>
	</div>
</div>