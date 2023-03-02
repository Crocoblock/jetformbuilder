<?php
/**
 * @var Media_Field_Render $this
 * @var array $file
 */

use Jet_Form_Builder\Blocks\Render\Media_Field_Render;
use Jet_Form_Builder\Classes\Tools;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

?>
<input class="jet-form-builder-file-upload__value"
       type="hidden"
       name="<?php echo esc_attr( $this->block_type->get_field_name() ); ?>"
       value="<?php echo esc_attr( Tools::encode_json( $file ) ); ?>"
/>