import * as checkMark from './block';
import { registerBlockType } from '@wordpress/blocks';

registerBlockType( checkMark.name, checkMark.settings );