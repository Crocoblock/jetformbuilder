import BaseField from "./base-field";
import { isObject } from "../../helpers/utils";

export default class Border extends BaseField {
	static getType() {
		return 'border';
	}

	getParsedValue() {

		if ( ! this.rawValue ) {
			return {
				border: {},
				radius: {},
			}
		} else {
			return {
				border: this.parseBorderValue( this.rawValue.border ),
				radius: this.rawValue.radius,
			}
		}
	}

	parseBorderValue( value ) {

		if ( ! value ) {
			return {}
		}

		if ( value.color || value.width || value.style ) {
			return {
				global: {
					color: value.color || 'inherit',
					width: value.width || 'inherit',
					style: value.style || 'inherit',
				}
			};
		} else {
			return value;
		}
	}

	getParsedProps( props ) {

		const values = this.getParsedValue();

		let result = '';

		if ( values.border ) {
			for ( const [ key, value ] of Object.entries( values.border ) ) {
				if ( 'global' === key ) {
					result += this.getBorderCSS( value );
				} else {
					result += this.getBorderCSS( value, key );
				}
			}
		}

		if ( values.radius ) {
			if ( isObject( values.radius ) ) {

				const propsMap = {
					'border-top-left-radius': 'topLeft',
					'border-top-right-radius': 'topRight',
					'border-bottom-right-radius': 'bottomRight',
					'border-bottom-left-radius': 'bottomLeft',
				};

				for ( const [ key, value ] of Object.entries( propsMap ) ) {
					if ( values.radius[ value ] ) {
						result += `${ key }: ${ values.radius[ value ] };`;
					}
				}

			} else {
				result += `border-radius: ${ values.radius };`;
			}
		}

		return result;
	}

	parseVariable( variable ) {

		const prefix = variable.prefix !== undefined ? variable.prefix : '';
		const name   = variable.name !== undefined ? variable.name : false;
		let full_name = variable.full_name ? variable.full_name : prefix + '-' + name;

		if (!full_name) {
			return {};
		}

		if (variable.suffix) {
			full_name += variable.suffix;
		}

		const values = this.getParsedValue();
		const result = {};

		if (values.radius) {
			let radius = '';

			if (typeof values.radius === 'string') {
				radius = values.radius;
			} else {
				const propsOrder = ['topLeft', 'topRight', 'bottomRight', 'bottomLeft'];

				propsOrder.forEach(prop => {
					radius += values.radius[prop] ? values.radius[prop] + ' ' : '0 ';
				});

				radius = radius.trim();
			}

			result[ full_name + '__radius' ] = radius;
		}

		if (values.border && typeof values.border === 'object') {
			const globalProps = values.border.global || {};
			const sides = ['top', 'right', 'bottom', 'left'];

			sides.forEach(side => {
				const side_props = (values.border[side] && typeof values.border[side] === 'object') ? values.border[side] : {};
				const color = side_props.color || globalProps.color || 'transparent';
				const width = side_props.width || globalProps.width || '0';
				const style = side_props.style || globalProps.style || 'solid';

				result[ full_name + '__' + side ] = width + ' ' + style + ' ' + color;
			});
		}

		return result;
	}

	getBorderCSS( props, key ) {

		let css = '';

		if ( key ) {
			key = '-' + key;
		} else {
			key = '';
		}

		if ( props && props.color ) {
			css += `border${ key }-color: ${ props.color };`;
		}

		if ( props && props.width ) {
			css += `border${ key }-width: ${ props.width };`;
		}

		if ( props && props.style ) {
			css += `border${ key }-style: ${ props.style };`;
		}

		return css;
	}
}
