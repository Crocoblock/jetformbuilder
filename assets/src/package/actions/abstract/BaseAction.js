import Tools from '../../tools';

function BaseAction( props = null ) {
	this.initData( props );
}

BaseAction.prototype.initData = function ( props ) {
	this.id         = props?.id ?? Tools.getRandomID();
	this.settings   = props?.settings ?? {};
	this.type       = props?.type ?? 'send_email';
	this.conditions = props?.conditions ?? [];
	this.events     = props?.events ?? [];

	Object.defineProperty( this, 'selfSettings', {
		get: () => {
			return this.settings.hasOwnProperty( this.type ?? '' )
			       ? this.settings[ this.type ]
			       : {};
		},
		set: value => {
			if ( !this.settings.hasOwnProperty( this.type ?? '' ) ) {
				this.settings[ this.type ] = {};
			}

			this.settings[ this.type ] = {
				...this.settings[ this.type ],
				...value,
			};
		},
	} );

	Object.defineProperty( this, 'index', {
		get: () => {
			return props?.index ?? 0;
		},
	} );
};

/**
 * Used in case, when we create BaseAction instance
 * with such structure:
 * {
 *     type: 'action_slug',
 *     settings: {
 *         setting_1: 'value_1',
 *         setting_2: 'value_2'
 *     }
 * }
 *
 * But JetFormBuilder store action's data in different way.
 * So to transform settings into this structure:
 * {
 *     type: 'action_slug',
 *     settings: {
 *         action_slug: {
 *              setting_1: 'value_1',
 *              setting_2: 'value_2'
 *         }
 *     }
 * }
 * we use this method.
 */
BaseAction.prototype.refactorSettings = function () {
	const settings = this.settings;
	this.settings  = {};

	this.selfSettings = settings;
};

BaseAction.prototype.resetID = function () {
	this.id = Tools.getRandomID();
};

export default BaseAction;

