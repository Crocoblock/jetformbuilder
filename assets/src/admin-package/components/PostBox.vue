<template>
	<div class="postbox" :id="slugInside">
		<div class="postbox-header">
			<h2 class="ui-sortable-handle">{{ title }}</h2>
			<div class="handle-actions hide-if-no-js">
				<template v-if="isOrdering">
					<button type="button" class="handle-order-higher" aria-disabled="false"
							:aria-describedby="idMoveUpDesc"><span
						class="screen-reader-text">Move up</span><span class="order-higher-indicator"
																	   aria-hidden="true"></span></button>
					<span class="hidden" :id="idMoveUpDesc">Move {{ title }} box up</span>
					<button type="button" class="handle-order-lower" aria-disabled="false"
							:aria-describedby="idMoveDownDesc"><span
						class="screen-reader-text">Move up</span><span class="order-lower-indicator"
																	   aria-hidden="true"></span></button>
					<span class="hidden" :id="idMoveDownDesc">Move {{ title }} box down</span>
				</template>

				<button v-if="isToggling" type="button" class="handlediv" aria-expanded="true">
					<span class="screen-reader-text">Toggle panel: {{ title }}</span>
					<span class="toggle-indicator" aria-hidden="true"></span>
				</button>
				<slot name="actions"></slot>
			</div>
		</div>
		<div class="postbox-inner submitbox">
			<div id="misc-publishing-actions">
				<div
					class="misc-pub-section"
					v-for="(value, name) in values"
					:key="name"
				>
					<div v-if="$scopedSlots.row">
						<slot name="row" v-bind="{ name, value }"></slot>
					</div>
					<div v-else>
						{{ name }}: <strong>{{ value }}</strong>
					</div>
				</div>
			</div>
			<div id="major-publishing-actions" v-if="$slots.actions">
				<slot name="actions"></slot>
				<div class="clear"></div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "PostBox",
	props: {
		values: Object,
		title: String,
		slug: String,
		isOrdering: {
			type: Boolean,
			default: false
		},
		isToggling: {
			type: Boolean,
			default: false
		},
	},
	computed: {
		slugInside() {
			if ( this.slug ) {
				return this.slug;
			}

			return this.title.toLowerCase().replace( ' ', '_' );
		},
		idMoveUpDesc() {
			return this.slugInside + '-handle-order-higher-description';
		},
		idMoveDownDesc() {
			return this.slugInside + '-handle-order-lower-description';
		}
	},
}
</script>

<style>

</style>