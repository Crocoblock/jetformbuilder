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
echo $label;
echo $template;
echo $desc;
//phpcs:enable WordPress.Security.EscapeOutput.OutputNotEscaped