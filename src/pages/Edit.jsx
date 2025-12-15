import { useParams } from 'react-router';
import PaletteForm from '../components/PaletteForm';
import { useEffect, useState } from 'react';

function Edit({ palettes, updatePalettes }) {
  const [currentPalette, setCurrentPalette] = useState(null);
  const { name } = useParams();

  useEffect(() => {
    const foundPalette = palettes.find((p) => p.name === name);
    setCurrentPalette(foundPalette);
  }, []);

  return (
    <div>
      <h1>Edit</h1>
      <PaletteForm
        palettes={palettes}
        currentPalette={currentPalette}
        updatePalettes={updatePalettes}
      />
    </div>
  );
}

export default Edit;
