<?php

const WPINC = 'wp-includes';

const JET_FORM_BUILDER_VERSION = '3.1.0.9';

const JET_FORM_BUILDER_PATH        = __DIR__ . '../';
const JET_FORM_BUILDER__FILE__     = JET_FORM_BUILDER_PATH . 'jet-form-builder.php';
const JET_FORM_BUILDER_SITE        = 'https://jetformbuilder.com';
const JET_FORM_BUILDER_PLUGIN_BASE = 'jetformbuilder/jet-form-builder.php';
const JET_FORM_BUILDER_URL         = 'file://';

require_once JET_FORM_BUILDER_PATH . 'includes/functions.php';
require_once JET_FORM_BUILDER_PATH . 'includes/plugin.php';

jet_form_builder()->init_components();