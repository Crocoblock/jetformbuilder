<template>
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
				'cx-vui-tabs__nav-item--disabled': isDisabled( item.name ),
				'cx-vui-tabs__nav-item--has-icon': !! item.icon,
			}"
				@click="onTabClick( item.name )"
			>
				<span class="item-label">{{ item.label }}</span>
				<span class="item-icon" v-if="item.icon">
					<component
						v-if="'object' === typeof item.icon"
						v-bind:is="item.icon"
						:is-active="isActive( item.name )"
					/>
				</span>
			</div>
		</div>
		<div class="cx-vui-tabs__content">
			<slot></slot>
		</div>
	</div>
</template>

<script>

export default {
	name: 'cx-vui-tabs',
	props: {
		value: {
			type: [ String, Number ],
			default: '',
		},
		name: {
			type: String,
			default: '',
		},
		invert: {
			type: Boolean,
			default: false,
		},
		inPanel: {
			type: Boolean,
			default: false,
		},
		layout: {
			validator( value ) {
				return [ 'horizontal', 'vertical' ].includes( value );
			},
			default: 'horizontal',
		},
		conditions: {
			type: Array,
			default() {
				return [];
			},
		},
	},
	data() {
		return {
			navList: [],
			activeTab: this.value,
			disabledTabs: [],
		};
	},
	mounted() {
		const tabs = this.getTabs();
		this.disabledTabs = this.getDisabledTabs();

		this.navList = tabs;

		if ( ! this.activeTab ) {
			this.activeTab = tabs[ 0 ].name;
		}

		this.updateState();
	},
	methods: {
		isActive( name ) {
			return (
				name === this.activeTab
			);
		},
		isDisabled( name ) {
			return this.disabledTabs.includes( name );
		},
		getDisabledTabs() {
			const names = [];

			for ( const tab of this.$children ) {
				if ( tab.disabled ) {
					names.push( tab.name );
				}
			}

			return names;
		},
		onTabClick( tab ) {
			if ( this.isDisabled( tab ) ) {
				return;
			}
			this.activeTab = tab;
			this.$emit( 'input', this.activeTab );
			this.updateState();
		},
		updateState() {
			const tabs = this.getTabs();
			this.navList = tabs;
			tabs.forEach( tab => {
				tab.show = this.activeTab === tab.name;
			} );
		},
		getTabs() {

			const allTabs = this.$children.filter( item => {
				return 'cx-vui-tabs-panel' === item.$options.name;
			} );
			const tabs = [];

			allTabs.forEach( item => {
				if ( item.tab && this.name ) {
					if ( item.tab === this.name ) {
						tabs.push( item );
					}
				} else {
					tabs.push( item );
				}
			} );

			return tabs;
		},
	},
};
</script>

<style lang="scss">
.cx-vui-tabs__nav-item {
	&--disabled {
		opacity: 0.5;
		cursor: not-allowed;

		&:hover {
			color: unset;
		}
	}

	&--has-icon {
		display: flex;
		justify-content: space-between;
		column-gap: 1em;
	}
}

.cx-vui-tabs--layout-vertical {
	& > .cx-vui-tabs__nav {
		width: unset;
		flex: unset;
		max-width: unset;
	}

	& > .cx-vui-tabs__content {
		flex: 1;
	}
}


</style>