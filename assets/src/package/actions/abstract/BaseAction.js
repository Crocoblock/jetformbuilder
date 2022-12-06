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
	} );

	Object.defineProperty( this, 'index', {
		get: () => {
			return props?.index ?? 0;
		},
	} );
};

export default BaseAction;

