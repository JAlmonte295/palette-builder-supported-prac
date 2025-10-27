import { useState } from 'react';

function ColorPicker({ palette, setPalette }) {
  const [currentColor, setCurrentColor] = useState('#000000');

  const handleCurrentColorChange = (e) => {
    setCurrentColor(e.target.value);
  };

  const handleAddToPalette = (e) => {
    e.preventDefault();
    setPalette({
      ...palette,
      colors: [...palette.colors, currentColor],
    });
  };

  return (
    <div>
      <input
        type="color"
        value={currentColor}
        onChange={handleCurrentColorChange}
      />
      <button onClick={handleAddToPalette}>Add to Palette</button>
    </div>
  );
}

export default ColorPicker;
