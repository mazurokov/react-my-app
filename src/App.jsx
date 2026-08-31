import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import './styles/index.sass';

function App() {
  return (
      <BrowserRouter>
        {/* Меню навігації, яке буде відображатися на всіх сторінках */}
        <nav style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
          <Link to="/">Головна</Link>
          <Link to="/about">Про нас</Link>
        </nav>

        {/* Контейнер для виведення компонентів залежно від URL */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;