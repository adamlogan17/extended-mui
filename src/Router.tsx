import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route index path="/" element={<Home />} /> */}
        <Route path='*' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
