<?php

namespace Jet_Form_Builder\Classes\Value_Normalizers;

// If this file is called directly, abort.
if (! defined('WPINC')) {
    die;
}

class Single_Value_As_Array
{

    public static function prepare_flags($flags): array
    {
        return is_array($flags) ? $flags : array();
    }

    public static function is_enabled(string $field_name, array $flags): bool
    {
        return ! empty($flags[$field_name]);
    }

    public static function maybe_wrap($value, string $field_name, array $flags)
    {
        if (! self::is_enabled($field_name, $flags)) {
            return $value;
        }

        if (is_array($value)) {
            return $value;
        }

        return array($value);
    }
}
