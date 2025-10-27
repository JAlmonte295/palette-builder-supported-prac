import PaletteForm from '../components/PaletteForm';

function New({ palettes, addPalette }) {
  return (
    <div>
      <h1>Create a Palette!</h1>
      <PaletteForm palettes={palettes} addPalette={addPalette} />
    </div>
  );
}

export default New;
