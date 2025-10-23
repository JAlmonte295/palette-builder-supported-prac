import PaletteForm from '../components/PaletteForm';

function New({ addPalette }) {
  return (
    <div>
      <h1>Create a Palette!</h1>
      <PaletteForm addPalette={addPalette} />
    </div>
  );
}

export default New;
