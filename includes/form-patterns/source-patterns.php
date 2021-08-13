<?php

return array(
	'contact_form'        => array(
		'title'   => __( 'Contact Us Form', 'jet-form-builder' ),
		'content' => '<!-- wp:jet-forms/text-field {"label":"Name","name":"name","required":true,"className":" jet-sm-gb-wrapper jet-sm-gb-582e3284-467f-41dc-a95b-801961ae40ba","blockID":"jet-sm-gb-582e3284-467f-41dc-a95b-801961ae40ba"} /-->

<!-- wp:columns -->
<div class="wp-block-columns"><!-- wp:column -->
<div class="wp-block-column"><!-- wp:jet-forms/text-field {"field_type":"email","label":"Email","name":"email","required":true,"className":" jet-sm-gb-wrapper jet-sm-gb-582e3284-467f-41dc-a95b-801961ae40ba","blockID":"jet-sm-gb-582e3284-467f-41dc-a95b-801961ae40ba"} /--></div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column"><!-- wp:jet-forms/text-field {"field_type":"tel","label":"Phone","name":"phone","required":true,"className":" jet-sm-gb-wrapper jet-sm-gb-582e3284-467f-41dc-a95b-801961ae40ba","blockID":"jet-sm-gb-582e3284-467f-41dc-a95b-801961ae40ba"} /--></div>
<!-- /wp:column --></div>
<!-- /wp:columns -->

<!-- wp:jet-forms/radio-field {"field_options":[{"label":"Email","value":"email","calculate":"","__visible":false},{"label":"Phone","value":"phone","calculate":"","__visible":false}],"label":"Preffered method of communication","name":"preffered-method-of-communication","required":true,"className":" jet-sm-gb-wrapper jet-sm-gb-42aac671-fc51-437b-a9fc-7530c9207bb4","blockID":"jet-sm-gb-42aac671-fc51-437b-a9fc-7530c9207bb4"} /-->

<!-- wp:jet-forms/textarea-field {"label":"Message","name":"message","className":" jet-sm-gb-wrapper jet-sm-gb-729cb67e-3122-4a5a-a170-95a51ba95881","blockID":"jet-sm-gb-729cb67e-3122-4a5a-a170-95a51ba95881"} /-->

<!-- wp:jet-forms/submit-field {"className":" jet-sm-gb-wrapper jet-sm-gb-e49443d8-8a29-40ba-8288-836622af67ec","blockID":"jet-sm-gb-e49443d8-8a29-40ba-8288-836622af67ec"} /-->'
	),



	'login_register_form' => array(
		'title'   => __( 'Login & Register', 'jet-form-builder' ),
		'content' => '<!-- wp:columns -->
<div class="wp-block-columns"><!-- wp:column -->
<div class="wp-block-column"><!-- wp:image {"align":"center","width":563,"height":563,"sizeSlug":"large"} -->
<div class="wp-block-image"><figure class="aligncenter size-large is-resized"><img src="https://edgepharm.com/wp-content/uploads/2020/01/image-placeholder.jpg" alt="" width="563" height="563"/></figure></div>
<!-- /wp:image --></div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column"><!-- wp:jet-forms/text-field {"label":"Name","name":"name","required":true,"className":" jet-sm-gb-wrapper jet-sm-gb-582e3284-467f-41dc-a95b-801961ae40ba","blockID":"jet-sm-gb-582e3284-467f-41dc-a95b-801961ae40ba"} /-->

<!-- wp:jet-forms/text-field {"field_type":"email","label":"E-mail","name":"e-mail","required":true,"className":" jet-sm-gb-wrapper jet-sm-gb-eb2b1c04-06d8-4718-aacf-d221bfdf32ec","blockID":"jet-sm-gb-eb2b1c04-06d8-4718-aacf-d221bfdf32ec"} /-->

<!-- wp:jet-forms/text-field {"field_type":"password","label":"Password","name":"password","required":true,"className":" jet-sm-gb-wrapper jet-sm-gb-c7c62131-d695-4055-a593-4e941cfdc47c","blockID":"jet-sm-gb-c7c62131-d695-4055-a593-4e941cfdc47c"} /-->

<!-- wp:jet-forms/text-field {"field_type":"password","label":"Confirm Password","name":"confirm-password","required":true,"className":" jet-sm-gb-wrapper jet-sm-gb-c7c62131-d695-4055-a593-4e941cfdc47c","blockID":"jet-sm-gb-c7c62131-d695-4055-a593-4e941cfdc47c"} /-->

<!-- wp:jet-forms/select-field {"field_options":[{"label":"Ukraine","value":"ukr","calculate":""},{"label":"Germany","value":"ger","calculate":""},{"label":"United States","value":"usa","calculate":""}],"label":"Country","name":"country","className":" jet-sm-gb-wrapper jet-sm-gb-768ef910-1daf-4499-888d-06015bd895ef","blockID":"jet-sm-gb-768ef910-1daf-4499-888d-06015bd895ef","autocomplete_enable":false,"autocomplete_via_ajax":false} /-->

<!-- wp:jet-forms/submit-field {"label":"Sing Up","className":" jet-sm-gb-wrapper jet-sm-gb-e49443d8-8a29-40ba-8288-836622af67ec","blockID":"jet-sm-gb-e49443d8-8a29-40ba-8288-836622af67ec"} /--></div>
<!-- /wp:column --></div>
<!-- /wp:columns -->'
	),



	'application_form'    => array(
		'title'   => __( 'Application Form', 'jet-form-builder' ),
		'content' => '<!-- wp:paragraph {"fontSize":"large"} -->
<p class="has-large-font-size">Participant information</p>
<!-- /wp:paragraph -->

<!-- wp:columns -->
<div class="wp-block-columns"><!-- wp:column -->
<div class="wp-block-column"><!-- wp:jet-forms/text-field {"label":"First Name","name":"first-name","required":true,"className":" jet-sm-gb-wrapper jet-sm-gb-a7759893-2128-4b26-b4eb-f2acfeb893c7","blockID":"jet-sm-gb-a7759893-2128-4b26-b4eb-f2acfeb893c7"} /-->

<!-- wp:jet-forms/text-field {"field_type":"email","label":"Email","name":"email","required":true,"className":" jet-sm-gb-wrapper jet-sm-gb-af27a918-e01c-459c-920d-5227e0ac76c9","blockID":"jet-sm-gb-af27a918-e01c-459c-920d-5227e0ac76c9"} /-->

<!-- wp:jet-forms/text-field {"label":"Country","name":"country","className":" jet-sm-gb-wrapper jet-sm-gb-a7759893-2128-4b26-b4eb-f2acfeb893c7","blockID":"jet-sm-gb-a7759893-2128-4b26-b4eb-f2acfeb893c7"} /--></div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column"><!-- wp:jet-forms/text-field {"label":"Last Name","name":"last-name","className":" jet-sm-gb-wrapper jet-sm-gb-d59e5f80-5707-4a99-ae18-c1d066b91404","blockID":"jet-sm-gb-d59e5f80-5707-4a99-ae18-c1d066b91404"} /-->

<!-- wp:jet-forms/text-field {"field_type":"tel","label":"Phone Number","name":"phone-number","className":" jet-sm-gb-wrapper jet-sm-gb-a7759893-2128-4b26-b4eb-f2acfeb893c7","blockID":"jet-sm-gb-a7759893-2128-4b26-b4eb-f2acfeb893c7"} /-->

<!-- wp:jet-forms/text-field {"label":"City","name":"city","className":" jet-sm-gb-wrapper jet-sm-gb-b4128c80-2a3f-4746-9b16-5ad9f3ac12e3","blockID":"jet-sm-gb-b4128c80-2a3f-4746-9b16-5ad9f3ac12e3"} /--></div>
<!-- /wp:column --></div>
<!-- /wp:columns -->

<!-- wp:jet-forms/form-break-field {"label_progress":"Participant information","add_prev":true} /-->

<!-- wp:paragraph {"fontSize":"large"} -->
<p class="has-large-font-size">Additional information</p>
<!-- /wp:paragraph -->

<!-- wp:columns -->
<div class="wp-block-columns"><!-- wp:column -->
<div class="wp-block-column"><!-- wp:jet-forms/text-field {"label":"Company","name":"company","className":" jet-sm-gb-wrapper jet-sm-gb-ff9b46a1-a472-43e8-8caa-fccbfcf958ce","blockID":"jet-sm-gb-ff9b46a1-a472-43e8-8caa-fccbfcf958ce"} /-->

<!-- wp:jet-forms/text-field {"label":"Position","name":"position","className":" jet-sm-gb-wrapper jet-sm-gb-10173dd4-1fe6-4b07-acfa-4148c877a55b","blockID":"jet-sm-gb-10173dd4-1fe6-4b07-acfa-4148c877a55b"} /-->

<!-- wp:jet-forms/text-field {"label":"Time here","name":"time-here","className":" jet-sm-gb-wrapper jet-sm-gb-444b7d9f-674f-40f7-920d-2640d73ac458","blockID":"jet-sm-gb-444b7d9f-674f-40f7-920d-2640d73ac458"} /--></div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column"><!-- wp:jet-forms/checkbox-field {"field_options":[{"label":"Airport transfer","value":"airport-transfer","calculate":""},{"label":"Academia","value":"academia","calculate":""},{"label":"Agriculture","value":"agriculture","calculate":""},{"label":"Arts","value":"arts","calculate":""},{"label":"Cinematic Industry","value":"cinematic_industry","calculate":""},{"label":"Consumer Goods","value":"consumer_goods","calculate":""},{"label":"Insurance","value":"insurance","calculate":""},{"label":"Manufacturing","value":"manufacturing","calculate":""},{"label":"Marketing / Publicity","value":"marketing__publicity","calculate":""},{"label":"Medical area","value":"medical_area","calculate":""}],"label":"Industry","name":"industry","className":" jet-sm-gb-wrapper jet-sm-gb-c882d149-4bdb-4c3a-9806-3b92cb0ebd68","blockID":"jet-sm-gb-c882d149-4bdb-4c3a-9806-3b92cb0ebd68"} /--></div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column"><!-- wp:jet-forms/radio-field {"field_options":[{"label":"Yes","value":"1","calculate":""},{"label":"No","value":"0","calculate":""}],"label":"Looking for a mentor","name":"looking-for-a-mentor","className":" jet-sm-gb-wrapper jet-sm-gb-59319fd9-177e-4d9e-87ae-13595b5cdca6","blockID":"jet-sm-gb-59319fd9-177e-4d9e-87ae-13595b5cdca6"} /-->

<!-- wp:jet-forms/checkbox-field {"field_options":[{"label":"Friend","value":"friend","calculate":""},{"label":"Event","value":"event","calculate":""},{"label":"Internet","value":"internet","calculate":""},{"label":"Other","value":"other","calculate":""}],"label":"How did you learn from us?","name":"how-did-you-learn-from-us","className":" jet-sm-gb-wrapper jet-sm-gb-8bbf3680-3b95-454a-b16d-26687b5aa025","blockID":"jet-sm-gb-8bbf3680-3b95-454a-b16d-26687b5aa025"} /-->

<!-- wp:jet-forms/radio-field {"field_options":[{"label":"Yes","value":"1","calculate":""},{"label":"No","value":"0","calculate":""}],"label":"Interested in receiving newsletter","name":"interested-in-receiving-newsletter","className":" jet-sm-gb-wrapper jet-sm-gb-59319fd9-177e-4d9e-87ae-13595b5cdca6","blockID":"jet-sm-gb-59319fd9-177e-4d9e-87ae-13595b5cdca6"} /--></div>
<!-- /wp:column --></div>
<!-- /wp:columns -->

<!-- wp:jet-forms/submit-field {"add_prev":true,"className":" jet-sm-gb-wrapper jet-sm-gb-3c47d378-79e8-4f96-a1f7-c4cce1aeb085","blockID":"jet-sm-gb-3c47d378-79e8-4f96-a1f7-c4cce1aeb085"} /-->

<!-- wp:jet-forms/form-break-field {"label_progress":"Additional information"} /-->'
	),



	'subscribe_form'      => array(
		'title'   => __( 'Subscribe Form', 'jet-form-builder' ),
		'content' => '<!-- wp:columns -->
<div class="wp-block-columns"><!-- wp:column -->
<div class="wp-block-column"><!-- wp:image {"align":"center","width":563,"height":563,"sizeSlug":"large"} -->
<div class="wp-block-image"><figure class="aligncenter size-large is-resized"><img src="https://edgepharm.com/wp-content/uploads/2020/01/image-placeholder.jpg" alt="" width="563" height="563"/></figure></div>
<!-- /wp:image --></div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column"><!-- wp:paragraph {"style":{"color":{"text":"#f94d84"}},"fontSize":"large"} -->
<p class="has-text-color has-large-font-size" style="color:#f94d84">Get Our Newsletter</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>For discounts, opportunities, and new product announcements — plus a few surprises.</p>
<!-- /wp:paragraph -->

<!-- wp:jet-forms/text-field {"label":"First Name","name":"first-name","required":true,"className":" jet-sm-gb-wrapper jet-sm-gb-582e3284-467f-41dc-a95b-801961ae40ba","blockID":"jet-sm-gb-582e3284-467f-41dc-a95b-801961ae40ba"} /-->

<!-- wp:jet-forms/text-field {"field_type":"email","label":"E-mail","name":"e-mail","placeholder":"demo@link.com","required":true,"className":" jet-sm-gb-wrapper jet-sm-gb-eb2b1c04-06d8-4718-aacf-d221bfdf32ec","blockID":"jet-sm-gb-eb2b1c04-06d8-4718-aacf-d221bfdf32ec"} /-->

<!-- wp:jet-forms/submit-field {"label":"Subscribe","className":" jet-sm-gb-wrapper jet-sm-gb-e49443d8-8a29-40ba-8288-836622af67ec","blockID":"jet-sm-gb-e49443d8-8a29-40ba-8288-836622af67ec"} /--></div>
<!-- /wp:column --></div>
<!-- /wp:columns -->'
	),



	'profile_form'        => array(
		'title'   => __( 'Profile form', 'jet-form-builder' ),
		'content' => '<!-- wp:columns -->
<div class="wp-block-columns"><!-- wp:column -->
<div class="wp-block-column"><!-- wp:jet-forms/media-field {"allowed_user_cap":"all","insert_attachment":true,"value_format":"id","max_files":1,"max_size":1,"allowed_mimes":["image/jpeg","image/gif","image/png"],"name":"profile-photo","className":" jet-sm-gb-wrapper jet-sm-gb-5b4460ed-1f4c-4016-bb70-518798759fdf","blockID":"jet-sm-gb-5b4460ed-1f4c-4016-bb70-518798759fdf"} /-->

<!-- wp:paragraph {"fontSize":"medium"} -->
<p class="has-medium-font-size">BASIC</p>
<!-- /wp:paragraph -->

<!-- wp:columns -->
<div class="wp-block-columns"><!-- wp:column -->
<div class="wp-block-column"><!-- wp:jet-forms/text-field {"label":"First name","name":"first-name","required":true,"className":" jet-sm-gb-wrapper jet-sm-gb-f6e0a9ad-3864-4a2e-99c6-0e0b1d75421d","blockID":"jet-sm-gb-f6e0a9ad-3864-4a2e-99c6-0e0b1d75421d"} /--></div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column"><!-- wp:jet-forms/text-field {"label":"Last name","name":"last-name","required":true,"className":" jet-sm-gb-wrapper jet-sm-gb-587f0112-96a6-461d-882e-a85dcfc29b83","blockID":"jet-sm-gb-587f0112-96a6-461d-882e-a85dcfc29b83"} /--></div>
<!-- /wp:column --></div>
<!-- /wp:columns -->

<!-- wp:jet-forms/textarea-field {"label":"About me","name":"about-me","placeholder":"Tell about yourself","className":" jet-sm-gb-wrapper jet-sm-gb-b79d0595-3564-4f7f-a863-0a68f36e070c","blockID":"jet-sm-gb-b79d0595-3564-4f7f-a863-0a68f36e070c"} /--></div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column"><!-- wp:paragraph {"fontSize":"medium"} -->
<p class="has-medium-font-size">ADDITIONAL INFORMATION</p>
<!-- /wp:paragraph -->

<!-- wp:columns -->
<div class="wp-block-columns"><!-- wp:column -->
<div class="wp-block-column"><!-- wp:jet-forms/text-field {"label":"Location","name":"location","placeholder":"German","className":" jet-sm-gb-wrapper jet-sm-gb-6db423dd-8368-4c33-9e2a-c5ae7147d1c8","blockID":"jet-sm-gb-6db423dd-8368-4c33-9e2a-c5ae7147d1c8"} /-->

<!-- wp:jet-forms/text-field {"field_type":"email","label":"Email","name":"email","placeholder":"demo@link.com","required":true,"className":" jet-sm-gb-wrapper jet-sm-gb-6db423dd-8368-4c33-9e2a-c5ae7147d1c8","blockID":"jet-sm-gb-6db423dd-8368-4c33-9e2a-c5ae7147d1c8"} /--></div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column"><!-- wp:jet-forms/text-field {"label":"Languages","name":"languages","placeholder":"English, German","className":" jet-sm-gb-wrapper jet-sm-gb-efd1dc22-4bc2-4900-adea-55337095555a","blockID":"jet-sm-gb-efd1dc22-4bc2-4900-adea-55337095555a"} /-->

<!-- wp:jet-forms/text-field {"field_type":"tel","enable_input_mask":true,"input_mask":"+99(999)999-99-99","label":"Phone","name":"phone","required":true,"className":" jet-sm-gb-wrapper jet-sm-gb-efd1dc22-4bc2-4900-adea-55337095555a","blockID":"jet-sm-gb-efd1dc22-4bc2-4900-adea-55337095555a"} /--></div>
<!-- /wp:column --></div>
<!-- /wp:columns -->

<!-- wp:paragraph {"fontSize":"medium"} -->
<p class="has-medium-font-size">SETTINGS</p>
<!-- /wp:paragraph -->

<!-- wp:columns -->
<div class="wp-block-columns"><!-- wp:column -->
<div class="wp-block-column"><!-- wp:jet-forms/text-field {"field_type":"password","label":"New password","name":"new-password","className":" jet-sm-gb-wrapper jet-sm-gb-da01c134-c286-45ba-be4b-3058602e8541","blockID":"jet-sm-gb-da01c134-c286-45ba-be4b-3058602e8541"} /--></div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column"><!-- wp:jet-forms/text-field {"field_type":"password","label":"Confirm password","name":"confirm-password","className":" jet-sm-gb-wrapper jet-sm-gb-da01c134-c286-45ba-be4b-3058602e8541","blockID":"jet-sm-gb-da01c134-c286-45ba-be4b-3058602e8541"} /--></div>
<!-- /wp:column --></div>
<!-- /wp:columns --></div>
<!-- /wp:column --></div>
<!-- /wp:columns -->

<!-- wp:jet-forms/submit-field {"label":"Update","className":" jet-sm-gb-wrapper jet-sm-gb-89322a2a-6eff-48b3-b984-d4d4e498e899","blockID":"jet-sm-gb-89322a2a-6eff-48b3-b984-d4d4e498e899"} /-->'),



	'demo_form' => array(
		'title'   => __( 'Demo form', 'jet-form-builder' ),
		'content' => '<!-- wp:jet-forms/hidden-field {"name":"post_id"} /-->

<!-- wp:heading {"level":3} -->
<h3>01. General Information</h3>
<!-- /wp:heading -->

<!-- wp:columns -->
<div class="wp-block-columns"><!-- wp:column {"width":"66.66%"} -->
<div class="wp-block-column" style="flex-basis:66.66%"><!-- wp:jet-forms/select-field {"field_options":[{"label":"At the beach","value":"30","calculate":"30"},{"label":"5 minutes to the shore","value":"15","calculate":"15"},{"label":"10 minutes to the shore","value":"0","calculate":"0"}],"field_options_key":"choose-your-stay","label":"Choose Your Stay","name":"choose_your_stay","blockID":"jet-sm-gb-133240fa-607c-4fd1-bb0d-f2b76fc7d7e8"} /-->

<!-- wp:jet-forms/date-field {"label":"Check-in Date","name":"check-in-date","blockID":"jet-sm-gb-3921dcff-c153-49e9-822d-86cec1f3a994"} /--></div>
<!-- /wp:column -->

<!-- wp:column {"width":"33.33%"} -->
<div class="wp-block-column" style="flex-basis:33.33%"><!-- wp:jet-forms/select-field {"field_options":[{"label":"1","value":"1","calculate":"1"},{"label":"2","value":"2","calculate":"2"},{"label":"3","value":"3","calculate":"3"},{"label":"4","value":"4","calculate":"4"},{"label":"5","value":"5","calculate":"5"},{"label":"6","value":"6","calculate":"6"},{"label":"7","value":"7","calculate":"7"},{"label":"8","value":"8","calculate":"8"},{"label":"9","value":"9","calculate":"9"},{"label":"10","value":"10","calculate":"10"}],"field_options_key":"number-of-nights","label":"Number of Nights","name":"number_of_nights","blockID":"jet-sm-gb-b2657b8d-90f3-47e7-925c-549490568134"} /-->

<!-- wp:jet-forms/time-field {"label":"Time","name":"time","blockID":"jet-sm-gb-59771bb7-fb4f-441c-8cb3-5cac0b0cf9fd"} /--></div>
<!-- /wp:column --></div>
<!-- /wp:columns -->

<!-- wp:jet-forms/range-field {"min":50,"max":300,"step":20,"prefix":"$","label":"Price per Night","name":"price","blockID":"jet-sm-gb-bc399981-48fc-45b5-add1-6b4a69cefbdb"} /-->

<!-- wp:columns {"className":"check-radio-block"} -->
<div class="wp-block-columns check-radio-block"><!-- wp:column -->
<div class="wp-block-column"><!-- wp:jet-forms/checkbox-field {"field_options":[{"label":"Family trip","value":"Family trip","calculate":"15"},{"label":"Single trip","value":"Single trip","calculate":"5"},{"label":"Couple trip","value":"Couple trip","calculate":"20"},{"label":"Other","value":"Other","calculate":"0"}],"label":"Kind of trip","name":"kind","blockID":"jet-sm-gb-53393903-d3e9-4f2a-be45-ef48e9dff66f"} /--></div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column"><!-- wp:jet-forms/radio-field {"field_options":[{"label":"0","value":"0","calculate":"0"},{"label":"1","value":"1","calculate":"20"},{"label":"2","value":"2","calculate":"40"},{"label":"3","value":"3","calculate":"60"}],"label":"Children","name":"children","blockID":"jet-sm-gb-f038bcfc-7d11-472e-a7f9-bbb5f7f0c6b2"} /--></div>
<!-- /wp:column -->

<!-- wp:column {"width":"34%"} -->
<div class="wp-block-column" style="flex-basis:34%"><!-- wp:jet-forms/checkbox-field {"field_options":[{"label":"Breakfast +$15","value":"Breakfast +$15","calculate":"15"},{"label":"Lunch + $10","value":"Lunch + $10","calculate":"10"},{"label":"Laundry +$13","value":"Laundry +$13","calculate":"13"},{"label":"Transfer +$30","value":"Transfer +$30","calculate":"30"}],"label":"Extra Services","name":"extra_services","blockID":"jet-sm-gb-775ad3a7-570c-4775-b009-47ed02bc227e"} /--></div>
<!-- /wp:column --></div>
<!-- /wp:columns -->

<!-- wp:jet-forms/calculated-field {"calc_formula":"(%FIELD::choose_your_stay%*%FIELD::number_of_nights%)+(%FIELD::kind%*%FIELD::number_of_nights%)+\n(%FIELD::children%*%FIELD::number_of_nights%)+\n(%FIELD::price%*%FIELD::number_of_nights%)\n+\n(%FIELD::extra_services%*%FIELD::number_of_nights%)","calc_prefix":"Total Price:\u0026nbsp;","label":"Calculated Field","name":"calculated-field","blockID":"jet-sm-gb-dcfa3a3d-9243-4635-96e6-0eb847f23c48"} /-->

<!-- wp:jet-forms/form-break-field {"class_name":"form-button"} /-->

<!-- wp:heading {"level":3} -->
<h3>02. Personal Information</h3>
<!-- /wp:heading -->

<!-- wp:heading {"level":4} -->
<h4>Guest</h4>
<!-- /wp:heading -->

<!-- wp:columns -->
<div class="wp-block-columns"><!-- wp:column -->
<div class="wp-block-column"><!-- wp:jet-forms/text-field {"label":"Name","name":"name","required":true,"className":" jet-sm-gb-wrapper jet-sm-gb-afe342da-9827-45c0-aca3-c15fa1728adb","blockID":"jet-sm-gb-afe342da-9827-45c0-aca3-c15fa1728adb"} /-->

<!-- wp:jet-forms/text-field {"field_type":"tel","label":"Phone","name":"phone","required":true,"className":" jet-sm-gb-wrapper jet-sm-gb-afe342da-9827-45c0-aca3-c15fa1728adb","blockID":"jet-sm-gb-afe342da-9827-45c0-aca3-c15fa1728adb"} /--></div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column"><!-- wp:jet-forms/text-field {"label":"Last Name","name":"last_name","required":true,"className":" jet-sm-gb-wrapper jet-sm-gb-f0dbebeb-6ba1-45bf-9aa3-8816fc614113","blockID":"jet-sm-gb-f0dbebeb-6ba1-45bf-9aa3-8816fc614113"} /-->

<!-- wp:jet-forms/radio-field {"field_options":[{"label":"Male","value":"Male","calculate":""},{"label":"Female","value":"Female","calculate":""}],"label":"Gender","name":"gender","blockID":"jet-sm-gb-9b042030-85fc-415a-b928-05556e211408"} /--></div>
<!-- /wp:column --></div>
<!-- /wp:columns -->

<!-- wp:jet-forms/textarea-field {"label":"Additional Information","name":"additional-information","blockID":"jet-sm-gb-e68e7ffc-57a5-44bb-8170-43b8567d813f"} /-->

<!-- wp:jet-forms/repeater-field {"new_item_label":"+ Add new","name":"repeater","blockID":"jet-sm-gb-163c7ab0-96fd-4b72-a140-d793b4178d0a"} -->
<!-- wp:heading {"level":4} -->
<h4>Next Guest</h4>
<!-- /wp:heading -->

<!-- wp:columns -->
<div class="wp-block-columns"><!-- wp:column -->
<div class="wp-block-column"><!-- wp:jet-forms/text-field {"label":"Name","name":"rep_name","required":true,"className":" jet-sm-gb-wrapper jet-sm-gb-afe342da-9827-45c0-aca3-c15fa1728adb","blockID":"jet-sm-gb-afe342da-9827-45c0-aca3-c15fa1728adb"} /-->

<!-- wp:jet-forms/number-field {"label":"Phone","name":"rep_phone","required":true,"blockID":"jet-sm-gb-0646c1df-2f9b-49f8-a632-d4a327c2793a"} /--></div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column"><!-- wp:jet-forms/text-field {"label":"Last Name","name":"rep_last_name","required":true,"className":" jet-sm-gb-wrapper jet-sm-gb-f0dbebeb-6ba1-45bf-9aa3-8816fc614113","blockID":"jet-sm-gb-f0dbebeb-6ba1-45bf-9aa3-8816fc614113"} /-->

<!-- wp:jet-forms/radio-field {"field_options":[{"label":"Male","value":"Male","calculate":""},{"label":"Female","value":"Female","calculate":""}],"label":"Gender","name":"rep_gender","blockID":"jet-sm-gb-9b042030-85fc-415a-b928-05556e211408"} /--></div>
<!-- /wp:column --></div>
<!-- /wp:columns -->

<!-- wp:jet-forms/textarea-field {"label":"Additional Information","name":"rep_additional_information","blockID":"jet-sm-gb-e68e7ffc-57a5-44bb-8170-43b8567d813f"} /-->
<!-- /wp:jet-forms/repeater-field -->

<!-- wp:jet-forms/form-break-field {"add_prev":true,"prev_label":"Previous","class_name":"form-button"} /-->

<!-- wp:heading {"level":3} -->
<h3>03. Additional Information</h3>
<!-- /wp:heading -->

<!-- wp:jet-forms/wysiwyg-field {"label":"Leave a Comment","name":"comment","blockID":"jet-sm-gb-c5ebbb15-620b-478e-bdff-e861723c2e33"} /-->

<!-- wp:jet-forms/media-field {"max_files":1,"max_size":10,"allowed_mimes":["image/jpeg","image/gif","image/png","image/bmp","image/tiff","image/x-icon","image/heic"],"name":"choose-file","blockID":"jet-sm-gb-f54ed2ac-0da4-4808-acdb-433dcd3b5c91"} /-->

<!-- wp:jet-forms/submit-field {"label":"Submit Form","add_prev":true,"prev_label":"Previous","class_name":"form-button","blockID":"jet-sm-gb-7337b51f-3699-4240-acb5-6048350f62b8"} /-->'
	)
);
