import { useState } from 'react';
import ColorPicker from './ColorPicker';
import PaletteViewer from './PaletteViewer';

const initialState = {
  name: '',
  colors: [],
};

function PaletteForm({ addPalette }) {
  const [palette, setPalette] = useState(initialState);

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
    addPalette(palette);
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
      <input type="submit" value="Create Palette" />
    </form>
  );
}

export default PaletteForm;
