# Generator System Architecture

This document describes the architecture of the JetFormBuilder generator system, comparing the legacy and new implementations.

## Overview

Generators dynamically populate options for Select, Checkbox, and Radio fields based on various data sources (JetEngine Queries, database fields, number ranges, etc.).

---

## 1. Data Storage Comparison

### Editor (JavaScript) - Saving Data

| Aspect | **Legacy** | **New System** |
|--------|------------|----------------|
| UI Component | `FromGeneratorsFields.js` | `GeneratorSettings.js` → `GeneratorArgsControls` |
| Field Rendering | Single `TextControl` for manual pipe-string input | `SchemaBasedControls` → auto-generated from schema |
| Save Method | `setAttributes({ generator_field: "26\|ID\|post_title" })` | `setAttributes({ generator_args: { query_id: "26", value_field: "ID", label_field: "post_title" } })` |
| Attribute in block.json | `generator_field: string` | `generator_args: object` |
| Data Format | Pipe-delimited string | Structured object |

### Frontend (PHP) - Reading Data

| Aspect | **Legacy** | **New System** |
|--------|------------|----------------|
| Generator Class | `Get_From_Je_Query extends Base` | `Get_From_Je_Query extends Base_V2` |
| Entry Point | `Base::get_values($args)` | `Base_V2::get_values($args)` |
| Parsing | `incoming_args()` → `generator_field` | Priority chain (see below) |
| generate() Call | `generate(['generator_field' => "26\|ID\|..."])` | `generate(['query_id' => '26', ...])` |
| Inside generate() | `explode('\|', $args['generator_field'])` | Direct access `$args['query_id']` |

---

## 2. PHP Call Chain

### Legacy System

```
Block Render
    ↓
Form_Manager::get_options_generators()
    ↓
Get_From_Je_Query (extends Base)
    ↓
Base::get_values($block_attrs)
    │
    ├── incoming_args() → ['generator_field' => callback]
    │
    ├── foreach: $fields['generator_field'] = $block_attrs['generator_field']
    │                                         // "26|ID|post_title|calc"
    ↓
generate($fields)
    │
    ├── $field = $args['generator_field']  // "26|ID|post_title|calc"
    ├── $args = explode('|', $field)       // ['26', 'ID', 'post_title', 'calc']
    ├── $query_id = $args[0]               // '26'
    ↓
Query_Manager::get_query_by_id($query_id)
    ↓
return $result
```

### New System

```
Block Render
    ↓
Form_Manager::get_options_generators()
    ↓
Get_From_Je_Query (extends Base_V2)
    ↓
Base_V2::get_values($block_attrs)
    │
    ├── PRIORITY 1: generator_args (object)
    │   if (!empty($args['generator_args'])) {
    │       $settings = parse_generator_args($args['generator_args'])
    │       // { query_id: '26', value_field: 'ID', label_field: 'post_title' }
    │       if (has_meaningful_values($settings)) → generate($settings)
    │   }
    │
    ├── PRIORITY 2: prefixed attributes (gen_<id>_<key>)
    │   $settings = parse_settings($args)
    │   // Looks for: gen_get_from_query_query_id, gen_get_from_query_value_field...
    │   if (has_meaningful_values($settings)) → generate($settings)
    │
    ├── PRIORITY 3: legacy generator_field (string)
    │   if (!empty($args['generator_field'])) {
    │       generate($args['generator_field'])  // "26|ID|post_title"
    │   }
    │
    ↓
generate($args)  // Accepts array OR string
    │
    ├── if (is_string($args)):
    │       explode('|', $args)  // Legacy parsing
    │
    ├── elseif (is_array($args)):
    │       $query_id = $args['query_id']      // Direct access
    │       $value_field = $args['value_field']
    │       // + fallback to generator_field if query_id is empty
    │
    ↓
Query_Manager::get_query_by_id($query_id)
    ↓
return $result
```

---

## 3. Schema System

| Component | Description |
|-----------|-------------|
| `Base_V2::get_settings_schema()` | Abstract method - each generator defines its own schema |
| `Registry::get_schemas_for_js()` | Collects all schemas for JS transmission |
| `module.php` → `generator_schemas` | Localizes schemas to `window.JetFormOptionFieldData` |
| `SchemaBasedControls` | Automatically renders UI controls from schema |

### Schema Definition Example

```php
// In Get_From_Je_Query::get_settings_schema()
return array(
    'query_id' => array(
        'type'     => 'string',
        'default'  => '',
        'label'    => __( 'Query ID', 'jet-form-builder' ),
        'control'  => 'select',
        'options'  => $this->get_queries_for_select(),
        'required' => true,
        'help'     => __( 'Select a JetEngine Query to fetch options from.', 'jet-form-builder' ),
    ),
    'value_field' => array(
        'type'        => 'string',
        'default'     => 'ID',
        'label'       => __( 'Value Field', 'jet-form-builder' ),
        'control'     => 'text',
        'placeholder' => 'ID',
    ),
    // ...
);
```

---

## 4. Backward Compatibility

| Scenario | How It's Handled |
|----------|------------------|
| Old form with `generator_field: "26\|ID\|post_title"` | `Base_V2::get_values()` → Priority 3 → `generate(string)` |
| New form with `generator_args: {query_id: "26", ...}` | `Base_V2::get_values()` → Priority 1 → `generate(array)` |
| Migration when opening in editor | `GeneratorArgsControls` → `useEffect` → parses `generator_field` into `generator_args` |

---

## 5. Data Flow Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                         EDITOR (JS)                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  GeneratorSettings                                              │
│       ↓                                                         │
│  GeneratorArgsControls                                          │
│       ↓                                                         │
│  SchemaBasedControls (reads schema from PHP)                    │
│       ↓                                                         │
│  setAttributes({ generator_args: {...} })                       │
│       ↓                                                         │
│  WordPress saves to post_content (JSON in HTML comment)         │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
                              ↓
                         [Database]
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│                        FRONTEND (PHP)                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Block Render → parse_blocks() → $block['attrs']                │
│       ↓                                                         │
│  Generator Registry → get($generator_id)                        │
│       ↓                                                         │
│  Get_From_Je_Query (extends Base_V2)                            │
│       ↓                                                         │
│  Base_V2::get_values($attrs)                                    │
│       ↓                                                         │
│  ┌─────────────────────────────────────┐                        │
│  │ Priority Chain:                     │                        │
│  │ 1. generator_args → parse → array   │                        │
│  │ 2. gen_<id>_* attrs → parse → array │                        │
│  │ 3. generator_field → string         │                        │
│  └─────────────────────────────────────┘                        │
│       ↓                                                         │
│  generate($settings)                                            │
│       ↓                                                         │
│  Query_Manager → get_items() → options[]                        │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## 6. File Structure

### Core Files

```
includes/generators/
├── base.php              # Legacy base class
├── base-v2.php           # Enhanced base with schema support
├── registry.php          # Centralized generator registry
└── legacy-parser.php     # Legacy format parser (optional)

modules/option-field/
├── module.php            # Localizes generator_schemas to JS
└── assets/src/editor/generators/
    ├── index.js              # Module exports
    ├── slot-fill.js          # Slot/Fill definitions
    ├── registry.js           # JS controls registry
    ├── schema-renderer.js    # Auto-render controls from schema
    ├── GeneratorSettings.js  # Main settings component
    └── legacy-controls.js    # Backward compatibility

compatibility/jet-engine/generators/
└── get-from-je-query.php # JetEngine Query generator (extends Base_V2)
```

### Block Attributes (block.json)

```json
{
  "generator_function": {
    "type": "string",
    "default": ""
  },
  "generator_field": {
    "type": "string",
    "default": ""
  },
  "generator_args": {
    "type": "object",
    "default": {}
  }
}
```

---

## 7. Creating a New Generator

### Step 1: PHP Class

```php
namespace JFB_Compatibility\Your_Plugin\Generators;

use Jet_Form_Builder\Generators\Base_V2;

class Your_Generator extends Base_V2 {

    public function get_id() {
        return 'your_generator_id';
    }

    public function get_name() {
        return __( 'Your Generator Name', 'your-textdomain' );
    }

    public function get_settings_schema(): array {
        return array(
            'setting_1' => array(
                'type'    => 'string',
                'default' => '',
                'label'   => __( 'Setting 1', 'your-textdomain' ),
                'control' => 'text',
            ),
            'setting_2' => array(
                'type'    => 'string',
                'default' => '',
                'label'   => __( 'Setting 2', 'your-textdomain' ),
                'control' => 'select',
                'options' => array(
                    array( 'value' => 'opt1', 'label' => 'Option 1' ),
                    array( 'value' => 'opt2', 'label' => 'Option 2' ),
                ),
            ),
        );
    }

    public function generate( $args ) {
        // Handle both array and legacy string formats
        if ( is_string( $args ) ) {
            // Parse legacy format if needed
        }

        $setting_1 = $args['setting_1'] ?? '';
        $setting_2 = $args['setting_2'] ?? '';

        // Generate and return options array
        return array(
            array( 'value' => '1', 'label' => 'Option 1' ),
            array( 'value' => '2', 'label' => 'Option 2' ),
        );
    }

    public function can_generate() {
        return true; // or check for dependencies
    }
}
```

### Step 2: Register Generator

```php
add_filter( 'jet-form-builder/forms/options-generators', function( $generators ) {
    $generators[] = new Your_Generator();
    return $generators;
} );
```

The schema will be automatically:
1. Exported to JS via `generator_schemas`
2. Rendered as UI controls by `SchemaBasedControls`
3. Saved to `generator_args` attribute
4. Read by `Base_V2::get_values()` on frontend

---

## 8. Supported Control Types

| Control Type | PHP Schema | Description |
|--------------|------------|-------------|
| `text` | `'control' => 'text'` | Text input |
| `number` | `'control' => 'number'` | Number input with min/max/step |
| `select` | `'control' => 'select'` | Dropdown with options array |
| `toggle` | `'control' => 'toggle'` | Boolean toggle switch |
| `textarea` | `'control' => 'textarea'` | Multi-line text input |

### Number Control Options

```php
'my_number' => array(
    'type'    => 'number',
    'default' => 1,
    'label'   => __( 'My Number', 'textdomain' ),
    'control' => 'number',
    'min'     => 0,
    'max'     => 100,
    'step'    => 0.5,
),
```

### Select Control Options

```php
'my_select' => array(
    'type'    => 'string',
    'default' => '',
    'label'   => __( 'My Select', 'textdomain' ),
    'control' => 'select',
    'options' => array(
        array( 'value' => '', 'label' => '-- Select --' ),
        array( 'value' => 'opt1', 'label' => 'Option 1' ),
        array( 'value' => 'opt2', 'label' => 'Option 2' ),
    ),
),
```
