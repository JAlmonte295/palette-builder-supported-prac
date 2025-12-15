import { useParams, Link } from 'react-router';
import { useState, useEffect } from 'react';
import PaletteViewer from '../components/PaletteViewer';

function PaletteDetail({ palettes, deletePalette }) {
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
      <Link to={`/palettes/${currentPalette.name}/edit`}>Edit</Link>
      <button onClick={() => deletePalette(currentPalette.name)}>Delete</button>
    </div>
  );
}

export default PaletteDetail;
