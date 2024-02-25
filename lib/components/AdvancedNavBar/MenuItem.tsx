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

export const MenuItem = (props: { text: string; href: string }) => {
	return (
		<a href={props.href} style={{ color: 'inherit' }}>
			<motion.li variants={variants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} style={{
        listStyle: 'none',
        marginBottom: '0',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        margin: '0',
        paddingLeft: '15px',
        paddingTop: '10px',
      }}>
				<Typography variant="h5" sx={{ textDecoration:'none' }}>{props.text}</Typography>
			</motion.li>
		</a>
	);
};
