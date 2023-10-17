<?php
/**
 * Tabs component
 */
?>
<div
	:class="{
		'cx-vui-tabs': true,
		'cx-vui-tabs--invert': invert,
		'cx-vui-tabs--layout-vertical': 'vertical' === this.layout,
		'cx-vui-tabs--layout-horizontal': 'horizontal' === this.layout,
		'cx-vui-tabs--in-panel': inPanel,
	}"
>
	<div class="cx-vui-tabs__nav">
		<div
			v-for="item in navList"
			:class="{
				'cx-vui-tabs__nav-item': true,
				'cx-vui-tabs__nav-item--active': isActive( item.name ),
			}"
			@click="onTabClick( item.name )"
		>
			{{ item.label }}
		</div>
	</div>
	<div class="cx-vui-tabs__content">
		<slot></slot>
	</div>
</div>