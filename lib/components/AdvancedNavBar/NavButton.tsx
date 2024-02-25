import * as React from 'react';
import { SVGMotionProps, motion } from 'framer-motion';
import { JSX } from 'react/jsx-runtime';

const Path = (
	props: JSX.IntrinsicAttributes & SVGMotionProps<SVGPathElement> & React.RefAttributes<SVGPathElement>
) => <motion.path strokeWidth='3' stroke={props.color} strokeLinecap='round' {...props} />;

/**
 * `NavButton` is a component that renders a navigational button.
 *
 * Draws a hamburger menu when the navbar is closed and draws an 'x' when open
 * Each path is a straight line on the svg, with the middle one becoming transparent when it is an x
 *
 * @param {NavButtonProps} props - The properties that define the `NavButton` component.
 *
 * @returns A `button` element with an SVG icon.
 *
 * @example
 * ```typescriptreact
 * <NavButton
 *   color="white"
 *   toggle={() => toggleOpen()}
 *   navPosition="left"
 * />
 * ```
 */
export const NavButton = (props: NavButtonProps) => (
	<button
		onClick={props.toggle}
		style={{
			border: 'none',
			cursor: 'pointer',
			position: 'absolute',
			top: '18px',
			right: '15px',
			width: '50px',
			height: '50px',
			borderRadius: '50%',
			backgroundColor: 'transparent',
			...{ [props.navPosition]: '15px' }
		}}
	>
		<svg width='23' height='23' viewBox='0 0 23 23'>
			<Path
				variants={{
					closed: { d: 'M 2 2.5 L 20 2.5' },
					open: { d: 'M 3 16.5 L 17 2.5' }
				}}
				color={props.color}
			/>
			<Path
				d='M 2 9.423 L 20 9.423'
				variants={{
					closed: { opacity: 1 },
					open: { opacity: 0 }
				}}
				transition={{ duration: 0.1 }}
				color={props.color}
			/>
			<Path
				variants={{
					closed: { d: 'M 2 16.346 L 20 16.346' },
					open: { d: 'M 3 2.5 L 17 16.346' }
				}}
				color={props.color}
			/>
		</svg>
	</button>
);
