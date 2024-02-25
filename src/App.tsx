import { useState } from 'react';
import AdvancedNavBar from '../lib/components/AdvancedNavBar/AdvancedNavBar';
import Router from './Router';
import { motion } from 'framer-motion';

const itemIds = [
	{
		value: '#about',
		label: 'About'
	},
	{
		value: '#projects',
		label: 'Project'
	}
];

export default function App() {
	const [navPush, setNavPush] = useState(75);
	const navPosition = 'left';

	return (
		<>
			<AdvancedNavBar navPosition={navPosition} navPush={setNavPush} navItems={itemIds} />

			<motion.div
				animate={{ ...{ [`margin${navPosition.charAt(0).toUpperCase() + navPosition.slice(1)}`]: `${navPush}px` } }}
				transition={{
					delay: navPush === 75 ? 0.8 : 0,
					type: 'spring',
					stiffness: 400,
					damping: 40
				}}
			>
				<Router />
			</motion.div>
		</>
	);
}
