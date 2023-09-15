const {
	      __,
      } = wp.i18n;

function VerificationActionHelp() {
	return <>
		<h3 style={ { marginTop: 0 } }>{ __(
			`Here will be a brief description of how this 
verification action works.`,
			'jet-form-builder',
		) }</h3>
		<p>{ __(
			`1. The user sends the form for the first time. 
On this stage, all actions that have the event`,
			'jet-form-builder',
		) + ' ' }
			<code>DEFAULT.PROCESS</code>
			{ ' ' + __(
				`are executed. 
After that, Save Record action is executed, even if it is not present 
in the list of actions. At the same time, a unique token in a hashed 
form is stored in a separate table in the database.`,
				'jet-form-builder',
			) }</p>
		<p>{ __(
			`2. The user will receive a link to your site with the key 
to the previously saved token. This can be achieved by sending 
a letter to e-mail.`,
			'jet-form-builder',
		) }</p>
		<p>{ __(
			`3. When clicking on the link, the plugin checks the key with 
the token. If the result is positive, the actions that do not have any 
event are stopped, or with the event`,
			'jet-form-builder',
		) + ' ' }
			<code>VERIFICATION.SUCCESS</code>.
			{ ' ' + __(
				`If the result is negative, only those actions that have the 
event`,
				'jet-form-builder',
			) + ' ' }
			<code>VERIFICATION.FAILED</code>
			{ ' ' + __( 'are launched', 'jet-form-builder' ) }</p>
	</>;
}

export default VerificationActionHelp;