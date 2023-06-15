<div class="cx-vui-notices">
	<transition-group name="cx-vui-notices" tag="div">
		<div
			v-for="( item, itemID ) in stack"
			:class="[
				'cx-vui-notice',
				'cx-vui-notice--' + item.type,
			]"
			:key="'item-' + itemID"
		>
			<div
				:class="[
					'cx-vui-notice__icon',
					'cx-vui-notice__icon--' + item.type,
				]"
				v-html="getIcon( item.type )"
			></div>
			<div class="cx-vui-notice__content">
				<div
					class="cx-vui-notice__title"
					v-if="item.title"
					v-html="item.title"
				></div>
				<div
					class="cx-vui-notice__message"
					v-if="item.message"
					v-html="item.message"
				></div>
			</div>
			<div
				class="cx-vui-notice__close"
				@click="destroyItem( itemID )"
			>
				<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 1.61074L9.61074 8L16 14.3893L14.3893 16L8 9.61074L1.61074 16L0 14.3893L6.38926 8L0 1.61074L1.61074 0L8 6.38926L14.3893 0L16 1.61074Z"/></svg>
			</div>
		</div>
	</transition-group>
</div>