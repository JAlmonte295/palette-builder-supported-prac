import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import PaletteViewer from '../components/PaletteViewer';

function PaletteDetail({ palettes }) {
  const [currentPalette, setCurrentPalette] = useState(null);
  const { name } = useParams();

  useEffect(() => {
    console.log(name);
    const foundPalette = palettes.find((p) => p.name === name);
    console.log(foundPalette);

    setCurrentPalette(foundPalette);
  }, [name, palettes]);

  if (!currentPalette) return <h2>Palette doesn't exist</h2>;

  return (
    <div>
      <PaletteViewer palette={currentPalette} />
    </div>
  );
}

export default PaletteDetail;
