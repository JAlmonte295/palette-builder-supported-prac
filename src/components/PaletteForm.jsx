import { useState, useEffect } from 'react';
import ColorPicker from './ColorPicker';
import PaletteViewer from './PaletteViewer';
import { useNavigate } from 'react-router';

const initialState = {
  name: '',
  colors: [],
};

function PaletteForm({ palettes, addPalette, updatePalettes, currentPalette }) {
  const [palette, setPalette] = useState(initialState);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (currentPalette) {
      setPalette(currentPalette);
    }
  }, [currentPalette]);

  const handleNameChange = (e) => {
    setPalette({ ...palette, name: e.target.value });
  };

  const handleColorRemove = (value) => {
    const filteredColors = palette.colors.filter((color) => color != value);
    setPalette({
      ...palette,
      colors: filteredColors,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentPalette) {
      updatePalettes(palette);
    } else {
      // Checking for duplicate name
      for (let i = 0; i < palettes.length; i++) {
        if (
          palettes[i].name.toLowerCase() === palette.name.toLocaleLowerCase()
        ) {
          setError('Palette name already exists');
          setTimeout(() => {
            setError('');
          }, 3000);
          return;
        }
      }

      addPalette(palette);
    }

    setPalette(initialState);
    navigate('/palettes');
  };

  return (
    <form onSubmit={handleSubmit}>
      Palette Name:{' '}
      <input type="text" value={palette.name} onChange={handleNameChange} />
      <br />
      <PaletteViewer palette={palette} handleColorRemove={handleColorRemove} />
      <br />
      <ColorPicker palette={palette} setPalette={setPalette} />
      <br />
      <input
        type="submit"
        value={currentPalette ? 'Edit Palette' : 'Create Palette'}
      />
      {error ? (
        <h3 style={{ color: 'red', fontWeight: 'bold' }}>{error}</h3>
      ) : (
        ''
      )}
    </form>
  );
}

export default PaletteForm;
