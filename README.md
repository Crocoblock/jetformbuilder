## About

Advanced form builder plugin for Gutenberg. Create forms from the ground up, customize the existing ones, and style them up – all in one editor.

## How can I report security bugs?

You can report security bugs through the Patchstack Vulnerability Disclosure Program. The Patchstack team help validate, triage and handle any security vulnerabilities. [Report a security vulnerability.](https://patchstack.com/database/vdp/jetformbuilder)

## ChangeLog


## 3.5.2
* FIX: Media field better compatibility with ACF [Crocoblock/jetformbuilder#487](https://github.com/Crocoblock/jetformbuilder/issues/487)
* ADD: Create terms if missing when a post is inserted/updated via 'Insert/Update Post' action [Crocoblock/suggestions#3654](https://github.com/Crocoblock/suggestions/issues/3654)
* ADD: 'Insert/Update Term' action
* FIX: Fixed the issue with triggering the Send Email action after verification by the admin [Crocoblock/suggestions#7946](https://github.com/Crocoblock/suggestions/issues/7946)
* FIX: Repeater items triplicate inside Elementor Tabs
* FIX: Editor styles compatibility with BuddyBoss theme
* FIX: Login & registration texts and UX enhancements
* FIX: Resetting input values in the Repeater field when deleting a row
* FIX: Moved 'Enable custom option' from block settings menu to toolbar
* FIX: Deprecations and minor issues
* FIX: PHP Object Injection vulnerability

## 3.5.1.2
* FIX: Meta fields update in `Insert/Update Post` action

## 3.5.1.1
* FIX: Fatal error if the user role is empty after plugin update/user role is not chosen after update

## 3.5.1
* FIX: Ensure post-meta insertion and updates work with the `Insert/Update Post` action when using meta repeaters saved as separate fields [Crocoblock/suggestions#7876](https://github.com/Crocoblock/suggestions/issues/7876)
* ADD: Multiple Assignable Roles with Register/Update User actions [Crocoblock/suggestions#7942](https://github.com/Crocoblock/suggestions/issues/7942)
* FIX: Save repeater data after removing items [Crocoblock/jetformbuilder#528](https://github.com/Crocoblock/jetformbuilder/issues/528)
* ADD: `jet-form-builder/ajax/processing-error` JS trigger
* FIX: Copilhost.fr breaks POST request in form
* FIX: Honeypot protection not preventing submission if honeypot field not empty
* FIX: Accessibility Improvements

## 3.5.0
* ADD: Calculated Field usage info with references and examples.
* ADD: User Journey functionality.
* ADD: Implemented visibility controls for Form Records, restricting access for unprivileged users.
* ADD: Added date/time calculation support to Calculated Field, including new date/time filters.
* ADD: input validation against the current user’s password.
* ADD: new admin UI
* UPD: synchronize manual and bulk editors
* ADD: `Server side validation method` option
* ADD: `Import from HTML` feature
* FIX: Accessibility Improvements

## 3.4.7.1
* FIX: Compatibility with WordPress 6.8 (resolves visual issue with block validation type)

## 3.4.7
* FIX: Editor styles compatibility with BuddyBoss theme
* FIX: Reset input values in the Repeater field when adding a new row
* FIX: Init of the Check Mark block
* FIX: Check mark widget icon for checkbox
* FIX: Issue with Conditional Block duplication
* ADD: style controls notices
* ADD: `jet-form-builder/ajax/on-fail` JS trigger
* FIX: Input mask DateTime documentation link
* FIX: [Crocoblock/jetformbuilder#521](https://github.com/Crocoblock/jetformbuilder/issues/521)
* FIX: [Crocoblock/suggestions#7878](https://github.com/Crocoblock/suggestions/issues/7878)
* FIX: `Generate with AI` limit error on local sites
* FIX: Errors on the `Payments` admin page when the `Enable Gateways` option is disabled
* FIX: Disabled "Next page" button when select field is empty

## 3.4.6
* FIX: Resolved an issue with search autocomplete in the Map field
* FIX: Fixed case sensitivity for the `use autocomplete` option in `Select Field` when loading via AJAX
* FIX: [Crocoblock/jetformbuilder#497](https://github.com/Crocoblock/jetformbuilder/issues/497)
* FIX: Improved compatibility with the `JetFormBuilder Hubspot Action` addon
* FIX: Improved compatibility with the `JetFormBuilder Woocommerce Cart & Checkout Action` addon
* FIX: Fixed incorrect calculation in the `Calculated Field` when using Dynamic Value
* FIX: Resolved a critical error in hCaptcha when no keys are inserted
* FIX: Fixed an issue where the input mask prevented the form from being submitted
* FIX: Fixed an issue with `Enable form pages progress` and `Clear data on success submit` options on Elementor pages
* ADD: Added the `Is field value unique` callback for the `Advanced Validation` option with the `Server-Side Callback` type
* ADD: Added the `Open in New Tab` option to the `Redirect to Page` action
* FIX: Minor fixes in the editor

## 3.4.5.2
* FIX: Calculated field issues after 3.4.5 update
* FIX: Issue with the Date field when the default value is set as macros

## 3.4.5.1
* FIX: Calculated field issues after 3.4.5 update.

## 3.4.5
* FIX: Bricks builder checkbox & radio fields style in the JetForm widget
* FIX: Resolved an issue with Calculated Field recalculation when using a Conditional Block
* FIX: Getresponce action error with default fields
* FIX: JetForm widget disables the Enable Form Progress toggle
* FIX: Resolved an issue with saving map meta fields when using the search autocomplete option in Map Field
* FIX: Google reCAPTCHA Score Threshold option description styles
* FIX: Wysiwyg not clickable in conditional block if Remove hidden elements from page HTML is turned on
* FIX: CC/BCC address from options default emails in the 'Send Email' form action
* FIX: Custom options for checkbox
* FIX: Issue with input mask
* FIX: Js issues

## 3.4.4
* FIX: Fixed the empty "Interests" field when creating a user in Mailchimp
* FIX: Save keys for CAPTCHA providers
* FIX: Resolved the CSS class name issue in the "Switcher Field"
* FIX: Validation issue in the `REST API Request` form action
* FIX: Issues with the `Conditional Block` functionality
* FIX: required option issue in the `Appointment Provider`
* ADD: Added the `Form ID` сontrol to the JetForm widget
* ADD: Save `password` type fields during form verification action
* FIX: js issues

## 3.4.3
* FIX: Server-side callback Validation
* FIX: Dynamic value synchronization between two checkbox fields
* FIX: Form records save when CAPTCHA fails with toggle disabled
* FIX: `Remove mask on submit` option
* FIX: Issue with removing repeater fields with preset when data becomes empty
* FIX: Error when editing Mailchimp actions
* ADD: Webhook `Timeout in seconds` setting

## 3.4.2
* FIX: Sanitization of Form Field Names
* FIX: Issue with saving values in Repeater Fields
* FIX: Elementor editor styles for Checkbox & Radio Fields
* FIX: Server-Side callback Validation
* FIX: Issue with Calculated Fields and Select Fields

## 3.4.1
* FIX: Timezone issue in calculated fields
* FIX: Compatibility with JetEngine Bulk Options for meta-field
* FIX: Register User UI. Description for `add_user_id` option
* FIX: Apply rich content on `max_size` & `max_files` attributes in Media Field
* FIX: Eye icon position in RTL
* FIX: A layout option for radio block doesn't work
* FIX: Incorrect saving groups in the Mailchimp action

## 3.4.0
* ADD: New UI for actions
* ADD: Preview or quickly use a form
* ADD: Check Mark block for JetEngine Listings
* ADD: Autocomplete search input for the Map Field
* ADD: CC & BCC options for Send Email action
* FIX: Indexing repeater
* FIX: Incorrect form update request in the editor

## 3.3.4.2
* FIX: Privilege escalation with administrator-level via the Register / Update User actions

## 3.3.4.1
* FIX: Advanced Validation with Server-Side callback does not work on frontend
* FIX: Honeypot protection breaks the form on frontend
* FIX: Incorrect value in Calculated Field after page loading
* FIX: Compatibility with PHP version < 8.0 

## 3.3.4
* ADD: Eye-icon for password field
* ADD: Gap controls for Checkbox / Radio fields (props [@stijnvanouplines](https://github.com/stijnvanouplines))
* ADD: PHP actions `jet-form-builder/before-field` & `jet-form-builder/after-field` (props [@stijnvanouplines](https://github.com/stijnvanouplines))
* ADD: Style controls for disabled Next Button
* FIX: Advanced validation compatibility with Map Field
* FIX: When returned to the form page, the Calculated values of the fields were not updated
* FIX: The option to manage WP nonce was not in the correct state when creating a new form
* FIX: Error in the database when trying to send a form on a page without the current post
* FIX: Compatibility with JetBooking & Calculated Field

## 3.3.3.1
* Tweak: banner for admin-pages

## 3.3.3
* UPD: The Update Post action will fail if you try to change the post type. Use this filter to allow post type change:
`add_filter( 'jet-form-builder/action/insert-post/allow-change-post-type', '__return_true' );`
* UPD: When you activate the plugin for new sites, the following options will be updated: 
`Disable Next button` => disabled, `Scroll to the top on page change` => enabled, `Automatic focus` => enabled
* ADD: Added missing size units & responsive controls for the JetForm Elementor widget 
(props [@stijnvanouplines](https://github.com/stijnvanouplines))
* FIX: Ignoring "0" as default, minimum, and maximum attributes
* FIX: Automatic page transition failed if the trigger field was inside a conditional block that disappears 
from the tree DOM.
* FIX: Correct apply changes in daterangepicker on change value (jet-booking compatibility)
* FIX: Form generation via AI on local servers
* FIX: Captcha in a listing grid / query loop does not work correctly

## 3.3.2
* FIX: Use macros in Send Email when verifying a submission or processing a gateway.
* FIX: Apply advanced validation for optional field 
* Tweak: Support for old namespaces for Radio, Select, Checkbox classes

## 3.3.1
* ADD: Implementing rich content using the "jet-form-builder/rich-content" filter. It supports shortcodes, macros with 
field names (usually used in action settings) and dynamic preset (JSON-style)
* ADD: Many block attributes support rich content now. And also some settings in actions and notifications about 
the result of the form execution.
* UPD: Internal API for field (Select, Radio, Checkbox) options. Added `jet-form-builder/option-query/set-in-block` hook.
* FIX: aria-required attribute in Advanced Choices Field
* FIX: Accessibility Improvements for several fields
* FIX: Default validation with the Repeater Field
* FIX: "Labels" font styles replace "Heading" font styles in JetFormBuilder widget (Bricks)
* FIX: Switcher style is broken in JetFormBuilder widget (Bricks)
* FIX: Select field on mobile, select arrow is on the wrong side RTL

## 3.3.0
* ADD: Switcher Field
* ADD: Welcome block with form patterns
* ADD: Generate forms with Open AI
* ADD: Improved preset sanitize. Option for disable sanitize
* ADD: Possibility to verify manually the form by admin
* ADD: "Greater than or equal" and "Less than or equal" operators were added to the Conditional Block
* UPD: Improved Server-Side validation
* FIX: Compatibility with JetBooking on the frontend

## 3.2.3
* UPD: Improve JetForm block in Block Editor with style controls for the most fields
* UPD: Improve compatibility with the Check-In/Check-Out field (JetBooking)
* FIX: Style controls of the JetForm widget in Elementor editor
* FIX: Scroll to the top on page change ignores form pages progress
* FIX: Custom template is not attached to the checkbox (or radio) field if there is "Generate dynamically" -> "Get values list from JetEngine Query" source
* FIX: Convert each Woocommerce product into a simple product

## 3.2.2
* ADD: Style-controls & options for the WYSIWYG field
* UPD: UI/UX bulk options
* FIX: Style controls for the Checkbox field in JetForm widget (Elementor)
* FIX: Date fields not exported from form records to csv
* FIX: Columns are not displayed correctly with elementor containers

## 3.2.1
* ADD: Number-related sanitizers for fields
* ADD: Now you can write `<div data-jfb-macro="field_name"></div>` instead of `<!--JFB_FIELD::field_name-->`
* ADD: Random String option in Field Value for Hidden Field
* FIX: Prevent appearance of the select field in Safari browser
* FIX: Style controls for JetForm element in Bricks Builder
* FIX: Minor accessibility errors
* FIX: Prevent style WYSIWYG editor by the theme or global styles
* FIX: Issue with Enter key when entering Japanese IME
* FIX: Advanced choices don't work with the Radio Field
* FIX: Input mask saves the unmasked value on blur (lost focus)

## 3.2.0
* ADD: Email Verification
* ADD: Widget "JetForm" for Bricks editor
* ADD: Register User with random password (use "Secure unique token" in the Fields Map)
* ADD: Ability to allow custom options in Radio/Checkbox fields
* ADD: Option to sanitize values in Text and Textarea fields
* ADD: Bulk add the Select/Radio/Checkbox options
* UPD: The Action Button block is divided into 4 separate variations (to improve UX in the editor)
* FIX: Issue with default value if there was static text or macro

## 3.1.9
* FIX: ActiveCampaign integration error when using custom fields
* FIX: In Send Email action if there is a percentage symbol in the body of the letter
* FIX: Elementor widget JetForm - fields width issue (props [@stijnvanouplines](https://github.com/stijnvanouplines))
* FIX: Incorrect recognition of regular expression in advanced validation

## 3.1.8
* FIX: Error in form fields in editor after release of WP 6.4. Inability to edit them
* FIX: Prevent saving too long status in `*_jet_fb_records` table
* FIX: Remove useless control in Elementor widget - JetForm
* FIX: Save form progress (addon) not working for repeater fields

## 3.1.7
* ADD: Support multiple emails in Reply-To (Send Email)
* ADD: Added "Post Type" to Hidden Field Sources
* FIX: Active Campaign. Cannot add a contact with an existing tag if there are many
* FIX: Encoding Error in Color Picker Field
* FIX: Changed the user_agent column type from varchar (255) to text in the table `jet_fb_records`
* FIX: Media field is empty in form records export file
* FIX: Visually confusing the "Generate dynamically" -> "Value from meta" options setting
* FIX: Advanced Choices Field Block styled text can't be clicked
* FIX: Compatibility with JetFormBuilder PayPal Subscriptions
* FIX: REST-API security. Now only administrators can view one or more forms using standard WP REST routes

## 3.1.6
* FIX: Minor vulnerability in Update User action
* FIX: Invalid deletion of first element of repeater field
* FIX: Form doesn't go to top of each step in some cases
* FIX: Ignore the value 0 in the Select/Radio/Checkbox Fields
* FIX: Minor compatibility with language plugins

## 3.1.5
* ADD: Friendly notice in browser console about error in Calculated formula
* FIX: Conditional Block with required field always throws Validation error
* FIX: Displays html in the value of the fields on the single record page
* FIX: Application of shortcodes inside the form when it is displayed by the shortcode

## 3.1.4
* ADD: User Display Name in dynamic preset
* FIX: Uncaught Exception: upload_mime_types
* FIX: Booking form inside listing stopped working
* FIX: Error in console if no captcha is used.
* FIX: The value 0 in the field was recognized as empty
* FIX: Compatibility with JetEngine Lazy load in the listing
* FIX: Exporting form records, automatically fills in empty form fields

## 3.1.3
* ADD: Color Scheme option for Input fields in Elementor widget
* FIX: Remove unused files
* FIX: `jet-form-builder/form-handler/after-send` hook, gets the wrong form result
* FIX: Custom Listing Template not working properly with checkbox and generator

## 3.1.2
* FIX: The operation of the preset in the Advanced Choices Field inside the repeater
* FIX: Calculating a custom formula for each element of the repeater
* FIX: Compatibility with WordPress 6.3 (Layout updates in the editor)
* Tweak: Improved compatibility with [jfb-attributes-for-macros](https://github.com/giraffffee/jfb-attributes-for-macros) addon

## 3.1.1
* FIX: An error in admin footer text filter
* FIX: `term_titles_by_ids filter` return fatal error
* FIX: An error in the console when the "Switch page on change" option is enabled in the Radio or Select field
* FIX: Button Edit JetForm not visible anymore in the Admin bar
* FIX: Forced conversion of the maximum file size in the Media field to an integer value
* FIX: Wrong rendering of Repeater field with preset

## 3.1.0.1
* FIX: Fatal error when sending email with attachments

## 3.1.0
* UPD: Upgraded the minimum supported version of WordPress to 6.0
* ADD: Turnstile support (JetForm -> Captcha Settings OR Turnstile block)
* ADD: hCaptcha support (JetForm -> Captcha Settings OR hCaptcha block)
* ADD: Friendly Captcha support (JetForm -> Captcha Settings OR Friendly Captcha block)
* ADD: Option to add Honeypot (JetForm -> Validation)
* ADD: Advanced Choices Field
* ADD: Ability to export Form Records
* ADD: Ability to filter Form Records by status and creation date
* ADD: Ability to export Payments
* ADD: Ability to filter Payments by status and creation date
* ADD: Dynamic min/max for: Text Field, Textarea Field, Number Field, Range Field, Media Field
* ADD: Modal window with confirmation of deletion of all data after uninstalling the plugin
* ADD: Support for LiteSpeed cache esi feature
* UPD: Refactor request parser
* FIX: Field in reusable block not saved in Form Records if it is not used in any action
* FIX: Fatal error when trying to add an attachment to an email because of the wrong field
* FIX: Appointment Date field not displayed in Elementor editor
* FIX: Validation message for unlogged user do not display
* FIX: An error occurred while importing the form
* Tweak: Add listener not to radio/checkbox field but to the whole field

## 3.0.9
* UPD: Now only administrators can edit/create/delete forms.
* UPD: Starting frontend validation when losing focus on radio and checkbox fields
* FIX: Multiple browser history changes
* FIX: Critical error when open General Messages tab in form editor
* FIX: An error occurred while importing the form
* FIX: Compatibility with Appointment Provider field with custom listing template

## 3.0.8
* UPD: Removed support for required attribute in Calculated Field
* FIX: Forms are displayed on the front when their status is trash
* FIX: WYSIWYG toolbar in JetPopup (by ajax)
* FIX: Removed rtl support for Text Field with input mask due to "flipping" value
* FIX: ActiveCampaign action does not show all fields
* FIX: Changed the form selection control in the JetForm widget in Elementor due to a compatibility bug with Safari
* FIX: Media Field and Firefox ESR browser compatibility

## 3.0.7
* ADD: Support for custom css classes and anchors for the JetForm block
* FIX: Additional security checks on export and duplicate forms.
* FIX: Form doesn't scroll to the top on next page in popup
* FIX: Must not contain chars in advanced validation
* FIX: Advanced validation fails when field value comes from URL parameter
* FIX: Macros in call webhook action does not work
* FIX: Attachments are empty in an email with a media field that has been filled with a preset, and files with a value format of array
* FIX: Dynamic value does not uncheck all checkbox options. Removed `.trigger( 'change' )` support for checkboxes when changing state via Dynamic Value
* FIX: An error occurred when synchronizing with GetResponse when editing an action
* FIX: Minor bug causing WooCommerce pages to look a little different
* FIX: The value in the text field with the input mask was stored in the wrong sequence in the RTL direction

## 3.0.6
* ADD: Ability to import multiple forms at the same time
* UPD: The post title is used for the form export file instead of the post name
* FIX: Shows an error if you just save without patching on Settings page
* FIX: "Must not contain chars" in advanced validation

## 3.0.5
* ADD: Ability to hide conditional blocks during form rendering to avoid layout shifts (see Advanced section in block settings)
* FIX: Incorrect behavior of validation in step-by-step form
* FIX: Compatibility of Calculated field with Repeater Field
* FIX: Fatal error when using a preset with GET parameters that are missing

## 3.0.4
* ADD: Save Record will not execute if captcha, wp nonce or csrf token validation failed. To return the saving of errors of this kind, it is necessary to manually enable the corresponding option in the action
* UPD: Guests are allowed to add attachments 
  using the [`jet-form-builder/media-field/before-upload`](https://github.com/Crocoblock/jetformbuilder/wiki/PHP-Hooks#jet-form-buildermedia-fieldbefore-upload) hook
* FIX: JetAppointment compatibility
* FIX: Cannot delete thumbnail through form
* FIX: Calculated field doesn't work if prefix suffix with html
* FIX: UI error in Insert/Update Post with custom post-type 
  `product` (which was created by JetEngine or another similar plugin)
* FIX: JetStyleManager compatibility
* FIX: Fatal error when setting the conditions for executing actions incorrectly
* FIX: Back compatibility with Reusable Block

## 3.0.3
* UPD: Loading css as early as possible on a single page
* FIX: WP 6.2 compatibility (Editor error while editing action)
* FIX: Loading css for all Gutenberg core blocks (compatibility with form display via shortcode in other page builders)
* FIX: Allow re-submit form with reCaptcha v3
* FIX: Compatibility of a formatted Calculated field with a Conditional block
* Tweak: Backward compatibility for `jet.fb.submit.ajax.promises` hook
* Tweak: added php-hook `jet-form-builder/send-email/send-before`

## 3.0.2
* ADD: Option for Send Email "Disable Auto-Formatting"
* FIX: Correct apply calculated value on page load
* FIX: Importing/duplicating form in some cases
* FIX: Captcha token verify

## 3.0.1.1
* FIX: Captcha score validation

## 3.0.1
* ADD: Captcha score threshold
* ADD: Option for clear input mask before submit
* ADD: Changing the field name to `[name]_copy` in the duplicate/copy fields block
* ADD: Warning in the editor if the field name is not unique
* ADD: Ability to send email attachments from a hidden field
* ADD: Option "Scroll to the top on page change" (JetFormBuilder -> Settings)
* ADD: Option "Automatic focus" (JetFormBuilder -> Settings)
* ADD: Saving render state as part of a URL request
* FIX: Force Blocks Editor on JetFormBuilder post type
* FIX: Conditional logic  with checkbox field
* FIX: Improved the parser of the calculated field when using `%` as an operator sign
* FIX: Save Progress compatibility
* FIX: JS fatal error occurs while importing the form

## 3.0.0.3
* UPD: Listen/trigger jQuery event when field value changes
* UPD: Adding the default Send Email action to the new form only
* FIX: Storing an incorrect value for a calculated field
* FIX: The correct definition of the macro in the value of the Default option

## 3.0.0.2
* FIX: Ignore required option in some cases
* FIX: Dynamic populate repeater field on page load
* FIX: Prevent submit/switch page on press enter in textarea field
* FIX: Validation of empty media field
* FIX: Console errors when radio field inside conditional block
* FIX: Submit failed with reloading page
* FIX: JetBooking compatibility
* FIX: Save invalid number in Calculated field node element
* FIX: Rounding number in Calculated Field

## 3.0.0.1
* FIX: Calculated Field with empty separate thousands option 
* FIX: reCaptcha validation error
* FIX: Error when using `term_title_by_id` macro incorrectly

## 3.0.0
* ADD: Self-reactivity is introduced & refactor frontend scripts
* ADD: Ability to use the Calculated formula in Set Value (**Advanced Value**) logic
* ADD: Support for multiple values to set in **Advanced Value**
* ADD: Ability to remove elements from HTML in the Conditional Block
* ADD: New field validation operators in the Conditional Block
* ADD: New **Render States** logic. Display of fields depending on the state through the Conditional Block
* ADD: Support for Date, Datetime and Time Field in the Conditional Block
* ADD: Support for any type of value in the Calculated Field formula
* ADD: Support for filters in macros for Calculated Field and others
* ADD: New **Advanced Validation** logic. Ability to perform server-side-verification.
* ADD: The possibility of "resetting" the form after sending it using the ajax method
* ADD: Ability to use required fields in Conditional Block, which removes fields from HTML
* ADD: Output the label along with the field names in a single form record
* ADD: `inserted_{$post_type}` to the Form Request
* ADD: Accessibility improvement in multi-step form
* UPD: Support shortcodes in the body of the "Send Email" action
* UPD: Output of unique html ID attribute for each field.
* FIX: Using the repeater value in the body of the "Send Email" action on events after passing through the payment gateway.
* FIX: Repeater field and media field only
* FIX: Custom listing template in Radio / Checkbox Fields & preset
* Tweak: Added dependency on the `jet-plugins` script

## 2.1.11
* ADD: Transaction column for payments
* FIX: Freeze Drag n Drop all widgets in Elementor editor
* FIX: Ignore caching source for global preset

## 2.1.10
* ADD: Support macros for webhook url in Call Webhook action
* Tweak: added php-filter `jet-form-builder/action/webhook/request-url`

## 2.1.9
* UPD: Update Options action (add compat with stored type)
* ADD: Option disable "next button"

## 2.1.8
* ADD: Shortcodes compatibility (label, desc, etc.)
* FIX: Change User email by Update user action
* FIX: Same validation for next step & submit event.
* FIX: Show all ActiveCampaign lists.
* UPD: Preventing disabling next button

## 2.1.7
* ADD: Toggle dev-mode from page Settings
* FIX: Video uploading in media-field
* FIX: Save long referrer by Save Record action 

## 2.1.6
* ADD: The ability to get the queried user through a preset and compatibility with the JetEngine Profile Builder
* ADD: Ability to edit the text of Media Field 'Maximum file size'
* FIX: Most macro filters support multi-value fields in email content
* FIX: Media field & Elementor Pro Popup compatibility
* FIX: Insert Post action throws fatal error when pre-check is false
* FIX: Redirect to inserted product action fail
* FIX: Default fields don't insert into post
* Tweak: Allow redirect to updated post via Redirect to Inserted post action
* Tweak: Save request changes in database on non default events
* Tweak: Decoding request on query from table

## 2.1.5
* ADD: Support custom fields in ActiveCampaign action
* ADD: Support for Insert/Update Product (WooCommerce)
* ADD: Multiple recipients support for Send Email action (props [@stijnvanouplines](https://github.com/stijnvanouplines))
* ADD: Ability to delete payments via admin pages
* FIX: Listing template for checkbox and radio fields
* Tweak: Sanitize fields map in Insert/Update Post & Update User
* Tweak: Allow leave empty mime types option in Media Field

## 2.1.4
* FIX: Action conditions with AND relation - only the last condition has counted
* FIX: Conditional block with set value & without any show/hide logic
* FIX: Calculated Field compatibility

## 2.1.3
* ADD: Multiple Select support
* ADD: JetEngine Map Field block
* UPD: `post_link_by_id` macro support multiple values
* UPD: Generate sub-images for new attachments
* FIX: Pass gateway with query vars
* FIX: Media Field duplicates prefilled files 
* FIX: Inserting images previews with cache plugins
* FIX: Post Thumbnail preset
* FIX: Calculated Field interprets number with leading zeros as number in Octal numeral system
* FIX: Compatibility with Elementor 3.7

## 2.1.2
* UPD: Allow using Term object properties as values for select, radio, checkbox fields
* FIX: Validate action's events in gateways executor
* FIX: Fatal error when media field format does not match the preset
* Tweak: Additional args for filter `jet-form-builder/forms/generators/num-range/start-from`
* Tweak: Description of events for actions in the modal window

## 2.1.1
* ADD: Ordering files in media field
* ADD: Compatibility with Reusable Block
* FIX: Action conditions
* FIX: Support Condition Block inside Repeater Field
* FIX: Update Options action
* FIX: Redirect to Page action on GATEWAY.{TYPE} event
* FIX: Media Field required check in multi-step form
* FIX: Upload zip / pdf files in Media Field
* FIX: Get values list from JetEngine query with user

## 2.1.0
* ADD: CSRF protection
* ADD: Compatibility with **JetEngine Query Builder**
* ADD: Ability to add attachments to emails in **Send Email** action
* ADD: Refactor, improve, update logic of file uploading in **Media Field**
* ADD: New Event logic for Submit Actions
* ADD: Submit Action on/off logic
* ADD: **Form Pages Start** block
* FIX: Numbers range by manual input Generator
* FIX: Fatal error on view **Form Records** list screen if one of the form were deleted
* FIX: Using Macros in the body of the **Send Email** action
* FIX: Required check for **Media field** in multi-step form
* FIX: Required check for **Text Field** with input mask
* FIX: Submit button alignment fullwidth in **JetForm** widget (Elementor)
* FIX: Compatibility with Elementor Popup
* FIX: Better sanitizing terms in the **Insert/Update Post** action 
* Tweak: New Editor blocks category - **Jet Form Elements**

## 2.0.6
* FIX: Condition "In the list" for checkbox field
* FIX: Block controls for Calculated Field & Repeater Field
* Tweak: Addons page banner

## 2.0.5
* FIX: "Go PRO" link appears for all User Roles

## 2.0.4
* FIX: Trigger JS event once, added event `jet-form-builder/after-init`
* FIX: Paginate fields list in single form record
* FIX: Disable reload after registration for forms with ajax submit type
* FIX: Dynamic sing-on on register user
* Tweak: JetStyleManager compatibility
* Tweak: Add Mailchimp response for dev-mode logger

## 2.0.3
* FIX: Recalculate fields before submit
* FIX: An instant redirect on submit type reload
* FIX: Add a placeholder to the Redirect to Page action for static page
* Tweak: add filter `jet-form-builder/preset-sanitize`. Return a boolean value, checking if the preset is available.
* Tweak: add filter `jet-form-builder/table-engine`. Return string value with name of database engine. Ex.: MyISAM
* Minor fixes & improvements for admin pages. 

## 2.0.2
* FIX: Redirect to Page action with URL args

## 2.0.1
* FIX: Rendering form in a shortcode
* Tweak: Empty table notice

## 2.0.0
* ADD: Really hidden fields. Which are not displayed in HTML
* ADD: Form Record functionality. This includes a form action and admin view
* UPD: PayPal Gateway functionality: admin view
* Tweak: fixes and improvements

## 1.5.5
* FIX: Fatal error when executing actions after passing a payment
* FIX: Load preset for Options Page (JetEngine compatibility)

## 1.5.4
* FIX: Correct Updating Post
* FIX: Disabling select placeholder
* FIX: Action Modal editor UI
* FIX: Validation issues

## 1.5.3
* FIX: Saving an inserted_post_id

## 1.5.2
* ADD: Insert/Update Post statuses: `Move to Trash`, `Get from the form field`, `Keep current status`
* ADD: Alignment for the Prev/Next Buttons in JetForm Elementor widget.
* FIX: Using Options Pages, Post Terms in a preset.
* FIX: Update unused user fields.
* FIX: Compatibility with JetEngine 2.11.X
* FIX: Compatibility with Full Site Editor (since Wordpress 5.9)

## 1.5.1
* ADD: Remembering a user when logging in using the "Remember Me" field 
* FIX: Form not submitted if re-captcha not enabled
* FIX: Loading preset
* Tweak: Improving `<!-- JFB_FIELD::name -->` macro usage
* Tweak: Minor fixes

## 1.5.0
* ADD: Transforming fields
* ADD: New source for hidden-field: `Referer URL`
* ADD: php filter `jet-form-builder/editor/hidden-field/config` for hidden-field config
* FIX: Removing tags from existing members in Mailchimp.
* Tweak: Fixes and improvements for better compatibility with PRO addons

## 1.4.3
* ADD: Option "Fields label HTML tag"
* FIX: Correct rendering media field in Elementor editor
* FIX: PHP Warning on load repeater preset
* FIX: Displaying correct links for the plugin
* Tweak: add filter `jet.fb.macro.field.value`

## 1.4.2
* FIX: Guaranteed css output in editors
* FIX: Correct init macros if JetForm not rendered
* FIX: Retrieve current post on doing ajax

## 1.4.1
* FIX: Compatibility with iOS.
* FIX: Execute reCaptcha token on submit form.
* Tweak: Added JS filters `jet.fb.submit.reload.promises` & `jet.fb.submit.ajax.promises`

## 1.4.0
* ADD: Submit Field migrated to **Action Button** with backward compatibility.
* ADD: **Progress Bar** - new block. To display steps in multistep form.
* ADD: Ability to use **Form Break** inside **Conditional Block**, in combination with **Progress Bar** and **Action Button**. 
* ADD: Ability to display options for Radio and Checkbox fields through dynamic templates (only with **JetEngine**).
* ADD: Preset support with Options Pages (only with **JetEngine**).  
* ADD: `<!--JFB_FIELD::field_name-->` macro for displaying values from fields.
* ADD: Support for localization files, see `languages/readme.md` for details.
* ADD: Possibility redirecting to the created post via the Redirect to Pаge action.
* ADD: Support for `%field_name%` macros in custom url in Redirect to Page action.
* ADD: `Condition Operator` for *Action Conditions* (`AND` & `OR`).
* ADD: The ability to compare dates based on Unix timestamps in *Action Conditions*.
* FIX: Ability to update member's Mailchimp tags.
* FIX: UI/UX for Select, Radio & Checkbox fields
* FIX: A calculated field set as hidden takes up space.
* FIX: Enqueueing styles in Elementor editor.
* UPD: Preset logic for the Repeater field.

## 1.3.3
* FIX: Compatibility with add-ons
* FIX: Insert post insteadof Update post

## 1.3.2
* ADD: Getting the child field of the repeater for the "Get values list from JetEngine field options" generator
* ADD: CSS Controls for JetForm Elementor widget for Heading Field
* ADD: Add dynamic for custom url in Redirect to Page action
* FIX: Switch page in Elementor Popup 
* FIX: Parse fields with conditional logic 
* FIX: Parsing media field value
* FIX: Failed process Paypal gateway
* FIX: Output Radio & Checkbox Fields label
* FIX: Enqueue Media Field & Text Field scripts
* FIX: Float attributes in edit Range Field
* FIX: Usage preset in datetime field in timestamp format
* FIX: Duplicate form errors
* FIX: Displaying a hidden calculating field only through a hidden field
* FIX: Dynamic preset when value is missing
* Tweak: UI/UX Select, Radio, Checkbox fields 
* Tweak: Added a placeholder for form block/widget attributes

## 1.3.1
* ADD: Auto scrolling for multi-step form. 
* ADD: Computed fields from actions (Register User, Insert Post) functionality  
* ADD: Post Author to Insert/Update Post action
* FIX: Error when email field not required && empty
* FIX: Auto-complete label in Form Break field & improve package
* FIX: Execution of the form via GET parameters and with a dummy refer
* FIX: Elementor's popup compatibility
* Tweak: Optimized preset && render field
* Tweak: php filter: `jet-form-builder/frontend-settings`. 
Through it you can change the size of the indent for auto scrolling
* Tweak: php filter: `jet-form-builder/file-upload/custom-html`
Through it, you can add a custom html to the preview of the loaded image 
through the Media Field

## 1.3.0
* ADD: UI/UX improvements
* ADD: Color Picker Field
* ADD: Form Patterns **JetForms**
* ADD: Allow creating new users by existing users (in Register User action)
* ADD: Numbers range by manual input (generator function)
* ADD: Changing the separator for a fractional number in a calculate field
* ADD: Styling a Conditional Block
* FIX: Range Field UI in editor
* FIX: reCaptcha Uncaught SyntaxError unexpected end of input

## 1.2.7
* FIX: Initialize input mask for new repeater items
* FIX: Preset Hidden Field
* FIX: Upload attachments
* FIX: Hidden-field preset
* FIX: Sanitize wysiwyg
* UPD: Disable edit action button, if callback undefined
* Tweak: Editor UI
* Tweak: Media Field UI settings

## 1.2.6
* UPD: Changed the logic for processing required fields inside the Conditional Block
* ADD: Switch page on change Radio Field
* ADD: Styles in gutenberg for Datetime Field
* FIX: Execution of a query for ActiveCampaign with global settings
* FIX: Removed escaping slashes in send email action
* FIX: Adding class to passed page
* FIX: Preset post-terms in checkbox
* FIX: Loss of focus when editing a text field in the global preset

## 1.2.5
* FIX: Console errors when trying to submit a form with the required checkbox || radio, inside a conditional block
* FIX: Saving `max_size` attribute for media-field in float
* FIX: UI compatibility with Gutenberg Editor in WP 5.8  
* Tweak: added `jet-form-builder/preset/source-types` php filter 

## 1.2.4
* ADD: JetEngine Glossaries compatible
* ADD: New styling sections for the JetForm widget in Elementor
* ADD: `jet-form-builder/render-choice/query-options/posts` & `jet-form-builder/render-choice/label/posts` php hooks and the same for terms, instead of 'posts' - 'terms'
* FIX: Send submit status with messages from action settings
* FIX: Missing JetStyleManager wrapper on blocks
* FIX: Price formatting for PayPal gateway request
* FIX: Alignment calculated field
* FIX: UI errors in editor
* Tweak: Change Repeater component header icons

## 1.2.3
* ADD: Go Pro banner & link
* FIX: Redirect with GET args
* FIX: Get calculated value from post meta
* Tweak: Localize actions data on `jet-form-builder/editor-package/before`
* Tweak: Add class `field-type-{id}` for each field
* Tweak: Add `Gateway_Manager::has_gateway`
* Tweak: Add php filter `jet-form-builder/field-data/calculated-field`
* Tweak: Add js filter `jet.fb.calculated.field.available.fields`

## 1.2.2
* ADD: Addon management via Dashboard
* ADD: Better parse macros in the Send Email action
* ADD: Filter jet-form-builder/fields/wysiwyg-field/config for wysiwyg-field
* UPD: Parse macros in From Name & From Address fields in Send Email action
* FIX: Dynamic preset with empty result value
* FIX: CSS compatibility gutenberg-addons
* FIX: Compatibility with php 7.0
* FIX: Hiding a calculated field
* FIX: Duplicate calc formula in each repeater
* FIX: Displaying redirect action in gateways editor
* FIX: Duplicating form
* FIX: Remove mask from empty input on submit the Form

## 1.2.1
* FIX: Blocks initialization.

## 1.2.0
* ADD: Examples (preview) for Jet Form Fields in Gutenberg
* ADD: Global settings for actions, additional sidebar plugins, for example `reCAPTCHA v3`
* ADD: The ability to use global settings in `Mailchimp`, `GetResponse` & `ActiveCampaign` actions
* ADD: PHP action `jet-form-builder/render/{field_type}` to control the rendering of the field
* ADD: JS hook `jet.fb.register.fields.controls` for registering & manage block-fields controls
* ADD: JS hook `jet.fb.register.plugins` for registering custom sidebar-plugins
* ADD: JS hook `jet.fb.register.fields` for registering custom form fields
* Updated: `apiVersion:2` of blocks registration in Gutenberg

## 1.1.7
* ADD: RTL compatibility to Wysiwyg Field
* ADD: Compatibility with JetStyleManager 1.2.0 and older versions
* ADD: Styles for Form Progress circle
* FIX: Send email without correct headers, added initial padding-bottom for progress items
* FIX: Render script jet-form-builder-inputmask only when rendering Text Field
* FIX: Plain default value in repeater fields
* FIX: Wysiwyg field is RTL compliant
* FIX: Positioning of progress item label
* FIX: Rendering last form-break field in form

## 1.1.6
* ADD: `Label of progress` for Form Break Field
* FIX: Errors when editing actions such as MailChimp, GetResponse

## 1.1.5
* FIX: Trying to access array offset on value of type null on php 7.4
* FIX: Rendering repeater attributes

## 1.1.4
* FIX: CSS Compatibility with Twenty Twenty-One theme
* FIX: Parsing form fields from content when processing a request 

## 1.1.3
* FIX: Render Form Break button if there is no name for it, entering settings for Number Field with floating-point
* FIX: Render CSS classes in fields
* FIX: Initializing controls for widget Form in JetEngine
* FIX: Minor fixes in the editor

## 1.1.2
* FIX: Duplicating a plain preset in fields
* FIX: Applying macros to a message after paying with PayPal
* FIX: Retrieving form data after Paypal payment
* FIX: Styling Form-block with JetStyleManager
* FIX: Compatibility with Twenty Twenty-One theme
* FIX: Compatibility with JetEngine on initializing the conditions
* FIX: Saving character limitation in Text Field settings

## 1.1.1
* FIX: Wordpress 5.7 compatibility
* Improvement: Triggering conditional logic when typing in a text and textarea fields
 
## 1.1.0
* ADD: Gutenberg blocks: **Conditional Block**, **Datetime Field** 
* ADD: Elementor widget: **JetForm**
* ADD: Form Progress with multiple pages
* ADD: Post submit actions Conditions
* ADD: New preset sources for post-type: Post Date, Post Date GMT
* ADD: Integration with Paypal
* ADD: Compatibility with **JetEngine** widget Form
* ADD: Compatibility with **JetFormBuilder Converter**
* Improvement: The form builder and the form block full-width in the editor


## 1.0.4
* ADD: displaying a shortcode for each form

## 1.0.3
* FIX: creating a user with administrator role.

## 1.0.2
* Enhancement: added **`jet_fb_form`** shortcode. Example: 

`[jet_fb_form form_id="4338" submit_type="ajax" required_mark="***" fields_layout="row"]`

## 1.0.1
* FIX: render wysiwyg on front-end

## 1.0.0
* Initial release
