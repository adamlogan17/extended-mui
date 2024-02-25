import { motion, useCycle } from 'framer-motion';
import { NavButton } from './NavButton';

import { MenuItem } from './MenuItem';
import { Paper, Theme, useTheme } from '@mui/material';

const navItemAnimation = {
	open: {
		transition: { staggerChildren: 0.07, delayChildren: 0.2 }
	},
	closed: {
		transition: { staggerChildren: 0.05, staggerDirection: -1 }
	}
};

const itemIds = [
	{
		href: '#about',
		text: 'About'
	},
	{
		href: '#projects',
		text: 'Project'
	}
];

type AdvancedNavBarProps = {
  navPosition: 'left' | 'right',
  backgroundColor?: string,
  color?: string,
  navPush?: React.Dispatch<React.SetStateAction<number>>
}

export default function AdvancedNavBar(props:AdvancedNavBarProps) {
  const theme:Theme = useTheme();
  const bgColor = props.backgroundColor ? props.backgroundColor : theme.palette.primary.main;
  const color = props.color ? props.color : theme.palette.primary.contrastText;
  
  const buttonXPosition = props.navPosition === 'left' ? 40 : 160;

  // Defines the animations for opening and closing the sidebar
  const sidebarAnimation = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at ${buttonXPosition}px 40px)`,
      transition: {
        type: 'spring',
        stiffness: 20,
        restDelta: 2
      }
    }),
    closed: {
      clipPath: `circle(30px at ${buttonXPosition}px 40px)`,
      transition: {
        delay: 0.5,
        type: 'spring',
        stiffness: 400,
        damping: 40
      }
    }
  };

	const [isOpen, toggleOpen] = useCycle(false, true);

	return (
		<Paper>
			<motion.div
				// disables the initial animation
				initial={false}
				animate={isOpen ? 'open' : 'closed'}
        // animate={'open'}
				variants={sidebarAnimation}
				style={{
          position: "fixed",
          top: 0,
          bottom: 0,
          width: "200px",
          backgroundColor: bgColor,
          color: color,
          zIndex: 1,
          ...{[props.navPosition]: 0}
        }}
			>
        {/* add absolutePositionProp that and change this to allways match the circle */}
				<NavButton 
          color={color} 
          toggle={() => {
            toggleOpen();
            if (props.navPush) {
              props.navPush(isOpen ? 75 : 200);
            }
          }} 
          navPosition={props.navPosition}/>

				<motion.ul variants={navItemAnimation} style={{
          padding: '0',
          position: 'absolute',
          top: '100px',
          margin: '0'
        }}>
					{itemIds.map((item, key) => (
						<MenuItem text={item.text} href={item.href} key={key} />
					))}
				</motion.ul>
			</motion.div>
		</Paper>
	);
}
