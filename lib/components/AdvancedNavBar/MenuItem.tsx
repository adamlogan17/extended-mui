import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';

const variants = {
	open: {
		y: 0,
		opacity: 1,
		transition: {
			y: { stiffness: 1000, velocity: -100 }
		}
	},
	closed: {
		y: 50,
		opacity: 0,
		transition: {
			y: { stiffness: 1000 }
		}
	}
};

/**
 * `MenuItem` is a component that renders a single item in the navigation menu.
 *
 * @param {LabelValuePair} props - The properties that define the `MenuItem` component.
 *
 * @returns A `motion.li` component from Framer Motion that contains the menu item.
 *
 * @example
 * ```typescriptreact
 * <MenuItem text="Home" href="/home" />
 * ```
 */
export const MenuItem = (props: LabelValuePair) => {
	return (
		<a href={props.value} style={{ color: 'inherit' }}>
			<motion.li
				variants={variants}
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.95 }}
				style={{
					listStyle: 'none',
					marginBottom: '0',
					display: 'flex',
					alignItems: 'center',
					cursor: 'pointer',
					margin: '0',
					paddingLeft: '15px',
					paddingTop: '10px'
				}}
			>
				<Typography variant='h5' sx={{ textDecoration: 'none' }}>
					{props.label}
				</Typography>
			</motion.li>
		</a>
	);
};
