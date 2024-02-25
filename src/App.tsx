import { useState } from 'react';
import AdvancedNavBar from '../lib/components/AdvancedNavBar/AdvancedNavBar';
import Router from './Router';
import { motion } from 'framer-motion';

export default function App() {
  const [navPush, setNavPush] = useState(75);

  return (
    <>
      <AdvancedNavBar navPosition='left' navPush={setNavPush}/>
      <motion.div 
        animate={{ marginLeft: `${navPush}px`, }}
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