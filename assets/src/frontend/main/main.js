import initCommon from './init/initCommon';
import initElementor from './init/initElementor';
import BaseSignal from './signals/BaseSignal';
import ReactiveVar from './reactive/ReactiveVar';
import LoadingReactiveVar from './reactive/LoadingReactiveVar';
import InputData from './inputs/InputData';
import HtmlMacro from './html.macro/HtmlMacro';
import Observable from './Observable';
import ReportingInterface from './reporting/ReportingInterface';
import CheckboxData from './inputs/CheckboxData';
import MultiSelectData from './inputs/MultiSelectData';
import { allRejected, getLanguage } from './functions';
import Restriction from './reporting/restrictions/Restriction';

(
	function ( $ ) {

		window.JetFormBuilderAbstract = {
			...(
				window.JetFormBuilderAbstract ?? {}
			),
			InputData,
			BaseSignal,
			HtmlMacro,
			ReactiveVar,
			LoadingReactiveVar,
			Observable,
			ReportingInterface,
			CheckboxData,
			MultiSelectData,
			Restriction,
		};

		window.JetFormBuilderFunctions = {
			...(
				window.JetFormBuilderFunctions ?? {}
			),
			allRejected,
			getLanguage,
		};

		$( initCommon );
		$( window ).on( 'elementor/frontend/init', initElementor );

		$( window ).on(
			'jet-popup/ajax/frontend-init/before',
			( event, { $container } ) => {
				initCommon( $container );
				initElementor();
			},
		);
	}
)( jQuery );