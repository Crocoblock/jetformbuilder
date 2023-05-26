<template>
	<div class="cx-vui-f-select">
		<div :class="{
			'cx-vui-f-select__selected': true,
			'cx-vui-f-select__selected-not-empty': this.value.length > 0
		}">
			<div
				v-for="option in value"
				class="cx-vui-f-select__selected-option"
				@click="handleResultClick( option )"
			>
				<template v-if="$slots[ 'option-' + option ]">
					<slot :name="'option-' + option"></slot>
				</template>
				<template v-else>
				<span v-if="!isNonRemovable( option )" class="cx-vui-f-select__selected-option-icon">
					<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path
						d="M10 1.00671L6.00671 5L10 8.99329L8.99329 10L5 6.00671L1.00671 10L0 8.99329L3.99329 5L0 1.00671L1.00671 0L5 3.99329L8.99329 0L10 1.00671Z"/></svg>
					</span>
					{{ getOptionLabel( option ) }}
				</template>
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
				:id="elementId"
				:placeholder="placeholder"
				:autocomplete="autocomplete"
				type="text"
				:value="query"
				@input="handleInput"
				@focus="handleFocus"
				:class="{
					'cx-vui-f-select__input': true,
					'cx-vui-input--in-focus': inFocus,
					'cx-vui-input': true,
					'cx-vui-input--invalid': isInvalid(),
					'size-fullwidth': true,
					'has-error': error,
				}"
			>
			<div class="cx-vui-f-select__results" v-if="inFocus">
				<div
					v-if="! filteredOptions.length"
					v-html="notFoundMeassge"
					class="cx-vui-f-select__results-message"
				></div>
				<div v-else>
					<div
						v-for="( option, optionIndex ) in filteredOptions"
						:class="{
							'cx-vui-f-select__result': true,
							'in-focus': optionIndex === optionInFocus,
							'is-selected': isSelectedOption( option )
						}"
						@click="handleResultClick( option.value )"
					>{{ getOptionLabel( option ) }}
					</div>
				</div>
			</div>
		</div>
		<select
			:placeholder="placeholder"
			:disabled="disabled"
			:readonly="readonly"
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
</template>

<script>
import { directive as clickOutside } from 'v-click-outside-x';

export default {
	name: 'CxVuiFSelect',
	directives: { clickOutside },
	props: {
		value: {
			type: [ String, Number, Array ],
			default: '',
		},
		placeholder: {
			type: String,
			default: '',
		},
		optionsList: {
			type: Array,
			default: function () {
				return [];
			},
		},
		disabled: {
			type: Boolean,
			default: false,
		},
		readonly: {
			type: Boolean,
			default: false,
		},
		error: {
			type: Boolean,
			default: false,
		},
		multiple: {
			type: Boolean,
			default: false,
		},
		autocomplete: {
			validator( value ) {
				return [ 'on', 'off' ].includes( value );
			},
			default: 'off',
		},
		conditions: {
			type: Array,
			default: function () {
				return [];
			},
		},
		remote: {
			type: Boolean,
			default: false,
		},
		remoteCallback: {
			type: Function,
		},
		remoteTrigger: {
			type: Number,
			default: 3,
		},
		remoteTriggerMessage: {
			type: String,
			default: 'Please enter %d char(s) to start search',
		},
		notFoundMeassge: {
			type: String,
			default: 'There is no items find matching this query',
		},
		loadingMessage: {
			type: String,
			default: 'Loading...',
		},
		preventWrap: {
			type: Boolean,
			default: false,
		},
		// Wrapper related props (should be passed into wrapper component)
		wrapperCss: {
			type: Array,
			default: function () {
				return [];
			},
		},
		// basically used from injected
		elementId: {
			type: String,
		},
		// basically used from injected
		isInvalid: {
			type: Function,
		},
	},
	data() {
		return {
			query: '',
			inFocus: false,
			optionInFocus: false,
			loading: false,
			loaded: false,
		};
	},
	created() {
		if ( !this.currentValues ) {
			this.currentValues = [];
		}
	},
	computed: {
		filteredOptions() {
			if ( !this.query ) {
				return this.optionsList;
			}
			else {
				return this.optionsList.filter( option => {
					return option.label.includes( this.query ) || option.value.includes( this.query );
				} );
			}
		},
	},
	methods: {
		handleFocus( event ) {
			this.inFocus = true;
			this.$emit( 'on-focus', event );
		},
		handleOptionsNav( event ) {

			// next
			if ( 'ArrowUp' === event.key || 'Tab' === event.key ) {
				this.navigateOptions( -1 );
			}
			// prev
			if ( 'ArrowDown' === event.key ) {
				this.navigateOptions( 1 );
			}

		},
		navigateOptions( direction ) {

			if ( false === this.optionInFocus ) {
				this.optionInFocus = -1;
			}

			let index     = this.optionInFocus + direction;
			let maxLength = this.filteredOptions.length - 1;

			if ( maxLength < 0 ) {
				maxLength = 0;
			}

			if ( index < 0 ) {
				index = 0;
			}
			else if ( index > maxLength ) {
				index = maxLength;
			}

			this.optionInFocus = index;

		},
		onClickOutside( event ) {

			if ( this.inFocus ) {
				this.inFocus = false;
				this.$emit( 'on-blur', event );
			}

		},
		handleInput( event ) {
			this.$emit( 'input', event.target.value );
			this.query = event.target.value;

			if ( !this.inFocus ) {
				this.inFocus = true;
			}

		},
		handleEnter() {

			if ( false === this.optionInFocus || !this.optionsList[ this.optionInFocus ] ) {
				return;
			}

			let value = this.filteredOptions[ this.optionInFocus ].value;

			this.handleResultClick( value );

		},
		handleResultClick( value ) {
			if ( this.isNonRemovable( value ) ) {
				return;
			}

			if ( this.value.includes( value ) ) {
				this.removeValue( value );
			}
			else if ( this.multiple ) {
				this.storeValues( [
					...new Set( this.value ),
					value,
				] );
			}
			else {
				this.storeValues( value );
			}

			this.inFocus       = false;
			this.optionInFocus = false;
			this.query         = '';

		},
		removeValue( value ) {
			if ( !this.multiple ) {
				this.storeValues( '' );
			}
			const filtered = this.value.filter( current => current !== value );

			this.storeValues( filtered );
		},
		storeValues( value ) {
			this.$emit( 'change', this.sanitizeValue( value ) );
		},
		getOptionLabel( option ) {
			const optionValue = 'string' === typeof option ? option : option.value;
			const find        = this.optionsList.find( ( { value } ) => value === optionValue );

			return find?.label ?? '';
		},
		sanitizeValue( value ) {
			if ( this.multiple ) {
				return Array.isArray( value ) ? value : [ value ].filter( Boolean );
			}

			return Array.isArray( value ) ? value[ 0 ] : value;
		},
		isSelectedOption( option ) {
			const optionValue = 'string' === typeof option ? option : option.value;

			return this.value.includes( optionValue );
		},
		isNonRemovable( option ) {
			const optionValue = 'string' === typeof option ? option : option.value;
			const find        = this.optionsList.find( ( { value } ) => value === optionValue );

			return find?.nonRemovable ?? false;
		},
	},
	inject: [ 'elementId', 'isInvalid' ],
};
</script>

<style scoped lang="scss">
.cx-vui-input {
	&--invalid {
		border: 1px solid #d63638;
	}
}
</style>