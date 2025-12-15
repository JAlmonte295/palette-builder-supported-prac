import './App.css';
import Edit from './pages/Edit';
import Home from './pages/Home';
import New from './pages/New';
import PaletteDetail from './pages/PaletteDetail';
import NavBar from './components/NavBar';
import { Routes, Route, useNavigate } from 'react-router';
import { useState } from 'react';

function App() {
  const [palettes, setPalettes] = useState([]);
  const navigate = useNavigate();

  function addPalette(newPalette) {
    newPalette.id = palettes.length + 1;
    setPalettes([...palettes, newPalette]);
  }

  function updatePalettes(updatedPalette) {
    const updatedPalettes = palettes.map((p) => {
      if (p.id === updatedPalette.id) {
        return updatedPalette;
      } else {
        return p;
      }
    });
    setPalettes(updatedPalettes);
  }

  function deletePalette(name) {
    setPalettes(palettes.filter((p) => p.name !== name));
    navigate('/palettes');
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
      element: (
        <PaletteDetail palettes={palettes} deletePalette={deletePalette} />
      ),
    },
    {
      path: '/palettes/:name/edit',
      element: <Edit palettes={palettes} updatePalettes={updatePalettes} />,
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
