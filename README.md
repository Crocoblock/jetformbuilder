# About

Advanced form builder plugin for Gutenberg. Create forms from the ground up, customize the existing ones, and style them up – all in one editor.

# ChangeLog

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
