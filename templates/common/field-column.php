<?php
/**
 * Column-layout field template
 *
 * @var $template
 * @var $label
 * @var $desc
 * @var Base $this
 */

use Jet_Form_Builder\Blocks\Render\Base;

//phpcs:disable WordPress.Security.EscapeOutput.OutputNotEscaped

/*
 * We return the prepared field template.
 * Each of the listed variables is validated in separate files.
 *
 * $label    - './field-label.php'
 * $desc     - './field-description.php'
 * $template - '../fields/{$field_type}.php' ( takes place at the level of a separate field template )
 */
echo $label;
echo $template;
echo $desc;
//phpcs:enable WordPress.Security.EscapeOutput.OutputNotEscaped
