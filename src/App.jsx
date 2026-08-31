import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import DefaultLayout from './layouts/default/DefaultLayout.jsx';
import styles from './styles/app.module.sass';


function App() {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <main className="main">
          <nav className={'container ' + styles.nav}>
            <Link to="/">Головна</Link>
            <Link to="/about">Про нас</Link>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </DefaultLayout>
    </BrowserRouter>
  );
}

export default App;