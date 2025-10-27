import './App.css';
import Edit from './pages/Edit';
import Home from './pages/Home';
import New from './pages/New';
import PaletteDetail from './pages/PaletteDetail';
import NavBar from './components/NavBar';
import { Routes, Route } from 'react-router';
import { useState } from 'react';

function App() {
  const [palettes, setPalettes] = useState([]);

  function addPalette(newPalette) {
    setPalettes([...palettes, newPalette]);
  }

  const routes = [
    {
      path: '/palettes',
      element: <Home palettes={palettes} />,
    },
    {
      path: '/palettes/new',
      element: <New palettes={palettes} addPalette={addPalette} />,
    },
    {
      path: '/palettes/:name',
      element: <PaletteDetail palettes={palettes} />,
    },
    {
      path: '/palettes/:id/edit',
      element: <Edit palettes={palettes} />,
    },
  ];

  return (
    <div>
      <NavBar />
      <h1>Palette Builder</h1>
      <Routes>
        {routes.map((route) => {
          return <Route path={route.path} element={route.element} />;
        })}
      </Routes>
    </div>
  );
}

export default App;
