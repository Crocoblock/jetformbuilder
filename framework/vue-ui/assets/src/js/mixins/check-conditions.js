import { oneOf } from '../utils/assist';

export const checkConditions = {
	methods: {
		isVisible() {

			if ( ! this.conditions.length ) {
				return true
			} else {

				let conditionsMet    = [];
				let operator         = 'AND';
				let conditionsLength = this.conditions.length;

				for ( var i = 0; i < this.conditions.length; i++) {

					if ( this.conditions[ i ].operator ) {
						operator = this.conditions[ i ].operator;
						conditionsLength--;
						continue;
					}

					switch ( this.conditions[ i ].compare ) {

						case 'equal':

							if ( this.conditions[ i ].input === this.conditions[ i ].value ) {
								conditionsMet.push( this.conditions[ i ].value );
							}

							break;

						case 'not_equal':

							if ( this.conditions[ i ].input !== this.conditions[ i ].value ) {
								conditionsMet.push( this.conditions[ i ].value );
							}

							break;

						case 'in':

							if ( oneOf( this.conditions[ i ].input, this.conditions[ i ].value ) ) {
								conditionsMet.push( this.conditions[ i ].value );
							}

							break;

						case 'not_in':

							if ( ! oneOf( this.conditions[ i ].input, this.conditions[ i ].value ) ) {
								conditionsMet.push( this.conditions[ i ].value );
							}

							break;

						case 'contains':

							if ( oneOf( this.conditions[ i ].value, this.conditions[ i ].input ) ) {
								conditionsMet.push( this.conditions[ i ].value );
							}

							break;

						case 'not_contains':

							if ( ! oneOf( this.conditions[ i ].value, this.conditions[ i ].input ) ) {
								conditionsMet.push( this.conditions[ i ].value );
							}

							break;

					}
				};

				switch ( operator ) {
					case 'AND':
						return conditionsMet.length === conditionsLength;
					case 'OR':
						if ( conditionsMet.length ) {
							return true;
						} else {
							return false;
						}
				}

			}

		},
	}
}
