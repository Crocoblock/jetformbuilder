# JetEngine Macros for JetFormBuilder Auto-Update

## Auto-Update Field Value Macro

This macro allows JetEngine Query Builder to access form field values during cascading field updates (auto-update feature).

### Usage in JetEngine Query Builder

When you enable **Auto-Update** on a field (Select, Checkbox, Radio) with the "Get values list from JetEngine Query" generator, you can use this macro in your JetEngine Query to filter results based on the value of the listened field.

### Example Scenario

**Scenario**: You have two select fields:
1. **Category** field (field name: `product_category`)
2. **Product** field (field name: `product_name`) - auto-updates based on Category

**Goal**: Show only products from the selected category

#### Step 1: Configure Product Field

In the Gutenberg editor:
1. Add a Select field with field name `product_name`
2. Set **Field Options From** to "Generate Dynamically"
3. Choose **Generator Function**: "Get values list from JetEngine Query"
4. Select your products query (e.g., "All Products")
5. Enable **Auto-Update**
6. Set **Listen to field**: `product_category`

#### Step 2: Configure JetEngine Query

In JetEngine → Query Builder:
1. Create or edit a query (e.g., "All Products")
2. Add a **Meta Query** or **Tax Query** to filter by category
3. In the field value, use the dynamic tag: **JFB Auto-Update - Field Value**
4. Set the **field_name** parameter to: `product_category`

**Example Meta Query Configuration:**
```
Field: Category
Operator: =
Value: [Dynamic Tag] JFB Auto-Update - Field Value (field_name: product_category)
```

**Example Tax Query Configuration:**
```
Taxonomy: product_cat
Terms: [Dynamic Tag] JFB Auto-Update - Field Value (field_name: product_category)
Operator: IN
```

### How It Works

1. User selects a value in the `product_category` field
2. JetFormBuilder auto-update watches for the change
3. REST request sent to `/wp-json/jet-form-builder/v1/generator-update` with context:
   ```json
   {
     "context": {
       "product_category": "5"
     }
   }
   ```
4. Value stored in `$_REQUEST['jfb_update_related_product_category']`
5. JetEngine Query executes with macro reading the value
6. Filtered options returned and product field updated

### Macro Technical Details

**Macro Tag**: `jfb_auto_update_field_value`

**Macro Name**: "JFB Auto-Update - Field Value"

**Parameters**:
- `field_name` (required): Name of the form field to get value from

**Data Sources** (in priority order):
1. `$_REQUEST['jfb_update_related_' . field_name]` - Set by Generator_Update_Endpoint
2. `$GLOBALS['jfb_update_related_' . field_name]` - Set by Get_From_Je_Query::generate_with_context()
3. `jet_fb_context()->resolve_request()[field_name]` - Fallback to form submission context

### Advanced Example: Multi-Level Cascading

You can create chains of dependent fields:

**Country → State → City**

1. **Country** field (field name: `country`)
   - Generator: JetEngine Query "All Countries"
   - No auto-update

2. **State** field (field name: `state`)
   - Generator: JetEngine Query "States by Country"
   - Auto-update: Listen to `country`
   - Query uses macro: `JFB Auto-Update - Field Value` (field_name: `country`)

3. **City** field (field name: `city`)
   - Generator: JetEngine Query "Cities by State"
   - Auto-update: Listen to `state`
   - Query uses macro: `JFB Auto-Update - Field Value` (field_name: `state`)

### Shorthand Format

If you prefer shorthand in queries, you can also use:
```
%jfb_auto_update_field_value|field_name=product_category%
```

### Debugging

To verify values are being passed correctly, check:

1. **Browser Console**: Look for successful REST responses
2. **PHP Error Log**: Add to query:
   ```php
   error_log('Category value: ' . $_REQUEST['jfb_update_related_product_category']);
   ```
3. **Network Tab**: Inspect the payload sent to `/wp-json/jet-form-builder/v1/generator-update`

### Compatibility

- **JetFormBuilder**: 3.4.0+
- **JetEngine**: 3.0.0+ (requires Query Builder)
- **WordPress**: 6.0+

### Migration from Update Field Plugin

If migrating from `jet-form-builder-update-field` plugin:

**Old Macro**: "JFB Update Field - Form Field Value" (`jfbuf_form_field_value`)
**New Macro**: "JFB Auto-Update - Field Value" (`jfb_auto_update_field_value`)

Both macros work identically, but the new one is optimized for the built-in auto-update feature and doesn't require the separate plugin.

### Support

For questions and issues:
- GitHub: https://github.com/Crocoblock/jetformbuilder
- Documentation: https://jetformbuilder.com/features/cascading-fields/
