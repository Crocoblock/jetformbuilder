<?php

namespace JFB_Modules\Gateways;

use Jet_Form_Builder\Exceptions\Gateway_Exception;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Trusted_Price_Resolver_Expression_Parser {

	/**
	 * @var string
	 */
	private $expression;

	/**
	 * @var int
	 */
	private $length;

	/**
	 * @var int
	 */
	private $position = 0;

	public function __construct( string $expression ) {
		$this->expression = preg_replace( '/\s+/', '', $expression );
		$this->length     = strlen( $this->expression );
	}

	/**
	 * @throws Gateway_Exception
	 */
	public function parse(): float {
		if ( '' === $this->expression ) {
			throw new Gateway_Exception( 'Calculated price expression is empty.' );
		}

		$tree = $this->parse_conditional();

		if ( $this->position < $this->length ) {
			throw new Gateway_Exception( 'Calculated price expression contains invalid syntax.' );
		}

		$result = $this->evaluate_node( $tree );

		if ( ! is_finite( $result ) ) {
			throw new Gateway_Exception( 'Calculated price expression produced a non-finite value.' );
		}

		return $result;
	}

	/**
	 * @throws Gateway_Exception
	 */
	private function parse_conditional(): array {
		$condition = $this->parse_logical_or();

		if ( ! $this->match( '?' ) ) {
			return $condition;
		}

		$consequent = $this->parse_conditional();

		if ( ! $this->match( ':' ) ) {
			throw new Gateway_Exception( 'Calculated price expression contains an invalid conditional.' );
		}

		return array( 'conditional', $condition, $consequent, $this->parse_conditional() );
	}

	/**
	 * @throws Gateway_Exception
	 */
	private function parse_logical_or(): array {
		$node = $this->parse_logical_and();

		while ( $this->match( '||' ) ) {
			$node = array( 'binary', '||', $node, $this->parse_logical_and() );
		}

		return $node;
	}

	/**
	 * @throws Gateway_Exception
	 */
	private function parse_logical_and(): array {
		$node = $this->parse_bitwise_xor();

		while ( $this->match( '&&' ) ) {
			$node = array( 'binary', '&&', $node, $this->parse_bitwise_xor() );
		}

		return $node;
	}

	/**
	 * Match JavaScript operator precedence: equality binds before bitwise XOR,
	 * while logical AND binds after it.
	 *
	 * @throws Gateway_Exception
	 */
	private function parse_bitwise_xor(): array {
		$node = $this->parse_equality();

		while ( $this->match( '^' ) ) {
			$node = array( 'binary', '^', $node, $this->parse_equality() );
		}

		return $node;
	}

	/**
	 * @throws Gateway_Exception
	 */
	private function parse_equality(): array {
		$node = $this->parse_comparison();

		while ( true ) {
			$operator = $this->match_any( array( '===', '!==', '==', '!=' ) );

			if ( false === $operator ) {
				return $node;
			}

			$node = array( 'binary', $operator, $node, $this->parse_comparison() );
		}
	}

	/**
	 * @throws Gateway_Exception
	 */
	private function parse_comparison(): array {
		$node = $this->parse_expression();

		while ( true ) {
			$operator = $this->match_any( array( '<=', '>=', '<', '>' ) );

			if ( false === $operator ) {
				return $node;
			}

			$node = array( 'binary', $operator, $node, $this->parse_expression() );
		}
	}

	/**
	 * @throws Gateway_Exception
	 */
	private function parse_expression(): array {
		$node = $this->parse_term();

		while ( true ) {
			$operator = $this->match_any( array( '+', '-' ) );

			if ( false === $operator ) {
				return $node;
			}

			$node = array( 'binary', $operator, $node, $this->parse_term() );
		}
	}

	/**
	 * @throws Gateway_Exception
	 */
	private function parse_term(): array {
		$node = $this->parse_power();

		while ( true ) {
			if ( '*' === $this->peek() && '*' === $this->peek( 1 ) ) {
				return $node;
			}

			$operator = $this->match_any( array( '*', '/', '%' ) );

			if ( false === $operator ) {
				return $node;
			}

			$node = array( 'binary', $operator, $node, $this->parse_power() );
		}
	}

	/**
	 * @throws Gateway_Exception
	 */
	private function parse_power(): array {
		$node = $this->parse_factor();

		if ( $this->match( '**' ) ) {
			$node = array( 'binary', '**', $node, $this->parse_power() );
		}

		return $node;
	}

	/**
	 * @throws Gateway_Exception
	 */
	private function parse_factor(): array {
		$operator = $this->peek();

		if ( '+' === $operator || '-' === $operator || '!' === $operator ) {
			++$this->position;

			return array( 'unary', $operator, $this->parse_factor() );
		}

		if ( '(' === $operator ) {
			++$this->position;
			$node = $this->parse_conditional();

			if ( ')' !== $this->peek() ) {
				throw new Gateway_Exception( 'Calculated price expression contains unbalanced parentheses.' );
			}

			++$this->position;

			return $node;
		}

		if ( false !== $operator && preg_match( '/[a-zA-Z_]/', $operator ) ) {
			return $this->parse_identifier();
		}

		return $this->parse_number();
	}

	/**
	 * @throws Gateway_Exception
	 */
	private function parse_number(): array {
		$remaining = substr( $this->expression, $this->position );

		if ( ! preg_match( '/^(?:(?:[0-9]+(?:\.[0-9]*)?)|(?:\.[0-9]+))(?:[eE][+-]?[0-9]+)?/', $remaining, $matches ) ) {
			throw new Gateway_Exception( 'Calculated price expression contains an invalid token.' );
		}

		$number          = $matches[0];
		$this->position += strlen( $number );

		if ( ! is_numeric( $number ) ) {
			throw new Gateway_Exception( 'Calculated price expression contains an invalid number.' );
		}

		return array( 'number', (float) $number );
	}

	/**
	 * @throws Gateway_Exception
	 */
	private function parse_identifier(): array {
		$remaining = substr( $this->expression, $this->position );

		if ( ! preg_match( '/^[a-zA-Z_][a-zA-Z0-9_]*(?:\.[a-zA-Z_][a-zA-Z0-9_]*)?/', $remaining, $matches ) ) {
			throw new Gateway_Exception( 'Calculated price expression contains an invalid identifier.' );
		}

		$name            = $matches[0];
		$this->position += strlen( $name );

		if ( ! $this->match( '(' ) ) {
			return array( 'constant', $name );
		}

		$arguments = array();

		if ( ! $this->match( ')' ) ) {
			do {
				$arguments[] = $this->parse_conditional();
			} while ( $this->match( ',' ) );

			if ( ! $this->match( ')' ) ) {
				throw new Gateway_Exception( 'Calculated price expression contains an invalid function call.' );
			}
		}

		return array( 'call', $name, $arguments );
	}

	/**
	 * @throws Gateway_Exception
	 */
	private function evaluate_node( array $node ): float {
		switch ( $node[0] ) {
			case 'number':
				return $node[1];

			case 'constant':
				return $this->evaluate_constant( $node[1] );

			case 'call':
				return $this->evaluate_math_call( $node[1], $node[2] );

			case 'unary':
				$value = $this->evaluate_node( $node[2] );

				if ( '!' === $node[1] ) {
					return $this->is_truthy( $value ) ? 0.0 : 1.0;
				}

				return '-' === $node[1] ? -1 * $value : $value;

			case 'conditional':
				return $this->is_truthy( $this->evaluate_node( $node[1] ) )
					? $this->evaluate_node( $node[2] )
					: $this->evaluate_node( $node[3] );

			case 'binary':
				return $this->evaluate_binary( $node[1], $node[2], $node[3] );
		}

		throw new Gateway_Exception( 'Calculated price expression contains an invalid node.' );
	}

	/**
	 * @throws Gateway_Exception
	 */
	private function evaluate_binary( string $operator, array $left_node, array $right_node ): float {
		$left = $this->evaluate_node( $left_node );

		if ( '&&' === $operator ) {
			return $this->is_truthy( $left ) ? $this->evaluate_node( $right_node ) : $left;
		}

		if ( '||' === $operator ) {
			return $this->is_truthy( $left ) ? $left : $this->evaluate_node( $right_node );
		}

		$right = $this->evaluate_node( $right_node );

		switch ( $operator ) {
			case '+':
				return $left + $right;

			case '-':
				return $left - $right;

			case '*':
				return $left * $right;

			case '/':
				if ( 0.0 === $right ) {
					throw new Gateway_Exception( 'Calculated price expression attempted division by zero.' );
				}

				return $left / $right;

			case '%':
				if ( 0.0 === $right ) {
					throw new Gateway_Exception( 'Calculated price expression attempted modulo by zero.' );
				}

				return fmod( $left, $right );

			case '**':
				return $left ** $right;

			case '^':
				return (float) ( $this->to_int32( $left ) ^ $this->to_int32( $right ) );

			case '<':
				return $left < $right ? 1.0 : 0.0;

			case '<=':
				return $left <= $right ? 1.0 : 0.0;

			case '>':
				return $left > $right ? 1.0 : 0.0;

			case '>=':
				return $left >= $right ? 1.0 : 0.0;

			case '==':
			case '===':
				return $left === $right ? 1.0 : 0.0;

			case '!=':
			case '!==':
				return $left !== $right ? 1.0 : 0.0;
		}

		throw new Gateway_Exception( 'Calculated price expression contains an unsupported operator.' );
	}

	/**
	 * Reproduce JavaScript ToInt32 conversion used by bitwise operators.
	 */
	private function to_int32( float $value ): int {
		if ( ! is_finite( $value ) || 0.0 === $value ) {
			return 0;
		}

		$integer = $value < 0 ? ceil( $value ) : floor( $value );
		$uint32  = fmod( $integer, 4294967296.0 );

		if ( $uint32 < 0 ) {
			$uint32 += 4294967296.0;
		}

		if ( $uint32 >= 2147483648.0 ) {
			$uint32 -= 4294967296.0;
		}

		return (int) $uint32;
	}

	/**
	 * @throws Gateway_Exception
	 */
	private function evaluate_constant( string $name ): float {
		$constants = array(
			'true'        => 1.0,
			'false'       => 0.0,
			'Math.E'      => M_E,
			'Math.LN2'    => M_LN2,
			'Math.LN10'   => M_LN10,
			'Math.LOG2E'  => M_LOG2E,
			'Math.LOG10E' => M_LOG10E,
			'Math.PI'     => M_PI,
			'Math.SQRT1_2' => M_SQRT1_2,
			'Math.SQRT2'  => M_SQRT2,
		);

		if ( ! array_key_exists( $name, $constants ) ) {
			throw new Gateway_Exception( 'Calculated price expression contains an unsupported identifier.' );
		}

		return (float) $constants[ $name ];
	}

	/**
	 * @throws Gateway_Exception
	 */
	private function evaluate_math_call( string $name, array $argument_nodes ): float {
		$arguments = array_map(
			function ( $node ) {
				return $this->evaluate_node( $node );
			},
			$argument_nodes
		);

		switch ( $name ) {
			case 'Math.abs':
				$this->assert_argument_count( $name, $arguments, 1 );
				$result = abs( $arguments[0] );
				break;

			case 'Math.ceil':
				$this->assert_argument_count( $name, $arguments, 1 );
				$result = ceil( $arguments[0] );
				break;

			case 'Math.floor':
				$this->assert_argument_count( $name, $arguments, 1 );
				$result = floor( $arguments[0] );
				break;

			case 'Math.round':
				$this->assert_argument_count( $name, $arguments, 1 );
				$result = $this->js_math_round( $arguments[0] );
				break;

			case 'Math.trunc':
				$this->assert_argument_count( $name, $arguments, 1 );
				$result = $arguments[0] < 0 ? ceil( $arguments[0] ) : floor( $arguments[0] );
				break;

			case 'Math.sign':
				$this->assert_argument_count( $name, $arguments, 1 );
				$result = $arguments[0] <=> 0;
				break;

			case 'Math.sqrt':
				$this->assert_argument_count( $name, $arguments, 1 );
				$result = sqrt( $arguments[0] );
				break;

			case 'Math.pow':
				$this->assert_argument_count( $name, $arguments, 2 );
				$result = $arguments[0] ** $arguments[1];
				break;

			case 'Math.min':
				$this->assert_argument_count( $name, $arguments, 1, PHP_INT_MAX );
				$result = min( $arguments );
				break;

			case 'Math.max':
				$this->assert_argument_count( $name, $arguments, 1, PHP_INT_MAX );
				$result = max( $arguments );
				break;

			default:
				throw new Gateway_Exception( 'Calculated price expression contains an unsupported function.' );
		}

		if ( ! is_finite( (float) $result ) ) {
			throw new Gateway_Exception( 'Calculated price expression produced a non-finite value.' );
		}

		return (float) $result;
	}

	/**
	 * Reproduce JavaScript Math.round: round half toward +Infinity.
	 *
	 * Calling floor( $value + 0.5 ) diverges for values just below .5 (e.g.
	 * 0.49999999999999994), where forming $value + 0.5 rounds up to 1.0 and
	 * over-rounds. Comparing the fractional part against 0.5 avoids that.
	 */
	private function js_math_round( float $value ): float {
		$floor    = floor( $value );
		$fraction = $value - $floor;

		return $fraction >= 0.5 ? $floor + 1.0 : $floor;
	}

	/**
	 * @throws Gateway_Exception
	 */
	private function assert_argument_count(
		string $name,
		array $arguments,
		int $minimum,
		?int $maximum = null
	): void {
		$maximum = null === $maximum ? $minimum : $maximum;
		$count   = count( $arguments );

		if ( $count < $minimum || $count > $maximum ) {
			throw new Gateway_Exception(
				sprintf(
					'The "%1$s" function has an invalid number of arguments.',
					esc_html( $name )
				)
			);
		}
	}

	private function is_truthy( float $value ): bool {
		return 0.0 !== $value && ! is_nan( $value );
	}

	private function match( string $token ): bool {
		if ( substr( $this->expression, $this->position, strlen( $token ) ) !== $token ) {
			return false;
		}

		$this->position += strlen( $token );

		return true;
	}

	/**
	 * @return false|string
	 */
	private function match_any( array $tokens ) {
		foreach ( $tokens as $token ) {
			if ( $this->match( $token ) ) {
				return $token;
			}
		}

		return false;
	}

	private function peek( int $offset = 0 ) {
		$position = $this->position + $offset;

		return $position < $this->length ? $this->expression[ $position ] : false;
	}
}
